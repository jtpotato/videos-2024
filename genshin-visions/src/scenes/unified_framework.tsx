import { Txt, makeScene2D } from "@motion-canvas/2d";

import { createRefMap, waitFor, waitUntil } from "@motion-canvas/core";
import { fadeInFrom, fadeOut, textDefaults } from "concise-motion-core";

export default makeScene2D(function* (view) {
  view.fill('black')

  const textRefMap = createRefMap<Txt>()

  view.add(<>
    <Txt text="The Solution:" {...textDefaults} ref={textRefMap.intro} />
    <Txt text="Consistency" {...textDefaults} ref={textRefMap.explainer} />
    <Txt text="A Framework for" {...textDefaults} ref={textRefMap.title} />
    <Txt text="Personality-Based Vision Assignment" {...textDefaults} ref={textRefMap.subtitle} />
  </>)

  yield* fadeInFrom("bottom", textRefMap.intro, [0, -300])
  yield* fadeInFrom("bottom", textRefMap.explainer, [0, -200])
  yield* waitFor(0.5)
  yield* fadeOut(textRefMap.explainer)
  yield* fadeInFrom("bottom", textRefMap.title, [0, -50])
  yield* waitUntil("reveal")
  yield* fadeInFrom("bottom", textRefMap.subtitle, [0, 50])
  yield* waitFor(2)
})