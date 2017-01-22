import * as types from "../constants/ActionTypes";

export function loadCropListFromSet() {
    return (dispatch, getState) => {
        const { entities } = getState();
        const { crops } = entities;
        const cropIds = Object.keys(crops);
        console.log(cropIds);
        cropIds.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        });
        dispatch(receiveCropList(cropIds));
    }
}

export function receiveCropList(cropIds) {
    return {
        type: types.RECEIVE_CROPLIST,
        cropIds
    };
}