shallow-pick
============

[![build status](https://secure.travis-ci.org/maslennikov/shallow-pick.png)
](http://travis-ci.org/maslennikov/shallow-pick)

A utility function similar to `pick()` in `underscore` or `lo-dash`.

```javascript
function pick(source /*...keys*/) {/*...*/}
```

Creates an object constructed of all specified properties of source leaving
source itself untouched. Returns shallow partial clone of source

Makes only a shallow copy of the source feilds, consider using it with
[node-extend](https://github.com/justmoon/node-extend) or
[node-deep-extend](https://github.com/unclechu/node-deep-extend) if a deep copy
desired.

Examples
----------

Picking only existing properties:
```javascript
var source = {a: 1, b: 2, c: 3};

var destination = pick(source, 'a', 'c', 'd');
// destination --> {a: 1, c: 3}
// source --> {a: 1, b: 2, c: 3}
```

Sanitizing input parameters with pick and extend:
```javascript
function sanitizeInput(opts) {
    return extend({
        a: 'default value',
        b: 'default value'
    }, pick(opts, 'a', 'b'));
}

var input = sanitizeInput({a: 'something', evil: 'injection'});
// input --> {a: 'something', b: 'default value'}
```
