import { Latex, Line, Rect, Txt, makeScene2D } from "@motion-canvas/2d";

import { createRef, waitFor } from "@motion-canvas/core";
import { cascade, fadeInFrom, latexDefaults, textDefaults, triangle } from "concise-motion-core";

export default makeScene2D(function* (view) {
  view.fill('black')

  const triangleRef = createRef<Line>()
  const latexRef = createRef<Latex>()
  view.add(<>
    <Rect layout alignItems={"center"} gap={400}>
      <Line {...triangle(3.5, 2)} ref={triangleRef} stroke={"white"} />
      <Latex tex="{\color{white} a^2 + b^2 = c^2}" {...latexDefaults()} ref={latexRef} />
    </Rect>
  </>)

  yield* cascade(1,
    triangleRef().end(1, 2),
    latexRef().opacity(1, 2)
  )
  yield* waitFor(1)

  yield* cascade(1,
    triangleRef().start(1, 2),
    latexRef().opacity(0, 2)
  )

  yield* waitFor(1)
})