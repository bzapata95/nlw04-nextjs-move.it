import { useState, useEffect, useContext } from "react";
import { CountDownContext } from "../contexts/CountDownContext";
import styled from "../styles/components/CountDown.module.css";

export function CountDown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown,
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styled.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          onClick={resetCountDown}
          className={styled.countDownButton}
        >
          Terminó conteo
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={resetCountDown}
              type="button"
              className={`${styled.countDownButton} ${styled.countDownButtonActive}`}
            >
              Detener conteo
            </button>
          ) : (
            <button
              onClick={startCountDown}
              type="button"
              className={styled.countDownButton}
            >
              Iniciar conteo
            </button>
          )}
        </>
      )}
    </div>
  );
}
