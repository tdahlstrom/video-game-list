import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import GameList from './components/GameList'
import Collection from './components/Collection'

import DataProvider from './contexts/DataProvider'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <DataProvider>
        <Router>
        <div className="bg-light">
          <div className="container">
            <Navbar />
            <Route path="/" exact component={GameList} />
            <Route path="/collection" exact component={Collection} />
          </div>
        </div>
        </Router>
      </DataProvider>
    )
  }
}

export default App
