import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './style.module.scss';

const NoteCreater = ({ create }) => {
  const [text, settext] = useState('');

  const headlerCreate = () => {
    if (text.length !== 0) {
      create(text);
      settext('');
    }
  };

  return (
    <div className={styles.container}>
      <textarea
        rows="10"
        cols="45"
        value={text}
        onChange={(event) => settext(event.target.value)}
      ></textarea>
      <button onClick={() => headlerCreate()}>Создать</button>
    </div>
  );
};

NoteCreater.defaultProps = {
  create: () => {},
};

NoteCreater.propTypes = {
  create: PropTypes.func,
};

export default NoteCreater;