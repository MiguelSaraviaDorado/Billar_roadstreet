import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  all(): string {
    return 'TODOS LOS ENDPOINTS!!';
  }
  new (): string {
    return 'REGISTRO DE ENDPOINTS!!';
  }
  update (): string{
    return 'ACTUALIZACION DE ENDPOINTSS!!';
  }
  delete (): string{
    return 'ELIMINAR ENDPOINTES!!';
  }
}