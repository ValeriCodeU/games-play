import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const create =  async (gameId, userName, text) => {
    const result = await request.post(baseUrl, {
        gameId,
        userName,
        text
    });

    return result;
}