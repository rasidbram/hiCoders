'use strict';

const calcHijri = date => {

    // to enter years
    let dateOfGregorian = new Date(date)

    //operation
    let dateOfHijri = (dateOfGregorian - 622) / (32 / 33)

    // to get exact figure without decimal
    dateOfHijri = Math.floor(dateOfHijri)

    return dateOfHijri;
}

module.exports = calcHijri