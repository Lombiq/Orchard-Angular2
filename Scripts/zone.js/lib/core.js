System.register(['./keys', './patch/promise'], function(exports_1) {
    var keys, promise;
    var deprecated, Zone;
    function deprecatedWarning(key, text) {
        if (!deprecated.hasOwnProperty(key)) {
            deprecated[key] = true;
            console.warn("DEPRECATION WARNING: '" + key +
                "' is no longer supported and will be removed in next major release. " + text);
        }
    }
    return {
        setters:[
            function (keys_1) {
                keys = keys_1;
            },
            function (promise_1) {
                promise = promise_1;
            }],
        execute: function() {
            deprecated = {};
            Zone = (function () {
                function Zone(parentZone, data) {
                    this.parent = null;
                    // onError is used to override error handling.
                    // When a custom error handler is provided, it should most probably rethrow the exception
                    // not to break the expected control flow:
                    //
                    // `promise.then(fnThatThrows).catch(fn);`
                    //
                    // When this code is executed in a zone with a custom onError handler that doesn't rethrow, the
                    // `.catch()` branch will not be taken as the `fnThatThrows` exception will be swallowed by the
                    // handler.
                    this.onError = null;
                    var zone = (arguments.length) ? Object.create(parentZone) : this;
                    zone.parent = parentZone || null;
                    Object.keys(data || {}).forEach(function (property) {
                        var _property = property.substr(1);
                        // augment the new zone with a hook decorates the parent's hook
                        if (property[0] === '$') {
                            zone[_property] = data[property](parentZone[_property] || function () { });
                        }
                        else if (property[0] === '+') {
                            if (parentZone[_property]) {
                                zone[_property] = function () {
                                    var result = parentZone[_property].apply(this, arguments);
                                    data[property].apply(this, arguments);
                                    return result;
                                };
                            }
                            else {
                                zone[_property] = data[property];
                            }
                        }
                        else if (property[0] === '-') {
                            if (parentZone[_property]) {
                                zone[_property] = function () {
                                    data[property].apply(this, arguments);
                                    return parentZone[_property].apply(this, arguments);
                                };
                            }
                            else {
                                zone[_property] = data[property];
                            }
                        }
                        else {
                            zone[property] = (typeof data[property] === 'object') ?
                                JSON.parse(JSON.stringify(data[property])) :
                                data[property];
                        }
                    });
                    zone.$id = Zone.nextId++;
                    return zone;
                }
                Zone.prototype.fork = function (locals) {
                    this.onZoneCreated();
                    return new Zone(this, locals);
                };
                Zone.prototype.bind = function (fn, skipEnqueue) {
                    if (typeof fn !== 'function') {
                        throw new Error('Expecting function got: ' + fn);
                    }
                    skipEnqueue || this.enqueueTask(fn);
                    var zone = this.isRootZone() ? this : this.fork();
                    return function zoneBoundFn() {
                        return zone.run(fn, this, arguments);
                    };
                };
                /// @deprecated
                Zone.prototype.bindOnce = function (fn) {
                    deprecatedWarning('bindOnce', 'There is no replacement.');
                    var boundZone = this;
                    return this.bind(function () {
                        var result = fn.apply(this, arguments);
                        boundZone.dequeueTask(fn);
                        return result;
                    });
                };
                Zone.prototype.isRootZone = function () {
                    return this.parent === null;
                };
                Zone.prototype.run = function (fn, applyTo, applyWith) {
                    applyWith = applyWith || [];
                    var oldZone = global.zone;
                    // MAKE THIS ZONE THE CURRENT ZONE
                    global.zone = this;
                    try {
                        this.beforeTask();
                        return fn.apply(applyTo, applyWith);
                    }
                    catch (e) {
                        if (this.onError) {
                            this.onError(e);
                        }
                        else {
                            throw e;
                        }
                    }
                    finally {
                        this.afterTask();
                        // REVERT THE CURRENT ZONE BACK TO THE ORIGINAL ZONE
                        global.zone = oldZone;
                    }
                };
                Zone.prototype.beforeTask = function () { };
                Zone.prototype.onZoneCreated = function () { };
                Zone.prototype.afterTask = function () { };
                Zone.prototype.enqueueTask = function (fn) {
                    deprecatedWarning('enqueueTask', 'Use addTask/addRepeatingTask/addMicroTask');
                };
                Zone.prototype.dequeueTask = function (fn) {
                    deprecatedWarning('dequeueTask', 'Use removeTask/removeRepeatingTask/removeMicroTask');
                };
                Zone.prototype.addTask = function (taskFn) { this.enqueueTask(taskFn); };
                Zone.prototype.removeTask = function (taskFn) { this.dequeueTask(taskFn); };
                Zone.prototype.addRepeatingTask = function (taskFn) { this.enqueueTask(taskFn); };
                Zone.prototype.removeRepeatingTask = function (taskFn) { this.dequeueTask(taskFn); };
                Zone.prototype.addMicrotask = function (taskFn) { this.enqueueTask(taskFn); };
                Zone.prototype.removeMicrotask = function (taskFn) { this.dequeueTask(taskFn); };
                Zone.prototype.addEventListener = function () {
                    return this[keys.common.addEventListener].apply(this, arguments);
                };
                Zone.prototype.removeEventListener = function () {
                    return this[keys.common.removeEventListener].apply(this, arguments);
                };
                // Root zone ID === 1
                Zone.nextId = 1;
                Zone.bindPromiseFn = promise.bindPromiseFn;
                return Zone;
            })();
            exports_1("Zone", Zone);
            ;
        }
    }
});
//# sourceMappingURL=core.js.map