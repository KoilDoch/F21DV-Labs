// size variables
var width = 400, height = 400; 
 
// setup svg 
d3.select('body').append('svg').attr('width',width).attr('height',height); 
 
// get data
const dataset = d3.csv("Lab2/csv/years.csv");
dataset.then((data) => {
    // create colours
    var cols = d3.scaleOrdinal().domain([1,data.length]).range(d3.schemeSet1);

    // create the simulation and set up options
    var simulation = d3.forceSimulation(data) 
    .force('charge', d3.forceManyBody().strength(5)) 
    .force('center', d3.forceCenter(width / 2, height / 2)) 
    .force('collision', d3.forceCollide().radius(function(d) { 
        return d.value;     // updated from d.radius due to data set not containing that field
    })) 
    .on('tick', ticked); 


    function ticked() { 
    var u = d3.select('svg') 
    .selectAll('circle') 
    .data(data) 
    .join('circle') 
    .attr('fill', (d,i) => cols(i))     // set colors according to index
    .attr('r', function(d) { 
    return d.value; 
    }) 
    .attr('cx', function(d) { 
    return d.x 
    }) 
    .attr('cy', function(d) { 
    return d.y 
    }) 
    } 
    console.log('ready..'); 


});