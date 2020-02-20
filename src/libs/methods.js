
import React from 'react';
import {Text} from 'react-native';

export function generateKey(length){
    const alphabet = "QqWwEeRrTtYyUuIiOoPpAaSsDdFfGgHhJjKkLlZzXxCcVvBbNnMm1234567890";
    let key = '';
    for(let i = 0; i < length; i++){
        key += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return key;
}

export function parseColorText(text){
    const JSXText = [];

    if(text.split("<!>").length !== text.split("/!").length) text+="</!>";

    for(let chapterText of text.split("<!>")){
        if(chapterText.includes("</!>")){
            JSXText.push(<Text style={{color:'red'}}>{chapterText.split("</!>")[0]}</Text>);
            JSXText.push(<Text>{chapterText.split("</!>")[1]}</Text>)
        }
        else JSXText.push(<Text>{chapterText}</Text>)
    }
    return JSXText;
}
