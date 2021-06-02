export default async function arrayFilterAsync<Item extends any>(
  list: Item[],
  each: (value: Item, index: number, array: Item[]) => Promise<any>,
  thisArgs?: any
) {
  const proms = [];
  for (const key in list) {
    proms.push([
      each.call(thisArgs, list[key], parseInt(key), list),
      list[key],
    ]);
  }
  const replies = await Promise.all(proms);

  return replies.filter((reply) => reply[0]).map((reply) => reply[1]) as Item[];
}
