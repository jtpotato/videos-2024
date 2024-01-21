import {makeProject} from '@motion-canvas/core';

import wait from './scenes/wait?scene';
import vision_graph from './scenes/vision_graph?scene';

export default makeProject({
  scenes: [wait, vision_graph],
});
