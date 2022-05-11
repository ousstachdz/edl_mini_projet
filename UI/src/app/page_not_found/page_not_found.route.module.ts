import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page_not_foundComponent } from './page_not_found.component';

const routes : Routes = [{
    path: '',
    component: Page_not_foundComponent
}]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class Page_not_foundRouteModule{}