import * as types from "../constants/ActionTypes";

export default function addCrop(crop) {
    return {
        type: types.ADD_CROP,
        crop
    };
}

