import $ from 'jquery';

import { SlickSettings } from '../slick/slick-settings';
import { SlickBase } from '../slick/slick-base';
import { ISlickSettings } from '../slick/slick-settings.interface'

export class SlickJquery extends SlickBase {
    // A simple way to check for HTML strings
    // Strict HTML recognition (must start with <)
    // Extracted from jQuery v1.11 source
    private htmlExpr: RegExp = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

    constructor(element: HTMLElement, settings: ISlickSettings) {
        super();

        const dataSettings: ISlickSettings = $(element).data('slick') || {};

        this.options.extend(settings)
        this.options.extend(dataSettings);

        this.init(true);
    }
}