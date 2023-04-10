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

const checkInputNumberTextarea = (e) => {
  e.value = e.value.replace(/[^\d\s]+/g, '')
}

const eventSaveTicket = (e) => {
  if (e.key === 'Enter' || e.key === 'Tab') {
    e.preventDefault()
    saveTicket.onclick()
  }
}

inputNumber.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === 'Tab') {
    e.preventDefault()
    addNumber.onclick()
  }
})

listEditNumber.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === 'Tab') {
    e.preventDefault()
    saveNumber.onclick()
  }
})

i01.addEventListener('keydown', eventSaveTicket)
i02.addEventListener('keydown', eventSaveTicket)
i03.addEventListener('keydown', eventSaveTicket)
i04.addEventListener('keydown', eventSaveTicket)
i05.addEventListener('keydown', eventSaveTicket)
i06.addEventListener('keydown', eventSaveTicket)
i07.addEventListener('keydown', eventSaveTicket)
i08.addEventListener('keydown', eventSaveTicket)
i09.addEventListener('keydown', eventSaveTicket)
i10.addEventListener('keydown', eventSaveTicket)
i11.addEventListener('keydown', eventSaveTicket)
i12.addEventListener('keydown', eventSaveTicket)
i13.addEventListener('keydown', eventSaveTicket)
i14.addEventListener('keydown', eventSaveTicket)
i15.addEventListener('keydown', eventSaveTicket)
i16.addEventListener('keydown', eventSaveTicket)
i17.addEventListener('keydown', eventSaveTicket)
i18.addEventListener('keydown', eventSaveTicket)
i19.addEventListener('keydown', eventSaveTicket)
i20.addEventListener('keydown', eventSaveTicket)
i21.addEventListener('keydown', eventSaveTicket)
i22.addEventListener('keydown', eventSaveTicket)
i23.addEventListener('keydown', eventSaveTicket)
i24.addEventListener('keydown', eventSaveTicket)
i25.addEventListener('keydown', eventSaveTicket)
