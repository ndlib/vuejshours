import { HOURS_REQUEST, HOURS_RECEIVE } from './mutation-types'

export const fetchHours = ({ commit }) => {
  commit(HOURS_REQUEST)
  let url = 'https://qqmk3lr1a9.execute-api.us-east-1.amazonaws.com/devJon/hours'
  return fetch(url)
    .then(response => response.json())
    .then(json => commit(HOURS_RECEIVE, { json }))
}
