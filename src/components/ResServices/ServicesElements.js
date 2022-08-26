import styled from 'styled-components';

export const ServicesContainer = styled.div`
  background: #010606;
  padding-top: 70px;
  margin-bottom: 5px;
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;



`;

export const ServicesWrapper = styled.div`
  padding-bottom: 20px;
  white-space: nowrap;
  overflow: auto;
  margin-left: auto;
  margin-right: auto;

`;

export const ServicesCard = styled.div.attrs(props => ({
    // we can define static props

    // or we can define dynamic ones
    size: props.size || "1em",
}))`
  background: #fff;
  overflow: auto;
  display: inline-block;
  white-space: normal;
  position: relative;
  border-radius: 10px;
  height: 400px;
  width: 85%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  
  @media screen and (min-height: 700px) {
    height: 500px;
  }
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }


`;

export const ServicesIcon = styled.img`
  max-height: 100%;
  max-width: 100%;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 5px;
  padding: 5px; 
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const Price = styled.p`
  color: darkgreen;
  display: block;
  text-align: center;
  clear: both;

`;