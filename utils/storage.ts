import AsyncStorage from '@react-native-async-storage/async-storage';
import { Character } from '@/types/character';

const STORAGE_KEY = 'DnDKaracter_characters';

export const saveCharacters = async (characters: Character[]): Promise<void> => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
    } catch (error) {
        console.error('Error saving characters:', error);
    }
};

export const getCharacters = async (): Promise<Character[]> => {
    try {
        const charactersJson = await AsyncStorage.getItem(STORAGE_KEY);
        return charactersJson ? JSON.parse(charactersJson) : [];
    } catch (error) {
        console.error('Error getting characters:', error);
        return [];
    }
};