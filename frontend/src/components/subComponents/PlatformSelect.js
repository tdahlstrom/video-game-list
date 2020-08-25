import React from 'react'

function PlatformSelect(props) {
  return (
    <select
      value={props.platform.platform}
      name="platform"
      onChange={(event) => props.handleChange(event)}
    >
      <option value="">Platform</option>
      <option value="2600">2600</option>
      <option value="3DO">3DO</option>
      <option value="3DS">3DS</option>
      <option value="DC">DC</option>
      <option value="DS">DS</option>
      <option value="GB">GB</option>
      <option value="GBA">GBA</option>
      <option value="GC">GC</option>
      <option value="GEN">GEN</option>
      <option value="GG">GG</option>
      <option value="N64">N64</option>
      <option value="NES">NES</option>
      <option value="NG">NG</option>
      <option value="PC">PC</option>
      <option value="PCFX">PCFX</option>
      <option value="PS">PS</option>
      <option value="PS2">PS2</option>
      <option value="PS3">PS3</option>
      <option value="PS4">PS4</option>
      <option value="PSP">PSP</option>
      <option value="PSV">PSV</option>
      <option value="SAT">SAT</option>
      <option value="SCD">SCD</option>
      <option value="SNES">SNES</option>
      <option value="TG16">TG16</option>
      <option value="WS">WS</option>
      <option value="Wii">Wii</option>
      <option value="WiiU">WiiU</option>
      <option value="X360">X360</option>
      <option value="XB">XB</option>
      <option value="XOne">XOne</option>
    </select>
  )
}

export default PlatformSelect
