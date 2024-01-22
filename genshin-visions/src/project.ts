import { makeProject } from "@motion-canvas/core";
// @ts-expect-error
import audio from "../../../../Movies/Projects/genshin-visions/Audio Timeline.m4a";

import wait from "./scenes/wait?scene";
import vision_graph from "./scenes/vision_graph?scene";
import new_vision_grant from "./scenes/new_vision_grant?scene";
import whats_a_personality from "./scenes/whats_a_personality?scene";
import unified_framework from "./scenes/unified_framework?scene";
import grading_system from "./scenes/grading_system?scene";
import grade_array from "./scenes/grade_array?scene";
import pythag_explainer from "./scenes/pythag_explainer?scene";
import distance_demo from "./scenes/distance_demo?scene";
import vision_choosing from "./scenes/vision_choosing?scene";

export default makeProject({
  scenes: [
    wait,
    vision_graph,
    new_vision_grant,
    whats_a_personality,
    unified_framework,
    grading_system,
    grade_array,
    pythag_explainer,
    distance_demo,
    vision_choosing
  ],
  audio: audio,
});
