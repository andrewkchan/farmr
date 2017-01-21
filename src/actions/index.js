import * as types from "../constants/ActionTypes";

import HelloWorld from "../modules/HelloWorld";

const helloWorld = async() => {
    console.log("trying helloWorld");
    try {
        console.log(HelloWorld);
        let helloWorldStr = await HelloWorld.helloWorld();
        console.log(helloWorldStr);
    } catch(e) {
        console.error(e);
    }
}

export function login() {
    return {
        type: types.LOGIN
    };
}

export function capture() {
    console.log("capturing");
    helloWorld();
    return {
        type: types.CAPTURE
    };
}

export function receiveCapturedImage(image) {
    console.log("Receiving captured image data");
    return {
        type: types.RECEIVE_CAPTURED_IMAGE,
        image
    };
}

export function close() {
    console.log("closing");
    return {
        type: types.CLOSE
    };
}
