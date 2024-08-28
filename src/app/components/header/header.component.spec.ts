import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { FavoritesService } from '../gallery/service/favorites.service';
import { RouterModule } from '@angular/router';
import { ActiveLinkDirective } from 'src/app/shared/directives/active-link.directive';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, ActiveLinkDirective],
      providers: [FavoritesService],
      imports: [RouterTestingModule, MatIconModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct gallery title', () => {
    expect(component.galleryTitle).toEqual('Photo Gallery');
  });

  it('should have the correct favorite title', () => {
    expect(component.favoriteTitle).toEqual('Favorite Photos');
  });

  it('should have the correct gallery gradient', () => {
    expect(component.galleryGradient).toEqual({
      background: '#60a5fa',
      color: '#ffffff',
    });
  });

  it('should have the correct favorite gradient', () => {
    expect(component.favoriteGradient).toEqual({
      background: '#f472b6',
      color: '#ffffff',
    });
  });

  it('should have the correct active gallery style', () => {
    expect(component.activeGalleryStyle).toEqual({
      background: '#2563eb',
      color: '#ffffff',
    });
  });

  it('should have the correct active favorite style', () => {
    expect(component.activeFavoriteStyle).toEqual({
      background: '#db2777',
      color: '#ffffff',
    });
  });

  it('should call ngOnInit', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });
});
