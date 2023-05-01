const red = document.getElementById('red')
const blue = document.getElementById('blue')
const green = document.getElementById('green')
const output = document.getElementById('output')
const SPEED = 2

ondevicemotion = (event) => {
  updateDom(red, event.accelerationIncludingGravity)
}

function updateDom(dot, { x, y }) {
  const newX = +(dot.getAttribute('x') ?? 0) + -(x * SPEED)
  const newY = +(dot.getAttribute('y') ?? 0) + y * SPEED

  const translateX = getOptimized(innerWidth, newX)
  const translateY = getOptimized(Root.clientHeight, newY)

  dot.setAttribute('x', translateX)
  dot.setAttribute('y', translateY)
  dot.style.translate = `${translateX}px ${translateY}px`
}

function print(text) {
  if (!output) return
  output.innerHTML += text + '<br />'
  output.scrollTo({ top: output.scrollHeight + 99999 })
}

function getOptimized(size, pos) {
  const halfSize = size / 2
  if (pos > 0 && pos > halfSize) return halfSize
  if (pos < 0 && pos * -1 > halfSize) return -halfSize
  return pos
}
