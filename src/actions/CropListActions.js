import * as types from "../constants/ActionTypes";

const SAMPLE_CROPSET = {
    
}

export function fetchCropList() {
    return (dispatch) => {
        dispatch(receiveCropList(SAMPLE_CROPLIST));
    }
}