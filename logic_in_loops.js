/**
 * Not this!
 */
_.each(collection,function(item) {
    if (item.property==="unknown") {
        special_stuff(1,2,3);
    } else if (item.property==="available") {
        another_special_thing(item.thing);
    } else if (item.property==="unavailable") {
        more_special_thing(item.thing);
    } else if (item.property==="hold") {
        look_another_special_thing(item.thing);
    } else if (item.property==="ada") {
        another_dealy_special_thing(item.thing);
    }
    /*
        General functionality for all objects
     */
})

/**
 Me gusta this more.
*/
var special_functionality = {
    unknown : function(item) {
        special_stuff(1,2,3);
    },
    available : function(item) {
        another_special_thing(item.thing);
    },
    unavailable : function(item) {
        more_special_thing(item.thing);
    },
    hold : function(item) {
        look_another_special_thing(item.thing);
    },
    ada : function(item) {
        another_dealy_special_thing(item.thing);
    }
}

_.each(collection,function(item) {
    special_functionality[item.property](item);
    /*
     General functionality for all objects
    */
})