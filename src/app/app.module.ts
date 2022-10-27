import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBoardViewComponent } from './pages/main-board-view/main-board-view.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

  // Material cdk modules
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    MainBoardViewComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Material cdk modules
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
