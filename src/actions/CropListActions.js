import * as types from "../constants/ActionTypes";

export function loadCropListFromSet() {
    return (dispatch, getState) => {
        const { crops } = getState();
        const { crops } = crops;
        const cropIds = Arrays.from(crops);
        dispatch(receiveCropList())
    }
}