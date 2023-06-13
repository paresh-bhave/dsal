/**
 * HashTable Implementation with Double Hashing
 */

class HashTable<K, V> {
  private table: Array<[K, V] | undefined>;
  private size: number;
  private prime: number;

  constructor(size: number = 10) {
    this.table = new Array(size);
    this.size = size;
    this.prime = this.getPrime(size);
  }

  // Generate the hash code for a given key
  private hash(key: K): number {
    const keyString = String(key);
    let hash = 0;
    for (let i = 0; i < keyString.length; i++) {
      hash += keyString.charCodeAt(i);
    }
    return hash;
  }

  // Get the next prime number greater than the given number
  private getPrime(num: number): number {
    while (!this.isPrime(num)) {
      num++;
    }
    return num;
  }

  // Check if the given number is prime
  private isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i = i + 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }

  // Get the secondary hash value
  private secondaryHash(key: K, attempt: number): number {
    const hash = this.hash(key);
    return attempt * (this.prime - (hash % this.prime));
  }

  // Insert a key-value pair into the HashTable
  insert(key: K, value: V): void {
    let attempt = 0;
    let index = this.hash(key) % this.size;

    while (this.table[index] !== undefined) {
      // Key already exists, update the value
      if (this.table[index] && this.table[index]![0] === key) {
        this.table[index]![1] = value;
        return;
      }

      // Linear probing with double hashing: move to the next slot
      attempt++;
      index = (index + this.secondaryHash(key, attempt)) % this.size;
    }

    // Insert the key-value pair
    this.table[index] = [key, value];
  }

  // Remove a key-value pair from the HashTable
  remove(key: K): void {
    let attempt = 0;
    let index = this.hash(key) % this.size;

    while (this.table[index] !== undefined) {
      // Key found, remove the pair
      if (this.table[index] && this.table[index]![0] === key) {
        this.table[index] = undefined;
        return;
      }

      // Linear probing with double hashing: move to the next slot
      attempt++;
      index = (index + this.secondaryHash(key, attempt)) % this.size;
    }
  }

  // Get the value associated with a key
  get(key: K): V | undefined {
    let attempt = 0;
    let index = this.hash(key) % this.size;

    while (this.table[index] !== undefined) {
      // Key found, return the value
      if (this.table[index] && this.table[index]![0] === key) {
        return this.table[index]![1];
      }

      // Linear probing with double hashing: move to the next slot
      attempt++;
      index = (index + this.secondaryHash(key, attempt)) % this.size;
    }

    return undefined; // Key not found
  }

  // Check if a key exists in the HashTable
  contains(key: K): boolean {
    return this.get(key) !== undefined;
  }

  // Get all the keys in the HashTable
  keys(): K[] {
    return this.table
      .filter(pair => pair !== undefined)
      .map(pair => pair![0]);
  }

  // Get all the values in the HashTable
  values(): V[] {
    return this.table
      .filter(pair => pair !== undefined)
      .map(pair => pair![1]);
  }
}
