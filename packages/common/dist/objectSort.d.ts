declare type KeyOf<T, K> = T extends Record<infer U, any> ? U : K;
declare type ValueOf<T, V> = T extends Record<any, infer U> ? U : V;
export default function objectSort<T extends Record<any, any>, C = T[keyof T]>(object: T, fn?: (a: any, b: any) => number): T;
declare global {
    interface Object {
        sort<Type extends Record<any, any> = this, Value = Type[keyof Type], Key = keyof Type>(fn?: (item: ValueOf<Type, Value>, key: KeyOf<Type, Key>, object: Type) => any): Type;
    }
}
export {};
