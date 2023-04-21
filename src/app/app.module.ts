import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { PortfolioElementComponent } from './portfolio-element/portfolio-element.component';
import { ImprintComponent } from './imprint/imprint.component';
import { EmailSuccesComponent } from './email-succes/email-succes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutmeComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    MyskillsComponent,
    PortfolioElementComponent,
    ImprintComponent,
    EmailSuccesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
