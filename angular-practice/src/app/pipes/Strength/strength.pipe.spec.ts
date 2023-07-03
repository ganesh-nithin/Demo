import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  let pipe: StrengthPipe;

  beforeEach(() => {
    pipe = new StrengthPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display weak if 5 value is passed', () => {
    expect(pipe.transform(5)).toContain('weak');
  });

  it('should display moderate if 10 value is passed', () => {
    expect(pipe.transform(10)).toContain('moderate');
  });

  it('should display strong if 20 value is passed', () => {
    expect(pipe.transform(20)).toContain('strong');
  });
});
