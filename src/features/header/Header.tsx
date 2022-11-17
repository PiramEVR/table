import React from 'react'
import {NavLink} from "react-router-dom"
import square from '../../assets/img/square.svg'
import back from '../../assets/img/back.svg'
import styles from './Header.module.scss'

export function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.nav}>
                <NavLink to='/'
                         className={styles.navLink}
                >
                    <img src={square} alt='settings'/>
                </NavLink>

                <NavLink to='/'
                         className={styles.navLink}
                >
                    <img src={back} alt='back'/>
                </NavLink>
            </div>
            <div className={styles.links}>


                <NavLink to='/'
                         className={`${styles.link} ${styles.active}`}
                >
                    Просмотр
                </NavLink>

                <NavLink to='/'
                         className={styles.link}
                >
                    Управление
                </NavLink>
            </div>
        </div>

    );
}
