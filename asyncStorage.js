function asyncStorage () {
    this.bin    = {};
    this.lastID = 0;
};



asyncStorage.prototype.update = function ( id, o, callback ) {
    this.bin[id] = o;
    callback( null, this.bin[id] );
};


asyncStorage.prototype.remove = function ( id ) {
     delete this.bin[id];
};


asyncStorage.prototype.get = function ( id, callback ) {
    
    callback( null, this.bin[id]);
};


asyncStorage.prototype.put = function ( o, callback ) {

    this.lastID++;
    this.bin[this.lastID] = o;

    callback( null, this.lastID );
};


/* EXAMPLE:

var st = new asyncStorage();

var id = st.put('HELLO');

st.get(id, function(error, data){

    if ( error ) console.log('ERROR: ' + error);
    else  console.log('DATA: ' + data);
});

*/
