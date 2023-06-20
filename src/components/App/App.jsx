import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Container, Title, Subtitle } from 'components/App/App.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
      <ToastContainer theme="colored" autoClose={3000} position="top-right" />
    </Container>
  );
};
