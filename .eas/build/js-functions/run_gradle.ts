import { EasFunctionCtx } from "@expo/eas-steps"
import spawnAsync from '@expo/spawn-async'

export default function(ctx: EasFunctionCtx, inputs: { name: string }) {
  await spawnAsync('./gradlew')
}
