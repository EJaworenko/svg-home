/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['50px', '50px', '300px', '300px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Ellipse2',
                            type: 'ellipse',
                            rect: ['186px', '10px', '27px', '27px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '400px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid5",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            [50,700],
                            [50,700],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid6",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            [50,700],
                            [50,700],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            [50,700],
                            [50,700],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid8",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            [50,700],
                            [50,700],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid9",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            [50,700],
                            [50,700],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid10",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            [50,700],
                            [50,700],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2",
                            "rotateZ",
                            0,
                            4000,
                            "linear",
                            "${Ellipse2}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Test_edgeActions.js");
})("EDGE-887680256");
