const skill = require('../data/skill.json');

module.exports = () => {
  return {
    type: "Alexa.Presentation.APL.RenderDocument",
    token: "launch-screen",
    document: {
        type: 'APL',
        version: '1.0',
        theme: 'dark',
        "import": [
            {
                name: 'alexa-styles',
                version: '1.0.0-beta'
            },
            {
                "name": "alexa-layouts",
                "version": "1.0.0"
            }
        ],
        "resources": [
            {
                "description": "Stock color for the light theme",
                "colors": {
                    "colorTextPrimary": "#151920"
                }
            },
            {
                "description": "Stock color for the dark theme",
                "when": "${viewport.theme == 'dark'}",
                "colors": {
                    "colorTextPrimary": "#f0f1ef"
                }
            },
            {
                "description": "Standard font sizes",
                "dimensions": {
                    "textSizeBody": 48,
                    "textSizePrimary": 27,
                    "textSizeSecondary": 23,
                    "textSizeSecondaryHint": 25
                }
            },
            {
                "description": "Common spacing values",
                "dimensions": {
                    "spacingThin": 6,
                    "spacingSmall": 12,
                    "spacingMedium": 24,
                    "spacingLarge": 48,
                    "spacingExtraLarge": 72
                }
            },
            {
                "description": "Common margins and padding",
                "dimensions": {
                    "marginTop": 40,
                    "marginLeft": 60,
                    "marginRight": 60,
                    "marginBottom": 40
                }
            }
        ],
        "styles": {
            "textStyleBase": {
                "description": "Base font description; set color and core font family",
                "values": [
                    {
                        "color": "@colorTextPrimary",
                        "fontFamily": "Amazon Ember"
                    }
                ]
            },
            "textStyleBase0": {
                "description": "Thin version of basic font",
                "extend": "textStyleBase",
                "values": {
                    "fontWeight": "100"
                }
            },
            "textStyleBase1": {
                "description": "Light version of basic font",
                "extend": "textStyleBase",
                "values": {
                    "fontWeight": "300"
                }
            },
            "mixinBody": {
                "values": {
                    "fontSize": "@textSizeBody"
                }
            },
            "mixinPrimary": {
                "values": {
                    "fontSize": "@textSizePrimary"
                }
            },
            "mixinSecondary": {
                "values": {
                    "fontSize": "@textSizeSecondary"
                }
            },
            "textStylePrimary": {
                "extend": [
                    "textStyleBase1",
                    "mixinPrimary"
                ]
            },
            "textStyleSecondary": {
                "extend": [
                    "textStyleBase0",
                    "mixinSecondary"
                ]
            },
            "textStyleBody": {
                "extend": [
                    "textStyleBase1",
                    "mixinBody"
                ]
            },
            "textStyleSecondaryHint": {
                "values": {
                    "fontFamily": "Bookerly",
                    "fontStyle": "italic",
                    "fontSize": "@textSizeSecondaryHint",
                    "color": "@colorTextPrimary"
                }
            }
        },
        "layouts": {},
        "mainTemplate": {
            "parameters": [
                "payload"
            ],
            "item": { 
              "type": "TouchWrapper",
              "width": "100%",
              "height": "100%",
              "inheritParentState": true,
              "onPress": {
                "type": "SendEvent",
                "arguments": ["startEvent"]
              },
              "items":[
                {
                    "when": "${viewport.shape == 'round'}",
                    "type": "Container",
                    "direction": "column",
                    "items": [
                        {
                            "type": "Image",
                            "source": "${payload.data.properties.backgroundImage.sources[0].url}",
                            "scale": "best-fill",
                            "position": "absolute",
                            "width": "100vw",
                            "height": "100vh"
                        },
                        {
                            "type": "AlexaHeader",
                            "headerTitle": "${payload.data.properties.title}",
                            "headerAttributionImage": "${payload.data.properties.logoUrl}"
                        },
                        {
                            "type": "Container",
                            "grow": 1,
                            "alignItems": "center",
                            "justifyContent": "center",
                            "items": [
                                {
                                    "type": "Image",
                                    "source": "${payload.data.properties.image.sources[0].url}",
                                    "scale": "best-fill",
                                    "width": "100vh",
                                    "height": "70vw",
                                    "align": "center"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "Image",
                            "source": "${payload.data.properties.backgroundImage.sources[0].url}",
                            "scale": "best-fill",
                            "position": "absolute",
                            "width": "100vw",
                            "height": "100vh"
                        },
                        {
                            "type": "AlexaHeader",
                            "headerTitle": "${payload.data.properties.title}",
                            "headerAttributionImage": "${payload.data.properties.logoUrl}"
                        },
                        {
                            "type": "Container",
                            "direction": "row",
                            "paddingLeft": "5vw",
                            "paddingRight": "5vw",
                            "paddingBottom": "5vh",
                            "alignItems": "center",
                            "justifyContent": "center",
                            "items": [
                                {
                                    "type": "Image",
                                    "height": "75vh",
                                    "width": "90vw",
                                    "source": "${payload.data.properties.image.sources[0].url}",
                                    "scale": "best-fill",
                                    "align": "center"
                                }
                            ]
                        }
                    ]
                }
            ]
            }
        }
    },
    datasources: {
        "data": {
            "type": "object",
            properties: {
                "title": skill.title,
                "backgroundImage": {
                    "contentDescription": null,
                    "smallSourceUrl": null,
                    "largeSourceUrl": null,
                    "sources": [
                        {
                            "url": skill.background,
                            "size": "small",
                            "widthPixels": 0,
                            "heightPixels": 0
                        },
                        {
                            "url": skill.background,
                            "size": "large",
                            "widthPixels": 0,
                            "heightPixels": 0
                        }
                    ]
                },
                "image": {
                    "contentDescription": null,
                    "smallSourceUrl": null,
                    "largeSourceUrl": null,
                    "sources": [
                        {
                            "url": skill.startImage,
                            "size": "small",
                            "widthPixels": 0,
                            "heightPixels": 0
                        },
                        {
                            "url": skill.startImage,
                            "size": "large",
                            "widthPixels": 0,
                            "heightPixels": 0
                        }
                    ]
                },
                "logoUrl": skill.logo,
                "hintText": skill.hint
            }
        }
    }
  };
};
