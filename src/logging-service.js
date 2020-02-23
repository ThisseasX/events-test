const { appendFile } = require('fs');
const { join } = require('path');

const noop = () => {};

const loggingService = eventEmitter => {
  ['new-order', 'order-processed', 'order-packaged', 'order-ready'].forEach(
    event => {
      eventEmitter.on(event, ({ message }) => {
        appendFile(
          join(__dirname, '..', 'application-log.txt'),
          `===== LOG ==== Message: ${message}\n`,
          { encoding: 'utf8' },
          noop,
        );
      });
    },
  );
};

module.exports = loggingService;
