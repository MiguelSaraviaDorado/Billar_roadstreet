import { Module } from '@nestjs/common';
import { TimePoolTableService } from './time_pool_table.service';
import { TimePoolTableController } from './time_pool_table.controller';

@Module({
  providers: [TimePoolTableService],
  controllers: [TimePoolTableController]
})
export class TimePoolTableModule {}
