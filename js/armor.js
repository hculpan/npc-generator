/**
 * Created by usucuha on 1/2/14.
 */

var classCanUseShields = {
    Cleric: true,
    Druid: true,
    Fighter: true,
    Paladin: true,
    Ranger: true,
    "Magic-user": false,
    Illusionist: false,
    Thief: false,
    Assassin: false,
    Monk: false,
    Witch: false
}

var fighterArmorTypes = [
    "leather",
    "chainmail",
    "platemail"
]

var fighterArmorValues = {
    leather: 12,
    chainmail: 15,
    platemail: 17,
    noarmor: 11
}

var armorNames = {
    leather: "leather %ARMORMOD%",
    chainmail: "chain mail %ARMORMOD%",
    platemail: "plate mail %ARMORMOD%",
    noarmor: "no armor"
}

$(function() {
    fighterArmors = new Table(fighterArmorTypes);
})

function isUsingShield(className, primaryWeapon) {
    return (classCanUseShields[className]) && (primaryWeapon.indexOf("2H") == -1);
}

function getArmorDisplay(armorType) {
    return armorNames[armorType];
}

function getArmorClass(dex, usingShield, armorType) {
    console.log("armorType = " + armorType);
    var ac = fighterArmorValues[armorType];
    console.log("ac = " + ac);
    if (dex <= 3) {
        ac -= 3;
    } else if (dex <= 5) {
        ac -= 2;
    } else if (dex <= 8) {
        ac -= 1;
    } else if (dex >= 18) {
        ac += 3;
    } else if (dex >= 16) {
        ac += 2;
    } else if (dex >= 13) {
        ac += 1;
    }
    if (usingShield) ac += 1;
    return ac;
}

function getArmor(className) {
    if ("Fighter".localeCompare(className) == 0 ||
        "Ranger".localeCompare(className) == 0 ||
        "Paladin".localeCompare(className) == 0 ||
        "Cleric".localeCompare(className) == 0) {
        return fighterArmors.getValue();
    } else if ("Druid".localeCompare(className) == 0 ||
        "Thief".localeCompare(className) == 0 ||
        "Assassin".localeCompare(className) == 0) {
        return "leather";
    } else {
        return "noarmor";
    }
}