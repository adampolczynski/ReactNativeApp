export default (state = {}, action:any) => {
    switch (action.type) {
     case 'USER_DATA_REDUCER':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }