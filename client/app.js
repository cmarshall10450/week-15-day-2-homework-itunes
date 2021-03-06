const MapWrapper = require('./MapWrapper');
const Modal = require('./Modal');
let countryMap;

const app = function() {
  console.log('App started');
  initialize(48.21, 16.37);
  const modal = new Modal({
    title: "Where on Earth?",
    body: "The ultimate Country and Capital's game!",
    buttons: {
      action: {
        label: "Start Game",
        fn: function(){
          modal.hide();
        }
      }
    }
  });
  modal.show();
};

const initialize = function(lat, lng) {
  let center = { lat, lng };
  let mapDiv = document.getElementById('map');
  countryMap = new MapWrapper(mapDiv, center, 5);
};




document.addEventListener('DOMContentLoaded', app);
