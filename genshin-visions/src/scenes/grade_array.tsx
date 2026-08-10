import { makeScene2D } from "@motion-canvas/2d";
import { CodeBlock, edit, insert, remove } from "@motion-canvas/2d/lib/components/CodeBlock";

import { createRef, waitFor } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  view.fill('black')

  const codeRef = createRef<CodeBlock>()

  yield view.add(<>
    <CodeBlock language="ts" code="" ref={codeRef} />
  </>)

  yield* codeRef().edit(0.5)`${insert(`const personality =`)}`
  yield* codeRef().edit(2)`const personality =${insert(` [1, 3, 5, 4, 2, 1, 2, 5, 3, 1, 2, 4]`)}`
  yield* waitFor(1)
  yield* codeRef().edit(2)`${edit('const personality = ', 'new Vector12(')}[1, 3, 5, 4, 2, 1, 2, 5, 3, 1, 2, 4]${insert(')')}`
  yield* waitFor(0.5)
  yield* codeRef().edit(1)`${remove(`new Vector12([1, 3, 5, 4, 2, 1, 2, 5, 3, 1, 2, 4])`)}`
})