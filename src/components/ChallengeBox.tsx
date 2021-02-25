import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styled from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styled.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styled.challengeActive}>
          <header>Gané {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="asd" />
            <strong>Nuevo desafío</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styled.challengeFailedButton}
              onClick={resetChallenge}
            >
              Fallé
            </button>
            <button type="button" className={styled.challengeSucceededButton}>
              Completé
            </button>
          </footer>
        </div>
      ) : (
        <div className={styled.challengeNotActive}>
          <strong>Finalice un conteo para recibir un desafío</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avanzar de nivel completando desafíos
          </p>
        </div>
      )}
    </div>
  );
}
