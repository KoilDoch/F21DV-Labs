// height values
const width = 100;
const height = 100;

d3.select('body') 
  .append("div") 
  .style('width',  width+"px") 
  .style('height', height+"px") 
  .style('background-color', 'blue') 
  .on("mouseover", mouseOver);

// when mouse over
function mouseOver(event) {
  d3.select(this)
    .transition() 
    //.ease(d3.easeBounce)
    .duration(1000)   // one second to transition to red and half in size
    .style("background-color", "red")
    .style("width", width/2+"px")
    .style("height", height/2+"px")
    .transition() 
    //.ease(d3.easeBounce)
    .duration(1000)   // one second to transition to green and return to original size
    .style("background-color", "green")
    .style('width',  width+"px") 
    .style('height', height+"px");

}


