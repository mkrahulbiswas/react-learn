import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'
import Drilldown from 'highcharts/modules/drilldown'
import Accessibility from 'highcharts/modules/accessibility'
import Pictorial from 'highcharts/modules/pictorial'
import HighchartsReact from 'highcharts-react-official'
import { getChartData } from '../../../../../../../../database/chart-database'


export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <PictorialChart />
      <BubblesChart />
      <AreaChart />
      <LineChart />
      <RadialBarChart />
      <PieChart />
    </div>
  )
}

export const PictorialChart = () => {
  const chartData = getChartData({ type: 'highcharts', for: 'pictorialChart' })

  const options = {
    chart: {
      type: 'pictorial'
    },

    title: {
      text: 'Composition of the human body'
    },

    accessibility: {
      screenReaderSection: {
        beforeChartFormat: '<{headingTagName}>' +
          '{chartTitle}</{headingTagName}><p>{typeDescription}</p><p>' +
          '{chartLongdesc}</p>'
      },
      point: {
        valueDescriptionFormat: '{value}.'
      },
      series: {
        descriptionFormat: ''
      },
      landmarkVerbosity: 'one'
    },

    xAxis: {
      categories: ['Woman', 'Man'],
      lineWidth: 0,
      opposite: true
    },

    yAxis: {
      visible: false,
      stackShadow: {
        enabled: true
      },
      max: 100
    },

    legend: {
      itemMarginTop: 15,
      itemMarginBottom: 15,
      layout: 'vertical',
      padding: 0,
      verticalAlign: 'middle',
      align: 'center',
      margin: 0
    },

    tooltip: {
      headerFormat: ''
    },

    plotOptions: {
      series: {
        pointPadding: 0,
        groupPadding: 0,
        dataLabels: {
          enabled: true,
          align: 'center',
          format: '{y} %'
        },
        stacking: 'normal',
        paths: [{
          definition: chartData.one
        }, {
          definition: chartData.two
        }]
      }
    },

    series: [{
      name: 'Other',
      data: [25, 25]
    }, {
      name: 'Essential Fat',
      data: [12, 3]
    },
    {
      name: 'Non-Essential Fat',
      data: [15, 12]
    }, {
      name: 'Muscle Tissue',
      data: [36, 45]
    },
    {
      name: 'Bone',
      data: [12, 15]
    }
    ],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            padding: 8,
            margin: 12,
            itemMarginTop: 0,
            itemMarginBottom: 0,
            verticalAlign: 'bottom',
            layout: 'horizontal'
          }
        }
      }]
    }
  }

  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Pictorial Chart</span>
        </div>
        <div className="exampleCommonContent">
          <HighchartsReact highcharts={Pictorial} options={options} />
        </div>
      </div >
    </>
  )
}

export const BubblesChart = () => {
  const chartData = getChartData({ type: 'highcharts', for: 'bubblesChart' })
  const options = {
    chart: {
      type: 'bubble',
      plotBorderWidth: 1,
      zooming: {
        type: 'xy'
      }
    },

    title: {
      text: 'Highcharts bubbles with radial gradient fill'
    },

    xAxis: {
      gridLineWidth: 1,
      accessibility: {
        rangeDescription: 'Range: 0 to 100.'
      }
    },

    yAxis: {
      startOnTick: false,
      endOnTick: false,
      accessibility: {
        rangeDescription: 'Range: 0 to 100.'
      }
    },

    series: [{
      data: chartData.one,
      marker: {
        fillColor: {
          radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
          stops: [
            [0, 'rgba(255,255,255,0.5)'],
            [
              1,
              Highcharts.color(
                (Highcharts.getOptions().colors?.[0] || '#000000')
              ).setOpacity(0.5).get('rgba')
            ]
          ]
        }
      }
    }, {
      data: chartData.two,
      marker: {
        fillColor: {
          radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
          stops: [
            [0, 'rgba(255,255,255,0.5)'],
            [
              1,
              Highcharts.color(
                (Highcharts.getOptions().colors?.[1] || '#000000')
              ).setOpacity(0.5).get('rgba')
            ]
          ]
        }
      }
    }]
  }

  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Bubbles Chart</span>
        </div>
        <div className="exampleCommonContent">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div >
    </>
  )
}

