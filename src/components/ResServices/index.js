import React, {useEffect, useState} from 'react';
import Icon1 from '../../images/sotacos.jpg';
import Icon2 from '../../images/somemole.jpg';
import Icon3 from '../../images/somemaris.jpg';
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
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [paddingSize, setPaddingSize] = useState(calculatePaddingSize(windowSize.innerWidth))

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      handlePaddingChange(windowSize.innerWidth)

    }

    function handlePaddingChange() {
      setPaddingSize(calculatePaddingSize(windowSize.innerWidth))
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    console.log({innerWidth, innerHeight})
    return {innerWidth, innerHeight};
  }

  function calculatePaddingSize(rawSize) {
    const calculatedPad = rawSize * .70
    console.log(Math.round(calculatedPad) + 'px')
    return Math.round(calculatedPad) + 'px'
  }
  return (
    <ServicesContainer id='services'>
      <ServicesH1 id='appetizers'>Appetizers</ServicesH1>
      <ServicesWrapper>
        <ServicesCard size={paddingSize}>
          <ServicesH2>Queso Fundido</ServicesH2>
          <ServicesIcon src={Icon1} />
          <ServicesP>
            Melted cheese served with tortillas. Add protein (optional)</ServicesP>
          <Price>
            $2.50
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Guacamole</ServicesH2>
          <ServicesIcon src={Icon2} />
          <ServicesP>
          </ServicesP>
          <Price>
            $10
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Elotes Callejeros</ServicesH2>
          <ServicesIcon src={Icon3} />
          <ServicesP>

          </ServicesP>
          <Price>
            $5
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Nachos</ServicesH2>
          <ServicesIcon src={Icon1} />
          <ServicesP>
            Individual tortilla chips layered with beans and cheese served with sour cream, pico de gallo, and guacamole.

            Add ons (optional): Ground beef, Chicken, Chorizo
          </ServicesP>
          <Price>
            $2.50
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Botana Muleta
          </ServicesH2>
          <ServicesIcon src={Icon2} />
          <ServicesP>
          </ServicesP>
          <Price>
            $10
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Aguachiles Verdes
          </ServicesH2>
          <ServicesIcon src={Icon3} />
          <ServicesP>

          </ServicesP>
          <Price>
            $5
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Mango Habanero Aguachiles</ServicesH2>
          <ServicesIcon src={Icon1} />
          <ServicesP>
          </ServicesP>
          <Price>
            $2.50
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Quesadillitas</ServicesH2>
          <ServicesIcon src={Icon2} />
          <ServicesP>
          </ServicesP>
          <Price>
            $10
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Botana de Pulpo
          </ServicesH2>
          <ServicesIcon src={Icon3} />
          <ServicesP>

          </ServicesP>
          <Price>
            $5
          </Price>
        </ServicesCard>
      </ServicesWrapper>
      <ServicesH1 id='MexicanTradicionales'>Mexican Tradicionales</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesH2>
            Mexican Tradicionales
            Taco Dinner (3) </ServicesH2>
          <ServicesIcon src={Icon1} />
          <ServicesP>
            Delicious tacos made with quality meat in between hand made corn tortillas.
          </ServicesP>
          <Price>
            $2.50
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Tacos de Pescado (3)</ServicesH2>
          <ServicesIcon src={Icon2} />
          <ServicesP>
            Lightly breaded fish laces tapped with Mexican coleslaw wrapped in cactus tortillas with our special recipe creamy chipotle sauce on the side. *This dish includes only the tacos.          </ServicesP>
          <Price>
            $10
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Tacos de Camaron </ServicesH2>
          <ServicesIcon src={Icon3} />
          <ServicesP>
            Premium beef patties topped with pickles, tomatoes, lettuce, grilled onions,
            mayo, ketchup, and thick American cheese.
          </ServicesP>
          <Price>
            $5
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Tacos del Tio

          </ServicesH2>
          <ServicesIcon src={Icon1} />
          <ServicesP>
            Delicious tacos made with quality meat in between hand made corn tortillas.
          </ServicesP>
          <Price>
            $2.50
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Boss Burrito

          </ServicesH2>
          <ServicesIcon src={Icon2} />
          <ServicesP>
            Made from scratch with hand made meatballs.
          </ServicesP>
          <Price>
            $10
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Fajita Quesadilla

          </ServicesH2>
          <ServicesIcon src={Icon3} />
          <ServicesP>
            Premium beef patties topped with pickles, tomatoes, lettuce, grilled onions,
            mayo, ketchup, and thick American cheese.
          </ServicesP>
          <Price>
            $5
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Fajita Rice Bowl

          </ServicesH2>
          <ServicesIcon src={Icon1} />
          <ServicesP>
            Delicious tacos made with quality meat in between hand made corn tortillas.
          </ServicesP>
          <Price>
            $2.50
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Cecina Minero

          </ServicesH2>
          <ServicesIcon src={Icon2} />
          <ServicesP>
            Made from scratch with hand made meatballs.
          </ServicesP>
          <Price>
            $10
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Enchiladas Mi Tierra (3) </ServicesH2>
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
      <ServicesH1 id='Pollo'>Pollo</ServicesH1>
      <ServicesWrapper>
        <ServicesCard size={paddingSize}>
          <ServicesH2>Pollo Queso y Rajas

          </ServicesH2>
          <ServicesIcon src={Icon1} />
          <ServicesP>
            Delicious tacos made with quality meat in between hand made corn tortillas.
          </ServicesP>
          <Price>
            $2.50
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Pollo en Mole</ServicesH2>
          <ServicesIcon src={Icon2} />
          <ServicesP>
            Made from scratch with hand made meatballs.
          </ServicesP>
          <Price>
            $10
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Pechuga de Pollo Tampiquefla

          </ServicesH2>
          <ServicesIcon src={Icon3} />
          <ServicesP>
            Premium beef patties topped with pickles, tomatoes, lettuce, grilled onions,
            mayo, ketchup, and thick American cheese.
          </ServicesP>
          <Price>
            $5
          </Price>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Milanesa de Pollo

          </ServicesH2>
          <ServicesIcon src={Icon1} />
          <ServicesP>
            Delicious tacos made with quality meat in between hand made corn tortillas.
          </ServicesP>
          <Price>
            $2.50
          </Price>
        </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>

  );
};

export default Services;
