function aboutMe(){
    scrollTo(0, getAboutMeHeight())
}

function getAboutMeHeight(){
    var el = document.getElementById("aboutMe")
    var loc = dw_getPageOffsets(el);
    return loc.y - (screen.height * 0.1)
}

function getProjectsHeight(){
    var el = document.getElementById("projectsPage")
    var loc = dw_getPageOffsets(el);
    return loc.y - (screen.height * 0.1)
}

function home(){
    scrollTo(0,0)
}

function projects(){
    scrollTo(0, getProjectsHeight())
}

window.addEventListener('scroll', () => {
    if(window.pageYOffset < getAboutMeHeight()) {
        // HOME
        document.getElementById("home").style.color = "#fff27d"
        document.getElementById("about").style.color = "white"
        document.getElementById("projects").style.color = "white"
    } else if (window.pageYOffset < getProjectsHeight()){
        // ABOUT ME
        document.getElementById("home").style.color = "white"
        document.getElementById("about").style.color = "#fff27d"
        document.getElementById("projects").style.color = "white"
    } else {
        // PROJECTS
        document.getElementById("home").style.color = "white"
        document.getElementById("about").style.color = "white"
        document.getElementById("projects").style.color = "#fff27d"
    }
});

function dw_getPageOffsets(el) {
    var sOff = dw_getScrollOffsets(), left = 0, top = 0, props;
    
    if ( el.getBoundingClientRect ) {
        props = el.getBoundingClientRect();
        left = props.left + sOff.x;
        top = props.top + sOff.y;
    } else { // for older browsers
        do {
            left += el.offsetLeft;
            top += el.offsetTop;
        } while ( (el = el.offsetParent) );
    }
    return { x: Math.round(left), y: Math.round(top) };
}

function dw_getScrollOffsets() {
    var doc = document, w = window;
    var x, y, docEl;
    
    if ( typeof w.pageYOffset === 'number' ) {
        x = w.pageXOffset;
        y = w.pageYOffset;
    } else {
        docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
                doc.documentElement: doc.body;
        x = docEl.scrollLeft;
        y = docEl.scrollTop;
    }
    return {x:x, y:y};
}