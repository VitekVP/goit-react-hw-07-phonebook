import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { removeElement } from 'redux/contactsSlise';
import { ListItem, Btn } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItem key={id}>
      <p>
        {name}: {number}
      </p>
      <Btn type="button" onClick={() => dispatch(removeElement(id))}>
        Delete
      </Btn>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
