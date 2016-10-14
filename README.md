# BNE_stemFlow

### Getting started
1. Create new HTML5/JavaScript application in NetBeans. 
2. Add publicHTML folder from the repo
3. Deploy (green arrow at top)

Here is a brief run down of where things are in the mock graphing tool that will be used during healthhack.

The example is in Graph/examples and I have set it up to run test.tsv (located in Graph/data).

## 0. Index.js
 - Runs the calls to build the graph 

        graph = setup_margins(graph);
        graph = set_data_order(graph);
        graph = setup_svg(graph);
        graph = setup_data_for_x_axis(graph);
        graph = setup_x_axis(graph, graph.sample_id_list);
        graph = setup_y_axis(graph);
        graph = setup_D3_legend(graph, options.probes);
        graph = setup_vertical_lines(graph, graph.sample_id_list);
        graph = setup_error_bars(graph);
        graph = setup_scatter_line(graph);
        graph = setup_hover_bars(graph, graph.sample_id_list);
        graph = setup_scatter(graph);
        
 Note most of these functions have been separated out into another respecitive JavaScript file (see below)

## 1. Axis.js
 - Generates the axis
 - both x, y axis
 - calculates min and max values on the graph
 - labels (not it only generates the defalt x axis lables (sometimes there can be two levels and this is done in the box_bar_line.js file as these are the only graphs which use extra labels).
 
## 2.  features.js
 - Has features which aren't sued as often -> hover bars and also error bars (only used in one dataset)
 
## 3. general.js
 - All general graph features such as creating margins
 - watermark setup
 - default options
 - d3 wrap
 - svg setup
 - horizontal lines (dt etc.)
 - vertical lines (to separate samples etc)
 - legend
