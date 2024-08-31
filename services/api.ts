import axios from 'axios';

const API_BASE_URL = 'https://www.dnd5eapi.co/api';

export const fetchRaces = async () => {
    const response = await axios.get(`${API_BASE_URL}/races`);
    return response.data.results;
};

export const fetchClasses = async () => {
    const response = await axios.get(`${API_BASE_URL}/classes`);
    return response.data.results;
};

export const fetchRaceDetails = async (raceIndex: string) => {
    const response = await axios.get(`${API_BASE_URL}/races/${raceIndex}`);
    return response.data;
};

export const fetchClassDetails = async (classIndex: string) => {
    const response = await axios.get(`${API_BASE_URL}/classes/${classIndex}`);
    return response.data;
};