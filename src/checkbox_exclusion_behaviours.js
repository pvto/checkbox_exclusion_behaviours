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
                        if ( models[ other ] instanceof Array ) {
                            for ( var j = 0; j < models[ other ].length; j ++ ) {
                                if ( models[ other ][ j ].checked ) {
                                    $( models[ other ][ j ] ).click();
                                }
                            }
                        } else {
                            if ( models[ other ][ j ].checked ) {
                                $( models[ other ][ j ] ).click();
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