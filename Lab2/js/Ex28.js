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
    .force('center', d3.forceCenter(width / 2, height / 2).strength(0.1)) 
    .force('collision', d3.forceCollide().radius(function(d) { 
        return d.val+5;     // updated from d.radius due to data set not containing that field
    }))
    .on('tick', ticked); 
    console.log('ready..');     

    function ticked() { 
        var u = d3.select('svg') 
        .selectAll('circle') 
        .data(nodes) 
        .join('circle') 
        .on("mouseover", displayValue) 
        .on("mouseout", hideValue)
        .attr("class", "node")
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
        .call(d3.drag()
        .on("start", click)
        .on("drag", dragging)
        .on("end", dragEnded));
    }
    
    // displays the value when hovering over the node
    function displayValue(d, i){
        // show selection before dragging
        d3.select(this)
            .attr("class", "highlight")
            .attr("r", 30);

        //display the value
        d3.select("svg").append("text") 
            .attr('class', 'val')  
            .attr('x', () => i.x)
            .attr('y', () => i.y)
            .attr("font-size", "12px")
            .text( function(d) { return i.val; } ); // Value of the text 
    }
    
    function hideValue(d, i){
        d3.selectAll(".val").remove();
        d3.select(this)
            .attr("class", "node")
            .attr("r", i.val);
    }

    // on a click, adds heat to the simulation and sets its active coords
    function click(event) {
        if (!event.active) 
            simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    // while dragging, node will follow the mouse
    function dragging(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;

        d3.select("#val")
            .attr('x', () => event.x)
            .attr('y', () => event.y)
    }

    // when drag has ended, let simulation alpha drop, remove fx and fy values
    function dragEnded(event) {
        if (!event.active) 
            simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
    }
});