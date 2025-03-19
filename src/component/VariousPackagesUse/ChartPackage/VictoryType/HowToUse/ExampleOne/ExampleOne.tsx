import { VictoryArea, VictoryChart, VictoryLine, VictoryPie, VictoryPolarAxis, VictoryStack, VictoryTheme, VictoryVoronoi } from 'victory';

export const ExampleOne = () => {
  return (
    <>
      <LineChart />
      <AreaChart />
      <VoronoiChart />
      <PieChart />
    </>
  )
}

export const LineChart = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Line Chart One</span>
        </div>
        <div className="exampleCommonContent">
          <div style={{ width: '390px', height: '200px' }}>
            <VictoryChart
              polar
              theme={VictoryTheme.clean}
              domain={{ y: [0, 10] }}
            >
              <VictoryPolarAxis
                dependentAxis
                style={{
                  axis: { stroke: "none" },
                }}
                tickFormat={() => ""}
              />
              <VictoryPolarAxis
                tickValues={[
                  0,
                  Math.PI / 2,
                  Math.PI,
                  (3 * Math.PI) / 2,
                ]}
                tickFormat={[
                  "2π",
                  "π/2",
                  "π",
                  "3π/2",
                ]}
                labelPlacement="vertical"
              />
              {[5, 4, 3, 2, 1].map((val, i) => {
                return (
                  <VictoryLine
                    key={i}
                    samples={100}
                    style={{
                      data: {
                        stroke: (VictoryTheme.clean?.palette?.qualitative?.[i] ?? "black"),
                      },
                    }}
                    y={(d) =>
                      val * (1 - Math.cos(d.x))
                    }
                  />
                );
              })}
            </VictoryChart>
          </div>
        </div>
      </div>
    </>
  )
}

export const AreaChart = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Area Chart</span>
        </div>
        <div className="exampleCommonContent">
          <div style={{ width: '390px', height: '200px' }}>
            <VictoryChart
              theme={VictoryTheme.clean}
            >
              <VictoryStack colorScale="qualitative">
                <VictoryArea
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 7 },
                  ]}
                />
                <VictoryArea
                  data={[
                    { x: 1, y: 1 },
                    { x: 2, y: 4 },
                    { x: 3, y: 5 },
                    { x: 4, y: 7 },
                    { x: 5, y: 5 },
                  ]}
                />
                <VictoryArea
                  data={[
                    { x: 1, y: 3 },
                    { x: 2, y: 2 },
                    { x: 3, y: 6 },
                    { x: 4, y: 2 },
                    { x: 5, y: 6 },
                  ]}
                />
                <VictoryArea
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 3 },
                    { x: 4, y: 4 },
                    { x: 5, y: 7 },
                  ]}
                />
              </VictoryStack>
            </VictoryChart>
          </div>
        </div>
      </div>
    </>
  )
}

export const VoronoiChart = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Voronoi Chart</span>
        </div>
        <div className="exampleCommonContent">
          <div style={{ width: '390px', height: '200px' }}>
            <VictoryVoronoi
              theme={VictoryTheme.clean}
              data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export const PieChart = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Pie Chart</span>
        </div>
        <div className="exampleCommonContent">
          <div style={{ width: '390px', height: '200px' }}>
            <VictoryPie
              radius={({ datum }) => datum.y + 75}
              data={[
                { x: "Cats", y: 30 },
                { x: "Dogs", y: 35 },
                { x: "Birds", y: 25 },
                { x: "Rabbits", y: 10 },
              ]}
              theme={VictoryTheme.clean}
            />
          </div>
        </div>
      </div >
    </>
  )
}