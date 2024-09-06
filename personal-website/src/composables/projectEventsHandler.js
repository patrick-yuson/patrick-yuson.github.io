import { ref } from 'vue'
const currentProject = ref(null)

export const useProjectEventsHandler = () => {
  const setCurrentProject = (proj) => {
    if (currentProject.value) {
      currentProject.value = currentProject.value.id === proj.id ? currentProject.value.id : proj.id
    } else {
      currentProject.value = proj.id
    }
    console.log(currentProject.value)
  }
  return { currentProject, setCurrentProject }
}
