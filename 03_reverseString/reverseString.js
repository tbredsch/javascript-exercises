const reverseString = function(forString) {
    let revString = "";

    for (let i = -1; i >= -forString.length; i--) {
        
        revString += forString.at(i);
    }
return revString;
};

// Do not edit below this line
module.exports = reverseString;
