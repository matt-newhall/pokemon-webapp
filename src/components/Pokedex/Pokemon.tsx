import { StatusBar } from 'expo-status-bar';
import React, { FlatList, TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
// import { pokemonList } from '../../../assets/kanto';
import _ from "lodash";
import { useEffect, useState } from 'react';
import { getEffectiveTypeRoots } from 'typescript';


export function Pokedex( { navigation }) {
    const [pokeData, setData] = useState([]);
    const [typeData, setTypeData] = useState([]);

    useEffect(() => {
        const getPokemon = async() => {
            fetch('https://pokeapi.co/api/v2/pokemon/?limit=905')
            .then(response => response.json())
            .then(data => setData(data.results));
        }

        getPokemon();
    }, []);

    console.log(typeData);

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data = { pokeData }
                //keyExtractor={item=>item.id.toString()}
                renderItem={({ item, index, separators }) => (
                    <View style={[styles.item, {backgroundColor: 'white' }]}>
                        <Image
                            style = {{ height: 80, width: 80 }}
                            resizeMode = 'contain'
                            source = {{
                                uri: 'https://img.pokemondb.net/artwork/large/' + item.name + '.jpg',
                            }}
                        />
                        <Text onPress={() => { navigation.navigate('Details', {name: item.name})}} style={{ fontSize: 24 }}>{_.capitalize(item.name)}</Text>
                    </View>
                )}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#0ff',
    },
    item: {
        width: '50%',
        borderWidth: 1,
        alignItems: 'center'
    }
});
