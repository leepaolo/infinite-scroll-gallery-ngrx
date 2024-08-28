import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a loading spinner', () => {
    const spinnerElement = fixture.nativeElement.querySelector('.spinner');
    expect(spinnerElement).toBeTruthy();
  });

  it('should have a default loading message', () => {
    const messageElement = fixture.nativeElement.querySelector('.message');
    expect(messageElement.textContent).toContain('Loading...');
  });

  it('should display a custom loading message', () => {
    component.loadingMessage = 'Please wait';
    fixture.detectChanges();
    const messageElement = fixture.nativeElement.querySelector('.message');
    expect(messageElement.textContent).toContain('Please wait');
  });
});
