

var ComponentChooser = {
    API_URL : "/app/controller/ViewApp",
    pullData : function() {

    },
    pushData : function(data) {

    },
    views : {
        model : {
            render : function() { },
            bind : function() { },
            show : function() { },
            hide : function() { }
        },
        harddrive : {
            render : function() { },
            bind : function() { },
            show : function() { },
            hide : function() { }
        },
        monitor : {
            render : function() { },
            bind : function() { },
            show : function() { },
            hide : function() { }
        },
        opticaldrive : {
            render : function() { },
            bind : function() { },
            show : function() { },
            hide : function() { }
        }
    },
    viewinit : function(view) {
        var view = ComponentChooser.views[view];
        view.render();
        view.bind();
        view.show();
    },
    init : function() {
        ComponentChooser.viewinit("model");
    }
}

ComponentChooser.init();