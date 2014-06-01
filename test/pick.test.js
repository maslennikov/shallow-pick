'use strict';

var pick = require('../'),
    test = require('tape');


test('Empty arguments', function(assert) {
    assert.deepEqual(pick(), {}, 'returns an empty object');
    assert.end();
});

test('No keys specified', function(assert) {
    var source = {a: 1, b: 2};
    assert.deepEqual(pick(source), {}, 'returns an empty object');
    assert.end();
});

test('Selecting keys', function(assert) {
    var source = {a: 1, b: 2, c: 3};
    assert.deepEqual(pick(source, 'a'), {a: 1}, 'returns one key');
    assert.deepEqual(pick(source, 'a', 'b'), {a: 1, b: 2}, 'returns two keys');
    assert.deepEqual(pick(source, 'd'), {}, 'no existing keys passed');
    assert.deepEqual(pick(source, 'c', 'd'), {c: 3}, 'ignoring missing keys');
    assert.end();
});

test('Leaving source unmodified', function(assert) {
    var source = {a: 1, b: 2};

    pick(source);
    assert.deepEqual(source, {a: 1, b: 2}, 'all fields are untouched');

    pick(source, 'a');
    assert.deepEqual(source, {a: 1, b: 2}, 'all fields are untouched');

    pick(source, 'a', 'b', 'c', 'd');
    assert.deepEqual(source, {a: 1, b: 2}, 'all fields are untouched');

    assert.end();
});

test('Garbage source properties', function(assert) {
    var source = {a: 1, b: 2, c: 3};
    var keys = [null, false, 0, undefined, (0/0)];

    assert.deepEqual(pick.apply(null, [source].concat(keys)), {},
        'no keys matched');
    assert.end();
});

test('Source is not an object', function(assert) {
    var sources = [null, false, 0, 5, undefined, (0/0)];

    for (var i = 0; i < sources.length; i++) {
        assert.deepEqual(pick(sources[i], 'a', 'b'), {},
            'ignores a non-object source');
    }

    assert.end();
});
