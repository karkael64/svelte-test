export default async function arrayMapAsync<
  Item extends any,
  Result extends any
>(
  list: Item[],
  each: (value: Item, index: number, array: Item[]) => Promise<Result>,
  thisArgs?: any
) {
  const proms = [];
  for (const key in list) {
    proms.push(each.call(thisArgs, list[key], parseInt(key), list));
  }
  return Promise.all(proms) as Promise<Result[]>;
}
