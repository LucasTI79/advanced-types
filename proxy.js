'use-strict'
const Event = require('events')
const event = new Event()
const eventName = 'counter'
event.on(eventName, msg => console.log('counter updated', msg))

const myCounter = {
  counter: 0
} 

const proxy = new Proxy(myCounter, {
  set: (target, propertyKey, newValue) => {
    event.emit(eventName, { newValue, key: target[propertyKey] })
    target[propertyKey] = newValue
    return true
  },
  get(object, prop){
    event.emit(eventName, 'get')
    return object[prop]
  }
})

setInterval(function(){
  proxy.counter++
  if(proxy.counter === 10) clearInterval(this)
}, 200)

process.nextTick(() => {
  proxy.counter++
})