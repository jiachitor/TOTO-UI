'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';

class Form extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
    }

    render() {
        let classSet = this.getClassSet();

        classSet[this.prefixClass('horizontal')] = this.props.horizontal;
        classSet[this.prefixClass('inline')] = this.props.inline;

        return (
            <form
                {...this.props}
                className={classNames(classSet, this.props.className)}>
                {this.props.children}
            </form>
        );
    }
}

Form.displayName = "Form";

Form.propTypes = {
    classPrefix: React.PropTypes.string.isRequired,
    horizontal: React.PropTypes.bool,
    inline: React.PropTypes.bool,
};

Form.defaultProps = {
    classPrefix: 'form',
};

module.exports = Form;
