import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function ListView({ value }) {
  return (
    <div className={styles.ListView}>
      ListView {value}
    </div>
  );
}

ListView.propTypes = {
  value: PropTypes.string,
};

ListView.defaultProps = {
  value: 'string data',
};
