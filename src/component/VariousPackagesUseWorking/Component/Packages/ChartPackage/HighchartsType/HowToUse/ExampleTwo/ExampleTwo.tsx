import Highcharts from 'highcharts';
import Highmaps from 'highcharts/highmaps';
// import HighchartsMore from 'highcharts/highcharts-more';

// import Sankey from 'highcharts/modules/sankey'
// import DependencyWheel from 'highcharts/modules/dependency-wheel'
// import Exporting from 'highcharts/modules/exporting'
// import ExportData from 'highcharts/modules/export-data'
// import Accessibility from 'highcharts/modules/accessibility'

import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from 'react';
import { getChartData } from '../../../../../../../../database/chart-database';


export const ExampleTwo = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      {/* <DependencyWheelChartaa /> */}
      <DependencyWheelCharta />
      {/* <DependencyWheelChart /> */}
    </div>
  )
}

export const DependencyWheelChartaa = () => {
  const [chartData, setChartData] = useState({})

  const data = [
    {
      name: 'United States of America',
      value: 1477
    },
    {
      name: 'Brazil',
      value: 490
    },
    {
      name: 'Mexico',
      value: 882
    },
    {
      name: 'Canada',
      value: 161
    },
    {
      name: 'Russia',
      value: 74
    },
    {
      name: 'Argentina',
      value: 416
    },
    {
      name: 'Bolivia',
      value: 789
    },
    {
      name: 'Colombia',
      value: 805
    },
    {
      name: 'Paraguay',
      value: 2011
    },
    {
      name: 'Indonesia',
      value: 372
    },
    {
      name: 'South Africa',
      value: 466
    },
    {
      name: 'Papua New Guinea',
      value: 1239
    },
    {
      name: 'Germany',
      value: 1546
    },
    {
      name: 'China',
      value: 54
    },
    {
      name: 'Chile',
      value: 647
    },
    {
      name: 'Australia',
      value: 62
    },
    {
      name: 'France',
      value: 844
    },
    {
      name: 'United Kingdom',
      value: 1901
    },
    {
      name: 'Venezuela',
      value: 503
    },
    {
      name: 'Ecuador',
      value: 1560
    },
    {
      name: 'India',
      value: 116
    },
    {
      name: 'Iran',
      value: 208
    },
    {
      name: 'Guatemala',
      value: 2716
    },
    {
      name: 'Philippines',
      value: 828
    },
    {
      name: 'Sweden',
      value: 563
    },
    {
      name: 'Saudi Arabia',
      value: 100
    },
    {
      name: 'Democratic Republic of the Congo',
      value: 87
    },
    {
      name: 'Kenya',
      value: 346
    },
    {
      name: 'Zimbabwe',
      value: 507
    },
    {
      name: 'Peru',
      value: 149
    },
    {
      name: 'Ukraine',
      value: 323
    },
    {
      name: 'Angola',
      value: 141
    },
    {
      name: 'Japan',
      value: 480
    },
    {
      name: 'United Republic of Tanzania',
      value: 187
    },
    {
      name: 'Costa Rica',
      value: 3153
    },
    {
      name: 'Algeria',
      value: 66
    },
    {
      name: 'Pakistan',
      value: 196
    },
    {
      name: 'Spain',
      value: 301
    },
    {
      name: 'Finland',
      value: 487
    },
    {
      name: 'Nicaragua',
      value: 1225
    },
    {
      name: 'Libya',
      value: 83
    },
    {
      name: 'Cuba',
      value: 1211
    },
    {
      name: 'Uruguay',
      value: 760
    },
    {
      name: 'Oman',
      value: 426
    },
    {
      name: 'Italy',
      value: 439
    },
    {
      name: 'Czech Republic',
      value: 1657
    },
    {
      name: 'Poland',
      value: 414
    },
    {
      name: 'New Zealand',
      value: 465
    },
    {
      name: 'Guyana',
      value: 594
    },
    {
      name: 'Panama',
      value: 1574
    },
    {
      name: 'Malaysia',
      value: 347
    },
    {
      name: 'Namibia',
      value: 136
    },
    {
      name: 'South Korea',
      value: 1145
    },
    {
      name: 'Honduras',
      value: 921
    },
    {
      name: 'Iraq',
      value: 233
    },
    {
      name: 'Thailand',
      value: 198
    },
    {
      name: 'Mozambique',
      value: 125
    },
    {
      name: 'Turkey',
      value: 127
    },
    {
      name: 'Iceland',
      value: 958
    },
    {
      name: 'Kazakhstan',
      value: 36
    },
    {
      name: 'Norway',
      value: 312
    },
    {
      name: 'Syria',
      value: 484
    },
    {
      name: 'Zambia',
      value: 118
    },
    {
      name: 'South Sudan',
      value: 132
    },
    {
      name: 'Egypt',
      value: 83
    },
    {
      name: 'Madagascar',
      value: 143
    },
    {
      name: 'North Korea',
      value: 681
    },
    {
      name: 'Denmark',
      value: 1885
    },
    {
      name: 'Greece',
      value: 589
    },
    {
      name: 'Botswana',
      value: 131
    },
    {
      name: 'Sudan',
      value: 43
    },
    {
      name: 'Croatia',
      value: 1233
    },
    {
      name: 'Bulgaria',
      value: 627
    },
    {
      name: 'El Salvador',
      value: 3282
    },
    {
      name: 'Belarus',
      value: 320
    },
    {
      name: 'Myanmar',
      value: 98
    },
    {
      name: 'Portugal',
      value: 700
    },
    {
      name: 'Switzerland',
      value: 1575
    },
    {
      name: 'The Bahamas',
      value: 6094
    },
    {
      name: 'Lithuania',
      value: 973
    },
    {
      name: 'Somalia',
      value: 97
    },
    {
      name: 'Chad',
      value: 47
    },
    {
      name: 'Ethiopia',
      value: 52
    },
    {
      name: 'Yemen',
      value: 108
    },
    {
      name: 'Morocco',
      value: 123
    },
    {
      name: 'Suriname',
      value: 353
    },
    {
      name: 'French Polynesia',
      value: 14110
    },
    {
      name: 'Nigeria',
      value: 59
    },
    {
      name: 'Uzbekistan',
      value: 125
    },
    {
      name: 'Afghanistan',
      value: 80
    },
    {
      name: 'Austria',
      value: 631
    },
    {
      name: 'Belize',
      value: 2061
    },
    {
      name: 'Israel',
      value: 2186
    },
    {
      name: 'Nepal',
      value: 328
    },
    {
      name: 'Uganda',
      value: 238
    },
    {
      name: 'Romania',
      value: 196
    },
    {
      name: 'Vietnam',
      value: 145
    },
    {
      name: 'Gabon',
      value: 171
    },
    {
      name: 'Mongolia',
      value: 28
    },
    {
      name: 'United Arab Emirates',
      value: 514
    },
    {
      name: 'Latvia',
      value: 675
    },
    {
      name: 'Belgium',
      value: 1354
    },
    {
      name: 'Hungary',
      value: 458
    },
    {
      name: 'Laos',
      value: 178
    },
    {
      name: 'Ireland',
      value: 581
    },
    {
      name: 'Central African Republic',
      value: 63
    },
    {
      name: 'Azerbaijan',
      value: 448
    },
    {
      name: 'Taiwan',
      value: 1147
    },
    {
      name: 'Dominican Republic',
      value: 745
    },
    {
      name: 'Solomon Islands',
      value: 1286
    },
    {
      name: 'Slovakia',
      value: 728
    },
    {
      name: 'Cameroon',
      value: 70
    },
    {
      name: 'Malawi',
      value: 340
    },
    {
      name: 'Vanuatu',
      value: 2543
    },
    {
      name: 'Mauritania',
      value: 29
    },
    {
      name: 'Niger',
      value: 24
    },
    {
      name: 'Liberia',
      value: 301
    },
    {
      name: 'Netherlands',
      value: 856
    },
    {
      name: 'Puerto Rico',
      value: 3237
    },
    {
      name: 'Tunisia',
      value: 187
    },
    {
      name: 'Fiji',
      value: 1532
    },
    {
      name: 'Jamaica',
      value: 2585
    },
    {
      name: 'Kyrgyzstan',
      value: 146
    },
    {
      name: 'Republic of the Congo',
      value: 79
    },
    {
      name: 'Ivory Coast',
      value: 85
    },
    {
      name: 'Republic of Serbia',
      value: 336
    },
    {
      name: 'Turkmenistan',
      value: 55
    },
    {
      name: 'Mali',
      value: 20
    },
    {
      name: 'New Caledonia',
      value: 1368
    },
    {
      name: 'Bosnia and Herzegovina',
      value: 469
    },
    {
      name: 'Lesotho',
      value: 791
    },
    {
      name: 'Tajikistan',
      value: 170
    },
    {
      name: 'Antarctica',
      value: 2
    },
    {
      name: 'Burkina Faso',
      value: 84
    },
    {
      name: 'Georgia',
      value: 316
    },
    {
      name: 'Senegal',
      value: 104
    },
    {
      name: 'Kiribati',
      value: 23428
    },
    {
      name: 'Sri Lanka',
      value: 294
    },
    {
      name: 'Bangladesh',
      value: 138
    },
    {
      name: 'Estonia',
      value: 425
    },
    {
      name: 'Jordan',
      value: 203
    },
    {
      name: 'Cambodia',
      value: 91
    },
    {
      name: 'Guinea',
      value: 65
    },
    {
      name: 'Slovenia',
      value: 794
    },
    {
      name: 'Northern Cyprus',
      value: 1623
    },
    {
      name: 'Greenland',
      value: 7
    },
    {
      name: 'Marshall Islands',
      value: 82873
    },
    {
      name: 'Swaziland',
      value: 814
    },
    {
      name: 'Haiti',
      value: 508
    },
    {
      name: 'Seychelles',
      value: 30769
    },
    {
      name: 'Djibouti',
      value: 561
    },
    {
      name: 'Eritrea',
      value: 129
    },
    {
      name: 'Armenia',
      value: 390
    },
    {
      name: 'Cook Islands',
      value: 46610
    },
    {
      name: 'Ghana',
      value: 44
    },
    {
      name: 'Macedonia',
      value: 393
    },
    {
      name: 'Cape Verde',
      value: 2232
    },
    {
      name: 'Maldives',
      value: 30201
    },
    {
      name: 'Singapore',
      value: 12690
    },
    {
      name: 'Guinea Bissau',
      value: 284
    },
    {
      name: 'Lebanon',
      value: 782
    },
    {
      name: 'Sierra Leone',
      value: 112
    },
    {
      name: 'Togo',
      value: 147
    },
    {
      name: 'Turks and Caicos Islands',
      value: 8439
    },
    {
      name: 'Burundi',
      value: 273
    },
    {
      name: 'Equatorial Guinea',
      value: 250
    },
    {
      name: 'Falkland Islands',
      value: 575
    },
    {
      name: 'Kuwait',
      value: 393
    },
    {
      name: 'Moldova',
      value: 213
    },
    {
      name: 'Rwanda',
      value: 284
    },
    {
      name: 'Benin',
      value: 54
    },
    {
      name: 'East Timor',
      value: 403
    },
    {
      name: 'Kosovo',
      value: 551
    },
    {
      name: 'Micronesia',
      value: 8547
    },
    {
      name: 'Qatar',
      value: 518
    },
    {
      name: 'Saint Vincent and the Grenadines',
      value: 15424
    },
    {
      name: 'Tonga',
      value: 8368
    },
    {
      name: 'Western Sahara',
      value: 23
    },
    {
      name: 'Guam',
      value: 9191
    },
    {
      name: 'Mauritius',
      value: 2463
    },
    {
      name: 'Montenegro',
      value: 372
    },
    {
      name: 'Northern Mariana Islands',
      value: 10776
    },
    {
      name: 'Albania',
      value: 146
    },
    {
      name: 'Bahrain',
      value: 5263
    },
    {
      name: 'British Virgin Islands',
      value: 26490
    },
    {
      name: 'Comoros',
      value: 1790
    },
    {
      name: 'French Southern and Antarctic Lands',
      value: 522
    },
    {
      name: 'Samoa',
      value: 1418
    },
    {
      name: 'Spratly Islands',
      value: 800000
    },
    {
      name: 'Svalbard',
      value: 64
    },
    {
      name: 'Trinidad and Tobago',
      value: 780
    },
    {
      name: 'American Samoa',
      value: 13393
    },
    {
      name: 'Antigua and Barbuda',
      value: 6778
    },
    {
      name: 'Cayman Islands',
      value: 11364
    },
    {
      name: 'Grenada',
      value: 8721
    },
    {
      name: 'Palau',
      value: 6536
    },
    {
      name: 'Palestinian Territories',
      value: 500
    },
    {
      name: 'Anguilla',
      value: 21978
    },
    {
      name: 'Bhutan',
      value: 52
    },
    {
      name: 'Dominica',
      value: 2663
    },
    {
      name: 'Guernsey',
      value: 25608
    },
    {
      name: 'Hong Kong',
      value: 1864
    },
    {
      name: 'Luxembourg',
      value: 773
    },
    {
      name: 'Saint Kitts and Nevis',
      value: 7663
    },
    {
      name: 'Saint Lucia',
      value: 3300
    },
    {
      name: 'Saint Pierre and Miquelon',
      value: 8264
    },
    {
      name: 'São Tomé and Príncipe',
      value: 2075
    },
    {
      name: 'Virgin Islands of the U.S.',
      value: 5780
    },
    {
      name: 'Wallis and Futuna',
      value: 14085
    },
    {
      name: 'Aruba',
      value: 5556
    },
    {
      name: 'Barbados',
      value: 2326
    },
    {
      name: 'Bermuda',
      value: 18657
    },
    {
      name: 'British Indian Ocean Territory',
      value: 16667
    },
    {
      name: 'Brunei',
      value: 190
    },
    {
      name: 'Faroe Islands',
      value: 718
    },
    {
      name: 'Gambia',
      value: 99
    },
    {
      name: 'Gibraltar',
      value: 153846
    },
    {
      name: 'Jan Mayen',
      value: 2653
    },
    {
      name: 'Jersey',
      value: 8621
    },
    {
      name: 'Macau',
      value: 35461
    },
    {
      name: 'Malta',
      value: 3165
    },
    {
      name: 'Isle of Man',
      value: 1748
    },
    {
      name: 'Montserrat',
      value: 9804
    },
    {
      name: 'Nauru',
      value: 47170
    },
    {
      name: 'Niue',
      value: 3846
    },
    {
      name: 'Paracel Islands',
      value: 129032
    },
    {
      name: 'Saint Barthelemy',
      value: 40000
    },
    {
      name: 'Saint Helena, Ascension and Tristan da Cunha',
      value: 2538
    },
    {
      name: 'Saint Martin',
      value: 18382
    },
    {
      name: 'Sint Maarten',
      value: 29412
    },
    {
      name: 'Tuvalu',
      value: 39063
    },
    {
      name: 'Wake Island',
      value: 153846
    }
  ];

  const getGraticule = () => {
    const data = [];

    // Meridians
    for (let x = -180; x <= 180; x += 15) {
      data.push({
        geometry: {
          type: 'LineString',
          coordinates: x % 90 === 0 ? [
            [x, -90],
            [x, 0],
            [x, 90]
          ] : [
            [x, -80],
            [x, 80]
          ]
        }
      });
    }

    // Latitudes
    for (let y = -90; y <= 90; y += 10) {
      const coordinates = [];
      for (let x = -180; x <= 180; x += 5) {
        coordinates.push([x, y]);
      }
      data.push({
        geometry: {
          type: 'LineString',
          coordinates
        },
        lineWidth: y === 0 ? 2 : undefined
      });
    }

    return data;
  };

  const afterAnimate = (e: any) => {
    const chart = e.target.chart;

    if (!chart.get('flight-route')) {
      chart.addSeries({
        type: 'mapline',
        name: 'Flight route, Amsterdam - Los Angeles',
        animation: false,
        id: 'flight-route',
        data: [{
          geometry: {
            type: 'LineString',
            coordinates: [
              [4.90, 53.38], // Amsterdam
              [-118.24, 34.05] // Los Angeles
            ]
          },
          color: '#313f77'
        }],
        lineWidth: 2,
        accessibility: {
          exposeAsGroupOnly: true
        }
      }, false);
      chart.addSeries({
        type: 'mappoint',
        animation: false,
        data: [{
          name: 'Amsterdam',
          geometry: {
            type: 'Point',
            coordinates: [4.90, 53.38]
          }
        }, {
          name: 'LA',
          geometry: {
            type: 'Point',
            coordinates: [-118.24, 34.05]
          }
        }],
        color: '#313f77',
        accessibility: {
          enabled: false
        }
      }, false);
      chart.redraw(false);
    }
  };

  const options: Highmaps.Options = {
    chart: {
      map: chartData
    },
    title: {
      text: 'Airport density per country',
      floating: true,
      align: 'left',
      style: {
        textOutline: '2px white'
      }
    },
    subtitle: {
      text: 'Source: <a href="http://www.citypopulation.de/en/world/bymap/airports/">citypopulation.de</a><br>' +
        'Click and drag to rotate globe<br>',
      floating: true,
      y: 34
    },
    legend: {
      enabled: false
    },
    mapNavigation: {
      enabled: true,
      enableDoubleClickZoomTo: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },
    mapView: {
      maxZoom: 30,
      projection: {
        name: 'Orthographic',
        rotation: [60, -30]
      }
    },
    colorAxis: {
      tickPixelInterval: 100,
      minColor: '#BFCFAD',
      maxColor: '#31784B',
      max: 1000
    },
    tooltip: {
      pointFormat: '{point.name}: {point.value}'
    },
    plotOptions: {
      series: {
        animation: {
          duration: 750
        },
        clip: false
      }
    },
    series: [{
      name: 'Graticule',
      id: 'graticule',
      type: 'mapline',
      data: getGraticule(),
      nullColor: 'rgba(0, 0, 0, 0.05)',
      accessibility: {
        enabled: false
      },
      enableMouseTracking: false
    },
    {
      type: 'map',
      data,
      joinBy: 'name',
      name: 'Airports per million km²',
      states: {
        hover: {
          color: '#a4edba',
          borderColor: '#333333'
        }
      },
      dataLabels: {
        enabled: false,
        format: '{point.name}'
      },
      events: {
        afterAnimate
      },
      accessibility: {
        exposeAsGroupOnly: true
      }
    }]
  }

  Highcharts.getJSON('https://code.highcharts.com/mapdata/custom/world.topo.json', (_topology: any) => {
    // const renderSea = () => {
    //   let verb = 'animate';
    //   if (!chart.sea) {
    //     chart.sea = chart.renderer
    //       .circle()
    //       .attr({
    //         fill: {
    //           radialGradient: {
    //             cx: 0.4,
    //             cy: 0.4,
    //             r: 1
    //           },
    //           stops: [
    //             [0, 'white'],
    //             [1, 'lightblue']
    //           ]
    //         },
    //         zIndex: -1
    //       })
    //       .add(chart.get('graticule').group);
    //     verb = 'attr';
    //   }

    //   const bounds = chart.get('graticule').bounds,
    //     p1 = chart.mapView.projectedUnitsToPixels({
    //       x: bounds.x1,
    //       y: bounds.y1
    //     }),
    //     p2 = chart.mapView.projectedUnitsToPixels({
    //       x: bounds.x2,
    //       y: bounds.y2
    //     });
    //   chart.sea[verb]({
    //     cx: (p1.x + p2.x) / 2,
    //     cy: (p1.y + p2.y) / 2,
    //     r: Math.min(p2.x - p1.x, p1.y - p2.y) / 2
    //   });
    // };
    // renderSea();
    // Highcharts.addEvent(chart, 'redraw', renderSea);
  })
  useEffect(() => {
    fetch("https://code.highcharts.com/mapdata/custom/world.topo.json")
      .then(res => res.json())
      .then((data: any) => setChartData(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommonPoints">
        <span>Pictoriala Chart</span>
      </div>
      <div className="exampleCommonContent">
        <HighchartsReact
          highcharts={Highmaps}
          options={options}
          constructorType={'mapChart'}
        />
      </div>
    </div>
  )
}
export const DependencyWheelCharta = () => {
  // const chartData = getChartData({ type: 'highcharts', for: 'bubblesChart' })

  // const options = {
  //   chart: {
  //     type: 'cylinder',
  //     options3d: {
  //       enabled: true,
  //       alpha: 15,
  //       beta: 15,
  //       depth: 50,
  //       viewDistance: 25
  //     }
  //   },
  //   title: {
  //     text: 'Number of confirmed COVID-19'
  //   },
  //   subtitle: {
  //     text: 'Source: ' +
  //       '<a href="https://www.fhi.no/en/id/infectious-diseases/coronavirus/daily-reports/daily-reports-COVID19/"' +
  //       'target="_blank">FHI</a>'
  //   },
  //   xAxis: {
  //     categories: [
  //       '0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69',
  //       '70-79', '80-89', '90+'
  //     ],
  //     title: {
  //       text: 'Age groups'
  //     },
  //     labels: {
  //       skew3d: true
  //     }
  //   },
  //   yAxis: {
  //     title: {
  //       margin: 20,
  //       text: 'Reported cases'
  //     },
  //     labels: {
  //       skew3d: true
  //     }
  //   },
  //   tooltip: {
  //     headerFormat: '<b>Age: {category}</b><br>'
  //   },
  //   plotOptions: {
  //     series: {
  //       depth: 25,
  //       colorByPoint: true
  //     }
  //   },
  //   series: [{
  //     data: [
  //       95321, 169339, 121105, 136046, 106800, 58041, 26766, 14291,
  //       7065, 3283
  //     ],
  //     name: 'Cases',
  //     showInLegend: false
  //   }]
  // }

  const [chartData, setChartData] = useState({})
  const darkBorderColor = '#ccc';
  const data: any = [
    ['Alabama', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
    ['Alaska', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Alaska.svg', 1, 10, -10],
    ['Arizona', 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arizona.svg'],
    ['Arkansas', 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'],
    ['California', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/640px-Flag_of_California.svg.png', 1, null, null, darkBorderColor],
    ['Colorado', 'https://upload.wikimedia.org/wikipedia/commons/4/46/Flag_of_Colorado.svg'],
    ['Connecticut', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/621px-Flag_of_Connecticut.svg.png', 1],
    ['Delaware', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/640px-Flag_of_Delaware.svg.png', 1],
    ['Florida', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/640px-Flag_of_Florida.svg.png', 1, null, null, darkBorderColor],
    ['Georgia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Georgia_%28U.S._state%29.svg/640px-Flag_of_Georgia_%28U.S._state%29.svg.png'],
    ['Hawaii', 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Hawaii.svg', 1, null, null, darkBorderColor],
    ['Idaho', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/609px-Flag_of_Idaho.svg.png'],
    ['Illinois', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/800px-Flag_of_Illinois.svg.png'],
    ['Indiana', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Indiana.svg'],
    ['Iowa', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/640px-Flag_of_Iowa.svg.png'],
    ['Kansas', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg/800px-Flag_of_Kansas.svg.png'],
    ['Kentucky', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/640px-Flag_of_Kentucky.svg.png'],
    ['Louisiana', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/640px-Flag_of_Louisiana.svg.png', 3],
    ['Maine', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/640px-Flag_of_Maine.svg.png', 2],
    ['Maryland', 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Maryland.svg', 1, null, null, darkBorderColor],
    ['Massachusetts', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/800px-Flag_of_Massachusetts.svg.png', 1, null, null, darkBorderColor],
    ['Michigan', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg/640px-Flag_of_Michigan.svg.png', 2],
    ['Minnesota', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/640px-Flag_of_Minnesota.svg.png'],
    ['Mississippi', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_Mississippi.svg'],
    ['Missouri', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/640px-Flag_of_Missouri.svg.png'],
    ['Montana', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/640px-Flag_of_Montana.svg.png'],
    ['Nebraska', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Nebraska.svg/640px-Flag_of_Nebraska.svg.png'],
    ['Nevada', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg/640px-Flag_of_Nevada.svg.png', null, 40],
    ['New Hampshire', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/640px-Flag_of_New_Hampshire.svg.png', 2],
    ['New Jersey', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/640px-Flag_of_New_Jersey.svg.png', 2],
    ['New Mexico', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_New_Mexico.svg'],
    ['New York', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/640px-Flag_of_New_York.svg.png', 2],
    ['North Carolina', 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_North_Carolina.svg'],
    ['North Dakota', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_North_Dakota.svg/613px-Flag_of_North_Dakota.svg.png'],
    ['Ohio', 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Ohio.svg'],
    ['Oklahoma', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Flag_of_Oklahoma.svg/640px-Flag_of_Oklahoma.svg.png'],
    ['Oregon', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg/640px-Flag_of_Oregon.svg.png'],
    ['Pennsylvania', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Pennsylvania.svg/640px-Flag_of_Pennsylvania.svg.png'],
    ['Rhode Island', 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Rhode_Island.svg', 1],
    ['South Carolina', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_South_Carolina.svg/640px-Flag_of_South_Carolina.svg.png'],
    ['South Dakota', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_South_Dakota.svg/640px-Flag_of_South_Dakota.svg.png'],
    ['Tennessee', 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Tennessee.svg'],
    ['Texas', 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'],
    ['Utah', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Utah.svg/320px-Flag_of_Utah.svg.png'],
    ['Vermont', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Vermont.svg/640px-Flag_of_Vermont.svg.png', 2],
    ['Virginia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Virginia.svg/640px-Flag_of_Virginia.svg.png', 2],
    ['Washington', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg/640px-Flag_of_Washington.svg.png'],
    ['West Virginia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_West_Virginia.svg/640px-Flag_of_West_Virginia.svg.png', 2],
    ['Wisconsin', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Wisconsin.svg/640px-Flag_of_Wisconsin.svg.png'],
    ['Wyoming', 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Wyoming.svg']
  ]
  const options: Highmaps.Options = {
    chart: {
      map: chartData
    },
    title: {
      text: 'US state flags'
    },
    subtitle: {
      text: 'Source: <a href="https://en.wikipedia.org/wiki/Flags_of_the_U.S._states_and_territories">Wikipedia</a>'
    },
    accessibility: {
      description: 'Map of US states, where each state is filled with ' +
        'an illustration of its state flag.'
    },
    mapNavigation: {
      enabled: true,
      enableDoubleClickZoomTo: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },
    xAxis: {
      minRange: 3500
    },
    legend: {
      enabled: false
    },
    tooltip: {
      useHTML: true,
      borderColor: '#aaa',
      headerFormat: '<b>{point.point.name}</b><br>',
      pointFormat: '<img style="width: 150px; height: 100px;" ' +
        'src=\'{point.options.color.pattern.image}\'>'
    },
    series: [{
      type: 'map',
      name: 'State flags',
      accessibility: {
        exposeAsGroupOnly: true
      },
      keys: [
        'name', 'color.pattern.image', 'borderWidth', 'color.pattern.x',
        'color.pattern.y', 'borderColor'
      ],
      joinBy: 'name',
      data: data,
      borderColor: '#fff',
      color: {
        pattern: {
          aspectRatio: 3 / 2
        }
      },
      states: {
        hover: {
          borderColor: '#b44',
          borderWidth: 2
        }
      }
    }, {
      type: 'mapline',
      nullColor: '#aaa',
      accessibility: {
        enabled: false
      }
    }]
  }

  useEffect(() => {
    fetch("https://code.highcharts.com/mapdata/countries/us/us-all.topo.json")
      .then(res => res.json())
      .then((data: any) => setChartData(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommonPoints">
        <span>Pictoriala Chart</span>
      </div>
      <div className="exampleCommonContent">
        <HighchartsReact
          highcharts={Highmaps}
          options={options}
          constructorType={'mapChart'}
        />
      </div>
    </div>
  )
}

export const DependencyWheelChart = (_props: HighchartsReact.Props) => {
  const chartData = getChartData({ type: 'highcharts', for: 'dependencyWheelChart' })
  // const options: Highcharts.Options = {
  //   title: {
  //     text: 'Highcharts Dependency Wheel'
  //   },

  //   accessibility: {
  //     point: {
  //       valueDescriptionFormat: '{index}. From {point.from} to ' +
  //         '{point.to}: {point.weight}.'
  //     }
  //   },

  //   series: [{
  //     keys: ['from', 'to', 'weight'],
  //     data: chartData,
  //     type: 'dependencywheel',
  //     name: 'Dependency wheel series',
  //     dataLabels: {
  //       color: '#333',
  //       style: {
  //         textOutline: 'none'
  //       },
  //       textPath: {
  //         enabled: true
  //       },
  //       distance: 10
  //     },
  //     size: '95%'
  //   }]
  // }

  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommonPoints">
        <span>Dependency Wheel Chart</span>
      </div>
      <div className="exampleCommonContent">
        {/* <HighchartsReact highcharts={HighchartsMore} options={options} /> */}
        {/* <HighchartsReact highcharts={Sankey, DependencyWheel, Exporting, ExportData, Accessibility} options={options} /> */}
        {/* <HighchartsReact highcharts={Sankey} options={options} />
          <HighchartsReact highcharts={DependencyWheel} options={options} />
          <HighchartsReact highcharts={Exporting} options={options} />
          <HighchartsReact highcharts={ExportData} options={options} />
          <HighchartsReact highcharts={Accessibility} options={options} /> */}
      </div>
    </div>
  )
}