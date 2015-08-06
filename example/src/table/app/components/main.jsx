import Table from '../../../../../src/table.jsx';


class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        * <Table> 组件有以下属性：

         bordered: bool 是否添加外部边框；
         hover: bool 是否显示 hover 效果；
         radius: bool 是否使用圆角边框；
         striped: bool 是否使用斑马纹样式；
         compact: bool 是否紧凑显示；
         responsive: bool 是否显示为响应式表格（可左右滑动）；
        *
        *
        * */

        //基本样式
        var tabelInstance1 = (
            <Table>
                <thead>
                <tr>
                    <th>网站名称</th>
                    <th>网址</th>
                    <th>创建时间</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Amaze UI</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                <tr className="am-active">
                    <td>Amaze UI(Active)</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                <tr>
                    <td>Amaze UI</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                </tbody>
            </Table>
        );


        /*-------------------------------------------------------------*/
        //属性叠加
        var tabelInstance2 = (
            <Table bordered striped hover radius>
                <thead>
                <tr>
                    <th>网站名称</th>
                    <th>网址</th>
                    <th>创建时间</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Amaze UI</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                <tr className="am-active">
                    <td>Amaze UI(Active)</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                <tr>
                    <td>Amaze UI</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                <tr>
                    <td>Amaze UI</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                </tbody>
            </Table>
        );



         /*------------------------------------------------------------*/
        //紧凑型表格
        var tabelInstance3 = (
            <Table bordered compact striped>
                <thead>
                <tr>
                    <th>网站名称</th>
                    <th>网址</th>
                    <th>创建时间</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Amaze UI</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                <tr className="am-active">
                    <td>Amaze UI(Active)</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                <tr>
                    <td>Amaze UI</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                </tbody>
            </Table>
        );


        /*------------------------------------------------------------*/
        //响应式
        var tabelInstance4 = (
            <Table bordered striped responsive>
                <thead>
                <tr>
                    <th>网站名称</th>
                    <th>网址</th>
                    <th>创建时间</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Amaze UI</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                <tr className="active">
                    <td>Amaze UI(Active)</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                <tr>
                    <td>Amaze UI</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                <tr>
                    <td>Amaze UI</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                </tbody>
            </Table>
        );



        /*------------------------------------------------------------*/
        //JSON to Table
        var data5 = [{"id":"24213414","title":"江湖民谣双专场","category":"小型现场","loc":"北京","begin":"2015-05-06 21:00:00", "disabled": 1},{"id":"24213108","title":"读火乐队 江湖专场演出","category":"小型现场","loc":"北京","begin":"2015-05-01 14:00:00"},{"id":"24213010","title":"音乐学习公开课活动","category":"小型现场","loc":"北京","begin":"2015-04-28 10:00:00"},{"id":"24211259","title":"邓丽君金曲盛燕专场演唱会","category":"演唱会","loc":"北京","begin":"2015-05-22 19:30:00"},{"id":"24211196","title":"伍佰2015北京演唱会","category":"演唱会","loc":"北京","begin":"2015-06-20 19:30:00", "highlight": 1}];

        var EventRow5 = React.createClass({
            render: function() {
                var event = this.props.event;
                var className = event.highlight ? 'am-active' :
                    event.disabled ? 'am-disabled' : '';

                return (
                    <tr className={className}>
                        <td>{event.title}</td>
                        <td>{event.category}</td>
                        <td>{event.loc}</td>
                        <td>{event.begin}</td>
                    </tr>
                );
            }
        });

        var EventsTable5 = React.createClass({
            render: function() {
                return (
                    <Table {...this.props}>
                        <thead>
                        <tr>
                            <th>名称</th>
                            <th>类型</th>
                            <th>地点</th>
                            <th>开始时间</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.events.map(function(event) {
                            return (<EventRow5 key={event.id} event={event} />);
                        })}
                        </tbody>
                    </Table>
                );
            }
        });

        var tabelInstance5 = (
            <EventsTable5 events={data5} responsive bordered />
        );




        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <p>{tabelInstance1}</p>
                    <p>{tabelInstance2}</p>
                    <p>{tabelInstance3}</p>
                    <p>{tabelInstance4}</p>
                    <p>{tabelInstance5}</p>
                </div>
            </div>
        );
    }
};

module.exports = Main;
