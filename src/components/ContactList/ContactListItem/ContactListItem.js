import React from 'react';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onClick }) => (
  <li className={styles.item}>
    <p>
      {name} <span className={styles.divider}>:</span>
      <span className={styles.tel}>{number}</span>
    </p>
    <button type="button" className={styles.btnDelete} onClick={onClick}>
      Delete
    </button>
  </li>
);

export default ContactListItem;
