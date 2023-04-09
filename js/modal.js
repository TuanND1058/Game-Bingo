const addTicketModal = document.getElementById('addTicketModal')
const editNumberModal = document.getElementById('editNumberModal')
const addTicket = document.getElementById('addTicket')
const nameTicket = document.getElementById('nameTicket')

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
      editNumberModal.style.display = 'none'
      break
    case 'ticket':
      addTicketModal.style.display = 'none'
      break
  }
}
