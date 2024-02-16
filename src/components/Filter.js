import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  width: 92%;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 25%;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const FilterInput = styled.input`
  padding: 8px;
  width: 95%;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
`;

const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const FilterCheckbox = styled.input`
  margin-right: 5px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  width: 95%;
  justify-content: flex-start;
  gap: 20px;
`;

const FilterSectionTitle = styled.h2`
  width: 95%;
  text-align: left;
`;

const Filter = ({ nameFilter, statusFilter, genderFilter, speciesFilter, typeFilter, onFilterChange }) => {
  return (
    <FilterContainer>
        <FilterSectionTitle>Имя</FilterSectionTitle>
      <FilterInput
        type="text"
        placeholder="Фильт по имени"
        value={nameFilter}
        onChange={(e) => onFilterChange("name", e.target.value)}
      />
      <FilterSectionTitle>Статус</FilterSectionTitle>
      <CheckboxGroup>
        <div>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              checked={statusFilter === "Alive"}
              onChange={(e) => onFilterChange("status", e.target.checked ? "Alive" : "")}
            />
            Alive
          </FilterLabel>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              checked={statusFilter === "Dead"}
              onChange={(e) => onFilterChange("status", e.target.checked ? "Dead" : "")}
            />
            Dead
          </FilterLabel>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              checked={statusFilter === "unknown"}
              onChange={(e) => onFilterChange("status", e.target.checked ? "unknown" : "")}
            />
            Unknown
          </FilterLabel>
        </div>
        <div>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              checked={genderFilter === "Male"}
              onChange={(e) => onFilterChange("gender", e.target.checked ? "Male" : "")}
            />
            Male
          </FilterLabel>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              checked={genderFilter === "Female"}
              onChange={(e) => onFilterChange("gender", e.target.checked ? "Female" : "")}
            />
            Female
          </FilterLabel>
        </div>
      </CheckboxGroup>
      <FilterSectionTitle>Вид</FilterSectionTitle>
      <FilterInput
        type="text"
        placeholder="Фильтр по виду"
        value={speciesFilter}
        onChange={(e) => onFilterChange("species", e.target.value)}
      />
      <FilterSectionTitle>Тип</FilterSectionTitle>
      <FilterInput
        type="text"
        placeholder="Фильтр по типу"
        value={typeFilter}
        onChange={(e) => onFilterChange("type", e.target.value)}
      />
    </FilterContainer>
  );
};

export default Filter;