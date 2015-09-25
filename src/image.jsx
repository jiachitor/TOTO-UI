'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import constants from './constants.jsx';

class Image extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
    }

    render() {
        let classSet = {};

        classSet[constants.CLASSES.radius] = this.props.radius;
        classSet[constants.CLASSES.round] = this.props.round;
        classSet[constants.CLASSES.circle] = this.props.circle;
        classSet[this.setClassNamespace('img-responsive')] = this.props.responsive;
        classSet[this.setClassNamespace('img-thumbnail')] = this.props.thumbnail;

        return (
            <img
                {...this.props}
                className={classNames(this.props.className, classSet)} />
        );
    }
}

Image.displayName = "ButtonCheck";

Image.propTypes = {
    src: React.PropTypes.string.isRequired,
    circle: React.PropTypes.bool,
    radius: React.PropTypes.bool,
    round: React.PropTypes.bool,
    responsive: React.PropTypes.bool,
    thumbnail: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    threshold: React.PropTypes.number,
    callback: React.PropTypes.func,
    asBgImage: React.PropTypes.bool,
};

Image.defaultProps = {
    clickHandler: function () {
    }
};

module.exports = Image;
