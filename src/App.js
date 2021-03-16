//Libs
import { Component } from 'react';
import shortid from 'shortid';

//Components
import Title from './components/Title';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  //метод для добавления данных в разметку при получении данных с component ContactForm в Арр
  addContact = data => {
    // console.log(data.name);
    const findName = this.state.contacts.find(
      contact => contact.name === data.name,
    );

    if (findName) {
      alert(`${data.name} is already in contacts!`);
      return;
    }

    const newContactDate = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };
    // console.log(newContactDate);

    this.setState(prevState => ({
      contacts: [newContactDate, ...prevState.contacts],
    }));
  };

  //метод для проверки на существующий контакт
  // findContactName = contactName => {
  //   const findName = this.state.contacts.find(
  //     contact => contact.name === contactName,
  //   );

  //   if (findName) {
  //     alert(`${contactName} is already in contacts!`);
  //     return;
  //   }
  // };

  //метод для изменения данных в state по вводу в фильтр
  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  //метод для фильтрации массива по имени
  getFilteredByName = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state; // деструкт свойств обекта state

    const filteredContactByName = this.getFilteredByName();

    return (
      <div className="container">
        <Title title={'Phonebook'} />
        <ContactForm onSubmit={this.addContact} />

        <div>
          {contacts.length > 0 && (
            <>
              <Title title={'Contacts'} />
              <Filter valueFilter={filter} onChangeFilter={this.changeFilter} />
              <ContactList
                contacts={filteredContactByName}
                // onFindContactName={this.findContactName}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
