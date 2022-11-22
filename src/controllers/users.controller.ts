import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getUsers() {
    return {
      data: [
        {
          username: 'admin',
          name: 'John Doe',
        },
      ],
    };
  }
}
