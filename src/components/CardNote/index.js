import PropTypes from 'prop-types';
import styles from './style.module.scss';

const CardNote = ({ contentNote, deleteNote }) => {
  return (
    <div className={styles.card}>
      <div onClick={() => deleteNote(contentNote.id)} className={styles.close}>
        X
      </div>
      {contentNote.content}
    </div>
  );
};

CardNote.defaultProps = {
  contentNote: {
    id: 0,
    content: 'asd',
  },
  deleteNote: () => {},
};

CardNote.propTypes = {
  contentNote: PropTypes.object,
  deleteNote: PropTypes.func,
};

export default CardNote;