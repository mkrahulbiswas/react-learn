import ReactApexChart from 'react-apexcharts'

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <BarChart />
      <AreaChart />
      <DonutChart />
      <BubbleChart />
    </div>
  )
}

export const BarChart = () => {
  const chartData: any = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  }

  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Bar Chart</span>
        </div>
        <div className="exampleCommonContent">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="390"
          />
        </div>
      </div>
    </>
  )
}

export const AreaChart = () => {
  const chartData: any = {
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'area' as 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  }

  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Area Chart</span>
        </div>
        <div className="exampleCommonContent">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="area"
            width="390"
          />
        </div>
      </div>
    </>
  )
}

export const DonutChart = () => {
  const chartData: any = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function (val: any, opts: any) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex]
        }
      },
      title: {
        text: 'Gradient Donut with custom Start-angle'
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  }

  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Donut Chart</span>
        </div>
        <div className="exampleCommonContent">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            width="390"
          />
        </div>
      </div>
    </>
  )
}

export const BubbleChart = () => {
  const generateData = (baseval: number, count: number, yrange: { min: number; max: number }) => {
    const series = [];
    for (let i = 0; i < count; i++) {
      const x = baseval + i * 86400000;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      const z = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y, z]);
    }
    return series;
  }
  const chartData: any = {
    series: [{
      name: 'Product1',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'Product2',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'Product3',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'Product4',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    }],
    options: {
      chart: {
        height: 350,
        type: 'bubble',
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
      title: {
        text: '3D Bubble Chart'
      },
      xaxis: {
        tickAmount: 12,
        type: 'datetime',
        labels: {
          rotate: 0,
        }
      },
      yaxis: {
        max: 70
      },
      theme: {
        palette: 'palette2'
      }
    },
  }
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Bubble Chart</span>
        </div>
        <div className="exampleCommonContent">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bubble"
            width="390"
          />
        </div>
      </div>
    </>
  )
}