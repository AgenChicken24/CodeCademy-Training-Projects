function getSleepHours(day) {
    switch (day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 6;
            break;
        case 'wednesday':
            return 10;
            break;
        case 'thursday':
            return 12;
            break;
        case 'friday':
            return 4;
            break;
        case 'saturday':
            return 7;
            break;
        case 'sunday':
            return 0;
            break;
        default:
            break;
    }
}

function getActualSleepHours() {
    let hours = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    return hours
}

function getIdealSleepHours(hoursPerNight) {
    let idealHours = hoursPerNight;
    return idealHours * 7;
}

function calculateSleepDebt(howMuchHoursDoYouWantToSleep) {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours(howMuchHoursDoYouWantToSleep)
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed.');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
}

calculateSleepDebt(8)