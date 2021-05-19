export default function arrayFlat<Type>(list: Type[][], depth?: number): Type[];
declare global {
  interface Array<T> {
    flat<Type>(list: Type[][]): Type[];
  }
}
