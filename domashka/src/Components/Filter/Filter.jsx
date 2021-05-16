import {connect} from 'react-redux'
import { v4 } from "uuid";
import * as actions from '../redux/contacts/contact-action'
import contactSelectors from '../redux/contacts/contacts-selectors'


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
    filter: contactSelectors.filterForContacts(state)
  }
}
const mapDispatchToProps = dispatch => {
  
  return {
   onChange: ({target}) => dispatch(actions.filterContact(target.value))
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Filter)

