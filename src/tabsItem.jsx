'use strict';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';

class TabsItem extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
          this[v] = ClassNameMixin[v].bind(this);
        }
    }
    render() {
        let classSet = {};

        classSet[this.setClassNamespace('tab-panel')] = true;
        classSet[this.setClassNamespace('fade')] = true;
        classSet[this.setClassNamespace('active')] = this.props.active;
        classSet[this.setClassNamespace('in')] = this.props.active;

        return (
            <div className={classNames(classSet)}>
                {this.props.children}
            </div>
        );
    }
}

TabsItem.displayName = "TabsItem";

TabsItem.propTypes = {
    title: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    eventKey: React.PropTypes.any,
    active: React.PropTypes.bool,
};

TabsItem.defaultProps = {
    classPrefix: 'tabsItem',
};

module.exports = TabsItem;
