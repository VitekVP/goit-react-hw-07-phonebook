import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlise';

import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </Label>
  );
};
