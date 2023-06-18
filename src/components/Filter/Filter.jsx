import PropTypes from 'prop-types';

import { Label, Input } from './Filter.styled';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <Label>
      Find contacts by name:
      <Input type="text" name="filter" value={filter} onChange={changeFilter} />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
