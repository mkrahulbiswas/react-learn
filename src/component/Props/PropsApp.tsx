import React from 'react'
import './PropsApp.css'
import FCPPropsParent from './PreviousProps/FunctionBased/ChildToParent/FCPPropsParent'

function PropsApp() {
  return (
    <React.Fragment>
      {/* <PropsInFunctionalComponent student={'Rahul Biswas'} email='rahul@gmail.com' others={{ address: 'Bethuadahari', age: 29, pin: '741126' }} /> */}
      {/* <PropsInClassComponent student={'Rahul Biswas'} email='rahul@gmail.com' others={{ address: 'Bethuadahari', age: 29, pin: '741126' }} ></PropsInClassComponent> */}
      {/* <FunctionAsPropsParent /> */}
      {/* <CountingExpOne /> */}
      {/* <FPCPropsParent /> */}
      <FCPPropsParent />
    </React.Fragment>
  )
}
export default PropsApp
