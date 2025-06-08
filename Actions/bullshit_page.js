//javascript code to ahndle image slider navigation and animation

var images = document.querySelectorAll('.slider img')
var currentImage = 0

setInterval(function () {
  images[currentImage].classList.remove('active')
  currentImage = (currentImage + 1) % images.length
  images[currentImage].classList.add('active')
}, 2000)
//javascript code to handle dragging functionality
var dragItems = document.querySelectorAll('.drag-item')

dragItems.forEach(function (item) {
  item.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('text/plain', event.target.id)
  })
})
//javascript code to animate counter
var counters = document.querySelectorAll('.counter')

counters.forEach(function (counter) {
  var target = parseInt(counter.dataset.target)
  var count = 0
  var speed = target / 100
  function updateCounter() {
    count++
    counter.textContent = count
    if (count < target) {
      setTimeout(updateCounter, speed)
    }
  }
  updateCounter()
})
