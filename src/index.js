module.exports = function toReadable(number) {
    const teens = Math.floor(number / 10);
    const units = number % 10;
    const hundreds = Math.floor(number / 100);

    if (number === 0) {
        return "zero";
    }
    if (number < 10) {
        return ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][number - 1];
    }
    if (number < 20) {
        return ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"][units];
    }
    if (number === 20) {
        return "twenty";
    }
    if (number === 30) {
        return "thirty";
    }
    if (number === 40) {
        return "forty";
    }
    if (number === 50) {
        return "fifty";
    }
    if (number === 60) {
        return "sixty";
    }
    if (number === 70) {
        return "seventy";
    }
    if (number === 80) {
        return "eighty";
    }
    if (number === 90) {
        return "ninety";
    }
    if (number < 100) {
        return `${toReadable(teens * 10)} ${toReadable(units)}`;
    }
    if (number % 100 === 0) {
        return `${toReadable(hundreds)} hundred`
    }
    if (number < 1000) {
        return `${toReadable(hundreds)} hundred ${toReadable(number % 100)}`;
    }
}
