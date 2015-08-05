'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';

class ArticleChild extends React.Component{

    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
    }

    render(){
        let role = this.props.role;
        let Component;
        let classes = classNames(
            this.props.className,
            this.setClassNamespace('article-' + role));

        switch (role) {
            case 'meta':
            case 'lead':
                Component = 'p';
                break;
            case 'title':
                Component = 'h1';
                break;
            default:
                Component = 'div';
        }

        return role === 'divider' ? (
            <hr
                {...this.props}
                className={classes}/>
        ) : (
            <Component
                {...this.props}
                className={classes}>
                {this.props.children}
            </Component>
        );
    }
}

ArticleChild.displayName = "ArticleChild";

ArticleChild.propTypes = {
    role: React.PropTypes.string.isRequired,
};

ArticleChild.defaultProps = {
    role: 'title',
};

module.exports = ArticleChild;
