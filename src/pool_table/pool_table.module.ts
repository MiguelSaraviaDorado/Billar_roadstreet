import { Module } from '@nestjs/common';
import { PoolTableService } from './pool_table.service';
import { PoolTableController } from './pool_table.controller';

@Module({
  providers: [PoolTableService],
  controllers: [PoolTableController]
})
export class PoolTableModule {}
