import React from 'react'

function VideoGame (props) {
  function isChecked() {
    return props.userowned.some( gameId => gameId.object === String(props.videogame._id) )
  }

  return (
    <tr>
      <td>{props.videogame.name}</td>
      <td>{props.videogame.platform}</td>
      <td>{props.videogame.year_of_release}</td>
      <td>{props.videogame.genre}</td>
      <td style={{ textAlign: "center" }}>
        <input type="checkbox"
               onChange={(event) => props.selectOwned(event, String(props.videogame._id))}
               checked={isChecked()}
        />
      </td>
    </tr>
  )
}

export default VideoGame
