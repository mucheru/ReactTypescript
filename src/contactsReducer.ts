export interface Contact {
    id:Number;
    firstName: string;
    lastName: string;
    phone: string;
  }
  export interface Action {
    type: 'ADD_CONTACT'
    payload: Contact;
  }
  export interface State {
    contacts: Contact[];
  }
  export const contactsReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'ADD_CONTACT':
        return {
          ...state,
          contacts: [...state.contacts, action.payload]
        };
        case 'UPDATE_CONTACT':
        const { id, updates } = action.payload;
          return {
          ...state,
          contacts: state.contacts.map((contact) => {
            if (contact.id === id) {
              return {
                ...contact,
                ...updates
              };
            }
            return contact;
          })
        };
      default:
        return state;
    };

    
  };