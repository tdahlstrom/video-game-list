import React from 'react'
import axios from 'axios'

import Content from './Content'

import DataContext from '../contexts/DataContext'

class Collection extends React.Component {
  constructor(props) {
    super(props)

    this.getVideogames = this.getVideogames.bind(this)
  }

  getVideogames() {
    let uri1 = `http://10.0.0.28:5000/collection/?` +
      `char=${this.context.char}&` +
      `limit=${this.context.limit}&` +
      `skip=${this.context.skip}&` +
      `platform=${this.context.platform}&` +
      `genre=${this.context.genre}&` +
      `year_of_release=${this.context.year_of_release}`

    axios.get(uri1)
      .then(response => {
        this.context.update({
          videogames: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })

    let uri2 = `http://10.0.0.28:5000/collection/total/?` +
      `char=${this.context.char}&` +
      `platform=${this.context.platform}&` +
      `genre=${this.context.genre}&` +
      `year_of_release=${this.context.year_of_release}`

    axios.get(uri2)
      .then(response => {
        this.context.update({
          querySize: parseInt(response.data)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <Content getVideogames={this.getVideogames} />
    )
  }
}

Collection.contextType = DataContext

export default Collection
