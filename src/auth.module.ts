import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { FirebaseStrategy } from './strategy/FirebaseStrategy';

@Module({
  imports: [PassportModule],
  providers: [],
  exports: [FirebaseStrategy],
  controllers: [],
})
export class AuthModule {}
