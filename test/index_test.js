const assert = require('chai').assert
const createRequest = require('../index.js').createRequest

describe('createRequest', () => {
  const jobID = '1'
  // const city = "Austin"
  const city = [ "q", "city", "town"]

  context('successful calls', () => {
    const requests = [
    
      
    ]

    requests.forEach(req => {
      it(`${req.name}`, (done) => {
        createRequest(req.testData, (statusCode, data) => {
          assert.equal(statusCode, 200)
          assert.equal(data.jobRunID, jobID)
          assert.isNotEmpty(data.data)
          assert.isAbove(Number(data.result), 0)
          assert.isAbove(Number(data.data.result), 0)
          done()
        })
      })
    })
  })

  context('error calls', () => {
    const requests = [
      { name: 'endpoint', testData: {} },
      { name: 'empty data', testData: { data: {} } },
      { name: 'city', testData: { id: jobID, data: { lat: '32', long: '-97' } } },
      { name: 'unknown city', testData: { id: jobID, data: { city: 'not_real' } } },
      { name: 'wrong units', testData: { id: jobID, data: { main: 'Metric' } } }
    ]

    requests.forEach(req => {
      it(`${req.name}`, (done) => {
        createRequest(req.testData, (statusCode, data) => {
          assert.equal(statusCode, 500)
          assert.equal(data.jobRunID, jobID)
          assert.equal(data.status, 'errored')
          assert.isNotEmpty(data.error)
          done()
        })
      })
    })
  })
})
