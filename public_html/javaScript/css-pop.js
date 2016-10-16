/**
 * http://wpandsuch.com/posts/css-popup/css-popup.html#
 * @param {type} div_id
 * @returns {undefined}
 */

function toggle(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {
            el.style.display = 'block';
            var graphdiv = document.getElementById("g1");
            graphdiv.setAttribute("width", "1000px");
            var svgdiv = d3.select("#g1-svg")
                    .attr("width", 1000)
                    .attr("height", 1000);
            var groupdiv = d3.select("#g1-group")
                .attr("transform", "translate(" + 100 + "," + 100 + ")" + " scale(" + 1.5 + "," + 1.5 + ")")
            el.appendChild(graphdiv);
        }
	else {el.style.display = 'none';}
}

function blanket_size(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight/2;
	} else {
		viewportheight = document.documentElement.clientHeight/2;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	var blanket = document.getElementById('blanket');
	blanket.style.height = blanket_height + 'px';
	var popUpDiv = document.getElementById(popUpDivVar);
	popUpDiv_height=blanket_height/2-400;//200 is half popup's height
	popUpDiv.style.top = popUpDiv_height/3 + 'px';
}
function window_pos(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerHeight;
	} else {
		viewportwidth = document.documentElement.clientHeight;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}
	var popUpDiv = document.getElementById(popUpDivVar);
	window_width=window_width/2-400;//200 is half popup's width
	popUpDiv.style.left = window_width/1.5 + 'px';
}

function popup(windowname) {
	blanket_size(windowname);
	window_pos(windowname);
	toggle('blanket');
	toggle(windowname);		
}