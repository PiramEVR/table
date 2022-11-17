import React, {useEffect, useState} from "react";
import styles from "../table/Table.module.scss";
import {Level} from "../line/level/Level";
import {tableAPI} from "./tableAPI";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setList} from "./tableSlice";
import {Line} from "../line/Line";

export function Table() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setList())
    }, [])

    const list = useAppSelector(state => state.tableData)

    return (
        <div className={styles.table}>

            <div className={styles.head}>
                <div className={styles.tab}>
                    <h3>
                        Строительно-монтажные работы
                    </h3>
                </div>
            </div>
            <table className={styles.tableBlock}>
                <thead>
                <tr className={`${styles.row} ${styles.rowHead}`}>
                    <th className={styles.cell}>Уровень</th>
                    <th className={styles.cell}>Наименование работ</th>
                    <th className={styles.cell}>Основная з/п</th>
                    <th className={styles.cell}>Оборудование</th>
                    <th className={styles.cell}>Накладные расходы</th>
                    <th className={styles.cell}>Сметная прибыль</th>
                </tr>
                </thead>
                <tbody>
                {list.map(({rowName, salary, equipmentCosts, overheads, estimatedProfit, id}, i, arr) => (
                    <Line key={id}
                          id={id}
                          equipmentCosts={equipmentCosts}
                          estimatedProfit={estimatedProfit}
                          overheads={overheads}
                          rowName={rowName}
                          salary={salary}
                          listLength={arr.length}
                    />
                ))}
                </tbody>
            </table>


        </div>
    );
}
