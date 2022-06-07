const reducer = (value, currentValue) => value + currentValue;

class Media {
    constructor(title, isCheckedOut, ratings) {
        this._title = title;
        this._ratings = ratings;
        this._isCheckedOut = isCheckedOut;
    }
    get title() {
        return this._title;
    }
    get ratings() {
        return this._ratings;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    set isCheckedOut(newElem) {
        this._isCheckedOut = newElem;
    }
    getAverageRating() {
        // let rating
        // for (const i = 0; i < this._ratings.length; i++) {
        //     rating += this._ratings[i]
        // }
        // return rating / this._ratings.length
        let sum = this._ratings.reduce(reducer)
        return sum / this._ratings.length
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(rating) {
        if (rating < 1 || rating > 5 ) {
            console.log('The accepted range for rating is between 1 and 5 please rate again')
            return
        }
        this._ratings.push(rating);
    }
}

class Book extends Media {
    constructor(author, title, pages, isCheckedOut = false, ratings = []) {
        super(title, isCheckedOut, ratings)
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime,  isCheckedOut = false, ratings = []) {
        super(title, isCheckedOut, ratings)
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(artist, title,  isCheckedOut = false, ratings = [], songs = []) {
        super(title, isCheckedOut, ratings)
        this._artist = artist;
        this._songs = songs;
    }
    get songs() {
        return this._songs;
    }
    shuffle() {
        this._songs.sort(() => {
            return 0.5 - Math.random()
        });
    }
}

class Catalog extends Media {
    constructor(title,  isCheckedOut = false, ratings = []) {
        super(title, isCheckedOut, ratings)
    }
}

const historyOfEverything = new Book(author = 'Bill Bryson', title = 'A Short History of Nearly Everything', pages = 544)
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())

const speed = new Movie(director = 'Jan de Bont', title = 'Speed', runTime = 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut);
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())

