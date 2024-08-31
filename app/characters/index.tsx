import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useCharacters } from '@/hooks/useCharacter';

export default function CharacterList() {
    const { characters } = useCharacters();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Characters</Text>
            <FlatList
                data={characters}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.characterItem}
                        onPress={() => router.push(`/characters/${item.id}`)}
                    >
                        <Text>{item.name} - Level {item.level} {item.class}</Text>
                    </TouchableOpacity>
                )}
            />
            <Link href="/create" style={styles.createLink}>Create New Character</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    characterItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    createLink: {
        marginTop: 20,
        fontSize: 18,
        color: 'blue',
        textAlign: 'center',
    },
});