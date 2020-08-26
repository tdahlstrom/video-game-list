import React from 'react'
import DataContext from './DataContext'

class DataProvider extends React.Component {
  constructor(props) {
    super(props)
    this.updateState = this.updateState.bind(this)
    this.state = {
      videogames: [],
      userowned: [],
      year_of_release: "none",
      platform: "",
      genre: "none",
      limit: 15,
      skip: 0,
      char: "",
      querySize: 0,
      update: this.updateState
    }
  }

  updateState(values, followUpFunction) {
    this.setState(values, followUpFunction)
  }

  render() {
    return (
      <DataContext.Provider value={this.state}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

export default DataProvider
