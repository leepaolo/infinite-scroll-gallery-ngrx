import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveLinkDirective } from './directives/active-link.directive';

@NgModule({
  declarations: [ActiveLinkDirective],
  imports: [CommonModule],
  exports: [ActiveLinkDirective],
})
export class SharedModule {}
