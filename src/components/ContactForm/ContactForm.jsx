import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

import { getContacts } from 'redux/selectors';
import { addElement } from 'redux/contactsSlise';
import { FormPhonebook, Label, Input, Btn } from './ContactForm.styled';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addContact = (name, number) => {
    const normalizedName = name.toLocaleLowerCase().trim();
    const findName = contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName
    );

    if (findName) {
      toast.error(`${name} is already in the contacts`);
      return;
    }

    const normalizedNumber = number.toLocaleLowerCase().trim();
    const findNumber = contacts.find(
      contact => contact.number.toLocaleLowerCase() === normalizedNumber
    );

    if (findNumber) {
      toast.error(`${number} is already in the contacts`);
      return;
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    dispatch(addElement(newContact));
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    addContact(name, number);
  };

  return (
    <FormPhonebook onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(?:[' -][a-zA-Zа-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Btn type="submit">Add contact</Btn>
    </FormPhonebook>
  );
};
