[![build status](https://secure.travis-ci.org/thisandagain/graffle-json.png)](http://travis-ci.org/thisandagain/graffle-json)
# Graffle-JSON
#### OmniGraffle .OO3 to structured JSON converter

## Install
	npm install graffle-json

## Basic Use
```javascript
var graffle = require('graffle-json');

graffle.convert('path/to/file.oo3', function (err, obj) {
	console.dir(obj);	// Win!
});
````

## Binary Use
```javascript
npm install -g graffle-json
````
    
```javascript
jgraffle ./path/to/file.oo3
````

## Example Output
```javascript
[
    {
        "value": "This",
        "children": [
            {
                "value": "As"
            },
            {
                "value": "A"
            },
            {
                "value": "Jumping"
            },
            {
                "value": "Rope",
                "children": [
                    {
                        "value": "You"
                    },
                    {
                        "value": "Prob'ly'"
                    },
                    {
                        "value": "Think"
                    },
                    {
                        "value": "That"
                    },
                    {
                        "value": "I'm"
                    },
                    {
                        "value": "A"
                    },
                    {
                        "value": "Dope"
                    }
                ]
            }
        ]
    },
    {
        "value": "Started"
    },
    {
        "value": "Out"
    }
]
````

## Testing
	vows test/*