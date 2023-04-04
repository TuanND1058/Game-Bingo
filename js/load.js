const loadTicket = () => {
  cards.innerHTML = ``
  arrayTicket.forEach((e) => {
    const { id, arr } = e
    cards.innerHTML += `
    <div id="${id}" class="card">
          <div class="bor">
            <span>${id}</span>
            <div>
              <button onclick="editTicketFn(${id})" class="button edit">edit</button>
              <button onclick="deleteTicketFn(${id})" class="button delete">delete</button>
            </div>
          </div>
          <ul>
            <li class="${arr[0].cl}">${arr[0].value}</li>
            <li class="${arr[1].cl}">${arr[1].value}</li>
            <li class="${arr[2].cl}">${arr[2].value}</li>
            <li class="${arr[3].cl}">${arr[3].value}</li>
            <li class="${arr[4].cl}">${arr[4].value}</li>
          </ul>
          <ul>
            <li class="${arr[5].cl}">${arr[5].value}</li>
            <li class="${arr[6].cl}">${arr[6].value}</li>
            <li class="${arr[7].cl}">${arr[7].value}</li>
            <li class="${arr[8].cl}">${arr[8].value}</li>
            <li class="${arr[9].cl}">${arr[9].value}</li>
          </ul>
          <ul>
            <li class="${arr[10].cl}">${arr[10].value}</li>
            <li class="${arr[11].cl}">${arr[11].value}</li>
            <li class="${arr[12].cl}">${arr[12].value}</li>
            <li class="${arr[13].cl}">${arr[13].value}</li>
            <li class="${arr[14].cl}">${arr[14].value}</li>
          </ul>
          <ul>
            <li class="${arr[15].cl}">${arr[15].value}</li>
            <li class="${arr[16].cl}">${arr[16].value}</li>
            <li class="${arr[17].cl}">${arr[17].value}</li>
            <li class="${arr[18].cl}">${arr[18].value}</li>
            <li class="${arr[19].cl}">${arr[19].value}</li>
          </ul>
          <ul>
            <li class="${arr[20].cl}">${arr[20].value}</li>
            <li class="${arr[21].cl}">${arr[21].value}</li>
            <li class="${arr[22].cl}">${arr[22].value}</li>
            <li class="${arr[23].cl}">${arr[23].value}</li>
            <li class="${arr[24].cl}">${arr[24].value}</li>
          </ul>
        </div>
    `
  })
}
loadTicket()

const loadNumber = () => {
  listNumber.innerHTML = ``
  arrayNumber.forEach((e) => {
    listNumber.innerHTML += `${e} `
  })
}
loadNumber()
