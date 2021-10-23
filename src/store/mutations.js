

export default {

  SET_USER(state, credentials) {
    console.log(credentials)
    let loggedUser = {}
    if (credentials.user) {
      loggedUser = {
        email: credentials.user.email,
        token: credentials.user.accessToken,
        last_login: credentials.user.metadata.lastSignInTime,
        email_verified: credentials.user.emailVerified,
        uid: credentials.user.uid,
        name: credentials.user.displayName,
      }
    }

    state.loggedUser = loggedUser
  },

  SET_LOGOUT(state) {
    state.loggedUser = ''
  },

  SET_USER_INFO(state, info) {
    console.log(info)
    state.loggedUser.color = info.color
  }
}