export function changeData(payload) {
  return {type: 'DATA/CHANGEDATA', payload }
}

//addd fav
export function addSave(payload) {
  return {type: 'SAVE/ADDSAVE', payload }
}

export function setPage(payload) {
  return {type: 'PAGE/CHANGEPAGE', payload}
}