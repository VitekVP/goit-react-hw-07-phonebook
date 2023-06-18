import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectContacts, selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlise';
import { fetchContacts, addContact } from 'redux/operations';

import { Form } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { NoServise } from 'components/NoServise/NoServise';

import { Container, Title, Subtitle } from 'components/App/App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContactFromForm = ({ name, phone }) => {
    const normalizedName = name.toLocaleLowerCase().trim();
    const findName = items.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName
    );

    if (findName) {
      toast.error(`${name} is already in the contacts`);
      return;
    }

    const normalizedNumber = phone;
    const findNumber = items.find(
      contact => contact.phone === normalizedNumber
    );

    if (findNumber) {
      toast.error(`${phone} is already in the contacts`);
      return;
    }

    const newContact = {
      name,
      phone,
    };

    dispatch(addContact(newContact));
  };

  const handleChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

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
    <Container>
      <Title>Phonebook</Title>
      <Form onSubmit={addContactFromForm} />
      <Subtitle>Contacts</Subtitle>
      <Filter filter={filter} changeFilter={handleChangeFilter} />
      {isLoading && <Loader />}
      {error && <NoServise message={error} />}
      <ContactList contacts={visibleContact} />
      <ToastContainer theme="colored" autoClose={4000} position="top-right" />
    </Container>
  );
};
