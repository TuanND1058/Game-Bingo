const alertMsg = document.getElementById('alert')

const showAlert = (type, message) => {
  alertMsg.innerHTML = `<span class="${type}">${message}</span>`
}
