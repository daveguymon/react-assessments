import axios from 'axios';

export function getTasks() {
  console.log("Promise working")
  return axios.get('https://practiceapi.devmountain.com/api/tasks/')
}

export function updateTask(updatedTitle, id) {
  console.log("UpdateTitle :", updatedTitle, "ID :", id)

  console.log('update service working')
  return axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`, {title: updatedTitle})

}
