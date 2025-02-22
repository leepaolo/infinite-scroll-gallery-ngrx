import { TestBed } from '@angular/core/testing';

import { GalleryService } from './gallery.service';
import { HttpClientModule } from '@angular/common/http';

describe('GalleryService', () => {
  let service: GalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(GalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
