/**
 * HashTable implementation with Separate Chaining:
 */

import { HashTable } from "./HashTable";

class HashTableSC<K, V> extends HashTable<K, V> {
  private table: Array<Array<[K, V]>>;
  private step?: number;

  constructor(size: number = 10) {
    super(size);
    this.table = new Array(size);
  }

  get(key: K): V | undefined {
    const index = this.hash(key);
    if (this.table[index]) {
      const pairs = this.table[index];
      for (let i = 0; i < pairs.length; i++) {
        if (pairs[i][0] === key) {
          return pairs[i][1];
        }
      }
    }
    console.log("[ERR] Key does not exists");
    return;
  }

  set(key: K, value: V): void {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
    // console.log(this.table);
  }

  delete(key: K): void {
    const index = this.hash(key);
    if (this.table[index]) {
      const pairs = this.table[index];
      for (let i = 0; i < pairs.length; i++) {
        if (pairs[i][0] === key) {
          pairs.splice(i, 1);
          break;
        }
      }
    }
  }

  // Get all the keys in the HashTable
  keys(): K[] {
    const keys: K[] = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        const pairs = this.table[i];
        for (let j = 0; j < pairs.length; j++) {
          keys.push(pairs[j][0]);
        }
      }
    }
    return keys;
  }

  // Get all the values in the HashTable
  values(): V[] {
    const values: V[] = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        const pairs = this.table[i];
        for (let j = 0; j < pairs.length; j++) {
          values.push(pairs[j][1]);
        }
      }
    }
    return values;
  }

  contains(key: K): boolean {
    return this.get(key) !== undefined;
  }
}

const ht = new HashTableSC<String, Number>();
ht.set("hello", 20);
ht.set("llohe", 30);
ht.set("loremipsumdolorsitamet", 40);

console.log(ht.get("hello"));
console.log(ht.get("asas"));

ht.delete("loremipsumdolorsitamet");

console.log(ht.keys());
console.log(ht.values());


export default HashTableSC;