import React, { useCallback, useMemo, useState } from 'react'
import EOMHeader from './Include/EOMHeader'
import EOMStudent from './Content/EOMStudent'
import { EOMFooter } from './Include/EOMFooter'
function ExampleOfMemo() {
  const [bgColor, setBgColor] = useState('white')
  const [counter, setCounter] = useState(0)
  const handelSetBgColor = useCallback((color: any) => {
    setBgColor(color)
  }, [])
  const handelReset = () => {
    setCounter(0)
    setBgColor('white')
  }
  const student = useMemo(() => {
    return [
      {
        name: 'Rina Biswas',
        age: 55
      }, {
        name: 'Rahul Biswas',
        age: 32
      }, {
        name: 'Sunil Chnadre Biswas',
        age: 60
      }, {
        name: 'Arpita Biswas',
        age: 26
      }
    ]
  }, [])
  const handelCount = useCallback((type: any) => {
    setCounter((prev) => {
      if (type == '+') {
        return prev + 1
      } else {
        return prev - 1
      }
    })
  }, [])
  return (
    <React.Fragment>
      <div className='row p-3' style={{ backgroundColor: bgColor }}>
        <div className='col-12 text-center'>
          <span>{counter}</span>
          <button className='btn btn-warning ms-4' onClick={handelReset}>Reset</button>
        </div>
        <div className="col-12 mt-4">
          <div className="row">
            <div className='col-4 text-center'>
              <EOMHeader handelCount={handelCount} />
            </div>
            <div className='col-4'>
              <EOMStudent student={student} />
            </div>
            <div className='col-4 text-center'>
              <EOMFooter setBgColor={handelSetBgColor} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ExampleOfMemo
