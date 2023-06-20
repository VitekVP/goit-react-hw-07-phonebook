import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/selectors';

import { fetchContacts } from 'redux/operations';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { NoServise } from 'components/NoServise/NoServise';
import { Loader } from 'components/Loader/Loader';

import { List } from './ContactList.styled';

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContact = () => {
    if (!filter) {
      return items;
    }

    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContact = getVisibleContact();

  return (
    <>
      {isLoading && <Loader />}
      {error && <NoServise message={error} />}
      <List>
        {visibleContact.map(({ id, name, phone }) => (
          <ContactListItem key={id} id={id} name={name} number={phone} />
        ))}
      </List>
    </>
  );
};
