/**********************/
/* EXERCISE 3 & 4 & 5 */
/**********************/
//Creates 10 div elements
for(let i = 0; i < 10; i++){
    d3.select("body")
        .append("div")
        .text(i)
        .style("color", function(d) {    
            if (i < 5) {return "red"}    // first 5 elements have red text
            else {return "green"}        // last 5 elements have green text
        })
        .attr("id", "div"+i);
}
d3.select("#div0").text("start").style("color", "purple");   // change first element to purple and 'start'