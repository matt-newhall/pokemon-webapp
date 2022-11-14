import { StatusBar } from 'expo-status-bar';
import React, { FlatList, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { pokemonList } from '../../../assets/kanto';
import _ from "lodash";
import { useEffect, useState } from 'react';


export function PokemonDetail( { route, navigation }) {

    const pokemonName = route.params.name;

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>{_.capitalize(pokemonName)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