export const AreaChart = () => {
  const chartData = getChartData({ type: 'highcharts', for: 'areaChart' })
  const options = {
    title: {
      text: 'April temperatures in Nesbyen, 2024',
      align: 'left'
    },

    subtitle: {
      text: 'Source: ' +
        '<a href="https://www.yr.no/nb/historikk/graf/1-113585/Norge/Buskerud/Nesbyen/Nesbyen?q=2024-04"' +
        'target="_blank">YR</a>',
      align: 'left'
    },

    xAxis: {
      type: 'datetime',
      accessibility: {
        rangeDescription: 'Range: April 1st 2022 to April 30th 2024.'
      }
    },

    yAxis: {
      title: {
        text: null
      }
    },

    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: '°C'
    },

    plotOptions: {
      series: {
        pointStart: '2024-05-01',
        pointIntervalUnit: 'day'
      }
    },

    series: [{
      name: 'Temperature',
      data: chartData.averages,
      zIndex: 1,
      marker: {
        fillColor: 'white',
        lineWidth: 2,
        lineColor: Highcharts.getOptions().colors?.[0] || '#000000'
      }
    }, {
      name: 'Range',
      data: chartData.ranges,
      type: 'arearange',
      lineWidth: 0,
      linkedTo: ':previous',
      color: Highcharts.getOptions().colors?.[0] || '#000000',
      fillOpacity: 0.3,
      zIndex: 0,
      marker: {
        enabled: false
      }
    }]
  }

  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Area Chart</span>
        </div>
        <div className="exampleCommonContent">
          <HighchartsReact highcharts={HighchartsMore} options={options} />
        </div>
      </div >
    </>
  )
}

