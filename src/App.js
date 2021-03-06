import React,{Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar/>
          <Switch>
            <Route exact path='/Nav' component={Navbar}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;