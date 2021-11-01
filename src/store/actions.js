export default {

  setInfo({commit}, payload) {
    commit('SET_USER_INFO', payload);
    commit('SET_USER_ORG', payload.color)
  } 
  
}