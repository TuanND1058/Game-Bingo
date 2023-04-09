const cards = document.getElementById('cards')
const editTicket = document.getElementById('editTicket')
const saveTicket = document.getElementById('saveTicket')
const idEdit = document.getElementById('idEdit')

if (localStorage.getItem('array_ticket') == null) {
  localStorage.setItem('array_ticket', JSON.stringify([]))
}

let arrayTicket = JSON.parse(localStorage.getItem('array_ticket'))

const i01 = document.getElementById('i01')
const i02 = document.getElementById('i02')
const i03 = document.getElementById('i03')
const i04 = document.getElementById('i04')
const i05 = document.getElementById('i05')
const i06 = document.getElementById('i06')
const i07 = document.getElementById('i07')
const i08 = document.getElementById('i08')
const i09 = document.getElementById('i09')
const i10 = document.getElementById('i10')
const i11 = document.getElementById('i11')
const i12 = document.getElementById('i12')
const i13 = document.getElementById('i13')
const i14 = document.getElementById('i14')
const i15 = document.getElementById('i15')
const i16 = document.getElementById('i16')
const i17 = document.getElementById('i17')
const i18 = document.getElementById('i18')
const i19 = document.getElementById('i19')
const i20 = document.getElementById('i20')
const i21 = document.getElementById('i21')
const i22 = document.getElementById('i22')
const i23 = document.getElementById('i23')
const i24 = document.getElementById('i24')
const i25 = document.getElementById('i25')

const addTicketFn = (id) => {
  if (!i01.value != '' || isNaN(i01.value)) {
    i01.value = ''
    i01.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i02.value != '' || isNaN(i02.value)) {
    i02.value = ''
    i02.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i03.value != '' || isNaN(i03.value)) {
    i03.value = ''
    i03.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i04.value != '' || isNaN(i04.value)) {
    i04.value = ''
    i04.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i05.value != '' || isNaN(i05.value)) {
    i05.value = ''
    i05.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i06.value != '' || isNaN(i06.value)) {
    i06.value = ''
    i06.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i07.value != '' || isNaN(i07.value)) {
    i07.value = ''
    i07.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i08.value != '' || isNaN(i08.value)) {
    i08.value = ''
    i08.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i09.value != '' || isNaN(i09.value)) {
    i09.value = ''
    i09.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i10.value != '' || isNaN(i10.value)) {
    i10.value = ''
    i10.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i11.value != '' || isNaN(i11.value)) {
    i11.value = ''
    i11.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i12.value != '' || isNaN(i12.value)) {
    i12.value = ''
    i12.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i13.value != '' || isNaN(i13.value)) {
    i13.value = ''
    i13.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i14.value != '' || isNaN(i14.value)) {
    i14.value = ''
    i14.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i15.value != '' || isNaN(i15.value)) {
    i15.value = ''
    i15.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i16.value != '' || isNaN(i16.value)) {
    i16.value = ''
    i16.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i17.value != '' || isNaN(i17.value)) {
    i17.value = ''
    i17.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i18.value != '' || isNaN(i18.value)) {
    i18.value = ''
    i18.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i19.value != '' || isNaN(i19.value)) {
    i19.value = ''
    i19.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i20.value != '' || isNaN(i20.value)) {
    i20.value = ''
    i20.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i21.value != '' || isNaN(i21.value)) {
    i21.value = ''
    i21.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i22.value != '' || isNaN(i22.value)) {
    i22.value = ''
    i22.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i23.value != '' || isNaN(i23.value)) {
    i23.value = ''
    i23.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i24.value != '' || isNaN(i24.value)) {
    i24.value = ''
    i24.focus()
    showAlert('danger', 'Input data number')
    return
  }
  if (!i25.value != '' || isNaN(i25.value)) {
    i25.value = ''
    i25.focus()
    showAlert('danger', 'Input data number')
    return
  }

  let arr = [
    { class: '', value: i01.value },
    { class: '', value: i02.value },
    { class: '', value: i03.value },
    { class: '', value: i04.value },
    { class: '', value: i05.value },
    { class: '', value: i06.value },
    { class: '', value: i07.value },
    { class: '', value: i08.value },
    { class: '', value: i09.value },
    { class: '', value: i10.value },
    { class: '', value: i11.value },
    { class: '', value: i12.value },
    { class: '', value: i13.value },
    { class: '', value: i14.value },
    { class: '', value: i15.value },
    { class: '', value: i16.value },
    { class: '', value: i17.value },
    { class: '', value: i18.value },
    { class: '', value: i19.value },
    { class: '', value: i20.value },
    { class: '', value: i21.value },
    { class: '', value: i22.value },
    { class: '', value: i23.value },
    { class: '', value: i24.value },
    { class: '', value: i25.value },
  ]

  if (!isNaN(id)) {
    const arrNew = arrayTicket.filter((e) => {
      if (e.id == id) {
        e.arr = arr
      }
      return true
    })
    arrayTicket = [...arrNew]
  } else {
    arrayTicket.push({
      id: arrayTicket.length + 1,
      arr: arr,
      order: 0,
    })
  }
  localStorage.setItem('array_ticket', JSON.stringify(arrayTicket))

  i01.value = ''
  i02.value = ''
  i03.value = ''
  i04.value = ''
  i05.value = ''
  i06.value = ''
  i07.value = ''
  i08.value = ''
  i09.value = ''
  i10.value = ''
  i11.value = ''
  i12.value = ''
  i13.value = ''
  i14.value = ''
  i15.value = ''
  i16.value = ''
  i17.value = ''
  i18.value = ''
  i19.value = ''
  i20.value = ''
  i21.value = ''
  i22.value = ''
  i23.value = ''
  i24.value = ''
  i25.value = ''

  showAlert('success', 'Add done and continue')
  i01.focus()
  idEdit.value = ''
  nameTicket.innerHTML = 'New: ' + (arrayTicket.length + 1)

  orderTicket()
}

