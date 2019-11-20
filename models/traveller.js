const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(
    (journey)=>{
      return journey.startLocation
    }
  )
};


Traveller.prototype.getJourneyEndLocations = function() {
  return this.journeys.map(
    (journey)=>{
      return journey.endLocation
    }
  )
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(
     (journey) => {
       return journey.transport === transport;
    }
  )
};


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(
    (journey) => {
      return journey.distance >= 1000 ;
    }
  )
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce(
    (totalDistance, journey) => {
      return totalDistance + journey.distance
    },0
  );

};

//
// Traveller.prototype.getUniqueModesOfTransport = function () {
//
//    let newArray = new Set(this.journeys.map(
//     (journey) => {
//       return journey.transport
//     }
//   ))
//   return newArray;
// };

Traveller.prototype.getTransports = function() {
  return this.journeys.map(
    (journey)=>{
      return journey.transport
    }
  )
};


Traveller.prototype.getUniqueModesOfTransport = function ()
{
  transports = this.getTransports()
  return transports.filter(
    (transport) => {
      return transports.indexOf(transport)
    }
  )

};

//
// [
// -   'train',
//   'aeroplane',
//   'car',
//   'ferry'
// ]
//     + expected - actual
//
//      [
//     +  "train"
//        "aeroplane"
//        "car"
//        "ferry"
//      ]
//
//
//
//






module.exports = Traveller;
