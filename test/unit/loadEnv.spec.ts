import { expect } from 'chai'
import loadEnv from '../../'

import envvarConfig from '../fixtures/envvars'


describe('loadEnv', () => {

  describe('when not set env vars', () => {
    let data : {}
    before(() => {
      data = loadEnv(envvarConfig)
    })

    it('should return a default object', () => {
      expect(data).to.be.eql(envvarConfig.defaults)
    })
  })


  describe('when set all env vars', () => {
    let data : {}
    let expectedResponse : {}
    before(() => {
      process.env.TEST_NAME = 'Test with env vars'
      process.env.TEST_VERSION = '1.0.0'
      process.env.TEST_TYPE = 'test config'

      data = loadEnv(envvarConfig)

      expectedResponse = {
        name: process.env.TEST_NAME,
        config: {
          version: process.env.TEST_VERSION,
          type: process.env.TEST_TYPE
        }
      }
    })

    after(() => {
      process.env.TEST_NAME = 'Test with env vars'
      process.env.TEST_VERSION = '1.0.0'
      process.env.TYPE = 'test config'
    })


    it('should return an correctly data', () => {
      expect(data).to.be.eql(expectedResponse)
    })
  })

  describe('when node_env is undefined', () => {

    let data : {}

    before(() => {
      process.env.NODE_ENV = undefined
      data = loadEnv(envvarConfig)
    })

    after(() => {
      process.env.NODE_ENV = 'test'
    })

    it('should return correctly data', () => {
      console.log(data)
    })
  })
 


})