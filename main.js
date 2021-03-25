class Media {
  constructor(title){
    this._title = title;
    this.isCheckedOut = false;
    this._ratings = [];
  }
get title() {
  return this._title;
}
get isCheckedOut() {
  return this._isCheckedOut;
}
get ratings() {
  return this._ratings;
}
set isCheckedOut(value) {
  return this._isCheckedOut = value;
}
toggleCheckOutStatus(){
  this._isCheckedOut = !this._isCheckedOut;
}
getAverageRating() {
  let ratingsSum = 
  this.ratings.reduce((accumulator, rating) => 
  accumulator + rating);
  return ratingsSum / this.ratings.length;
}
addRating(value) {
  this.ratings.push(value);
}
}
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
    this.isCheckedOut = false;
  }
get author(){
  return this._author;
}
get pages(){
  return this._pages;
}
}
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

console.log(historyOfEverything)

historyOfEverything.toggleCheckOutStatus()

console.log(historyOfEverything)

console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116)
console.log(speed)
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut)

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

console.log(speed.getAverageRating())
