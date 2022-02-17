d3.select('body') 
  .append("div") 
  .style('width',  '100px') 
  .style('height', '100px') 
  .style('background-color', 'blue') 
  .transition() 
  .duration(1000)   // one second to transition to red
  .style("background-color", "red")
  .transition() 
  .duration(1000)   // one second to transition to green
  .style("background-color", "green");