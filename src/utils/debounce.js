'use strict';

/**
 * Debounce function
 * @param {function} fn  Function to be debounced
 * @param {number} wait Function execution threshold in milliseconds
 * @param {bool} immediate  Whether the function should be called at
 *                          the beginning of the delay instead of the
 *                          end. Default is false.
 * @desc Executes a function when it stops being invoked for n seconds
 * @via  _.debounce() http://underscorejs.org
 */

module.exports = function (fn, wait, immediate) {
    let timeout;

    return function () {
        let context = this;
        let args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) {
                fn.apply(context, args);
            }
        };
        let callNow = immediate && !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) {
            fn.apply(context, args);
        }
    };
};
