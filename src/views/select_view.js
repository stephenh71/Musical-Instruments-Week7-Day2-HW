const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:all-instruments-ready', (event) => {
    const allInstruments = event.detail;

    this.populate(allInstruments);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectedView:change', selectedIndex);
    console.dir(`selected view change published : ${event.target.value}`);
  });
};

SelectView.prototype.populate = function (instrumentsData){
  instrumentsData.forEach((instfam, index) => {
    const option = document.createElement('option');
    option.textContent = instfam.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
