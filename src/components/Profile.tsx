import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styled from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styled.profileContainer}>
      <img src="https://github.com/bzapata95.png" alt="Bryan Zapata" />

      <div>
        <strong>Bryan Zapata</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
