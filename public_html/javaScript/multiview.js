/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Call with the id of te element within which we want to create it
var multiview = function (divID) {
    // options = setup_data(divID);
    //  init(options);
    var name = divID + "-wrapper";
    var name_html_search = "#" + divID;
    var width = 1
    var height = 1
    var scale_x = 0.33
    var scale_y = 0.33

    var listSVG = d3.select(divID)
            .append('svg')
            .attr('id', 'listSVG')
            .attr('height', '1000px')
            .attr('width', '1000px')


    var svgTranslate = `
            scale(${scale_x}, ${scale_y})
            `

    var gSVG = d3.select('#listSVG').append("g")
    .attr("transform", svgTranslate)

    // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(function() {
    //
    // })
    gSVG.append('svg').attr('id', name)
    // inject SVG graph into dom elemenet
    init(setup_data(name_html_search));

}

