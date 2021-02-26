import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '../jwt/jwt.service';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    let validateTokenBool = false;

    const request = context.switchToHttp().getRequest<Request>();

    if (request.headers.authorization) {
      if (request.headers.authorization.startsWith('Bearer ')) {
        //let token = request.headers.authorization.split(" ")[1];

        const decodedToken = await this.jwtService.validateToken(
          request.headers.authorization,
        );

        if (decodedToken == true) {
          validateTokenBool = true;
        } else {
          validateTokenBool = false;
        }
        //request['user'] = JSON.parse(this.cryptService.decrypt(decodedToken.data))
        //return true
      }
    }
    return validateTokenBool;
  }
}
