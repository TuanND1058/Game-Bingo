const addTicketModal = document.getElementById('addTicketModal')
const editNumberModal = document.getElementById('editNumberModal')
const addTicket = document.getElementById('addTicket')
const nameTicket = document.getElementById('nameTicket')

addTicket.onclick = () => {
  resetTicket()
  addTicketModal.style.display = 'block'
  nameTicket.innerHTML = 'New: ' + getId()
  editTicket.style.display = 'none'
  saveTicket.style.display = ''
  i01.focus()
}
const closeModal = (key) => {
  switch (key) {
    case 'number':
      editNumberModal.style.display = 'none'
      break
    case 'ticket':
      addTicketModal.style.display = 'none'
      alertMsg.innerHTML = ''
      break
  }
}
