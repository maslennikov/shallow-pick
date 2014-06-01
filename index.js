'use strict';

module.exports = pick;


/**
 * Creates an object constructed of all specified properties of source leaving
 * source itself untouched.
 *
 * @returns shallow partial clone of source
 */
function pick(source /*...keys*/) {
    source = source || {};
    var destination = {};

    for (var i = 1; i < arguments.length; i++) {
        var key = arguments[i];

        if (source.hasOwnProperty(key)) {
            destination[key] = source[key];
        }
    }
    return destination;
}
