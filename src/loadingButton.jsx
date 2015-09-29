'use strict';

import React from 'react';
//import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import Button from './button.jsx';

class LoadingButton extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }

        this.state = {
            isLoading: false,
        };
    }

    handleClick() {
        this.setState({isLoading: true});
        this.props.clickHandler.call(this);
    }

    render() {
        let isLoading = this.state.isLoading;

        return (
            <Button
                {...this.props}
                disabled={isLoading}
                onClick={!isLoading ? this.handleClick.bind(this) : null}>
                {isLoading ? this.props.loadingText : this.props.children}
            </Button>
        );
    }
}

LoadingButton.displayName = "LoadingButton";

LoadingButton.propTypes = {
    loadingText: React.PropTypes.string.isRequired,
    clickHandler: React.PropTypes.func,
};

LoadingButton.defaultProps = {
    loadingText: 'Loading',
    clickHandler: function() {},
};

module.exports = LoadingButton;
