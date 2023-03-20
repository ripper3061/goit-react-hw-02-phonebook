import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmithandler = data => {
    const id = nanoid(10);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, ...data }],
    }));

    // this.setState(prevState => prevState.contacts.push({ id, ...data }));
  };

  filterChange = e => {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const normalizeFilter = this.state.filter.toLocaleLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmithandler} />
        <h2>Contacts</h2>
        <Filter onChange={this.filterChange} />
        <ContactsList
          contactsList={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
