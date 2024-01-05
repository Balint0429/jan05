import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegyedikComponent } from './negyedik.component';

describe('NegyedikComponent', () => {
  let component: NegyedikComponent;
  let fixture: ComponentFixture<NegyedikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegyedikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NegyedikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
