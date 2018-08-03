var name=localStorage.getItem("result");

var price=localStorage.getItem("fprice");

var Total = localStorage.getItem("total");
console.log(Total);
let totaldata ='<td colspan="3">Total</td><td>'+Total+'</td>';
name+=totaldata;
console.log(name)
document.getElementById("content").innerHTML=name;
//document.getElementById("total").innerHTML=Total;

