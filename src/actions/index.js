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