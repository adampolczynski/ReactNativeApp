export default (state = { isLoggedIn: false }, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      console.log('LOGIN ACTION')
      return {
        ...state, isLoggedIn: true
      }
    case 'LOGOUT':
      return {
        ...state, isLoggedIn: false
      }
    default:
      return state
  }
}