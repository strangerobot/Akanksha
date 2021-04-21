
var count=1;
function preload() {
  table = loadTable("text.csv", 'csv', 'header');

}

function setup() {
  if(table!=null)
  {
    count=table.getRowCount();
  }
  var current=int(random(0,count));
 print(count);
 document.getElementById("text").innerHTML = table.getString(current, 0);

;
}

function shownext()
{

var current=int(random(0,count));
print(current);
document.getElementById("text").innerHTML = table.getString(current, 0)
document.getElementById("text").style.filter= "blur(0px)";
document.getElementById("text").style.color="#58575fb3";

}

function blurtext()
{
  print("mouseover")
document.getElementById("text").style.filter= "blur(1px)";

}

function blurtextmore()
{
  print("mouseover")
document.getElementById("text").style.filter= "blur(6px)";
document.getElementById("text").style.color="#ffffff69";

}
