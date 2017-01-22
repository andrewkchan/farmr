import * as types from "../constants/ActionTypes";

export function loadCropListFromSet() {
    return (dispatch, getState) => {
        const { crops } = getState();
        const { crops } = crops;
        const cropIds = Arrays.from(crops);
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