export interface Character {
    id: string;
    name: string;
    race: string;
    class: string;
    level: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export type CharacterFormData = Omit<Character, 'id'>;