import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CcycleAppSharedModule } from 'app/shared/shared.module';
import { CcycleAppCoreModule } from 'app/core/core.module';
import { CcycleAppAppRoutingModule } from './app-routing.module';
import { CcycleAppHomeModule } from './home/home.module';
import { CcycleAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CcycleAppSharedModule,
    CcycleAppCoreModule,
    CcycleAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CcycleAppEntityModule,
    CcycleAppAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class CcycleAppAppModule {}
