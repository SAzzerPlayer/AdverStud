
export function generateKey(length){
    const alphabet = "QqWwEeRrTtYyUuIiOoPpAaSsDdFfGgHhJjKkLlZzXxCcVvBbNnMm1234567890";
    let key = '';
    for(let i = 0; i < length; i++){
        key += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return key;
}
