import React, { Profiler } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Massages from './Masseges/massages'
import Music from './Music/music'
import News from './news'
import Profile from './Profile/profile'
import Settings from './Settings/settings'

 function Main() {
  return (
    <BrowserRouter>
     <div className="main">
      <Route path='/profile' component={Profile}/>
      <Route path='/massages' component={Massages}/>
      <Route path='/music' component={Music}/>
      <Route path='/news' component={News}/>
      <Route path='/settings' component={Settings}/>
    </div>
    </BrowserRouter>
   
  )
}
export default Main
