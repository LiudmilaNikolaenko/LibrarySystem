import { TestBed, async } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationComponent
      ],
    }).compileComponents();
  }));
  it('should create the navigation', async(() => {
    const fixture = TestBed.createComponent(NavigationComponent);
    const navigation = fixture.debugElement.componentInstance;
    expect(navigation).toBeTruthy();
  }));
});