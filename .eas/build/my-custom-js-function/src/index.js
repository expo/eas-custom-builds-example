function myCustomJsFunction(ctx, { inputs }) {
  ctx.logger.info('Running my custom JS function');
  ctx.logger.info(`Hello, ${inputs.name.value}!}`);
  ctx.logger.info(`Your number is ${inputs.num.value}`);
  ctx.logger.info(`Your object is ${JSON.stringify(inputs.obj.value)}`);
  ctx.logger.info('Done running my custom JS function');
}

export default myCustomJsFunction;
