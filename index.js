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


function Student ( firstName, lastName, secondName, course ) {

    this.name = {
            first  : firstName,
            second : secondName,
            last   : lastName
        };

    this.course = course;
    
    this.getFullName = function () {
           return this.name.last + ' ' + this.name.first + ' ' + this.name.second;
        }
}

var s2 = new Student( 'Innokentiy', 'Pupkin', 'Leonidovich', 'history' );

//function getFullAddrss ( s ) {
//    return s.address.index + ' ' + s.address.city + ' ' + s.address.street + ' ' + s.address.building + ' ' + s.address.flat;
//}


console.log('------------------------------------');
console.log( s1.getFullName() );
console.log( s2.getFullName() );

//var s = {
//        name : {
//                first  : 'Vasiliy',
//                second : 'Leonidovich',
//                last   : 'Pupkin'
//            },
//        address : {
//            index : '70429',
//            city  : 'Minsk',
//            street : 'Lukashenko',
//            building : '21',
//            flat : '334'
//        },
//        course : 'history',
//
//        getFullName : function () {
//           return s.name.last + ' ' + s.name.first + ' ' + s.name.second;
//        }
//    };


var a = new Address('70429', 'Minsk', 'Lukashenko', '21', '334');

function Address (index, city, street, building, flat) {
}


//a = {
//    index    : '70429',
//    city     : 'Minsk',
//    street   : 'Lukashenko',
//    building : '21',
//    flat     : '334'
//};

