import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CraeteUser } from './dtos/CreateUser.dto';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // -- createUser
  @Post('')
  @UsePipes(ValidationPipe)
  async createUser(@Body() createuserdto: CraeteUser, @Res() res: Response) {
    return await this.userService.createUser(createuserdto, res);
  }

  //   --- get user by id
  @Get('/:id')
  async GetUserById(@Param('id') id: number, @Res() res: Response) {
    return await this.userService.UserbyId(id, res);
  }
}
