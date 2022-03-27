import React, { FunctionComponent } from "react";
import styles from '../styles/ScoreBoard.module.css'

interface ScoreBoardProps {
    
}
 
const ScoreBoard: FunctionComponent<ScoreBoardProps> = () => {
    return (
        <>
        <div className={styles.score_wrapper}>
            <p className={styles.score_text}>SCORE</p>
            <p className={styles.score}>12</p>
        </div>
        </>
    );
}
 
export default ScoreBoard;