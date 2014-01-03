/**
 * Created by usucuha on 1/2/14.
 */

var fighterPrimaryWeapons = [
    "Battle axe %WEAPONMOD% (1d8)",
    "War hammer %WEAPONMOD% (2H, 1d6)",
    "Long sword %WEAPONMOD% (1d8)",
    "Pole arm %WEAPONMOD% (2H, 1d10)",
    "2H sword %WEAPONMOD% (1d10)",
    "Battle axe %WEAPONMOD% (1d8)",
    "War hammer %WEAPONMOD% (2H, 1d6)",
    "Long sword %WEAPONMOD% (1d8)",
    "Pole arm %WEAPONMOD% (1d10)"
];

var rangerPrimaryWeapons = [
    "Longbow %WEAPONMOD% (2H, 1d8)",
    "Short bow %WEAPONMOD% (2H, 1d6)",
    "Dagger %WEAPONMOD% (1d4)",
    "Short sword %WEAPONMOD% (1d6)",
    "Long sword %WEAPONMOD% (1d8)"
]

var clericPrimaryWeapons = [
    "Club %WEAPONMOD% (1d4)",
    "Mace %WEAPONMOD% (1d6)",
    "Hammer %WEAPONMOD% (1d4)",
    "Club %WEAPONMOD% (1d4)",
    "Mace %WEAPONMOD% (1d6)",
    "Hammer %WEAPONMOD% (1d4)",
    "Club %WEAPONMOD% (1d4)",
    "Mace %WEAPONMOD% (1d6)",
    "Hammer %WEAPONMOD% (1d4)",
    "Sling %WEAPONMOD% (1d4)"
]

var druidPrimaryWeapons = [
    "Club %WEAPONMOD% (1d4)",
    "Dagger %WEAPONMOD% (1d4)",
    "Hammer %WEAPONMOD% (1d4)",
    "Spear %WEAPONMOD% (1d6)",
    "Quarterstaff %WEAPONMOD% (2H, 1d6)"
]

var magicUserPrimaryWeapons = [
    "Quarterstaff %WEAPONMOD% (2H, 1d6)",
    "Dagger %WEAPONMOD% (1d4)",
    "Dagger %WEAPONMOD% (1d4)",
    "Dart %WEAPONMOD% (1d4)"
]

var thiefPrimaryWeapons = [
    "Club %WEAPONMOD% (1d4)",
    "Dagger %WEAPONMOD% (1d4)",
    "Longsword %WEAPONMOD% (1d8)",
    "Short sword %WEAPONMOD% (1d6)",
    "Dart %WEAPONMOD% (1d4)",
    "Longbow %WEAPONMOD% (2H, 1d8)",
    "Short bow %WEAPONMOD% (2H, 1d6)"
]

var monkPrimaryWeapons = [
    "Club %WEAPONMOD% (1d4)",
    "Dagger %WEAPONMOD% (1d4)",
    "Hand axe %WEAPONMOD% (1d6)",
    "Crossbow %WEAPONMOD% (1d6)",
    "Javelin %WEAPONMOD% (1d6)",
    "Pole arm %WEAPONMOD% (2H, 1d10)",
    "Quarterstaff %WEAPONMOD% (2H, 1d6)"
]

var classPrimaryWeapons = {
};

$(function() {
    classPrimaryWeapons["Cleric"] = new Table(clericPrimaryWeapons);
    classPrimaryWeapons["Druid"] = new Table(druidPrimaryWeapons);
    classPrimaryWeapons["Fighter"] = new Table(fighterPrimaryWeapons);
    classPrimaryWeapons["Paladin"] = new Table(fighterPrimaryWeapons);
    classPrimaryWeapons["Ranger"] = new Table(rangerPrimaryWeapons);
    classPrimaryWeapons["Magic-user"] = new Table(magicUserPrimaryWeapons);
    classPrimaryWeapons["Illusionist"] = new Table(magicUserPrimaryWeapons);
    classPrimaryWeapons["Thief"] = new Table(thiefPrimaryWeapons);
    classPrimaryWeapons["Assassin"] = new Table(thiefPrimaryWeapons);
    classPrimaryWeapons["Monk"] = new Table(monkPrimaryWeapons);
    classPrimaryWeapons["Witch"] = new Table(magicUserPrimaryWeapons);
});

function getPrimaryWeapon(className) {
    return classPrimaryWeapons[className].getValue();
}