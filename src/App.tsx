import React from 'react';
import styles from "./App.module.scss";
import {Header} from "./features/header/Header";
import {Navbar} from "./features/navbar/Navbar";
import {Table} from "./features/table/Table";

function App() {
  return (
    <div className={styles.app}>
        <div className={styles.header}><Header/></div>
        <div className={styles.wrapper}>
            <div className={styles.navbar}><Navbar/></div>
            <div className={styles.table}><Table/></div>
        </div>
    </div>
  );
}

export default App;
