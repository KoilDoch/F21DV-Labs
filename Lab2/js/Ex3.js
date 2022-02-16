d3.select('body') 
      .append('div') 
      .style('width', '100px') 
      .style('height', '20px') 
      .style('background-color', 'green'); 
 
    d3.selectAll("div") 
      .on("mouseover", function(event){ 
          d3.select(this) 
            .style("background-color", "orange")
            .style("border-style", "dotted")    // change style
            .style("transform-origin", "top left")  // set origin then scale 2x
            .style("transform", "scale(2)");                                                        6 
          // Get current event info 
          // Note: d3.event  (event) passed as the first argument to all listeners 
          console.log(event); 
 
          // Get x & y co-ordinates 
          // Note: d3.mouse was removed in d3v6, you should use d3.pointer(event) 
          console.log(d3.pointer(event)); 
      }) 
      .on("mouseout", function(){ 
          d3.select(this) 
            .style("background-color", "steelblue") 
            .style("border-style", "none");     // reset border style
      }); 