const checkWin = (arr) => {
  let num = 0
  if (
    arr[0].class != '' &&
    arr[1].class != '' &&
    arr[2].class != '' &&
    arr[3].class != '' &&
    arr[4].class != ''
  ) {
    arr[0].class = 'gold'
    arr[1].class = 'gold'
    arr[2].class = 'gold'
    arr[3].class = 'gold'
    arr[4].class = 'gold'
    num += 25
  }
  if (
    arr[5].class != '' &&
    arr[6].class != '' &&
    arr[7].class != '' &&
    arr[8].class != '' &&
    arr[9].class != ''
  ) {
    arr[5].class = 'gold'
    arr[6].class = 'gold'
    arr[7].class = 'gold'
    arr[8].class = 'gold'
    arr[9].class = 'gold'
    num += 25
  }
  if (
    arr[10].class != '' &&
    arr[11].class != '' &&
    arr[12].class != '' &&
    arr[13].class != '' &&
    arr[14].class != ''
  ) {
    arr[10].class = 'gold'
    arr[11].class = 'gold'
    arr[12].class = 'gold'
    arr[13].class = 'gold'
    arr[14].class = 'gold'
    num += 25
  }
  if (
    arr[15].class != '' &&
    arr[16].class != '' &&
    arr[17].class != '' &&
    arr[18].class != '' &&
    arr[19].class != ''
  ) {
    arr[15].class = 'gold'
    arr[16].class = 'gold'
    arr[17].class = 'gold'
    arr[18].class = 'gold'
    arr[19].class = 'gold'
    num += 25
  }
  if (
    arr[20].class != '' &&
    arr[21].class != '' &&
    arr[22].class != '' &&
    arr[23].class != '' &&
    arr[24].class != ''
  ) {
    arr[20].class = 'gold'
    arr[21].class = 'gold'
    arr[22].class = 'gold'
    arr[23].class = 'gold'
    arr[24].class = 'gold'
    num += 25
  }
  if (
    arr[0].class != '' &&
    arr[5].class != '' &&
    arr[10].class != '' &&
    arr[15].class != '' &&
    arr[20].class != ''
  ) {
    arr[0].class = 'gold'
    arr[5].class = 'gold'
    arr[10].class = 'gold'
    arr[15].class = 'gold'
    arr[20].class = 'gold'
    num += 25
  }
  if (
    arr[1].class != '' &&
    arr[6].class != '' &&
    arr[11].class != '' &&
    arr[16].class != '' &&
    arr[21].class != ''
  ) {
    arr[1].class = 'gold'
    arr[6].class = 'gold'
    arr[11].class = 'gold'
    arr[16].class = 'gold'
    arr[21].class = 'gold'
    num += 25
  }
  if (
    arr[2].class != '' &&
    arr[7].class != '' &&
    arr[12].class != '' &&
    arr[17].class != '' &&
    arr[22].class != ''
  ) {
    arr[2].class = 'gold'
    arr[7].class = 'gold'
    arr[12].class = 'gold'
    arr[17].class = 'gold'
    arr[22].class = 'gold'
    num += 25
  }
  if (
    arr[3].class != '' &&
    arr[8].class != '' &&
    arr[13].class != '' &&
    arr[18].class != '' &&
    arr[23].class != ''
  ) {
    arr[3].class = 'gold'
    arr[8].class = 'gold'
    arr[13].class = 'gold'
    arr[18].class = 'gold'
    arr[23].class = 'gold'
    num += 25
  }
  if (
    arr[4].class != '' &&
    arr[9].class != '' &&
    arr[14].class != '' &&
    arr[19].class != '' &&
    arr[24].class != ''
  ) {
    arr[4].class = 'gold'
    arr[9].class = 'gold'
    arr[14].class = 'gold'
    arr[19].class = 'gold'
    arr[24].class = 'gold'
    num += 25
  }
  if (
    arr[0].class != '' &&
    arr[6].class != '' &&
    arr[12].class != '' &&
    arr[18].class != '' &&
    arr[24].class != ''
  ) {
    arr[0].class = 'gold'
    arr[6].class = 'gold'
    arr[12].class = 'gold'
    arr[18].class = 'gold'
    arr[24].class = 'gold'
    num += 25
  }
  if (
    arr[4].class != '' &&
    arr[8].class != '' &&
    arr[12].class != '' &&
    arr[16].class != '' &&
    arr[20].class != ''
  ) {
    arr[4].class = 'gold'
    arr[8].class = 'gold'
    arr[12].class = 'gold'
    arr[16].class = 'gold'
    arr[20].class = 'gold'
    num += 25
  }
  return num
}

const orderTicket = () => {
  arrayTicket.forEach((e) => {
    const { arr } = e
    e.order = 0
    e.arr.forEach((a) => {
      if (arrayNumber.includes(a.value)) {
        a.class = 'green'
        e.order += 1
      } else {
        a.class = ''
      }
    })
    const win = checkWin(arr)
    e.order += win
  })
  arrayTicket.sort((a, b) => a.id - b.id)
  arrayTicket.sort((a, b) => b.order - a.order)
  loadTicket()
}

orderTicket()
