import './App.css';
import 'modern-normalize/modern-normalize.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './components/Container';
import Spinner from '../src/components/Spinner';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import Logo from './components/Logo';
import { connect } from 'react-redux';
import phoneBookOperations from '../src/redux/phoneBook/phoneBook-operations';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <Logo />

        <ContactForm />

        <Filter />

        {this.props.isLoadingContacts && <Spinner />}

        <ContactList />
      </Container>
    );
  }
}

App.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  items: state.phoneBook.items,
  isLoadingContacts: state.phoneBook.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phoneBookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
