import * as types from "../constants/ActionTypes";

import Guesser from "../modules/Guesser";

export function capture() {
    return {
        type: types.CAPTURE
    };
}

export function receiveCapturedImage(image) {
    return (dispatch) => {
        console.log(image.uri);
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
        testGuesser();
    };
}

async function testGuesser() {
    try {
        let helloWorldStr = await Guesser.test();
        console.log(helloWorldStr);
    } catch (e) {
        console.error(e);
    }
}

export function fetchDiagnosisSuggestions() {
    return (dispatch) => {
        //fetch('')
       
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