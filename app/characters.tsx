import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useCharacters } from '@/hooks/useCharacter';

export default function CharacterList() {
    const { characters } = useCharacters();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <FlatList
                data={characters}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.characterItem}
                        onPress={() => router.push(`/characters/${item.id}`)}
                    >
                        <Text style={styles.characterName}>{item.name}</Text>
                        <Text style={styles.characterDetails}>Level {item.level} {item.class}</Text>
                    </TouchableOpacity>
                )}
            />
            <Link href="/create" asChild>
                <TouchableOpacity style={styles.createButton}>
                    <Text style={styles.createButtonText}>Create New Character</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    characterItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    characterName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    characterDetails: {
        fontSize: 14,
        color: '#666',
    },
    createButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    createButtonText: {
        color: 'white',
        fontSize: 16,
    },
});