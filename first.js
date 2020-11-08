var then = new Date(2020, 11, 08), // month is zero based
    now  = new Date;               // no arguments -> current date

// 24 hours, 60 minutes, 60 seconds, 1000 milliseconds
Math.round((now - then) / (1000 * 60 * 60 * 24)); // round the amount of days
// result: 712

print now