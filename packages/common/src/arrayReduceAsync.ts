export default async function arrayReduceAsync<
  Item extends any,
  Result extends any
>(
  list: Item[],
  each: (
    accumulator: Result,
    value: Item,
    index: number,
    array: Item[]
  ) => Promise<Result>,
  accumulator?: Result,
  thisArgs?: any
) {
  let result = accumulator;
  for (const key in list) {
    const index = parseInt(key);
    if (index === 0 && accumulator === undefined) {
      result = list[key] as Result;
      break;
    }
    result = await each.call(
      thisArgs,
      result as Result,
      list[key],
      index,
      list
    );
  }
  return result as Result;
}
