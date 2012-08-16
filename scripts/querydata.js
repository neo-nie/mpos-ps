
/*新建查询，弹出对话框*/
function ShowDialog(grid) {
    art.dialog({
        title:'新建查询',
        content:"<div><iframe height='425' id='selectpage' width='500' scrolling='no' frameborder='0' src='Dialog/NetworkIndicatorAnalysisSelect.html'/></div>",
        lock:true,
        padding:'5px',
        button: [
            {
                value: '保存模版',
                width:'75px',
                callback: function () {
                }
            },
            {
                value: '直接导出',
                callback: function () {
                }
            },
            {
                value: '查询',
                width:'75px',
                callback: function () {
                    var page1=$(document.getElementById('selectpage').contentWindow.document);
                    var str1=$('#select1',page1).find("option:selected").text();
//                    alert(str1);
                    $.ajax({
                        type:'post',
                        url:'http://192.168.4.234:8705/Hantele.MPOS.PS.Server/IndicatorService/Query?634777929800753460',
                        contentType:'application/json',
                        headers:{ 'Authorization':"hantele-mpos-ps"},
                        dataType:"json",
                        data:'{"EndTime":"\/Date(1326384000000+0800)\/","Interface":1,"ObjectNames":["FOSSGSN104","FOSSGSN204"],"QueryName":null,"StartTime":"\/Date(1326297600000+0800)\/","TimeSpan":60,"APN":"","BusyHours":"","GroupByType":0,"IndicatorDefineOrders":null,"IndicatorDefines":[{"Category":0,"DefineId":2,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Attach成功率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":3,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Attach请求重发率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":4,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Attach接受重发率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":5,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Attach建立时延(有线)","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":9,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Attach附着失败率（网络原因）","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":10,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活请求次数","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":11,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活成功率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":12,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活请求重发率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":16,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活失败率（网络原因）","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":17,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活请求次数(CMWAP)","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":18,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活成功率(CMWAP)","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":19,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活请求重发率(CMWAP)","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":20,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活时延(CMWAP)","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":22,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活成功率（去除用户原因）(CMWAP)","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":23,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活失败率（网络原因）(CMWAP)","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":24,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活请求次数(CMNET)","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":25,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活成功率(CMNET)","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":26,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活请求重发率(CMNET)","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":27,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活时延(CMNET)","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":29,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活成功率(去除用户原因）(CMNET)","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":30,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PDP激活失败率（网络原因）(CMNET)","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":31,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PS寻呼次数","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":32,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PS寻呼成功率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":33,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PS寻呼请求重发率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":34,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PS寻呼响应时延","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":35,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"PS寻呼无响应比例","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":1,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Attach请求次数","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":36,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Flush_ll请求次数","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":37,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Flush_ll请求成功率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":38,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Flush_ll请求时延","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":39,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Inter_SGSN RAU请求次数","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":40,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Inter_SGSN RAU成功率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":41,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Inter_SGSN RAU请求重发率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":42,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Inter_SGSN RAU接受重发率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":43,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Inter_SGSN RAU时延(有线)","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":47,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Intra_SGSN RAU成功率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":48,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Intra_SGSN RAU请求重发率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":49,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Intra_SGSN RAU接受重发率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":50,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"Intra_SGSN RAU时延(有线)","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":53,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"RAU请求次数","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":54,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"RAU成功率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":55,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"RAU请求重发率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":56,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"RAU接受重发率","SourceTable":null,"SubCategory":null,"Unit":null},{"Category":0,"DefineId":57,"DisplayName":null,"Expression":null,"FormatString":null,"IndicatorDefineExtra":null,"IndicatorInterface":null,"IsMonitor":0,"Name":"RAU时延(有线)","SourceTable":null,"SubCategory":null,"Unit":null}],"ObjectType":7,"ServiceTypeCodes":[],"TimeToTime":false,"TopN":1000}',
                        success:function (msg) {
                            var result = $.parseJSON(msg.Result); //JSON.parse(msg.Result);
                            var data = new Array();
                            for (var i in result) {
                                var item = {
                                    timeslot:result[i].BeginTime,
                                    ne:result[i].ObjectName,
                                    attreq_count:"90307",
                                    attsuc_num:"566654",
                                    attsuc_rate:"82.56%",
                                    attres_timedelay:"223",
                                    pdpactreq_count:"112343",
                                    pdpactsuc_num:"434662",
                                    pdpactsuc_rate:"98.23%",
                                    pdpact_timedelay:"45"
                                };
                                data[i] = item;
                            }
                            Creatjqgrid(grid,data);
                            for (var i = 0; i <= data.length; i++)
                                grid.addRowData(i + 1, data[i]);
//                            alert(JSON.stringify(msg.Result));
                        }
                    });
                }
            },
            {
                value: '取消',
                width:'75px'
            }
        ],

    });
}

