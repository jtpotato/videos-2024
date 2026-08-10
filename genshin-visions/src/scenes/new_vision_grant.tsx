import { Circle, makeScene2D } from "@motion-canvas/2d";

import { createRef, createRefMap, delay, waitFor, waitUntil } from "@motion-canvas/core";
import { PointCloud, cascade, fadeInFrom, fadeOut, shapeDefaults } from "concise-motion-core";
import { genshinColors } from "../constants";

export default makeScene2D(function* (view) {
  view.fill('black')

  const newVisionHolder = createRef<Circle>()
  const pointCloudRefMap = createRefMap<PointCloud>()

  view.add(<>
    <Circle {...shapeDefaults()} ref={newVisionHolder} />
    <PointCloud ref={pointCloudRefMap.dendro} label={"Dendro"} radius={200} color={genshinColors.dendro} x={-700} y={0} />
    <PointCloud ref={pointCloudRefMap.pyro} label={"Pyro"} radius={200} color={genshinColors.pyro} x={-300} y={-400} />
    <PointCloud ref={pointCloudRefMap.hydro} label={"Hydro"} radius={200} color={genshinColors.hydro} x={300} y={-300} />
    <PointCloud ref={pointCloudRefMap.cryo} label={"Cryo"} radius={200} color={genshinColors.cryo} x={630} y={100} />
  </>)

  yield* fadeInFrom("bottom", newVisionHolder, [0, 0])

  yield* cascade(0.8,
    pointCloudRefMap.dendro().show(),
    pointCloudRefMap.pyro().show(),
    pointCloudRefMap.hydro().show(),
    pointCloudRefMap.cryo().show(),
  )

  yield* cascade(0.1,
    newVisionHolder().position([370, 60], 1),
    newVisionHolder().fill(genshinColors.cryo, 1)
  )

  yield* cascade(0.1,
    pointCloudRefMap.dendro().hide(),
    pointCloudRefMap.pyro().hide(),
    pointCloudRefMap.hydro().hide(),
    pointCloudRefMap.cryo().hide(),
    delay(1, fadeOut(newVisionHolder))
  )
})