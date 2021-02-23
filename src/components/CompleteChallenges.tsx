import styled from "../styles/components/CompletedChallenges.module.css";

export function CompletedChallenges() {
  return (
    <div className={styled.completedChallengesContainer}>
      <span>Desafíos completados</span>
      <span>5</span>
    </div>
  );
}
