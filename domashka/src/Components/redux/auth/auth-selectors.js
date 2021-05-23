const getAutinficated = state => state.auth.isAuthenticated

const getName = state => state.auth.user.name

export default {
  getAutinficated,
  getName
}