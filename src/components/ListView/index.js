import React, {useEffect, useState} from 'react';
import {
    DishDescription,
    DishTitle,
    MenuContainer,
    MenuH1,
    MenuWrapper,
    Price
} from './ListViewElements'


const ListView = () => {

    return (
        <MenuContainer>
            <MenuH1>
                Appetizers
            </MenuH1>
            <MenuWrapper>
                <DishTitle>
                    Queso Fundido
                </DishTitle>
                <DishDescription>
                    Melted cheese served with tortillas. Add protein (optional)
                    <Price>
                        $2.50
                    </Price>
                </DishDescription>
                <DishTitle>
                    Guacamole
                </DishTitle>
                <DishDescription>
                    Delicious guacamole
                    <Price>
                        $5.50
                    </Price>
                </DishDescription>
                <DishTitle>
                    Elotes Callejeros
                </DishTitle>
                <DishDescription>
                    Delicious corn
                    <Price>
                        $3.50
                    </Price>
                </DishDescription>


            </MenuWrapper>

        </MenuContainer>
    )
};

export default ListView