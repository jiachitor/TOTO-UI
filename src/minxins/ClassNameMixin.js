'use strict';
import constants from './constants';

let nsPrefix = (constants.NAMESPACE ? constants.NAMESPACE + '-' : '');

module.exports = {
    getClassSet: function(ignorePrefix) {
        let classNames = {};
        // uses `.am-` as prefix if `classPrefix` is not defined
        let prefix = nsPrefix;

        if (this.props.classPrefix) {
            let classPrefix = this.setClassNamespace();

            prefix = classPrefix + '-';

            // don't return prefix if flag set
            !ignorePrefix && (classNames[classPrefix] = true);
        }

        let amSize = this.props.amSize;
        let amStyle = this.props.amStyle;

        if (amSize) {
            classNames[prefix + amSize] = true;
        }

        if (amStyle) {
            classNames[prefix + amStyle] = true;
        }

        // add theme className for widgets
        if (this.props.theme) {
            classNames[prefix + this.props.theme] = true;
        }

        // states
        classNames[constants.CLASSES.active] = this.props.active;
        classNames[constants.CLASSES.disabled] = this.props.disabled;

        // shape
        classNames[constants.CLASSES.radius] = this.props.radius;
        classNames[constants.CLASSES.round] = this.props.round;

        // clearfix
        classNames[constants.CLASSES.cf] = this.props.cf;

        // am-divider
        if (this.props.classPrefix !== 'divider') {
            classNames[constants.CLASSES.divider] = this.props.divider;
        }

        return classNames;
    },

    // add namespace to classPrefix
    setClassNamespace: function(classPrefix) {
        let prefix = classPrefix || this.props.classPrefix || '';

        return nsPrefix + prefix;
    },

    prefixClass: function(subClass) {
        return this.setClassNamespace() + '-' + subClass;
    },
};
