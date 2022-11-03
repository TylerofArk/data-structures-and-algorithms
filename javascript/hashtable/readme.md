# Hashtables

* Code Challenge Class 30: Hash Table Implementation
* Author: Tyler Main
* Credits: Luis Rosales


## Challenge

### Implement a Hashtable Class with the following methods:

* set
  * Arguments: key, value
  * Returns: nothing
  * This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  * Should a given key already exist, replace its value from the value argument given to this method.

* get
  * Arguments: key
  * Returns: Value associated with that key in the table

* has
  * Arguments: key
  * Returns: Boolean, indicating if the key exists in the table already.

* keys
  * Returns: Collection of keys

* hash
  * Arguments: key
  * Returns: Index in the collection for that key

## Approach & Efficiency

* Efficiency
  * Time:
    * The big O of time will be O(1)

  * Space:
    * The big O of space will be `O(n)`

## API

* `set(key, value)`: This method takes in the parameters key and value to insert a new item into a data structure

* `get(key)`: This method takes in a key and returns the value of the key if it is contained within the hashtable. If the key is not contained in the hashtable, this will return `null`

* `has(key)`: This method takes in a key and returns a boolean triggered when the passed key is or is not contained within the hastable

* `keys()`: This method returns all hashtable keys if there are keys within the hashtable

* `hash(key)`: This method takes in a key and will return a hashed value

