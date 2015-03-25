function Student ( o ) {

    //this.name    = new Name(o.name.first, o.name.last, o.name.second);
    this.name    = new Name(o.name);
    this.course  = o.course;
    this.address = new Address(o.address.index, o.address.city, o.address.street, o.address.building, o.address.flat, o.address.planet);
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


function Name ( o ) {
    this.first  = o.first;
    this.second = o.second;
    this.last   = o.last;

    this.getFullName = function () {
           return this.last + ' ' + this.first + ' ' + this.second;
        }
}


var storage = [];

var button = document.getElementById('show'),
    list   = document.getElementById('listCont'),
    form   = document.getElementById('form'),
    first  = document.getElementById('firstName'),
    last   = document.getElementById('lastName'),
    second   = document.getElementById('secondName'),
    addrCity   = document.getElementById('addrCity'),
    addrStreet   = document.getElementById('addrStreet'),
    addrBuilding = document.getElementById('addrBuilding'),
    addrFlat     = document.getElementById('addrFlat'),
    course       = document.getElementById('course');

form.addEventListener('submit', function(event){
    event.preventDefault();

    storage.push(new Student({
        name : {
            last   : last.value,
            first  : first.value,
            second : second.value
        },
        course : course.value,
        address : {
            flat     : addrFlat.value,
            street   : addrStreet.value,
            city     : addrCity.value,
            building : addrBuilding.value
        }
    }));



    return false;
});


button.addEventListener('click', function(event){
    list.innerHTML = JSON.stringify(storage, null, 4);
});
