import * as types from './mutation-types'

let mutations = {
  [types.ADD](state,count){
    state.count ++;
  },
  [types.MINUS](state,count){
    state.count--;
  }
}

export default mutations