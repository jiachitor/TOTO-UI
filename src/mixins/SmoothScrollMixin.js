/**
 * modified version of:
 * http://mir.aculo.us/2014/01/19/scrolling-dom-elements-to-the-top-a-zepto-plugin/
 */

'use strict';

import Events from '../utils/Events';
import dom from '../utils/domUtils';
import rAF from '../utils/requestAnimationFrame';
let scrollInProgress = false;

let SmoothScrollMixin = {
    smoothScroll: function (element, options) {
        options = options || {};
        let scrollTarget = element || window;
        let targetY = options.position && parseInt(options.position, 10) || 0;
        let initialY = dom.scrollTop(scrollTarget);
        let lastY = initialY;
        let delta = targetY - initialY;
        // duration in ms, make it a bit shorter for short distances
        // this is not scientific and you might want to adjust this for
        // your preferences
        let speed = options.speed ||
            Math.min(750, Math.min(1500, Math.abs(initialY - targetY)));
        // temp letiables (t will be a position between 0 and 1, y is the calculated scrollTop)
        let start;
        let t;
        let y;

        // abort if already in progress or nothing to scroll
        if (scrollInProgress) {
            //console.log(scrollInProgress);
            return;
        }

        if (delta === 0) {
            return;
        }

        // quint ease-in-out smoothing, from
        // https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js#L127-L136
        function smooth(pos) {
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 5);
            }

            return 0.5 * (Math.pow((pos - 2), 5) + 2);
        }

        function abort() {
            let cancelScroll = function () {
                abort();
            };
            Events.off(scrollTarget, 'touchstart', cancelScroll);
            scrollInProgress = false;
        }

        let cancelScroll = function () {
            abort();
        };

        // when there's a touch detected while scrolling is in progress, abort
        // the scrolling (emulates native scrolling behavior)
        Events.on(scrollTarget, 'touchstart', cancelScroll);
        scrollInProgress = true;

        // start rendering away! note the function given to frame
        // is named "render" so we can reference it again further down
        rAF(function render(now) {
            if (!scrollInProgress) {
                return;
            }

            if (!start) {
                start = now;
            }

            // calculate t, position of animation in [0..1]
            t = Math.min(1, Math.max((now - start) / speed, 0));
            // calculate the new scrollTop position (don't forget to smooth)
            y = Math.round(initialY + delta * smooth(t));
            // bracket scrollTop so we're never over-scrolling
            if (delta > 0 && y > targetY) {
                y = targetY;
            }

            if (delta < 0 && y < targetY) {
                y = targetY;
            }
            // only actually set scrollTop if there was a change front he last frame
            if (lastY !== y) {
                dom.scrollTop(scrollTarget, y);
            }

            lastY = y;
            // if we're not done yet, queue up an other frame to render,
            // or clean up
            if (y !== targetY) {
                rAF(render);
            } else {
                abort();
            }
        });
    },
};

module.exports = SmoothScrollMixin;
