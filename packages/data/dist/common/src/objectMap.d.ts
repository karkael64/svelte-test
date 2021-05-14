declare type KeyOf<T, K> = T extends Record<infer U, any> ? U : K;
declare type ValueOf<T, V> = T extends Record<any, infer U> ? U : V;
export default function objectMap<OutEach extends any, Key extends string | number | symbol, Value extends any>(object: Record<Key, Value>, fn: (item: Value, key: keyof Key, object: Record<Key, Value>) => OutEach, thisArg?: any): Record<Key, OutEach>;
declare global {
    interface Object {
        map<OutEach extends any, Input extends Record<any, any> = this, Value = Input[keyof Input], Key extends string | number | symbol = keyof Input>(fn: (item: ValueOf<Input, Value>, key: KeyOf<Input, Key>, object: this) => OutEach, thisArg?: any): Record<KeyOf<Input, Key>, OutEach>;
    }
}
export {};