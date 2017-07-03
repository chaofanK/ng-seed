import { NgModule } from '@angular/core';
import { MdToolbarModule, MdSidenavModule, MdListModule, MdIconModule, MdButtonModule } from '@angular/material';

@NgModule({
    imports: [MdToolbarModule, MdSidenavModule, MdListModule, MdIconModule, MdButtonModule],
    exports: [MdToolbarModule, MdSidenavModule, MdListModule, MdIconModule, MdButtonModule]
})
export class AppMaterialModule { }
