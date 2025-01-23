import React from 'react'
import './ReactReduxApp.css'
import HomeContainer from './Containers/HomeContainer'
import HeaderContainer from './Containers/HeaderContainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Services/Reducers/Index'

const store = createStore(rootReducer)
function ReactReduxApp() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <HeaderContainer />
        <HomeContainer />
      </React.Fragment>
    </Provider>
  )
}
export default ReactReduxApp
