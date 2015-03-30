function Storage () {
    this.bin    = {};
    this.lastID = 0;
};



Storage.prototype.update = function ( id, o ) {
    this.bin[id] = o;
    return  this.bin[id];
};


Storage.prototype.remove = function ( id ) {
     delete this.bin[id];
};


Storage.prototype.get = function ( id ) {
    
    return this.bin[id];
};


Storage.prototype.put = function ( o ) {

    this.lastID++;
    this.bin[this.lastID] = o;

    return this.lastID;
};

