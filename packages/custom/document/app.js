'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Document = new Module('document');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */

Document.register(function(app, auth, database) {
  
  //We enable routing. By default the Package Object is passed to the routes
  Document.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Document.menus.add({
    title: 'document example page',
    link: 'document example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
 
  
  Document.aggregateAsset('css', 'document.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Document.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Document.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Document.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Document;
});
