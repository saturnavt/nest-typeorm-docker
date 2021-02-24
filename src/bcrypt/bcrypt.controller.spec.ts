import { Test, TestingModule } from '@nestjs/testing';
import { BcryptController } from './bcrypt.controller';

describe('BcryptController', () => {
  let controller: BcryptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BcryptController],
    }).compile();

    controller = module.get<BcryptController>(BcryptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
