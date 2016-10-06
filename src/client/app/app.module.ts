import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { DashboardModule } from './+dashboard/dashboard.module';
import { ShopModule } from './+shop/shop.module';
import { WorkshopModule } from './+workshop/workshop.module';
import { StaffModule } from './+staff/staff.module';
import { HolidaysModule } from './+holidays/holidays.module';
import { SystemUsersModule } from './+system-users/system-users.module';
import { GlobalSettingsModule } from './+global-settings/global-settings.module';
import { ReportsModule } from './+reports/reports.module';
import { StoreSettingsModule } from './+global-settings/+store-settings/store-settings.module';
import { GeneralSettingsModule } from './+global-settings/+general-settings/general-settings.module';
import { ClothSettingsModule } from './+global-settings/+cloth-settings/cloth-settings.module';
import { CostCenterModule } from './+global-settings/+cost-center/cost-center.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), DashboardModule, ShopModule,
   WorkshopModule,StaffModule,HolidaysModule,SystemUsersModule,GlobalSettingsModule,ReportsModule,StoreSettingsModule,
   GeneralSettingsModule,ClothSettingsModule,CostCenterModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
