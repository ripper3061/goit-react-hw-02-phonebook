import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmithandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <ContactForm onSubmit={this.formSubmithandler}></ContactForm>

        <ul></ul>
      </div>
    );
  }
}

export default App;
