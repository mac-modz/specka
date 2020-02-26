import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppbarComponent } from './component/appbar.component';
import { AppbarContainerComponent } from './container/appbar-container.component';

const COMPONENTS = [AppbarComponent, AppbarContainerComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule
    ],
    exports: [COMPONENTS]
})
export class AppbarModule { }
