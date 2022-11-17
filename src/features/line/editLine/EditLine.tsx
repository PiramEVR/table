import React, {ChangeEvent, memo, useEffect, useState} from 'react';
import styles from './EditLine.module.scss'


type EditLinePropsType = {
    value: string | number
    // onChange: (newValue: string) => void
    editMode: boolean
    setEditMode:(editMode: boolean)=>void
}

export const EditLine = memo(({value,  editMode, setEditMode}: EditLinePropsType) => {
    const [title, setTitle] = useState(value)


    const activateViewMode = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if(event.key=== 'Enter') {
            setEditMode(false);
        }

    }


    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <input className={styles.input} value={title}  onChange={changeTitle} onKeyDown={(e)=>activateViewMode(e)}/>
        : <span>{value}</span>
})
