'use strict';
import ClassNameMixin from './minxins/ClassNameMixin';

class FormFile extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
          this[v] = ClassNameMixin[v].bind(this);
        }
    }
    render() {
        return (
            <FormGroup
                className={this.setClassNamespace('form-file')}>
                <Input type='file' standalone />
            </FormGroup>
        );
    }
}

FormFile.displayName = "FormFile";

FormFile.propTypes = {};

FormFile.defaultProps = {};

module.exports = FormFile;
