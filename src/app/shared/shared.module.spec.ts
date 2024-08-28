import { TestBed } from '@angular/core/testing';
import { SharedModule } from './shared.module';
import { ActiveLinkDirective } from './directives/active-link.directive';

describe('SharedModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });
  });

  it('should create an instance of SharedModule', () => {
    const module = TestBed.inject(SharedModule);
    expect(module).toBeTruthy();
  });

  it('should export ActiveLinkDirective', () => {
    const directive = TestBed.inject(ActiveLinkDirective);
    expect(directive).toBeTruthy();
  });
});
