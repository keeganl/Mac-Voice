// index.js
//  Acts as a handler for the python script
//  Keegan Lawley
//  Aug 08, 2018
//  -*- utf-8 -*-

var PythonShell = require('python-shell');

var options = {
  mode: 'text',
  pythonPath: '/usr/local/bin/python',
  pythonOptions: ['-u'],
};

PythonShell.run('./voice.py', options, function (err, results) {
  if (err) throw err;
  console.log('results: %j', results);
});
