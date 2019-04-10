var setCars = Array.from({length: 21}, () => Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36));
var setMotorcycles = Array.from({length: 21}, () => Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36));

describe('Get in cars', function() {

	using(setCars, function (data) {
		it('Get in car to parking lot', function() {
			browser.get('/');
			var uniqueId = data;
			$('#parking_plate').sendKeys(uniqueId);
			$('#parking_vehicleType').sendKeys('Carro');	
			$('#parking_action').click();
			browser.sleep(1000);
			$('#parking_action > option:nth-child(1)').click();
			$('#parking_submit').click();
			browser.sleep(3000);
			expect($('.notification-message').getText()).toEqual('GetIn : Carro : '+uniqueId);
		});
	});
	
	
});

describe('Get in motorcycle', function() {

	using(setMotorcycles, function (data) {
		it('Get in motorcycle to parking lot', function() {
			browser.get('/');
			var uniqueId = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
			$('#parking_plate').sendKeys(uniqueId);
			$('#parking_vehicleType').sendKeys('Moto');	
			$('#parking_action').click();
			browser.sleep(1000);
			$('#parking_action > option:nth-child(1)').click();
			$('#parking_submit').click();
			browser.sleep(3000);
			expect($('.notification-message').getText()).toEqual('GetIn : Moto : '+uniqueId);
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