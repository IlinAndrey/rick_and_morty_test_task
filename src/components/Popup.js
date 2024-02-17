import React from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background: transparent;
  border: none;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  color: white;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: auto;
`;

const CharacterName = styled.h2`
  margin: 10px 0;
`;

const CharacterInfo = styled.p`
  font-size: 16px;
  color: #333;
`;

const Popup = ({ character, onClose }) => {
  const displayType = character.type === "" ? "Human" : character.type;
  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <CharacterImage src={character.image} alt={character.name} />
        <CharacterName>{character.name}</CharacterName>
        <CharacterInfo>
          Статус: {character.status} | Пол: {character.gender} | Вид:{" "}
          {character.species} | Тип: {displayType} | 
          ID: {character.id} | Происхождение: {character.origin.name} | Местоположение: {character.location.name} | Создан: {character.created} |
          Эпизодов: {character.episode.length}
        </CharacterInfo>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;
