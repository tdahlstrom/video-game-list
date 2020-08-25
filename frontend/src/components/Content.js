import React from 'react'
import axios from 'axios'

import VideoGame from './subComponents/VideoGame'
import AlphabetList from './subComponents/AlphabetList'
import YearSelect from './subComponents/YearSelect'
import GenreSelect from './subComponents/GenreSelect'
import PlatformSelect from './subComponents/PlatformSelect'

import DataContext from '../contexts/DataContext'

class Content extends React.Component {
  constructor(props) {
    super(props)

    this.previousPage = this.previousPage.bind(this)
    this.nextPage = this.nextPage.bind(this)

    this.getOwnedGames = this.getOwnedGames.bind(this)
    this.alphabetListChange = this.alphabetListChange.bind(this)

    this.handleChange = this.handleChange.bind(this)
    this.selectOwned = this.selectOwned.bind(this)

    this.addGame = this.addGame.bind(this)
    this.deleteGame = this.deleteGame.bind(this)
  }

  componentDidMount() {
    this.context.update({
        videogames: [],
        userowned: [],
        year_of_release: "none",
        platform: "",
        genre: "none",
        skip: 0,
        char: "",
        querySize: 0
    })

    this.getOwnedGames()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.context.videogames !== nextState.videogames) {
      return true
    }
    if(this.context.userowned !== nextState.userowned) {
      return true
    }

    return false
  }

  getOwnedGames() {
    axios.get(`http://10.0.0.28:5000/ownedGames`)
      .then(response => {
        this.context.update({
          userowned: response.data
        }, () => {
          this.props.getVideogames()
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  addGame(object) {
    axios.post(`http://10.0.0.28:5000/ownedGames/add?object=${object}`)
      .then(res => {
        console.log(res.data)
        this.getOwnedGames()
      })
  }

  deleteGame(object) {
    axios.delete('http://10.0.0.28:5000/ownedGames/' + object)
      .then(res => {
        console.log(res.data)
        this.getOwnedGames()
      });
  }

  previousPage() {
    if(this.context.skip > 0) {
      this.context.update({
        skip: this.context.skip - this.context.limit
      }, () => {
        this.props.getVideogames()
      })
    }
  }

  nextPage() {
    this.context.update({
      skip: this.context.skip + this.context.limit
    }, () => {
      this.props.getVideogames()
    })
  }

  alphabetListChange(c) {
    this.context.update({
      char: String(c),
      skip: 0
    }, () => {
      this.props.getVideogames()
    })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.context.update({
      [name]: value
    }, () => {
      this.props.getVideogames()
    })
  }

  selectOwned(event, object) {
    if(event.target.checked) {
      this.addGame(object)
    } else {
      this.deleteGame(object)
    }
  }

  render() {
    return (
      <div>
        <AlphabetList alphabetListChange={this.alphabetListChange} />
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th><PlatformSelect platform={this.context.platform} handleChange={this.handleChange} /></th>
                <th><YearSelect year={this.context.year_of_release} handleChange={this.handleChange} /></th>
                <th><GenreSelect genre={this.context.genre} handleChange={this.handleChange} /></th>
                <th>Owned</th>
              </tr>
            </thead>
            <tbody>
              {
                this.context.videogames.map(currentvideogame =>
                  <VideoGame
                    videogame={currentvideogame}
                    key={currentvideogame._id}
                    userowned={this.context.userowned}
                    selectOwned={this.selectOwned}
                  />
                )
              }
            </tbody>
          </table>
          <div className="container">
            <button className="btn btn-light float-left" onClick={() => this.previousPage()}> Previous Page </button>
            <button className="btn btn-light float-right" onClick={() => this.nextPage()}> Next Page </button>
          </div>
        </div>
      </div>
    )
  }
}

Content.contextType = DataContext

export default Content
