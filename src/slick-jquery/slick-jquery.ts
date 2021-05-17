import { SlickBase } from '../slick';

export class SlickJquery extends SlickBase {
    constructor() {
        super();
        
        dataSettings = $(element).data('slick') || {};

        _.options = $.extend({}, _.defaults, settings, dataSettings);

        _.currentSlide = _.options.initialSlide;

        _.originalSettings = _.options;

        if (typeof document.mozHidden !== 'undefined') {
            _.hidden = 'mozHidden';
            _.visibilityChange = 'mozvisibilitychange';
        } else if (typeof document.webkitHidden !== 'undefined') {
            _.hidden = 'webkitHidden';
            _.visibilityChange = 'webkitvisibilitychange';
        }

        _.autoPlay = $.proxy(_.autoPlay, _);
        _.autoPlayClear = $.proxy(_.autoPlayClear, _);
        _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
        _.changeSlide = $.proxy(_.changeSlide, _);
        _.clickHandler = $.proxy(_.clickHandler, _);
        _.selectHandler = $.proxy(_.selectHandler, _);
        _.setPosition = $.proxy(_.setPosition, _);
        _.swipeHandler = $.proxy(_.swipeHandler, _);
        _.dragHandler = $.proxy(_.dragHandler, _);
        _.keyHandler = $.proxy(_.keyHandler, _);

        _.instanceUid = instanceUid++;

        // A simple way to check for HTML strings
        // Strict HTML recognition (must start with <)
        // Extracted from jQuery v1.11 source
        _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


        _.registerBreakpoints();
        _.init(true);
    }
}