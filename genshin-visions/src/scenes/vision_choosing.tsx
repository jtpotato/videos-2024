import { Circle, Line, Txt, makeScene2D } from "@motion-canvas/2d";

import { all, createRef, createRefMap, createSignal, waitFor } from "@motion-canvas/core";
import { cascade, fadeOut, fadeToPos, shapeDefaults, textDefaults } from "concise-motion-core";
import { genshinColors } from "../constants";

export default makeScene2D(function* (view) {
  view.fill('black')

  const visionCircles = createRefMap<Circle>()
  const newVisionHolder = createRef<Circle>()
  const distanceFocus = createSignal<[number, number]>([0, 0])
  const distanceLine = createRef<Line>()
  const distanceLabel = createRef<Txt>()

  view.add(<>
    <Circle {...shapeDefaults()} ref={visionCircles.cryo} width={64} height={64} fill={genshinColors.cryo}>
      <Txt text={"Cryo"} {...textDefaults} fontSize={40} y={100} fill={genshinColors.cryo} opacity={1} />
    </Circle>
    <Circle {...shapeDefaults()} ref={visionCircles.hydro} width={64} height={64} fill={genshinColors.hydro}>
      <Txt text={"Hydro"} {...textDefaults} fontSize={40} y={100} fill={genshinColors.hydro} opacity={1} />
    </Circle>
    <Circle {...shapeDefaults()} ref={visionCircles.pyro} width={64} height={64} fill={genshinColors.pyro}>
      <Txt text={"Pyro"} {...textDefaults} fontSize={40} y={100} fill={genshinColors.pyro} opacity={1} />
    </Circle>
    <Circle {...shapeDefaults()} ref={visionCircles.electro} width={64} height={64} fill={genshinColors.electro}>
      <Txt text={"Electro"} {...textDefaults} fontSize={40} y={100} fill={genshinColors.electro} opacity={1} />
    </Circle>
    <Circle {...shapeDefaults()} ref={visionCircles.geo} width={64} height={64} fill={genshinColors.geo}>
      <Txt text={"Geo"} {...textDefaults} fontSize={40} y={100} fill={genshinColors.geo} opacity={1} />
    </Circle>
    <Circle {...shapeDefaults()} width={32} height={32} ref={newVisionHolder}>
      <Txt text={() => `d = ${Math.sqrt((distanceFocus()[0] - 0) ** 2 + (distanceFocus()[1] - 100) ** 2).toFixed(2)}px`} {...textDefaults} fontSize={40} y={100} ref={distanceLabel} fill={"#777"} />
    </Circle>
    <Line points={() => [[0, 100], distanceFocus()]} stroke={"#777"} lineWidth={6} end={0} opacity={0} lineDash={[32, 32]} lineCap={"round"} ref={distanceLine} zIndex={-1}>

    </Line>
  </>)

  yield* cascade(0.1,
    fadeToPos(visionCircles.cryo, [-700, -100]),
    fadeToPos(visionCircles.hydro, [-300, -400]),
    fadeToPos(visionCircles.pyro, [300, -400]),
    fadeToPos(visionCircles.electro, [700, -100]),
    fadeToPos(newVisionHolder, [0, 100]),
  )

  yield* cascade(0.1,
    distanceFocus([-700, -100], 1),
    distanceLine().end(1, 1),
    distanceLine().opacity(1, 1),
    distanceLabel().opacity(1, 1),
  )

  yield* distanceFocus([700, -100], 1)
  yield* distanceFocus([-300, -400], 1)
  yield* distanceFocus([300, -400], 1)

  yield* fadeToPos(visionCircles.geo, [0, 394.25])
  yield* distanceFocus([0, 394.25], 1)

  yield* waitFor(2)

  yield* cascade(0.2,
    fadeOut(visionCircles.pyro),
    fadeOut(visionCircles.hydro),
    fadeOut(visionCircles.cryo),
    fadeOut(visionCircles.electro),
  )

  yield* all(
    visionCircles.geo().scale(2, 1),
    visionCircles.geo().y(-300, 1),
    distanceFocus([0, -300], 1),
  )

  yield* waitFor(2)

  yield* cascade(0.2, fadeOut(distanceLine), fadeOut(distanceLabel), fadeOut(newVisionHolder))
  yield* fadeOut(visionCircles.geo)

  yield* waitFor(1)
})