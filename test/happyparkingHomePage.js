

var parking_plateInput = $('#parking_plate');
var parking_vehicleTypeSelect = $('#parking_vehicleType');
var parking_actionSelect = $('#parking_action');
var parking_actionSelectOptionGetIn = $('#parking_action > option:nth-child(1)');
var parking_submitButton = $('#parking_submit');
var notification_message = $('.notification-message');

module.exports = {
  addPlate: function (plate) {
    parking_plateInput.sendKeys(plate);
  },

  selectVehicleTypeCarro: function () {
    parking_vehicleTypeSelect.sendKeys('Carro');
  },

  selectVehicleTypeMoto: function () {
    parking_vehicleTypeSelect.sendKeys('Moto');
  },

  selectActionGetIn: function () {
    parking_actionSelect.click();
    browser.sleep(1000);
    parking_actionSelectOptionGetIn.click();
  },

  buttonSubmit: function () {
    parking_submitButton.click();
    browser.sleep(3000);
  },

  getNotificationMessage: function () {
    return notification_message.getText();
  },

  goToPage: function(){
    browser.get('/');
  }
};
