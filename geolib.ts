import geolib from 'geolib';

var points = [
      {
        name: 'nome do local 1',
        end: 'endereco do local 1',
        latitude: -22.7325299,
        longitude: -47.3018348
      },
      {
        name: 'nome do local 2',
        end: 'endereco do local 2',
        latitude: -22.731812, 
        longitude: -47.3081437
      },
      {
        name: 'nome do local 3',
        end: 'endereco do local 3',
        latitude: -22.7292221, 
        longitude: -47.3125341
      }
    ];
    var distances = geolib.orderByDistance({latitude: -22.7371116, longitude: -47.314994}, points);
    
    /*var distances = geolib.orderByDistance({latitude: -22.7371116, longitude: -47.314994}, {
        a: {latitude: -22.7325299, longitude: -47.3018348},
        b: {latitude: -22.731812, longitude: -47.3081437},
        c: {latitude: -22.7292221, longitude: -47.3125341}
    });*/

    for (var key in distances) {
      let d = distances[key]['distance'];
      d = geolib.convertUnit('km', d, 2);
      distances[key]['km'] = d; 
    } 
    console.log(distances);
