import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const userContacts = useSelector(selectContacts);
  const searchUsers = useSelector(selectNameFilter);

  const filteredContacts = userContacts.filter(item =>
    item.name.toLowerCase().includes(searchUsers)
  );

  return (
    <div>
      <ul className={s.contactList}>
        {filteredContacts.map(user => (
          <li className={s.contactItem} key={user.id}>
            <Contact user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
