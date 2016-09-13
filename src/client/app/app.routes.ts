import { Routes } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { DashboardRoutes } from './+dashboard/index';
import { ShopRoutes } from './+shop/index';


export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...DashboardRoutes,
  ...ShopRoutes
];
