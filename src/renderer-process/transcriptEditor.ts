import * as Quill from 'quill'

let transcriptEditor = new Quill('.transcript-editor', {
  modules: {
    toolbar: true  // Include button in toolbar
  },
  theme: 'snow',
  placeholder: 'Transcribe away...'
})

export { transcriptEditor }
