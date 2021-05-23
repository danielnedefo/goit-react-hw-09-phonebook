import {useSelector,useDispatch} from 'react-redux'
import { v4 } from "uuid";
import * as actions from '../redux/contacts/contact-action'
import contactSelectors from '../redux/contacts/contacts-selectors'


 const Filter = ({ searchInputId }) => {
  const dispatch = useDispatch()
  const filter = useSelector(contactSelectors.filterForContacts)
  searchInputId = v4()
  return (
    <>
      <label htmlFor={searchInputId}/>Search
    <input id={searchInputId}
        type="text"
        value={filter}
        onChange={(e) =>dispatch(actions.filterContact(e.target.value))}/>
    </>
  )
}
export default Filter
// const mapDispatchToProps = dispatch => {
  
//   return {
//    onChange: ({target}) => dispatch(actions.filterContact(target.value))
//   }
// }
// export default  connect(null,mapDispatchToProps)(Filter)

