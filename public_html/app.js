
import React from "react";
import * as d3 from "d3";

class App extends React.Component {

    componentDidMount() {

        var multiview = function(divID) {
            options = setup_data(divID);
            init(options);
        }

        var scale_x = 0.33
        var scale_y = 0.33

        var listSVG = d3.select('#svgContainer')
            .append('svg')
            .attr('id', 'listSVG')
            .attr('height', '1000px')
            .attr('width', '1000px')


        var svgTranslate = `
        scale(${scale_x}, ${scale_y})
        `

        var gSVG = d3.select('#listSVG').append("g")
            .attr('id', 'g1')
            .attr("transform", svgTranslate)

        gSVG.append('svg').attr('id', 'g1')
        // inject SVG graph into dom elemenet
        init(setup_data('#g1'));

        var gSVG = d3.select('#listSVG').append("g")
            .attr('id', 'g2')
            .attr("transform", svgTranslate)

        gSVG.append('svg').attr('id', 'g2')
        // inject SVG graph into dom elemenet
        init(setup_data('#g2'));


    }

    render() {
        return (
            <div>
                <h1>R: STEMFLOW</h1>
                <div id="svgContainer">
                    <div id="column1" style={{"float: left; width: 800px; height: 400px;"}}>
                        <div id="g1"></div>
                        <div id="g2"></div>
                        <div id="g3"></div>
                    </div>
                    <div id="column2" style={{"float: left; width: 800px; height: 400px;"}}>
                        <div id="g4"></div>
                        <div id="g5"></div>
                        <div id="g6"></div>
                    </div>
                    <div id="column3" style={{"float: left; width: 800px; height: 400px;"}}>
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
