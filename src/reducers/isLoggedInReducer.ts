export default (state = false, action:any) => {
    switch (action.type) {
     case 'IS_LOGGED_IN':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }