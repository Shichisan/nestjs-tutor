import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './jwt-auth/jwt-auth.guard';
import { LocalAuthGuard } from './local-auth/local-auth.guard';
import type { Request as ExpressRequest } from 'express';
import type { User } from './users/users.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: ExpressRequest & { user: User }) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: ExpressRequest & { user: User }) {
    return req.user;
  }
}
