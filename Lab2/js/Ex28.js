// size variables
var width = 400, height = 400; 
 
// setup svg 
d3.select('body').append('svg').attr('width',width).attr('height',height); 
 
// generate some random data 
var numNodes = 100; 
var nodes = d3.range(numNodes).map(function(d) { 
  return {radius: Math.random() * 25} 
}) 

// create colours
var cols = d3.scaleOrdinal().domain([1,numNodes]).range(d3.schemeSet1);
 
// create the simulation and set up options
var simulation = d3.forceSimulation(nodes) 
      .force('charge', d3.forceManyBody().strength(5)) 
      .force('center', d3.forceCenter(width / 2, height / 2)) 
      .force('collision', d3.forceCollide().radius(function(d) { 
          return d.radius 
      })) 
      .on('tick', ticked); 
 

function ticked() { 
  var u = d3.select('svg') 
    .selectAll('circle') 
    .data(nodes) 
    .join('circle') 
    .attr('fill', (d,i) => cols(i))     // set colors according to index
    .attr('r', function(d) { 
      return d.radius 
    }) 
    .attr('cx', function(d) { 
      return d.x 
    }) 
    .attr('cy', function(d) { 
      return d.y 
    }) 
} 
console.log('ready..'); 