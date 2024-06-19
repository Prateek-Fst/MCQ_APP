import React from 'react';
import styles from "./Score.module.css"

const Score = ({ score, total }) => {
  return (
    <div className={styles.container}>
      <h2>You scored {score} out of {total}</h2>
    </div>
  );
};

export default Score;