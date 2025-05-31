export const initialStore=()=>{     // reducer initiates funtion
  return{
    BASE_URL: "https://playground.4geeks.com/contact/agendas",
    SLUG: "Ian",
    contacts: []
  }
}

/*

action = {
  type: "SET_CONTACTS",
  payload: contacts 
}

*/

export default function storeReducer(store, action = {}) {    // the reducer function
  switch(action.type){    // action {type: "SOMETHING like add_task", payload: "values like the-specific-task"}
      case 'SET_CONTACTS':
        return {
          ...store,
          contacts: action.payload
        };
    default:
      throw Error('Unknown action.');
  }    
}
