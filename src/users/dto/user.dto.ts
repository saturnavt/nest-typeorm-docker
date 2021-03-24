import { ApiProperty } from '@nestjs/swagger';
export class User {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
