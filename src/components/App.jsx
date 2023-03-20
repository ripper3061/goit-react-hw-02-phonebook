import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmithandler = data => {
    const id = nanoid(10);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, ...data }],
    }));

    // this.setState(prevState => prevState.contacts.push({ id, ...data }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <ContactForm onSubmit={this.formSubmithandler}></ContactForm>

        <ul>
          {this.state.contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button onClick={() => this.deleteContact(id)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
