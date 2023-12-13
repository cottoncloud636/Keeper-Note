/* 
show div element for a note element
the note contains a title and content
*/

import React from 'react';
import styles from './Note.module.css'

function Note(props){
    return (
        <div className={styles.note}>
            <h1>{props.noteTitle}</h1>
            <p>{props.noteContent}</p>
        </div>
    );
}

export default Note;