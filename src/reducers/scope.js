import * as types from "../constants/ActionTypes";

const initialState = {
    cropId: null, //the ID of the crop currently being examined (or what the user is about to take a picture of)
    capturedImage: null, //an object of the form { uri: (string) }
    diagnosisComplete: false, //whether or not the diagnosis has finished loading
    diagnosis: null, //object containing details of the diagnosis
    suggestions: null
};

export default function scope(state = initialState, action) {
    switch (action.type) {
        case types.EXAMINE_CROP:
            return { ...state, cropId: action.cropId };
        case types.SET_CAPTURED_IMAGE:
            return { ...state, capturedImage: action.image };
        case types.RECEIVE_DIAGNOSIS_SUGGESTIONS:
            return { ...state, suggestions: action.suggestions, diagnosisComplete: true };
        default:
            return state;
    }
}