function PresentWriteYo(input, tense){    
    let getInputLenght = input.length;
    input = input.substring(0, getInputLenght - 2);
    
    if(WAr == 1){
        document.write('Yo ' + input + 'o.' + '<br>');
        PresentWriteTu(input, tense);
    }
    if(WEr == 1){
        document.write('Yo ' + input + 'o.' + '<br>');
        PresentWriteTu(input, tense);
    }
    if(WIr == 1){
        document.write('Yo ' + input + 'o.' + '<br>');
        PresentWriteTu(input, tense);
    }
}

function PresentWriteTu(input, tense){
    if(WAr == 1){
        document.write('Tu ' + input + 'as.' + '<br>');
        PresentWriteEl(input);
    }
    if(WEr == 1){
        document.write('Tu ' + input + 'es.' + '<br>');
        PresentWriteEl(input, tense);
    }
    if(WIr == 1){
        document.write('Tu ' + input + 'es.' + '<br>');
        PresentWriteEl(input, tense);
    }
}

function PresentWriteEl(input, tense){
    if(WAr == 1){
        document.write('El ' + input + 'a.' + '<br>');
        PresentWriteNosotros(input);
    }
    if(WEr == 1){
        document.write('El ' + input + 'e.' + '<br>');
        PresentWriteNosotros(input, tense);
    }
    if(WIr == 1){
        document.write('El ' + input + 'e.' + '<br>');
        PresentWriteNosotros(input, tense);
    }
}

function PresentWriteNosotros(input, tense){
    if(WAr == 1){
        document.write('Nosotros ' + input + 'amos.' + '<br>');
        PresentWriteVosotros(input);
    }
    if(WEr == 1){
        document.write('Nosotros ' + input + 'emos.' + '<br>');
        PresentWriteVosotros(input, tense);
    }
    if(WIr == 1){
        document.write('Nosotros ' + input + 'imos.' + '<br>');
        PresentWriteVosotros(input, tense);
    }
}

function PresentWriteVosotros(input, tense){
    if(WAr == 1){
        document.write('Vosotros ' + input + 'ais.' + '<br>');
        PresentWriteEllos(input);
    }
    if(WEr == 1){
        document.write('Vosotros ' + input + 'eis.' + '<br>');
        PresentWriteEllos(input, tense);
    }
    if(WIr == 1){
        document.write('Vosotros ' + input + 'is.' + '<br>');
        PresentWriteEllos(input, tense);
    }
}

function PresentWriteEllos(input, tense){
    if(WAr == 1){
        document.write('Ellos ' + input + 'an.' + '<br>');
    }
    if(WEr == 1){
        document.write('Ellos ' + input + 'en.' + '<br>');
    }
    if(WIr == 1){
        document.write('Ellos ' + input + 'en.' + '<br>');
    }
}