import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicFormDialogComponent } from './music-form-dialog.component';

describe('MusicFormDialogComponent', () => {
  let component: MusicFormDialogComponent;
  let fixture: ComponentFixture<MusicFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
