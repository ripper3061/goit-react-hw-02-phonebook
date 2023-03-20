import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ onChange }) => {
  const id = nanoid(10);
  return (
    <>
      <label htmlFor={id}>Find contacts by name</label>
      <Input type="text" id={id} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
