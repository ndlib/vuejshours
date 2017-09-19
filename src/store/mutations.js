import { HOURS_REQUEST, HOURS_RECEIVE } from './mutation-types'

const mutations = {
  [HOURS_REQUEST] (state) {
    state.hours = { loaded: false, json: undefined }
  },
  [HOURS_RECEIVE] (state, { json }) {
    state.hours = { loaded: true, json }
  }
}

export default mutations
