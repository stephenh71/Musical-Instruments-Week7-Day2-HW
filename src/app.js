const InstrumentData = require('./data/instrument_data.js')
const InstrumentFamilies = require ('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InfoView = require('./views/info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const selectElement = document.querySelector('select#instrument-families');

const instrumentDropdown = new SelectView(selectElement);
instrumentDropdown.bindEvents();

const infoDiv = document.querySelector('div#instrument-info')

const InfoDisplay = new InfoView(infoDiv);
InfoDisplay.bindEvents();

const instrumentFamiliesData = new InstrumentFamilies(InstrumentData);
instrumentFamiliesData.bindEvents();
});
