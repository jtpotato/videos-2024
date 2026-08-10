import { makeScene2D } from "@motion-canvas/2d";

import { createRef, createRefMap, waitFor, waitUntil } from "@motion-canvas/core";

import { PointCloud, cascade } from "concise-motion-core"
import { genshinColors } from "../constants";

export default makeScene2D(function* (view) {
  view.fill('black')

  const pointCloudRefMap = createRefMap<PointCloud>()

  view.add(<>
    <PointCloud ref={pointCloudRefMap.pyro} label={"Pyro"} radius={200} color={genshinColors.pyro} x={-660} y={-400} />
    <PointCloud ref={pointCloudRefMap.hydro} label={"Hydro"} radius={200} color={genshinColors.hydro} x={-300} y={200} />
    <PointCloud ref={pointCloudRefMap.anemo} label={"Anemo"} radius={200} color={genshinColors.anemo} x={600} y={-200} />
    <PointCloud ref={pointCloudRefMap.electro} label={"Electro"} radius={200} color={genshinColors.electro} x={-100} y={-300} />
    <PointCloud ref={pointCloudRefMap.dendro} label={"Dendro"} radius={200} color={genshinColors.dendro} x={600} y={300} />
    <PointCloud ref={pointCloudRefMap.cryo} label={"Cryo"} radius={200} color={genshinColors.cryo} x={-600} y={0} />
    <PointCloud ref={pointCloudRefMap.geo} label={"Geo"} radius={200} color={genshinColors.geo} x={200} y={0} />
  </>)

  yield* cascade(0.1,
    pointCloudRefMap.pyro().show(),
    pointCloudRefMap.hydro().show(),
    pointCloudRefMap.anemo().show(),
    pointCloudRefMap.electro().show(),
    pointCloudRefMap.dendro().show(),
    pointCloudRefMap.cryo().show(),
    pointCloudRefMap.geo().show(),
  )

  yield* waitUntil("beginHide")

  yield* cascade(0.1,
    pointCloudRefMap.pyro().hide(),
    pointCloudRefMap.hydro().hide(),
    pointCloudRefMap.anemo().hide(),
    pointCloudRefMap.electro().hide(),
    pointCloudRefMap.dendro().hide(),
    pointCloudRefMap.cryo().hide(),
    pointCloudRefMap.geo().hide(),
  )
})