export const LineChart = () => {
  const elevationData = getChartData({ type: 'highcharts', for: 'lineChart' })
  const options = {
    chart: {
      type: 'area',
      zooming: {
        type: 'x'
      },
      panning: true,
      panKey: 'shift',
      scrollablePlotArea: {
        minWidth: 600
      }
    },
    caption: {
      text: 'This chart uses the Highcharts Annotations feature to place ' +
        'labels at various points of interest. The labels are responsive ' +
        'and will be hidden to avoid overlap on small screens.'
    },
    title: {
      text: '2017 Tour de France Stage 8: Dole - Station des Rousses'
    },
    accessibility: {
      description: 'This line chart uses the Highcharts Annotations ' +
        'feature to place labels at various points of interest. The ' +
        'labels are responsive and will be hidden to avoid overlap on ' +
        'small screens. Image description: An annotated line chart ' +
        'illustrates the 8th stage of the 2017 Tour de France cycling ' +
        'race from the start point in Dole to the finish line at Station ' +
        'des Rousses. Altitude is plotted on the Y-axis, and distance is ' +
        'plotted on the X-axis. The line graph is interactive, and the ' +
        'user can trace the altitude level along the stage. The graph is ' +
        'shaded below the data line to visualize the mountainous ' +
        'altitudes encountered on the 187.5-kilometre stage. The three ' +
        'largest climbs are highlighted at Col de la Joux, Côte de Viry ' +
        'and the final 11.7-kilometer, 6.4% gradient climb to Montée de ' +
        'la Combe de Laisia Les Molunes which peaks at 1200 meters above ' +
        'sea level. The stage passes through the villages of Arbois, ' +
        'Montrond, Bonlieu, Chassal and Saint-Claude along the route.',
      landmarkVerbosity: 'one'
    },
    lang: {
      accessibility: {
        screenReaderSection: {
          annotations: {
            descriptionNoPoints: '{annotationText}, at distance ' +
              '{annotation.options.point.x}km, elevation ' +
              '{annotation.options.point.y} meters.'
          }
        }
      }
    },
    credits: {
      enabled: false
    },

    annotations: [{
      draggable: '',
      labelOptions: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        verticalAlign: 'top',
        y: 15
      },
      labels: [{
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 27.98,
          y: 255
        },
        text: 'Arbois'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 45.5,
          y: 611
        },
        text: 'Montrond'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 63,
          y: 651
        },
        text: 'Mont-sur-Monnet'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 84,
          y: 789
        },
        x: -10,
        text: 'Bonlieu'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 129.5,
          y: 382
        },
        text: 'Chassal'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 159,
          y: 443
        },
        text: 'Saint-Claude'
      }]
    }, {
      draggable: '',
      labels: [{
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 101.44,
          y: 1026
        },
        x: -30,
        text: 'Col de la Joux'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 138.5,
          y: 748
        },
        text: 'Côte de Viry'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 176.4,
          y: 1202
        },
        text: 'Montée de la Combe <br>de Laisia Les Molunes'
      }]
    }, {
      draggable: '',
      labelOptions: {
        shape: 'connector',
        align: 'right',
        justify: false,
        crop: true,
        style: {
          fontSize: '10px',
          textOutline: '1px white'
        }
      },
      labels: [{
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 96.2,
          y: 783
        },
        text: '6.1 km climb <br>4.6% on avg.'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 134.5,
          y: 540
        },
        text: '7.6 km climb <br>5.2% on avg.'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 172.2,
          y: 925
        },
        text: '11.7 km climb <br>6.4% on avg.'
      }]
    }],

    xAxis: {
      labels: {
        format: '{value} km'
      },
      minRange: 5,
      title: {
        text: 'Distance'
      },
      accessibility: {
        rangeDescription: 'Range: 0 to 187.8km.'
      }
    },
    yAxis: {
      startOnTick: true,
      endOnTick: false,
      maxPadding: 0,
      title: {
        text: null
      },
      labels: {
        format: '{value} m'
      },
      accessibility: {
        description: 'Elevation',
        rangeDescription: 'Range: 0 to 1,553 meters'
      }
    },
    tooltip: {
      headerFormat: 'Distance: {point.x:.1f} km<br>',
      pointFormat: '{point.y} m a. s. l.',
      shared: true
    },
    legend: {
      enabled: false
    },
    series: [{
      data: elevationData,
      lineColor: (Highcharts.getOptions().colors || ['#000000'])[1],
      color: (Highcharts.getOptions().colors || ['#000000', '#000000', '#FF0000'])[2],
      fillOpacity: 0.3,
      name: 'Elevation',
      marker: {
        enabled: false
      },
      threshold: null
    }]
  }

  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Line Chart</span>
        </div>
        <div className="exampleCommonContent">
          <HighchartsReact
            highcharts={Accessibility}
            options={options}
          />
        </div>
      </div>
    </>
  )
}

export const RadialBarChart = () => {
  const options = {
    colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
    chart: {
      type: 'column',
      inverted: true,
      polar: true
    },
    title: {
      text: 'Winter Olympic medals per existing country (TOP 5)'
    },
    subtitle: {
      text: 'Source: ' +
        '<a href="https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table"' +
        'target="_blank">Wikipedia</a>'
    },
    tooltip: {
      outside: true
    },
    pane: {
      size: '85%',
      innerSize: '20%',
      endAngle: 270
    },
    xAxis: {
      tickInterval: 1,
      labels: {
        align: 'right',
        useHTML: true,
        allowOverlap: true,
        step: 1,
        y: 3,
        style: {
          fontSize: '13px'
        }
      },
      lineWidth: 0,
      gridLineWidth: 0,
      categories: [
        'Norway <span class="f16"><span id="flag" class="flag no">' +
        '</span></span>',
        'United States <span class="f16"><span id="flag" class="flag us">' +
        '</span></span>',
        'Germany <span class="f16"><span id="flag" class="flag de">' +
        '</span></span>',
        'Austria <span class="f16"><span id="flag" class="flag at">' +
        '</span></span>',
        'Canada <span class="f16"><span id="flag" class="flag ca">' +
        '</span></span>'
      ]
    },
    yAxis: {
      lineWidth: 0,
      tickInterval: 25,
      reversedStacks: false,
      endOnTick: true,
      showLastLabel: true,
      gridLineWidth: 0
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        borderWidth: 0,
        pointPadding: 0,
        groupPadding: 0.15,
        borderRadius: '50%'
      }
    },
    series: [{
      name: 'Gold medals',
      data: [148, 113, 104, 71, 77]
    }, {
      name: 'Silver medals',
      data: [113, 122, 98, 88, 72]
    }, {
      name: 'Bronze medals',
      data: [124, 95, 65, 91, 76]
    }]
  };

  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Radial Bar Chart</span>
        </div>
        <div className="exampleCommonContent">
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>
      </div>
    </>
  )
}

