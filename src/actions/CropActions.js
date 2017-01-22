import * as types from "../constants/ActionTypes";

import { SAMPLE_CROPSET } from "../constants/CropConstants";

/*
action addCrop
Adds a new crop to the set of extant crops while creating a new unique ID for it.
Also sets the current crop to the newly added crop.
*/
export default function addCrop(crop) {
    return {
        type: types.ADD_CROP,
        crop
    };
}

/*
action updateCrop
Updates the specified cropId to the given crop object.
If you want to begin examining a crop id, use ScopeActions::examineCrop() instead.
*/
export default function updateCrop(cropId, crop) {
    return {
        type: types.UPDATE_CROP,
        cropId,
        crop
    };
}

export default function fetchCropSet() {
    return (dispatch) => {
        dispatch(receiveCropSet(SAMPLE_CROPSET));
    }
}