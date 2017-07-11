const Quill = require('quill')
const Delta = require('quill-delta')
const customBlots = ['Timestamp']

customBlots.map(blot => Quill.register(require(`./../blots/${blot}`)))

let delta1 = new Delta()
delta1.insert('hello, world!\n', { timestamp: true })

let transcriptEditor = new Quill('.transcript-editor', {
  modules: {
    toolbar: true // Include button in toolbar
  },
  theme: 'snow',
  placeholder: 'Transcribe away...'
})

transcriptEditor.setContents(delta1)

module.exports = transcriptEditor
