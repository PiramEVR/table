import React, {useState} from 'react';
import level1 from '../../../assets/img/level1.svg'
import level2 from '../../../assets/img/level2.svg'
import createRow from '../../../assets/img/createRow.svg'
import deleteRow from '../../../assets/img/delete.svg'
import styles from './Level.module.scss'

type LevelType = {
    id: number
}

export function Level({id}: LevelType) {
    const [isShows, setIsShows] = useState(true)
    const [isShow, setIsShow] = useState(true)

    const addRow = () => {

    }

    return (
        <div className={styles.level}>
            {isShow && <button>
                <img src={level1} alt=""/>
            </button>}
            {isShows && <button>
                <img src={level2} alt=""/>
            </button>}
            <button>
                <img src={createRow} alt=""/>
            </button>
            <button>
                <img src={deleteRow} alt=""/>
            </button>


        </div>
    );
};
