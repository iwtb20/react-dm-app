import styled from 'styled-components';

export const ServicesContainer = styled.div`
  background: #010606;
  padding: 50px;

  
`;

export const ServicesWrapper = styled.div`
  margin: 0 auto;
  white-space: nowrap;
  overflow: auto;


`;

export const ServicesCard = styled.div`
  background: #fff;
  overflow: auto;
  display: inline-block;
  white-space: normal;
  
  border-radius: 10px;
  max-height: 340px;
  max-width: 200px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  padding: 5px; 

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
