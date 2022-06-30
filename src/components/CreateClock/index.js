import PropTypes from 'prop-types';
import { useState  } from 'react';

import styles from './style.module.scss';

const CreateClock = ({addClock}) => {
    const [name, setName] = useState('');
    const [time, setTime] = useState('');

    const handleCreate = () =>{
        if (name !== '' && !isNaN(Number(time))) {
            addClock({ name, time: Number(time)} )
        }
        // setTime: ('');
        // setName: ('');
    };
    return(
        <>
            <div className={styles.container}>
                <input
                    type="text"
                    placeholder='Название'
                    className={styles.element}
                    value={name}
                    onChange={(evt) => setName(evt.target.value)}
                />
                <input
                    type='text'
                    placeholder='Временная зона'
                    className={styles.element}
                    value={time}
                    onChange={(evt) => setTime(evt.target.value)}
                />
                <button className={styles.btn} onClick={handleCreate}>
                    Добавить
                </button>
            </div>
        </>
    )
};

export default CreateClock;