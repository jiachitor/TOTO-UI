'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import ArticleChild from './articleChild.jsx';

class Article extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
    }

    render() {
        let classSet = this.getClassSet();

        return (
            <article
                {...this.props}
                className={classNames(classSet, this.props.className)}>
                <header className={this.prefixClass('hd')}>
                    {this.props.title ? (
                        <ArticleChild role="title">
                            {this.props.title}
                        </ArticleChild>
                    ) : null}

                    {this.props.meta ? (
                        <ArticleChild role="meta">
                            {this.props.meta}
                        </ArticleChild>
                    ) : null}
                </header>
                <div className={this.prefixClass('bd')}>
                    {this.props.lead ? (
                        <ArticleChild role="lead">
                            {this.props.lead}
                        </ArticleChild>
                    ) : null}
                    {this.props.children}
                </div>
            </article>
        );
    }
}

Article.displayName = "Article";

Article.propTypes = {
    classPrefix: React.PropTypes.string,
    title: React.PropTypes.node,
    meta: React.PropTypes.node,
    lead: React.PropTypes.node,
};

Article.defaultProps = {
    classPrefix: 'article',
};

module.exports = Article;

