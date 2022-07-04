var MemoryStorage = require("memorystorage");
// here, the MemoryStorage function is available
var store = new MemoryStorage("note-app");


const getKeys = (store) => {
    var keys = [];
    for (var i = 0; i < store.length; i++) {
      var key = store.key(i);
      keys.push(key); 
    }
    return keys;
}

const getValues = (store) => {
    var values = [];    
    for (var i = 0; i < store.length; i++) {
        var value = store.getItem(store.key(i));
        values.push(value);
    }
    return values;
}


module.exports = {
    store,
    getKeys,
    getValues
}