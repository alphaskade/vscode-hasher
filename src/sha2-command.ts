import { ICommand } from './command';
import * as crypto from 'crypto';

export class Sha224Command implements ICommand {
  run(text: string): string {
    return crypto
      .createHash('sha224')
      .update(text)
      .digest('hex');
  }
}

export class Sha256Command implements ICommand {
  run(text: string): string {
    return crypto
      .createHash('sha256')
      .update(text)
      .digest('hex');
  }
}

export class Sha384Command implements ICommand {
  run(text: string): string {
    return crypto
      .createHash('sha384')
      .update(text)
      .digest('hex');
  }
}

export class Sha512Command implements ICommand {
  run(text: string): string {
    return crypto
      .createHash('sha512')
      .update(text)
      .digest('hex');
  }
}
