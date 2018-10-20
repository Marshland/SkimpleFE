import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { ShareButtonComponent } from './share-button/share-button.component';
import { SearchComponent } from './search/search.component';
import { StopPropagationDirective } from './click-stop.directive';

@NgModule({
  declarations: [ShareButtonComponent, SearchComponent, StopPropagationDirective],
  imports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule],
  exports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule, ShareButtonComponent, StopPropagationDirective]
})
export class SharedModule {}
