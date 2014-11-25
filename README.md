**createCbExclusionBehaviours()

A minimal javascript implementation for adding exclusion behaviour to html checkbox groups.
Exlusions patterns can be arbitrary, ranging from all-exlusive to totally permissive.

This function takes as argument a matrix of exlusion information and an array of checkboxes.

    var exclusionMatrix = [ [0,0,1], [0,0,1], [1,1,0] ];
    var exclusionModels = [ $("#cb-acc-onway"), $("#cb-acc-atwork"), $("#cb-acc-all") ];
    createCbExclusionBehaviours( exclusionMatrix, exclusionModels );


Requires jQuery (1.4.2) and lodash (2.4.1).
