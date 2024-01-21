import { Rect, Txt, makeScene2D } from "@motion-canvas/2d";

import { createRef, createRefMap, waitFor } from "@motion-canvas/core";
import { cascade, fadeInFrom, fadeOut, textDefaults } from "concise-motion-core";

export default makeScene2D(function* (view) {
  view.fill('black')

  const textRefMap = createRefMap<Txt>()
  const tableRef = createRef<Rect>()

  view.add(<>
    <Txt text="Grading System..." {...textDefaults} ref={textRefMap.title} />
    <Rect layout ref={tableRef} gap={100} size={[1800, null]} wrap={"wrap"}>
      <Txt text="Mental Stability" {...textDefaults} />
      <Txt text="Misc. MBTI Factors" {...textDefaults} />
      <Txt text="Sacrifice" {...textDefaults} />
      <Txt text="Energy" {...textDefaults} />
      <Txt text="Conflict" {...textDefaults} />
      <Txt text="Self-motivation" {...textDefaults} />
    </Rect>
  </>)

  yield* fadeInFrom("bottom", textRefMap.title, [-650, -400])
  yield* cascade(0.1,
    ...tableRef().children().map((child) => fadeInFrom("bottom", child, [0, -200]))
  )
  yield* cascade(0.1,
    ...tableRef().children().map((child) => fadeOut(child))
  )
})