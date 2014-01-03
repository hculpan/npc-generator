/**
 * Created by usucuha on 1/2/14.
 */

var classes = [
    "Cleric",
    "Cleric",
    "Druid",
    "Druid",
    "Druid",
    "Fighter",
    "Fighter",
    "Fighter",
    "Fighter",
    "Fighter",
    "Paladin",
    "Ranger",
    "Magic-user",
    "Magic-user",
    "Magic-user",
    "Illusionist",
    "Thief",
    "Thief",
    "Thief",
    "Thief",
    "Thief",
    "Witch",
    "Assassin",
    "Assassin",
    "Assassin",
    "Assassin",
//    "Monk",
    "Fighter",
    "Fighter",
    "Thief"
];

var races = [
    "Human",
    "Elf",
    "Dwarf",
    "Halfling",
    "Thrassian"
];

var racesNum = [
    20, 23, 26, 29, 30
]

var alignments = [
    "Chaotic",
    "Chaotic",
    "Chaotic",
    "Neutral",
    "Neutral",
    "Lawful",
    "Lawful"
]

var gender = [
    "Male",
    "Male",
    "Male",
    "Male",
    "Female",
    "Female"
]

var levelAdjustment = [
    -2,
    -1,
    0,
    1,
    2
]

var classAbilityScores = {
    Cleric: "ACABBC",
    Druid: "BCABCA",
    Fighter: "ACBBAC",
    Paladin: "AABBCC",
    Ranger: "BBACAC",
    "Magic-user": "BACABC",
    Illusionist: "CACABB",
    Thief: "BACACB",
    Assassin: "AACACC",
    Monk: "ACAABC",
    Witch: "CABBCA"
};

var abilityScoreNames = [
    "STR",
    "INT",
    "WIS",
    "DEX",
    "CON",
    "CHA"
]

var abilityScoreMatrix = {
}

$(function() {
    npcClasses = new Table(classes);
    npcRaces = new Table(30, races, racesNum);
    npcAlignments = new Table(alignments);
    npcGenders = new Table(gender);
    npcLevelAdjustment = new Table(levelAdjustment);

    npcAbilityScoresA = new Table([15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18]);
    npcAbilityScoresB = new Table([13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15]);
    npcAbilityScoresC = new Table([9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 13, 13, 13]);
    npcAbilityScoresD = new Table([7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10]);

    abilityScoreMatrix["A"] = npcAbilityScoresA;
    abilityScoreMatrix["B"] = npcAbilityScoresB;
    abilityScoreMatrix["C"] = npcAbilityScoresC;
    abilityScoreMatrix["D"] = npcAbilityScoresD;
});

function generateAbilityScore(num, array) {
    return abilityScoreMatrix[array.substr(num, 1)].getValue();
}

function generateNpc() {
    var level = getPartyLevel() + npcLevelAdjustment.getValue();
    if (level < 1) {
        level = 1;
    }
    var npcClass = npcClasses.getValue();
    var primaryWeapon = getPrimaryWeapon(npcClass);
    var abilities = new Array(6);
    for (var i = 0; i < 6; i++) {
        abilities[i] =  generateAbilityScore(i, classAbilityScores[npcClass])
    }
    var usingShield = isUsingShield(npcClass, primaryWeapon);
    var armor = getArmor(npcClass);
    var magicItems = getMagicItems(npcClass, level);
    var armorClass = getArmorClass(abilities[3], usingShield, armor);
    var weaponMod = 0;
    var weaponModText = "";
    var shieldMod = 0;
    var armorMod = 0;
    for (var i = 0; i < magicItems.length; i++) {
        if ("wpn".localeCompare(magicItems[i]) == 0) {
            weaponMod++;
            magicItems[i] = "";
        } else if ("armor".localeCompare(magicItems[i]) == 0) {
            if (rollDice(100) < 50 || !usingShield) {
                armorMod++;
            } else {
                shieldMod++;
            }
            armorClass++;
            magicItems[i] = "";
        } else if ("ring of protection +1".localeCompare(magicItems[i]) == 0) {
            armorClass++;
        } else if ("Wpn:".localeCompare(magicItems[i].substr(0, 4)) == 0) {
            weaponModText = magicItems[i].substr(4);
            magicItems[i] = "";
        }
    }

    var output = "<label class='span10'>" + npcClass;
    output += ", AC " + armorClass;
    output += ", LVL " + level;
    output += ", " + npcAlignments.getValue() + " " + npcGenders.getValue() + " " + npcRaces.getValue();
    if (armorMod > 0) {
        output += ", " + replaceVariable(getArmorDisplay(armor), "%ARMORMOD%", "+" + armorMod.toString()).trim();
    } else {
        output += ", " + replaceVariable(getArmorDisplay(armor), "%ARMORMOD%", "").trim();
    }
    if ("".localeCompare(weaponModText) != 0) {
        output += ", " + replaceVariable(primaryWeapon, "%WEAPONMOD%", weaponModText).trim();
    } else if (weaponMod > 0) {
        output += ", " + replaceVariable(primaryWeapon, "%WEAPONMOD%", "+" + weaponMod.toString()).trim();
    } else {
        output += ", " + replaceVariable(primaryWeapon, "%WEAPONMOD%", "").trim();
    }
    if (usingShield) {
        if (shieldMod > 0) {
            output += " " + replaceVariable("&amp; shield %SHIELDMOD%", "%SHIELDMOD%", "+" + shieldMod.toString()).trim();
        } else {
            output += " " + replaceVariable("&amp; shield %SHIELDMOD%", "%SHIELDMOD%", "").trim();
        }
    }
    output += "</label><label class='span10'>";
    for (var i = 0; i < 6; i++) {
        output += " " + abilityScoreNames[i] + " " + abilities[i];
    }
    output += "</label><label class='span10'>";

    if (magicItems instanceof Array && magicItems.length > 0) {
        for (var i = 0; i < magicItems.length; i++) {
            if ("".localeCompare(magicItems[i]) != 0) {
                output += magicItems[i];
                if (i < magicItems.length - 1) {
                    output += ", ";
                }
            }
        }
    }

    return output + "</label>";
}