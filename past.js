function PastWriteYo(input, tense){    
    let getInputLenght = input.length;
    input = input.substring(0, getInputLenght - 2);

    if(WAr == 1){
        document.write('Yo ' + input + 'e.' + '<br>');
        PastWriteTu(input, tense);
    }
    if(WEr == 1){
        document.write('Yo ' + input + 'i.' + '<br>');
        PastWriteTu(input, tense);
    }
    if(WIr == 1){
        document.write('Yo ' + input + 'i.' + '<br>');
        PastWriteTu(input, tense);
    }
}

function PastWriteTu(input, tense){
    if(WAr == 1){
        document.write('Tu ' + input + 'aste.' + '<br>');
        PastWriteEl(input);
    }
    if(WEr == 1){
        document.write('Tu ' + input + 'iste.' + '<br>');
        PastWriteEl(input, tense);
    }
    if(WIr == 1){
        document.write('Tu ' + input + 'iste.' + '<br>');
        PastWriteEl(input, tense);
    }
}

function PastWriteEl(input, tense){
    if(WAr == 1){
        document.write('El ' + input + 'o.' + '<br>');
        PastWriteNosotros(input);
    }
    if(WEr == 1){
        document.write('El ' + input + 'io.' + '<br>');
        PastWriteNosotros(input, tense);
    }
    if(WIr == 1){
        document.write('El ' + input + 'io.' + '<br>');
        PastWriteNosotros(input, tense);
    }
}

function PastWriteNosotros(input, tense){
    if(WAr == 1){
        document.write('Nosotros ' + input + 'amos.' + '<br>');
        PastWriteVosotros(input);
    }
    if(WEr == 1){
        document.write('Nosotros ' + input + 'emos.' + '<br>');
        PastWriteVosotros(input, tense);
    }
    if(WIr == 1){
        document.write('Nosotros ' + input + 'imos.' + '<br>');
        PastWriteVosotros(input, tense);
    }
}

function PastWriteVosotros(input, tense){
    if(WAr == 1){
        document.write('Vosotros ' + input + 'asteis.' + '<br>');
        PastWriteEllos(input);
    }
    if(WEr == 1){
        document.write('Vosotros ' + input + 'isteis.' + '<br>');
        PastWriteEllos(input, tense);
    }
    if(WIr == 1){
        document.write('Vosotros ' + input + 'isteis.' + '<br>');
        PastWriteEllos(input, tense);
    }
}

function PastWriteEllos(input, tense){
    if(WAr == 1){
        document.write('Ellos ' + input + 'aron.' + '<br>');
    }
    if(WEr == 1){
        document.write('Ellos ' + input + 'ieron.' + '<br>');
    }
    if(WIr == 1){
        document.write('Ellos ' + input + 'ieron.' + '<br>');
    }
}