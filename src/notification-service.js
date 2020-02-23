const notificationService = eventEmitter => {
  eventEmitter.on('order-packaged', message => {
    setTimeout(() => {
      const { name, surname, processedTime, packaged, packagedTime } = message;

      const ready = new Date();
      const readyTime = ready - packaged;

      const totalTime = processedTime + packagedTime + readyTime;

      eventEmitter.emit('order-ready', {
        ...message,
        ready,
        readyTime,
        message: `${name} ${surname}'s order is ready! (${readyTime}ms) (total: ${totalTime}ms)`,
      });
    }, Math.floor(Math.random() * 2000) + 1000);
  });
};

module.exports = notificationService;
