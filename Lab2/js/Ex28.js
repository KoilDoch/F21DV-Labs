// size variables
var width = 400, height = 400; 
var simulation;
 
// setup svg 
d3.select('body').append('svg').attr('width',width).attr('height',height); 
 
// get data
const dataset = d3.csv("Lab2/csv/years.csv");
dataset.then((data) => {
    var nodes = data.map((d) =>{
        return {
            year: +d.year,
            val: Math.floor(d.value)
        }});

    // create colours
    var cols = d3.scaleOrdinal().domain([1,nodes.length]).range(d3.schemeSet1);

    // create the simulation and set up options
    simulation = d3.forceSimulation(nodes) 
    .force('charge', d3.forceManyBody().strength(5)) 
    .force('center', d3.forceCenter(width / 2, height / 2)) 
    .force('collision', d3.forceCollide().radius(function(d) { 
        return d.val;     // updated from d.radius due to data set not containing that field
    })) 
    .on('tick', ticked); 


    function ticked() { 
    var u = d3.select('svg') 
    .selectAll('circle') 
    .data(nodes) 
    .join('circle') 
    .attr('fill', (d,i) => cols(i))     // set colors according to index
    .attr('r', function(d) { 
    return d.val; 
    }) 
    .attr('cx', function(d) { 
    return d.x 
    }) 
    .attr('cy', function(d) { 
    return d.y 
    })
    .on("mouseover", displayValue) 
    .on("mouseout", hideValue)
    } 
    console.log('ready..'); 
});

// displays the value when hovering over the bar
function displayValue(d, i){
    //display the value
    d3.select("svg").append("text") 
        .attr('class', 'val')  
        .attr('x', () => i.x)
        .attr('y', () => i.y)
        .attr("font-size", "12px")
        .text( function(d) { return i.val; } ); // Value of the text 
    
    d3.select(this)
        .attr("class", "highlight");
}

function hideValue(){
    d3.selectAll(".val").remove();
    d3.select(this).attr("class", "node");
}