import { useRef, useState } from "react";
import LoadingBar, { LoadingBarRef, useLoadingBar } from "react-top-loading-bar";

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <UsingHooks />
      <WithRef />
      <WithState />
      <WithProperties />
    </div>
  )
}

export const UsingHooks = () => {
  const { start, complete } = useLoadingBar({
    color: "blue",
    height: 2,
  });
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Using Hooks</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle widthFixed200">
        <button onClick={() => start()}>Start</button>
        <button onClick={() => complete()}>Complete</button>
      </div>
    </div>
  )
}

export const WithRef = () => {
  const ref = useRef<LoadingBarRef>(null);
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>With Ref</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle widthFixed200">
        <LoadingBar color="#f11946" ref={ref} shadow={true} />
        <button onClick={() => ref.current?.continuousStart()}>Start</button>
        <button onClick={() => ref.current?.staticStart()}>Static</button>
        <button onClick={() => ref.current?.complete()}>Complete</button>
      </div>
    </div>
  )
}

export const WithState = () => {
  const [progress, setProgress] = useState(0)
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>With State</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle widthFixed200">
        <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
        <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
        <button onClick={() => setProgress(progress - 10)}>Subtract 10%</button>
        <button onClick={() => setProgress(100)}>Complete</button>
      </div>
    </div>
  )
}

export const WithProperties = () => {
  const [progress, setProgress] = useState(0)
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>With Properties</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle widthFixed200">
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height={10}
          shadow={false}
          background="transparent"
        // loaderSpeed={100}
        // transitionTime={100}
        // waitingTime={100}
        // style={{
        //   backgroundColor: "yellow"
        // }}
        />
        <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
        <button onClick={() => setProgress(progress - 10)}>Subtract 10%</button>
      </div>
    </div>
  )
}