import { Database } from '@infra/database/database.module';
import { HttpModule } from '@infra/http.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule, Database],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }