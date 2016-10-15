
import React from "react";

class App extends React.Component {

    componentDidMount() {

        multiview('g1')
        // multiview('g2')
        // multiview('g3')
        // multiview('g4')
        // multiview('g5')
        // multiview('g6')


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
                        <div id="g1"></div>
                        <div id="g2"></div>
                        <div id="g3"></div>
                    </div>
                    <div id="column2" style={divStyle}>
                        <div id="g4"></div>
                        <div id="g5"></div>
                        <div id="g6"></div>
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
