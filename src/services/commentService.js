import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (gameId) => {

    var query = new URLSearchParams({
        where: `gameId="${gameId}"`
    });

    const result = await request.get(`${baseUrl}?${query}`);

    //return Object.values(result).filter(c => c.gameId == gameId);
    return result;
}

export const create =  async (gameId, userName, text) => {
    const result = await request.post(baseUrl, {
        gameId,
        userName,
        text
    });

    return result;
}