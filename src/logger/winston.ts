import * as winston from 'winston';
const { combine, timestamp, json, errors } = winston.format;

export default winston.createLogger({
  level: 'debug',
  format: combine(errors({ stack: true }), timestamp(), json()),
  transports: [new winston.transports.Console()],
  exceptionHandlers: [
    new winston.transports.Console({ consoleWarnLevels: ['error'] }),
  ],
  rejectionHandlers: [
    new winston.transports.Console({ consoleWarnLevels: ['error'] }),
  ],
});
