import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBoardViewComponent } from './main-board-view.component';

describe('MainBoardViewComponent', () => {
  let component: MainBoardViewComponent;
  let fixture: ComponentFixture<MainBoardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBoardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBoardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
