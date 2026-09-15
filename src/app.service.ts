import { Injectable } from '@nestjs/common';
import { MessageBodyDto } from './app.interface';

import logger from './logger/winston';

logger.child({ class_name: 'AppService' });


@Injectable()
export class AppService {
  constructor() {}

  async onMessage(bodyDto: MessageBodyDto): Promise<any> {
    const { message } = bodyDto;
    logger.info(`bodyDto ${JSON.stringify(bodyDto)}`);
    
    let responseMessages = [];
    let response = {};


    switch (message) {
      case '/start':
        responseMessages.push({ message: `Был отправлен старт`});
        responseMessages.push({ message: `Вы можете нажать на кнопочки`, buttons: [["Кнопка 1","Кнопка 2"],["Кнопка 3"],["Кнопка 4"]]});
        
        response = { messages : responseMessages};

        return response;
      default:
        responseMessages.push({ message: `Это явно не /start`});
        response = { messages : responseMessages };

        return response;

    }
  }

}
