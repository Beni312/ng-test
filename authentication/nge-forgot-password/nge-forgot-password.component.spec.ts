import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgeForgotPasswordComponent } from './nge-forgot-password.component';

describe('NgeForgotPasswordComponent', () => {
  let component: NgeForgotPasswordComponent;
  let fixture: ComponentFixture<NgeForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgeForgotPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgeForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
