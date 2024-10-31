import jwt, { JwtPayload } from 'jsonwebtoken';

export class Jwt {
  private secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  sign(payload: object): string {
    return jwt.sign(payload, this.secret, { expiresIn: '1h' });
  }

  verify(token: string): string | JwtPayload | null {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      return null;
    }
  }
}
