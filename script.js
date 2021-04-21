
var count=1;
function preload() {
  table = loadTable("https://p5js.org/reference/assets/mammals.csv", 'csv', 'header');

}

function setup() {
  if(table!=null)
  {
    count=table.getRowCount();
  }
 print(count);

;
}

function shownext()
{

var current=int(random(0,count));
print(current);
document.getElementById("text").innerHTML = table.getString(current, 1)

}
