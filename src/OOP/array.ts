class myArray {
  arr: any[]
  constructor(arr: any[]) {
    this.arr = arr
  }
  static displayArray(arr:myArray|any|any[]) {
    console.log(arr)
  }
  push(element: string | number) {
    this.arr[this.arr.length] = element;
    myArray.displayArray(this.arr)
  }
  length() {
    return this.arr.length;
  }
  forEach(callback:(element: any, index?: number) => any) {
    for (let i = 0; i < this.arr.length; i++) {
      callback(this.arr[i])
    }
  }
  map(callback:(element: any, index?: number) => any) {
    let newArray = new myArray([]);
    for (let i = 0; i < this.arr.length; i++) {
      newArray.push(callback(this.arr[i]))
    }
    return newArray
  }
  splice(index:number, times:number){
    for (let i = 0; i < this.arr.length - index; i++) {
      this.arr[index] = this.arr[index+1]
    }
    this.arr[this.arr.length - 1] = ''
  }
  get(index: number) {
    return this.arr[index];
  }
  reverse() {
    let newArray = new myArray([]);
    for (let i = this.arr.length - 1; i >= 0; i--) {
      newArray.push(this.arr[i]);
    }
    return newArray;
  }
}

let array = new myArray([]);
array.push(3)
array.push(5)
array.push(7)
array.forEach((elem:any) => {
  console.log(elem)
})
array = array.map(s => s+9);
// array.splice(1, 1)
console.log(array)
myArray.displayArray(array)
console.log(array.get(1))
console.log(array.reverse())


interface ISong {
  id?: string;
  title: string;
  artist: string;
  duration?: number; // in seconds
  genre?: string;
}

class Song{
  constructor({
    id = '',
    title,
    artist,
    duration = 0,
    genre = 'Unknown'
  }: ISong) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.genre = genre;
  }
  id: string;
  title: string;
  artist: string;   
  duration: number; // in seconds
  genre: string; // optional, default to 'Unknown'
}

class MusicPlaylist {
  private songs: ISong[]
  constructor (songs: ISong[]) {
    this.songs = songs;
    this.resetId()
  }
  addSong(song: Song) {
    this.songs.push(new Song(song));
  }
  removeSong(id: string) {
    this.songs = this.songs.filter(song => song.id !== id);
    this.resetId();
  }
  resetId() {
    this.songs.forEach((song, index) => {
      song.id = `Song-${index + 1}`;
    })
  }
  displayPlaylist() {
    this.songs.forEach(song => {
      console.log(`${song.id}, Title: ${song.title}, Artist: ${song.artist}, Duration: ${song.duration} seconds, Genre: ${song.genre}`);
    });
  }
}

const mySongs = [
  {
    title: 'Song One',
    artist: 'Artist A',
    duration: 240,
    genre: 'Pop'
  },
  {
    title: 'Song Two',
    artist: 'Artist B',
    duration: 180,
    genre: 'Rock'
  }
]

const firstPlaylist = new MusicPlaylist(mySongs);

firstPlaylist.displayPlaylist()