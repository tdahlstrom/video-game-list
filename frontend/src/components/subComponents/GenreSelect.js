import React from 'react'

function GenreSelect(props) {
  return (
    <select
      value={props.genre.genre}
      name="genre"
      onChange={(event) => props.handleChange(event)}
    >
      <option value="none">Genre</option>
      <option value="Action">Action</option>
      <option value="Adventure">Adventure</option>
      <option value="Fighting">Fighting</option>
      <option value="Misc">Misc</option>
      <option value="Platform">Platform</option>
      <option value="Puzzle">Puzzle</option>
      <option value="Racing">Racing</option>
      <option value="Role-Playing">Role-Playing</option>
      <option value="Shooter">Shooter</option>
      <option value="Simulation">Simulation</option>
      <option value="Sports">Sports</option>
      <option value="Strategy">Stretegy</option>
      <option value="">Undefined</option>
    </select>
  )
}

export default GenreSelect
