/**************/
/* EXERCISE 6 */
/**************/
let data =  [ {name:'test', color: "red", val:1}, 
        {name:'other', color: "blue", val:2},
        {name:'b', color: "yellow", val:3} ];

let paragraph = d3.select('body')
    .selectAll('div')
    .data(data)
    .enter()
    .append("text")
    .text((d,i) => {
        console.log("d.name:" + d.name);
        console.log("d.color: " + d.color);
        console.log("d.val:" + d.val);
        console.log("i:" + i);
        console.log("this: " + this);

        return 'cont:' + d.name + " is " + d.color + " ";    // return value is used to set the 'text'
    });