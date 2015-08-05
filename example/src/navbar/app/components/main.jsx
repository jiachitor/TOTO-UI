import Navbar from '../../../../../src/navbar.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        var data = [
            {
                title: '呼叫',
                link: 'tel:123456789',
                icon: 'phone'
            },
            {
                title: 'GitHub',
                link: 'https://github.com/allmobilize/amazeui',
                icon: 'github'
            },
            {
                title: '下载使用',
                link: 'http://amazeui.org/getting-started',
                icon: 'download'
            },
            {
                title: 'Bug 反馈',
                link: 'https://github.com/allmobilize/amazeui/issues',
                icon: 'location-arrow'
            }
        ];

        var handleSelect = function(link, e) {
            e.preventDefault();
            console.log('你点击了：', link);
        };


        var navbar = (
            <div className="demo-1">
                <Navbar onSelect={handleSelect} data={data} />
            </div>
        );

        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <p>{navbar}</p>
                </div>
            </div>
        );
    }
};

module.exports = Main;
