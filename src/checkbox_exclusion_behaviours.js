'use strict';
//require jQuery (>=1.4.2)

var createCbExclusionBehaviours = function( matrix, models ) {
    var createBhv = function( dirty, i, matrix, models ) {
        var f = function( event ) {
            if ( dirty.dirty ) {
                return;
            }
            dirty.dirty = true;
            var arr0 = jQuery.makeArray( models[ i ] );
            var checked = arr0 && arr0[ arr0.length - 1 ].checked;
            if ( checked ) {
                for( var other = 0; other < models.length; other ++ ) {
                    if ( matrix[ i ][ other ] ) {
                        var arr = jQuery.makeArray( models[ other ] );
                        for ( var j = 0; j < arr.length; j ++ ) {
                            if ( arr[ j ].checked && arr[ j ].checked != 0 ) {
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