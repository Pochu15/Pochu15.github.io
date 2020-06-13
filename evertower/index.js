

window.addEventListener('scroll', () => {
    //if(window.pageYOffset < getAboutMeHeight())
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

$(document).ready(function(){
    $('#carouselPU').carousel({
        pause: "true"
    });
})