import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { EmailSuccesComponent } from './email-succes.component';

describe('EmailSuccesComponent', () => {
  let component: EmailSuccesComponent;
  let fixture: ComponentFixture<EmailSuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSuccesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
