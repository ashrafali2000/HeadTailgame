var option = Math.random() * 1;
var check = Math.round(option);
var store = "";
var user1 = prompt("Enter user1 Head/Tail");
var user2 = prompt("Enter user2 Head/Tail");
if (check === 1) {
  store = "head";
}
else {
    store = "tail";
}
if (user1.toLowerCase() === store.toLowerCase()) {
    alert("user1 win the match  !! "+" correct answer is :"+ store);
}
else {
   alert("user2 win the match  !! " +" correct answer is :" +store);
}