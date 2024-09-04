import { request } from "../lib/request";

const baseUrl  = 'http://localhost:3030/jsonstore/games'

export const getAll = async () => {
    let result = await request(baseUrl, 'GET');

    result = Object.values(result);    
    return result;
}

export const create = async (gameData) => {

    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(gameData)
        });

          // Проверка за успешен отговор
          if (!response.ok) {
            throw new Error('Failed to create game');
        }
    
        const result = await response.json();
    
        return result;
        
    } catch (error) {
        console.log(error);
    }    
}