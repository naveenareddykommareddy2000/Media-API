import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaDialogComponent } from './media-dialog.component';

describe('MediaDialogComponent', () => {
  let component: MediaDialogComponent;
  let fixture: ComponentFixture<MediaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaDialogComponent]
    });
    fixture = TestBed.createComponent(MediaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
