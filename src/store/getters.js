

export default {

  isLoggedIn: state => {
    let loggedIn = false;
    console.log(state.loggedUser.uid)
    if (state.loggedUser.uid) { loggedIn = true }
    return loggedIn
  },

  getLoggedUser: state => {
    return state.loggedUser
  }
}