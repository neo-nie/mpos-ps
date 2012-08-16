/**
 * Created with JetBrains PhpStorm.
 * User: NieHL
 * Date: 12-8-8
 * Time: 上午9:38
 * To change this template use File | Settings | File Templates.
 */

define(function (require, exports, module) {
    require('./app-sea.js');
    require('../../styles/Style.css');
    require('./jquery-ui-1.8.22-sea');
    require('./jquery.jqGrid-4.4.0-sea');

    var $ = require('jquery');
    var Highcharts = require('./highcharts-2.2.5-sea');
    var artDialog = require('./artDialog-5.0.0-sea');

//    $(document).ready(function () {

        $('#newquery').click(function () {
            artDialog({
                title:'新建查询',
                lock:true,
                content:"<div><iframe height='400' width='500' scrolling='no' frameborder='0' src='Dialog/NetworkFailAnalysisSetup.html'/></div>",
                okValue:'确定',
                ok:function () {},
                cancel:function () {},
                cancelValue:'取消',
                padding:'5px'
            });
        });

        $('#tabs1').tabs();
        $('#tabs2').tabs();

        $("#chart_01").height(($(window).height() - 100) / 2);
        $("#chart_02").height(($(window).height() - 100) / 2);
        $("#chart_03").height(($(window).height() - 100) / 2 - 30);

        var chart1;
        var chart2;
        var chart3;
        chart1 = new Highcharts.Chart({
            chart:{
                renderTo:'chart_01',
                zoomType:'xy'
            },
            title:{
                text:'SGSN204 Attach指标趋势'
            },
            xAxis:{
                categories:['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
                labels:{
                    rotation:-45,
                    align:'right',
                    style:{
                        fontFamily:'黑体'           //Times New Roman
                    }
                }
            },
            yAxis:[
                { // Primary yAxis
                    max:7500000,
                    title:{
                        text:''
                    }
                },
                { // Secondary yAxis
                    max:100,
                    labels:{
                        formatter:function () {
                            return this.value + '%';
                        }
                    },
                    title:{
                        text:''
                    },
                    opposite:true
                }
            ],
            plotOptions:{
                column:{
                    pointPadding:0.2,
                    borderWidth:0
                }
            },
            series:[
                {
                    name:'网页业务请求次数',
                    type:'column',
                    data:[6607446, 2307653, 3692730, 1642254, 1180672, 2369654, 1022432, 4903089, 5217094, 5969064, 5281546, 6070029, 7236828, 5997467, 5466332, 5370842, 5600334, 5986834, 6495496, 6528332, 6751160, 7217657, 7160184, 6243030]
                },
                {
                    name:'网页业务成功率',
                    yAxis:1,
                    type:'line',
                    data:[86.90, 87.01, 87.46, 85.63, 84.51, 89.12, 85.73, 90.06, 88.49, 87.54, 88.12, 87.63, 87.84, 87.72, 87.25, 86.26, 86.32, 86.93, 87.25, 86.59, 86.03, 85.67, 85.31, 85.43]
                }
            ]

        });
        chart2 = new Highcharts.Chart({
            chart:{
                renderTo:'chart_02',
                type:'column'
            },
            title:{
                text:'SGSN204 Attach故障原因归类分布'
            },
            xAxis:{
                categories:['18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
                labels:{
                    rotation:-45,
                    align:'right',
                    style:{
                        fontFamily:'黑体'           //Times New Roman
                    }
                }
            },
            yAxis:{
                allowDecimals:false,
                min:0,
                max:100,
                labels:{
                    formatter:function () {
                        return this.value + '%';
                    }
                },
                title:{
                    text:''
                }
            },
            tooltip:{
                formatter:function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '%' + '<br/>' +
                        '总数: ' + this.point.stackTotal + '%';
                }
            },
            plotOptions:{
                column:{
                    stacking:'normal'
                }
            },
            series:[
                {
                    name:'用户原因',
                    data:[45, 42, 43, 45, 42, 43, 45, 42, 43, 45, 42, 43, 45, 42, 43, 45, 42, 43, 45, 42, 43, 45, 42, 43]
                },
                {
                    name:'网络原因',
                    data:[20, 22, 25, 20, 22, 25, 20, 22, 25, 20, 22, 25, 20, 22, 25, 20, 22, 25, 20, 22, 25, 20, 22, 25]
                },
                {
                    name:'异常连续断开/掉线',
                    data:[15, 18, 13, 15, 18, 13, 15, 18, 13, 15, 18, 13, 15, 18, 13, 15, 18, 13, 15, 18, 13, 15, 18, 13]
                },
                {
                    name:'无响应',
                    data:[20, 18, 19, 20, 18, 19, 20, 18, 19, 20, 18, 19, 20, 18, 19, 20, 18, 19, 20, 18, 19, 20, 18, 19]
                }
            ]

        });
        var colors = Highcharts.getOptions().colors,
            categories = ['服务提供商原因', '网络原因', '用户原因'],
            name = 'Browser brands',
            data = [
                {
                    y:104,
                    color:colors[0],
                    drilldown:{
                        name:'服务提供商原因',
                        categories:['400 请求出现语法错误', '401 访问被拒绝', '402 必需支付方能访问', '505 WSP版本不支持'],
                        data:[45, 32, 12, 15],
                        color:colors[0]
                    }
                },
                {
                    y:477,
                    color:colors[1],
                    drilldown:{
                        name:'网络原因',
                        categories:['请求格式错误', '服务器失败', '域名不存在', '相关功能未实现', '网络无响应', '业务传输中断(上行TCP Reset)', '业务传输中断(下行TCP Reset)'],
                        data:[2, 2, 3, 4, 432, 13, 21],
                        color:colors[1]
                    }
                },
                {
                    y:402,
                    color:colors[2],
                    drilldown:{
                        name:'用户原因',
                        categories:['协议错误，非法PDU接收', '会话挂起', '会话断开', '会话被恢复', '用户忙，不能处理SDU'],
                        data:[123, 234, 22, 12, 11],
                        color:colors[2]
                    }
                }
            ];
        // Build the data arrays
        var totalData = [];
        var detailData = [];
        for (var i = 0; i < data.length; i++) {

            // add browser data
            totalData.push({
                name:categories[i],
                y:data[i].y,
                color:data[i].color
            });

            // add version data
            for (var j = 0; j < data[i].drilldown.data.length; j++) {
                var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5;
                detailData.push({
                    name:data[i].drilldown.categories[j],
                    y:data[i].drilldown.data[j],
                    color:Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }
        // Create the chart
        chart3 = new Highcharts.Chart({
            chart:{
                renderTo:'chart_03',
                type:'pie'
            },
            title:{
                text:'故障分布'
            },
            yAxis:{
                title:{
                    text:'次数'
                }
            },
            plotOptions:{
                pie:{
                    shadow:false
                }
            },
            tooltip:{
                formatter:function () {
                    return '<b>' + this.point.name + '</b>: ' + this.y;
                }
            },
            series:[
                {
                    name:'',
                    data:totalData,
                    size:'60%',
                    dataLabels:{
                        formatter:function () {
                            return this.y > 5 ? this.point.name : null;
                        },
                        color:'white',
                        distance:-30
                    }
                },
                {
                    name:'',
                    data:detailData,
                    innerSize:'60%',
                    dataLabels:{
                        formatter:function () {
                            // display only if larger than 1
                            return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y : null;
                        }
                    }
                }
            ]
        });

        //jqgrid数据初始化
        $("#list2").jqGrid({
            datatype:"local",
            height:'auto',
            shrinkToFit:false,
            autowidth:true,
            colNames:['业务类型', '流量', '用户', '速率(kbps)', '同类型业务速率', '成功率', '同类型业务成功率'],
            colModel:[
                { name:'type', index:'type', width:80 },
                { name:'flow', index:'flow', width:60 },
                { name:'user', index:'user', width:60 },
                { name:'rate', index:'rate', width:100 },
                { name:'bus_rate', index:'bus_rate', width:120 },
                { name:'suc_rate', index:'suc_rate', width:80 },
                { name:'bus_suc_rate', index:'bus_suc_rate', width:120}
            ]
        });
        var mydata2 = [
            { type:"飞信", flow:"100", user:"300", rate:"23", bus_rate:"20", suc_rate:"", bus_suc_rate:"" },
            { type:"移动手机电视", flow:"100", user:"120", rate:"53", bus_rate:"48", suc_rate:"90%", bus_suc_rate:"60%" },
            { type:"139邮箱", flow:"50", user:"26", rate:"21", bus_rate:"16", suc_rate:"88%", bus_suc_rate:"80%" },
            { type:"彩信", flow:"33", user:"80", rate:"70", bus_rate:"65", suc_rate:"88%", bus_suc_rate:"80%" },
            { type:"移动梦网", flow:"30", user:"60", rate:"33", bus_rate:"28", suc_rate:"88%", bus_suc_rate:"70%" },
            { type:"139微博", flow:"23", user:"50", rate:"33", bus_rate:"36", suc_rate:"88%", bus_suc_rate:"30%" },
            { type:"移动手机阅读", flow:"22", user:"18", rate:"33", bus_rate:"36", suc_rate:"88%", bus_suc_rate:"20%" },
            { type:"移动游戏", flow:"11", user:"9", rate:"33", bus_rate:"36", suc_rate:"88%", bus_suc_rate:"80%" },
            { type:"移动证券", flow:"5", user:"13", rate:"33", bus_rate:"36", suc_rate:"88%", bus_suc_rate:"80%" }
        ];
        for (var i = 0; i <= mydata2.length; i++)
            $("#list2").addRowData(i + 1, mydata2[i]);
        $(function () {
            $("#list2").setGridHeight(($(window).height() - 150) / 2 - 30);
//            $(window).resize(function () {
//                $("#list2").setGridWidth($(window).width() * 0.5);
//            });
        });
//    });
});
