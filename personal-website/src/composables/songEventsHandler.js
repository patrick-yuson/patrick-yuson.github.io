import { ref } from 'vue'
import songData from '../assets/songData.json'
const data = JSON.parse(JSON.stringify(songData))
const songs = ref(data.songs)

const currentSong = ref(songs.value[0])

export const useSongEventsHandler = () => {
  const setCurrentSong = (song) => {
    currentSong.value = currentSong.value.id === song.id ? currentSong.value : song
  }
  return { currentSong, setCurrentSong, songs }
}
