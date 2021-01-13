import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfrastructureGraphqlModule} from "@tanglass-erp/infrastructure/graphql";
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '@Tanglass-erp/main/environments/environment';


@NgModule({
  imports: [
    CommonModule,
    InfrastructureGraphqlModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    })
  ],
})
export class CoreManagementModule {}
