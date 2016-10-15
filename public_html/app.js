
import React from "react";
import * as d3 from 'd3';
// import multiview from './javaScript/multiview.js'


const multiview = (divID) => {
    var options = setup_data("#" + divID);
     init(options);
    // var name = divID + "-wrapper";
    // var name_html_search = "#" + name;
   //  var scale_x = 0.3;
   //  var scale_y = 0.3;
   //
   // // options.scale_x = scale_x;
   // // options.scale_y = scale_y;
   //
   // var listSVG = d3.select("#" + name)
   //         .append('svg')
   //         .attr('id', 'listSVG');
   //
   // var gSVG = listSVG.append("g")
   //         .attr("id", name)
   //         .attr("transform", "scale(" + scale_x + "," + scale_y + ")")
   //         // .on("contextmenu", d3.contextMenu(menu));
   //
   //  gSVG.append('svg').attr('id', name);
   //  // inject SVG graph into dom elemenet
   //  init(options);
}


class Graph extends React.Component {

    render() {
        console.log("Rendering: #" + this.props.id);
        return (
            <div id={this.props.id} />
        );
    }
}




class App extends React.Component {

    componentDidMount() {

        multiview('g1')
        multiview('g2')
        multiview('g3')
        multiview('g4')
        multiview('g5')
        multiview('g6')
    }

    render() {
        let divStyle = {
            float: 'left',
            width: '800px',
            height: '400px',
        }
        return (
            <div>
                <h1>R: STEMFLOW</h1>
                <div id="svgContainer">
                    <div id="column1" style={divStyle}>
                        <Graph id="g1"/>
                        <Graph id="g2"/>
                        <Graph id="g3"/>
                    </div>
                    <div id="column2" style={divStyle}>
                        <Graph id="g4"/>
                        <Graph id="g5"/>
                        <Graph id="g6"/>
                    </div>
                    <div id="column3" style={divStyle}>
                        <div id="g7"></div>
                        <div id="g8"></div>
                        <div id="g9"></div>
                    </div>
                </div>
            </div>
        );
    }
}



export default App;
