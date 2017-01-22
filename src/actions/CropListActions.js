import * as types from "../constants/ActionTypes";

export function loadCropListFromSet() {
    return (dispatch, getState) => {
        const { crops } = getState();
        const { crops } = crops;
        dispatch(receiveCropList(SAMPLE_CROPLIST));
    }
}