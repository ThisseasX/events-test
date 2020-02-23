const inquirer = require('inquirer');
const { EventEmitter } = require('events');
const orderService = require('./order-service');
const packagingService = require('./packaging-service');
const notificationService = require('./notification-service');
const loggingService = require('./logging-service');

const eventEmitter = new EventEmitter();

orderService(eventEmitter);
packagingService(eventEmitter);
notificationService(eventEmitter);
loggingService(eventEmitter);

(function ask() {
  inquirer
    .prompt([
      {
        name: 'name',
        message: 'What is your name?',
      },
      {
        name: 'surname',
        message: 'What is your surname?',
      },
    ])
    .then(({ name, surname }) => {
      eventEmitter.emit('new-order', {
        name,
        surname,
        message: `New order from ${name} ${surname}!`,
      });

      setImmediate(ask);
    });
})();
