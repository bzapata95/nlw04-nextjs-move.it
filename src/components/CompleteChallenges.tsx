import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styled from "../styles/components/CompletedChallenges.module.css";

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <div className={styled.completedChallengesContainer}>
      <span>Desafíos completados</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
