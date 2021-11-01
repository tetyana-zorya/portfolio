

export default {

  isLoggedIn: state => {
    let loggedIn = false;
    console.log(state.loggedUser.uid)
    if (state.loggedUser.uid) { loggedIn = true }
    console.log(loggedIn)
    return loggedIn
  },

  getLoggedUser: state => {
    return state.loggedUser
  }
}