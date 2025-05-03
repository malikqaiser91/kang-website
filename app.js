document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('mobile-menu')
  menu.classList.toggle('hidden')
})

document.getElementById('show-more').addEventListener('click', function () {
  const hiddenServices = document.querySelectorAll(
    '.service-item:nth-child(n+4)'
  )
  hiddenServices.forEach((service) => {
    service.style.display = 'block' // Show hidden services
  })
  this.style.display = 'none' // Hide the "Show More" button after click
})

// Carousel for "Why Choose Us"
let currentSlide = 0
const slides = document.querySelectorAll('#choose-us-carousel .flex-shrink-0')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

prevButton.addEventListener('click', () => {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
  updateCarousel()
})

nextButton.addEventListener('click', () => {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1
  updateCarousel()
})

function updateCarousel() {
  const offset = -100 * currentSlide
  document.getElementById(
    'choose-us-carousel'
  ).style.transform = `translateX(${offset}%)`
}

// Carousel for "Mission"
let currentMissionSlide = 0
const missionSlides = document.querySelectorAll(
  '#mission-carousel .flex-shrink-0'
)
const prevMissionButton = document.getElementById('prev-mission')
const nextMissionButton = document.getElementById('next-mission')

prevMissionButton.addEventListener('click', () => {
  currentMissionSlide =
    currentMissionSlide === 0
      ? missionSlides.length - 1
      : currentMissionSlide - 1
  updateMissionCarousel()
})

nextMissionButton.addEventListener('click', () => {
  currentMissionSlide =
    currentMissionSlide === missionSlides.length - 1
      ? 0
      : currentMissionSlide + 1
  updateMissionCarousel()
})

function updateMissionCarousel() {
  const offset = -100 * currentMissionSlide
  document.getElementById(
    'mission-carousel'
  ).style.transform = `translateX(${offset}%)`
}
