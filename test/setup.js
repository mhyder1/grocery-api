require('dotenv').config();
process.env.JWT_SECRET = 'test-jwt-secret'

let { expect } = require('chai')
let supertest = require('supertest')

global.expect = expect
global.supertest = supertest
