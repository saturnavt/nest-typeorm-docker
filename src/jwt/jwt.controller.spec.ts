import { Test, TestingModule } from '@nestjs/testing';
import { JwtController } from './jwt.controller';

describe('JwtController', () => {
  let controller: JwtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JwtController],
    }).compile();

    controller = module.get<JwtController>(JwtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
