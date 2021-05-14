import { findDOMNode } from "react-dom";
import {connect} from 'react-redux'
import { v4 } from "uuid";
import * as actions from '../redux/contacts/contact-action'

const Filter = ({ searchInputId, filter, onChange }) => {
  searchInputId = v4()
  return (
    <>
      <label />Search<label/>
    <input id={searchInputId}
        type="text"
        value={filter}
         onChange={onChange}/>
    </>
  )
  
}
const mapStateToProps = state => {
  return {
    filter: state.filter
  }
}
const mapDispatchToProps = dispatch => {
  
  return {
   onChange: ({target}) => dispatch(actions.filterContact(target.value))
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Filter)

