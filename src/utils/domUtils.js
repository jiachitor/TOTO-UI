'use strict';

/**
 * Get ownerDocument
 * @param {ReactComponent|HTMLElement} componentOrElement
 * @returns {HTMLDocument}
 */
function ownerDocument(componentOrElement) {
    let element = React.findDOMNode(componentOrElement);

    return (element && element.ownerDocument) || document;
}

/**
 * Get ownerWindow
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 * @refer https://github.com/jquery/jquery/blob/6df669f0fb87cd9975a18bf6bbe3c3548afa4fee/src/event.js#L294-L297
 */
function ownerWindow(element) {
    let doc = ownerDocument(element);

    return doc.defaultView || doc.parentWindow || window;
}

module.exports = {
    ownerDocument: ownerDocument,

    ownerWindow: ownerWindow,

    scrollTop: function (element, value) {
        if (!element) {
            return;
        }

        let hasScrollTop = 'scrollTop' in element;

        if (value === undefined) {
            return (hasScrollTop ? element.scrollTop : element.pageYOffset);
        }

        hasScrollTop ?
            element.scrollTop = value : element.scrollTo(element.scrollX, value);
    },

    offset: function (element) {
        if (element) {
            let rect = element.getBoundingClientRect();
            let body = document.body;
            let clientTop = element.clientTop || body.clientTop || 0;
            let clientLeft = element.clientLeft || body.clientLeft || 0;
            let scrollTop = window.pageYOffset || element.scrollTop;
            let scrollLeft = window.pageXOffset || element.scrollLeft;

            return {
                top: rect.top + scrollTop - clientTop,
                left: rect.left + scrollLeft - clientLeft,
            };
        }

        return null;
    },

    position: function (element) {
        return {
            left: element.offsetLeft,
            top: element.offsetTop,
        };
    },
};
