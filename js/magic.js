/**
 * Created by usucuha on 1/2/14.
 */

var clericMagicItems = [
    [ ["W", "A", "M1"] ],
    [ ["W", "A", "M1"],
      ["M1", "P1", "R1"]],
    [ ["W"],
      ["A"],
      ["M2", "P2", "C"]],
    [ ["W"],
      ["A"],
      ["M1", "P1", "R1"],
      ["M2", "P2", "C"]]
];

var fighterMagicItems = [
    [ ["W", "A", "M1"] ],
    [ ["W", "A", "M1"],
      ["M1", "P1", "R1"]],
    [ ["W"],
      ["A"],
      ["P1", "R1", "F"]],
    [ ["W"],
      ["A"],
      ["P2", "R2", "F"]]
];

var magicUserMagicItems = [
    [ ["M1", "R1", "P1"] ],
    [ ["M1", "R1", "P1"],
      ["R1", "P1", "W1"]],
    [ ["W"],
      ["R"],
      ["M1", "R1", "P1"]
      ["M2", "P2", "W1"]],
    [ ["W"],
      ["R"],
      ["M2", "P2", "W1"],
      ["M2", "R2", "W2"]]
];

var thiefMagicItems = [
    [ ["W", "A", "M1"] ],
    [ ["W", "A", "M1"],
      ["M1", "P1", "R1"]],
    [ ["W"],
      ["A"],
      ["M2", "S", "P1"]],
    [ ["W"],
      ["A"],
      ["M2", "S", "P2"]]
];

var magicItemTables = {
    R1: new Table([ "ring of animal control",
                    "ring of feather falling",
                    "ring of fire resistance",
                    "ring of free action",
                    "ring of invisibility",
                    "ring of protection +1",
                    "ring of swimming",
                    "ring of telekinesis",
                    "ring of warmth",
                    "ring of water walking"]),
    R2: new Table([ "ring of control, plant",
                    "ring of control, human",
                    "ring of control, undead",
                    "ring of djinni summoning",
                    "ring of invisibility",
                    "ring of protect. +1, 5' radius",
                    "ring of regeneration",
                    "ring of spell storing",
                    "ring of spell turning",
                    "ring of x-ray vision"]),
    S: new Table([
                    "Wpn:+1 [+2 vs. lycan]",
                    "Wpn:+1 [+2 vs. dragons]",
                    "Wpn:+1 [+2 vs. enchanted]",
                    "Wpn:+1 [+2 vs. regenerating]",
                    "Wpn:+1 [+2 vs. spell users]",
                    "Wpn:+1 [+2 vs. undead]",
                    "Wpn:+1 flaming",
                    "Wpn:+1 [light (30' radius)]",
                    "Wpn:+1 [locate object]",
                    "Wpn:+2"]),
    W1: new Table([ "wand of charm (person)",
                    "wand of fear",
                    "wand of illusion",
                    "wand of magic missiles",
                    "wand of webs",
                    "wand of trap detection",
                    "wand of enemy detection",
                    "wand of magic detection",
                    "wand of metal detection",
                    "wand of secret door detection"]),
    W2: new Table([ "wand of cold",
                    "wand of charm (monster)",
                    "wand of fire",
                    "wand of fireballs",
                    "wand of illusion",
                    "wand of lightning (bolts)",
                    "wand of negation",
                    "wand of paralyzation",
                    "wand of polymorphing",
                    "staff of striking",
                    "ring of spell storing"]),
    F: new Table([  "boots of speed",
                    "boots of levitation",
                    "gauntlets of ogre strength",
                    "girdle of giant strength",
                    "elven cloak & boots",
                    "helm of telepathy",
                    "horn of blasting",
                    "ring of protection +2",
                    "ring of regeneration",
                    "bracers, defense (AC13)"]),
    P1: new Table([ "potion of diminution",
                    "potion of climbing",
                    "potion of cold resistance",
                    "potion of ESP",
                    "potion of fire resistance",
                    "potion of gaseous form",
                    "potion of growth",
                    "potion of healing",
                    "potion of invisibility",
                    "potion of levitation"]),
    P2: new Table([ "potion of clairaudience",
                    "potion of clairvoyance",
                    "potion of control animal",
                    "potion of control person",
                    "potion of control undead",
                    "potion of giant strength",
                    "potion of heroism",
                    "potion of invulnerability",
                    "potion of polymorph self",
                    "potion of speed"]),
    C: new Table([  "staff of healing",
                    "staff of snake",
                    "staff of commanding",
                    "staff of curing",
                    "staff of striking",
                    "staff of turning (undead)",
                    "mace of disruption",
                    "sling of seeking",
                    "ring of regeneration",
                    "ring of spell storing (cleric)"]),
    M1: new Table([ "bag of holding",
                    "bracers of defense (AC12)",
                    "brooch of shielding",
                    "broom of flying",
                    "elven boots",
                    "elven cloak",
                    "ring of protection +1",
                    "rope of climbing",
                    "Table:P1",
                    "Table:R1"]),
    M2: new Table([ "amulet, vs. spying",
                    "bracers of defense (AC13)",
                    "boots of levitation",
                    "boots of speed",
                    "elven cloak & boots",
                    "displacer cloak",
                    "flying carpet",
                    "helm of reading",
                    "horn of blasting",
                    "medallion of ESP"]),
    R: new Table([  "ring of protection +1"])
};

function getMagicItems(className, level) {
    var selections;
    var results = new Array();
    if ("Druid".localeCompare(className) == 0 ||
        "Cleric".localeCompare(className) == 0) {
        selections = clericMagicItems;
    } else if ("Fighter".localeCompare(className) == 0 ||
            "Paladin".localeCompare(className) == 0 ||
            "Ranger".localeCompare(className) == 0) {
        selections = fighterMagicItems;
    } else if ("Magic-user".localeCompare(className) == 0 ||
        "Illusionist".localeCompare(className) == 0 ||
        "Witch".localeCompare(className) == 0) {
        selections = magicUserMagicItems;
    } else if ("Thief".localeCompare(className) == 0 ||
        "Assassin".localeCompare(className) == 0 ||
        "Monk".localeCompare(className) == 0) {
        selections = thiefMagicItems;
    } else {
        return [];
    }

    if (level <= 3) {
        selections = selections[0];
    } else if (level <= 6) {
        selections = selections[1]
    } else if (level <= 9) {
        selections = selections[2]
    } else {
        selections = selections[3];
    }

    for (var i = 0; i < selections.length; i++) {
        var tableName = selectRandomValue(selections[i]);
        console.log("tableName = " + tableName);
        if ("W".localeCompare(tableName) == 0) {
            results.push("wpn");
        } else if ("A".localeCompare(tableName) == 0) {
            results.push("armor");
        } else {
            var table = magicItemTables[tableName];
            if (table != undefined) {
                var item = table.getValue();
                if ("Table:".localeCompare(item.substr(0, 6)) == 0) {
                    var table = magicItemTables[item.substr(6)];
                    item = table.getValue();
                }
                results.push(item);
            } else {
                results.push("INVALID");
            }
        }
    }

    return results;
}

