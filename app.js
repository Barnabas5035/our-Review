const reviews = [
  {
    id: 1,
    name: 'omosomofa barna',
    job: 'fontendDeveloper',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus fugit quos autem, distinctio optio voluptate nisi sunt ab. Neque quod, nemo magnam illum molestias placeat dolorum repudiandae maiores cum possimus. ',
  },
  {
    id: 2,
    name: 'trustGod',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus fugit quos autem, distinctio optio voluptate nisi sunt ab. Neque quod, nemo magnam illum molestias placeat dolorum repudiandae maiores cum possimus',
  },
  {
    id: 3,
    name: 'mathew jossy',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'susy Rita',
    job: 'the Boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
]

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevbtn = document.querySelector('.prev-btn')
const nextbtn = document.querySelector('.next-btn')
const randombtn = document.querySelector('.random-btn')

let countItem = 0

window.addEventListener('DOMContentLoaded', function () {
  const items = reviews[countItem]
  img.src = items.img
  author.textContent = items.name
  job.textContent = items.job
  info.textContent = items.text
})
function shownPerson(person) {
  const item = reviews[person]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}
randombtn.addEventListener('click', function () {
  countItem = Math.floor(Math.random() * reviews.length)
  shownPerson(countItem)
})
