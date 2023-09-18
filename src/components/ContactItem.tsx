import { FC } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import { Contact ,Action} from '../contactsReducer';
interface ExtraProps {
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
}
const ContactItem: FC<Contact & ExtraProps> = ({ id,firstName, lastName, phone,handleEdit,dispatch }) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
      <AiFillEdit size={20} onClick={() => handleEdit(id)} className='icon' />
      </td>
      <td>
        <AiFillDelete
          size={20}
          onClick={() => {
            const confirmDelete = window.confirm(
              `Are you sure you want to delete contact for user ${firstName} ${lastName}?`
            );
            if (confirmDelete) {
              // dispatch action
            }
          }}
          className='icon'
        />
      </td>

    </tr>
  );
};
export default ContactItem;