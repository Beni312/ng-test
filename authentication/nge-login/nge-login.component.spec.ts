import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgeLoginComponent } from './nge-login.component';

describe('NgeLoginComponent', () => {
  let component: NgeLoginComponent;
  let fixture: ComponentFixture<NgeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgeLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
