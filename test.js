describe('app login flow', function() {

    var loginUrl, homeUrl, name;

    it('Get in car to parking lot', function() {
	browser.get('/');
	var uniqueId = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
        $('#parking_plate').sendKeys(uniqueId);
	$('#parking_vehicleType').sendKeys('Carro');	
	$('#parking_action').click();
	browser.sleep(1000);
	$('#parking_action > option:nth-child(1)').click();
	$('#parking_submit').click();
	browser.sleep(3000);
	expect($('.notification-message').getText()).toEqual('GetIn : Carro : '+uniqueId);

    });

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

    it('Get in motorcycle high cylinder to parking lot', function() {
	browser.get('/');
	var uniqueId = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
        $('#parking_plate').sendKeys(uniqueId);
	$('#parking_vehicleType').sendKeys('Moto');
	$('#parking_cc').sendKeys('700');
	$('#parking_action').click();
	browser.sleep(1000);
	$('#parking_action > option:nth-child(1)').click();
	$('#parking_submit').click();
	browser.sleep(3000);
	expect($('.notification-message').getText()).toEqual('GetIn : Moto : '+uniqueId);

    });

    
});
