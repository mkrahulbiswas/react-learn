// import { RadialChart, Sunburst } from "react-vis";

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <RadialChartExample />
      <SunburstChartExample />
    </div>
  );
}

export const RadialChartExample = () => {
  // const myData = [{ angle: 1 }, { angle: 5 }, { angle: 2 }]
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Radial Chart</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        {/* <RadialChart
            data={myData}
            width={390}
            height={200} /> */}
      </div>
    </div>
  )
}

export const SunburstChartExample = () => {
  // const myData = {
  //   "title": "analytics",
  //   "color": "#12939A",
  //   "children": [
  //     {
  //       "title": "cluster",
  //       "children": [
  //         { "title": "AgglomerativeCluster", "color": "#12939A", "size": 3938 },
  //         { "title": "CommunityStructure", "color": "#12939A", "size": 3812 },
  //         { "title": "HierarchicalCluster", "color": "#12939A", "size": 6714 },
  //         { "title": "MergeEdge", "color": "#12939A", "size": 743 }
  //       ]
  //     },
  //     {
  //       "title": "graph",
  //       "children": [
  //         { "title": "BetweennessCentrality", "color": "#12939A", "size": 3534 },
  //         { "title": "LinkDistance", "color": "#12939A", "size": 5731 },
  //         { "title": "MaxFlowMinCut", "color": "#12939A", "size": 7840 },
  //         { "title": "ShortestPaths", "color": "#12939A", "size": 5914 },
  //         { "title": "SpanningTree", "color": "#12939A", "size": 3416 }
  //       ]
  //     },
  //     {
  //       "title": "optimization",
  //       "children": [
  //         { "title": "AspectRatioBanker", "color": "#12939A", "size": 7074 }
  //       ]
  //     }
  //   ]
  // }
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Sunburst Chart</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        {/* <Sunburst
            hideRootNode
            colorType="literal"
            data={myData}
            height={200}
            width={390} /> */}
      </div>
    </div>
  )
}