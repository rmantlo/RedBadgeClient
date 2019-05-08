import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material';
import { MatIconModule} from '@angular/material';
import { MatJumbotronModule } from '@angular-material-extensions/jumbotron';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatJumbotronModule, FlexLayoutModule],
    exports:  [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatJumbotronModule, FlexLayoutModule]
})

export class MaterialModule{}