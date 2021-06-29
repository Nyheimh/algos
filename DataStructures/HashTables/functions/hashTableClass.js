// methods Set/ Get
        //set
// 1. Accepts a key and a value
// 2. Hash the key
// 3. Stores the key-value pair in the hash table array via separate chaining (nested structure)

        // get
// 1. Accepts a key
// 2. Hashes a key
// 3. Retrieves the key-value pair in the hash table  
// 4. If the key isnt found , returns undefined



class HashTable {
  constructor(size=53){ //how large hash table can be, default number
    this.keyMap = new Array(size); // new map as size and stored as key map
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length; //modding my this.keyMap.length
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    
  }
}
// set
let ht = new HashTable()
ht.set("hello world","goodbye!!")
ht.set("dogs","are good")
ht.set("cats","are ok")
ht.set("i love", "tacos")

//set 
