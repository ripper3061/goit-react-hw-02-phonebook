import PropTypes from 'prop-types';

export const ContactsList = ({ contactsList, deleteContact }) => {
  return (
    <ul>
      {contactsList.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => deleteContact(id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
