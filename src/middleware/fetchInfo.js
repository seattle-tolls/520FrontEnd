import { FETCH_TOLL_INFO } from '../constants/action-types'
import { setTollInfo } from '../actions/toll'
const apiURL = process.env.API_URL

const inits = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}

const fetchInfo = ({ dispatch }) => next => action => {

  if(action.type !== FETCH_TOLL_INFO)
    return next(action)

  fetch(`${apiURL}/api/toll`, inits)
    .then(res => {
      return res.json()
    })
    .then(data => {
      dispatch(setTollInfo(data))
    })
    .catch(err=>console.log('ERROR:',err))
}


export default fetchInfo