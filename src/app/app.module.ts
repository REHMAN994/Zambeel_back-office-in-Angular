import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogModule} from '@angular/cdk/dialog';
import { FullDataEmpComponent } from './full-data-emp/full-data-emp.component';
import { FullDataCustomerComponent } from './full-data-customer/full-data-customer.component';
import {
  MatSlideToggleModule,
  _MatSlideToggleRequiredValidatorModule,
} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    DialogModule,
    MatSlideToggleModule,
    _MatSlideToggleRequiredValidatorModule,
    MatExpansionModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    NewCustomerComponent,
    FullDataEmpComponent,
    FullDataCustomerComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
