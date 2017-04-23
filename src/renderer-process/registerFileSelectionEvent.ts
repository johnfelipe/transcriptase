import { ipcRenderer as ipc} from 'electron'

const registerFileSelectionEvent = function (editorInstance) {
  let transcriptSelectionButton = document.getElementById('select-transcript-file')
  let mediaSelectionButton = document.getElementById('select-media-file')

  transcriptSelectionButton.addEventListener('click', function (event) {
    ipc.send('open-file-dialog', 'transcript')
  })
  mediaSelectionButton.addEventListener('click', function (event) {
    ipc.send('open-file-dialog', 'video')
  })
}

export { registerFileSelectionEvent }
