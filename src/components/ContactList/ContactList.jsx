import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const userContacts = useSelector(state => state.contacts.items);
  const serchUser = useSelector(state => state.filters.name);

  const filteredContacts = userContacts.filter(item =>
    item.name.toLowerCase().includes(serchUser)
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
