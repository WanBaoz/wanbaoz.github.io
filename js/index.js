(function () {
  var myChart = echarts.init(document.getElementById("echarts_1"));
  option = {
    legend: {
      top: "24px",
      textStyle: {
        color: "black",
      },
    },

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "0%",
      top: "15%",
      right: "0%",
      bottom: "4%",
      containLabel: true,
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: [0, 0.01],
        axisLabel: {
          textStyle: {
            color: "black",
            fontSize: 14,
          },
        },
        axisLine: {
          lineStyle: {
            color: "black",
          },
        },

        data: [
          "15万以下",
          "15-20万",
          "20-25万",
          "25-30万",
          "30-35万",
          "35-55万",
          "55-80万",
          "80万以上",
        ],
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20,
      },
    ],

    yAxis: [
      {
        name: "单位（款）",
        nameTextStyle: {
          color: "black",
          nameLocation: "start",
        },
        type: "value",
        axisLine: {
          lineStyle: {
            color: "black",
          },
        },
        axisLabel: {
          textStyle: {
            color: "black",
            fontSize: 12,
          },
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)",
          },
        },
      },
    ],
    series: [
      {
        name: "自行式B型",
        type: "bar",
        stack: "total",
        barWidth: "50%",
        itemStyle: {
          color: "#6495ED",
        },
        emphasis: {
          focus: "series",
          blurScope: "coordinateSystem",
        },
        data: [6, 12, 24, 79, 72, 129, 19, 19],
      },
      {
        name: "自行式C型",
        type: "bar",
        stack: "total",
        barWidth: "80%",
        itemStyle: {
          color: "#F2768B",
        },
        emphasis: {
          focus: "series",
          blurScope: "coordinateSystem",
        },
        data: [2, 4, 19, 32, 64, 539, 233, 142],
      },
      {
        name: "拖挂式房车",
        type: "bar",
        stack: "total",
        barWidth: "50%",
        itemStyle: {
          color: "#F6A072",
        },
        emphasis: {
          focus: "series",
          blurScope: "coordinateSystem",
        },
        data: [475, 40, 28, 39, 28, 72, 4, 3],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById("echarts_2"));

  let data_1 = [
    10.48, 12.22, 13.14, 13.89, 14.64, 15.43, 20.7, 22.28, 25.14, 27.09,
  ];
  let data_2 = [
    21.04, 19.73, 19.22, 20.93, 20.68, 28.5, 21.05, 37.09, 30.62, 35.05,
  ];
  let option = {
    // color:colors,
    tooltip: {
      show: true,
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: function (params) {
        // console.log("1222", params);
        return (
          '<span style="font-size: 14px;font-weight: bold;font-family: SourceHanSansCN;">' +
          params[0].seriesName +
          "</span>" +
          "<br/>" +
          params[0].marker +
          '<span style="color:' +
          params[0].color +
          ';font-size: 16px;font-weight: bold;font-family: SourceHanSansCN;">' +
          "\n" +
          params[0].name +
          " : " +
          params[0].value +
          "</span>"
        );
      },
    },
    legend: {
      textStyle: {
        color: "black",
      },
      left: "36%", //图例距离左边的距离
      top: "5%",
      selectedMode: false,
      itemWidth: 35,
      itemHeight: 15, //图例宽高
      itemGap: 20, //图例的间隔
    },
    grid: [
      // 左
      {
        top: "15%",
        bottom: "2%",
        left: "2%",
        width: "44%",
        height: "70%",
        containLabel: true,
      },
      // 中
      {
        top: "15%",
        bottom: "2%",
        left: "53%",
        // left: "center",
        width: "50%",
        height: "66%",
      },
      // 右
      {
        top: "15%",
        bottom: "2%",
        right: "2%",
        width: "44%",
        height: "70%",
        containLabel: true,
      },
    ],
    xAxis: [
      {
        type: "value",
        inverse: true,
        show: true,
        axisLabel: {
          color: "black",
          fontSize: "14",
          textStyle: {
            fontFamily: "BoldCondensed",
          },
        },
        splitLine: {
          // 网格线
          show: true,
          lineStyle: {
            color: ["rgba(22, 39, 60, 0.6)"],
            width: 1,
            // type: "dotted",
          },
        },
        axisTick: {
          //y轴刻度线
          show: false,
        },
        axisLine: {
          //轴线
          // show: false,
          lineStyle: {
            color: "rgba(25, 35, 57,0.2)",
          },
        },
      },
      {
        gridIndex: 1,
        show: true,
        axisLabel: {
          color: "black",
          fontSize: "26",
          fontWeight: "bold",
          textStyle: {
            fontFamily: "BoldCondensed",
          },
        },
        splitLine: {
          // 网格线
          show: false,
          lineStyle: {
            color: ["rgba(22, 39, 60, 0.6)"],
            width: 1,
            // type: "dotted",
          },
        },
        axisTick: {
          //y轴刻度线
          show: false,
        },
        axisLine: {
          //轴线
          show: false,
        },
      },
      {
        gridIndex: 2,
        type: "value",
        show: true,
        axisLabel: {
          color: "black",
          fontSize: "14",
          textStyle: {
            fontFamily: "BoldCondensed",
          },
        },
        splitLine: {
          // 网格线
          show: true,
          lineStyle: {
            color: ["rgba(22, 39, 60, 0.6)"],
            width: 1,
            // type: "dotted",
          },
        },
        axisTick: {
          //y轴刻度线
          show: false,
        },
        axisLine: {
          //轴线
          // show: false,
          lineStyle: {
            color: "rgba(25, 35, 57,0.2)",
          },
        },
      },
    ],
    yAxis: [
      {
        axisLabel: {
          show: false,
        },
        align: "center",
        type: "category",
        axisTick: {
          //y轴刻度线
          show: false,
        },
        data: [
          "重庆",
          "武汉",
          "南京",
          "天津",
          "广州",
          "杭州",
          "厦门",
          "上海",
          "北京",
          "深圳",
        ],
        axisLine: {
          //轴线
          // show: false,
          lineStyle: {
            color: "rgba(25, 35, 57,0.2)",
          },
        },
      },
      {
        axisLabel: {
          color: "black",
          fontSize: "16",
          fontWeight: "bold",
          textStyle: {
            fontFamily: "BoldCondensed",
          },
        },
        gridIndex: 1,
        position: "center",
        axisLine: {
          show: false,
        },
        type: "category",
        inverse: false,
        axisTick: {
          //y轴刻度线
          show: false,
        },
        data: [
          "重庆",
          "武汉",
          "南京",
          "天津",
          "广州",
          "杭州",
          "厦门",
          "上海",
          "北京",
          "深圳",
        ], //使用空格使文字居中
      },
      {
        gridIndex: 2,
        position: "left",
        axisLabel: {
          show: false,
        },
        type: "category",
        inverse: false,
        axisTick: {
          //y轴刻度线
          show: false,
        },
        axisLine: {
          //轴线
          // show: false,
          lineStyle: {
            color: "rgba(25, 35, 57,0.2)",
          },
        },
        data: [
          "重庆",
          "武汉",
          "南京",
          "天津",
          "广州",
          "杭州",
          "厦门",
          "上海",
          "北京",
          "深圳",
        ],
      },
    ],
    series: [
      {
        type: "bar",
        barWidth: 15,
        name: "房价收入比",
        itemStyle: {
          color: "#F2768B",
        },
        data: data_1,
      },
      {
        type: "bar",
        barWidth: 15,
        xAxisIndex: 2,
        yAxisIndex: 2,
        name: "房租收入比",
        itemStyle: {
          color: "#F7A172",
        },
        data: data_2,
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById("echarts_3"));
  option = {
    // legend: {
    //   top: "24px",
    //   textStyle: {
    //     color: "white",
    //   },
    // },

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },

    legend: {
      top: "24px",
      textStyle: {
        color: "black",
      },
      data: ["市场规模", "房车保有量"],
    },

    grid: {
      left: "1%",
      top: "18%",
      right: "6%",
      bottom: "4%",
      containLabel: true,
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: [0, 0.01],
        axisLabel: {
          interval: "auto",
          rotate: 45, //设置倾斜角度，数值 可设置 正负 两种，
          textStyle: {
            color: "black",
            fontSize: 12,
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0,0,0,0.2)",
          },
        },

        data: [
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
        ],
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20,
      },
    ],

    yAxis: [
      {
        name: "(亿元)",
        nameTextStyle: {
          color: "black",
          nameLocation: "start",
        },
        type: "value",
        axisTick: { show: false },
        splitNumber: 4,
        axisLine: {
          lineStyle: {
            color: "rgba(0,0,0,0.2)",
          },
        },
        axisLabel: {
          textStyle: {
            color: "black",
            fontSize: 12,
          },
        },

        splitLine: {
          lineStyle: {
            color: "rgba(0,0,0,0.2)",
          },
        },
      },
      {
        name: "(千辆)",
        nameTextStyle: {
          color: "black",
          nameLocation: "start",
        },
        type: "value",
        axisTick: { show: false },
        splitNumber: 4,
        axisLine: {
          lineStyle: {
            color: "rgba(0,0,0,0.2)",
          },
        },
        axisLabel: {
          textStyle: {
            color: "black",
            fontSize: 12,
          },
        },

        splitLine: {
          lineStyle: {
            color: "rgba(0,0,0,0.2)",
          },
        },
      },
    ],
    series: [
      {
        name: "市场规模",
        type: "bar",
        barWidth: "75%",
        tooltip: {
          valueFormatter: function (value) {
            return value + " 亿元";
          },
        },
        itemStyle: {
          normal: {
            show: true,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#F2768B",
              },
              {
                offset: 1,
                color: "#F6A072",
              },
            ]),
            barBorderRadius: 0,
            borderWidth: 0,
          },
        },
        data: [21.97, 31.76, 65.84, 69.2, 99.75, 147.3, 208.26, 271.17, 334],
      },
      {
        name: "房车保有量",
        type: "line",
        symbol: "circle",
        symbolSize: 5,
        tooltip: {
          valueFormatter: function (value) {
            return value + " 千辆";
          },
        },
        itemStyle: {
          normal: {
            show: true,
            color: "#6495ED",
            borderWidth: 2,
            itemStyle: {
              normal: {
                color: "#6495ED", //标志颜色
              },
            },
          },
        },
        data: [21.2, 30, 48.6, 69.4, 100.5, 148.8, 218.2, 288.7, 359.2],
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById("echarts_5"));
  option = {
    legend: {
      orient: "horizontal",
      top: "2%",
      left: "center",
      textStyle: {
        color: "black",
      },
      selectedMode: false,
    },
    color: ["#6495ED", "#8ACDE0", "#A8E682", "#F2768B", "#F6A072"],
    tooltip: {
      trigger: "item",
      formatter: "通勤时间 : </br>{b} : " + "{d}%",
    },

    calculable: true,

    series: [
      {
        type: "pie",
        radius: ["50%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 6,
          borderColor: "rgb(255, 255, 255, 0)",
          borderWidth: 10,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 16.05, name: "10分钟以内" },
          { value: 29.7, name: "10-20分钟" },
          { value: 34.88, name: "20-40分钟" },
          { value: 12.93, name: "40-60分钟" },
          { value: 6.42, name: "1-1.5小时" },
          { value: 0.03, name: "1.5小时以上" },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

(function () {
  var myChart = echarts.init(document.getElementById("echarts_4"));
  option = {
    legend: {
      top: "5%",
      selectedMode: false,
    },
    color: ["#6495ED", "#8ACDE0", "#A8E682", "#F2768B", "#F6A072"],
    tooltip: {
      trigger: "item",
      formatter: "2021年房车销售类型占比 : </br>{b} : " + "{d}%",
    },
    series: [
      {
        name: "2021年房车销售类型占比",
        type: "pie",
        radius: "60%",
        itemStyle: {
          borderRadius: 6,
          borderColor: "rgb(255, 255, 255, 0)",
          borderWidth: 10,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        data: [
          { value: 1, name: "自行式A型" },
          { value: 22, name: "自行式B型" },
          { value: 56, name: "自行式C型" },
          { value: 21, name: "拖挂式房车" },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

(function () {
  var myChart = echarts.init(document.getElementById("echarts_6"));
  option = {
    //整个图片的背景色设置为白色
    tooltip: {
      trigger: "item",
      formatter: function (a) {
        var str = "项目:";
        return str.concat(
          a.name + "<br>" + "费用:",
          a.value + "元" + "<br>" + "占比:",
          ((a.value / 32945) * 100).toFixed(2) + "%"
        );
      },
    },
    series: [
      {
        type: "treemap",
        center: ["50%", "50%"],
        label: {
          show: true,
          //这里的重点在于设置百分比
          position: "inside",
          color: "black",
          fontSize: 16,
        },
        color: [
          "#2D6393",
          "#3E7EAC",
          "#6AA9CD",
          "#8DCBE6",
          "#B7E7F6",
          "#C9F1F9",
          "#D5F8FC",
          "#E4FDFE",
          "#F1FEFD",
          "#C9F1F9",
          "#D5F8FC",
          "#E4FDFE",
          "#C9F1F9",
          "#D5F8FC",
          "#E4FDFE",
          "#C9F1F9",
          "#D5F8FC",
          "#E4FDFE",
          "#C9F1F9",
          "#D5F8FC",
          "#E4FDFE",
        ],
        data: [
          {
            name: "改装费用",
            value: 32945,
            children: [
              {
                name: "木工",
                value: 9000,
              },
              {
                name: "电工",
                value: 400,
              },
              {
                name: "水路",
                value: 270,
              },
              {
                name: "板材费",
                value: 7334,
              },
              {
                name: "橡木板",
                value: 1840,
              },
              {
                name: "榻榻米升降柱",
                value: 338,
              },
              {
                name: "复合木地板",
                value: 1100,
              },
              {
                name: "吊顶",
                value: 1100,
              },
              {
                name: "导游椅",
                value: 460,
              },
              {
                name: "顶棚",
                value: 763,
              },
              {
                name: "床纱",
                value: 756,
              },
              {
                name: "床垫",
                value: 445,
              },
              {
                name: "空调",
                value: 2969,
              },
              {
                name: "洗衣机",
                value: 1799,
              },
              {
                name: "热水器",
                value: 387,
              },
              {
                name: "油烟机",
                value: 1320,
              },
              {
                name: "燃气灶",
                value: 638,
              },
              {
                name: "水盆",
                value: 352,
              },
              {
                name: "浴室底座",
                value: 290,
              },
              {
                name: "窗帘",
                value: 265,
              },
              {
                name: "杂费",
                value: 1511,
              },
            ],
          },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
