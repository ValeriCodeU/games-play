import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/games'

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

export const update = async (gameId, gameData) => {
    const result = await request.put(`${baseUrl}/${gameId}`, gameData);

    return result;
}

export const deleteGame = async (gameId) => {
    const result = await request.remove(`${baseUrl}/${gameId}`);

    return result;
}

export const getLatest = async () => {
    const query = new URLSearchParams({
        sortBy: '_createdOn desc',
        offset: 0,        // от кой елемент да започне
        pageSize: 3       // колко елемента да върне
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}