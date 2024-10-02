import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useSelector } from 'react-redux';

function App() {
  const [serchUser, setSerchUser] = useState('');

  const contactsData = useSelector(state => state.contacts.items);

  useEffect(() => {
    window.localStorage.setItem('contactUser', JSON.stringify(contactsData));
  }, [contactsData]);

  return (
    <>
      <h1 className='pageTitle'>Phonebook</h1>
      <ContactForm />
      <SearchBox serchUser={serchUser} setSerchUser={setSerchUser} />
      <ContactList />
    </>
  );
}

export default App;
