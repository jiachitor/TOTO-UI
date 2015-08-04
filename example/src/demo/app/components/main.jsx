
let Main = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    render() {

        let containerStyle = {
            textAlign: 'center',
            paddingTop: '200px'
        };

        let standardActions = [
            {text: 'Okay'}
        ];

        return (
            <div style={containerStyle}>

                <h1>material-ui test</h1>

                <h2>example project</h2>

            </div>
        );
    },


});

module.exports = Main;
