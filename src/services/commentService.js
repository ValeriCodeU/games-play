import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (gameId) => {
    const result = await request.get(baseUrl);

    return Object.values(result).filter(c => c.gameId == gameId);
}

export const create =  async (gameId, userName, text) => {
    const result = await request.post(baseUrl, {
        gameId,
        userName,
        text
    });

    return result;
}