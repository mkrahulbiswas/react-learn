import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <TestingOne />
      <TestingTwo />
      <TestingThree />
      <TestingFour />
    </div>
  )
}

export const TestingOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon fullWidth">
        {/* <div className="exampleCommonPoints">
          <span>BasicImplementations</span>
        </div> */}
        <div className="exampleCommonContent exampleCommonContentFloat">
          <CircularProgressbar value={25} text={`25%`} />;
        </div>
        <div className="exampleCommonContent exampleCommonContentFloat">
          <CircularProgressbar value={0.66} maxValue={1} text={`${0.66 * 100}%`} />;
        </div>
        <div className="exampleCommonContent exampleCommonContentFloat">
          <CircularProgressbar value={66} />
        </div>
      </div>
    </div>
  )
}

export const TestingTwo = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonContent exampleCommonContentFloat">
          <CircularProgressbar value={16} strokeWidth={2} />
        </div>
        <div className="exampleCommonContent exampleCommonContentFloat">
          <CircularProgressbar value={26} text='RAHUL' />
        </div>
        <div className="exampleCommonContent exampleCommonContentFloat">
          <CircularProgressbar value={36} background={true} />
        </div>
        <div className="exampleCommonContent exampleCommonContentFloat">
          <CircularProgressbar value={46} background={true} backgroundPadding={5} />
        </div>
        <div className="exampleCommonContent exampleCommonContentFloat">
          <CircularProgressbar value={56} counterClockwise={true} />
        </div>
        <div className="exampleCommonContent exampleCommonContentFloat">
          <CircularProgressbar value={66} circleRatio={1} />
        </div>
      </div>
    </div>
  )
}

export const TestingThree = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>This is example of Build styling</span>
          <p>There styling is limited</p>
        </div>
        <div className="exampleCommonContent exampleCommonContentFloat">
          <CircularProgressbar value={66} styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // Text size
            textSize: '16px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(62, 152, 199, ${33 / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })} />
        </div>
      </div>
    </div>
  )
}

export const TestingFour = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>This is example of normal styling</span>
          <p>There styling is not limited</p>
        </div>
        <div className="exampleCommonContent exampleCommonContentFloat">
          <CircularProgressbar value={66} styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: `rgba(62, 152, 199, ${66 / 100})`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Customize transition animation
              transition: 'stroke-dashoffset 0.5s ease 0s',
              // Rotate the path
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: '#d6d6d6',
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Rotate the trail
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the text
            text: {
              // Text color
              fill: '#f88',
              // Text size
              fontSize: '16px',
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: '#3e98c7',
            },
          }} />
        </div>
      </div>
    </div>
  )
}