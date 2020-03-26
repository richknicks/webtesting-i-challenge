module.exports = {
  succeed,
  fail,
  repair,
  get,
};
function succeed(item) {
  const { enhancement } = item;
  if(enhancement < 20 && enhancement > 0) {  
    return { ...item, enhancement: enhancement + 1};
   }  else {
     return { ...item};
   }
}
function fail(item) {
  const { durability, enhancement } = item;
  if(enhancement < 15){
    return { ...item, durability: durability - 5}
  } else if (enhancement > 16){
    return { ...item, durability: durability - 1}
  } else if (enhancement >= 15) {
    return { ...item, durability: durability -10}
  } else {
    return { ...item }
  }
  return { ...item };
}
function repair(item) {
  if(item.durability <= 100 && item.durability > 0) {  
    return { ...item, durability: 100};
   }  else {
     return { ...item};
   }
}
function get(item) {
  if (item.enhancement <= 0) {
    return { ...item }; 
  } else {
    item.name = `[+${item.enhancement}] ${item.name}`;
  }
  return { ...item };
}