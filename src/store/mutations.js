import * as types from './mutation-types'

const mutations = {
    [types.UPDATE_COMPONENT_TYPE] (state, type) {
        state.componentType = type
    },
    [types.UPDATE_ROUTE_CHANGE] (state, change) {
        state.routeChange = change
    },
}

export default mutations