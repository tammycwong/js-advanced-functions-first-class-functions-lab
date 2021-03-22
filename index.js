// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
function returnFirstTwoDrivers() {
    const firstTwo = drivers.slice(0,2);
    return firstTwo;
}
function returnLastTwoDrivers() {
    const lastTwo = drivers.slice(-2);
    return lastTwo;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier) {
    return function(fare) {
        return fareMultiplier * fare;
    };
};

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, returnTwoDrivers) {
    return returnTwoDrivers(drivers);
}