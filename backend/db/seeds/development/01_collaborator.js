
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('collaborator').del()
    .then(function () {
      // Inserts seed entries
      return knex('collaborator').insert([
        {name: 'Edgar', lastname: 'Sosa', country: 'MX', city: 'Mexicali', joinedDate: '2018-08-14', deliveryManager: 'IB', email: 'esosa@weknowinc.com', status: 'working', exitDate: ''},
        {name: 'Humberto', lastname: 'Luna', country: 'MX', city: 'Oaxaca', joinedDate: '2018-07-09', deliveryManager: 'MV', email: 'hluna@weknowinc.com', status: 'working', exitDate: ''},
        {name: 'Mauricio', lastname: 'Hernandez', country: 'CR', city: 'Heredia', joinedDate: '2014-09-07', deliveryManager: 'IB', email: 'mhernandez@weknowinc.com', status: 'working', exitDate: ''},
      ]);
    });
};
