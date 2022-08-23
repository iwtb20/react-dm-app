import React from 'react';
import Icon1 from '../../images/il_340x270.3679059405_51et.avif';
import Icon2 from '../../images/pasta.jpeg';
import Icon3 from '../../images/burger.jpeg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  Price
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Dishes</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesH2>Tacos</ServicesH2>
          <ServicesIcon src={Icon1} />
          <ServicesP>
            Delicious tacos made with quality meat in between hand made corn tortillas.
          </ServicesP>
          <Price>
            $2.50
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Pasta</ServicesH2>
          <ServicesIcon src={Icon2} />
          <ServicesP>
            Made from scratch with hand made meatballs.
          </ServicesP>
          <Price>
            $10
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Burgers</ServicesH2>
          <ServicesIcon src={Icon3} />
          <ServicesP>
            Premium beef patties topped with pickles, tomatoes, lettuce, grilled onions,
            mayo, ketchup, and thick American cheese.
          </ServicesP>
          <Price>
            $5
          </Price>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
