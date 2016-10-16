// make these variables global
var ds_id = 0;
var db_id = '';
var this_graph_data = {};
var data = {};
// Most of this is in expressions/common.js
$(document).ready(function() {
    db_id = $('#db_id').html();
    temp_datasets = $('#multi_view_datasets').html();
    dataset_status = $.parseJSON(temp_datasets);
    one_dataset_with_no_data = false;
    base_position_first_graph = $('div.first_graph').offset();
    for (var count in dataset_status) {
        // have to do this to fix task #595 where ie8 had the ds_id as a function
        ds_id = dataset_status[count];
        if((parseFloat(ds_id) == parseInt(ds_id)) && !isNaN(ds_id)){ 
            graph_id = '#graph'+ds_id;
            this_graph_data = new graph_data(ds_id,graph_id,db_id);

            if (jQuery.isEmptyObject(this_graph_data.view_data.plot_data)){
                $('div.loading').html('<div class="noGraphData">No probes or values for dataset '+this_graph_data.view_data.handle+'</div>');
                $('#content'+ds_id + ' div.loading').removeClass('loading');
                $('#xaxis_labels'+ds_id).hide();
            } else {

                this_graph_data.view_data['limit_sort_by'] = 'Sample Type';
                result = multi_dataset_offset(ds_id);
                move_left = result[0];
                move_top = result[1];
                this_graph_data.move_left = move_left;
                this_graph_data.move_top = move_top;
                //set_large();	
                selectGraphToDraw();
                data[ds_id] = this_graph_data;

                element_id = '#xaxis_labels'+ds_id;
                shift_xaxis_labels_relative_to_first_graph(element_id);
                move_element(element_id,ds_id,data);
                shift_kinetic_labels_for_multiview(this_graph_data,ds_id);
            }
        }
    }

    set_autocomplete();

    first_ds_id = dataset_status[0];
    draw_legend_multiview(first_ds_id,data);
    
    triggers_for_multi_dataset_result();
    
});
function shift_xaxis_labels_relative_to_first_graph(id){
    top_position = base_position_first_graph.top;
    new_position = top_position + 823.5;
    $(id).css('top',new_position + 'px');
}

function shift_kinetic_labels_for_multiview(this_graph_data,ds_id){

    number_of_points = this_graph_data.view_data.raw_probe_list.length * this_graph_data.view_data.sample_type_display_order.length;
    id = '#xaxis_labels'+ds_id;
    old_left = parseInt($(id).css('left').replace('px',''));
    new_left = old_left  + (number_of_points/ 17) ;
    $('#xaxis_labels'+ds_id).css('left',new_left+'px');
}


function triggers_for_multi_dataset_result(){
    $('.show_legend').click(function () {
        ds_id = $(this).attr('ds_id');
        draw_legend_multiview(ds_id,data);
        return false;
    });

    $("a.toggle_sd").unbind('click');
    $("a.toggle_sd").live('click',function(){
        ds_id = $(this).attr('data-ds_id');
        this_graph_data = data[ds_id];
        var sd_option = this_graph_data.view_data.show_standard_deviation;

        if (sd_option == "on"){
            this_graph_data.view_data.show_standard_deviation = 'off';
        } else {
            this_graph_data.view_data.show_standard_deviation = 'on';
        } 
        switch (graph_type){
        
            case "scatter":
                drawScatterPlot(this_graph_data.view_data);
            break;
            
            case "bar":
                drawBarPlot(this_graph_data.view_data);
            break;
        } 

    });

    $('a.no_set_min_y_axis_link').click(function(){
        ds_id = $(this).attr('data-ds_id');
        this_graph_data = data[ds_id];
        no_set_min_y_axis = this_graph_data.view_data.min_y_axis;
        if (no_set_min_y_axis == null) {
            this_graph_data.view_data.min_y_axis = this_graph_data.view_data.original_min_y_axis;
        } else {
            this_graph_data.view_data.min_y_axis = null;
        }
        switch (graph_type){
        
            case "scatter":
                drawScatterPlot(this_graph_data.view_data);
            break;
            
            case "bar":
                drawBarPlot(this_graph_data.view_data);
            break;
                
            case "box":
                this_graph_data.view_data.show_standard_deviation="on";
                drawBoxPlot(this_graph_data.view_data);
                break;

            case "line": // T#569
                this_graph_data.view_data.show_standard_deviation="on";
                drawLinePlot(this_graph_data.view_data);
               
            break;

        } 

    });
}

function draw_legend_multiview(ds_id,data){
    draw_legend_on_canvas(data[ds_id].view_data);
    element_id = '#kinetic_legend';
    // reset the element to the first dataset and then move
    $(element_id).css('top','570px').css('left','1215px');
    move_element(element_id,ds_id,data);
    $('div.movable_legend').draggable();

}

function move_element(id,ds_id,data){
    old_left = parseInt($(id).css('left').replace('px',''));
    old_top = parseInt($(id).css('top').replace('px',''));

    this_graph_data = data[ds_id]; 
    
    new_left = this_graph_data.move_left + old_left;
    new_top = this_graph_data.move_top + old_top;
    $(id).css('left',new_left+'px');
    $(id).css('top',new_top+'px');
}


function multi_dataset_offset(ds_id){

                
    base_position_this_graph = $('#content'+ds_id).offset();
    
    
    this_graph_left_position = base_position_this_graph.left;
    this_graph_top_position = base_position_this_graph.top;
    
    
    first_graph_left_position = base_position_first_graph.left;
    first_graph_top_position = base_position_first_graph.top;
    
    if (first_graph_left_position != this_graph_left_position){
        move_left = this_graph_left_position - first_graph_left_position ;
    } else {
        move_left = 0;
    }
    
    if (first_graph_top_position != this_graph_top_position){
        move_top = this_graph_top_position - first_graph_top_position;
    } else {
        move_top = 0;
    }
    
    return [move_left,move_top];
}
