import * as types from "../constants/ActionTypes";

/*
action addCrop

*/
export default function addCrop(crop) {
    return {
        type: types.ADD_CROP,
        crop
    };
}

