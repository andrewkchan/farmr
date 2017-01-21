import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Root from "../components/Root";

import * as actions from "../constants/ActionTypes";

class RootContainer extends Component {
    render() {
        return <Root { ...this.props } />;
    }
}

const mapStateToProps = function(state) {
    return state;
}

export default connect(mapStateToProps)(RootContainer);
