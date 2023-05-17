import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from "@angular/router";
import { surveyModalComponent } from './survey-modal/survey-modal.component'


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        surveyModalComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ]
})
export class ComponentSharedModule { }