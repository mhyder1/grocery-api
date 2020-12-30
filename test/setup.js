process.env.TZ = 'UCT'
process.env.NODE_ENV = 'test'

require('dotenv').config();

process.env.TEST_DB_URL = process.env.TEST_DB_URL || "postgresql://grocery@localhost/grocery_auth_test"


let { expect } = require('chai')
let supertest = require('supertest')

global.expect = expect
global.supertest = supertest
