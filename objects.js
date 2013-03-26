

//dont' do this
var book = new Object();
book.pages = [];
book.pages.push("cover");


//do this
var book = {
    pages : [
        "cover"
    ]
}
