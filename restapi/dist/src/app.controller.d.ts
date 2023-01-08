import { AuthService } from './auth/auth.service';
import type { Request as ExpressRequest } from 'express';
import type { User } from './users/users.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(req: ExpressRequest & {
        user: User;
    }): Promise<{
        access_token: string;
    }>;
    getProfile(req: ExpressRequest & {
        user: User;
    }): any;
}
