import styles from "../table/Table.module.scss";
import React, {useState} from "react";
import {Level} from "./level/Level";
import {EditLine} from "./editLine/EditLine";

type LinePropsType = {
    id: number
    rowName: string
    salary: number
    equipmentCosts: number
    overheads: number
    estimatedProfit: number
    listLength: number
}

export function Line({id, estimatedProfit, overheads, equipmentCosts, rowName, salary, listLength}: LinePropsType) {
    const [editMode, setEditMode] = useState(true)

    if (listLength === 0) setEditMode(true)

    const activateEditMode = () => {
        setEditMode(true);
    }
    return (
        <tr className={styles.row} onDoubleClick={activateEditMode}>
            <td className={styles.cell}>
                <Level id={id}/>
            </td>
            <td className={styles.cell}>
                <EditLine editMode={editMode} setEditMode={setEditMode} value={rowName}/>
            </td>
            <td className={styles.cell}>
                <EditLine editMode={editMode} setEditMode={setEditMode} value={salary}/>
            </td>
            <td className={styles.cell}>
                <EditLine editMode={editMode} setEditMode={setEditMode} value={equipmentCosts}/>
            </td>
            <td className={styles.cell}>
                <EditLine editMode={editMode} setEditMode={setEditMode} value={overheads}/>
            </td>
            <td className={styles.cell}>
                <EditLine editMode={editMode} setEditMode={setEditMode} value={estimatedProfit}/>
            </td>
        </tr>
    )
}