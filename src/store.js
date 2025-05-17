export const initialStore=()=>{
  return{
    BASE_URL: "https://playground.4geeks.com/contact/agendas",
    SLUG: "Ian",
    contacts: []
  }
}

/*

action = {
  type: "",
  payload: data
}

*/

export default function storeReducer(store, action = {}) {
  switch(action.type){
    
    default:
      throw Error('Unknown action.');
  }    
}
