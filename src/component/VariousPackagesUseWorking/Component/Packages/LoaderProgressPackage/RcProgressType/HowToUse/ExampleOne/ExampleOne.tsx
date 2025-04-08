import { Line, Circle } from 'rc-progress';

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <FastProgress />
      <GapProgress />
      <GradientProgress />
    </div>
  )
}

export const FastProgress = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommonPoints">
        <span>Fast Progress</span>
      </div>
      <div className="exampleCommonContent widthFixed200">
        <Line
          percent={50}
          strokeWidth={4}
          strokeColor="#35b12b"
          trailColor='#c56129'
        />
        <Circle
          percent={10}
          strokeWidth={4}
          strokeColor="#35b12b"
          trailColor='#c56129'
        />
      </div>
    </div>
  )
}

export const GapProgress = () => {
  return (
    <>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent widthFixed200">
          <Line
            percent={15}
            gapDegree={70}
            gapPosition="top"
            strokeWidth={6}
            strokeLinecap="square"
            strokeColor={'green'}
            trailColor='red'
          />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent widthFixed200">
          <Circle
            percent={15}
            gapDegree={70}
            gapPosition="top"
            strokeWidth={6}
            strokeLinecap="square"
            strokeColor={'green'}
            trailColor='red'
          />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent widthFixed200">
          <Line
            percent={[25, 10, 35]}
            gapDegree={70}
            gapPosition="bottom"
            strokeWidth={6}
            trailWidth={6}
            strokeLinecap="round"
            strokeColor={['red', 'green', 'yellow']}
          />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent widthFixed200">
          <Circle
            percent={[25, 10, 35]}
            gapDegree={70}
            gapPosition="bottom"
            strokeWidth={6}
            trailWidth={6}
            strokeLinecap="round"
            strokeColor={['red', 'green', 'yellow']}
          />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent widthFixed200">
          <Line
            percent={35}
            gapDegree={70}
            gapPosition="left"
            strokeWidth={6}
            strokeLinecap="square"
            strokeColor={'green'}
            trailColor='yellow'
          />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent widthFixed200">
          <Circle
            percent={35}
            gapDegree={70}
            gapPosition="left"
            strokeWidth={6}
            strokeLinecap="square"
            strokeColor={'green'}
            trailColor='yellow'
          />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent widthFixed200">
          <Line
            percent={45}
            gapDegree={70}
            gapPosition="right"
            strokeWidth={6}
            strokeLinecap="square"
            strokeColor={'blue'}
            trailColor='blue'
          />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent widthFixed200">
          <Circle
            percent={45}
            gapDegree={70}
            gapPosition="right"
            strokeWidth={6}
            strokeLinecap="square"
            strokeColor={'blue'}
            trailColor='blue'
          />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent widthFixed200">
          <Line
            percent={55}
            gapDegree={70}
            strokeWidth={6}
            strokeColor={{
              '0%': 'red',
              '99%': 'blue',
              '100%': 'green',
            }}
          />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent widthFixed200">
          <Circle
            percent={55}
            gapDegree={70}
            strokeWidth={6}
            strokeColor={{
              '0%': 'red',
              '99%': 'blue',
              '100%': 'green',
            }}
          />
        </div>
      </div>
    </>
  )
}

export const GradientProgress = () => {
  return (
    <>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent widthFixed200">
          <Circle
            percent={90}
            strokeWidth={6}
            strokeLinecap="round"
            strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
          />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent widthFixed200">
          <Circle
            percent={100}
            strokeWidth={6}
            strokeLinecap="round"
            strokeColor={{ '100%': '#108ee9', '0%': '#87d068' }}
          />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent widthFixed200">
          <Circle
            percent={90}
            strokeWidth={6}
            strokeColor={{ '0%': 'green', '99%': 'red', '100%': 'blue' }}
          />
        </div>
      </div>
    </>
  )
}