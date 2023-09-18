import React, { useEffect, useState } from 'react';
import { useReducer } from 'react';

//import logo from './logo.svg';
import './App.css';
import Header from './components/Header.tsx';
import ContactForm from './components/ContactForm.tsx';
import { contactsReducer, State,Contact } from './contactsReducer.ts';
import ContactList from './components/ContactList.tsx';
import EditModal from './components/EditModal.tsx';

const initialState: State = {
  contacts:[]
  
}


function App() {
  const [state, dispatch] = useReducer(contactsReducer, initialState);
  const [showModal,setShowModal] = useState(false);
  const [dataToEdit,setDataToEdit] = useState <Contact | undefined>(undefined);

  useEffect(()=>{
    if(!showModal){
      setDataToEdit(undefined)
    }
  },[showModal]);

  const toggleModal = () => {
    setShowModal((show)=> !show);

  };

  const handleEdit = (id:number) => {
    setDataToEdit(state.contacts.find((contact) => contact.id === id));
    toggleModal();


  }
    console.log('state', state);


  return (
    <div className='App'>
    <div className='main-container'>
      <ContactForm
        dispatch={dispatch}
        dataToEdit={dataToEdit}
        toggleModal={toggleModal}
      />
      <hr />
      {state.contacts.length > 0 && (
        <ContactList
          contacts={state.contacts}
          handleEdit={handleEdit}
          dispatch={dispatch}
        />
      )}
    </div>
    <EditModal
      showModal={showModal}
      dataToEdit={dataToEdit}
      toggleModal={toggleModal}
      dispatch={dispatch}
    />
  </div>
  );
}

export default App;
