function createStudent ( firstName, lastName, secondName, course ) {

    var o = {};

    o.name = {
            first  : firstName,
            second : secondName,
            last   : lastName
        };

    o.course = course;
    
    o.getFullName = function () {
           return o.name.last + ' ' + o.name.first + ' ' + o.name.second;
        }

    return o;
}


var s1 = createStudent( 'Vasiliy', 'Pupkin', 'Leonidovich', 'history' );

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

function Student ( firstName, lastName, secondName, course, index, city, street, building, flat, planet ) {

    this.name    = new Name(firstName, lastName, secondName);
    this.course  = course;
    this.address = new Address(index, city, street, building, flat, planet);
}

function Address (index, city, street, building, flat, planet) {
    this.index    = index;
    this.city     = city;
    this.street   = street;
    this.building = building;
    this.flat     = flat;

    if ( planet ) this.planet = planet;
}

Address.prototype.planet = 'Earth';
Address.prototype.getFullAddrss = function () {
    return this.planet + ' ' + this.index + ' ' + this.city + ' ' + this.street + ' ' + this.building + ' ' + this.flat;
}


function Name ( firstName, lastName, secondName ) {
    this.first  = firstName;
    this.second = secondName;
    this.last   = lastName;

    this.getFullName = function () {
           return this.last + ' ' + this.first + ' ' + this.second;
        }
}

var s2 = new Student( 'Innokentiy2', 'Pupkin', 'Leonidovich', 'history', '72013', 'Minsk', 'Lukashenko', 24, 37, 'Mars' );
var s3 = new Student( 'Innokentiy3', 'Pupkin', 'Leonidovich', 'history', '72013', 'Minsk', 'Lukashenko', 24, 37 );
var s4 = new Student( 'Innokentiy4', 'Pupkin', 'Leonidovich', 'history', '72013', 'Minsk', 'Lukashenko', 24, 37 );

var a3 = new Address('72013', 'Minsk', 'Lukashenko', 24, 37);

for ( var i in a3 ) {
    if ( a3.hasOwnProperty(i) ) {
        console.log( i, a3[i] );
    } else {
        console.log( 'PROTOTYPE: ', i, a3[i] );
    }
}


//console.log('------------------------------------');
//console.log( s2.name.getFullName() );

