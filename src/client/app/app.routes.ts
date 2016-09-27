import { Routes } from '@angular/router';
import { DashboardRoutes } from './+dashboard/index';
import { ShopRoutes } from './+shop/index';
import { WorkshopRoutes } from './+workshop/index';
import { StaffRoutes } from './+staff/index';
import { HolidaysRoutes } from './+holidays/index';
import { SystemUsersRoutes } from './+system-users/index';
import { GlobalSettingsRoutes } from './+global-settings/index';
import { ReportsRoutes } from './+reports/index';
import { StoreSettingsRoutes } from './+global-settings/+store-settings/index';
import { GeneralSettingsRoutes } from './+global-settings/+general-settings/index';
import { ClothSettingsRoutes } from './+global-settings/+cloth-settings/index';
import { CostCenterRoutes } from './+global-settings/+cost-center/index';

export const routes: Routes = [
  ...DashboardRoutes,
  ...ShopRoutes,
  ...WorkshopRoutes,
  ...StaffRoutes,
  ...HolidaysRoutes,
  ...SystemUsersRoutes,
  ...GlobalSettingsRoutes,
  ...ReportsRoutes,
  ...StoreSettingsRoutes,
  ...GeneralSettingsRoutes,
  ...ClothSettingsRoutes,
  ...CostCenterRoutes
];
