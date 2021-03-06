'use strict';

import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Screenshot from './screenshot';

class StateFail extends Component {
    static propTypes = {
        expectedImg: PropTypes.object.isRequired,
        actualImg: PropTypes.object.isRequired,
        diffImg: PropTypes.object.isRequired,
        showOnlyDiff: PropTypes.bool.isRequired
    }

    render() {
        const {expectedImg, actualImg, diffImg} = this.props;

        return (
            <Fragment>
                {this._drawExpectedAndActual(expectedImg, actualImg)}
                {this._drawImageBox('Diff', diffImg)}
            </Fragment>
        );
    }

    _drawExpectedAndActual(expectedImg, actualImg) {
        if (this.props.showOnlyDiff) {
            return null;
        }

        return (
            <Fragment>
                {this._drawImageBox('Expected', expectedImg)}
                {this._drawImageBox('Actual', actualImg)}
            </Fragment>
        );
    }

    _drawImageBox(label, image) {
        return (
            <div className="image-box__image">
                <div className="image-box__title">{label}</div>
                <Screenshot image={image}/>
            </div>
        );
    }
}

export default connect(({view: {showOnlyDiff}}) => ({showOnlyDiff}))(StateFail);
