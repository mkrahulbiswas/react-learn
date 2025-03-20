import chroma from 'chroma-js';

export const ExampleOne = () => {
  return (
    <>
      <BasicImplement />
      <AdvanceImplement />
    </>
  )
}

export const BasicImplement = () => {
  const data = {
    '1': chroma('hotpink'),
    '2': chroma('#ff3399'),
    '3': chroma('F39'),
    '4': chroma(0xff3399),
    '5': chroma(0xff, 0x33, 0x99),
    '6': chroma(255, 51, 153),
    '7': chroma([255, 51, 153]),
    '8': chroma(330, 1, 0.6, 'hsl'),
    '9': chroma({ h: 120, s: 1, l: 0.75 }),
    '10': chroma({ l: 80, c: 25, h: 200 }),
    '11': chroma({ c: 1, m: 0.5, y: 0, k: 0.2 }),
    '12': chroma.valid('red'),
    '13': chroma.valid('bread'),
    '14': chroma.valid('#F0000D'),
    '15': chroma.valid('#FOOOOD'),
    '16': chroma.hsl(330, 1, 0.6),
    '17': chroma.lab(40, -20, 50),
    '18': chroma('hotpink').lab(),
    '19': chroma.setLabWhitePoint('F2'),
    '20': chroma('hotpink').lab(),
    '21': chroma.getLabWhitePoint(),
    '22': chroma.lch(80, 40, 130),
    '23': chroma(80, 40, 130, 'lch'),
    '24': chroma.hcl(130, 40, 80),
    '25': chroma(130, 40, 80, 'hcl'),
    '26': chroma.oklab(0.4, -0.2, 0.5),
    '27': chroma.oklch(0.5, 0.2, 240),
    '28': chroma(0.8, 0.12, 60, 'oklch'),
    '29': chroma.cmyk(0.2, 0.8, 0, 0),
    '30': chroma(0.2, 0.8, 0, 0, 'cmyk'),
    '31': chroma.gl(0.6, 0, 0.8, 0.5),
    '32': chroma(0.6, 0, 0.8, 'gl'),
    '33': chroma.temperature(2000),
    // f = function (i) {
    //   return chroma.temperature(i * 30000)
    // }
    '34': chroma.mix('red', 'blue'),
    '35': chroma.mix('red', 'blue', 0.75),
    '36': chroma.mix('red', 'blue', 0.5, 'rgb'),
    '37': chroma.mix('red', 'blue', 0.5, 'hsl'),
    '38': chroma.mix('red', 'blue', 0.5, 'lab'),
    '39': chroma.mix('red', 'blue', 0.5, 'lch'),
    '40': chroma.mix('red', 'blue', 0.5, 'lrgb'),
    '41': chroma.average(['#ddd', 'yellow', 'red', 'teal']),
    '42': chroma.average(['#ddd', 'yellow', 'red', 'teal'], 'rgb'),
    '43': chroma.average(['#ddd', 'yellow', 'red', 'teal'], 'lab'),
    '44': chroma.average(['#ddd', 'yellow', 'red', 'teal'], 'lch'),
    '45': chroma.average(['red', 'rgba(0,0,0,0.5)']).css(),
    '46': chroma.average(['#ddd', 'yellow', 'red', 'teal'], 'lch'),
    '47': chroma.average(['#ddd', 'yellow', 'red', 'teal'], 'lch', [1.5, 0.5, 1, 2.3]),
    '48': chroma.blend('4CBBFC', 'EEEE22', 'multiply'),
    '49': chroma.random(),
    '50': chroma.contrast('pink', 'hotpink'),
    '51': chroma.contrastAPCA('hotpink', 'pink'),
    '52': chroma.distance('#fff', '#ff0', 'rgb'),
    '53': chroma.distance('#fff', '#ff0'),
    '54': chroma.deltaE('#ededee', '#ededee'),
    // '55': chroma.brewer.OrR,
    '56': chroma.scale('RdBu').colors(5),
    '57': chroma.scale(chroma.brewer.RdBu.slice(1, -1)).colors(5),
    '58': chroma.scale(['#ca0020', '#f4a582', '#f7f7f7', '#92c5de', '#0571b0']),
    '59': Object.keys(chroma.brewer),
  }
  console.log(data);

  return (
    <>
      <div className="exampleCommon triennialWidth">
        <div className="exampleCommonPoints">
          <span>Basic implementation</span>
        </div>
        <div className="exampleCommonContent">
          <span>Check in console</span>
          {/* <span style={{ backgroundColor: data }}>{data}</span> */}
        </div>
      </div>
    </>
  )
}

export const AdvanceImplement = () => {
  const dataOne: any = chroma('hotpink').luminance(0.5).hex();
  const dataTwo: any = chroma.scale(['#fafa6e', '#2A4858']).mode('lch').colors(10);
  console.log(dataTwo);

  return (
    <>
      <div className="exampleCommon triennialWidth">
        <div className="exampleCommonPoints">
          <span>Advance implementation</span>
        </div>
        <div className="exampleCommonContent">
          <span style={{ backgroundColor: `#${dataOne}` }}>{dataOne}</span>
        </div>
      </div>
      <div className="exampleCommon triennialWidth">
        <div className="exampleCommonPoints">
          <span>Multiple color</span>
        </div>
        <div className="exampleCommonContent exampleCommonContentFullWidth">
          {dataTwo.map((color: any) => (
            <span key={color} style={{ backgroundColor: color }}>{color}</span>
          ))}
        </div>
      </div>
    </>
  )
}