import React from 'react'

function AlphabetList(props) {
  return (
    <div className="container text-center btn-group-sm btn-group-justified">
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("\\W")}}>.</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("\\d")}}>#</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("A")}}>A</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("B")}}>B</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("C")}}>C</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("D")}}>D</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("E")}}>E</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("F")}}>F</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("G")}}>G</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("H")}}>H</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("I")}}>I</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("J")}}>J</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("K")}}>K</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("L")}}>L</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("M")}}>M</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("N")}}>N</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("O")}}>O</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("P")}}>P</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("Q")}}>Q</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("R")}}>R</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("S")}}>S</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("T")}}>T</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("U")}}>U</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("V")}}>V</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("W")}}>W</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("X")}}>X</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("Y")}}>Y</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("Z")}}>Z</button>
      <button className="btn btn-light" onClick={() => {props.alphabetListChange("")}}>All</button>
    </div>
  )
}

export default AlphabetList
