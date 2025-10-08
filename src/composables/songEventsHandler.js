import { ref } from 'vue'
import songData from '../assets/songData.json'
const data = JSON.parse(JSON.stringify(songData))
const songs = ref(data.songs)

// Needs to be updated whenever new song is added
const experiences = ref(songs.value.slice(0, 4))
const leadership = ref(songs.value.slice(4))

const currentSong = ref(songs.value[0])

export const useSongEventsHandler = () => {
  const setCurrentSong = (song) => {
    currentSong.value = currentSong.value.id === song.id ? currentSong.value : song
  }
  return { currentSong, setCurrentSong, experiences, leadership }
}
