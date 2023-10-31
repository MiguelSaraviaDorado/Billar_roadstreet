//Import
import { ApiProperty } from "@nestjs/swagger";
import { registerTypeProductDto } from "./registerTypeProduct.dto";

//export
export class registerProductDto{
    @ApiProperty() name_product: string;

    description: string;

    @ApiProperty() price: number;

    @ApiProperty() quantity: number;
    
    @ApiProperty() id_typeproduct: registerTypeProductDto;
}