// height values
const width = 100;
const height = 100;

// creates a new div with a given ease
function newDiv(ease) {
    d3.select('body') 
        .append("div") 
        .style('width',  width+"px") 
        .style('height', height+"px") 
        .style('background-color', 'blue') 
        .transition() 
        .ease(ease)
        .duration(1000)   // one second to transition to red and half in size
        .style("background-color", "red")
        .style("width", width/2+"px")
        .style("height", height/2+"px")
        .transition() 
        .ease(ease)
        .duration(1000)   // one second to transition to green and return to original size
        .style("background-color", "green")
        .style('width',  width+"px") 
        .style('height', height+"px");
}

// create 3 divs
newDiv(d3.easeElastic);
newDiv(d3.easeSin);
newDiv(d3.easeExp);

