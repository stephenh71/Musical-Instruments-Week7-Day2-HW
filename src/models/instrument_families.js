const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('Instruments:all-instruments-ready',this.data);
  console.log(this.data);

  PubSub.subscribe('SelectedView:change', (event) => {
  const selectedIndex = event.detail;
    console.dir(`change value : ${event.detail}`);
  this.publishDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishDetail = function (instFamIndex) {
  const selectedInstFam = this.data[instFamIndex];
  PubSub.publish('Instruments:selected-instrument-ready', selectedInstFam);
};


module.exports = InstrumentFamilies;
