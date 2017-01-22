import * as types from "../constants/ActionTypes";

const SAMPLE_CROPSET = {
    1: {
        name: "Bob",
        species: "Watermelon plant",
        health: 58
    },
    2: {
        name: "Alex",
        species: "Watermelon plant",
        health: 40
    },
    3: {
        name: "Nitin",
        species: "Onion plant",
        health: 6
    }
}

export function fetchCropList() {
    return (dispatch) => {
        dispatch(receiveCropList(SAMPLE_CROPLIST));
    }
}