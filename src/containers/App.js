import React, { Component, PropTypes } from "react";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import RootContainer from "../containers/RootContainer";

import fetchCropSet from "../actions/CropActions";

const store = configureStore(undefined);

class App extends Component {
    componentDidMount() {
        //dispatch initialization actions
        dispatch()
    }
    
    render() {
        return (
            <Provider store={store}>
                <RootContainer />
            </Provider>
        );
    }
}

export default App;
