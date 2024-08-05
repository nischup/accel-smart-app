import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-password',
    loadChildren: () => import('./login-password/login-password.module').then( m => m.LoginPasswordPageModule)
  },
  {
    path: 'login-new-password',
    loadChildren: () => import('./login-new-password/login-new-password.module').then( m => m.LoginNewPasswordPageModule)
  },
  {
    path: 'home-blank',
    loadChildren: () => import('./home-blank/home-blank.module').then( m => m.HomeBlankPageModule)
  },
  {
    path: 'home-device-added',
    loadChildren: () => import('./home-device-added/home-device-added.module').then( m => m.HomeDeviceAddedPageModule)
  },
  {
    path: 'pairing-one',
    loadChildren: () => import('./pairing-one/pairing-one.module').then( m => m.PairingOnePageModule)
  },
  {
    path: 'pairing-two',
    loadChildren: () => import('./pairing-two/pairing-two.module').then( m => m.PairingTwoPageModule)
  },
  {
    path: 'pairing-three',
    loadChildren: () => import('./pairing-three/pairing-three.module').then( m => m.PairingThreePageModule)
  },
  {
    path: 'pairing-four',
    loadChildren: () => import('./pairing-four/pairing-four.module').then( m => m.PairingFourPageModule)
  },
  {
    path: 'pairing-five',
    loadChildren: () => import('./pairing-five/pairing-five.module').then( m => m.PairingFivePageModule)
  },
  {
    path: 'setup',
    loadChildren: () => import('./setup/setup.module').then( m => m.SetupPageModule)
  },
  {
    path: 'select-ac',
    loadChildren: () => import('./select-ac/select-ac.module').then( m => m.SelectAcPageModule)
  },
  {
    path: 'test-remote',
    loadChildren: () => import('./test-remote/test-remote.module').then( m => m.TestRemotePageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'remote-control-cool',
    loadChildren: () => import('./remote-control-cool/remote-control-cool.module').then( m => m.RemoteControlCoolPageModule)
  },
  {
    path: 'remote-control-dry',
    loadChildren: () => import('./remote-control-dry/remote-control-dry.module').then( m => m.RemoteControlDryPageModule)
  },
  {
    path: 'remote-control-heat',
    loadChildren: () => import('./remote-control-heat/remote-control-heat.module').then( m => m.RemoteControlHeatPageModule)
  },
  {
    path: 'remote-control-coolwith-ai',
    loadChildren: () => import('./remote-control-coolwith-ai/remote-control-coolwith-ai.module').then( m => m.RemoteControlCoolwithAiPageModule)
  },
  {
    path: 'circle-slide',
    loadChildren: () => import('./circle-slide/circle-slide.module').then( m => m.CircleSlidePageModule)
  },  {
    path: 'geo-fence',
    loadChildren: () => import('./geo-fence/geo-fence.module').then( m => m.GeoFencePageModule)
  },
  {
    path: 'geo-fence-detail',
    loadChildren: () => import('./geo-fence-detail/geo-fence-detail.module').then( m => m.GeoFenceDetailPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
