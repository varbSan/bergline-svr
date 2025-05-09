import { Controller, Get } from '@nestjs/common'

@Controller('healthcheck')
export class HealthcheckController {
  @Get()
  healthcheck() {
    return { message: 'OK' }
  }
}
