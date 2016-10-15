/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Call with the id of te element within which we want to create it
var multiview = function (divID) {

    var name = divID + "-wrapper";
    var name_html_search = "#" + name;
    var scale_x = 0.2;
    var scale_y = 0.2;

    var listSVG = d3.select("#" + divID)
            .append('svg')
            .attr('id', 'listSVG');

    var gSVG = listSVG.append("g")
            .attr("id", name)
            .attr("transform", "scale(" + scale_x + "," + scale_y +")");

    //gSVG.append('svg').attr('id', name);
    // inject SVG graph into dom elemenet
    init(setup_data("#" + divID));

}

