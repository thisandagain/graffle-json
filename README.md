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
        value: 'It',
        children: [
            {
                value: 'To'
            },
            {
                value: 'Build'
            },
            {
                value: 'Nested'
            },
            {
                value: 'Hierarchical',
                children: [
                    {
                        value: 'Data'
                    }
                ]
            }
        ]
    },
    {
        value: 'Is'  
    },
    {
        value: 'Fun'
    }
]
````

## Testing
	vows test/*