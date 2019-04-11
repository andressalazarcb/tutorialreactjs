var setCars = Array.from({length: 1}, () => Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36));
var setMotorcycles = Array.from({length: 1}, () => Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36));

var happyParkingHomePage = require('./test/happyparkingHomePage');

describe('Get in cars', function() {

	using(setCars, function (data) {
		it('Get in car '+ data +' to parking lot', function() {
			var uniqueId = 'w'+data;
			happyParkingHomePage.goToPage();
			happyParkingHomePage.addPlate(uniqueId);
			happyParkingHomePage.selectVehicleTypeCarro();
			happyParkingHomePage.selectActionGetIn();
			happyParkingHomePage.buttonSubmit();
			expect(happyParkingHomePage.getNotificationMessage()).toEqual('GetIn : Carro : '+uniqueId);
		});
	});


});

describe('Get in motorcycle', function() {

	using(setMotorcycles, function (data) {
		it('Get in motorcycle '+ data +' to parking lot', function() {
			var uniqueId = data;
			happyParkingHomePage.goToPage();
			happyParkingHomePage.addPlate(uniqueId);
			happyParkingHomePage.selectVehicleTypeMoto();
			happyParkingHomePage.selectActionGetIn();
			happyParkingHomePage.buttonSubmit();
			expect(happyParkingHomePage.getNotificationMessage()).toEqual('GetIn : Moto : '+uniqueId);
		});
	});



});


function using (values, func) {
    values.forEach(function(value) {
        if (!(value instanceof Array)) {
            value = [value];
        }

        func.apply(this, value);
    });
};
