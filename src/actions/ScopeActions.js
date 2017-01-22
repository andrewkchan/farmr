import * as types from "../constants/ActionTypes";

export function capture() {
    return {
        type: types.CAPTURE
    };
}

export function receiveCapturedImage(image) {
    return (dispatch) => {
        dispatch(processCapturedImage(image));
        dispatch(setCapturedImage(image));
    };
}

export function setCapturedImage(image) {
    return {
        type: types.SET_CAPTURED_IMAGE,
        image
    };
}

export function processCapturedImage(image) {
    return (dispatch, getState) => {
        //do native tensorflow stuff...
    };
}

export function fetchDiagnosisSuggestions() {
    return (dispatch) => {
        console.log("should be fetching diagnosis right now");
        //fetch diagnosis either from sqlite DB or internet
        //get promise.then((suggestions) => { dispatch(receiveDiagnosisSuggestions(suggestions)); });
    };
}

export function receiveDiagnosisSuggestions(suggestions) {
    return {
        type: types.RECEIVE_DIAGNOSIS_SUGGESTIONS,
        suggestions
    };
}

/*
action examineCrop
Set the currently examined crop ID to the given cropId.
*/
export function examineCrop(cropId) {
    return {
        type: types.EXAMINE_CROP,
        cropId
    };
}