import { useDispatch } from 'react-redux';
import s from './Contact.module.css';
import { deleteContact } from '../../redux/contact/actions';

const Contact = ({ user }) => {
  const dispatch = useDispatch();

  const handleDeleteContactUser = () => {
    dispatch(deleteContact(user.id));
  };

  return (
    <>
      <div>
        <p className={s.contactText}>{user.name}</p>
        <p className={s.contactText}>{user.number}</p>
      </div>
      <button
        className={s.contactBtn}
        type='button'
        onClick={handleDeleteContactUser}
      >
        Delete
      </button>
    </>
  );
};
export default Contact;
