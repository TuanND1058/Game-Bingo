const loadTicket = () => {
  cards.innerHTML = ``
  arrayTicket.forEach((e) => {
    const { id, arr } = e
    cards.innerHTML += `
    <div id="${id}" class="card">
          <div class="bor">
            <span class="font-bold">${id}</span>
            <div>
              <button onclick="editTicketFn(${id})" class="button edit">Edit</button>
              <button onclick="deleteTicketFn(${id})" class="button delete">Delete</button>
            </div>
          </div>
          <ul>
            <li class="${arr[0].class}">${arr[0].value}</li>
            <li class="${arr[1].class}">${arr[1].value}</li>
            <li class="${arr[2].class}">${arr[2].value}</li>
            <li class="${arr[3].class}">${arr[3].value}</li>
            <li class="${arr[4].class}">${arr[4].value}</li>
          </ul>
          <ul>
            <li class="${arr[5].class}">${arr[5].value}</li>
            <li class="${arr[6].class}">${arr[6].value}</li>
            <li class="${arr[7].class}">${arr[7].value}</li>
            <li class="${arr[8].class}">${arr[8].value}</li>
            <li class="${arr[9].class}">${arr[9].value}</li>
          </ul>
          <ul>
            <li class="${arr[10].class}">${arr[10].value}</li>
            <li class="${arr[11].class}">${arr[11].value}</li>
            <li class="${arr[12].class}">${arr[12].value}</li>
            <li class="${arr[13].class}">${arr[13].value}</li>
            <li class="${arr[14].class}">${arr[14].value}</li>
          </ul>
          <ul>
            <li class="${arr[15].class}">${arr[15].value}</li>
            <li class="${arr[16].class}">${arr[16].value}</li>
            <li class="${arr[17].class}">${arr[17].value}</li>
            <li class="${arr[18].class}">${arr[18].value}</li>
            <li class="${arr[19].class}">${arr[19].value}</li>
          </ul>
          <ul>
            <li class="${arr[20].class}">${arr[20].value}</li>
            <li class="${arr[21].class}">${arr[21].value}</li>
            <li class="${arr[22].class}">${arr[22].value}</li>
            <li class="${arr[23].class}">${arr[23].value}</li>
            <li class="${arr[24].class}">${arr[24].value}</li>
          </ul>
        </div>
    `
  })
}
loadTicket()

const scrollList = document.getElementById('scrollList')

const loadNumber = () => {
  listNumber.innerHTML = ''
  arrayNumber.forEach((e) => {
    listNumber.innerHTML += `<span class="ball">${e}</span>`
  })
  scrollList.scrollLeft = scrollList.scrollWidth
}
loadNumber()
