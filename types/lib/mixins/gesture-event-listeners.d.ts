/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/mixins/gesture-event-listeners.html
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

/// <reference path="../utils/boot.d.ts" />
/// <reference path="../utils/mixin.d.ts" />
/// <reference path="../utils/gestures.d.ts" />

declare namespace Polymer {


  /**
   * Element class mixin that provides API for adding Polymer's cross-platform
   * gesture events to nodes.
   *
   * The API is designed to be compatible with override points implemented
   * in `Polymer.TemplateStamp` such that declarative event listeners in
   * templates will support gesture events when this mixin is applied along with
   * `Polymer.TemplateStamp`.
   */
  function GestureEventListeners<T extends new (...args: any[]) => {}>(base: T): T & GestureEventListenersConstructor;

  interface GestureEventListenersConstructor {
    new(...args: any[]): GestureEventListeners;
  }

  interface GestureEventListeners {

    /**
     * Add the event listener to the node if it is a gestures event.
     *
     * @param node Node to add event listener to
     * @param eventName Name of event
     * @param handler Listener function to add
     */
    _addEventListenerToNode(node: EventTarget, eventName: string, handler: (p0: Event) => void): void;

    /**
     * Remove the event listener to the node if it is a gestures event.
     *
     * @param node Node to remove event listener from
     * @param eventName Name of event
     * @param handler Listener function to remove
     */
    _removeEventListenerFromNode(node: EventTarget, eventName: string, handler: (p0: Event) => void): void;
  }
}
