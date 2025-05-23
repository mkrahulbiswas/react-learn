export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className='vpu_ocoplmimotceic_item'>
        {/* <div className="vpu_ocoplmimotceici_top">
          <span>Making <b>different position</b> of pagination</span>
        </div> */}
        <div className="vpu_ocoplmimotceici_middle">
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        </div>
      </div>

      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_top">
          <span>Grid</span>
        </div>
        <div className="vpu_ocoplmimotceici_middle">
          <div className="grid grid-cols-4 gap-4">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div className="col-span-3 grid grid-cols-subgrid gap-4">
              <div className="col-start-2">06</div>
            </div>
          </div>
        </div>
      </div>

      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_top">
          <span>Color</span>
        </div>
        <div className="vpu_ocoplmimotceici_middle">
          <p className="text-blue-600/100 dark:text-sky-400/100">The quick brown fox...</p>
          <p className="text-blue-600/75 dark:text-sky-400/75">The quick brown fox...</p>
          <p className="text-blue-600/50 dark:text-sky-400/50">The quick brown fox...</p>
          <p className="text-blue-600/25 dark:text-sky-400/25">The quick brown fox...</p>
        </div>
      </div>

      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_top">
          <span>Background Color</span>
        </div>
        <div className="vpu_ocoplmimotceici_middle">
          <button className="p-2 bg-blue-500 ...">Button A</button>
          <button className="p-2 ml-2 bg-cyan-500 ...">Button B</button>
          <button className="p-2 ml-2 bg-pink-500 ...">Button C</button>
        </div>
      </div>
    </div>
  )
}