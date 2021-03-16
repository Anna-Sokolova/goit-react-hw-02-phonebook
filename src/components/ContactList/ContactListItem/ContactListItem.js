import React from 'react';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number }) => (
  <li className={styles.item}>
    <p>
      {name} <span className={styles.divider}>:</span>
      <span className={styles.tel}>{number}</span>
    </p>
  </li>
);

export default ContactListItem;
