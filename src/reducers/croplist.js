import * as types from "../constants/ActionTypes";
import { NEXT_PAGE, PREV_PAGE } from "../constants/CropListConstants";

const initialState = {
    cropIds: null, //array of the crop IDs in the croplist
    currentPage: 0
};

export default function croplist(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_PAGE: {
            if (action.changeType === NEXT_PAGE) {
                return { ...state, currentPage: state.currentPage + 1 };
            } else if (action.changeType === PREV_PAGE) {
                return { ...state, currentPage: state.currentPage > 0 ? state.currentPage - 1 : state.currentPage };
            }
        }
        case types.RECEIVE_CROPLIST:
            return { ...state, cropIds: action.cropIds };
    }
}