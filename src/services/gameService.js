import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/games'

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`);

    return result;
}

export const getAll = async () => {
    let result = await request.get(baseUrl);

    result = Object.values(result);
    return result;
}

export const create = async (gameData) => {

    try {
        const result = await request.post(baseUrl, gameData);

        // Проверка за успешен отговор
        if (!result.ok) {
            throw new Error('Failed to create game');
        }

        return result;

    } catch (error) {
        console.log(error);
    }
}