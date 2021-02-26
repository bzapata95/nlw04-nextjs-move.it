import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styled from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <div className={styled.overlay}>
      <div className={styled.container}>
        <header>{level}</header>

        <strong>Que bueno</strong>
        <p>Usted alcanzó un nuevo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Cerrar modal" />
        </button>
      </div>
    </div>
  );
}
