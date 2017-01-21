import React, { Component, PropTypes } from "react";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import RootContainer from "../containers/RootContainer";

const store = configureStore(undefined);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootContainer />
            </Provider>
        );
    }
}

export default App;
