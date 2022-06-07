const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Elkabro',
            lastName: 'Zoro',
            age: 12
        },
        {
            firstName: 'Shimi',
            lastName: 'Dici',
            age: 13
        },
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Pedro',
            teamPoints: 72,
            opponentPoints: 16
        },
        {
            opponent: 'Sahiri',
            teamPoints: 12,
            opponentPoints: 50
        },
    ],
    get games() {
        return this._games;
    },
    get players() {
        return this._players;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName,
            lastName,
            age
        };
        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent,
            teamPoints,
            opponentPoints
        };
        this.games.push(game);
    }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('Titans', 100, 98);
team.addGame('Josa', 51, 3);
team.addGame('Lasi', 23, 61);
console.log(team.games);