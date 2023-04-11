const addTicketModal = document.getElementById('addTicketModal')
const editNumberModal = document.getElementById('editNumberModal')
const addTicket = document.getElementById('addTicket')
const nameTicket = document.getElementById('nameTicket')

addTicket.onclick = () => {
  resetTicket()
  addTicketModal.style.display = 'block'
  nameTicket.innerHTML = 'New: ' + getId()
  saveTicket.style.display = ''
  i01.focus()
}
const closeModal = () => {
  alertMsg.innerHTML = ''
  editNumberModal.style.display = 'none'
  addTicketModal.style.display = 'none'
}
