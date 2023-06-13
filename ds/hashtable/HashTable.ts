
interface iHashTable<K, V> {
  set(key: K, value: V): void;
  get(key: K): V | undefined;
  delete(key: K): void;
  contains(key: K): boolean; 
  keys(): K[];
  values(): V[];
} 

class HashTable<K, V> implements iHashTable<K, V> {
  protected size: number;

  constructor(size: number = 10) {
    this.size = size;
  }

  // Generate the hash code for a given key
  protected hash(key: K): number {
    const keyString = String(key);
    let hash = 0;
    for (let i = 0; i < keyString.length; i++) {
      hash += keyString.charCodeAt(i);
    }
    return hash % this.size;
  }

  // Check if a key exists in the HashTable
  contains(key: K): boolean {
    return this.get(key) !== undefined;
  }

  set(key: K, value: V): void {}
  get(key: K): V | undefined { return; }
  delete(key: K): void {}
  keys(): K[] { return []; }
  values(): V[] { return []; }
}

export { iHashTable, HashTable }