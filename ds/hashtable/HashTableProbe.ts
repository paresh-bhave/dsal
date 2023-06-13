/**
 * Base class for HashTable implementation with Open Addressing Techniques
 */

import { HashTable } from "./HashTable";

class HashTableProbe<K, V> extends HashTable<K, V> {
  private table: Array<[K, V | undefined]>;
  private quadratic: boolean;

  constructor(size: number = 10, quadratic: boolean = false) {
    super(size);
    this.table = new Array(size);
    this.size = size;
    this.quadratic = quadratic;
  }

  get(key: K): V | undefined {
    let index = this.hash(key);
    let count = 0;
    while(this.table[index] !== undefined) {
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
      index = this.next(index, count);
      count++;
    }
    return;
  }

  set(key: K, value: V): void {
    let index = this.hash(key);
    let count = 0;

    while (this.table[index] !== undefined && count < this.size) {
      if (this.table[index] && this.table[index][0] === key) {
        // Key already exists, update the value
        this.table[index][1] = value;
        return;
      }

      // Linear probing: move to the next slot
      index = this.next(index, count);
      count++;
    }

    // Check if the HashTable is full
    if (count === this.size) {
      console.log("[ERR] HashTable is full, cannot insert more elements.")
      return;
    }

    // Insert the key-value pair
    this.table[index] = [key, value];
  }

  delete(key: K): void {
    let index = this.hash(key);
    let count = 0;

    while (this.table[index] !== undefined && count < this.size) {
      if (this.table[index] && this.table[index][0] === key) {
        this.table[index] = undefined!;
        break;
      }
      index = this.next(index, count);
      count++;
    }
  }

  keys(): K[] {
    return this.table.filter((pair) => pair !== undefined).map((pair) => pair[0]);
  }

  values(): V[] {
    return this.table.filter((pair) => pair !== undefined).map((pair) => pair[1] as V);
  }

  private next(index: number, count: number): number {
    return this.quadratic ? 
      (index + Math.pow(count, 2)) % this.size :
      (index + 1) % this.size;
  }

  print() {
    console.log(this.table);
  }
}

export default HashTableProbe;