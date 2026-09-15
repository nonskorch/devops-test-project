import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageBodyDto } from './app.interface';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';

import logger from './logger/winston';

logger.child({ class_name: 'AppController' });

@Controller()
@ApiTags('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/message')
  @UsePipes(ValidationPipe)
  @ApiBody({ type: MessageBodyDto })
  @ApiResponse({
    status: 200,
    description: 'Сообщение было получено',
  })
  async postMessage(
    @Body()
    bodyDto: MessageBodyDto,
  ): Promise<any> {
    try {
      const response = await this.appService.onMessage(bodyDto);
      logger.info(`GET MESSAGE RESPONSE - ${JSON.stringify(response)}`);
      return response;
    } catch (error) {
      logger.error(`произошла ошибка: ${error}`);
      throw error;
    }
  }

  @Get('/test')
  @ApiResponse({
    status: 200,
    description: 'Тест',
  })
  async getTest(
  ): Promise<any> {
    try {
      logger.info(`GOT TEST REQUEST`);
      return { message: 'Тестовое сообщение' };
    } catch (error) {
      logger.error(`произошла ошибка: ${error}`);
      throw error;
    }
  }
}
