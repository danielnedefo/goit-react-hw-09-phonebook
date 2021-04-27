import { findDOMNode } from "react-dom";
import { v4 } from "uuid";

const Filter = ({ searchInputId, value, onChange }) => {
  searchInputId = v4()
  return (
    <>
      <label />Search<label/>
    <input id={searchInputId}
          type="text"
          value={value}
          onChange={onChange}/>
    </>
  )
  
}
export default Filter