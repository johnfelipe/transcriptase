/* eslint-env jasmine */
describe('Starting the app', function () {
  const path = require('path')
  let Application = require('spectron').Application
  let applicationPath = path.join(process.cwd(), 'main.js')
  let app = new Application({
    path: 'node_modules/.bin/electron',
    args: ['main.js']
  })
  it('should produce a running instance of the app', function () {
    app.start().then(function () {
      expect(app.isRunning()).toBe(true)
      console.log(app.isRunning())
    })
  })
})
