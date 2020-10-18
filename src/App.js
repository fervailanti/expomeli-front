import React from 'react'
import SearchBox from './containers/SearchBox'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Results from './containers/Results'
import ItemSummary from './containers/ItemSummary'
import Lobby from './components/Lobby'
import './styles/build.css'

const App = () => (
  <BrowserRouter>
    <SearchBox />
    <Switch>
      <Route path="/items/:id" component={ItemSummary} />
      <Route path="/items" component={Results} />
      <Route path="/" component={Lobby} />
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>
)

export default App
