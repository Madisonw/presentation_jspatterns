
/*
    primal model types
 */
function Component(args) {
    //constructor class
    this.name = args.name || "Unnamed Component";
    this.type = args.type || "Unspecified";
}

/*
    More sophisticated model types
 */

function Computer(args) {

    this.components = args.components || [];
}

Computer.prototype.addComponent = function(comp) {
    if (!comp instanceof Component) {
        throw "Tried to add noncomponent "+comp.toString()+" to computer ";
    }
    return this.components.push(comp);
}


/*
    Application "views"
*/

function ComponentPicker(args) {

    this.user = args.user;
    this.container = $(args.container);
    this.computer = args.computer;
    this.render();
    this.bind();
}

ComponentPicker.prototype = {
    render : function() {
        $(this.container).append(template)
    },
    bind : function() {
        var app = this;
        $(this.componentChooser).click(function(evt) {
            app.computer.addComponent(evt.target.id);
        })
    }
}


var picker = new ComponentPicker({
    container : $("#someelement"),
    computer : new Computer({}),
    user : TFLY.current_user_id
})