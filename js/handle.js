const checkWin = (arr) => {
  let num = 0
  if (
    arr[0].cl != '' &&
    arr[1].cl != '' &&
    arr[2].cl != '' &&
    arr[3].cl != '' &&
    arr[4].cl != ''
  ) {
    arr[0].cl = 'gold'
    arr[1].cl = 'gold'
    arr[2].cl = 'gold'
    arr[3].cl = 'gold'
    arr[4].cl = 'gold'
    num += 10
  }
  if (
    arr[5].cl != '' &&
    arr[6].cl != '' &&
    arr[7].cl != '' &&
    arr[8].cl != '' &&
    arr[9].cl != ''
  ) {
    arr[5].cl = 'gold'
    arr[6].cl = 'gold'
    arr[7].cl = 'gold'
    arr[8].cl = 'gold'
    arr[9].cl = 'gold'
    num += 10
  }
  if (
    arr[10].cl != '' &&
    arr[11].cl != '' &&
    arr[12].cl != '' &&
    arr[13].cl != '' &&
    arr[14].cl != ''
  ) {
    arr[10].cl = 'gold'
    arr[11].cl = 'gold'
    arr[12].cl = 'gold'
    arr[13].cl = 'gold'
    arr[14].cl = 'gold'
    num += 10
  }
  if (
    arr[15].cl != '' &&
    arr[16].cl != '' &&
    arr[17].cl != '' &&
    arr[18].cl != '' &&
    arr[19].cl != ''
  ) {
    arr[15].cl = 'gold'
    arr[16].cl = 'gold'
    arr[17].cl = 'gold'
    arr[18].cl = 'gold'
    arr[19].cl = 'gold'
    num += 10
  }
  if (
    arr[20].cl != '' &&
    arr[21].cl != '' &&
    arr[22].cl != '' &&
    arr[23].cl != '' &&
    arr[24].cl != ''
  ) {
    arr[21].cl = 'gold'
    arr[21].cl = 'gold'
    arr[22].cl = 'gold'
    arr[23].cl = 'gold'
    arr[24].cl = 'gold'
    num += 10
  }
  if (
    arr[0].cl != '' &&
    arr[5].cl != '' &&
    arr[10].cl != '' &&
    arr[15].cl != '' &&
    arr[20].cl != ''
  ) {
    arr[0].cl = 'gold'
    arr[5].cl = 'gold'
    arr[10].cl = 'gold'
    arr[15].cl = 'gold'
    arr[20].cl = 'gold'
    num += 10
  }
  if (
    arr[1].cl != '' &&
    arr[6].cl != '' &&
    arr[11].cl != '' &&
    arr[16].cl != '' &&
    arr[21].cl != ''
  ) {
    arr[1].cl = 'gold'
    arr[6].cl = 'gold'
    arr[11].cl = 'gold'
    arr[16].cl = 'gold'
    arr[21].cl = 'gold'
    num += 10
  }
  if (
    arr[2].cl != '' &&
    arr[7].cl != '' &&
    arr[12].cl != '' &&
    arr[17].cl != '' &&
    arr[22].cl != ''
  ) {
    arr[2].cl = 'gold'
    arr[7].cl = 'gold'
    arr[12].cl = 'gold'
    arr[17].cl = 'gold'
    arr[22].cl = 'gold'
    num += 10
  }
  if (
    arr[3].cl != '' &&
    arr[8].cl != '' &&
    arr[13].cl != '' &&
    arr[18].cl != '' &&
    arr[23].cl != ''
  ) {
    arr[3].cl = 'gold'
    arr[8].cl = 'gold'
    arr[13].cl = 'gold'
    arr[18].cl = 'gold'
    arr[23].cl = 'gold'
    num += 10
  }
  if (
    arr[4].cl != '' &&
    arr[9].cl != '' &&
    arr[14].cl != '' &&
    arr[19].cl != '' &&
    arr[24].cl != ''
  ) {
    arr[4].cl = 'gold'
    arr[9].cl = 'gold'
    arr[14].cl = 'gold'
    arr[19].cl = 'gold'
    arr[24].cl = 'gold'
    num += 10
  }
  if (
    arr[0].cl != '' &&
    arr[6].cl != '' &&
    arr[12].cl != '' &&
    arr[18].cl != '' &&
    arr[24].cl != ''
  ) {
    arr[0].cl = 'gold'
    arr[6].cl = 'gold'
    arr[12].cl = 'gold'
    arr[18].cl = 'gold'
    arr[24].cl = 'gold'
    num += 10
  }
  if (
    arr[4].cl != '' &&
    arr[8].cl != '' &&
    arr[12].cl != '' &&
    arr[16].cl != '' &&
    arr[20].cl != ''
  ) {
    arr[4].cl = 'gold'
    arr[8].cl = 'gold'
    arr[12].cl = 'gold'
    arr[16].cl = 'gold'
    arr[20].cl = 'gold'
    num += 10
  }
  return num
}

const orderTicket = () => {
  arrayTicket.forEach((e) => {
    const { arr } = e
    e.order = 0
    e.arr.forEach((a) => {
      if (arrayNumber.includes(a.value)) {
        a.cl = 'green'
        e.order += 1
      } else {
        a.cl = ''
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
