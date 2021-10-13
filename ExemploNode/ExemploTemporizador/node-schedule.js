// npm i node-schedule@1.3.0 -E
const schedule = require('node-schedule')
const task1 = schedule.scheduleJob('*/5 * 14 * * 3', function() {
  console.log('Executing task 1', new Date().getSeconds())
})

setTimeout(function() {
  task1.cancel()
  console.log('Canceling Task 1')
}, 20000)

// setImmediate
// setInterval

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1, 5)] // Executa de segunda à sexta-feira
rule.hour = 14
rule.second = 30

const task2 = schedule.scheduleJob(rule, function() {
  console.log('Executing Task 2', new Date().getSeconds())
})