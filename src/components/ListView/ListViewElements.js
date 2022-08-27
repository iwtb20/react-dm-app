import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const MenuContainer = styled.div`
  background: lightsteelblue;
  padding-top: 70px;
  margin-bottom: 5px;
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
    
    `;

export const MenuWrapper = styled.div`
  padding-bottom: 20px;
  overflow: auto;
  margin-left: auto;
  margin-right: auto;

`;

export const DishTitle = styled.h2`
  font-size: 1.5rem;
  color: black;
  text-align: left;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
    `;


export const MenuH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 5px;
  padding: 5px; 
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const DishDescription = styled.p`
  font-size: 1rem;
    `;

export const Price = styled.p`
  font-size: 1rem;
  text-align: right;
  color: darkgreen;


`;