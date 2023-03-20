import { Component } from 'react';
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
    console.log(data);
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    console.log(this.state.contacts.id);
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
