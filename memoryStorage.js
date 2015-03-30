function memoryStorage () {
    this.bin    = {};
    this.lastID = 0;
};



memoryStorage.prototype.update = function ( id, o ) {
    this.bin[id] = o;
    return  this.bin[id];
};


memoryStorage.prototype.remove = function ( id ) {
     delete this.bin[id];
};


memoryStorage.prototype.get = function ( id ) {
    
    return this.bin[id];
};


memoryStorage.prototype.put = function ( o ) {

    this.lastID++;
    this.bin[this.lastID] = o;

    return this.lastID;
};

