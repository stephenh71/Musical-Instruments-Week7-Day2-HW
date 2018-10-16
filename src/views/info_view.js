const PubSub = require('../helpers/pub_sub.js');

const InfoView = function(container){
  this.container = container;
};

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:selected-instrument-ready', (event) => {
    const instFam = event.detail;
    this.render(instFam);
  });
};

  InfoView.prototype.render = function (instFam) {
  const infoTitle = document.createElement('h2');
  this.container.innerHTML = '';
  infoTitle.textContent = `${instFam.name}`;
  this.container.appendChild(infoTitle);

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${instFam.description
  }`;
  this.container.appendChild(infoParagraph);

  const infoHeading = document.createElement('h3');
  infoHeading.textContent = "Instruments include:";
  this.container.appendChild(infoHeading);

  const instruments = instFam.instruments
  for(let instrument of instruments){
  const infoList = document.createElement('li');
  infoList.textContent = `${instrument}`;
  this.container.appendChild(infoList);
  };

};

module.exports = InfoView;
