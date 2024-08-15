import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { WeatherComponent } from './weather/weather.component';
import { MetarComponent } from './weather/metar/metar.component';
import { TafComponent } from './weather/taf/taf.component';
import { HistoryComponent } from './weather/history/history.component';
import { ErrorMessageComponent } from './shared/components/error-message/error-message.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DateAgoPipe } from './shared/pipes/date-ago.pipe';
import { MatChipsModule } from '@angular/material/chips';
import { LastUpdatedComponent } from './shared/components/last-updated/last-updated.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MetarComponent,
    TafComponent,
    HistoryComponent,
    ErrorMessageComponent,
    DateAgoPipe,
    LastUpdatedComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: '', component: WeatherComponent, pathMatch: 'full' },
      {
        path: 'weather',
        component: WeatherComponent,
        children: [
          { path: 'metar', component: MetarComponent },
          { path: 'taf', component: TafComponent },
        ],
      },
    ]),
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
