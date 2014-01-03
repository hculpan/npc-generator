/**
 * Created by usucuha on 12/27/13.
 */

function generate() {
    if (validate()) {
        $('#message').text("");
        var num = getNumberNpc();
        console.log("num = " + num);
        var output = "";
        for (var i = 0; i < num; i++) {
            var val = generateNpc();
            output += "<div class='row stat-block'>" + val + "</div>";
        }
        console.log(output);
        $('#main-result').html(output);
    } else {
        $('#message').text("You must enter the number of NPC's");
    }
}

