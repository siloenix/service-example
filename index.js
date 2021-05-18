const app = require('./server/app');
const logger = require('./logger').logger('app:index')

process.on('SIGTERM', async () => {
    logger.info('SIGTERM received -- shutting down server');
    await app.stop();
    process.exit(0);
})
process.on('SIGINT', async () => {
    logger.info('SIGINT received -- shutting down server');
    await app.stop();
    process.exit(0);
})

app.start()
    .catch(console.error);
