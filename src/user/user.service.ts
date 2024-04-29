import { Injectable } from '@nestjs/common';
import { PrismService } from 'src/prisma/prisma.service';
import { CraeteUser } from './dtos/CreateUser.dto';
import { Response } from 'express';

@Injectable()
export class UserService {
  constructor(private Prism: PrismService) {}

  // --- create the user
  async createUser(data: CraeteUser, res: Response) {
    const isUser = await this.Prism.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (isUser) {
      return res.status(400).json({
        success: false,
        message: 'Email is already in use',
      });
    }

    await this.Prism.user.create({ data });
    res.status(200).json({
      success: true,
      message: 'User created successfully',
    });
  }

  //   ---- fin user by id
  async UserbyId(id: number, res: Response) {
    const user = await this.Prism.user.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'User not found',
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  }
}
