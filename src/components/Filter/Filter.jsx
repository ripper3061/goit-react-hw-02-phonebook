import { nanoid } from 'nanoid';

export const Filter = ({ onChange }) => {
  const id = nanoid(10);
  return (
    <>
      <label htmlFor={id}>Find contacts by name</label>
      <input type="text" id={id} onChange={onChange} />
    </>
  );
};
