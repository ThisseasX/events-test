const packagingService = eventEmitter => {
  eventEmitter.on('order-processed', message => {
    setTimeout(() => {
      const { name, surname, processed } = message;

      const packaged = new Date();
      const packagedTime = packaged - processed;

      eventEmitter.emit('order-packaged', {
        ...message,
        packaged,
        packagedTime,
        message: `${name} ${surname}'s order was packaged at ${packaged.toLocaleString()} (${packagedTime}ms)`,
      });
    }, Math.floor(Math.random() * 2000) + 1000);
  });
};

module.exports = packagingService;
