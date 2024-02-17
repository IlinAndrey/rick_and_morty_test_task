import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Filter from "./components/Filter";
import Popup from "./components/Popup";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  flex-grow: 1;
`;

const HeaderName = styled.div`
  padding: 20px;
  font-weight: bold;
  font-size: 35px;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  const fetchCharacters = async (url, characters = []) => {
    const response = await fetch(url);
    const data = await response.json();
    const allCharacters = characters.concat(data.results);
    if (data.info.next) {
      return fetchCharacters(data.info.next, allCharacters);
    } else {
      return allCharacters;
    }
  };

  useEffect(() => {
    fetchCharacters("https://rickandmortyapi.com/api/character")
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case "name":
        setNameFilter(value);
        break;
      case "species":
        setSpeciesFilter(value);
        break;
      case "type":
        setTypeFilter(value);
        break;
      case "status":
        setStatusFilter(value);
        break;
      case "gender":
        setGenderFilter(value);
        break;
      default:
        break;
    }
  };

  const filteredCharacters = characters.filter((character) => {
    return (
      character.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      (statusFilter === "" || character.status === statusFilter) &&
      (genderFilter === "" || character.gender === genderFilter) &&
      (speciesFilter === "" || character.species === speciesFilter) &&
      (typeFilter === "" || character.type === typeFilter)
    );
  });

  return (
    <div>
      <HeaderName>
        Персонажи Рика и Морти для тестового задания. Ильин Андрей.
      </HeaderName>
      <Container>
        <Filter
          nameFilter={nameFilter}
          statusFilter={statusFilter}
          genderFilter={genderFilter}
          speciesFilter={speciesFilter}
          typeFilter={typeFilter}
          onFilterChange={handleFilterChange}
        />
        <CardGrid>
          {filteredCharacters.map((character) => (
            <Card
              key={character.id}
              character={character}
              onSelect={handleCharacterSelect}
            />
          ))}
        </CardGrid>
      </Container>
      {selectedCharacter && (
        <Popup
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
};

export default App;
