import * as types from "../constants/ActionTypes";

import Guesser from "../modules/Guesser";
import cropTypes from "../constants/CropTypes";

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
        dispatch(fetchDiagnosisSuggestions(image));
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

export function fetchDiagnosisSuggestions(capturedImage) {
    return (dispatch, getState) => {
        console.log("FECHING STUFFFFFFFFFFFFFFFFFFFFFFFFFF");
        const photo = {
            uri: capturedImage.uri,
            type: 'image/jpeg',
            name: 'photo.jpg',
        };
        const UPLOAD_URL = "http://107.170.241.119:8080";
        const body = new FormData();
        body.append('file', photo);
        
        fetch(UPLOAD_URL, {
          method: 'POST',
          body
        }).then((res) => {
            console.log("response rewceived!!!!" + res);
            return res.json();
        }).then((json) => {
            const { plantClass } = json;
            console.log("CLASSIFIED PLANT CLASS:" + plantClass);
            plantClass = plantClass.toUpperCase();
            plantClass = plantClass.replace(" ", "_");
            plantClass = plantClass.replace("(", "_");
            plantClass = plantClass.replace(")", "_");
            dispatch(receiveDiagnosisSuggestions(plantClass));
        });
       
        //fetch diagnosis either from sqlite DB or internet
        //get promise.then((suggestions) => { dispatch(receiveDiagnosisSuggestions(suggestions)); });
    };
}

export function receiveDiagnosisSuggestions(plantClass) {
    return {
        type: types.RECEIVE_DIAGNOSIS_SUGGESTIONS,
        diagnosis: plantClass,
        suggestions: "Placeholder. COMING SOON: Suggestions"
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