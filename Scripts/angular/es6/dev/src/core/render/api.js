export class RenderComponentType {
    constructor(id, encapsulation, styles) {
        this.id = id;
        this.encapsulation = encapsulation;
        this.styles = styles;
    }
}
export class Renderer {
}
/**
 * Injectable service that provides a low-level interface for modifying the UI.
 *
 * Use this service to bypass Angular's templating and make custom UI changes that can't be
 * expressed declaratively. For example if you need to set a property or an attribute whose name is
 * not statically known, use {@link #setElementProperty} or {@link #setElementAttribute}
 * respectively.
 *
 * If you are implementing a custom renderer, you must implement this interface.
 *
 * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
 */
export class RootRenderer {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL2NvcmUvcmVuZGVyL2FwaS50cyJdLCJuYW1lcyI6WyJSZW5kZXJDb21wb25lbnRUeXBlIiwiUmVuZGVyQ29tcG9uZW50VHlwZS5jb25zdHJ1Y3RvciIsIlJlbmRlcmVyIiwiUm9vdFJlbmRlcmVyIl0sIm1hcHBpbmdzIjoiQUFFQTtJQUNFQSxZQUFtQkEsRUFBVUEsRUFBU0EsYUFBZ0NBLEVBQ25EQSxNQUE2QkE7UUFEN0JDLE9BQUVBLEdBQUZBLEVBQUVBLENBQVFBO1FBQVNBLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFtQkE7UUFDbkRBLFdBQU1BLEdBQU5BLE1BQU1BLENBQXVCQTtJQUFHQSxDQUFDQTtBQUN0REQsQ0FBQ0E7QUFJRDtBQTBDQUUsQ0FBQ0E7QUFFRDs7Ozs7Ozs7Ozs7R0FXRztBQUVIO0FBRUFDLENBQUNBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9tZXRhZGF0YS92aWV3JztcblxuZXhwb3J0IGNsYXNzIFJlbmRlckNvbXBvbmVudFR5cGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IHN0cmluZywgcHVibGljIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLFxuICAgICAgICAgICAgICBwdWJsaWMgc3R5bGVzOiBBcnJheTxzdHJpbmcgfCBhbnlbXT4pIHt9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyZW50UmVuZGVyZXIgeyByZW5kZXJDb21wb25lbnQoY29tcG9uZW50VHlwZTogUmVuZGVyQ29tcG9uZW50VHlwZSk6IFJlbmRlcmVyOyB9XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZW5kZXJlciBpbXBsZW1lbnRzIFBhcmVudFJlbmRlcmVyIHtcbiAgYWJzdHJhY3QgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IFJlbmRlckNvbXBvbmVudFR5cGUpOiBSZW5kZXJlcjtcblxuICBhYnN0cmFjdCBzZWxlY3RSb290RWxlbWVudChzZWxlY3Rvcjogc3RyaW5nKTogYW55O1xuXG4gIGFic3RyYWN0IGNyZWF0ZUVsZW1lbnQocGFyZW50RWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcpOiBhbnk7XG5cbiAgYWJzdHJhY3QgY3JlYXRlVmlld1Jvb3QoaG9zdEVsZW1lbnQ6IGFueSk6IGFueTtcblxuICBhYnN0cmFjdCBjcmVhdGVUZW1wbGF0ZUFuY2hvcihwYXJlbnRFbGVtZW50OiBhbnkpOiBhbnk7XG5cbiAgYWJzdHJhY3QgY3JlYXRlVGV4dChwYXJlbnRFbGVtZW50OiBhbnksIHZhbHVlOiBzdHJpbmcpOiBhbnk7XG5cbiAgYWJzdHJhY3QgcHJvamVjdE5vZGVzKHBhcmVudEVsZW1lbnQ6IGFueSwgbm9kZXM6IGFueVtdKTtcblxuICBhYnN0cmFjdCBhdHRhY2hWaWV3QWZ0ZXIobm9kZTogYW55LCB2aWV3Um9vdE5vZGVzOiBhbnlbXSk7XG5cbiAgYWJzdHJhY3QgZGV0YWNoVmlldyh2aWV3Um9vdE5vZGVzOiBhbnlbXSk7XG5cbiAgYWJzdHJhY3QgZGVzdHJveVZpZXcoaG9zdEVsZW1lbnQ6IGFueSwgdmlld0FsbE5vZGVzOiBhbnlbXSk7XG5cbiAgYWJzdHJhY3QgbGlzdGVuKHJlbmRlckVsZW1lbnQ6IGFueSwgbmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pO1xuXG4gIGFic3RyYWN0IGxpc3Rlbkdsb2JhbCh0YXJnZXQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiBGdW5jdGlvbjtcblxuICBhYnN0cmFjdCBzZXRFbGVtZW50UHJvcGVydHkocmVuZGVyRWxlbWVudDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgcHJvcGVydHlWYWx1ZTogYW55KTtcblxuICBhYnN0cmFjdCBzZXRFbGVtZW50QXR0cmlidXRlKHJlbmRlckVsZW1lbnQ6IGFueSwgYXR0cmlidXRlTmFtZTogc3RyaW5nLCBhdHRyaWJ1dGVWYWx1ZTogc3RyaW5nKTtcblxuICAvKipcbiAgICogVXNlZCBvbmx5IGluIGRlYnVnIG1vZGUgdG8gc2VyaWFsaXplIHByb3BlcnR5IGNoYW5nZXMgdG8gY29tbWVudCBub2RlcyxcbiAgICogc3VjaCBhcyA8dGVtcGxhdGU+IHBsYWNlaG9sZGVycy5cbiAgICovXG4gIGFic3RyYWN0IHNldEJpbmRpbmdEZWJ1Z0luZm8ocmVuZGVyRWxlbWVudDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgcHJvcGVydHlWYWx1ZTogc3RyaW5nKTtcblxuICBhYnN0cmFjdCBzZXRFbGVtZW50Q2xhc3MocmVuZGVyRWxlbWVudDogYW55LCBjbGFzc05hbWU6IHN0cmluZywgaXNBZGQ6IGJvb2xlYW4pO1xuXG4gIGFic3RyYWN0IHNldEVsZW1lbnRTdHlsZShyZW5kZXJFbGVtZW50OiBhbnksIHN0eWxlTmFtZTogc3RyaW5nLCBzdHlsZVZhbHVlOiBzdHJpbmcpO1xuXG4gIGFic3RyYWN0IGludm9rZUVsZW1lbnRNZXRob2QocmVuZGVyRWxlbWVudDogYW55LCBtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTtcblxuICBhYnN0cmFjdCBzZXRUZXh0KHJlbmRlck5vZGU6IGFueSwgdGV4dDogc3RyaW5nKTtcbn1cblxuLyoqXG4gKiBJbmplY3RhYmxlIHNlcnZpY2UgdGhhdCBwcm92aWRlcyBhIGxvdy1sZXZlbCBpbnRlcmZhY2UgZm9yIG1vZGlmeWluZyB0aGUgVUkuXG4gKlxuICogVXNlIHRoaXMgc2VydmljZSB0byBieXBhc3MgQW5ndWxhcidzIHRlbXBsYXRpbmcgYW5kIG1ha2UgY3VzdG9tIFVJIGNoYW5nZXMgdGhhdCBjYW4ndCBiZVxuICogZXhwcmVzc2VkIGRlY2xhcmF0aXZlbHkuIEZvciBleGFtcGxlIGlmIHlvdSBuZWVkIHRvIHNldCBhIHByb3BlcnR5IG9yIGFuIGF0dHJpYnV0ZSB3aG9zZSBuYW1lIGlzXG4gKiBub3Qgc3RhdGljYWxseSBrbm93biwgdXNlIHtAbGluayAjc2V0RWxlbWVudFByb3BlcnR5fSBvciB7QGxpbmsgI3NldEVsZW1lbnRBdHRyaWJ1dGV9XG4gKiByZXNwZWN0aXZlbHkuXG4gKlxuICogSWYgeW91IGFyZSBpbXBsZW1lbnRpbmcgYSBjdXN0b20gcmVuZGVyZXIsIHlvdSBtdXN0IGltcGxlbWVudCB0aGlzIGludGVyZmFjZS5cbiAqXG4gKiBUaGUgZGVmYXVsdCBSZW5kZXJlciBpbXBsZW1lbnRhdGlvbiBpcyBgRG9tUmVuZGVyZXJgLiBBbHNvIGF2YWlsYWJsZSBpcyBgV2ViV29ya2VyUmVuZGVyZXJgLlxuICovXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSb290UmVuZGVyZXIgaW1wbGVtZW50cyBQYXJlbnRSZW5kZXJlciB7XG4gIGFic3RyYWN0IHJlbmRlckNvbXBvbmVudChjb21wb25lbnRUeXBlOiBSZW5kZXJDb21wb25lbnRUeXBlKTogUmVuZGVyZXI7XG59XG4iXX0=