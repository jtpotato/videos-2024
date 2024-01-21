import { makeScene2D } from "@motion-canvas/2d";

import { createRef, createRefMap, waitFor } from "@motion-canvas/core";

import { PointCloud, cascade } from "concise-motion-core"

const genshinColors = {
  pyro: '#ff0000',
  hydro: '#0000ff',
  anemo: '#00ddaa',
  electro: '#aa00ff',
  dendro: '#00aa00',
  cryo: '#00aaff',
  geo: '#ffaa00',
}

export default makeScene2D(function* (view) {
  view.fill('black')

  const pointCloudRefMap = createRefMap<PointCloud>()

  view.add(<>
    <PointCloud ref={pointCloudRefMap.pyro} label={"Pyro"} radius={100} color={genshinColors.pyro} x={300} y={100} />
    <PointCloud ref={pointCloudRefMap.hydro} label={"Hydro"} radius={100} color={genshinColors.hydro} x={-300} y={200} />
    <PointCloud ref={pointCloudRefMap.anemo} label={"Anemo"} radius={100} color={genshinColors.anemo} x={600} y={-200} />
    <PointCloud ref={pointCloudRefMap.electro} label={"Electro"} radius={100} color={genshinColors.electro} x={400} y={-100} />
    <PointCloud ref={pointCloudRefMap.dendro} label={"Dendro"} radius={100} color={genshinColors.dendro} x={-200} y={400} />
    <PointCloud ref={pointCloudRefMap.cryo} label={"Cryo"} radius={100} color={genshinColors.cryo} x={-600} y={0} />
    <PointCloud ref={pointCloudRefMap.geo} label={"Geo"} radius={100} color={genshinColors.geo} />
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

  yield* waitFor(1)

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