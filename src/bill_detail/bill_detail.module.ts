import { Module } from '@nestjs/common';
import { BillDetailService } from './bill_detail.service';
import { BillDetailController } from './bill_detail.controller';

@Module({
  providers: [BillDetailService],
  controllers: [BillDetailController]
})
export class BillDetailModule {}
