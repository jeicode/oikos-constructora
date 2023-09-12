import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from "@angular/router";

@NgModule({
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        HeaderComponent,
        FooterComponent
    ]
})
export class LayoutModule { }