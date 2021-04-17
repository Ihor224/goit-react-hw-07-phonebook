import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from './Components/Container';
import ContactList from './Components/ContactList';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import { itemsOperations, itemsSelectors } from './redux/contacts';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />

        {this.props.isLoading && <h1>Loading...</h1>}
        <ContactList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: itemsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(itemsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
