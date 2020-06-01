(function (chart, d3) {
  
    const WIDTH = 600
    const HEIGHT = 800
    const scatterPlotWidth = .35 * WIDTH;
    const scatterPlotHeight = .4 * HEIGHT;
    const triangleWidth = .28 * WIDTH;
    const triangleHeight = .28 * WIDTH;
    const rectangleWidth = .35 * WIDTH;
    const rectangleHeight = .4 * HEIGHT;
    const positions = {
        'scatter-plot' : {
            x: 35,
            y : 35
        },
        'colored-triangles' : {
            x : .62 * WIDTH,
            y : .18 * HEIGHT
        },
        'colored-rectangles':{
            x :  .5 *WIDTH,
            y : .55 *  HEIGHT,
        }
    }

    let data = [{
        id : 'scatter-plot',
       ...positions['scatter-plot'],
        fillColor : 'white',
        itemFillColor : '#C0C0C0',
        stroke : 'black',
        width: scatterPlotWidth ,
        height : scatterPlotHeight,
        children: [
            {
                x: .3 * scatterPlotWidth,
                y : .25 * scatterPlotHeight
            },
            {
                x: .5 * scatterPlotWidth,
                y : .15 * scatterPlotHeight
            },
            {
                x: .85 * scatterPlotWidth,
                y : .35 * scatterPlotHeight
            }, {
                x: .16 * scatterPlotWidth,
                y : .4 * scatterPlotHeight
            },
            {
                x: .46 * scatterPlotWidth,
                y : .33 * scatterPlotHeight
            },
            {
                x: .53 * scatterPlotWidth,
                y : .43 * scatterPlotHeight
            },{
                x: .23 * scatterPlotWidth,
                y : .63 * scatterPlotHeight
            },
            {
                x: .33 * scatterPlotWidth,
                y : .6 * scatterPlotHeight
            },
            {
                x: .73 * scatterPlotWidth,
                y : .67 * scatterPlotHeight
            },
            {
                x: .83 * scatterPlotWidth,
                y : .57 * scatterPlotHeight
            },
            {
                x: .53 * scatterPlotWidth,
                y : .73 * scatterPlotHeight
            },
            {
                x: .73 * scatterPlotWidth,
                y : .8 * scatterPlotHeight
            }, {
                x: .53 * scatterPlotWidth,
                y : .9 * scatterPlotHeight
            },{
                x: .3 * scatterPlotWidth,
                y : .87 * scatterPlotHeight
            }]
    },
        {
            id : 'colored-triangles',
           ...positions['colored-triangles'],
            fillColor : '#FFF7E5',
            itemFillColor: '#95C7F4',
            stroke: 'blue',
            width: triangleWidth,
            height : triangleHeight,
            children: [
                {x : .2 * triangleWidth,
                y : .2 * triangleHeight},
                {x: .75 * triangleWidth,
                y: .1 * triangleHeight},
                {
                    x : .27 * triangleWidth,
                    y: .65 * triangleHeight
                },
                {
                    x : .62 * triangleWidth,
                    y : .58 * triangleHeight
                },{
                x: .69 * triangleWidth,
                    y: .78 * triangleWidth
                }
            ]
        },
        {
            id : 'colored-rectangles',
           ...positions['colored-rectangles'],
            fillColor: 'white',
            itemFillColor: '#C0C0C0',
            stroke: 'black',
            width: rectangleWidth,
            height : rectangleHeight,
            children:[
                {
                    text: "abc"
                },
                {
                    text : "eee"
                },
                {
                    text : "ooo"
                },
                {
                    text : "uuu"
                },
                {
                    text : "ccc"
                },{
                    text : "abc"
                }
                ,{
                    text : "lmn"
                },
                {
                    text : "xxx"
                },
                {
                    text : "rom"
                },
                {
                    text : "ee"
                },
                {
                    text : "zxa"
                },{
                    text : "etu"
                }
                ,{
                    text : "uom"
                }
            ]
        }];


    let accessor = {
        x1 : function (d) {return positions[d.source.id].x + d.source.xOffset
        },
        y1 : function (d) {
            return positions[d.source.id].y + d.source.yOffset
        },
        x2 : function (d) {
            return positions[d.target.id].x + d.target.xOffset
        },
        y2 : function (d) {
            return positions[d.target.id].y + d.target.yOffset
        }
    }
    let lineData = [{
        source : {
            id : 'scatter-plot',
            xOffset : data[0].children[0].x,
            yOffset : data[0].children[0].y
        },
        target : {
            id : 'colored-triangles',
            xOffset : data[1].children[0].x,
            yOffset : data[1].children[0].y
        }},
        {
            source : {
                id : 'scatter-plot',
                xOffset : data[0].children[0].x,
                yOffset : data[0].children[0].y
            },
            target : {
                id : 'colored-triangles',
                xOffset : data[1].children[1].x,
                yOffset : data[1].children[1].y
            }},
        {
            source : {
                id : 'scatter-plot',
                xOffset : data[0].children[10].x,
                yOffset : data[0].children[10].y
            },
            target : {
                id : 'colored-triangles',
                xOffset : data[1].children[3].x,
                yOffset : data[1].children[3].y
            }},
        {
            source : {
                id : 'scatter-plot',
                xOffset : data[0].children[6].x,
                yOffset : data[0].children[6].y
            },
            target : {
                id : 'colored-triangles',
                xOffset : data[1].children[3].x,
                yOffset : data[1].children[3].y
            }},
        {
            source : {
                id : 'colored-triangles',
                xOffset : data[1].children[3].x,
                yOffset : data[1].children[3].y
            },
            target : {
                id : 'colored-rectangles',
                xOffset : .75 * rectangleWidth,
                yOffset : 17,
                xMargin :  50
            }},
        {
            source : {
                id : 'colored-triangles',
                xOffset : data[1].children[3].x,
                yOffset : data[1].children[3].y
            },
            target : {
                id : 'colored-rectangles',
                xOffset : .75 * rectangleWidth,
                yOffset : 70,
                xMargin :  70,
            }},
        {
            source : {
                id : 'colored-triangles',
                xOffset : data[1].children[0].x,
                yOffset : data[1].children[0].y
            },
            target : {
                id : 'colored-rectangles',
                xMargin :  190,
                xOffset : .75 * rectangleWidth,
                yOffset : 87
            }},
        {
            source : {
                id : 'colored-triangles',
                xOffset : data[1].children[0].x,
                yOffset : data[1].children[0].y
            },
            target : {
                id : 'colored-rectangles',
                xMargin :  210,
                xOffset : .75 * rectangleWidth,
                yOffset : 114
            }}
            ]

    const svg = d3.select('#chart')
        .append('svg')
        .attr('width', 600)
        .attr('height', 800)
        .style('border', '1px solid #cccccc')
        .append('g');

    let components = svg.selectAll('.component')
        .data(data)
        .enter()
        .append('g')
        .attr('transform', function (d) {
            return `translate(${d.x}, ${d.y})`
        })
        .style('cursor', 'grab')
        .call(d3.drag()
            .on("drag", function(d) {
                positions[ d.id] = {
                    x : d3.event.x,
                    y: d3.event.y
                };
                d3.select(this).raise().attr("transform", "translate(" +
                    (d.x = d3.event.x) + "," + (d.y = d3.event.y) + ")")
                drawLinks()
            }))

    components.append('rect')
        .attr('width', d=> d.width)
        .attr('height', d=>d.height)
        .style('fill', d=> d.fillColor)
        .style('stroke', d=> d.stroke);

    drawScatterPlot(components.filter(d=>d.id === 'scatter-plot'));
    drawTriangleNodes(components.filter(d=>d.id === 'colored-triangles'))
    drawRectanglesNode(components.filter(d=>d.id === 'colored-rectangles'));
    drawLinks();


    function  drawScatterPlot(selection) {
        const [data] = selection.data();
        const height = data.height;
        const width = data.width;
        const children = data.children;
        const margin = 18;
        const polyLineData = `${margin},${margin} ${margin}, ${height - margin} ${width-margin}, ${height - margin}`;
        selection.append('polyline')
            .attr('points',polyLineData)
            .style('stroke-width',1)
            .style('stroke', data.itemFillColor)
            .style('fill', 'none');

        const triangleSize = 10;
        selection.append('path')
            .attr('d', d3.symbol().type(d3.symbolTriangle).size(triangleSize))
            .style('fill', data.itemFillColor)
            .attr("transform", function () {
                return `translate(${margin}, ${margin})`
            });

        selection.append('path')
            .attr('d', d3.symbol().type(d3.symbolTriangle).size(triangleSize))
            .style('fill', data.itemFillColor)
            .attr("transform", function (d) {
                return `translate(${width -margin}, ${height-margin}) rotate(90)`
            });

        const circleSize  = 90
        selection.selectAll('.circle')
            .data(children)
            .enter()
            .append('path')
            .attr('d', d3.symbol().type(d3.symbolCircle).size(circleSize))
            .style('fill', data.itemFillColor)
            .attr("transform", function (d) {
                return `translate(${d.x}, ${d.y})`
            });

    }

    function drawTriangleNodes(selection){
        const [data] = selection.data();
        const triangleSize = 140;
        const children = data.children;
        selection.selectAll('.triangles')
            .data(children)
            .enter()
            .append('path')
            .attr('d', d3.symbol().type(d3.symbolTriangle).size(triangleSize))
            .style('fill',data.itemFillColor)
            .attr("transform", function (d) {
                return `translate(${d.x}, ${d.y})`
            });
    }

    function drawRectanglesNode(selection) {
        const [data] = selection.data();
        const margin = 8;
        const children = data.children;
        const width = .5 * data.width;
        const height =  (data.height - margin * (children.length + 1))/ (children.length);

       const rectG =  selection.selectAll('.text-rect')
            .data(children)
            .enter()
            .append('g')
            .attr('transform', function (d, index) {
                return  `translate(${.25 * data.width},${margin  + (index * (height+margin))})`
            });
        rectG.append('rect')
            .attr('width', width)
            .attr('height', height)
            .style('fill', data.itemFillColor);

        rectG.append('text')
            .attr('x', 20)
            .attr('y', 12)
            .text(d=> d.text)
    }

    function lineFunc(d){
        let data = [[accessor.x1(d), accessor.y1(d)],
            [(accessor.x1(d) + accessor.x2(d))/2,(accessor.y1(d) + accessor.y2(d))/3 ],
            [accessor.x2(d), accessor.y2(d)]];
        if(d.source.id === 'colored-triangles' && d.target.id === 'colored-rectangles'){
            data[1] =  [((accessor.x2(d) +accessor.x2(d))/2+ d.target.xMargin ),(accessor.y1(d) + accessor.y2(d))/2]
        }
        return d3.line().curve(d3.curveBasis)(data);
    }
    function drawLinks() {
        const linkUpdate = svg.selectAll('.link')
            .data(lineData)

            linkUpdate.enter()
            .append('path')
                .attr('class', 'link')
                .merge(linkUpdate)
            .attr('d',lineFunc)
            .style('stroke', '#95c7f4')
            .style('stroke-dasharray', '3,1.5')
            .style('stroke-width', 2)
            .style('fill', 'none')
                .raise();
    }

})(window.Charts =  window.Charts ||{}, d3)
