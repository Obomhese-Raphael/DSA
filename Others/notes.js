let map1 = new Map();

map1.set("first name", "Raphael");
map1.set("last name", "Obomhese");
map1
  .set("website", "geeksforgeeks")
  .set("friend 1", "Peter")
  .set("friend 2", "Daniel");

console.log(map1);

console.log("map1 has website ? " + map1.has("website"));

console.log("map1 has friend 3 ? " + map1.has("friend 3"));

console.log("get value for key website " + map1.get("website"));

console.log("get value for key friend 3 " + map1.get("friend 3"));
console.log("delete element with key website " + map1.delete("website"));

console.log("map1 has website ? " + map1.has("website"));

console.log("delete element with key website " + map1.delete("friend 3"));

console.log(map1);
