import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';
import { AuthInterceptor } from '../auth/auth.interceptor';
import { SharedModule } from '../shared/shared.module';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import { ErrorInterceptor } from '../shared/error.interceptor';

@NgModule({
  declarations: [FooterComponent, SidenavItemComponent, ToolbarComponent, SidenavComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, SidenavItemComponent, FooterComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ]
})
export class CoreModule {}
