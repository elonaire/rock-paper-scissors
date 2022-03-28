import React, { FunctionComponent } from "react";
import styles from '../styles/ScoreBoard.module.css'

interface ScoreBoardProps {
    score: number
}
 
const ScoreBoard: FunctionComponent<ScoreBoardProps> = ({score}) => {
    return (
        <>
        <div className={styles.score_wrapper}>
            <p className={styles.score_text}>SCORE</p>
            <p className={styles.score}>{score}</p>
        </div>
        </>
    );
}
 
export default ScoreBoard;