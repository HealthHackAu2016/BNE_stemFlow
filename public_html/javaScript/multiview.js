/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Call with the id of te element within which we want to create it
var multiview = function (divID) {
    var options = setup_data("#" + divID);
    //  init(options);
//    var name = divID + "-wrapper";
//    var name_html_search = "#" + name;
    var scale_x = 0.3;
    var scale_y = 0.3;
    
   // options.scale_x = scale_x;
  //  options.scale_y = scale_y;
    
   var menu = define_menu();
//    var listSVG = d3.select("#" + name)
//            .append('svg')
//            .attr('id', 'listSVG');
//
//    var gSVG = listSVG.append("g")
//            .attr("id", name)
//            .attr("transform", "scale(" + scale_x + "," + scale_y + ")")
//            .on("contextmenu", d3.contextMenu(menu));

    //gSVG.append('svg').attr('id', name);
    // inject SVG graph into dom elemenet
    init(options, scale_x, scale_y, menu);


}