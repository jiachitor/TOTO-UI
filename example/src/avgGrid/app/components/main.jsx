import AvgGrid from '../../../../../src/avgGrid.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        //设置一个区间
        var avgGridInstance1 = (
            <AvgGrid sm={4} className="am-thumbnails">
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-3.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-4.jpg" /></li>
            </AvgGrid>
        );


        //响应式
        var avgGridInstance2 = (
            <AvgGrid sm={2} md={3} lg={4} className="am-thumbnails">
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-3.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-4.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-3.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-4.jpg" /></li>
            </AvgGrid>
        );

        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <p>{avgGridInstance1}</p>
                    <p>{avgGridInstance2}</p>
                </div>
            </div>
        );
    }
};

module.exports = Main;
