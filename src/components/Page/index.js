import axios from 'axios';
import { useState, useEffect } from 'react';

import styles from './style.module.scss';

import NoteCreater from '../NoteCreater';
import CardNote from '../CardNote';

const Page = () => {
  const [notes, setnotes] = useState([]);

  const getNotes = async () => {
    try {
      const response = await axios.get('http://localhost:7777/notes');
      if (response.data.length !== 0) {
        setnotes([...response.data]);
        return;
      }
      setnotes([]);
    } catch (error) {
      console.error(error);
    }
  };

  const handlerCreateNote = async (value) => {
    try {
      const response = await axios.post('http://localhost:7777/notes', {
        id: notes.length,
        content: value,
      });
      if (response.status === 204) {
        getNotes();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlerDeleteNote = async (index) => {
    try {
      const response = await axios.delete(
        `http://localhost:7777/notes/${index}`
      );
      if (response.status === 204) {
        getNotes();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1>Notes</h1>
        <img
          onClick={() => getNotes()}
          className={styles.refresh_btn}
          src="https://picsum.photos/10/10"
          alt="update"
        />
      </div>
      <NoteCreater create={(value) => handlerCreateNote(value)} />
      <div className={styles.cardContainer}>
        {notes.length !== 0 &&
          notes.map((element, index) => (
            <CardNote
              key={index}
              contentNote={element}
              deleteNote={(value) => handlerDeleteNote(value)}
            />
          ))}
      </div>
    </div>
  );
};

export default Page;