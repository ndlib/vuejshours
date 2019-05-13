import * as statuses from './APIStatuses'

export const getHoursForServicePoint = ({ state }) => {
  const key = ''
  if (state.hours.loaded === statuses.SUCCESS && !state.hours.json[key]) {
    return null
  }

  if (!state.hours) {
    state.hours = {}
  }
  hours.name = name
  hours.status = status
  hours.servicePoint = servicePoint
  return hours
}
