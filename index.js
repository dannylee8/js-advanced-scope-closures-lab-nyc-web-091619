// deliverble for produceDrivingRange() - Calculates whether a given trip is within range. For example, produceDrivingRange(10) returns a function that will take two strings as arguments and returns a message stating whether the trip is in range. If foo = produceDrivingRange(10), then foo('12th', '15th') would return "within range by 7" and foo('12th', '30th') would return "8 blocks out of range". We recommend referencing the test/indexTest.js for more details.

// The produceDriverRange creates a function that takes one
// argument of *rangeNum*.  This is the max range the driver
// is able to go.  
// Then, it returns an anonymous function, which takes two
// arguments, *stringNthFirst*, and *stringNthSecond*, which is 
// used thusly:
//      let eightBlockRange = produceDrivingRange(8);
//      eightBlockRange('10th', '20th');
//
//      // => '2 blocks out of range'
// 
// These two arguments are subtracted from one another and
// passed through the Math.abs() to get a positive value,
// which is placed in the *calculatedDistance* variable.
// It is then subtracted from the *rangeNum* variable,
// and stored in the *distanceDifference* variable. If the
// *distanceDifference* value is positive the return value is
// within range so the return value is:
//      // => `within range by ${distanceDifference}`
// If the value is negative then the return value is:
//      // => `${distanceDifference} blocks out of range`

function produceDrivingRange(blockRange) {
    return function (stringNthFirst, stringNthSecond) {
        // // use replace() to strip off the trailing "th"
        // let strToNum1 = stringNthFirst.replace(/\D/g,'');
        // let strToNum2 = stringNthSecond.replace(/\D/g,'');

        let strToNum1 = parseInt(stringNthFirst);
        let strToNum2 = parseInt(stringNthSecond);

        let calculatedDistance = Math.abs(strToNum1 - strToNum2);
        let distanceDifference = blockRange - calculatedDistance;
        
        if (distanceDifference > 0) {
            return `within range by ${Math.abs(distanceDifference)}`;
        } else {
            return `${Math.abs(distanceDifference)} blocks out of range`;
        }
    }
}



// deliverable for produceTipCalculator() - Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.

// return an anonymous function whose "tipPercentage"
// is multiplied by the interior (child) functions
// argument of fareAmount.

function produceTipCalculator(tipPercentage) {
    return function (fareAmount) {
        return fareAmount * tipPercentage;
    }
}

// createDriver is a function that returns a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.

// sets a variable of driverID in the outside
// function that can be accessed by the class
// inside it.  Each time a constructor is 
// instatiated with "name" as an argument, 
// the newly created driver object is assigned
// an id, that is incremented prior to assigning
// it to the key .id' and then assigning 
// the string argument 'name' to the .name key
function createDriver() {
    let driverId = 0
    return class {
      constructor( name ) {
        this.id = ++driverId
        this.name = name
      }
    }
  }