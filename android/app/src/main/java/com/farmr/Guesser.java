package com.farmr;

import org.tensorflow.demo.Classifier;
import org.tensorflow.demo.ImageClassifier;

public class Guesser{
    public static final String MODEL_FILE = "",
                            LABEL_FILE = "",
                            INPUT_NAME,
                            OUTPUT_NAME;
    private static final int NUM_CLASSES = 1001;
    private static final int INPUT_SIZE = 224;
    private static final int IMAGE_MEAN = 117;
    private static final float IMAGE_STD = 1;
    
    private static Classifier singleton; 
    
    
    static{
        singleton = Classifier.create("AssetMangerPlaceholder",MODEL_FILE,LABEL_FILE,NUM_CLASSES,INPUT_SIZE,IMAGE_MEAN,IMAGE_STD,INPUT_NAME,OUTPUT_NAME);

    }
}