export const PieChart = () => {
  const options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Browser market shares. January, 2022'
    },
    subtitle: {
      text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    accessibility: {
      announceNewData: {
        enabled: true
      },
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      series: {
        borderRadius: 5,
        dataLabels: [{
          enabled: true,
          distance: 15,
          format: '{point.name}'
        }, {
          enabled: true,
          distance: '-30%',
          filter: {
            property: 'percentage',
            operator: '>',
            value: 5
          },
          format: '{point.y:.1f}%',
          style: {
            fontSize: '0.9em',
            textOutline: 'none'
          }
        }]
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
        '<b>{point.y:.2f}%</b> of total<br/>'
    },
    series: [
      {
        name: 'Browsers',
        colorByPoint: true,
        data: [
          {
            name: 'Chrome',
            y: 61.04,
            drilldown: 'Chrome'
          },
          {
            name: 'Safari',
            y: 9.47,
            drilldown: 'Safari'
          },
          {
            name: 'Edge',
            y: 9.32,
            drilldown: 'Edge'
          },
          {
            name: 'Firefox',
            y: 8.15,
            drilldown: 'Firefox'
          },
          {
            name: 'Other',
            y: 11.02,
            drilldown: null
          }
        ]
      }
    ],
    drilldown: {
      series: [
        {
          name: 'Chrome',
          id: 'Chrome',
          data: [
            ['v97.0', 36.89],
            ['v96.0', 18.16],
            ['v95.0', 0.54],
            ['v94.0', 0.7],
            ['v93.0', 0.8],
            ['v92.0', 0.41],
            ['v91.0', 0.31],
            ['v90.0', 0.13],
            ['v89.0', 0.14],
            ['v88.0', 0.1],
            ['v87.0', 0.35],
            ['v86.0', 0.17],
            ['v85.0', 0.18],
            ['v84.0', 0.17],
            ['v83.0', 0.21],
            ['v81.0', 0.1],
            ['v80.0', 0.16],
            ['v79.0', 0.43],
            ['v78.0', 0.11],
            ['v76.0', 0.16],
            ['v75.0', 0.15],
            ['v72.0', 0.14],
            ['v70.0', 0.11],
            ['v69.0', 0.13],
            ['v56.0', 0.12],
            ['v49.0', 0.17]
          ]
        },
        {
          name: 'Safari',
          id: 'Safari',
          data: [
            ['v15.3', 0.1],
            ['v15.2', 2.01],
            ['v15.1', 2.29],
            ['v15.0', 0.49],
            ['v14.1', 2.48],
            ['v14.0', 0.64],
            ['v13.1', 1.17],
            ['v13.0', 0.13],
            ['v12.1', 0.16]
          ]
        },
        {
          name: 'Edge',
          id: 'Edge',
          data: [
            ['v97', 6.62],
            ['v96', 2.55],
            ['v95', 0.15]
          ]
        },
        {
          name: 'Firefox',
          id: 'Firefox',
          data: [
            ['v96.0', 4.17],
            ['v95.0', 3.33],
            ['v94.0', 0.11],
            ['v91.0', 0.23],
            ['v78.0', 0.16],
            ['v52.0', 0.15]
          ]
        }
      ]
    }
  }
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Pie Chart</span>
        </div>
        <div className="exampleCommonContent">
          <HighchartsReact highcharts={Drilldown} options={options} />
        </div>
      </div >
    </>
  )
}