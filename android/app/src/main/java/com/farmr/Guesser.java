package com.farmr;

import org.tensorflow.demo.Classifier;
import org.tensorflow.demo.TensorFlowImageClassifier;
import java.util.List;
import android.content.res.AssetManager;
import android.graphics.Bitmap;

public class Guesser{
    public static final String MODEL_FILE = "file:///android_asset/retrained_graph.pb",
                            LABEL_FILE = "file:///android_asset/retrained_labels.pb",
                            INPUT_NAME = "input:0",
                            OUTPUT_NAME = "output:0";
    private static final int NUM_CLASSES = 38; //1001;
    private static final int INPUT_SIZE = 224;
    private static final int IMAGE_MEAN = 117;
    private static final float IMAGE_STD = 1;
    
    private static AssetManager manager = null;
    
    private static Classifier singleton; 
    
    
    private static Classifier getClassifier(AssetManager mgr){
        if (mgr != null){
            manager = mgr;
        }
        if (manager != null){
            try{
                singleton = TensorFlowImageClassifier.create(manager, MODEL_FILE, LABEL_FILE, NUM_CLASSES, INPUT_SIZE, IMAGE_MEAN, IMAGE_STD, INPUT_NAME, OUTPUT_NAME);
            } catch (Exception e){
                
            }
        }
        return singleton;
    }
    
    public static void init(AssetManager mgr){
        getClassifier(mgr);
    } 
    
    public static List<Classifier.Recognition> guessPlant(Bitmap img, AssetManager mgr){
       Classifier c = getClassifier(mgr);
       return c == null ? null : c.recognizeImage(img);
    }
    
    public static List<Classifier.Recognition> guessPlant(Bitmap img){
        return guessPlant(img,null);
        
    }
    
}