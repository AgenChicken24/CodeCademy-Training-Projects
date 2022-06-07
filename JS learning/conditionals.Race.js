let raceNumber = Math.floor(Math.random() * 1000);
var early = false;
var runerAge = 21;
if (early && runerAge > 18) {
    raceNumber += 1000
}

if (early && runerAge > 18) {
    console.log(`You will race at 9:30 am and your place is ${raceNumber}`);
} else if (runerAge > 18 && !early) {
    console.log(`You will race at 11:00 am and your place is ${raceNumber}`);
} else if (runerAge < 18) {
    console.log(`You will race at 12:30 am and your place is ${raceNumber}`);
} else if (runerAge === 18) {
    console.log('You need to see the registration desk');
}