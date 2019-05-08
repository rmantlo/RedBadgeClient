import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material';
import { MatIconModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule],
    exports:  [MatButtonModule, MatCheckboxModule, MatIconModule]
})

export class MaterialModule{}