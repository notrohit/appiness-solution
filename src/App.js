import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import IsAuthenticated from "./components/IsAuthenticated"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <IsAuthenticated>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </IsAuthenticated>
      </Switch>
		</Router>
  )
}

export default App
