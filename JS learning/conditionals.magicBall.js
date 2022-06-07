var userName = 'Pussy';
if (userName) {
    console.log(`Hello, ${userName}!`)
} else {
    console.log('Hello!')
}
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
var userQuestion = 'Will I become a werewolf tonight?'
console.log(`The user asked: ${userQuestion}`);
var randomNumber = Math.floor(Math.random() * 8)
var eightBall = '';
switch (randomNumber) {
    case 0:
        eightBall = 'You have no luck bitch';
        break;
    case 1:
        eightBall = 'It is certain';
        break;
    case 2:
        eightBall = 'It is decidedly so';
        break;
    case 3:
        eightBall = 'Reply hazy try again';
        break;
    case 4:
        eightBall = 'Cannot predict now';
        break;
    case 5:
        eightBall = 'Do not count on it';
        break
    case 6:
        eightBall = 'My sources say no';
        break;
    case 7:
        eightBall = 'Outlook not so good';
        break;
    case 8:
        eightBall = 'Signs point to yes';
    default:
        console.log('Na maikati')
        break;
}
console.log(eightBall)