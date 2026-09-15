import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class MessageBodyDto {
  @ApiPropertyOptional()
  message?: string;

  @ApiPropertyOptional()
  message_id?: string;
}