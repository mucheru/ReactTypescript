import { FC } from "react";
import { Modal } from "react-bootstrap";
import { Action,Contact } from "../contactsReducer.tsx";
import ContactForm from './ContactForm.tsx';

interface EditModalProps {
    showModal:boolean;
    dataToEdit:Contact | undefined;
    toggleModal: ()=>void;
    dispatch:React.Dispatch<Action>
}

const EditModal:FC<EditModalProps>= ({
    toggleModal,
    dataToEdit,
    showModal,
    dispatch
})=>{

    return(
        <Modal show={showModal} onHide={toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Update Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ContactForm
                dispatch={dispatch}
                dataToEdit ={dataToEdit}
                toggleModal= {toggleModal}
                
                />
            </Modal.Body>
        </Modal>
    )

}
export default EditModal;