function futureWriteYo(input, tense){    
    if(WAr == 1){
        document.write('Yo ' + input + 'e.' + '<br>');
        FutureWriteTu(input, tense);
    }
    if(WEr == 1){
        document.write('Yo ' + input + 'e.' + '<br>');
        FutureWriteTu(input, tense);
    }
    if(WIr == 1){
        document.write('Yo ' + input + 'e.' + '<br>');
        FutureWriteTu(input, tense);
    }
}

function FutureWriteTu(input, tense){
    if(WAr == 1){
        document.write('Tu ' + input + 'as.' + '<br>');
        FutureWriteEl(input);
    }
    if(WEr == 1){
        document.write('Tu ' + input + 'as.' + '<br>');
        FutureWriteEl(input, tense);
    }
    if(WIr == 1){
        document.write('Tu ' + input + 'as.' + '<br>');
        FutureWriteEl(input, tense);
    }
}

function FutureWriteEl(input, tense){
    if(WAr == 1){
        document.write('El ' + input + 'a.' + '<br>');
        FutureWriteNosotros(input);
    }
    if(WEr == 1){
        document.write('El ' + input + 'a.' + '<br>');
        FutureWriteNosotros(input, tense);
    }
    if(WIr == 1){
        document.write('El ' + input + 'a.' + '<br>');
        FutureWriteNosotros(input, tense);
    }
}

function FutureWriteNosotros(input, tense){
    if(WAr == 1){
        document.write('Nosotros ' + input + 'emos.' + '<br>');
        FutureWriteVosotros(input);
    }
    if(WEr == 1){
        document.write('Nosotros ' + input + 'an.' + '<br>');
        FutureWriteVosotros(input, tense);
    }
    if(WIr == 1){
        document.write('Nosotros ' + input + 'an.' + '<br>');
        FutureWriteVosotros(input, tense);
    }
}

function FutureWriteVosotros(input, tense){
    if(WAr == 1){
        document.write('Vosotros ' + input + 'eis.' + '<br>');
        FutureWriteEllos(input);
    }
    if(WEr == 1){
        document.write('Vosotros ' + input + 'eis.' + '<br>');
        FutureWriteEllos(input, tense);
    }
    if(WIr == 1){
        document.write('Vosotros ' + input + 'eis.' + '<br>');
        FutureWriteEllos(input, tense);
    }
}

function FutureWriteEllos(input, tense){
    if(WAr == 1){
        document.write('Ellos ' + input + 'an.' + '<br>');
    }
    if(WEr == 1){
        document.write('Ellos ' + input + 'an.' + '<br>');
    }
    if(WIr == 1){
        document.write('Ellos ' + input + 'an.' + '<br>');
    }
}