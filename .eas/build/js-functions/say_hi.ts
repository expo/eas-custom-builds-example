import { EasFunctionCtx } from "@expo/eas-steps"
// or maybe separate package
// import { EasFunctionCtx } from "@expo/eas-custom-build" or sth like that

export default function(ctx: EasFunctionCtx, inputs: { name: string }) {
  console.log(input)
}
