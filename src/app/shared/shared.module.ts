import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

import { MaterialModule } from '../material/material.module';
import { ShareButtonComponent } from './share-button/share-button.component';
import { SearchComponent } from './search/search.component';
import { StopPropagationDirective } from './click-stop.directive';

@NgModule({
  declarations: [ShareButtonComponent, SearchComponent, StopPropagationDirective],
  imports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule, FontAwesomeModule],
  exports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule, FontAwesomeModule, ShareButtonComponent, StopPropagationDirective]
})
export class SharedModule {}
