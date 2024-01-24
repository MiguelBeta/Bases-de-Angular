
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2005
    }
}

const song = 'New Song';

//Desestructuracion: 
const { song:anotherSong, songDuration:duration, details } = audioPlayer;
const { author } = details; 


console.log('Song: ', anotherSong );
console.log('Duration: ', duration );
console.log('Author: ', author );
// console.log('Author: ', audioPlayer.details.author );







export {};