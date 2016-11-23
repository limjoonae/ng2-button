import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { CustomDisabledDirective } from '../directive/index';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    CustomDisabledDirective
  ]
})
export class ButtonModule { }
