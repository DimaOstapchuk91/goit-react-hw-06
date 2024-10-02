import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { filterContacts } from '../../redux/contact/actions';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearchUser = event => {
    const form = event.target;

    dispatch(filterContacts(form.value.toLowerCase()));
  };
  return (
    <div className={s.serchWrap}>
      <label>
        Find contact by name
        <input
          className={s.serchInput}
          type='text'
          onChange={handleSearchUser}
        />
      </label>
    </div>
  );
};
export default SearchBox;
