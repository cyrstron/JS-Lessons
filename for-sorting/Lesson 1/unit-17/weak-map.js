let key = {a: 1};

const map = new WeakMap();

map.set(key, {/* some massive object*/});

key = null; // map doesn't hold value anymore

let setKey = {b: 1};

let set = new WeakSet();

set.add(setKey);

set = null; // set is empty now
