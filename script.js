
current=2;
var file;
var url;

function preload() {
  table = loadTable("text.csv", 'csv', 'header');

}

function setup() {
  if(table!=null)
  {
    count=table.getRowCount();
  }
  current=int(random(0,count));
 //print(count);
 document.getElementById("text").innerHTML = table.getString(current, 0);

;
}

function shownext()
{

current=int(random(0,count));
//print(current);
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
print(current)
file=current%3+1;
url="audio/"+file+".mp3";
print(url)
new Audio(url).play();


}
