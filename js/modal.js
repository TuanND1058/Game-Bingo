const addTicketModal = document.getElementById('addTicketModal')
const addNumberModal = document.getElementById('addNumberModal')
const addTicket = document.getElementById('addTicket')
const nameTicket = document.getElementById('nameTicket')
const showAlert = document.getElementById('alert')

addTicket.onclick = () => {
  addTicketModal.style.display = 'block'
  nameTicket.innerHTML = 'New: ' + (arrayTicket.length + 1)
  editTicket.style.display = 'none'
  saveTicket.style.display = ''
  i01.focus()
}
const closeModal = (key) => {
  switch (key) {
    case 'number':
      addNumberModal.style.display = 'none'
      break
    case 'ticket':
      addTicketModal.style.display = 'none'
      break
  }
}
