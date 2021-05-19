declare const _default: {
  Query: {
    groups(): Promise<import("../../../prisma/client").Group[]>;
    group(
      root: any,
      {
        id,
      }: {
        id: any;
      },
      ctx: any,
      info: any
    ): Promise<import("../../../prisma/client").Group>;
  };
};
export default _default;
