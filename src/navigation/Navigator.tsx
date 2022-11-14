import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from 'react';
import { Pokedex } from "../components/Pokedex/Pokemon";
import { PokemonDetail } from "../components/Pokedex/PokemonDetail";

const Stack = createStackNavigator();

export const Navigator: FC = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Pokedex" component={Pokedex} />
            <Stack.Screen name="Details" component={PokemonDetail} />
        </Stack.Navigator>
    </NavigationContainer>
);
