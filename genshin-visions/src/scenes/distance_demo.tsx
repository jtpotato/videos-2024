import { Circle, Line, Txt, makeScene2D } from "@motion-canvas/2d";

import { all, createRef, createRefMap, createSignal, waitFor } from "@motion-canvas/core";
import { cascade, fadeInFrom, fadeOut, fadeToPos, textDefaults } from "concise-motion-core";
import { shapeDefaults } from "concise-motion-core";
import { genshinColors } from "../constants";

function getDistance(x1: number, y1: number, x2: number, y2: number) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2).toFixed(2)
}

export default makeScene2D(function* (view) {
  view.fill('black')

  const circle2Pos = createSignal<[number, number]>([-100, 0])
  const circlesRefMap = createRefMap<Circle>()
  const lineRef = createRef<Line>()
  const distLabel = createRef<Txt>()

  view.add(<>
    <Line points={() => [[-400, 0], circle2Pos()]} stroke={genshinColors.cryo} lineWidth={6} end={0} opacity={0} ref={lineRef} lineDash={[32, 32]} lineCap={"round"} />
    <Circle {...shapeDefaults()} ref={circlesRefMap.circle1} width={32} height={32} />
    <Circle {...shapeDefaults()} ref={circlesRefMap.circle2} width={32} height={32} x={() => circle2Pos()[0]} y={() => circle2Pos()[1]}>
      <Txt text={() => `d = ${getDistance(-400, 0, circle2Pos()[0], circle2Pos()[1])}px`} {...textDefaults} fontSize={40} x={200} ref={distLabel} fill={"#e8d913"} />
    </Circle>
  </>)

  yield* cascade(0.5,
    fadeToPos(circlesRefMap.circle1, [-400, 0]),
    circlesRefMap.circle2().opacity(1, 1),
    circle2Pos([100, 0], 1),
    all(lineRef().end(1, 2), lineRef().opacity(1, 1)),
    distLabel().opacity(1, 1),
  )

  yield* circle2Pos([100, 100], 1)
  yield* circle2Pos([700, 300], 1)
  yield* circle2Pos([-400, -300], 1)
  yield* circle2Pos([-500, 100], 1)
  yield* circle2Pos([300, -500], 1)
  yield* circle2Pos([0, 0], 1)

  yield* cascade(0.5,
    fadeOut(lineRef()),
    distLabel().opacity(0, 1),
    circlesRefMap.circle2().opacity(0, 1),
    circlesRefMap.circle1().opacity(0, 1),
  )
})