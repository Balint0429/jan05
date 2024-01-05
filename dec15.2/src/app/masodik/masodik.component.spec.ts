import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasodikComponent } from './masodik.component';

describe('MasodikComponent', () => {
  let component: MasodikComponent;
  let fixture: ComponentFixture<MasodikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasodikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasodikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
