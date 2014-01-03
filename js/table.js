/**
 * Created by usucuha on 1/2/14.
 */

var Table = (function() {
    // "private" variables
    var _sides;
    var _values;
    var _diceNums;
    var _allSingleNum = false;

    // constructor
    function Table(sides, values, diceNums){
        if (sides instanceof Array) {
            this.TableWithoutSides(sides);
        } else {
            this.TableWithSides(sides, values, diceNums);
        }
    };

    Table.prototype.TableWithoutSides = function(values) {
        this._allSingleNum = true;
        this._values = values;
        this._sides = this._values.length;
        this._diceNums = new Array(this._sides);
        for (var i = 0; i < this._sides; i++) {
            this._diceNums[i] = i;
        }
    }

    Table.prototype.TableWithSides = function (sides, values, diceNums) {
        this._sides = sides;
        if (values != undefined) {
            this._values = values;
        }
        if (diceNums != undefined) {
            this._diceNums = diceNums;
        } else if (values.length == sides) {
            this._diceNums = new Array(sides);
            for (var i = 0; i < sides; i++) {
                this._diceNums[i] = i;
            }
            this._allSingleNum = true;
        }
    }

    // add the methods to the prototype so that all of the
    // Foo instances can access the private static
    Table.prototype.getSides = function() {
        return this._sides;
    };

    Table.prototype.setSides = function(sides) {
        this._sides = sides;
    };

    Table.prototype.roll = function() {
        var num = Math.floor((Math.random() * this._sides) + 1);
        return num;
    }

    Table.prototype.getValue = function() {
        if (this._allSingleNum) {
            return this._values[this.roll() - 1];
        } else {
            return this.findTableValue();
        }
    }

    Table.prototype.findTableValue = function () {
        var num = this.findTableIndex();
        return this._values[num];
    }

    Table.prototype.findTableIndex = function () {
        var num = this.roll(this._sides);
        for (var i = 0; i < this._diceNums.length; i++) {
            if (num <= this._diceNums[i]) {
                return i;
            }
        }
        return -1;
    }

    return Table;
})();