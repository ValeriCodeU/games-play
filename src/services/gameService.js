const baseUrl  = 'http:localhost:3030/jsonstore'

export const create = async (gameData) => {

    try {
        const response = await fetch(`${baseUrl}/games`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(gameData)
        });
    
        const result = await response.json ();
    
        return result;
        
    } catch (error) {
        console.log(error);
    }
    
}