
import React from "react";
import * as d3 from 'd3';
// import multiview from './javaScript/multiview.js'
// already loaded from script tags
import LazyLoad from 'react-lazy-load';
import Waypoint from 'react-waypoint';


const MAXNUMGRAPHS = 12;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numGraphs: 1,
        };
    }

    _handleWaypointEnter() {
        console.log("entered waypoint");
        if (this.state.numGraphs === MAXNUMGRAPHS) {
            return null
        }


        try {
            this.setState({
                numGraphs: this.state.numGraphs + 1
            })
			console.log("Loading graph: g" + this.state.numGraphs);
            multiview('g' + this.state.numGraphs)
        } catch (e) {
            console.log("MULTIVIEW DRAWING ERROR:");
            console.log(e);
            // try drawy again, maybe dom element is there by now
            multiview('g' + this.state.numGraphs)
        }

        // try load 2nd and 3rd graph at the same time,
        this._loadColumn2Graph()
        this._loadColumn3Graph()

    }


    _loadColumn2Graph() {
        this.setState({
            numGraphs: this.state.numGraphs + 1
        })
        console.log("Loading graph: g" + this.state.numGraphs);
        multiview('g' + this.state.numGraphs)
    }

    _loadColumn3Graph() {
        this.setState({
            numGraphs: this.state.numGraphs + 1
        })
        console.log("Loading graph: g" + this.state.numGraphs);
        multiview('g' + this.state.numGraphs)
    }


    _handleWaypointLeave() {
        console.log("left waypoint");
    }

    _handleClick() {
        this.setState({
            numGraphs: this.state.numGraphs + 1
        })
        console.log("Loading graph: g" + this.state.numGraphs);
        multiview('g' + this.state.numGraphs)
    }

    componentDidMount() {
        // something weird about d3, can't load graphs simultaneously
        // load 1 graph at first, lazy load others as ajax calls complete
        multiview('g1')
    }

    render() {
        let divColumnStyle = {
            float: 'left',
            width: '30%',
            height: '30%',
        }
        let divEven = {
            background: '#f9ebe5',
            padding: '160px',
            height: '950px',
        }
        let divOdd = {
            background: '#f0cec0',
            padding: '160px',
            height: '950px',
        }
        return (
            <div>

                <button onClick={this._handleClick.bind(this)}>
                    Click here to load GENES
                </button>

                <br/>
                <div id="column1" style={divColumnStyle}>
                    <div id="g1" style={divEven}>graph1 placeholder</div>
                    <Waypoint onEnter={this._handleWaypointEnter.bind(this)}
                        onLeave={this._handleWaypointLeave} />

                    <div id="g4" style={divOdd}>graph4 placeholder</div>
                    <Waypoint onEnter={this._handleWaypointEnter.bind(this)}
                        onLeave={this._handleWaypointLeave} />

                    <div id="g7" style={divEven}>graph7 placeholder</div>
                    <Waypoint onEnter={this._handleWaypointEnter.bind(this)}
                        onLeave={this._handleWaypointLeave} />

                    <div id="g10" style={divEven}>graph7 placeholder</div>
                    <Waypoint onEnter={this._handleWaypointEnter.bind(this)}
                        onLeave={this._handleWaypointLeave} />

                </div>
                <div id="column2" style={divColumnStyle}>
                    <div id="g2" style={divOdd}>graph2 placeholder</div>
                    <div id="g5" style={divEven}>graph5 placeholder</div>
                    <div id="g8" style={divOdd}>graph8 placeholder</div>
                    <div id="g11" style={divOdd}>graph8 placeholder</div>
                </div>
                <div id="column3" style={divColumnStyle}>
                    <div id="g3" style={divEven}>graph3 placeholder</div>
                    <div id="g6" style={divOdd}>graph6 placeholder</div>
                    <div id="g9" style={divEven}>graph9 placeholder</div>
                    <div id="g12" style={divEven}>graph9 placeholder</div>
                </div>
            </div>
        );
    }
}



export default App;
