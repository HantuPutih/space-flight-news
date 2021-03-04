const queryString = require('query-string')

export function addSave(payload) {
  return {type: 'SAVE/ADDSAVE', payload }
}

export const setFlight = (payload) => ({
  type: 'FLIGHT/SETFLIGHT',
  payload
})

export const setDetail = (payload) => ({
  type: 'DETAIL/SETDETAIL',
  payload
})

export const setFlightLoading = (payload) => ({
  type: 'FLIGHTLOADING/SETFLIGHTLOADING',
  payload
})

export const setDetailLoading = (payload) => ({
  type: 'DETAILLOADING/SETDETAILLOADING',
  payload
})

export const setSearch = (payload) => ({
  type: 'SEARCH/SETSEARCH',
  payload
})



export function fetchFlight(payload) {
  return dispatch => {
    dispatch(setFlightLoading(true))
    fetch('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=12')
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res.json()
    })
    .then(data => 
      dispatch(setFlight(data))
    )
    .catch(error => {
      console.log(error, 'dari useFetch error')
    })
    .finally(
      dispatch(setFlightLoading(false))
    )
  }
  
}

export function fetchDetail(id) {
  return dispatch => {
    dispatch(setDetailLoading(true))

    fetch(`https://test.spaceflightnewsapi.net/api/v2/articles/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res.json()
    })
    .then(data => 
      dispatch(setDetail(data))
    )
    .catch(error => {
      console.log(error, 'dari useFetch error')
    })
    .finally(
      dispatch(setDetailLoading(false))
    )
  }
}

export function search(payload) {
  return dispatch => {
    let value = queryString.stringify(payload).split('=')[1]
    fetch(`https://test.spaceflightnewsapi.net/api/v2/articles?_limit=12&_sort=${value}`)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      dispatch(setSearch(data))
    })
    .catch(error => {
      console.log(error, 'dari useFetch error')
    })
  }
}
