import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static defaultProps = {
    name: '',
    number: '',
  };

  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  handleInputChange = e => {
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    if (this.state.name.trim() === '' || this.state.number.trim() === '') {
      alert('Please enter valid information!');
      this.reset();
      return;
    }

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles.formField}>
          <label className={styles.formLabel}>
            Name
            <input
              className={styles.formInput}
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div className={styles.formField}>
          <label className={styles.formLabel}>
            Number
            <input
              className={styles.formInput}
              type="tel"
              name="number"
              placeholder="Enter phone"
              value={number}
              onChange={this.handleInputChange}
            />
          </label>
        </div>

        <button type="submit" className={styles.btnSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
