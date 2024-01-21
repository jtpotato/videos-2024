import { Txt, makeScene2D } from "@motion-canvas/2d";

import { createRef, createRefMap, waitFor, waitUntil } from "@motion-canvas/core";
import { Spawner, fadeInFrom, fadeOut, fadeToPos, shapeDefaults, textDefaults } from "concise-motion-core";

export default makeScene2D(function* (view) {
  view.fill('black')

  const textRefMap = createRefMap<Txt>()
  const spawnerRef = createRef<Spawner>()

  view.add(<>
    <Txt text={"Personality?"} ref={textRefMap.personality} {...textDefaults} />
    <Spawner ref={spawnerRef} radius={400}>
      <Txt text="Factors?" {...textDefaults} />
      <Txt text="Energy?" {...textDefaults} />
      <Txt text="MBTI?" {...textDefaults} />
      <Txt text="Tragic backstory?" {...textDefaults} />
      <Txt text="Braincells?" {...textDefaults} />
    </Spawner>
  </>)

  yield* fadeToPos(textRefMap.personality, [0, 0])
  yield* waitUntil("trigger1")
  yield* spawnerRef().displayNext()
  yield* waitUntil("beginDisplayingFactors")
  yield* spawnerRef().displayNext()
  yield* spawnerRef().displayNext()
  yield* spawnerRef().displayNext()
  yield* spawnerRef().displayNext()

  yield* spawnerRef().collapseChildren()
  yield* fadeOut(textRefMap.personality)
})