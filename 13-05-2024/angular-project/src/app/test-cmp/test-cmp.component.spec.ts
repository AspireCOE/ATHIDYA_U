import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCmpComponent } from './test-cmp.component';

describe('TestCmpComponent', () => {
  let component: TestCmpComponent;
  let fixture: ComponentFixture<TestCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
