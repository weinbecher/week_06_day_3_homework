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


Traveller.prototype.getUniqueModesOfTransport = function ()
{
  return this.journeys.forEach(
    (journey) => {
      return this.journeys.indexOf(journey.transport)
    }

  )




};


  // arr.indexOf(searchElement[, fromIndex])



  // function onlyUnique(value, index, self) {
  //     return self.indexOf(value) === index;
  // }

  //
  // function uniqueTransport(value, index, self)
  // { return this.journeys.filter( (journey) => {
  //
  //     const value = journey.transport
  //     const index = journey.transport
  //     const self = this.journeys
  //     return self.indexOf(value) === index;
  //
  //   }
  //
  //   );
  // }
  //
  //
  // // usage example:
  // var a = ['a', 1, 'a', 2, '1'];
  // var unique = a.filter( onlyUnique );







module.exports = Traveller;
