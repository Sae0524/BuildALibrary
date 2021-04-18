//parent class
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckeout = false;
    this._rathing = [];
  }
  get title() {
    return this._title;
  }
  get isCheckeout() {
    return this._isCheckeout;
  }
  get ratings() {
    return this._rathing;
  }
  set isCheckeout(value) {
    this._isCheckeout = value;
  }
  toggleCheckOutStatus() {
    this._isCheckeout = !this._isCheckeout;
  }
  getAverageRating() {
    let ratingSum = this._ratings.reduce((crurrentSum,rating)=> crurrentSum + rating);
    return ratingSum/this._rathing.length;
  }
  addRating(inputValue) {
    if(inputValue => 1 && inputValue <= 5){
      this._rathing.push(inputValue);
    } else {
      alert("Please insert a number between 1 to 5");
    }
    
  }
}

class Book extends Media {
  constructor(author,title,pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author
  }
  get pages() {
    return this._pages
  }
}

class Movie extends Media {
  constructor(director,title,runtime){
    super(title);
    this._director = director;
    this._runtime = runtime;
  }
  get director() {
    return this._director;
  }
  get runtime() {
    return this._runtime;
  }
}

class CD extends Media {
  constructor(title,artist,songs) {
    super(title);
    this._artist = artist;
    this._songs = [songs];
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}


const historyOfEveryhing = Book('Bill Bryson','A short Histoy of Nearly Everything', 544);
historyOfEveryhing.toggleCheckOutStatus();
console.log(historyOfEveryhing.isCheckeout);
historyOfEveryhing.addRating(4);
historyOfEveryhing.addRating(5);
historyOfEveryhing.addRating(5);
console.log(historyOfEveryhing.getAverageRating());

console.log(historyOfEveryhing);

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckeout);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

console.log(speed);

//////

//Add more properties to each class (movieCast, songTitles, etc.)