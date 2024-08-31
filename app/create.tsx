import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useCharacters } from '@/hooks/useCharacter';

export default function CreateCharacter() {
    const [name, setName] = useState('');
    const [characterClass, setCharacterClass] = useState('');
    const [level, setLevel] = useState('1');
    const router = useRouter();
    const { createCharacter } = useCharacters();

    // TODO : Correct mutate function

    const handleCreate = () => {
        createCharacter.mutate({
            name,
            class: characterClass,
            level: parseInt(level),
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10,
        }, {
            onSuccess: () => {
                router.push('/characters');
            }
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Character Name"
            />
            <Text style={styles.label}>Class:</Text>
            <TextInput
                style={styles.input}
                value={characterClass}
                onChangeText={setCharacterClass}
                placeholder="Character Class"
            />
            <Text style={styles.label}>Level:</Text>
            <TextInput
                style={styles.input}
                value={level}
                onChangeText={setLevel}
                keyboardType="numeric"
                placeholder="Character Level"
            />
            <TouchableOpacity style={styles.button} onPress={handleCreate}>
                <Text style={styles.buttonText}>Create Character</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});