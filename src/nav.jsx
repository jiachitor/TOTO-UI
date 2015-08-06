'use strict';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';

class Nav extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
          this[v] = ClassNameMixin[v].bind(this);
        }
    }
    render() {
        let classes = this.getClassSet();
        let Component = this.props.componentTag;

        // set classes
        classes[this.prefixClass('pills')] = this.props.pills || this.props.topbar;
        classes[this.prefixClass('tabs')] = this.props.tabs;
        classes[this.prefixClass('justify')] = this.props.justify;

        // topbar class
        classes[this.setClassNamespace('topbar-nav')] = this.props.topbar;

        return (
            <Component
                {...this.props}
                className={classNames(classes, this.props.className)}>
                {this.props.children}
            </Component>
        );
    }
}

Nav.displayName = "Nav";

Nav.propTypes = {
    justify: React.PropTypes.bool,
    pills: React.PropTypes.bool,
    tabs: React.PropTypes.bool,
    componentTag: React.PropTypes.node.isRequired,
};

Nav.defaultProps = {
    classPrefix: 'nav',
    componentTag: 'ul',
};

module.exports = Nav;
