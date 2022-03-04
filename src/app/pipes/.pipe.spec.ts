import { Pipe } from '@angular/core';
import { OrderByPipe } from './.pipe';

describe('Pipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });
});
