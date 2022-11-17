import styles from './Navbar.module.scss'
import down from '../../assets/img/arrowDown.svg'
import projectIcon from '../../assets/img/project.svg'
import back from "../../assets/img/back.svg";
import {NavLink} from "react-router-dom";
import React from "react";

export function Navbar() {

    return (
        <div className={styles.navbar}>

            <div className={styles.head}>

                <h3>
                    Название проекта
                    <br/>
                    <span>
                        Аббревиатура
                    </span>
                </h3>

                <div className={styles.img}>
                    <img src={down} alt="project list"/>
                </div>
            </div>

            <div className={styles.navList}>
                <NavLink
                    to='/'
                    className={styles.navLink}
                >
                    <img src={projectIcon} alt='back'/>
                    <span>По проекту</span>
                </NavLink>
                <NavLink
                    to='/'
                    className={styles.navLink}
                >
                    <img src={projectIcon} alt='back'/>
                    <span>Объекты</span>
                </NavLink>
                <NavLink
                    to='/'
                    className={styles.navLink}
                >
                    <img src={projectIcon} alt='back'/>
                    <span>РД</span>
                </NavLink>
                <NavLink
                    to='/'
                    className={styles.navLink}
                >
                    <img src={projectIcon} alt='back'/>
                    <span>МТО</span>
                </NavLink>
                <NavLink
                    to='/'
                    className={`${styles.navLink} ${styles.active}`}
                >
                    <img src={projectIcon} alt='back'/>
                    <span>СМР</span>
                </NavLink>

                <NavLink
                    to='/'
                    className={styles.navLink}
                >
                    <img src={projectIcon} alt='back'/>
                    <span>График</span>
                </NavLink>
                <NavLink
                    to='/'
                    className={styles.navLink}
                >
                    <img src={projectIcon} alt='back'/>
                    <span>МиМ</span>
                </NavLink>
                <NavLink
                    to='/'
                    className={styles.navLink}
                >
                    <img src={projectIcon} alt='back'/>
                    <span>Рабочие</span>
                </NavLink>
                <NavLink
                    to='/'
                    className={styles.navLink}
                >
                    <img src={projectIcon} alt='back'/>
                    <span>Капвложения</span>
                </NavLink>
                <NavLink
                    to='/'
                    className={styles.navLink}
                >
                    <img src={projectIcon} alt='back'/>
                    <span>Бюджет</span>
                </NavLink>
                <NavLink
                    to='/'
                    className={styles.navLink}
                >
                    <img src={projectIcon} alt='back'/>
                    <span>Финансирование</span>
                </NavLink>
                <NavLink
                    to='/'
                    className={styles.navLink}
                >
                    <img src={projectIcon} alt='back'/>
                    <span>Панорамы</span>
                </NavLink>
                <NavLink
                    to='/'
                    className={styles.navLink}
                >
                    <img src={projectIcon} alt='back'/>
                    <span>Камеры</span>
                </NavLink>
                <NavLink
                    to='/'
                    className={styles.navLink}
                >
                    <img src={projectIcon} alt='back'/>
                    <span>Поручения</span>
                </NavLink>
                <NavLink
                    to='/'
                    className={styles.navLink}
                >
                    <img src={projectIcon} alt='back'/>
                    <span>Контрагенты</span>
                </NavLink>
            </div>
        </div>
    );
}
