//IMPORT
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';
import { UserModule } from './user/user.module';
import { ReserveModule } from './reserve/reserve.module';
import { PoolTableModule } from './pool_table/pool_table.module';
import { BillModule } from './bill/bill.module';
import { TimePoolTableModule } from './time_pool_table/time_pool_table.module';
import { BillDetailModule } from './bill_detail/bill_detail.module';
import { ProductModule } from './product/product.module';
import { TypeProductModule } from './type_product/type_product.module';

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
    PersonModule,
    UserModule,
    ReserveModule,
    PoolTableModule,
    BillModule,
    TimePoolTableModule,
    BillDetailModule,
    ProductModule,
    TypeProductModule,
  ],
  controllers: [AppController],
  providers  : [AppService],
})
export class AppModule {}
