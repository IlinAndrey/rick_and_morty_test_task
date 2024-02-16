import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

const CharacterImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

const CharacterName = styled.h3`
  font-size: 1.2rem;
  margin: 8px 0;
`;

const CharacterInfo = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Card = ({ character, onSelect }) => {
  const displayType = character.type === "" ? "Human" : character.type;
  return (
    <CardContainer onClick={() => onSelect(character)}>
      <CharacterImage src={character.image} alt={character.name} />
      <CharacterName>{character.name}</CharacterName>
      <CharacterInfo>
        Статус: {character.status} | Пол: {character.gender} | Вид:{" "}
        {character.species} | Тип: {displayType}
      </CharacterInfo>
    </CardContainer>
  );
};

export default Card;
