import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ valueFilter, onChangeFilter }) => (
  <>
    <label className={styles.labelFilter}>
      Find contacts by name
      <input className={styles.inputFilter} type="text" value={valueFilter} onChange={onChangeFilter} />
    </label>
  </>
);

//props

export default Filter;
