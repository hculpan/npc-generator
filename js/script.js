function validate() {
    var val1 = $('#num_npc').val();
    var val2 = $('#party-level').val();
    return (val1 != "" && val1 != undefined) ||
        (val2 != "" && val2 != undefined);
}

function getNumberNpc() {
    return parseInt($('#num_npc').val());
}

function getPartyLevel() {
    return parseInt($('#party-level').val());
}

function replaceVariable(template, varName, newText) {
    var re = new RegExp(varName,"g");
    var text = template.replace(re, newText);
    var matches = text.match(/\%_(.*?)\_%/);
    if (matches) {
        var submatch = matches[1];
        console.log('submatch = ' + submatch);
        var terms = submatch.split(/[Dd]/);
        var times = parseInt(terms[0]);
        console.log('terms = ' + terms);
        console.log('times = ' + times);
        console.log('sides = ' + terms[1]);
        var finalNum = 0;
        for (var i = 0; i < times; i++) {
            finalNum += rollDice(parseInt(terms[1]));
        }
        text = text.replace('%_' + submatch + '_%', finalNum.toString());
    }
    return text;
}

function rollDice(sides) {
    var num = Math.floor((Math.random() * sides) +1);
    return num;
}

function selectRandomValue(values) {
    console.log("values = " + values);
    var dieRoll = rollDice(values.length) - 1;
    console.log("dieRoll = " + dieRoll);
    return values[dieRoll];
}



