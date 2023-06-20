import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import { FormPhonebook, Label, Input, Btn } from './ContactForm.styled';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const addContactFromForm = (name, phone) => {
    const normalizedName = name.toLocaleLowerCase().trim();
    const findName = items.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName
    );

    if (findName) {
      toast.warning(`${name} is already in the contacts`);
      return;
    }

    const normalizedNumber = phone;
    const findNumber = items.find(
      contact => contact.phone === normalizedNumber
    );

    if (findNumber) {
      toast.warning(`${phone} is already in the contacts`);
      return;
    }

    const newContact = {
      name,
      phone,
    };

    dispatch(addContact(newContact));
    reset();
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContactFromForm(name, phone);
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
          name="phone"
          value={phone}
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
