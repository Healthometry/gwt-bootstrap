/*
 * #%L
 * GwtBootstrap3
 * %%
 * Copyright (C) 2013 - 2015 GwtBootstrap3
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */

/**
 * Creates a property on a parent object if it doesn't already exist, enabling safe
 * namespace construction for the gwt-bootstrap library.
 *
 * This function implements a defensive programming pattern that prevents accidental
 * overwrites of existing properties. It's particularly useful for establishing
 * nested object hierarchies that mirror Java package structures in JavaScript.
 *
 * @param {Object} parent - The parent object to which the new property will be added.
 *                         This is typically an existing namespace object like 'org'
 *                         or 'org.gwtbootstrap3'.
 *
 * @param {string} name - The name of the property to create. This can be a simple
 *                       identifier like 'client' or 'ui'.
 *
 * @param {*} value - The value to assign to the new property. This can be an empty
 *                    object ({}) for namespace creation or a function for method
 *                    definition.
 *
 * @returns {void}
 *
 * @throws {TypeError} Implicitly throws if parent is null or undefined
 */
function _gwtbootstrap3_Create(parent, name, value) {
    if (typeof parent[name] === 'undefined') parent[name] = value;
}

_gwtbootstrap3_Create(this, "org", {});
_gwtbootstrap3_Create(org, "gwtbootstrap3", {});
_gwtbootstrap3_Create(org.gwtbootstrap3, "client", {});
_gwtbootstrap3_Create(org.gwtbootstrap3.client, "ui", {});
_gwtbootstrap3_Create(org.gwtbootstrap3.client.ui, "base", {});
_gwtbootstrap3_Create(org.gwtbootstrap3.client.ui.base, "AbstractTooltip", {});
_gwtbootstrap3_Create(org.gwtbootstrap3.client.ui.base.AbstractTooltip, "updateBool",
function(dataTarget, e, option, value) {
    window.jQuery(e).data(dataTarget).options[option] = value;
});
_gwtbootstrap3_Create(org.gwtbootstrap3.client.ui.base.AbstractTooltip, "updateDelay",
function(dataTarget, e, showDelay, hideDelay) {
    window.jQuery(e).data(dataTarget).options['delay'] = {
        show : showDelay,
        hide : hideDelay
    };
});
_gwtbootstrap3_Create(org.gwtbootstrap3.client.ui.base.AbstractTooltip, "updateString",
function(dataTarget, e, option, value) {
    window.jQuery(e).data(dataTarget).options[option] = value;
});
_gwtbootstrap3_Create(org.gwtbootstrap3.client.ui.base.AbstractTooltip, "updateViewport",
function(dataTarget, e, selector, padding) {
    window.jQuery(e).data(dataTarget).options['viewport'] = {
        selector : selector,
        padding : padding
    };
});
_gwtbootstrap3_Create(org.gwtbootstrap3.client.ui, "Affix", {});
_gwtbootstrap3_Create(org.gwtbootstrap3.client.ui.Affix, "internalAffix",
function(e, offset) {
    window.jQuery(e).affix({
        offset: offset
    });
});
_gwtbootstrap3_Create(org.gwtbootstrap3.client.ui, "Carousel", {});
_gwtbootstrap3_Create(org.gwtbootstrap3.client.ui.Carousel, "carousel",
function(e, interval, pause, wrap) {
    window.jQuery(e).carousel({
        interval: interval,
        pause: pause,
        wrap: wrap
    });
});
_gwtbootstrap3_Create(org.gwtbootstrap3.client.ui, "ScrollSpy", {});
_gwtbootstrap3_Create(org.gwtbootstrap3.client.ui.ScrollSpy, "init",
function(e, target) {
    window.jQuery(e).scrollspy({
        target: target
    });
});
_gwtbootstrap3_Create(org.gwtbootstrap3.client, "GwtBootstrap3EntryPoint", {});
_gwtbootstrap3_Create(org.gwtbootstrap3.client.GwtBootstrap3EntryPoint, "isBootstrapLoaded",
function () {
    return typeof window['jQuery'].fn.emulateTransitionEnd !== 'undefined';
});
_gwtbootstrap3_Create(org.gwtbootstrap3.client.GwtBootstrap3EntryPoint, "isjQueryLoaded",
function () {
    return (typeof window['jQuery'] !== 'undefined');
});
