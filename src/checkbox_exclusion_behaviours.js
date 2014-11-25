'use strict';
//require jQuery (>=1.4.2)
//require lodash (>=2.4.1)

var createCbExclusionBehaviours = function( matrix, models ) {
    var createBhv = function( dirty, i, matrix, models ) {
        var f = function( event ) {
            if ( dirty.dirty ) {
                return;
            }
            dirty.dirty = true;
            var checked = _.reduce( models[ i ], function( res, d ) { return res || d.checked; }, false );
            if ( checked ) {
                for( var other = 0; other < models.length; other ++ ) {
                    if ( matrix[ i ][ other ] === 1) {
                        var arr = jQuery.makeArray( models[ other ] );
                        for ( var j = 0; j < arr.length; j ++ ) {
                            if ( arr[ j ].checked ) {
                                $( arr[ j ] ).click();
                            }
                        }
                    }
                }
            }
            dirty.dirty = false;
        };
        return f;
    };
    var dirty = { dirty : false };
    for( var i = 0; i < models.length; i ++ ) {
        models[ i ].click( createBhv( dirty, i, matrix, models ) );
    }
};