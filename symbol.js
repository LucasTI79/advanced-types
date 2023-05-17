
const assert = require('assert')

const uniqueKey = Symbol('userName')
const user = {}

user["userName"] = "value for normal objetos"
user[uniqueKey] =  'value for symbol'

