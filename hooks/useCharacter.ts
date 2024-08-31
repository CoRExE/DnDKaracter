import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Character, CharacterFormData } from '@/types/character';
import { getCharacters, saveCharacters } from '@/utils/storage';
import { v4 as uuidv4 } from 'uuid';

export const useCharacters = () => {
    const queryClient = useQueryClient();

    const { data: characters = [] } = useQuery<Character[]>('characters', getCharacters);

    const createCharacter = useMutation(
        (newCharacter: CharacterFormData) => {
            const characterWithId: Character = { ...newCharacter, id: uuidv4() };
            return saveCharacters([...characters, characterWithId]);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('characters');
            },
        }
    );

    const updateCharacter = useMutation(
        (updatedCharacter: Character) => {
            const updatedCharacters = characters.map((char) =>
                char.id === updatedCharacter.id ? updatedCharacter : char
            );
            return saveCharacters(updatedCharacters);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('characters');
            },
        }
    );

    const deleteCharacter = useMutation(
        (characterId: string) => {
            const updatedCharacters = characters.filter((char) => char.id !== characterId);
            return saveCharacters(updatedCharacters);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('characters');
            },
        }
    );

    return { characters, createCharacter, updateCharacter, deleteCharacter };
};