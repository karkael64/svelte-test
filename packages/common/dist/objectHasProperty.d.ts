export declare function objectHasPorperty<V extends any, U extends Record<any, any>, K extends string | number | symbol>(object: U, key: K): object is U & Record<K, V>;
export declare function objectHasProperties<T extends Record<K, any>, U extends Record<any, any>, K extends string | number | symbol>(object: U, keys: K[]): object is U & T;
