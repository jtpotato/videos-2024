import {makeScene2D} from '@motion-canvas/2d';
import {waitFor, waitUntil} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Create your animations here

  yield* waitFor(0.1);
  yield* waitUntil("endWait")
});
