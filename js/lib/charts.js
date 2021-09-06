$(document).ready(function () {


  var options = {
    series: [42, 47, 52, 58, 65],
    chart: {
      width: 380,
      type: "polarArea",
      toolbar:{
        show:true
       },
    },
    labels: ["Brand A", "Brand B", "Brand C", "Brand D", "Brand E"],
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: "bottom",
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: "light",
        shadeIntensity: 0.6,
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#repairChart1"), options);
  chart.render();

  var options = {
    series: [42, 47, 52, 58, 65],
    chart: {
      width: 380,
      type: "polarArea",
      toolbar:{
        show:true
       },
    },
    labels: ["Device A", "Device B", "Device C", "Device D", "Device E"],
    colors: ["#41bc85", "#58D49D" ,"#6BE7B0" ,"#A2EBCA" ,"#A8EFCF"],
    color:[],
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: "bottom",
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      monochrome: {
        // enabled: true,
        shadeTo: "light",
        shadeIntensity: 0.6,
      },
    },
  };

  var chart1 = new ApexCharts(document.querySelector("#repairChart2"), options);
  chart1.render();

  // // sale report pie charts
  var chart = new ApexCharts(document.querySelector("#saleReportPieChart1"), options);
  chart.render();


  var saleChart1 = new ApexCharts(document.querySelector("#saleReportPieChart1"), options);
var saleChart2 = new ApexCharts(document.querySelector("#saleReportPieChart2"), options);
var saleChart3 = new ApexCharts(document.querySelector("#saleReportPieChart3"), options);
var saleChart4 = new ApexCharts(document.querySelector("#saleReportPieChart4"), options);
var saleChart5 = new ApexCharts(document.querySelector("#saleReportPieChart5"), options);
saleChart1.render();
saleChart2.render();
saleChart3.render();
saleChart4.render();
saleChart5.render();

  var options = {
    series: [{
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  }],
    chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: 'top',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  colors: ["#41bc85"],
  title: {
    // text: 'Monthly Inflation in Argentina, 2002',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: '#444'
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#column_chart"), options);
  chart.render();



  var saleChart1 = new ApexCharts(document.querySelector("#column_chart1"), options);
  var saleChart2 = new ApexCharts(document.querySelector("#column_chart2"), options);
  var saleChart3 = new ApexCharts(document.querySelector("#column_chart3"), options);
  var saleChart4 = new ApexCharts(document.querySelector("#column_chart4"), options);
  var saleChart5 = new ApexCharts(document.querySelector("#column_chart5"), options);
  saleChart1.render();
  saleChart2.render();
  saleChart3.render();
  saleChart4.render();
  saleChart5.render();



  //   repair chart

  var options = {
    series: [{
    name: 'Device model',
    data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
  }],
    chart: {
    height: 350,
    type: 'line',
 
  },
 
  stroke: {
    width: 7,
    curve: 'smooth'
  },
  xaxis: {
   show:false
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      gradientToColors: [ '#41bc85'],
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    },
  },
  markers: {
    size: 4,
    colors: ["#FFA41B"],
    strokeColors: "#fff",
    strokeWidth: 2,
    hover: {
      size: 7,
    }
  },
  
  };

  var chart = new ApexCharts(document.querySelector("#repairChart3"), options);
  chart.render();
  
// sale report charts
var saleChart1 = new ApexCharts(document.querySelector("#saleReportChart1"), options);
var saleChart2 = new ApexCharts(document.querySelector("#saleReportChart2"), options);
var saleChart3 = new ApexCharts(document.querySelector("#saleReportChart3"), options);
var saleChart4 = new ApexCharts(document.querySelector("#saleReportChart4"), options);
var saleChart5 = new ApexCharts(document.querySelector("#saleReportChart5"), options);
saleChart1.render();
saleChart2.render();
saleChart3.render();
saleChart4.render();
saleChart5.render();
  // chart 1
  var options = {
    annotations: {
      xaxis: [
        {
          x: new Date("28 Apr 2014").getTime(),
          borderColor: "#bfc5cc",
          fillColor: "#bfc5cc",
          opacity: 1,
          strokeDashArray: 0,
          label: {
            borderColor: "#bfc5cc",
            style: {
              color: "#fff",
              fontSize: "12px",
              lineHeight: "12px",
              background: "#bfc5cc",
            },
            offsetX: -57,
            offsetY: 30,
            orientation: "horizontal",
            text: "🐂 BOT 2",
            textAnchor: "left",
          },
        },
      ],
    },
    chart: {
      animations: {
        enabled: true,
      },
      fontFamily: "Roboto, sans-serif",
      zoom: false,
      // zoom: {
      //     autoScaleYaxis: true,
      //     enabed: true,
      //     type: 'x',
      // },
      height: 350,
      type: "area",
      id: "ctxinternalchart",
      toolbar: {
        tools: {
          selection: true,
          zoom: true,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          download: false,
        },
      },
    },
    colors: ["#41BC85"],
    stroke: {
      width: [2, 1],
    },
    fill: {
      // type: 'gradient',
      // gradient: {
      //     shadeIntensity: 1,
      //     opacityFrom: 0.7,
      //     opacityTo: 1,
      //     stops: [0, 90, 100]
      // }
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      padding: {
        right: 0,
        left: 0,
      },
      borderColor: "#f9f9f9",
    },
    series: [
      {
        data: [
          "193.15",
          "194.44",
          "197.50",
          "196.91",
          "198.01",
          "196.36",
          "196.28",
          "196.64",
          "196.66",
          "200.49",
          "201.21",
          "201.87",
          "204.78",
          "204.47",
          "202.61",
          "201.64",
          "201.95",
          "198.06",
          "207.78",
          "206.43",
          "209.00",
          "205.77",
          "200.22",
          "200.26",
          "198.11",
          "195.38",
          "184.02",
          "186.93",
          "189.17",
          "188.34",
          "187.27",
          "181.42",
          "184.89",
          "181.11",
          "178.02",
          "177.33",
          "176.60",
          "175.76",
          "176.67",
          "173.47",
          "171.71",
          "178.00",
          "180.87",
          "183.53",
          "188.41",
          "190.82",
          "193.03",
          "192.41",
          "192.37",
          "190.98",
          "192.12",
          "196.63",
          "196.06",
          "197.64",
          "196.96",
          "196.76",
          "193.78",
          "197.97",
          "197.91",
          "196.11",
          "199.71",
          "200.88",
          "202.54",
          "202.36",
          "198.19",
          "199.40",
          "201.37",
          "199.90",
          "201.44",
          "203.33",
          "202.63",
          "201.49",
          "203.78",
          "200.74",
          "205.32",
          "206.93",
          "206.76",
          "205.13",
          "205.84",
          "207.76",
          "206.87",
          "211.09",
          "206.52",
          "202.15",
          "191.57",
          "195.20",
          "197.22",
          "201.57",
          "199.91",
          "199.41",
          "207.85",
          "201.66",
          "200.66",
          "205.39",
          "209.22",
          "209.23",
          "211.50",
          "211.32",
          "201.56",
          "205.38",
          "203.07",
          "204.43",
          "207.89",
          "207.62",
          "204.60",
          "208.07",
          "212.14",
          "212.12",
          "213.02",
          "215.54",
          "222.39",
          "221.89",
          "217.58",
          "218.72",
          "219.52",
          "221.58",
          "219.78",
          "216.56",
          "217.55",
          "216.51",
          "219.85",
          "218.71",
          "217.65",
          "222.77",
          "223.39",
          "217.79",
          "219.64",
          "225.79",
          "225.84",
          "223.20",
          "225.81",
          "228.86",
          "234.95",
          "234.61",
          "234.06",
          "233.12",
          "234.02",
          "235.14",
          "239.22",
          "238.68",
          "241.88",
          "242.28",
          "245.26",
          "247.72",
          "241.99",
          "241.96",
          "247.43",
          "254.45",
          "256.12",
          "255.75",
          "255.86",
          "258.81",
          "259.52",
          "261.57",
          "261.33",
          "263.84",
          "262.01",
          "265.12",
          "266.46",
          "265.65",
          "262.56",
          "261.38",
          "261.15",
          "265.73",
          "263.66",
          "267.20",
          "266.61",
          "263.53",
          "258.83",
          "261.11",
          "264.94",
          "270.06",
          "266.28",
          "267.84",
          "270.12",
          "270.81",
          "274.49",
          "279.19",
          "279.74",
          "279.07",
          "279.35",
          "278.77",
          "283.32",
          "283.59",
          "289.21",
          "289.10",
          "290.82",
          "292.95",
          "299.63",
          "296.72",
          "299.08",
          "297.67",
          "302.46",
          "308.89",
          "309.59",
          "316.20",
          "311.93",
          "310.59",
          "314.48",
          "317.97",
          "315.81",
          "316.94",
          "318.46",
          "317.55",
          "308.21",
          "316.93",
          "323.56",
          "323.09",
          "308.77",
          "307.92",
          "318.08",
          "320.68",
          "324.43",
          "320.03",
          "321.55",
          "319.61",
          "327.20",
          "324.87",
          "324.95",
          "319.00",
          "323.62",
          "320.30",
          "313.05",
          "298.18",
          "288.08",
          "292.65",
          "273.52",
          "273.36",
          "298.81",
          "289.32",
          "302.74",
          "292.92",
          "289.03",
          "266.17",
          "285.34",
          "275.43",
          "248.23",
          "277.97",
          "242.21",
          "252.86",
          "246.67",
          "244.78",
          "229.24",
          "224.37",
          "244.06",
        ],
      },
    ],
    title: {
      text: undefined,
      align: "left",
      offsetX: -6,
    },
    tooltip: {
      x: {
        format: "MMM d yyyy",
      },
      y: {
        formatter: function (val) {
          return val.toFixed(2);
        },
        title: {
          formatter: (seriesName) => "USD",
        },
      },
    },
    labels: [
      "2019-04-03 16:00:00",
      "2019-04-04 16:00:00",
      "2019-04-05 16:00:00",
      "2019-04-08 16:00:00",
      "2019-04-09 16:00:00",
      "2019-04-10 16:00:00",
      "2019-04-11 16:00:00",
      "2019-04-12 16:00:00",
      "2019-04-15 16:00:00",
      "2019-04-16 16:00:00",
      "2019-04-17 16:00:00",
      "2019-04-18 16:00:00",
      "2019-04-22 16:00:00",
      "2019-04-23 16:00:00",
      "2019-04-24 16:00:00",
      "2019-04-25 16:00:00",
      "2019-04-26 16:00:00",
      "2019-04-29 16:00:00",
      "2019-04-30 16:00:00",
      "2019-05-01 16:00:00",
      "2019-05-02 16:00:00",
      "2019-05-03 16:00:00",
      "2019-05-06 16:00:00",
      "2019-05-07 16:00:00",
      "2019-05-08 16:00:00",
      "2019-05-09 16:00:00",
      "2019-05-10 16:00:00",
      "2019-05-13 16:00:00",
      "2019-05-14 16:00:00",
      "2019-05-15 16:00:00",
      "2019-05-16 16:00:00",
      "2019-05-17 16:00:00",
      "2019-05-20 16:00:00",
      "2019-05-21 16:00:00",
      "2019-05-22 16:00:00",
      "2019-05-23 16:00:00",
      "2019-05-24 16:00:00",
      "2019-05-28 16:00:00",
      "2019-05-29 16:00:00",
      "2019-05-30 16:00:00",
      "2019-05-31 16:00:00",
      "2019-06-03 16:00:00",
      "2019-06-04 16:00:00",
      "2019-06-05 16:00:00",
      "2019-06-06 16:00:00",
      "2019-06-07 16:00:00",
      "2019-06-10 16:00:00",
      "2019-06-11 16:00:00",
      "2019-06-12 16:00:00",
      "2019-06-13 16:00:00",
      "2019-06-14 16:00:00",
      "2019-06-17 16:00:00",
      "2019-06-18 16:00:00",
      "2019-06-19 16:00:00",
      "2019-06-20 16:00:00",
      "2019-06-21 16:00:00",
      "2019-06-24 16:00:00",
      "2019-06-25 16:00:00",
      "2019-06-26 16:00:00",
      "2019-06-27 16:00:00",
      "2019-06-28 16:00:00",
      "2019-07-01 16:00:00",
      "2019-07-02 16:00:00",
      "2019-07-03 16:00:00",
      "2019-07-05 16:00:00",
      "2019-07-08 16:00:00",
      "2019-07-09 16:00:00",
      "2019-07-10 16:00:00",
      "2019-07-11 16:00:00",
      "2019-07-12 16:00:00",
      "2019-07-15 16:00:00",
      "2019-07-16 16:00:00",
      "2019-07-17 16:00:00",
      "2019-07-18 16:00:00",
      "2019-07-19 16:00:00",
      "2019-07-22 16:00:00",
      "2019-07-23 16:00:00",
      "2019-07-24 16:00:00",
      "2019-07-25 16:00:00",
      "2019-07-26 16:00:00",
      "2019-07-29 16:00:00",
      "2019-07-30 16:00:00",
      "2019-07-31 16:00:00",
      "2019-08-01 16:00:00",
      "2019-08-02 16:00:00",
      "2019-08-05 16:00:00",
      "2019-08-06 16:00:00",
      "2019-08-07 16:00:00",
      "2019-08-08 16:00:00",
      "2019-08-09 16:00:00",
      "2019-08-12 16:00:00",
      "2019-08-13 16:00:00",
      "2019-08-14 16:00:00",
      "2019-08-15 16:00:00",
      "2019-08-16 16:00:00",
      "2019-08-19 16:00:00",
      "2019-08-20 16:00:00",
      "2019-08-21 16:00:00",
      "2019-08-22 16:00:00",
      "2019-08-23 16:00:00",
      "2019-08-26 16:00:00",
      "2019-08-27 16:00:00",
      "2019-08-28 16:00:00",
      "2019-08-29 16:00:00",
      "2019-08-30 16:00:00",
      "2019-09-03 16:00:00",
      "2019-09-04 16:00:00",
      "2019-09-05 16:00:00",
      "2019-09-06 16:00:00",
      "2019-09-09 16:00:00",
      "2019-09-10 16:00:00",
      "2019-09-11 16:00:00",
      "2019-09-12 16:00:00",
      "2019-09-13 16:00:00",
      "2019-09-16 16:00:00",
      "2019-09-17 16:00:00",
      "2019-09-18 16:00:00",
      "2019-09-19 16:00:00",
      "2019-09-20 16:00:00",
      "2019-09-23 16:00:00",
      "2019-09-24 16:00:00",
      "2019-09-25 16:00:00",
      "2019-09-26 16:00:00",
      "2019-09-27 16:00:00",
      "2019-09-30 16:00:00",
      "2019-10-01 16:00:00",
      "2019-10-02 16:00:00",
      "2019-10-03 16:00:00",
      "2019-10-04 16:00:00",
      "2019-10-07 16:00:00",
      "2019-10-08 16:00:00",
      "2019-10-09 16:00:00",
      "2019-10-10 16:00:00",
      "2019-10-11 16:00:00",
      "2019-10-14 16:00:00",
      "2019-10-15 16:00:00",
      "2019-10-16 16:00:00",
      "2019-10-17 16:00:00",
      "2019-10-18 16:00:00",
      "2019-10-21 16:00:00",
      "2019-10-22 16:00:00",
      "2019-10-23 16:00:00",
      "2019-10-24 16:00:00",
      "2019-10-25 16:00:00",
      "2019-10-28 16:00:00",
      "2019-10-29 16:00:00",
      "2019-10-30 16:00:00",
      "2019-10-31 16:00:00",
      "2019-11-01 16:00:00",
      "2019-11-04 16:00:00",
      "2019-11-05 16:00:00",
      "2019-11-06 16:00:00",
      "2019-11-07 16:00:00",
      "2019-11-08 16:00:00",
      "2019-11-11 16:00:00",
      "2019-11-12 16:00:00",
      "2019-11-13 16:00:00",
      "2019-11-14 16:00:00",
      "2019-11-15 16:00:00",
      "2019-11-18 16:00:00",
      "2019-11-19 16:00:00",
      "2019-11-20 16:00:00",
      "2019-11-21 16:00:00",
      "2019-11-22 16:00:00",
      "2019-11-25 16:00:00",
      "2019-11-26 16:00:00",
      "2019-11-27 16:00:00",
      "2019-11-29 16:00:00",
      "2019-12-02 16:00:00",
      "2019-12-03 16:00:00",
      "2019-12-04 16:00:00",
      "2019-12-05 16:00:00",
      "2019-12-06 16:00:00",
      "2019-12-09 16:00:00",
      "2019-12-10 16:00:00",
      "2019-12-11 16:00:00",
      "2019-12-12 16:00:00",
      "2019-12-13 16:00:00",
      "2019-12-16 16:00:00",
      "2019-12-17 16:00:00",
      "2019-12-18 16:00:00",
      "2019-12-19 16:00:00",
      "2019-12-20 16:00:00",
      "2019-12-23 16:00:00",
      "2019-12-24 16:00:00",
      "2019-12-26 16:00:00",
      "2019-12-27 16:00:00",
      "2019-12-30 16:00:00",
      "2019-12-31 16:00:00",
      "2020-01-02 16:00:00",
      "2020-01-03 16:00:00",
      "2020-01-06 16:00:00",
      "2020-01-07 16:00:00",
      "2020-01-08 16:00:00",
      "2020-01-09 16:00:00",
      "2020-01-10 16:00:00",
      "2020-01-13 16:00:00",
      "2020-01-14 16:00:00",
      "2020-01-15 16:00:00",
      "2020-01-16 16:00:00",
      "2020-01-17 16:00:00",
      "2020-01-21 16:00:00",
      "2020-01-22 16:00:00",
      "2020-01-23 16:00:00",
      "2020-01-24 16:00:00",
      "2020-01-27 16:00:00",
      "2020-01-28 16:00:00",
      "2020-01-29 16:00:00",
      "2020-01-30 16:00:00",
      "2020-01-31 16:00:00",
      "2020-02-03 16:00:00",
      "2020-02-04 16:00:00",
      "2020-02-05 16:00:00",
      "2020-02-06 16:00:00",
      "2020-02-07 16:00:00",
      "2020-02-10 16:00:00",
      "2020-02-11 16:00:00",
      "2020-02-12 16:00:00",
      "2020-02-13 16:00:00",
      "2020-02-14 16:00:00",
      "2020-02-18 16:00:00",
      "2020-02-19 16:00:00",
      "2020-02-20 16:00:00",
      "2020-02-21 16:00:00",
      "2020-02-24 16:00:00",
      "2020-02-25 16:00:00",
      "2020-02-26 16:00:00",
      "2020-02-27 16:00:00",
      "2020-02-28 16:00:00",
      "2020-03-02 16:00:00",
      "2020-03-03 16:00:00",
      "2020-03-04 16:00:00",
      "2020-03-05 16:00:00",
      "2020-03-06 16:00:00",
      "2020-03-09 16:00:00",
      "2020-03-10 16:00:00",
      "2020-03-11 16:00:00",
      "2020-03-12 16:00:00",
      "2020-03-13 16:00:00",
      "2020-03-16 16:00:00",
      "2020-03-17 16:00:00",
      "2020-03-18 16:00:00",
      "2020-03-19 16:00:00",
      "2020-03-20 16:00:00",
      "2020-03-23 16:00:00",
      "2020-03-24",
    ],
    xaxis: {
      crosshairs: {
        show: true,
        width: 1,
        position: "front",
        opacity: 1,
        stroke: {
          color: "#bfc5cc",
          width: 1,
          dashArray: 2,
        },
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 1,
          opacity: 0.4,
        },
      },
      labels: {
        format: "MMM yyyy",
        style: {
          colors: "#666",
        },
      },
      tickAmount: 4,
      tickPlacement: "on",
      tooltip: {
        enabled: false,
      },
      type: "datetime",
    },
    yaxis: {
      tickAmount: 4,
      forceNiceScale: true,
      labels: {
        formatter: function (val, index) {
          return val.toFixed(0);
        },
        style: {
          colors: "#666",
        },
      },
    },
  };
  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();


  // <!-- ------- chart js pie script -------------- -->

  var myData = [65, 15, 20];
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: "pie",
    data: {
      datasets: [
        {
          data: myData,
          backgroundColor: ["#41BC85", "#ff7043", "#54B5E8"],
          borderWidth: 5,
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  });

  //  repair chart

  // <!-- ------- chart js doughnut script -------------- -->

  var myData = [65, 15, 20];
  var ctx = document.getElementById("myChart2");
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: myData,
          backgroundColor: ["#41BC85", "#ff7043", "#54B5E8"],
          borderWidth: 5,
          borderColor: "#fff",
        },
      ],
    },
    options: {
      responsive: true,
      cutoutPercentage: 75,
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  });

  // Get the chart's base64 image string
  // var image = myChart.toBase64Image();
  // console.log(image);

  // document.getElementById('menu1').onclick = function() {
  //   // Trigger the download
  //   var a = document.createElement('a');
  //   a.href = myChart.toBase64Image();
  //   a.download = 'my_file_name.png';
  //   a.click();
  // }

  // chart bars
  var options = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          fontSize: "5px",
        },
      },
    },
    yaxis: {},
    fill: {
      opacity: 1,
      colors: ["#41BC85", "#54B5E8", "#ff7043"],
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();

  /* chart js line script */
  var ctx8 = document.getElementById("chartLine1");
  new Chart(ctx8, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25],
          borderColor: "#ff7043",
          borderWidth: 1,
          fill: false,
        },
        {
          data: [35, 30, 45, 35, 55, 40, 10, 20, 25, 55, 50, 45],
          borderColor: "#43bb8d",
          borderWidth: 1,
          fill: false,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
        labels: {
          display: false,
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              max: 80,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 11,
            },
          },
        ],
      },
    },
  });
});


new Chart(document.getElementById("mixed-chart"), {
  type: 'bar',
  data: {
    labels: ["70", "30", "25", "50"],
    datasets: [ {
        label: "Africa",
        type: "line",
        borderColor: "#54b4ec",
        data: [50,221,150,200],
        fill: false
      }
    ]
  },
  options: {
  
    scales: {
      xAxes: [{
          display: false
      }],
      yAxes: [{
        display: false
    }]
  },
    legend: { display: false }
  }
});

new Chart(document.getElementById("mixed-chart2"), {
  type: 'bar',
  data: {
    labels: ["70", "30", "25", "50"],
    datasets: [ {
        label: "Africa",
        type: "line",
        borderColor: "#54b4ec",
        data: [50,221,150,200],
        fill: false
      }
    ]
  },
  options: {
  
    scales: {
      xAxes: [{
          display: false
      }],
      yAxes: [{
        display: false
    }]
  },
    legend: { display: false }
  }
});