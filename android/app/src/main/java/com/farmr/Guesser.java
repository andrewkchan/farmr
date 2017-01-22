package com.farmr;

import org.tensorflow.demo.Classifier;
import org.tensorflow.demo.TensorFlowImageClassifier;

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
        MODEL_FILE = "";
        LABEL_FILE = "";
        INPUT_NAME = "";
        OUTPUT_NAME = "";
        NUM_CLASSES = 1001;
        INPUT_SIZE = 224;
        IMAGE_MEAN = 117;
        IMAGE_STD = 1;
        try {
            singleton = TensorFlowImageClassifier.create(null,MODEL_FILE,LABEL_FILE,NUM_CLASSES,INPUT_SIZE,IMAGE_MEAN,IMAGE_STD,INPUT_NAME,OUTPUT_NAME);
        } catch (final Exception e) {
            int i = 1+1;
        }
    }
}