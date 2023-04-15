import styled from 'styled-components';

export const StatsTitle = styled.h2`
font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 1.5vw;
  color: gray;
`;
export const StatisticsList = styled.ul`
margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  export const StatisticsElement = styled.li`
  font-size: 12px;
  background-color: ${getRandomHexColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border: 2px solid #8080804a;
  padding-top: 15px;
  padding-bottom: 15px;

`;

