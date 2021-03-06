var html = require('choo/html')

var TITLE = '🚂🚋🚋'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="sans-serif">
      <h1 class="f-headline pa3 pa4-ns">
        Choo choo!
      </h1>

      <div class="ph3 ph4-ns">
        <p>Current number of clicks: ${state.totalClicks}</p>

        <button class="f5 dim br-pill ph3 pv2 mb2 dib white bg-hot-pink bn pointer" onclick=${handleClick}>Click Me!</button>
      </div>
    </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }
}
