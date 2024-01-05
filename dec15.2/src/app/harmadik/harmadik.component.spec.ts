import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmadikComponent } from './harmadik.component';

describe('HarmadikComponent', () => {
  let component: HarmadikComponent;
  let fixture: ComponentFixture<HarmadikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarmadikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarmadikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
