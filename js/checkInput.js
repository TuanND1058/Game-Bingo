const checkInputNumber = (e) => {
  e.value = e.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
  if (e.value.length > 2) {
    e.value = e.value.slice(-2)
  }
  if (e.value.length > 1) {
    e.value = e.value * 1
  }
  if (e.value == 0) {
    e.value = ''
  }
}

const eventSaveTicket = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    saveTicket.onclick()
  }
}

inputNumber.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    addNumber.onclick()
  }
})

listEditNumber.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    saveNumber.onclick()
  }
})

i01.addEventListener('keypress', eventSaveTicket)
i02.addEventListener('keypress', eventSaveTicket)
i03.addEventListener('keypress', eventSaveTicket)
i04.addEventListener('keypress', eventSaveTicket)
i05.addEventListener('keypress', eventSaveTicket)
i06.addEventListener('keypress', eventSaveTicket)
i07.addEventListener('keypress', eventSaveTicket)
i08.addEventListener('keypress', eventSaveTicket)
i09.addEventListener('keypress', eventSaveTicket)
i10.addEventListener('keypress', eventSaveTicket)
i11.addEventListener('keypress', eventSaveTicket)
i12.addEventListener('keypress', eventSaveTicket)
i13.addEventListener('keypress', eventSaveTicket)
i14.addEventListener('keypress', eventSaveTicket)
i15.addEventListener('keypress', eventSaveTicket)
i16.addEventListener('keypress', eventSaveTicket)
i17.addEventListener('keypress', eventSaveTicket)
i18.addEventListener('keypress', eventSaveTicket)
i19.addEventListener('keypress', eventSaveTicket)
i20.addEventListener('keypress', eventSaveTicket)
i21.addEventListener('keypress', eventSaveTicket)
i22.addEventListener('keypress', eventSaveTicket)
i23.addEventListener('keypress', eventSaveTicket)
i24.addEventListener('keypress', eventSaveTicket)
i25.addEventListener('keypress', eventSaveTicket)