const editSaveTicketFn = () => {
  addTicketFn(idEdit.value)
  addTicketModal.style.display = 'none'
}

saveTicket.onclick = addTicketFn

editTicket.onclick = editSaveTicketFn

const editTicketFn = (id) => {
  addTicketModal.style.display = 'block'
  saveTicket.style.display = 'none'
  editTicket.style.display = ''
  nameTicket.innerHTML = 'Edit: ' + id

  idEdit.value = id

  const found = arrayTicket.find((e) => {
    return e.id == id
  })

  i01.value = found.arr[0].value
  i02.value = found.arr[1].value
  i03.value = found.arr[2].value
  i04.value = found.arr[3].value
  i05.value = found.arr[4].value
  i06.value = found.arr[5].value
  i07.value = found.arr[6].value
  i08.value = found.arr[7].value
  i09.value = found.arr[8].value
  i10.value = found.arr[9].value
  i11.value = found.arr[10].value
  i12.value = found.arr[11].value
  i13.value = found.arr[12].value
  i14.value = found.arr[13].value
  i15.value = found.arr[14].value
  i16.value = found.arr[15].value
  i17.value = found.arr[16].value
  i18.value = found.arr[17].value
  i19.value = found.arr[18].value
  i20.value = found.arr[19].value
  i21.value = found.arr[20].value
  i22.value = found.arr[21].value
  i23.value = found.arr[22].value
  i24.value = found.arr[23].value
  i25.value = found.arr[24].value
}

const deleteTicketFn = (id) => {
  if (confirm('Delete!') == true) {
    const result = arrayTicket.filter((e) => {
      return e.id != id
    })
    arrayTicket = [...result]
    localStorage.setItem('array_ticket', JSON.stringify(arrayTicket))
    loadTicket()
  }
}
