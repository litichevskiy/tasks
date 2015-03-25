//var bin = {};
//var lastID = 0;
//
//var storage = {
//
//    put : function ( o ) {
//
//        lastID++;
//        bin[lastID] = o;
//
//        return lastID;
//    },
//
//    get : function ( id ) {
//        return bin[id];
//    },
//
//    remove : function ( id ) {
//        delete bin[id];
//    },
//
//    update : function ( id, o ) {
//        bin[id] = o;
//    }
//};

function Storage () {
    this.bin    = {};
    this.lastID = 0;
}

Storage.prototype.put = function ( o ) {

    this.lastID++;
    this.bin[this.lastID] = o;

    return this.lastID;
};
