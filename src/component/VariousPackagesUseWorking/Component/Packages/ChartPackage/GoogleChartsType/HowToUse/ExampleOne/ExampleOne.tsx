import { Chart } from "react-google-charts";

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <PieChart />
      <GanttChart />
      <GeoChart />
      <SankeyChart />
    </div>
  )
}

export const PieChart = () => {
  const data: any = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ]
  const options = {
    title: "My Daily Activities",
  }

  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Pie Chart</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"390px"}
          height={"200px"}
        />
      </div>
    </div>
  )
}

export const GanttChart = () => {
  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ]
  const rows = [
    [
      "Research",
      "Find sources",
      null,
      new Date(2015, 0, 1),
      new Date(2015, 0, 5),
      null,
      100,
      null,
    ],
    [
      "Write",
      "Write paper",
      "write",
      null,
      new Date(2015, 0, 9),
      3 * 24 * 60 * 60 * 1000,
      25,
      "Research,Outline",
    ],
    [
      "Cite",
      "Create bibliography",
      "write",
      null,
      new Date(2015, 0, 7),
      1 * 24 * 60 * 60 * 1000,
      20,
      "Research",
    ],
    [
      "Complete",
      "Hand in paper",
      "complete",
      null,
      new Date(2015, 0, 10),
      1 * 24 * 60 * 60 * 1000,
      0,
      "Cite,Write",
    ],
    [
      "Outline",
      "Outline paper",
      "write",
      null,
      new Date(2015, 0, 6),
      1 * 24 * 60 * 60 * 1000,
      100,
      "Research",
    ],
  ]
  const data = [columns, ...rows];
  const options = {
    gantt: {
      criticalPathEnabled: false,
      innerGridHorizLine: {
        stroke: "#ffe0b2",
        strokeWidth: 2,
      },
      innerGridTrack: { fill: "#fff3e0" },
      innerGridDarkTrack: { fill: "#ffcc80" },
    },
  }

  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Gantt Chart</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Chart
          chartType="Gantt"
          width="390px"
          height="200px"
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}

export const GeoChart = () => {
  const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
    ["India", 350],
  ]

  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Geo Chart</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Chart
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                if (!chartWrapper) return;
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = data[selection[0].row + 1];
                console.log("Selected : " + region);
              },
            },
          ]}
          chartType="GeoChart"
          width="390px"
          height="200px"
          data={data}
        />
      </div>
    </div>
  )
}

export const SankeyChart = () => {
  const data = [
    ["From", "To", "Weight"],
    ["A", "X", 5],
    ["A", "Y", 7],
    ["A", "Z", 6],
    ["B", "X", 2],
    ["B", "Y", 9],
    ["B", "Z", 4],
  ]
  const options = {};
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Sankey Chart</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Chart
          chartType="Sankey"
          width="390px"
          height="200px"
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}