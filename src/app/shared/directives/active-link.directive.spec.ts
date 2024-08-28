import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActiveLinkDirective } from './active-link.directive';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, NavigationEnd } from '@angular/router';
import { Component, ContentChild, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ActiveLinkDirective', () => {
  let directive: ActiveLinkDirective;
  let fixture: ComponentFixture<any>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveLinkDirective, TestComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(TestComponent);
    directive = fixture.componentInstance.directive;
    router = TestBed.inject(Router);
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create an instance', () => {
    const d = fixture.debugElement.query(By.directive(ActiveLinkDirective));
    expect(d).toBeTruthy();
  });
});

@Component({
  template: `
    <a
      [appActiveLink]="{
        activeStyle: { color: 'blue' },
        inactiveStyle: { color: 'gray' }
      }"
      routerLink="/home"
      >Home</a
    >
  `,
})
class TestComponent {
  @ContentChild(ActiveLinkDirective)
  directive!: ActiveLinkDirective;
}
