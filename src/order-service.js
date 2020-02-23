const orderService = eventEmitter => {
  eventEmitter.on('new-order', message => {
    const received = new Date();

    setTimeout(() => {
      const { name, surname } = message;
      const processed = new Date();
      const processedTime = processed - received;

      eventEmitter.emit('order-processed', {
        ...message,
        received,
        processed,
        processedTime,
        message: `${name} ${surname}'s order was processed at ${processed.toLocaleString()} (${processedTime}ms)`,
      });
    }, Math.floor(Math.random() * 2000) + 1000);
  });
};

module.exports = orderService;
