'use strict';

const calculateGregorian = date => {

    // to enter years
    let dateOfHijri = new Date(date)

    //operation
    let dateOfGregorian = (dateOfHijri / (33 / 32)) + 623

    // to get exact figure without decimal
    dateOfGregorian = Math.floor(dateOfGregorian)

    return dateOfGregorian
}

module.exports = calculateGregorian