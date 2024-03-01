import { useState } from 'react'
import Home from './components/Home/Home'
import Applicants from './components/Applicants/ApplicantsSection'
import Professions from './components/Professions/Professions'
import Info from './components/ApplicantsInfo/Info'
import {Switch, Route} from 'react-router-dom'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <Switch>
          <Route path={'/'} exact component={Home}></Route>
          <Route path={'/applicants'} exact component={Applicants}></Route>
          <Route path={'/applicants/:id'} exact component={Info}></Route>
          <Route path={'/professions'} exact component={Professions}></Route>
        </Switch>
    </>
  )
}

export default App
