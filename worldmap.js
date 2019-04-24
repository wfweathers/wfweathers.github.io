// JavaScript source code

//Using jQuery, read our data and call visualize(...) only once the page is ready:


    var width = 700;
    var height = 580;
    var svg = d3.select( "#chart" )
        .append( "svg" )
        .attr( "width", width )
        .attr( "height", height );
    var g = svg.append( "g" );
    var albersProjection = d3.geo.albers()
        .scale( 190000 )
        .rotate( [71.057,0] )
        .center( [0, 42.313] )
        .translate( [width/2,height/2] );
    var geoPath = d3.geo.path()
        .projection( albersProjection );
    g.selectAll( "path" )
        .data( neighborhoods_json.features )
        .enter()
        .append( "path" )
        .attr( "fill", "#ccc" )
        .attr( "stroke", "#333")
        .attr( "d", geoPath );
    var rodents = svg.append( "g" );
    rodents.selectAll( "path" )
        .data( rodents_json.features )
        .enter()
        .append( "path" )
        .attr( "fill", "#900" )
        .attr( "stroke", "#999" )
        .attr( "d", geoPath )
        .attr("class","incident")
        .on("mouseover", function(d){
            d3.select("h2").text(d.properties.LOCATION_STREET_NAME);
            d3.select(this).attr("class","incident hover");
        })
        .on("mouseout", function(d){
            d3.select("h2").text("");
            d3.select(this).attr("class","incident");
        });






