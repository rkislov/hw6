import { useState } from 'react';
import CreateClock from '../CreateClock';
import Clock from '../Clock';

import styles from './style.module.scss';

const WatchesContainer = () => {
    const [ clocks, setClocks ] = useState([
        {
            name: 'one',
            time: 0
        },
    ]);
    const handlerDeleteClock = (deleteIndex) => {
        let updateClocks = [];
        for (const [index, value] of clocks.entries()) {
          console.log(index, deleteIndex);
          if (index !== deleteIndex) {
            updateClocks = [...updateClocks, value];
          }
        }
        setClocks([...updateClocks]);
      };

    return (
        <>  
            <div className={styles.container}>
            <CreateClock
        addClock={(value) => setClocks((prev) => [...prev, value])}
      />
        <div className={styles.clocksContainer}>
        {clocks.length > 0 &&
          clocks.map((element, index) => (
            <Clock
              key={index}
              content={{ ...element, index }}
              deleteClock={(value) => handlerDeleteClock(value)}
            />
          ))}
      </div>
            </div>
        </>
    )
}

export default WatchesContainer