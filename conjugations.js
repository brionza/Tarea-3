let words = [], element, compare, guineaPig, WAr = 0, WEr = 0, WIr = 0; 


do{
        let word = prompt('Ingrese un verbo: ', '');
        compare = prompt('Ingrese el tiempo: ', '');
        compare = compare.toLocaleUpperCase();

        words.push(word);

        document.write(word + ' ' + compare + '<br>');

        for(let i = 0; i < word.length; i++){
            if(word.charAt(i) == 'a' && word.charAt(i + 1) == 'r'){
                WAr = WAr + 1;
                endWAr(word, compare);
            }
            if(word.charAt(i) == 'e' && word.charAt(i + 1) == 'r'){
                WEr = WEr + 1;
                endWAr(word, compare);
            }
            if(word.charAt(i) == 'i' && word.charAt(i + 1) == 'r'){
                WIr = WIr + 1;
                endWAr(word, compare);
            }
        }
    }
while(compare != 'T');

function endWAr(input, tense){

    if(compare == 'A'){
        PresentWriteYo(input, tense);
    }
    if(compare == 'F'){
        futureWriteYo(input, tense);
    }
    if(compare == 'P'){
        PastWriteYo(input, tense);
    }
    
}

function endWEr(input){
    if(compare == 'A'){
        PresentWriteYo(input, tense);
    }
    if(compare == 'F'){
        futureWriteYo(input, tense);
    }
    if(compare == 'P'){
        PastWriteYo(input, tense);
    }
}

function endWIr(input){
    if(compare == 'A'){
        PresentWriteYo(input, tense);
    }
    if(compare == 'F'){
        futureWriteYo(input, tense);
    }
    if(compare == 'P'){
        PastWriteYo(input, tense);
    }
}