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
