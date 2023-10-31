//IMPORT
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeProductModule } from './type_product/type_product.module';
import { PersonModule } from './person/person.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

@Module({
  imports    : [
    TypeOrmModule.forRoot({
      type       : 'postgres',
      host       : 'localhost',
      port       : 5432,
      username   : 'msaravia',
      password   : '13538451',
      entities   : [__dirname + "/entities/*{.js,.ts}"],
      database   : 'db_roadstreet',
      synchronize: true,
    }
    ),
    TypeProductModule,
    PersonModule,
    UserModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers  : [AppService],
})
export class AppModule {}
