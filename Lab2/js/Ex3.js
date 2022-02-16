// default values
const width = 200;
const height = 200;
const radius = 10;

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", '1px solid green');
 
    svg.append("circle")
        .attr("cx", width/2)
        .attr("cy", height/2)
        .attr("r", 10)
        .attr("fill", "red")
        .on("mouseover", function(event){ 
            d3.select(this) 
                // make circle larger
                .attr("r", radius*10);                                                        6 
                // Get current event info 
                // Note: d3.event  (event) passed as the first argument to all listeners 
                console.log(event); 
    
                // Get x & y co-ordinates 
                // Note: d3.mouse was removed in d3v6, you should use d3.pointer(event) 
                console.log(d3.pointer(event)); 
        }) 
        .on("mouseout", function(){ 
            d3.select(this) 
                // change its radius back to default
                .attr("r", radius);   
        }); 