//初始化表格数据
function Creatjqgrid(grid,mydata)
{
    grid.jqGrid({
        datatype:"local",
        height:'auto',
        shrinkToFit:false,
        autowidth:true,
        scrollrows:true,
        colNames:['时间段', '网元', '附着请求总次数', '附着成功次数', '附着成功率', '附着平均响应时延(ms)', 'PDP激活请求总次数', 'PDP激活成功次数', 'PDP激活成功率', 'PDP激活平均响应时延(ms)'],
        colModel:[
            { name:'timeslot', index:'timeslot', width:150 },
            { name:'ne', index:'ne', width:110 },
            { name:'attreq_count', index:'attreq_count', width:100 },
            { name:'attsuc_num', index:'attsuc_num', width:100 },
            { name:'attsuc_rate', index:'attsuc_rate', width:100 },
            { name:'attres_timedelay', index:'attres_timedelay', width:150 },
            { name:'pdpactreq_count', index:'pdpactreq_count', width:120},
            { name:'pdpactsuc_num', index:'pdpactsuc_num', width:120},
            { name:'pdpactsuc_rate', index:'pdpactsuc_rate', width:120},
            { name:'pdpact_timedelay', index:'pdpact_timedelay', width:180}
        ],
        gridComplete:function () {
                var ids = grid.jqGrid('getDataIDs');
                for (var i = 0; i < ids.length; i++) {
                    var cl = ids[i];
                    span_left = "<span style='float: left; line-height: 22px;'>";
                    span_right = "</span>";
                    ae = "<select class='dropselectbtn'><option>BSC</option><option>CELL</option></select>";
                    be = "<a href='javascript:' class='chart_btn' ><img src='../images/3d_bar_chart.png'></a>";
                    se = "<a href='javascript:' class='chart_btn' ><img src='../images/Analysis.png'></a>";
                    grid.jqGrid('setRowData', ids[i], {ne:span_left + mydata[i].ne + span_right + ae});
                    grid.jqGrid('setRowData', ids[i], {attsuc_rate:span_left + mydata[i].attsuc_rate + span_right + be + se});
                    grid.jqGrid('setRowData', ids[i], {pdpactsuc_rate:span_left + mydata[i].pdpactsuc_rate + span_right + be + se});
                }
        }
    });//.navGrid('#gridPager',{edit:false,add:false,del:false})
//        var mydata = [
//            { timeslot:"2012/2/2  17:00", ne:"SGSN204", attreq_count:"90307", attsuc_num:"566654", attsuc_rate:"82.56%", attres_timedelay:"223", pdpactreq_count:"112343", pdpactsuc_num:"434662", pdpactsuc_rate:"98.23%", pdpact_timedelay:"45" },
//            { timeslot:"2012/2/2  18:00", ne:"SGSN204", attreq_count:"122342", attsuc_num:"54345", attsuc_rate:"83.00%", attres_timedelay:"311", pdpactreq_count:"351335", pdpactsuc_num:"321455", pdpactsuc_rate:"99.10%", pdpact_timedelay:"62" },
//            { timeslot:"2012/2/2  17:00", ne:"SGSN204", attreq_count:"223451", attsuc_num:"246886", attsuc_rate:"90.55%", attres_timedelay:"343", pdpactreq_count:"345346", pdpactsuc_num:"278976", pdpactsuc_rate:"98.74%", pdpact_timedelay:"53" },
//            { timeslot:"2012/2/2  17:00", ne:"SGSN204", attreq_count:"102322", attsuc_num:"787545", attsuc_rate:"89.71%", attres_timedelay:"567", pdpactreq_count:"632663", pdpactsuc_num:"444099", pdpactsuc_rate:"98.62%", pdpact_timedelay:"77" },
//            { timeslot:"2012/2/2  17:00", ne:"SGSN204", attreq_count:"139983", attsuc_num:"666776", attsuc_rate:"90.16%", attres_timedelay:"764", pdpactreq_count:"456756", pdpactsuc_num:"334566", pdpactsuc_rate:"99.35%", pdpact_timedelay:"23" },
//            { timeslot:"2012/2/2  17:00", ne:"SGSN204", attreq_count:"112342", attsuc_num:"789113", attsuc_rate:"91.01%", attres_timedelay:"245", pdpactreq_count:"345565", pdpactsuc_num:"233467", pdpactsuc_rate:"98.79%", pdpact_timedelay:"89" },
//            { timeslot:"2012/2/2  17:00", ne:"SGSN204", attreq_count:"356675", attsuc_num:"3418172", attsuc_rate:"90.42%", attres_timedelay:"467", pdpactreq_count:"989785", pdpactsuc_num:"113456", pdpactsuc_rate:"98.64%", pdpact_timedelay:"64" },
//            { timeslot:"2012/2/2  17:00", ne:"SGSN204", attreq_count:"232755", attsuc_num:"3019847", attsuc_rate:"91.36%", attres_timedelay:"554", pdpactreq_count:"345354", pdpactsuc_num:"552581", pdpactsuc_rate:"99.21%", pdpact_timedelay:"67" },
//            { timeslot:"2012/2/2  17:00", ne:"SGSN204", attreq_count:"200985", attsuc_num:"9928776", attsuc_rate:"92.36%", attres_timedelay:"678", pdpactreq_count:"568214", pdpactsuc_num:"367835", pdpactsuc_rate:"99.56%", pdpact_timedelay:"44" },
//            { timeslot:"2012/2/2  17:00", ne:"SGSN204", attreq_count:"285665", attsuc_num:"1223455", attsuc_rate:"95.25%", attres_timedelay:"875", pdpactreq_count:"522676", pdpactsuc_num:"224558", pdpactsuc_rate:"98.36%", pdpact_timedelay:"31" }
//        ];
//        for (var i = 0; i <= mydata.length; i++)
//            jQuery("#list").addRowData(i + 1, mydata[i]);

}
