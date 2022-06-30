import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import styles from './style.module.scss';

const Clock = ({content, deleteClock}) => {
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');

    const validHours = (value) => {
        if (Number(value) > 24 ) {
            const commputedHours = Number(value) - 24;
            return String(commputedHours).length < 2 
                ? `0${commputedHours}`
                : `${commputedHours}`; 
        }
        return String(value).length < 2 ? `0${value}` : `${value}`;
    };
    const handlerTick = () => {
        try {
          const currentHours = new Date().getHours() + (Number(content.time) - 2);
          const currentMinutes = new Date().getMinutes();
          const currentSeconds = new Date().getSeconds();
          setHour(`${validHours(currentHours)}`);
          setMinute(
            `${
              String(currentMinutes).length < 2
                ? `0${currentMinutes}`
                : currentMinutes
            }`
          );
          setSecond(
            `${
              String(currentSeconds).length < 2
                ? `0${currentSeconds}`
                : currentSeconds
            }`
          );
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        const startUpdate = setInterval(() => {
            handlerTick();
        }, 1000);
        return () => {
            clearInterval(startUpdate);
        };
      }, []);
    

    return (
        <>
            <div className={styles.container}>
                <span className={styles.name}>{content.name}</span>
                <div className={styles.close} onClick={() => deleteClock(content.index) }>
                    X
                </div>
                <div className={styles.clock}>
                    <div className={styles.element}>{hour}</div>
                    <div className={styles.element}>{minute}</div>
                    <div className={styles.element}>{second}</div>
                </div>
            </div>
        </>
    )
};

Clock.defaultProps = {
    content: {},
    deleteClock: () => {}
};

Clock.propTypes = {
    content: PropTypes.object,
    deleteClock: PropTypes.func
}

export default Clock;