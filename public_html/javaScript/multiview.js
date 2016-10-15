/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//var setup_multiview = function()
//Call with the id of te element within which we want to create it
var multiview = function (divID, numRows, numCols) {
    var name = "#" + divID;

    var scaleX = 0.3;
    var scaleY = 0.3;
    var height = 400;
    var width = 600;
    var full_height = 400 * numRows;
    var full_width = 600 * numCols;
    var margin = {top: 50, left: 100, bottom: 20, right: 20};
    // clear out html
    $(name)
            .html('')
            .css('width', full_width + 'px')
            .css('height', full_height + 'px');

    var svg = d3.select(name).append("svg")
            .attr("width", full_width)
            .attr("height", full_height);

    for (var y = 0; y < numRows; y++) {
        for (var x = 0; x < numCols; x++) {
            var transformX = width * x + margin.left;
            var transformY = height * y + margin.top;
            var group = svg.append("g")
                    // this is just to move the picture down to the right margin length
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")" + " scale(" + scaleX + "," + scaleY + ")")
                    .attr("class", "title")
                    .on('mouseover', function () {
                        var thissvg = d3.select(this);
                        thissvg.attr("transform", "translate(" + transformX + "," + transformY + ")" );
                        console.log("clicked!");
                    })
                     .on('mouseout', function() {
                        var thissvg = d3.select(this);
                        thissvg.attr("transform", "translate(" + -transformX + "," + -transformY + ")" );
                        console.log("clicked!");
                    });
            var options = setup_data(group);
            var groupRet = init(options);
        }
    }
}