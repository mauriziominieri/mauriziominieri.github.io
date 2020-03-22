/*https://www.android.com/static/js/android-10/v2/main.min.js*/
/*ORIGINALE, DEVO ANDARE A SCRIVERE LA FUNZIONE accordion NEL pageControlMove2.js   carousel e container*/
webpackJsonp([11], {
	0: function (e, t, a) {
		"use strict";

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function n(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.BaseComponent = void 0;
		var l = Object.assign || function (e) {
				for (var t = 1, a; t < arguments.length; t++)
					for (var o in a = arguments[t], a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
				return e
			},
			r = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			s = a(30),
			c = o(s),
			_ = a(19),
			d = o(_),
			u = a(20),
			p = o(u),
			y = a(31),
			b = o(y),
			m = a(9),
			g = o(m),
			f = a(2),
			h = a(3),
			v = t.BaseComponent = function () {
				function e(t, a) {
					var o = this;
					i(this, e), this.global_ = window, this.element = this.getElement_(t), this.body_ = document.body, this.store_ = a, this.observer_ = null, this.topics_ = f.Topics, this.subscriptions_ = [], this.events = {}, this.config_ = this.getDataConfiguration_(), this.animationConfig_ = this.getDataAnimation_(), document.addEventListener("DOMContentLoaded", function () {
						o.initialize(), o.bindEvents(), o.subscribe_(), o.markAsInitialized_()
					})
				}
				return r(e, [{
					key: "markAsInitialized_",
					value: function () {
						var e = this.store_.state.componentsToLoad;
						e.delete(this), this.store_.state = {
							componentsToLoad: e
						}
					}
				}, {
					key: "on",
					value: function (e, t) {
						var a = this,
							o = t && !(0, d.default)(t),
							n = (0, p.default)(e),
							i = "\"" + e + "\" should be a string.";
						if (t) {
							if (!n) throw new Error(i);
							if (o) throw new Error("\"" + t + "\" should be a function.");
							return this.bindEvent(e, null, t), this
						}
						return new Promise(function (t, o) {
							n || o(new Error(i)), a.bindEvent(e, null, t)
						})
					}
				}, {
					key: "trigger",
					value: function (e, t) {
						var a = (0, p.default)(e),
							o = (0, b.default)(t);
						if (!a) throw new Error("\"" + e + "\" should be a string.");
						if (t && !o) throw new Error("\"" + t + "\" should be an object.");
						return this.element.dispatchEvent(new CustomEvent(e, {
							detail: t
						})), this
					}
				}, {
					key: "bindEvents",
					value: function () {
						var e = this.events;
						if (e) {
							for (var t in e)
								if (e.hasOwnProperty(t)) {
									var a = e[t];
									if ((0, d.default)(a) || (a = this[a]), !a) continue;
									var o = t.match(k.EVENT_SPLITTER);
									this.bindEvent(o[1], o[2], a)
								}
							return this
						}
					}
				}, {
					key: "subscribe_",
					value: function () {
						this.store_.subscribe(this.subscriptions_)
					}
				}, {
					key: "bindEvent",
					value: function (e, t, a) {
						var o = this;
						if (this.element) return t && t.length ? ([].concat(n(this.element.querySelectorAll(t))).map(function (t) {
							t.addEventListener(e, a.bind(o), !1)
						}), this) : (this.element.addEventListener(e, a.bind(this), !1), this)
					}
				}, {
					key: "toSelectorCase",
					value: function (e) {
						return (e + "").replace(/([A-Z])/g, "-$1").toLowerCase()
					}
				}, {
					key: "getAttribute",
					value: function (e, t) {
						var a = e.getAttribute("" + C.DATA + this.toSelectorCase(t));
						return a && (a = a.trim()), "true" == a || "True" == a || "" == a || ("false" == a || "False" == a ? !1 : a)
					}
				}, {
					key: "hasAttribute",
					value: function (e, t) {
						return e.hasAttribute("" + C.DATA + this.toSelectorCase(t))
					}
				}, {
					key: "setAttribute",
					value: function (e, t, a) {
						return e.setAttribute("" + C.DATA + this.toSelectorCase(t), a), this
					}
				}, {
					key: "removeAttribute",
					value: function (e, t) {
						return e.removeAttribute("" + C.DATA + this.toSelectorCase(t)), this
					}
				}, {
					key: "getElement_",
					value: function (e) {
						if ((0, p.default)(e)) return document.querySelector(e);
						if (!(e instanceof Element)) throw new Error(e + " should be an Element");
						return e
					}
				}, {
					key: "initialize",
					value: function () {}
				}, {
					key: "getDataConfiguration_",
					value: function () {
						return (0, g.default)(this.element, "data-android-component-config")
					}
				}, {
					key: "getDataAnimation_",
					value: function () {
						var e = this.element.getAttribute("data-android-component-animation") || "";
						return this.global_.location.pathname.includes("_docs") ? this.global_.configurations[e] : c.default[e]
					}
				}, {
					key: "trackComponentVisibility_",
					value: function (t, a) {
						var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
							n = this,
							i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : !0,
							o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : [];
						if ("IntersectionObserver" in this.global_) {
							if (e.threshold && e.threshold.length) throw new h.InvalidThresholdForComponentVisibility(this.element);
							var r = l({
								root: null,
								rootMargin: "0px 0px 0px 0px",
								threshold: 0
							}, e);
							this.observer_ = new IntersectionObserver(function (l, e) {
								n.trackComponentVisibilityCallback_(t, a, i, r.threshold, l, e)
							}, r), o && o.length ? o.forEach(function (e) {
								n.observer_.observe(e)
							}) : this.observer_.observe(this.element)
						}
					}
				}, {
					key: "untrackComponentVisibility_",
					value: function () {
						var e = this,
							t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
						this.observer_ && (t && t.length ? t.forEach(function (t) {
							e.observer_.unobserve(t)
						}) : this.observer_.unobserve(this.element))
					}
				}, {
					key: "trackComponentVisibilityCallback_",
					value: function (e, t, a, o, n, i) {
						n.forEach(function (n) {
							e && n.intersectionRatio > o ? (e(n), a && i.unobserve(n.target)) : t && (t(n), a && i.unobserve(n.target))
						})
					}
				}]), e
			}(),
			C = {
				DATA: "data-"
			},
			k = {
				EVENT_SPLITTER: /^(\S+)\s*(.*)$/
			}
	},
	104: function (e, t, a) {
		"use strict";

		function o(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function l(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.Accordion = void 0;
		var r = Object.assign || function (e) {
				for (var t = 1, a; t < arguments.length; t++)
					for (var o in a = arguments[t], a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
				return e
			},
			s = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			c = a(0),
			_ = a(105),
			d = t.Accordion = function (e) {
				function t(e, a) {
					n(this, t);
					var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return o.config_ = o.processDefaultConfigurations_(), o.configByBreakpoint_ = null, o.currentBreakpoint_ = null, o.blockCssClass_ = "accordion", o.accordionHiddenCssClass_ = o.blockCssClass_ + "--is-hidden", o.items_ = [], o.render_ = o.render_.bind(o), o
				}
				return l(t, e), s(t, [{
					key: "initialize",
					value: function () {
						this.subscriptions_ = [
							[this.topics_.APP_LOADED, this.render_],
							[this.topics_.BREAKPOINT_CHANGE, this.render_]
						], this.initChildren_()
					}
				}, {
					key: "initChildren_",
					value: function () {
						var e = this;
						this.items_ = [].concat(o(this.element.querySelectorAll(u.ITEM))).map(function (e) {
							return new _.AccordionItem(e)
						}), this.items_.length && this.items_.forEach(function (t) {
							t.initialize(), t.on(_.AccordionItemEvents.TOGGLE, function (t) {
								return e.updateState_(t.detail)
							})
						})
					}
				}, {
					key: "destroy_",
					value: function () {
						this.openAll(), this.items_.forEach(function (e) {
							e.head_.tabIndex = -1, e.head_.querySelector(u.BUTTON).tabIndex = -1, e.deleteBodyStyle()
						})
					}
				}, {
					key: "updateState_",
					value: function (e) {
						this.configByBreakpoint_.autoClose && this.closeAll(), e.open ? this.items_.filter(function (t) {
							return t.getId() === e.id
						})[0].openItem() : this.items_.filter(function (t) {
							return t.getId() === e.id
						})[0].closeItem()
					}
				}, {
					key: "openAll",
					value: function () {
						this.items_.map(function (e) {
							return e.openItem()
						})
					}
				}, {
					key: "closeAll",
					value: function () {
						this.items_.map(function (e) {
							return e.closeItem()
						})
					}
				}, {
					key: "processDefaultConfigurations_",
					value: function () {
						var e = r({}, this.config_);
						return e.small = r({
							hideAccordion: !1,
							autoClose: !0
						}, this.config_.small), e.medium = r({
							hideAccordion: !1,
							autoClose: !0
						}, this.config_.medium), e.large = r({
							hideAccordion: !1,
							autoClose: !0
						}, this.config_.large), e["extra-large"] = r({
							hideAccordion: !1,
							autoClose: !0
						}, this.config_["extra-large"]), e
					}
				}, {
					key: "render_",
					value: function () {
						this.currentBreakpoint_ === this.store_.state.currentBreakpoint || (this.currentBreakpoint_ = this.store_.state.currentBreakpoint, this.configByBreakpoint_ = this.config_[this.currentBreakpoint_], this.configByBreakpoint_.hideAccordion ? (this.element.classList.add(this.accordionHiddenCssClass_), this.destroy_(), this.updateA11y_(!0)) : (this.element.classList.remove(this.accordionHiddenCssClass_), this.closeAll(), this.updateA11y_(!1), this.items_.forEach(function (e) {
							e.head_.removeAttribute("tabindex"), e.head_.querySelector(u.BUTTON).removeAttribute("tabindex")
						})))
					}
				}, {
					key: "updateA11y_",
					value: function (e) {
						e ? (this.element.removeAttribute("role"), this.element.removeAttribute("aria-multiselectable"), this.items_.forEach(function (e) {
							e.head_.removeAttribute("role"), e.head_.removeAttribute("aria-expanded");
							var t = e.head_.querySelector(u.BUTTON);
							t.removeAttribute("aria-controls"), t.setAttribute("role", "text"), e.body_.removeAttribute("role"), e.body_.removeAttribute("aria-labelledBy"), e.body_.removeAttribute("aria-expanded"), e.body_.removeAttribute("aria-hidden")
						})) : (this.element.setAttribute("role", "tablist"), this.element.setAttribute("aria-multiselectable", !0), this.items_.forEach(function (e) {
							e.head_.setAttribute("role", "tab"), e.head_.setAttribute("aria-expanded", !1);
							var t = e.head_.querySelector(u.BUTTON);
							t.setAttribute("aria-controls", e.body_.id), t.removeAttribute("role"), e.head_.setAttribute("role", "tabpanel"), e.body_.setAttribute("aria-labelledBy", e.head_.id), e.body_.setAttribute("aria-expanded", !1), e.body_.setAttribute("aria-hidden", !0)
						}))
					}
				}]), t
			}(c.BaseComponent),
			u = {
				ITEM: ".accordion__item",
				BUTTON: ".accordion__item-button"
			}
	},
	105: function (e, t, a) {
		"use strict";

		function o(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function l(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AccordionItemEvents = t.AccordionItem = void 0;
		var r = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			s = a(0),
			c = a(13),
			_ = a(6),
			d = t.AccordionItem = function (e) {
				function t(e) {
					n(this, t);
					var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return a.head_ = null, a.body_ = null, a.ctas_ = [], a.isOpen = !1, a.id_ = null, a.events = {
						"click .accordion__item-head": a.onClick_
					}, a
				}
				return l(t, e), r(t, [{
					key: "initialize",
					value: function () {
						this.setDomReferences_(), this.height_ = this.content_.offsetHeight, this.id_ = this.head_.getAttribute("id"), this.isOpen = this.head_.getAttribute(c.aria.State.EXPANDED) === p.TRUE, this.body_.style.height = this.isOpen ? this.height_ : 0, this.bindEvents(), this.global_.addEventListener("resize", (0, _.debounce)(this.onResize_.bind(this), 500))
					}
				}, {
					key: "setDomReferences_",
					value: function () {
						this.head_ = this.element.querySelector(u.HEAD), this.body_ = this.element.querySelector(u.BODY), this.content_ = this.body_.querySelector(u.CONTENT), this.ctas_ = [].concat(o(this.body_.querySelectorAll(u.CTA)))
					}
				}, {
					key: "deleteBodyStyle",
					value: function () {
						this.body_.style = ""
					}
				}, {
					key: "onClick_",
					value: function (t) {
						t.preventDefault(), this.trigger(y.TOGGLE, {
							id: this.id_,
							open: !this.isOpen
						})
					}
				}, {
					key: "onResize_",
					value: function () {
						this.body_.hasAttribute("aria-expanded") && this.updateHeight_()
					}
				}, {
					key: "openItem",
					value: function () {
						this.isOpen = !0, this.setAriaExpanded_(p.TRUE), this.setAriaHidden_(p.FALSE), this.updateHeight_(), this.setTabIndex_(0)
					}
				}, {
					key: "closeItem",
					value: function () {
						this.isOpen = !1, this.setAriaExpanded_(p.FALSE), this.setAriaHidden_(p.TRUE), this.updateHeight_(), this.setTabIndex_(-1)
					}
				}, {
					key: "setAriaExpanded_",
					value: function (e) {
						this.head_.setAttribute(c.aria.State.EXPANDED, e), this.body_.setAttribute(c.aria.State.EXPANDED, e)
					}
				}, {
					key: "setTabIndex_",
					value: function (e) {
						this.ctas_.forEach(function (t) {
							t.tabIndex = e
						})
					}
				}, {
					key: "setAriaHidden_",
					value: function (e) {
						this.body_.setAttribute(c.aria.State.HIDDEN, e)
					}
				}, {
					key: "updateHeight_",
					value: function () {
						this.height_ = this.content_.offsetHeight, this.body_.style.height = this.isOpen ? this.height_ + "px" : 0
					}
				}, {
					key: "getId",
					value: function () {
						return this.id_
					}
				}]), t
			}(s.BaseComponent),
			u = {
				HEAD: ".accordion__item-head",
				BODY: ".accordion__item-body",
				CONTENT: ".accordion__item-content",
				CTA: ".cta"
			},
			p = {
				TRUE: "true",
				FALSE: "false"
			},
			y = t.AccordionItemEvents = {
				TOGGLE: "AccordionItem:toggle"
			}
	},
	106: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.Video = void 0;
		var l = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			r = a(0),
			s = a(6),
			c = a(4),
			_ = t.Video = function (e) {
				function t(e, a) {
					var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
					o(this, t);
					var l = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return l.id = l.getAttribute(l.element, d.VIDEO_ID), l.isLegacy_ = i, l.duration = null, l.sources = l.getAttribute(l.element, d.VIDEO_SOURCES), l.posterSources = l.getAttribute(l.element, d.VIDEO_POSTER_SOURCES), l.source_ = null, l.poster_ = null, l.autoplay_ = !0, l.autoplayMobile_ = !0, l.allowMobileAutoPlay_ = !0, l.preload_ = null, l.loop_ = null, l.isMobile_ = !1, l.loaded_ = !1, l.isIntersecting_ = !1, l.currentBreakpoint_ = "", l.subscriptions_ = [], l.handleBreakpointChange_ = l.handleBreakpointChange_.bind(l), l.setUpVideo_ = l.setUpVideo_.bind(l), l.playVideo_ = l.playVideo_.bind(l), l.stopVideo_ = l.stopVideo_.bind(l), l
				}
				return i(t, e), l(t, [{
					key: "initialize",
					value: function () {
						if (!this.id) throw new Error(u.REQUIRED_ID);
						this.subscriptions_ = [
							[this.topics_.BREAKPOINT_CHANGE, this.handleBreakpointChange_]
						], this.currentBreakpoint_ = this.store_.state.currentBreakpoint, this.isLegacy_ ? this.setUpVideo_() : this.subscriptions_.push([this.topics_.APP_LOADED, this.setUpVideo_])
					}
				}, {
					key: "setUpVideo_",
					value: function () {
						var e = this;
						this.isMobile_ = "small" === this.currentBreakpoint_, this.loop_ = this.getAttribute(this.element, d.VIDEO_LOOP) || !1, this.preload_ = this.getAttribute(this.element, d.VIDEO_PRELOAD) || "none", this.autoplayMobile_ = this.config_.hasOwnProperty("autoplayMobile") ? this.config_.autoplayMobile : this.autoplayMobile_, this.allowMobileAutoPlay_ = !this.isMobile_ || this.isMobile_ && this.autoplayMobile_, this.config_.isOnModal && this.subscribeEvents_(), this.setPoster_(), this.trackComponentVisibility_(function () {
							e.isIntersecting_ = !0, e.startVideo_()
						}, function () {
							e.isIntersecting_ = !1, e.pauseVideo_()
						}, this.config_.autoplayObserver, !1)
					}
				}, {
					key: "subscribeEvents_",
					value: function () {
						this.subscriptions_.push([this.topics_.SHOW_MODAL_CONTENT, this.playVideo_], [this.topics_.CLOSE_MODAL, this.stopVideo_])
					}
				}, {
					key: "handleBreakpointChange_",
					value: function () {
						this.config_.isOnModal || (this.currentBreakpoint_ = this.store_.state.currentBreakpoint, this.setVideoMediaPaths(!0), this.setPoster_())
					}
				}, {
					key: "setPoster_",
					value: function () {
						var e = this.posterSource,
							t = this.getPosterPath_(this.posterSources);
						e !== t && (this.posterSource = t, this.element.poster = this.posterSource)
					}
				}, {
					key: "setVideo_",
					value: function () {
						var e = this;
						this.element.loop = this.loop_, this.element.preload = this.preload_, this.duration = new Promise(function (t) {
							e.element.addEventListener("loadedmetadata", function () {
								t(e.element.duration)
							})
						}), this.preload_ && this.element.load(), this.config_.autoplay || this.pauseVideo_(), this.allowMobileAutoPlay_ && this.config_.autoplay_ && 0 === this.config_.delay && (this.element.autoplay = this.autoplay_, this.playVideo_())
					}
				}, {
					key: "setVideoMediaPaths",
					value: function () {
						var e = this,
							t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
						if (!this.sources) throw new Error(u.REQUIRED_PATH);
						this.pauseVideo_();
						var a = this.videoSource,
							o = this.getSourcePath_(this.sources);
						a !== o && (this.videoSource = o, this.element.src = this.videoSource), t && this.element.load(), this.isIntersecting_ && (0, c.requestTimeout)(function () {
							e.playVideo_()
						}, 100)
					}
				}, {
					key: "canPlay_",
					value: function () {
						return 2 < this.element.readyState
					}
				}, {
					key: "playVideo_",
					value: function () {
						var e = this;
						return 0 < this.config_.delay ? (0, c.requestTimeout)(function () {
							e.element.play()
						}, this.config_.delay) : this.element.play(), this
					}
				}, {
					key: "pauseVideo_",
					value: function () {
						return !this.element.paused && this.canPlay_() && this.element.pause(), this.config_.isOnTimer && (this.element.currentTime = 0), this
					}
				}, {
					key: "stopVideo_",
					value: function () {
						return this.element.paused || (this.pauseVideo_(), this.element.currentTime = 0), this
					}
				}, {
					key: "startVideo_",
					value: function () {
						this.loaded_ || (this.setVideoMediaPaths(), this.setVideo_(), this.loaded_ = !0), this.config_.autoplay && this.playVideo_()
					}
				}, {
					key: "getSourcePath_",
					value: function (e) {
						var t = this.getPathsBySize_(e);
						return t[this.currentBreakpoint_]
					}
				}, {
					key: "getPosterPath_",
					value: function (e) {
						var t = this.getPathsBySize_(e);
						if (this.isLegacy_) return "" + t[this.currentBreakpoint_];
						var a = this.store_.state,
							o = a.isConnectionFast,
							n = a.supportsWebp,
							i = (0, s.getCloudImageParams)(o, n);
						return t[this.currentBreakpoint_] + "-" + i
					}
				}, {
					key: "getPathsBySize_",
					value: function (e) {
						return e = JSON.parse(e.replace(/'/g, "\"")), {
							small: e.mobile,
							medium: e.tablet ? e.tablet : e.mobile,
							large: e.desktop ? e.desktop : e.mobile,
							"extra-large": e.largeDesktop ? e.largeDesktop : e.desktop
						}
					}
				}]), t
			}(r.BaseComponent),
			d = {
				VIDEO_ID: "cVideoId",
				VIDEO_SOURCES: "cVideoSources",
				VIDEO_POSTER_SOURCES: "cVideoPosterSources",
				VIDEO_PRELOAD: "cVideoPreload",
				VIDEO_LOOP: "cVideoLoop",
				VIDEO_AUTOPLAY: "cVideoAutoPlay"
			},
			u = {
				REQUIRED_ID: "Video Component should have a data-c-video-id attribute.",
				REQUIRED_PATH: "Video Component should have a data-c-video-path attribute."
			}
	},
	118: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AnimationLottie = void 0;
		var l = Object.assign || function (e) {
				for (var t = 1, a; t < arguments.length; t++)
					for (var o in a = arguments[t], a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
				return e
			},
			r = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			s = a(0),
			c = a(3),
			_ = a(9),
			d = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(_),
			u = t.AnimationLottie = function (e) {
				function t(e, a) {
					o(this, t);
					var i = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return i.lottieAnimation_ = null, i.isReduceMotionOn_ = !1, i.isLottieLoaded_ = !1, i.animationConfig_ = i.getAnimationConfig_(), i.animationContainer_ = null, i.lottieAnimationConfig_ = null, i.trackFrameConfig_ = null, i.stopAnimations_ = i.stopAnimations_.bind(i), i.handleReduceMotionChange_ = i.handleReduceMotionChange_.bind(i), i.setLottieAnimation_ = i.setLottieAnimation_.bind(i), i.trackingFrames_ = i.trackingFrames_.bind(i), i
				}
				return i(t, e), r(t, [{
					key: "initialize",
					value: function () {
						this.subscribeEvents_(), this.setLottieInitialConfig_()
					}
				}, {
					key: "setLottieAnimation_",
					value: function (e, t) {
						if (this.store_.state.supportsWebp && t.assets && (t.assets = this.convertImagesPathToWebp(t.assets)), 1 < this.config_.id.split(",").length && (this.config_.id = this.config_.id.split(",")[0]), this.global_.lottie && this.config_.id === e) this.lottieAnimationConfig_ = l({
							animationData: t
						}, this.lottieAnimationConfig_, this.animationConfig_), this.lottieAnimation_ = this.global_.lottie.loadAnimation(this.lottieAnimationConfig_), this.isLottieLoaded_ = !0, this.setComponentVisibility_(), this.store_.unsubscribe(this.topics_.LOTTIE_ANIMATION_LOADED, this.setLottieAnimation_);
						else if (!this.global_.lottie) throw new c.ThirdPartyNotFound("Lottie")
					}
				}, {
					key: "setLottieInitialConfig_",
					value: function () {
						this.animationContainer_ = this.element.querySelector(this.animationConfig_.customContainer) ? this.element.querySelector(this.animationConfig_.customContainer) : this.element, this.trackFrameConfig_ = this.animationConfig_.trackFrame || null, this.lottieAnimationConfig_ = {
							container: this.animationContainer_,
							renderer: "svg",
							loop: !1,
							autoplay: !1
						}
					}
				}, {
					key: "setComponentVisibility_",
					value: function () {
						var e = this;
						this.trackComponentVisibility_(function () {
							requestAnimationFrame(function () {
								e.isReduceMotionOn_ || e.playAnimation_()
							})
						}, function () {
							requestAnimationFrame(function () {
								e.isReduceMotionOn_ || e.stopAnimation_()
							})
						}, this.config_.autoplayObserver || {
							threshold: 0.1
						}, !1)
					}
				}, {
					key: "playAnimation_",
					value: function () {
						var e = this;
						this.trackFrameConfig_ && this.lottieAnimation_.addEventListener("enterFrame", this.trackingFrames_), setTimeout(function () {
							e.lottieAnimation_.play()
						}, this.animationConfig_.delay || 0)
					}
				}, {
					key: "stopAnimation_",
					value: function () {
						this.trackFrameConfig_ && (this.lottieAnimation_.removeEventListener("enterFrame", this.trackingFrames_), this.element.classList.contains(this.trackFrameConfig_.selector) ? this.element.classList.remove(this.trackFrameConfig_.selector) : null), this.lottieAnimation_.stop()
					}
				}, {
					key: "trackingFrames_",
					value: function (e) {
						var t = this.isTrackingFrameFinish_(e);
						t && (this.lottieAnimation_.removeEventListener("enterFrame", this.trackingFrames_), this.element.classList.add(this.trackFrameConfig_.selector))
					}
				}, {
					key: "isTrackingFrameFinish_",
					value: function (e) {
						return e.currentTime > this.trackFrameConfig_.frameChange
					}
				}, {
					key: "getAnimationConfig_",
					value: function () {
						return (0, d.default)(this.element, "data-android-component-animation-config") || ""
					}
				}, {
					key: "handleReduceMotionChange_",
					value: function () {
						this.isReduceMotionOn_ = this.store_.state.reduceMotion, this.isReduceMotionOn_ && this.isLottieLoaded_ && this.stopAnimations_()
					}
				}, {
					key: "stopAnimations_",
					value: function () {
						this.lottieAnimation_.stop()
					}
				}, {
					key: "convertImagesPathToWebp",
					value: function (e) {
						var t = /\.(jpe?g|png|gif)$/i;
						return e.forEach(function (e) {
							e.p && (e.p = e.p.replace(t, ".webp"))
						}), e
					}
				}, {
					key: "subscribeEvents_",
					value: function () {
						this.subscriptions_ = [
							[this.topics_.REDUCED_MOTION_CHANGE, this.handleReduceMotionChange_],
							[this.topics_.LOTTIE_ANIMATION_LOADED, this.setLottieAnimation_]
						]
					}
				}]), t
			}(s.BaseComponent)
	},
	119: function (e, t, a) {
		"use strict";

		function o(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function l(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.TabTimer = void 0;
		var r = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			s = a(0),
			c = a(4),
			_ = a(3),
			d = a(7),
			u = t.TabTimer = function (e) {
				function t(e, a) {
					n(this, t);
					var l = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return l.parent_ = l.element.parentElement, l.tablist_ = l.element.querySelectorAll(p.TAB_LIST)[0], l.tabs_ = [].concat(o(l.element.querySelectorAll(p.TAB_BUTTON))), l.timerStarted_ = !1, l.componentTimeout_ = 0, l.panels_ = [].concat(o(l.element.querySelectorAll(p.TAB_PANEL))), l.panelsDelays_ = l.getDelaysFromPanels_(l.panels_), l.direction_ = {
						37: -1,
						38: -1,
						39: 1,
						40: 1
					}, l.events = {
						"click .tab-timer__button": function (t) {
							return l.clickTab_(t)
						},
						"keydown .tab-timer__button": function (t) {
							return l.keydownTab_(t)
						},
						"keyup .tab-timer__button": function (t) {
							return l.keyupTab_(t)
						}
					}, l.startTimer_ = l.startTimer_.bind(l), l.stopTimer_ = l.stopTimer_.bind(l), l
				}
				return l(t, e), r(t, [{
					key: "initialize",
					value: function () {
						if (!this.tablist_ || !this.tabs_ || !this.panels_) throw new _.ComponentElementsNotFound("TabTimer", this.element);
						this.subscribeEvents_()
					}
				}, {
					key: "subscribeEvents_",
					value: function () {
						this.subscriptions_ = [
							[this.topics_.TIMER_START, this.startTimer_],
							[this.topics_.TIMER_STOP, this.stopTimer_]
						]
					}
				}, {
					key: "getDelaysFromPanels_",
					value: function (e) {
						var t = [];
						return e.forEach(function (e) {
							var a = e.dataset.duration;
							t.push(a ? a : 5e3)
						}), t
					}
				}, {
					key: "clickTab_",
					value: function (e) {
						var t = e.target;
						this.pauseTimer_(), this.activateTab_(t, !1)
					}
				}, {
					key: "keydownTab_",
					value: function (e) {
						var t = e.keyCode;
						t === d.KeyCodes.END ? (this.pauseTimer_(), e.preventDefault(), this.activateTab_(this.tabs_[this.tabs_.length - 1])) : t === d.KeyCodes.HOME ? (this.pauseTimer_(), e.preventDefault(), this.activateTab_(this.tabs_[0])) : t === d.KeyCodes.UP || t === d.KeyCodes.DOWN ? (this.pauseTimer_(), this.determineOrientation_(e)) : void 0
					}
				}, {
					key: "keyupTab_",
					value: function (e) {
						var t = e.keyCode;
						t === d.KeyCodes.LEFT || t === d.KeyCodes.RIGHT ? (this.pauseTimer_(), this.determineOrientation_(e)) : void 0
					}
				}, {
					key: "activateTab_",
					value: function (e) {
						var t = this,
							a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !0;
						this.deactivateAllTabs_(), e.removeAttribute("tabindex");
						var o = e.getAttribute("aria-controls");
						requestAnimationFrame(function () {
							document.getElementById(o).classList.remove("hidden"), t.tablist_.classList.add("is-animating"), e.setAttribute("aria-selected", "true")
						}), a && e.focus()
					}
				}, {
					key: "deactivateAllTabs_",
					value: function () {
						var e = this;
						this.tabs_.forEach(function (t) {
							t.setAttribute("tabindex", "-1"), t.setAttribute("aria-selected", "false"), t.removeEventListener("focus", e.focusEventHandler)
						}), this.panels_.forEach(function (e) {
							requestAnimationFrame(function () {
								e.classList.add("hidden")
							})
						})
					}
				}, {
					key: "determineOrientation_",
					value: function (e) {
						var t = e.keyCode,
							a = this.tablist_.getAttribute("aria-orientation"),
							o = !1;
						"vertical" === a ? (t === d.KeyCodes.UP || t === d.KeyCodes.DOWN) && (e.preventDefault(), o = !0) : (t === d.KeyCodes.LEFT || t === d.KeyCodes.RIGHT) && (o = !0), o && this.switchTabOnArrowPress_(e)
					}
				}, {
					key: "switchTabOnArrowPress_",
					value: function (e) {
						var t = this,
							a = e.keyCode,
							o = this.element.querySelector(p.TAB_SELECTED),
							n = this.tabs_.indexOf(o);
						this.tabs_.forEach(function (e) {
							e.addEventListener("focus", function (a) {
								return t.focusEventHandler_(a)
							})
						}), this.direction_[a] && void 0 !== n && (this.tabs_[n + this.direction_[a]] ? this.tabs_[n + this.direction_[a]].focus() : a === d.KeyCodes.LEFT || a === d.KeyCodes.UP ? this.focusLastTab() : (a === d.KeyCodes.RIGHT || a == d.KeyCodes.DOWN) && this.focusFirstTab())
					}
				}, {
					key: "focusFirstTab",
					value: function () {
						this.tabs_[0].focus()
					}
				}, {
					key: "focusLastTab",
					value: function () {
						this.tabs_[this.tabs_.length - 1].focus()
					}
				}, {
					key: "focusEventHandler_",
					value: function (e) {
						var t = this,
							a = e.target;
						(0, c.requestTimeout)(function () {
							t.checkTabFocus_(a)
						}, 300)
					}
				}, {
					key: "checkTabFocus_",
					value: function (e) {
						var t = document.activeElement;
						e === t && this.activateTab_(e, !1)
					}
				}, {
					key: "startTimer_",
					value: function (e) {
						var t = this;
						if (e === this.parent_.id) {
							this.timerStarted_ = !0;
							var a = 0,
								o = function e() {
									requestAnimationFrame(function () {
										t.componentTimeout_ = setTimeout(function () {
											a = t.activateNextTab_(), e(a)
										}, t.panelsDelays_[a])
									})
								};
							requestAnimationFrame(function () {
								t.tablist_.classList.add("is-animating")
							}), o()
						}
					}
				}, {
					key: "stopTimer_",
					value: function (e) {
						var t = this;
						e === this.parent_.id && this.timerStarted_ && (clearTimeout(this.componentTimeout_), requestAnimationFrame(function () {
							t.tablist_.classList.remove("is-animating")
						}))
					}
				}, {
					key: "pauseTimer_",
					value: function () {
						var e = this;
						clearTimeout(this.componentTimeout_), requestAnimationFrame(function () {
							e.tablist_.classList.remove("is-animating")
						})
					}
				}, {
					key: "activateNextTab_",
					value: function () {
						var e = this.element.querySelector(p.TAB_SELECTED),
							t = this.tabs_.indexOf(e) + 1,
							a = this.tabs_[t];
						return void 0 === a ? (this.activateTab_(this.tabs_[0], !1), 0) : (this.activateTab_(a, !1), t)
					}
				}]), t
			}(s.BaseComponent),
			p = {
				TAB_BUTTON: ".tab-timer__button",
				TAB_LIST: ".tab-timer__tablist",
				TAB_PANEL: ".tab-timer__panel",
				TAB_SELECTED: ".tab-timer__button[aria-selected=\"true\"]"
			}
	},
	120: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.ContentResizable = void 0;
		var l = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			r = a(0),
			s = t.ContentResizable = function (e) {
				function t(e, a) {
					o(this, t);
					var i = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return i.isInitialized_ = !1, i.blockCssClass_ = i.config_.blockCssClass, i.lastKnownScrollPosition_ = 0, i.stopDistance_ = 0, i.currentScale_ = 1, i.isScrollingDown_ = !0, i.image_ = null, i.content_ = null, i.initialPositionY_ = 100, i.scalesPerBreakpoint_ = i.config_.scalesPerBreakpoint, i.trackElement_ = i.trackElement_.bind(i), i.untrackElement_ = i.untrackElement_.bind(i), i.handleScroll_ = i.handleScroll_.bind(i), i.handleBreakpointChange_ = i.handleBreakpointChange_.bind(i), i
				}
				return i(t, e), l(t, [{
					key: "initialize",
					value: function () {
						this.subscriptions_ = [
							[this.topics_.BREAKPOINT_CHANGE, this.handleBreakpointChange_]
						], this.image_ = this.element.querySelector("." + this.blockCssClass_ + "__image-wrapper"), this.content_ = this.element.querySelector("." + this.blockCssClass_ + "__content-wrapper"), this.trackComponentVisibility_(this.trackElement_, this.untrackElement_, {
							rootMargin: "0px"
						}, !1)
					}
				}, {
					key: "handleScroll_",
					value: function () {
						var e = this;
						this.isScrollingDown_ = this.lastKnownScrollPosition_ < this.global_.pageYOffset, this.lastKnownScrollPosition_ = this.global_.pageYOffset, this.isTicking_ || requestAnimationFrame(function () {
							return e.resizeAndScale_()
						}), this.isTicking_ = !0
					}
				}, {
					key: "resizeAndScale_",
					value: function () {
						var e = this.getAnimatedDistance_();
						this.shouldAnimate_(e) || !this.isInitialized_ ? (this.currentScale_ = this.getScaleAmount_(e), this.currentPositionY = this.getCurrentPositionY_(e), this.image_.style.transform = "scale(" + (1 < this.currentScale_ ? 1 : this.currentScale_) + ")", this.content_.style.transform = "translateY(" + this.currentPositionY + "px)") : 0 > e && (this.image_.style.transform = "scale(1)", this.content_.style.transform = "translateY(" + this.initialPositionY_ + "px)"), this.isInitialized_ = !0, this.isTicking_ = !1
					}
				}, {
					key: "getCurrentPositionY_",
					value: function (e) {
						var t = e / this.stopDistance_,
							a = t * this.initialPositionY_;
						return Math.floor(this.initialPositionY_ - a)
					}
				}, {
					key: "getScaleAmount_",
					value: function (e) {
						var t = this.scalesPerBreakpoint_[this.store_.state.currentBreakpoint];
						return 1 - t * (e / this.stopDistance_)
					}
				}, {
					key: "shouldAnimate_",
					value: function (e) {
						return 0 <= e && e <= this.stopDistance_
					}
				}, {
					key: "getAnimatedDistance_",
					value: function () {
						var e = Math.round(this.lastKnownScrollPosition_ - this.element.offsetTop);
						return this.isInitialized_ ? e : e > this.stopDistance_ ? this.stopDistance_ : 0 < e ? e : void 0
					}
				}, {
					key: "trackElement_",
					value: function () {
						this.handleScroll_(), this.global_.addEventListener("scroll", this.handleScroll_), this.refreshStopDistance_()
					}
				}, {
					key: "untrackElement_",
					value: function () {
						this.global_.removeEventListener("scroll", this.handleScroll_)
					}
				}, {
					key: "refreshStopDistance_",
					value: function () {
						this.stopDistance_ = .5 * (2 * this.image_.offsetHeight / 3)
					}
				}, {
					key: "handleBreakpointChange_",
					value: function () {
						this.refreshStopDistance_()
					}
				}]), t
			}(r.BaseComponent)
	},
	124: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.Selectors = t.ContentMultimedia = void 0;
		var l = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			r = a(0),
			s = a(9),
			c = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(s),
			_ = "data-android-component-config",
			d = t.ContentMultimedia = function (e) {
				function t(e, a) {
					o(this, t);
					var i = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return i.animations_ = null, i.backgroundAnimationsLoaded_ = !1, i.timer_ = i.element.querySelector(u.TIMER), i.setUpAnimations_ = i.setUpAnimations_.bind(i), i
				}
				return i(t, e), l(t, [{
					key: "initialize",
					value: function () {
						this.subscriptions_ = [
							[this.topics_.APP_LOADED, this.setUpAnimations_]
						], this.scrollAnimated && this.subscriptions_.push([this.topics_.BREAKPOINT_CHANGE, this.scrollAnimated.handleBreakpointChange__])
					}
				}, {
					key: "setUpAnimations_",
					value: function () {
						var e = this;
						this.animations_ = this.element.querySelectorAll("[data-android-component=\"animation-lottie\"]") || null, 0 < this.animations_.length && (this.animations_.forEach(function (t) {
							var a = (0, c.default)(t, _).id;
							e.store_.dispatch(e.topics_.REGISTER_ANIMATION, {
								id: a
							})
						}), this.store_.dispatch(this.topics_.LOAD_ANIMATION, {
							id: (0, c.default)(this.animations_[0], _).id
						})), this.trackVisibility_()
					}
				}, {
					key: "trackVisibility_",
					value: function () {
						var e = this;
						this.trackComponentVisibility_(function () {
							0 < e.animations_.length && !e.backgroundAnimationsLoaded_ && (e.animations_.forEach(function (t, a) {
								if (1 <= a) {
									var o = (0, c.default)(t, _).id;
									e.store_.dispatch(e.topics_.LOAD_ANIMATION, {
										id: o
									})
								}
							}), e.backgroundAnimationsLoaded_ = !0), e.timer_ && e.store_.dispatch(e.topics_.TIMER_START, {
								id: e.element.id
							})
						}, function () {
							e.timer_ && e.store_.dispatch(e.topics_.TIMER_STOP, {
								id: e.element.id
							})
						}, {
							rootMargin: "0px 0px 0px 0px",
							threshold: 0.1
						}, !1)
					}
				}]), t
			}(r.BaseComponent),
			u = t.Selectors = {
				TIMER: ".content-multimedia__timer-wrapper"
			}
	},
	13: function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.aria = {
			setState: function (e, t, a) {
				e.setAttribute(t, a)
			},
			State: {
				CHECKED: "aria-checked",
				HIDDEN: "aria-hidden",
				INVALID: "aria-invalid",
				LABEL: "aria-label",
				READONLY: "aria-readonly",
				REQUIRED: "aria-required",
				EXPANDED: "aria-expanded"
			}
		}
	},
	14: function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.debounce = function (e, t, a) {
			var o;
			return function () {
				for (var n = arguments.length, i = Array(n), l = 0; l < n; l++) i[l] = arguments[l];
				var r = a && !o;
				clearTimeout(o), o = setTimeout(function () {
					o = null, a || e.apply(void 0, i)
				}, t), r && e.apply.apply(e, i)
			}
		}
	},
	140: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AnchorScroll = void 0;
		var l = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			r = a(0),
			s = a(26),
			c = a(3),
			_ = t.AnchorScroll = function (e) {
				function t(e, a) {
					o(this, t);
					var i = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return i.events = {
						click: function (e) {
							return i.handleClick_(e)
						}
					}, i
				}
				return i(t, e), l(t, [{
					key: "handleClick_",
					value: function (e) {
						var t = this;
						e.preventDefault();
						var a = document.querySelector(this.config_.scrollTo);
						if (a) this.store_.state = {
							isAnimatingScroll: !0,
							anchorScrollTargetID: a.id
						}, (0, s.scrollToUtil)(e, a, function () {
							return t.animatedScrollDone_()
						}, this.config_.scrollOffset, this.config_.scrollDuration);
						else throw new c.AnchorScrollToNotFound
					}
				}, {
					key: "animatedScrollDone_",
					value: function () {
						this.store_.state = {
							isAnimatingScroll: !1,
							anchorScrollTargetID: ""
						}
					}
				}]), t
			}(r.BaseComponent)
	},
	15: function (e, t) {
		"use strict";

		function a(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			n = function () {
				function e(t) {
					if (a(this, e), this.global_ = t, this.prefix_ = "and_", this.constructor === e) throw new TypeError("DAO is an abstract class. Please do not use directly.");
					if (void 0 === this.isSupported_) throw new TypeError("DAO classes need to implement a isSupported_ method.");
					if (void 0 === this.save) throw new TypeError("DAO classes need to implement a save method.");
					if (void 0 === this.read) throw new TypeError("DAO classes need to implement a read method.");
					if (void 0 === this.delete) throw new TypeError("DAO classes need to implement a delete method.")
				}
				return o(e, [{
					key: "generateKey_",
					value: function (e) {
						return "" + this.prefix_ + e
					}
				}]), e
			}();
		t.default = n
	},
	16: function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.logDevOnly = function () {}
	},
	17: function (e, t, a) {
		"use strict";

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			l = a(55),
			r = o(l),
			s = a(56),
			c = o(s),
			_ = a(57),
			d = o(_),
			u = window,
			p = function () {
				function e() {
					n(this, e)
				}
				return i(e, null, [{
					key: "get",
					value: function (e) {
						switch (e) {
							case "short-term":
								return this.cookieStorageDao_ = this.cookieStorageDao_ || new d.default(u), this.cookieStorageDao_;
							case "persistent":
								return this.localStorageDao_ = this.localStorageDao_ || new c.default(u), this.localStorageDao_;
							case "temporary":
							default:
								return this.sessionStorageDao_ = this.sessionStorageDao_ || new r.default(u), this.sessionStorageDao_;
						}
					}
				}, {
					key: "getMockedDao_",
					value: function () {
						return {
							save: function () {
								return console.log("Saving into mocked DAO")
							},
							read: function () {
								return console.log("Reading from mocked DAO")
							},
							delete: function () {
								return console.log("Deleting from mocked DAO")
							}
						}
					}
				}]), e
			}();
		t.default = p
	},
	19: function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			return "function" == typeof e
		}
	},
	2: function (e, t) {
		"use strict";

		function a(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = Object.assign || function (e) {
				for (var t = 1, a; t < arguments.length; t++)
					for (var o in a = arguments[t], a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
				return e
			},
			n = t.Topics = ["APP_LOADED", "LOTTIE_ANIMATION_LOADED", "BREAKPOINT_CHANGE", "CLOSE_MODAL", "CLOSE_SURVEY", "COOKIE_BANNER_INTERACTION", "CONTENT_FILTERED", "GA_TRACK_EVENT", "HIDE_MODAL_CONTENT", "NAV_HIDDEN", "NAV_SHOWN", "NAV_SCROLL_CHANGE", "LOAD_ANIMATION", "REDUCED_MOTION_CHANGE", "REGISTER_FOCUSABLE_MODAL_ELEMENTS", "REGISTER_SURVEY", "REGISTER_ANIMATION", "SEARCH_CLOSED", "SEARCH_OPENED", "SHOW_MODAL", "SHOW_MODAL_CONTENT", "SHOW_SURVEY", "START_LOTTERY", "START_SURVEY", "STEP_CHANGE", "SUBMIT_SURVEY", "TIMER_START", "TIMER_STOP", "TOGGLE_THEME", "TRACK_SCROLL_POSITION", "TYPING_STOP", "WINDOW_RESIZE_ENDED", "WINDOW_RESIZE_STARTED"].reduce(function (e, t) {
				return t = a({}, t, t), o({}, e, t)
			}, {})
	},
	20: function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			return "string" == typeof e
		}
	},
	207: function (e, t, a) {
		"use strict";

		function o(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function l(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.RotatingHeading = void 0;
		var r = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			s = a(0),
			c = a(4),
			_ = t.RotatingHeading = function (e) {
				function t(e, a) {
					n(this, t);
					var l = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return l.blockCssClass_ = "rotating-heading", l.headingCssClass_ = l.blockCssClass_ + "__heading", l.headingVisibileModifierCssClass_ = l.headingCssClass_ + "--visible", l.headingHiddenModifierCssClass_ = l.headingCssClass_ + "--hidden", l.headingHeightCssVariable_ = "--heading-height", l.headings_ = [].concat(o(l.element.querySelectorAll("." + l.headingCssClass_))), l.currentIndex_ = 0, l.animatedHeading_ = void 0, l.waitToRotate_ = 1e3 * l.config_.waitToRotate || 1E3, l.isInfinite_ = !!l.config_.isInfinite, l.startRotatingInterval_ = null, l.restartHeadingsHeight_ = l.restartHeadingsHeight_.bind(l), l
				}
				return l(t, e), r(t, [{
					key: "initialize",
					value: function () {
						this.subscriptions_ = [
							[this.topics_.WINDOW_RESIZE_ENDED, this.restartHeadingsHeight_]
						];
						var e = this.global_.matchMedia("(prefers-reduced-motion)");
						e.matches || this.startAnimation_()
					}
				}, {
					key: "startAnimation_",
					value: function () {
						var e = this;
						(0, c.requestTimeout)(function () {
							e.rotateHeadings_(), e.startRotatingInterval_ = setInterval(function () {
								return e.rotateHeadings_()
							}, e.waitToRotate_)
						}, this.config_.timeout || 500)
					}
				}, {
					key: "rotateHeadings_",
					value: function () {
						var e = this;
						(0, c.requestTimeout)(function () {
							var t = e.animatedHeading_;
							e.shouldGoOn_() ? (e.restartPreviousHeading_(t), e.animateNextHeading_()) : clearInterval(e.startRotatingInterval_)
						})
					}
				}, {
					key: "animateNextHeading_",
					value: function () {
						this.animatedHeading_ && this.animatedHeading_.classList.add(this.headingHiddenModifierCssClass_), this.currentIndex_ >= this.headings_.length && (this.currentIndex_ = 0), this.setHeadingsHeight_(this.currentIndex_), this.animatedHeading_ = this.headings_[this.currentIndex_], this.animatedHeading_.classList.add(this.headingVisibileModifierCssClass_), this.currentIndex_++
					}
				}, {
					key: "setHeadingsHeight_",
					value: function (e) {
						var t = this;
						if (this.headings_[e]) {
							var a = this.headings_[e].offsetHeight;
							requestAnimationFrame(function () {
								t.element.firstElementChild.style.setProperty(t.headingHeightCssVariable_, a + "px")
							})
						}
					}
				}, {
					key: "restartPreviousHeading_",
					value: function (e) {
						var t = this;
						e && (0, c.requestTimeout)(function () {
							e.classList.remove(t.headingVisibileModifierCssClass_), e.classList.remove(t.headingHiddenModifierCssClass_)
						}, this.waitToRotate_)
					}
				}, {
					key: "restartHeadingsHeight_",
					value: function () {
						this.isInfinite_ || this.setHeadingsHeight_(this.headings_.length - 1)
					}
				}, {
					key: "shouldGoOn_",
					value: function () {
						return this.isInfinite_ || this.currentIndex_ < this.headings_.length && !this.isInfinite_
					}
				}]), t
			}(s.BaseComponent)
	},
	24: function (e, t) {
		"use strict";

		function a(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			n = function () {
				function e(t, o) {
					if (a(this, e), this.store_ = t, this.performance_ = o, this.userMetSpentEnoughTimeCondition_ = !1, this.userMetScrolledEnoughCondition_ = !1, this.userMetNavigatedEnoughCondition_ = !1, this.constructor === e) throw new TypeError("VALIDATOR IS AN ABSTRACT CLASS");
					if (void 0 === this.execute) throw new TypeError("CLASS MUST HAVE THE VALIDATE METHOD")
				}
				return o(e, [{
					key: "userSpentEnoughTime_",
					value: function (e) {
						var t = this.performance_.now();
						return !this.userMetSpentEnoughTimeCondition_ && t > e && (this.userMetSpentEnoughTimeCondition_ = !0), this.userMetSpentEnoughTimeCondition_
					}
				}, {
					key: "userScrolledEnough_",
					value: function (e) {
						return !this.userMetScrolledEnoughCondition_ && this.store_.state.scrollPercentage >= e && (this.userMetScrolledEnoughCondition_ = !0), this.userMetScrolledEnoughCondition_
					}
				}, {
					key: "userNavigatedEnough_",
					value: function (e) {
						return !this.userMetNavigatedEnoughCondition_ && 2 >= e && (this.userMetNavigatedEnoughCondition_ = !0), this.userMetNavigatedEnoughCondition_
					}
				}]), e
			}();
		t.default = n
	},
	26: function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.scrollToUtil = void 0;
		var o = a(4),
			n = a(35),
			i = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n);
		t.scrollToUtil = function (t, e) {
			var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null,
				n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "0%",
				l = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 1e3,
				r = window.matchMedia("(prefers-reduced-motion)"),
				s = 0,
				c = e;
			do s += c.offsetTop || 0, c = c.offsetParent; while (c);
			s += window.innerHeight * (Number.parseInt(n) / 100), i.default.polyfill();
			var _ = function (e, t) {
				window.pageYOffset === t && (e.tabIndex = 0, e.focus())
			};
			(function () {
				r.matches || (t.preventDefault(), window.scrollTo({
					top: s,
					behavior: "smooth"
				}), (0, o.requestTimeout)(function () {
					_(e, s), a && a()
				}, l))
			})()
		}
	},
	27: function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.throttle = function (e, t) {
			var a, o, n;
			return function () {
				for (var i = arguments.length, l = Array(i), r = 0; r < i; r++) l[r] = arguments[r];
				a ? (clearTimeout(o), o = setTimeout(function () {
					Date.now() - n >= t && (e(l), n = Date.now())
				}, t - (Date.now() - n))) : (e(l), n = Date.now(), a = !0)
			}
		}
	},
	28: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.TrackerEvents = t.TrackerCategories = t.Tracker = void 0;
		var n = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			i = a(20),
			l = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(i),
			r = t.Tracker = function () {
				function e() {
					o(this, e)
				}
				return n(e, null, [{
					key: "trackEvent",
					value: function (t, a, o, n, i) {
						e.pushCommand_(s.EVENT, t, a, o, n, i)
					}
				}, {
					key: "pushCommand_",
					value: function () {
						for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
						var o = window.ga || window.tracker || window.gaTracker;
						o && (t = t.filter(function (e) {
							if (null != e) return (0, l.default)(e) ? e : e.toString()
						}), o.pushCommand(t))
					}
				}]), e
			}(),
			s = {
				EVENT: "_trackEvent"
			},
			c = t.TrackerCategories = {
				SCROLL_DEPTH: "scroll-depth"
			},
			_ = t.TrackerEvents = {
				SCROLLED: "scrolled",
				CLICKED: "clicked"
			}
	},
	29: function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.focusTrap = void 0;
		var o = a(3),
			n = a(7),
			i = t.focusTrap = function (e) {
				if (!e) throw new o.FocusTrapError;
				var t = l.FOCUSABLE_ELEMENT_SELECTORS.join(","),
					a = e.querySelectorAll(t),
					i;
				if (0 < a.length) {
					var r = a[0],
						s = a[a.length - 1];
					i = function (t) {
						t.keyCode === n.KeyCodes.TAB && (t.shiftKey && document.activeElement === r ? (t.preventDefault(), s.focus()) : !t.shiftKey && document.activeElement === s && (t.preventDefault(), r.focus()))
					}, e.addEventListener("keydown", i)
				} else e.setAttribute("tabindex", -1), e.focus();
				return function () {
					i && e.removeEventListener("keydown", i)
				}
			},
			l = {
				FOCUSABLE_ELEMENT_SELECTORS: ["[contenteditable]", "[tabindex=\"0\"]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "object", "select:not([disabled])", "textarea:not([disabled])"]
			}
	},
	3: function (e, t) {
		"use strict";

		function a(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function n(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = t.AndroidError = function (e) {
				function t(e, n) {
					a(this, t);
					var i = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return i.message = "\n      --\n      ANDROID-ERROR-" + e + "\n      --\n\n      " + n + "\n    ", i
				}
				return n(t, e), t
			}(Error),
			l = t.AndroidComponentNotFound = function (e) {
				function t(e, n) {
					return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 1, "The component " + e + " couldn't be found for the element\n        with class name \"." + n.className + "\". Please make sure the Javascript\n        file exists and it's properly configured."))
				}
				return n(t, e), t
			}(i),
			r = t.SubscriptionFormatError = function (e) {
				function t() {
					return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 2, "The this.subscriptions_ array format is not correct."))
				}
				return n(t, e), t
			}(i),
			s = t.WrongSubscriptionTopic = function (e) {
				function t() {
					return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 3, "The component has a wrong subscription topic configuration that\n        needs to be fixed."))
				}
				return n(t, e), t
			}(i),
			c = t.WrongSubscriptionCallback = function (e) {
				function t() {
					return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 4, "The component has a wrong subscription callback configuration that\n       needs to be fixed."))
				}
				return n(t, e), t
			}(i),
			_ = t.CarouselNotFound = function (e) {
				function t() {
					return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 5, "The carousel has not been found."))
				}
				return n(t, e), t
			}(i),
			d = t.ThemeNotFoundError = function (e) {
				function t() {
					return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 6, "The specified theme was not found."))
				}
				return n(t, e), t
			}(i),
			u = t.AnchorScrollToNotFound = function (e) {
				function t() {
					return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 7, "The target element to scroll to was not found."))
				}
				return n(t, e), t
			}(i),
			p = t.ComponentElementsNotFound = function (e) {
				function t(e, n) {
					return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 8, "The component " + e + " does not have the necessary\n      children on the element with class name \"." + n.className + "\".\n      Please make sure component it's properly configured."))
				}
				return n(t, e), t
			}(i),
			y = t.DataLayerNotFound = function (e) {
				function t() {
					return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 9, "DataLayer is not present on the page, data won't be sent."))
				}
				return n(t, e), t
			}(i),
			b = t.InvalidThresholdForComponentVisibility = function (e) {
				function t(e) {
					return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 10, "The element " + e + " does not have a valid threshold\n      configured for the trackComponentVisibility function.\n      Make sure a number is provided."))
				}
				return n(t, e), t
			}(i),
			m = t.FocusTrapError = function (e) {
				function t() {
					return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 11, "Could not initialize focus-trapping - Config Missing."))
				}
				return n(t, e), t
			}(i),
			g = t.ThirdPartyNotFound = function (e) {
				function t(e) {
					return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 12, "Third party " + e + " has not been found. Make sure it's\n      fetched correctly."))
				}
				return n(t, e), t
			}(i),
			f = t.SubmissionUnsuccessfulError = function (e) {
				function t() {
					return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 13, "Submission has been unsuccessful."))
				}
				return n(t, e), t
			}(i),
			h = t.WrongDispatchParametersError = function (e) {
				function t() {
					return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 14, "Dispatch parameters are incorrect. Please remember dispatch\n      parameters should only have the keys 'id' and 'data'"))
				}
				return n(t, e), t
			}(i)
	},
	30: function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = t.CustomizationConfigurations = {
			SCROLL_MAGIC: "SCROLL_MAGIC",
			SCROLL_MAGIC_PARALLAX: "SCROLL_MAGIC_PARALLAX",
			SELF_REFERENCE: "self"
		};
		t.default = {}
	},
	31: function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
				return typeof e
			} : function (e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			o = Object.prototype.toString;
		t.default = function (e) {
			var t = "object" === ("undefined" == typeof e ? "undefined" : a(e)) && Object.getPrototypeOf(e);
			return null !== e && "object" === ("undefined" == typeof e ? "undefined" : a(e)) && (t === Object.prototype || null === t) && "[object Object]" === o.call(e)
		}
	},
	32: function (e, t) {
		"use strict";

		function a(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			n = t.Breakpoints = function () {
				function e() {
					a(this, e), this.breakpoints_ = i, this.mqLists_ = [], this.initialize_()
				}
				return o(e, [{
					key: "initialize_",
					value: function () {
						var e = this;
						Object.keys(this.breakpoints_).forEach(function (t) {
							var a = e.mqList_(e.breakpoints_[t]);
							a.breakpoint = e.breakpoints_[t], a.mediaName = t, e.mqLists_.push(a)
						})
					}
				}, {
					key: "mqList_",
					value: function (e) {
						return window.matchMedia("only screen and (min-width: " + e + "px)")
					}
				}, {
					key: "current",
					value: function () {
						var e = this.mqLists_.sort(function (e, t) {
							return e.breakpoint - t.breakpoint
						}).filter(function (e) {
							return e.matches
						});
						return e[e.length - 1]
					}
				}, {
					key: "onChange",
					value: function (e) {
						this.mqLists_.forEach(function (t) {
							t.addListener(e)
						})
					}
				}]), e
			}(),
			i = t.BreakPointsOption = {
				desktop: 1024,
				mobile: 0,
				tablet: 600,
				largeDesktop: 1440
			},
			l = t.BreakPointsStrings = {
				MOBILE: "mobile",
				TABLET: "tablet",
				DESKTOP: "desktop",
				LARGE_DESKTOP: "largeDesktop"
			}
	},
	33: function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.getCloudImageParams = function (e, t, a) {
			var o = e ? "v1" : "v2",
				n = [];
			return t && n.push("rw"), a && n.push(a), n.push(o), n.join("-")
		}
	},
	34: function (e, t) {
		"use strict";

		function a(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			n = t.NetworkAware = function () {
				function e() {
					a(this, e), this.rtt_ = 0, this.downlink_ = 0, this.effectiveType_ = "", this.saveData_ = !1, this.connection_ = i.CONNECTION_FAST, this.initialize_()
				}
				return o(e, [{
					key: "initialize_",
					value: function () {
						this.onValidConnection_() && (this.setConnection_(), this.bindEvents_())
					}
				}, {
					key: "bindEvents_",
					value: function () {
						var e = this;
						navigator.connection.addEventListener("change", function () {
							return e.onConnectionChange_
						})
					}
				}, {
					key: "onValidConnection_",
					value: function () {
						return navigator.connection && navigator.connection.effectiveType
					}
				}, {
					key: "isFast",
					value: function () {
						return this.connection_ === i.CONNECTION_FAST
					}
				}, {
					key: "setConnection_",
					value: function () {
						this.connection_ = /\slow-2g|2g|3g/.test(navigator.connection.effectiveType) ? i.CONNECTION_SLOW : i.CONNECTION_FAST
					}
				}, {
					key: "onConnectionChange_",
					value: function () {
						var e = navigator.connection,
							t = e.rtt,
							a = e.downlink,
							o = e.effectiveType,
							n = e.saveData;
						this.rtt_ = t, this.downlink_ = a, this.effectiveType_ = o, this.saveData_ = n, this.setConnection_()
					}
				}]), e
			}(),
			i = t.ConnectionStrings = {
				CONNECTION_FAST: "fast",
				CONNECTION_SLOW: "slow"
			}
	},
	35: function (e) {
		(function () {
			"use strict";

			function t() {
				function e(e) {
					return new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(e)
				}

				function t(e, t) {
					this.scrollLeft = e, this.scrollTop = t
				}

				function a(e) {
					return 0.5 * (1 - Math.cos(Math.PI * e))
				}

				function o(e) {
					if (null === e || "object" != typeof e || e.behavior === void 0 || "auto" === e.behavior || "instant" === e.behavior) return !0;
					if ("object" == typeof e && "smooth" === e.behavior) return !1;
					throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
				}

				function n(e, t) {
					return "Y" === t ? e.clientHeight + y < e.scrollHeight : "X" === t ? e.clientWidth + y < e.scrollWidth : void 0
				}

				function i(e, t) {
					var a = _.getComputedStyle(e, null)["overflow" + t];
					return "auto" === a || "scroll" === a
				}

				function l(e) {
					var t = n(e, "Y") && i(e, "Y"),
						a = n(e, "X") && i(e, "X");
					return t || a
				}

				function r(e) {
					var t;
					do e = e.parentNode, t = e === u.body; while (!1 === t && !1 === l(e));
					return t = null, e
				}

				function s(e) {
					var t = m(),
						o = (t - e.startTime) / p,
						n, i, l;
					o = 1 < o ? 1 : o, n = a(o), i = e.startX + (e.x - e.startX) * n, l = e.startY + (e.y - e.startY) * n, e.method.call(e.scrollable, i, l), (i !== e.x || l !== e.y) && _.requestAnimationFrame(s.bind(_, e))
				}

				function c(e, a, o) {
					var n = m(),
						i, l, r, c;
					e === u.body ? (i = _, l = _.scrollX || _.pageXOffset, r = _.scrollY || _.pageYOffset, c = b.scroll) : (i = e, l = e.scrollLeft, r = e.scrollTop, c = t), s({
						scrollable: i,
						method: c,
						startTime: n,
						startX: l,
						startY: r,
						x: a,
						y: o
					})
				}
				var _ = window,
					u = document;
				if (!("scrollBehavior" in u.documentElement.style && !0 !== _.__forceSmoothScrollPolyfill__)) {
					var d = _.HTMLElement || _.Element,
						p = 468,
						b = {
							scroll: _.scroll || _.scrollTo,
							scrollBy: _.scrollBy,
							elementScroll: d.prototype.scroll || t,
							scrollIntoView: d.prototype.scrollIntoView
						},
						m = _.performance && _.performance.now ? _.performance.now.bind(_.performance) : Date.now,
						y = e(_.navigator.userAgent) ? 1 : 0;
					_.scroll = _.scrollTo = function () {
						return void 0 === arguments[0] ? void 0 : !0 === o(arguments[0]) ? void b.scroll.call(_, void 0 === arguments[0].left ? "object" == typeof arguments[0] ? _.scrollX || _.pageXOffset : arguments[0] : arguments[0].left, void 0 === arguments[0].top ? void 0 === arguments[1] ? _.scrollY || _.pageYOffset : arguments[1] : arguments[0].top) : void c.call(_, u.body, void 0 === arguments[0].left ? _.scrollX || _.pageXOffset : ~~arguments[0].left, void 0 === arguments[0].top ? _.scrollY || _.pageYOffset : ~~arguments[0].top)
					}, _.scrollBy = function () {
						return void 0 === arguments[0] ? void 0 : o(arguments[0]) ? void b.scrollBy.call(_, void 0 === arguments[0].left ? "object" == typeof arguments[0] ? 0 : arguments[0] : arguments[0].left, void 0 === arguments[0].top ? void 0 === arguments[1] ? 0 : arguments[1] : arguments[0].top) : void c.call(_, u.body, ~~arguments[0].left + (_.scrollX || _.pageXOffset), ~~arguments[0].top + (_.scrollY || _.pageYOffset))
					}, d.prototype.scroll = d.prototype.scrollTo = function () {
						if (void 0 !== arguments[0]) {
							if (!0 === o(arguments[0])) {
								if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
								return void b.elementScroll.call(this, void 0 === arguments[0].left ? "object" == typeof arguments[0] ? this.scrollLeft : ~~arguments[0] : ~~arguments[0].left, void 0 === arguments[0].top ? void 0 === arguments[1] ? this.scrollTop : ~~arguments[1] : ~~arguments[0].top)
							}
							var e = arguments[0].left,
								t = arguments[0].top;
							c.call(this, this, "undefined" == typeof e ? this.scrollLeft : ~~e, "undefined" == typeof t ? this.scrollTop : ~~t)
						}
					}, d.prototype.scrollBy = function () {
						return void 0 === arguments[0] ? void 0 : !0 === o(arguments[0]) ? void b.elementScroll.call(this, void 0 === arguments[0].left ? ~~arguments[0] + this.scrollLeft : ~~arguments[0].left + this.scrollLeft, void 0 === arguments[0].top ? ~~arguments[1] + this.scrollTop : ~~arguments[0].top + this.scrollTop) : void this.scroll({
							left: ~~arguments[0].left + this.scrollLeft,
							top: ~~arguments[0].top + this.scrollTop,
							behavior: arguments[0].behavior
						})
					}, d.prototype.scrollIntoView = function () {
						if (!0 === o(arguments[0])) return void b.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
						var e = r(this),
							t = e.getBoundingClientRect(),
							a = this.getBoundingClientRect();
						e === u.body ? _.scrollBy({
							left: a.left,
							top: a.top,
							behavior: "smooth"
						}) : (c.call(this, e, e.scrollLeft + a.left - t.left, e.scrollTop + a.top - t.top), "fixed" !== _.getComputedStyle(e).position && _.scrollBy({
							left: t.left,
							top: t.top,
							behavior: "smooth"
						}))
					}
				}
			}
			e.exports = {
				polyfill: t
			}
		})()
	},
	36: function () {
		"use strict";
		(function () {
			var e = new Image;
			e.onload = function () {
				var t = 0 < e.width && 0 < e.height;
				t && document.documentElement.classList.add("webp")
			}, e.src = "data:image/webp;base64," + "UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
		})()
	},
	37: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.Store = void 0;
		var n = Object.assign || function (e) {
				for (var t = 1, a; t < arguments.length; t++)
					for (var o in a = arguments[t], a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
				return e
			},
			i = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			l = a(3),
			r = a(2),
			s = a(3),
			c = a(19),
			_ = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(c),
			d = function () {
				function e() {
					o(this, e), this.subscribers_ = {}, this.acceptedParams_ = ["id", "data"], this.state_ = {
						loading: !1,
						scrollPercentage: 0,
						componentsToLoad: new Set([])
					}
				}
				return i(e, [{
					key: "dispatch",
					value: function (e, t) {
						var a = this;
						if (this.validateTopic_(e), !this.parametersAreCorrect_(t)) throw new s.WrongDispatchParametersError;
						var o = t.id,
							n = t.data,
							i = this.subscribers_[e];
						i && i.forEach(function (e) {
							return a.dispatch_(e, o, n)
						})
					}
				}, {
					key: "parametersAreCorrect_",
					value: function (e) {
						var t = !0;
						return 0 === Object.keys(e).length || this.isKeyAccepted_(e) || (t = !1), t
					}
				}, {
					key: "isKeyAccepted_",
					value: function (e) {
						var t = this,
							a = Object.keys(e).reduce(function (e, a) {
								return e ? t.acceptedParams_.includes(a) : e
							}, !0);
						return a
					}
				}, {
					key: "dispatch_",
					value: function (e, t, a) {
						e(t || a, t && a && a)
					}
				}, {
					key: "subscribe",
					value: function (e) {
						var t = this;
						e && e.length && e.forEach(function (e) {
							if (Array.isArray(e) && 2 === e.length) {
								var a = t.getTopic_(e),
									o = t.getCallback_(e);
								t.subscribe_(a, o)
							} else throw new l.SubscriptionFormatError
						})
					}
				}, {
					key: "getTopic_",
					value: function (e) {
						var t = e.shift();
						return this.validateTopic_(t), t
					}
				}, {
					key: "validateTopic_",
					value: function (e) {
						if (!r.Topics[e]) throw new s.WrongSubscriptionTopic
					}
				}, {
					key: "getCallback_",
					value: function (e) {
						var t = e.shift();
						if (!(0, _.default)(t)) throw new s.WrongSubscriptionCallback;
						return t
					}
				}, {
					key: "subscribe_",
					value: function (e, t) {
						this.subscribers_[e] || (this.subscribers_[e] = []), this.subscribers_[e].includes(t) || this.subscribers_[e].push(t)
					}
				}, {
					key: "unsubscribe",
					value: function (e, t) {
						this.validateTopic_(e);
						var a = this.subscribers_[e];
						if (a) return this.subscribers_[e] = a.filter(function (e) {
							return e !== t
						}), a.length !== this.subscribers_[e].length
					}
				}, {
					key: "state",
					set: function (e) {
						e && (this.state_ = n({}, this.state_, e))
					},
					get: function () {
						return this.state_
					}
				}]), e
			}();
		t.Store = d
	},
	39: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.breakpointService = void 0;
		var n = Object.assign || function (e) {
				for (var t = 1, a; t < arguments.length; t++)
					for (var o in a = arguments[t], a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
				return e
			},
			i = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			l = a(14),
			r = a(2),
			s = function () {
				function e(t) {
					var a = this;
					o(this, e), this.body_ = document.body, this.global_ = t, this.lastKnownWindowHeight_ = void 0, this.lastKnownWindowWidth_ = void 0, this.global_.addEventListener("resize", (0, l.debounce)(function () {
						return a.notifyWindowResizeStarted_()
					}, 300, !0)), this.global_.addEventListener("resize", (0, l.debounce)(function () {
						return a.notifyWindowResizeEnded_()
					}, 300, !1))
				}
				return i(e, [{
					key: "initialize",
					value: function (e) {
						var t = this;
						this.store_ = e, requestAnimationFrame(function () {
							t.lastKnownWindowWidth_ = t.global_.innerWidth, t.lastKnownWindowHeight_ = t.global_.innerHeight
						});
						var a = this.getCurrentBreakpoint_(),
							o = a.previousBreakpoint,
							n = a.currentBreakpoint,
							i = a.isPortrait;
						this.notifyBreakpointChanged_(o, n, i)
					}
				}, {
					key: "getCurrentBreakpoint_",
					value: function () {
						var e = this.store_.state.currentBreakpoint,
							t = this.global_.getComputedStyle(this.body_, "::after").getPropertyValue("content").replace(/["']/g, ""),
							a = "portrait" === this.global_.getComputedStyle(this.body_, "::before").getPropertyValue("content").replace(/["']/g, "");
						return this.store_.state = {
							currentBreakpoint: t,
							isPortrait: a
						}, {
							previousBreakpoint: e,
							currentBreakpoint: t,
							isPortrait: a
						}
					}
				}, {
					key: "notifyBreakpointChanged_",
					value: function (e, t, a) {
						if (!e || e !== t) {
							this.dispatchStoreEvents_(r.Topics.BREAKPOINT_CHANGE, {
								currentBreakpoint: t,
								isPortrait: a
							})
						}
					}
				}, {
					key: "notifyWindowResizeStarted_",
					value: function () {
						this.store_.dispatch(r.Topics.WINDOW_RESIZE_STARTED, {
							data: {}
						})
					}
				}, {
					key: "notifyWindowResizeEnded_",
					value: function () {
						var e = this.getCurrentBreakpoint_(),
							t = e.previousBreakpoint,
							a = e.currentBreakpoint,
							o = e.isPortrait;
						this.dispatchStoreEvents_(r.Topics.WINDOW_RESIZE_ENDED, {
							currentBreakpoint: a,
							isPortrait: o
						}), this.notifyBreakpointChanged_(t, a, o)
					}
				}, {
					key: "dispatchStoreEvents_",
					value: function (e, t) {
						var a = this;
						requestAnimationFrame(function () {
							var o = a.global_.innerWidth,
								i = a.global_.innerHeight,
								l = {
									isVertical: a.lastKnownWindowHeight_ !== i,
									isHorizontal: a.lastKnownWindowWidth_ !== o
								};
							a.store_.state = {
								resizeTypes: l
							}, a.lastKnownWindowHeight_ = i, a.lastKnownWindowWidth_ = o, t = n({}, t, l), a.store_.dispatch(e, {
								data: t
							})
						})
					}
				}]), e
			}(),
			c = new s(window);
		t.breakpointService = c
	},
	4: function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = t.requestTimeout = function (e, t) {
				var a = null;
				if (!window.requestAnimationFrame) return window.setTimeout(e, t);
				window.requestAnimationFrame(function o(n) {
					a || (a = n);
					var i = n - a;
					i < t ? window.requestAnimationFrame(o) : e()
				})
			},
			o = t.clearRequestTimeout = function (e) {
				return window.requestAnimationFrame ? void window.cancelAnimationFrame(e.value) : window.clearTimeout(e)
			}
	},
	40: function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.KeyCodes = {
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESC: 27,
			HOME: 36,
			LEFT: 37,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	},
	41: function (e, t, a) {
		"use strict";

		function o(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), a(42), a(43);
		var n = a(44),
			i = a(3),
			l = a(37),
			r = a(2),
			s = a(39),
			c = a(46),
			_ = a(47),
			d = a(48),
			u = a(49),
			p = a(50),
			y = a(51),
			b = a(58),
			m = new l.Store,
			g = function () {
				var e = [].concat(o(document.querySelectorAll(".background-shapes--parallax")));
				c.scrollService.trackElements_(e)
			},
			f = function () {
				var e = document.documentElement,
					t = {
						scrollDisabled: "global-disable-scroll"
					};
				m.subscribe([
					[r.Topics.START_SURVEY, function () {
						return e.classList.add(t.scrollDisabled)
					}],
					[r.Topics.CLOSE_SURVEY, function () {
						return e.classList.remove(t.scrollDisabled)
					}],
					[r.Topics.SHOW_MODAL, function () {
						return e.classList.add(t.scrollDisabled)
					}],
					[r.Topics.CLOSE_MODAL, function () {
						return e.classList.remove(t.scrollDisabled)
					}],
					[r.Topics.NAV_SHOWN, function () {
						return e.classList.add(t.scrollDisabled)
					}],
					[r.Topics.NAV_HIDDEN, function () {
						m.state.isSubnavOpened || e.classList.remove(t.scrollDisabled)
					}],
					[r.Topics.SEARCH_OPENED, function () {
						return e.classList.add(t.scrollDisabled)
					}],
					[r.Topics.SEARCH_CLOSED, function () {
						return e.classList.remove(t.scrollDisabled)
					}],
					[r.Topics.APP_LOADED, function () {
						return g()
					}]
				])
			},
			h = function (e) {
				return e.split("-").reduce(function (e, t) {
					return t = t[0].toUpperCase() + t.substr(1), "" + e + t
				}, "")
			},
			v = function (e) {
				var t = m.state.componentsToLoad;
				t.add(e), m.state = {
					componentsToLoad: t
				}
			},
			C = function (e, t, a) {
				var o = e.getAttribute("data-android-component"),
					n = h(o) || "";
				try {
					v(new t[n](e, m))
				} catch (t) {
					if (a)
						if (t instanceof TypeError) throw new i.AndroidComponentNotFound(n, e);
						else throw t
				}
			},
			k = function e() {
				0 === m.state.componentsToLoad.size ? m.dispatch(r.Topics.APP_LOADED, {
					data: {}
				}) : setTimeout(function () {
					return e()
				}, 100)
			},
			E = function () {
				s.breakpointService.initialize(m), c.scrollService.initialize(m), _.visibilityService.initialize(m), d.analyticsService.initialize(m), u.featureDetectionService.initialize(m), p.lotteryService.initialize(m), y.surveyService.initialize(m), b.lottieService.initialize(m), k()
			},
			A = function e(t) {
				var a = window.getComputedStyle(t, "::after").getPropertyValue("content").replace(/["']/g, "");
				"loaded" === a ? E() : requestAnimationFrame(function () {
					return e(t)
				})
			};
		t.default = function (e, t) {
			var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0,
				i = [].concat(o(e.querySelectorAll("[" + "data-android-component" + "]"))),
				l = document.querySelector("main");
			(0, n.lazyLoaderStart)(m), f(), m.state = {
				componentsToLoad: new Set
			}, i.forEach(function (e) {
				return C(e, t, a)
			}), A(l)
		}
	},
	42: function () {
		(function () {
			"use strict";

			function o(e) {
				var t = x.has(e);
				return e = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e), !t && e
			}

			function i(e) {
				var t = e.isConnected;
				if (void 0 !== t) return t;
				for (; e && !(e.__CE_isImportDocument || e instanceof Document);) e = e.parentNode || (window.ShadowRoot && e instanceof ShadowRoot ? e.host : void 0);
				return e && (e.__CE_isImportDocument || e instanceof Document)
			}

			function t(e, t) {
				for (; t && t !== e && !t.nextSibling;) t = t.parentNode;
				return t && t !== e ? t.nextSibling : null
			}

			function n(o, a, i) {
				i = void 0 === i ? new Set : i;
				for (var l = o; l;) {
					if (l.nodeType === Node.ELEMENT_NODE) {
						var r = l;
						a(r);
						var e = r.localName;
						if ("link" === e && "import" === r.getAttribute("rel")) {
							if (l = r.import, l instanceof Node && !i.has(l))
								for (i.add(l), l = l.firstChild; l; l = l.nextSibling) n(l, a, i);
							l = t(o, r);
							continue
						} else if ("template" === e) {
							l = t(o, r);
							continue
						}
						if (r = r.__CE_shadowRoot)
							for (r = r.firstChild; r; r = r.nextSibling) n(r, a, i)
					}
					l = l.firstChild ? l.firstChild : t(o, l)
				}
			}

			function l(e, t, a) {
				e[t] = a
			}

			function e() {
				this.a = new Map, this.g = new Map, this.c = [], this.f = [], this.b = !1
			}

			function r(e, t, a) {
				e.a.set(t, a), e.g.set(a.constructorFunction, a)
			}

			function s(e, t) {
				e.b = !0, e.c.push(t)
			}

			function _(e, t) {
				e.b = !0, e.f.push(t)
			}

			function u(e, t) {
				e.b && n(t, function (t) {
					return p(e, t)
				})
			}

			function p(e, t) {
				if (e.b && !t.__CE_patched) {
					t.__CE_patched = !0;
					for (var a = 0; a < e.c.length; a++) e.c[a](t);
					for (a = 0; a < e.f.length; a++) e.f[a](t)
				}
			}

			function m(e, t) {
				var a = [];
				for (n(t, function (e) {
						return a.push(e)
					}), t = 0; t < a.length; t++) {
					var o = a[t];
					1 === o.__CE_state ? e.connectedCallback(o) : v(e, o)
				}
			}

			function g(e, t) {
				var a = [];
				for (n(t, function (e) {
						return a.push(e)
					}), t = 0; t < a.length; t++) {
					var o = a[t];
					1 === o.__CE_state && e.disconnectedCallback(o)
				}
			}

			function h(t, a, o) {
				o = void 0 === o ? {} : o;
				var i = o.u || new Set,
					l = o.i || function (e) {
						return v(t, e)
					},
					r = [];
				if (n(a, function (a) {
						if ("link" === a.localName && "import" === a.getAttribute("rel")) {
							var o = a.import;
							o instanceof Node && (o.__CE_isImportDocument = !0, o.__CE_hasRegistry = !0), o && "complete" === o.readyState ? o.__CE_documentLoadHandled = !0 : a.addEventListener("load", function () {
								var o = a.import;
								if (!o.__CE_documentLoadHandled) {
									o.__CE_documentLoadHandled = !0;
									var n = new Set(i);
									n.delete(o), h(t, o, {
										u: n,
										i: l
									})
								}
							})
						} else r.push(a)
					}, i), t.b)
					for (a = 0; a < r.length; a++) p(t, r[a]);
				for (a = 0; a < r.length; a++) l(r[a])
			}

			function v(t, a) {
				if (void 0 === a.__CE_state) {
					var o = a.ownerDocument;
					if ((o.defaultView || o.__CE_isImportDocument && o.__CE_hasRegistry) && (o = t.a.get(a.localName))) {
						o.constructionStack.push(a);
						var n = o.constructorFunction;
						try {
							try {
								if (new n !== a) throw Error("The custom element constructor did not produce the element being upgraded.")
							} finally {
								o.constructionStack.pop()
							}
						} catch (e) {
							throw a.__CE_state = 2, e
						}
						if (a.__CE_state = 1, a.__CE_definition = o, o.attributeChangedCallback)
							for (o = o.observedAttributes, n = 0; n < o.length; n++) {
								var l = o[n],
									e = a.getAttribute(l);
								null !== e && t.attributeChangedCallback(a, l, null, e, null)
							}
						i(a) && t.connectedCallback(a)
					}
				}
			}

			function c(e) {
				var t = document;
				this.c = e, this.a = t, this.b = void 0, h(this.c, this.a), "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, {
					childList: !0,
					subtree: !0
				}))
			}

			function y(e) {
				e.b && e.b.disconnect()
			}

			function d() {
				var e = this;
				this.b = this.a = void 0, this.c = new Promise(function (t) {
					e.b = t, e.a && t(e.a)
				})
			}

			function C(e) {
				if (e.a) throw Error("Already resolved.");
				e.a = void 0, e.b && e.b(void 0)
			}

			function a(e) {
				this.c = !1, this.a = e, this.j = new Map, this.f = function (e) {
					return e()
				}, this.b = !1, this.g = [], this.o = new c(e)
			}

			function b(o) {
				if (!1 !== o.b) {
					o.b = !1;
					for (var a = o.g, n = [], i = new Map, l = 0; l < a.length; l++) i.set(a[l].localName, []);
					for (h(o.a, document, {
							i: function (t) {
								if (void 0 === t.__CE_state) {
									var a = t.localName,
										e = i.get(a);
									e ? e.push(t) : o.a.a.get(a) && n.push(t)
								}
							}
						}), l = 0; l < n.length; l++) v(o.a, n[l]);
					for (; 0 < a.length;) {
						var e = a.shift();
						l = e.localName, e = i.get(e.localName);
						for (var r = 0; r < e.length; r++) v(o.a, e[r]);
						(l = o.j.get(l)) && C(l)
					}
				}
			}

			function f() {
				var t = de;
				window.HTMLElement = function () {
					function e() {
						var a = this.constructor,
							o = t.g.get(a);
						if (!o) throw Error("The custom element being constructed was not registered with `customElements`.");
						var n = o.constructionStack;
						if (0 === n.length) return n = B.call(document, o.localName), Object.setPrototypeOf(n, a.prototype), n.__CE_state = 1, n.__CE_definition = o, p(t, n), n;
						o = n.length - 1;
						var e = n[o];
						if (e === ce) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
						return n[o] = ce, Object.setPrototypeOf(e, a.prototype), p(t, e), e
					}
					return e.prototype = le.prototype, Object.defineProperty(e.prototype, "constructor", {
						writable: !0,
						configurable: !0,
						enumerable: !1,
						value: e
					}), e
				}()
			}

			function k(t, e, a) {
				function o(a) {
					return function () {
						for (var o = [], e = 0; e < arguments.length; ++e) o[e] = arguments[e];
						e = [];
						for (var n = [], l = 0, r; l < o.length; l++)
							if (r = o[l], r instanceof Element && i(r) && n.push(r), r instanceof DocumentFragment)
								for (r = r.firstChild; r; r = r.nextSibling) e.push(r);
							else e.push(r);
						for (a.apply(this, o), o = 0; o < n.length; o++) g(t, n[o]);
						if (i(this))
							for (o = 0; o < e.length; o++) n = e[o], n instanceof Element && m(t, n)
					}
				}
				void 0 !== a.h && (e.prepend = o(a.h)), void 0 !== a.append && (e.append = o(a.append))
			}

			function E() {
				var e = de;
				l(Document.prototype, "createElement", function (t) {
					if (this.__CE_hasRegistry) {
						var a = e.a.get(t);
						if (a) return new a.constructorFunction
					}
					return t = B.call(this, t), p(e, t), t
				}), l(Document.prototype, "importNode", function (t, a) {
					return t = q.call(this, t, !!a), this.__CE_hasRegistry ? h(e, t) : u(e, t), t
				}), l(Document.prototype, "createElementNS", function (t, a) {
					if (this.__CE_hasRegistry && (null === t || "http://www.w3.org/1999/xhtml" === t)) {
						var o = e.a.get(a);
						if (o) return new o.constructorFunction
					}
					return t = F.call(this, t, a), p(e, t), t
				}), k(e, Document.prototype, {
					h: G,
					append: z
				})
			}

			function A() {
				function e(e, o) {
					Object.defineProperty(e, "textContent", {
						enumerable: o.enumerable,
						configurable: !0,
						get: o.get,
						set: function (n) {
							if (this.nodeType === Node.TEXT_NODE) o.set.call(this, n);
							else {
								var a;
								if (this.firstChild) {
									var l = this.childNodes,
										e = l.length;
									if (0 < e && i(this)) {
										a = Array(e);
										for (var r = 0; r < e; r++) a[r] = l[r]
									}
								}
								if (o.set.call(this, n), a)
									for (n = 0; n < a.length; n++) g(t, a[n])
							}
						}
					})
				}
				var t = de;
				l(Node.prototype, "insertBefore", function (o, a) {
					if (o instanceof DocumentFragment) {
						var n = Array.prototype.slice.apply(o.childNodes);
						if (o = I.call(this, o, a), i(this))
							for (a = 0; a < n.length; a++) m(t, n[a]);
						return o
					}
					return n = i(o), a = I.call(this, o, a), n && g(t, o), i(this) && m(t, o), a
				}), l(Node.prototype, "appendChild", function (o) {
					if (o instanceof DocumentFragment) {
						var a = Array.prototype.slice.apply(o.childNodes);
						if (o = H.call(this, o), i(this))
							for (var n = 0; n < a.length; n++) m(t, a[n]);
						return o
					}
					return a = i(o), n = H.call(this, o), a && g(t, o), i(this) && m(t, o), n
				}), l(Node.prototype, "cloneNode", function (e) {
					return e = $.call(this, !!e), this.ownerDocument.__CE_hasRegistry ? h(t, e) : u(t, e), e
				}), l(Node.prototype, "removeChild", function (o) {
					var a = i(o),
						n = J.call(this, o);
					return a && g(t, o), n
				}), l(Node.prototype, "replaceChild", function (o, a) {
					if (o instanceof DocumentFragment) {
						var n = Array.prototype.slice.apply(o.childNodes);
						if (o = K.call(this, o, a), i(this))
							for (g(t, a), a = 0; a < n.length; a++) m(t, n[a]);
						return o
					}
					n = i(o);
					var e = K.call(this, o, a),
						l = i(this);
					return l && g(t, a), n && g(t, o), l && m(t, o), e
				}), L && L.get ? e(Node.prototype, L) : s(t, function (t) {
					e(t, {
						enumerable: !0,
						configurable: !0,
						get: function () {
							for (var e = [], t = 0, a; t < this.childNodes.length; t++) a = this.childNodes[t], a.nodeType !== Node.COMMENT_NODE && e.push(a.textContent);
							return e.join("")
						},
						set: function (e) {
							for (; this.firstChild;) J.call(this, this.firstChild);
							null != e && "" !== e && H.call(this, document.createTextNode(e))
						}
					})
				})
			}

			function D(t) {
				function e(e) {
					return function () {
						for (var a = [], o = 0; o < arguments.length; ++o) a[o] = arguments[o];
						o = [];
						for (var n = [], l = 0, r; l < a.length; l++)
							if (r = a[l], r instanceof Element && i(r) && n.push(r), r instanceof DocumentFragment)
								for (r = r.firstChild; r; r = r.nextSibling) o.push(r);
							else o.push(r);
						for (e.apply(this, a), a = 0; a < n.length; a++) g(t, n[a]);
						if (i(this))
							for (a = 0; a < o.length; a++) n = o[a], n instanceof Element && m(t, n)
					}
				}
				var a = Element.prototype;
				void 0 !== oe && (a.before = e(oe)), void 0 !== oe && (a.after = e(V)), void 0 !== ne && l(a, "replaceWith", function () {
					for (var a = [], e = 0; e < arguments.length; ++e) a[e] = arguments[e];
					e = [];
					for (var o = [], n = 0, l; n < a.length; n++)
						if (l = a[n], l instanceof Element && i(l) && o.push(l), l instanceof DocumentFragment)
							for (l = l.firstChild; l; l = l.nextSibling) e.push(l);
						else e.push(l);
					for (n = i(this), ne.apply(this, a), a = 0; a < o.length; a++) g(t, o[a]);
					if (n)
						for (g(t, this), a = 0; a < e.length; a++) o = e[a], o instanceof Element && m(t, o)
				}), void 0 !== ie && l(a, "remove", function () {
					var e = i(this);
					ie.call(this), e && g(t, this)
				})
			}

			function w() {
				function e(e, l) {
					Object.defineProperty(e, "innerHTML", {
						enumerable: l.enumerable,
						configurable: !0,
						get: l.get,
						set: function (r) {
							var s = this,
								e;
							if (i(this) && (e = [], n(this, function (t) {
									t !== s && e.push(t)
								})), l.set.call(this, r), e)
								for (var a = 0, c; a < e.length; a++) c = e[a], 1 === c.__CE_state && o.disconnectedCallback(c);
							return this.ownerDocument.__CE_hasRegistry ? h(o, this) : u(o, this), r
						}
					})
				}

				function t(e, t) {
					l(e, "insertAdjacentElement", function (n, a) {
						var e = i(a);
						return n = t.call(this, n, a), e && g(o, a), i(n) && m(o, a), n
					})
				}

				function a(t, n) {
					function i(t, a) {
						for (var n = []; t !== a; t = t.nextSibling) n.push(t);
						for (a = 0; a < n.length; a++) h(o, n[a])
					}
					l(t, "insertAdjacentHTML", function (e, t) {
						if (e = e.toLowerCase(), "beforebegin" === e) {
							var a = this.previousSibling;
							n.call(this, e, t), i(a || this.parentNode.firstChild, this)
						} else if ("afterbegin" === e) a = this.firstChild, n.call(this, e, t), i(this.firstChild, a);
						else if ("beforeend" === e) a = this.lastChild, n.call(this, e, t), i(a || this.firstChild, null);
						else if ("afterend" === e) a = this.nextSibling, n.call(this, e, t), i(this.nextSibling, a);
						else throw new SyntaxError("The value provided (" + (e + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'."))
					})
				}
				var o = de;
				M && l(Element.prototype, "attachShadow", function (t) {
					t = M.call(this, t);
					var a = o;
					if (a.b && !t.__CE_patched) {
						t.__CE_patched = !0;
						for (var n = 0; n < a.c.length; n++) a.c[n](t)
					}
					return this.__CE_shadowRoot = t
				}), N && N.get ? e(Element.prototype, N) : re && re.get ? e(HTMLElement.prototype, re) : _(o, function (t) {
					e(t, {
						enumerable: !0,
						configurable: !0,
						get: function () {
							return $.call(this, !0).innerHTML
						},
						set: function (t) {
							var a = "template" === this.localName,
								o = a ? this.content : this,
								n = F.call(document, this.namespaceURI, this.localName);
							for (n.innerHTML = t; 0 < o.childNodes.length;) J.call(o, o.childNodes[0]);
							for (t = a ? n.content : n; 0 < t.childNodes.length;) H.call(o, t.childNodes[0])
						}
					})
				}), l(Element.prototype, "setAttribute", function (t, a) {
					if (1 !== this.__CE_state) return P.call(this, t, a);
					var n = O.call(this, t);
					P.call(this, t, a), a = O.call(this, t), o.attributeChangedCallback(this, t, n, a, null)
				}), l(Element.prototype, "setAttributeNS", function (t, a, n) {
					if (1 !== this.__CE_state) return S.call(this, t, a, n);
					var i = R.call(this, t, a);
					S.call(this, t, a, n), n = R.call(this, t, a), o.attributeChangedCallback(this, a, i, n, t)
				}), l(Element.prototype, "removeAttribute", function (e) {
					if (1 !== this.__CE_state) return Q.call(this, e);
					var t = O.call(this, e);
					Q.call(this, e), null !== t && o.attributeChangedCallback(this, e, t, null, null)
				}), l(Element.prototype, "removeAttributeNS", function (t, a) {
					if (1 !== this.__CE_state) return T.call(this, t, a);
					var n = R.call(this, t, a);
					T.call(this, t, a);
					var i = R.call(this, t, a);
					n !== i && o.attributeChangedCallback(this, a, n, i, t)
				}), W ? t(HTMLElement.prototype, W) : U ? t(Element.prototype, U) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."), se ? a(HTMLElement.prototype, se) : ee ? a(Element.prototype, ee) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."), k(o, Element.prototype, {
					h: te,
					append: ae
				}), D(o)
			}
			var x = new Set(["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"]);
			e.prototype.connectedCallback = function (e) {
				var t = e.__CE_definition;
				t.connectedCallback && t.connectedCallback.call(e)
			}, e.prototype.disconnectedCallback = function (e) {
				var t = e.__CE_definition;
				t.disconnectedCallback && t.disconnectedCallback.call(e)
			}, e.prototype.attributeChangedCallback = function (t, a, o, n, i) {
				var e = t.__CE_definition;
				e.attributeChangedCallback && -1 < e.observedAttributes.indexOf(a) && e.attributeChangedCallback.call(t, a, o, n, i)
			}, c.prototype.f = function (e) {
				var t = this.a.readyState;
				for ("interactive" !== t && "complete" !== t || y(this), t = 0; t < e.length; t++)
					for (var a = e[t].addedNodes, o = 0; o < a.length; o++) h(this.c, a[o])
			};
			a.prototype.l = function (n, i) {
				var l = this;
				if (!(i instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
				if (!o(n)) throw new SyntaxError("The element name '" + n + "' is not valid.");
				if (this.a.a.get(n)) throw Error("A custom element with name '" + n + "' has already been defined.");
				if (this.c) throw Error("A custom element is already being defined.");
				this.c = !0;
				try {
					var s = function (e) {
							var t = c[e];
							if (void 0 !== t && !(t instanceof Function)) throw Error("The '" + e + "' callback must be a function.");
							return t
						},
						c = i.prototype;
					if (!(c instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
					var e = s("connectedCallback"),
						_ = s("disconnectedCallback"),
						d = s("adoptedCallback"),
						u = s("attributeChangedCallback"),
						p = i.observedAttributes || []
				} catch (e) {
					return
				} finally {
					this.c = !1
				}
				i = {
					localName: n,
					constructorFunction: i,
					connectedCallback: e,
					disconnectedCallback: _,
					adoptedCallback: d,
					attributeChangedCallback: u,
					observedAttributes: p,
					constructionStack: []
				}, r(this.a, n, i), this.g.push(i), this.b || (this.b = !0, this.f(function () {
					return b(l)
				}))
			}, a.prototype.i = function (e) {
				h(this.a, e)
			}, a.prototype.get = function (e) {
				if (e = this.a.a.get(e)) return e.constructorFunction
			}, a.prototype.m = function (e) {
				if (!o(e)) return Promise.reject(new SyntaxError("'" + e + "' is not a valid custom element name."));
				var t = this.j.get(e);
				return t ? t.c : (t = new d, this.j.set(e, t), this.a.a.get(e) && !this.g.some(function (t) {
					return t.localName === e
				}) && C(t), t.c)
			}, a.prototype.s = function (e) {
				y(this.o);
				var t = this.f;
				this.f = function (a) {
					return e(function () {
						return t(a)
					})
				}
			}, window.CustomElementRegistry = a, a.prototype.define = a.prototype.l, a.prototype.upgrade = a.prototype.i, a.prototype.get = a.prototype.get, a.prototype.whenDefined = a.prototype.m, a.prototype.polyfillWrapFlushCallback = a.prototype.s;
			var B = window.Document.prototype.createElement,
				F = window.Document.prototype.createElementNS,
				q = window.Document.prototype.importNode,
				G = window.Document.prototype.prepend,
				z = window.Document.prototype.append,
				j = window.DocumentFragment.prototype.prepend,
				Y = window.DocumentFragment.prototype.append,
				$ = window.Node.prototype.cloneNode,
				H = window.Node.prototype.appendChild,
				I = window.Node.prototype.insertBefore,
				J = window.Node.prototype.removeChild,
				K = window.Node.prototype.replaceChild,
				L = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
				M = window.Element.prototype.attachShadow,
				N = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
				O = window.Element.prototype.getAttribute,
				P = window.Element.prototype.setAttribute,
				Q = window.Element.prototype.removeAttribute,
				R = window.Element.prototype.getAttributeNS,
				S = window.Element.prototype.setAttributeNS,
				T = window.Element.prototype.removeAttributeNS,
				U = window.Element.prototype.insertAdjacentElement,
				ee = window.Element.prototype.insertAdjacentHTML,
				te = window.Element.prototype.prepend,
				ae = window.Element.prototype.append,
				oe = window.Element.prototype.before,
				V = window.Element.prototype.after,
				ne = window.Element.prototype.replaceWith,
				ie = window.Element.prototype.remove,
				le = window.HTMLElement,
				re = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
				W = window.HTMLElement.prototype.insertAdjacentElement,
				se = window.HTMLElement.prototype.insertAdjacentHTML,
				ce = new function () {};
			var _e = window.customElements;
			if (!_e || _e.forcePolyfill || "function" != typeof _e.define || "function" != typeof _e.get) {
				var de = new e;
				f(), E(), k(de, DocumentFragment.prototype, {
					h: j,
					append: Y
				}), A(), w(), document.__CE_hasRegistry = !0;
				var X = new a(de);
				Object.defineProperty(window, "customElements", {
					configurable: !0,
					enumerable: !0,
					value: X
				})
			}
		}).call(self)
	},
	421: function (e, t, a) {
		"use strict";

		function o(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function l(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.HeroDevices = void 0;
		var r = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			s = a(0),
			c = a(4),
			_ = t.HeroDevices = function (e) {
				function t(e, a) {
					n(this, t);
					var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return o.blockCssClass_ = "hero-devices", o.loadedModifierCssClass_ = o.blockCssClass_ + "--loaded", o.scrollableModifierCssClass_ = o.blockCssClass_ + "--scrollable", o.render_ = o.render_.bind(o), o
				}
				return l(t, e), r(t, [{
					key: "initialize",
					value: function () {
						this.subscriptions_ = [
							[this.topics_.APP_LOADED, this.render_]
						]
					}
				}, {
					key: "render_",
					value: function () {
						var e = this,
							t = [].concat(o(this.element.querySelectorAll("\n      ." + this.blockCssClass_ + "__image-wrapper,\n      ." + this.blockCssClass_ + "__copy-wrapper,\n      ." + this.blockCssClass_ + "__shape\n    ")));
						this.store_.dispatch(this.topics_.TRACK_SCROLL_POSITION, {
							data: t
						}), requestAnimationFrame(function () {
							e.element.classList.add(e.loadedModifierCssClass_), (0, c.requestTimeout)(function () {
								e.element.classList.add(e.scrollableModifierCssClass_)
							}, 1500)
						})
					}
				}]), t
			}(s.BaseComponent)
	},
	43: function () {
		(function (e, t) {
			t()
		})(this, function () {
			"use strict";
			"undefined" != typeof document && function (e) {
				function t() {
					a || (a = !0, e())
				}
				var a;
				0 <= ["interactive", "complete"].indexOf(document.readyState) ? e() : (a = !1, document.addEventListener("DOMContentLoaded", t, !1), window.addEventListener("load", t, !1))
			}(function () {
				function t(e) {
					return e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList
				}

				function a(e) {
					var t = e.type,
						a = e.tagName;
					return "INPUT" == a && d[t] && !e.readOnly || ("TEXTAREA" != a || e.readOnly ? !!e.isContentEditable : !0)
				}

				function o(e) {
					e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
				}

				function n(e) {
					e.hasAttribute("data-focus-visible-added") && (e.classList.remove("focus-visible"), e.removeAttribute("data-focus-visible-added"))
				}

				function e() {
					s = !1
				}

				function i() {
					document.addEventListener("mousemove", r), document.addEventListener("mousedown", r), document.addEventListener("mouseup", r), document.addEventListener("pointermove", r), document.addEventListener("pointerdown", r), document.addEventListener("pointerup", r), document.addEventListener("touchmove", r), document.addEventListener("touchstart", r), document.addEventListener("touchend", r)
				}

				function l() {
					document.removeEventListener("mousemove", r), document.removeEventListener("mousedown", r), document.removeEventListener("mouseup", r), document.removeEventListener("pointermove", r), document.removeEventListener("pointerdown", r), document.removeEventListener("pointerup", r), document.removeEventListener("touchmove", r), document.removeEventListener("touchstart", r), document.removeEventListener("touchend", r)
				}

				function r(t) {
					"html" === t.target.nodeName.toLowerCase() || (s = !1, l())
				}
				var s = !0,
					c = !1,
					_ = null,
					d = {
						text: !0,
						search: !0,
						url: !0,
						tel: !0,
						email: !0,
						password: !0,
						number: !0,
						date: !0,
						month: !0,
						week: !0,
						time: !0,
						datetime: !0,
						"datetime-local": !0
					};
				document.addEventListener("keydown", function () {
					t(document.activeElement) && o(document.activeElement), s = !0
				}, !0), document.addEventListener("mousedown", e, !0), document.addEventListener("pointerdown", e, !0), document.addEventListener("touchstart", e, !0), document.addEventListener("focus", function (n) {
					!t(n.target) || (s || a(n.target)) && o(n.target)
				}, !0), document.addEventListener("blur", function (a) {
					!t(a.target) || (a.target.classList.contains("focus-visible") || a.target.hasAttribute("data-focus-visible-added")) && (c = !0, window.clearTimeout(_), _ = window.setTimeout(function () {
						c = !1, window.clearTimeout(_)
					}, 100), n(a.target))
				}, !0), document.addEventListener("visibilitychange", function () {
					"hidden" == document.visibilityState && (c && (s = !0), i())
				}, !0), i(), document.body.classList.add("js-focus-visible")
			})
		})
	},
	436: function (e, t, a) {
		a(437), e.exports = a(441)
	},
	437: function (e, t, a) {
		"use strict";
		var o = a(41),
			n = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(o),
			i = a(72),
			l = a(73),
			r = a(74),
			s = a(65),
			c = a(66),
			_ = a(75),
			d = a(67),
			u = a(68),
			p = a(59),
			y = a(438),
			b = a(104),
			m = a(140),
			g = a(118),
			f = a(79),
			h = a(439),
			v = a(119),
			C = a(106),
			k = a(207),
			E = a(440),
			A = a(124),
			T = a(120),
			S = a(421),
			O = {
				CookieBannerDefault: p.CookieBannerDefault,
				FooterDefault: s.FooterDefault,
				HeaderDefault: c.HeaderDefault,
				SubnavDefault: _.SubnavDefault,
				LanguageSelector: d.LanguageSelector,
				StickyDialog: i.StickyDialog,
				SurveyDefault: l.SurveyDefault,
				ExpandableField: r.ExpandableField,
				SearchDefault: u.SearchDefault,
				ImagePopout: y.ImagePopout,
				Accordion: b.Accordion,
				AnchorScroll: m.AnchorScroll,
				AnimationLottie: g.AnimationLottie,
				ProgressBar: f.ProgressBar,
				ThemeSwitcher: h.ThemeSwitcher,
				TabTimer: v.TabTimer,
				Video: C.Video,
				RotatingHeading: k.RotatingHeading,
				ContentDark: E.ContentDark,
				ContentMultimedia: A.ContentMultimedia,
				ContentResizable: T.ContentResizable,
				HeroDevices: S.HeroDevices
			};
		(0, n.default)(document, O, !0)
	},
	438: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.ImagePopout = void 0;
		var l = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			r = a(0),
			s = t.ImagePopout = function (e) {
				function t(e, a) {
					o(this, t);
					var i = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return i.blockCssClass_ = "image-popout", i.animateCssClass_ = i.blockCssClass_ + "--animate", i
				}
				return i(t, e), l(t, [{
					key: "initialize",
					value: function () {
						var e = this;
						this.trackComponentVisibility_(function () {
							requestAnimationFrame(function () {
								e.element.classList.add(e.animateCssClass_)
							})
						}, function () {
							requestAnimationFrame(function () {
								e.element.classList.remove(e.animateCssClass_)
							})
						}, this.config_.autoplayObserver || {
							rootMargin: "0px 0px 0px 0px",
							threshold: 0.1
						}, !1)
					}
				}]), t
			}(r.BaseComponent)
	},
	439: function (e, t, a) {
		"use strict";

		function o(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function l(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.ThemeSwitcher = void 0;
		var r = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			s = a(0),
			c = a(3),
			_ = a(4),
			d = a(9),
			u = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(d),
			p = t.ThemeSwitcher = function (e) {
				function t(e, a) {
					n(this, t);
					var l = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return l.blockCssClass_ = "theme-switcher", l.baseCssClass_ = "theme-base", l.componentLoadedCssClass_ = l.blockCssClass_ + "--loaded", l.interactionCssClass_ = l.blockCssClass_ + "__interaction", l.interactionHoverOffModifierCssClass_ = l.interactionCssClass_ + "--hover-off", l.interactionNotificationCssClass_ = l.interactionCssClass_ + "--notification", l.theme_ = y[l.config_.theme], l.isThemeOn_ = !1, l.interactions_ = [].concat(o(l.element.querySelectorAll("." + l.interactionCssClass_))).reduce(function (e, t) {
						return l.detectDifferentMessages_(e, t)
					}, {}), l.element.classList.add(l.componentLoadedCssClass_), l.notificationDuration_ = 5E3, l.toggleTheme_ = l.toggleTheme_.bind(l), l.handleCookieBannerInteraction_ = l.handleCookieBannerInteraction_.bind(l), l
				}
				return l(t, e), r(t, [{
					key: "detectDifferentMessages_",
					value: function (e, t) {
						var a = "hoverOn";
						return t.classList.contains(this.interactionHoverOffModifierCssClass_) ? a = "hoverOff" : t.classList.contains(this.interactionNotificationCssClass_) && (a = "notify"), t.setAttribute("aria-hidden", "true"), e[a] = {
							element: t,
							isHidden: !0,
							width: t.offsetWidth + 68 + "px"
						}, e
					}
				}, {
					key: "initialize",
					value: function () {
						var t = this;
						if (!this.theme_) throw new c.ThemeNotFoundError;
						this.body_.classList.add(this.baseCssClass_), this.subscriptions_ = [
							[this.topics_.TOGGLE_THEME, this.toggleTheme_],
							[this.topics_.COOKIE_BANNER_INTERACTION, this.handleCookieBannerInteraction_]
						], this.element.addEventListener(b.CLICK, function (a) {
							return t.handleClick_(a)
						}), this.element.addEventListener("mouseenter", function () {
							return t.handleHover_()
						}), this.element.addEventListener("focus", function () {
							return t.handleHover_()
						}), this.element.addEventListener("mouseleave", function () {
							return t.handleHover_(!0)
						}), this.element.addEventListener("blur", function () {
							return t.handleHover_(!0)
						})
					}
				}, {
					key: "handleClick_",
					value: function () {
						this.toggleTheme_({
							forceToggle: !0
						}), this.updateAnalyticsLabel_(), this.closeButtonWhenTouchable_()
					}
				}, {
					key: "handleHover_",
					value: function () {
						var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
							t = this.isThemeOn_ ? "hoverOff" : "hoverOn",
							a = this.interactions_[t];
						this.hideInteractions_(), e ? (this.element.style.setProperty("width", "var(--theme-switcher-width)"), this.element.style.removeProperty("--theme-switcher-width"), a.element.setAttribute("aria-hidden", "true")) : (a.element.setAttribute("aria-hidden", "false"), this.element.style.setProperty("--theme-switcher-width", a.width))
					}
				}, {
					key: "toggleTheme_",
					value: function (e) {
						var t = this.store_.state.isAnimatingScroll,
							a = "theme--" + this.theme_.toLowerCase();
						!e.forceToggle && (t || this.isThemeOn_) || (this.isThemeOn_ = !this.isThemeOn_, this.hideInteractions_(), this.isThemeOn_ ? this.body_.classList.add(a) : this.body_.classList.remove(a), this.store_.state = {
							theme: this.theme_,
							isThemeOn: this.isThemeOn_
						}, e.forceToggle ? this.handleHover_() : this.notifyUser_())
					}
				}, {
					key: "notifyUser_",
					value: function () {
						if (this.store_.state.isThemeOn) {
							var e = this.hideInteractions_(e);
							this.showNotification_(e)
						}
					}
				}, {
					key: "hideInteractions_",
					value: function () {
						var e = this,
							t = null;
						return Object.keys(this.interactions_).forEach(function (a) {
							"notify" === a && (t = e.interactions_[a]), e.interactions_[a].element.setAttribute("aria-hidden", "true")
						}), t
					}
				}, {
					key: "showNotification_",
					value: function (e) {
						var t = this;
						(0, _.requestTimeout)(function () {
							e.element.setAttribute("aria-hidden", "false"), t.element.style.setProperty("--theme-switcher-width", e.width)
						}, 300), (0, _.requestTimeout)(function () {
							e.element.setAttribute("aria-hidden", "true"), t.element.style.setProperty("width", "var(--theme-switcher-width)"), t.element.style.removeProperty("--theme-switcher-width")
						}, this.notificationDuration_)
					}
				}, {
					key: "updateAnalyticsLabel_",
					value: function () {
						var e = (0, u.default)(this.element, "data-g-config");
						e.eventLabel = this.isThemeOn_ ? "on" : " off", this.element.setAttribute("data-g-config", JSON.stringify(e))
					}
				}, {
					key: "closeButtonWhenTouchable_",
					value: function () {
						var e = this;
						this.store_.state.isTouch && (0, _.requestTimeout)(function () {
							e.handleHover_(!0)
						}, 1e3)
					}
				}, {
					key: "handleCookieBannerInteraction_",
					value: function (e) {
						var t = this,
							a = e.height,
							o = e.isShown;
						requestAnimationFrame(function () {
							var e = getComputedStyle(t.element).bottom.split("px")[0];
							t.element.style.setProperty("transform", o ? "translateY(-" + (-e + (a + 20) + a % e) + "px)" : "translateY(0)")
						})
					}
				}]), t
			}(s.BaseComponent),
			y = {
				DARK: "Dark",
				LIGHT: "Light"
			},
			b = {
				CLICK: "click"
			}
	},
	44: function (e, t, a) {
		"use strict";

		function o(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function l(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.lazyLoaderStart = void 0;
		var r = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			s = a(0),
			c = a(45),
			_ = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(c),
			d = a(6),
			u = function (e) {
				function t(e, a, o, l) {
					n(this, t);
					var r = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return r.threshold = o, r.connectionIsFast = l, r
				}
				return l(t, e), r(t, [{
					key: "initialize",
					value: function () {
						var e = this,
							t = !1 === this.element.loaded,
							a = this.connectionIsFast;
						if ("IntersectionObserver" in window && t) {
							var o = new IntersectionObserver(function (t, a) {
								t.forEach(function (t) {
									t.isIntersecting && (e.updateImage(t.target, t.isIntersecting), a.unobserve(t.target))
								})
							}, {
								rootMargin: "150% 0% 150% 0%",
								threshold: this.threshold || 0
							});
							o.observe(this.element)
						}
						"requestIdleCallback" in window && t && a && requestIdleCallback(function () {
							e.updateImage(e.element, !0)
						}, {
							timeout: 2e3
						})
					}
				}, {
					key: "updateImage",
					value: function (e, t) {
						e.visible = t
					}
				}]), t
			}(s.BaseComponent),
			p = {
				CLOUD_IMAGE: "cloud-image"
			};
		t.lazyLoaderStart = function (e, t) {
			_.default.store = e, customElements.define(p.CLOUD_IMAGE, _.default);
			var a = document.querySelectorAll(p.CLOUD_IMAGE),
				n = new d.NetworkAware;
			[].concat(o(a)).forEach(function (a) {
				return new u(a, e, t, n.isFast())
			})
		}
	},
	440: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.ContentDark = void 0;
		var l = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			r = a(0),
			s = t.ContentDark = function (e) {
				function t(e, a) {
					o(this, t);
					var i = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return i.visited = !1, i.observerDefaults_ = {
						root: null,
						rootMargin: "0px 0px 0px 0px",
						threshold: .45
					}, i.observerCallback_ = i.observerCallback_.bind(i), i
				}
				return i(t, e), l(t, [{
					key: "initialize",
					value: function () {
						if ("IntersectionObserver" in this.global_) {
							var e = new IntersectionObserver(this.observerCallback_, this.observerDefaults_);
							e.observe(this.element)
						}
					}
				}, {
					key: "observerCallback_",
					value: function (e) {
						var t = this,
							a = this.store_.state.anchorScrollTargetID || "",
							o = this.element.id == a,
							n = {
								data: {}
							};
						if (o) {
							if (this.store_.state.isThemeOn) return;
							n = {
								data: {
									forceToggle: !0
								}
							}
						}
						e.forEach(function (e) {
							e.isIntersecting && !t.visited ? (t.store_.dispatch(t.topics_.TOGGLE_THEME, n), t.visited = !0) : t.visited = !1
						})
					}
				}]), t
			}(r.BaseComponent)
	},
	441: function (e, t, a) {
		e.exports = a.p + "css/android-10/v2/main.min.css"
	},
	45: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}

		function l() {
			return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			s = a(6),
			c = a(2);
		Object.setPrototypeOf(l.prototype, HTMLElement.prototype), Object.setPrototypeOf(l, HTMLElement);
		var _ = function (e) {
			function t() {
				o(this, t);
				var e = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return e.alt = "", e.img_ = new Image, e.loaded = !1, e.md = null, e.lg = null, e.xl = null, e.src = null, e.width = "320", e.store_ = e.constructor.store_, e.topics_ = c.Topics, e.subscriptions_ = [], e.handleBreakpointChange_ = e.handleBreakpointChange_.bind(e), e.source = "", e.img_.onload = function () {
					for (e.loaded = !0, e.classList.add("is-loaded"); e.hasChildNodes();) e.removeChild(e.lastChild);
					e.appendChild(e.img_)
				}, e
			}
			return i(t, e), r(t, null, [{
				key: "observedAttributes",
				get: function () {
					return ["alt", "src", "width", "md", "lg", "xl", "cache-ttl"]
				}
			}, {
				key: "store",
				set: function (e) {
					this.store_ || (this.store_ = e)
				}
			}]), r(t, [{
				key: "handleBreakpointChange_",
				value: function () {
					this.source = this.store_.state.currentBreakpoint
				}
			}, {
				key: "getImageParameters_",
				value: function (e) {
					var t = this.getImageWidth_(e),
						a = {},
						o = this.store_.state,
						n = o.isConnectionFast,
						i = o.supportsWebp,
						l = (0, s.getCloudImageParams)(n, i, this.cacheTTL);
					return a.default = "w" + t + "-" + l, a.retina = "w" + 2 * t + "-" + l, a
				}
			}, {
				key: "getMediaSource_",
				value: function (e) {
					var t = this.getAttribute("src"),
						a = this.getAttribute("src_md"),
						o = this.getAttribute("src_lg"),
						n = this.getAttribute("src_xl"),
						i = this.getImageParameters_(e),
						l = {
							small: t + "=" + i.default+" 1x, " + (t + "=" + i.retina + " 2x"),
							medium: a + "=" + i.default+" 1x, " + (a + "=" + i.retina + " 2x"),
							large: o + "=" + i.default+" 1x, " + (o + "=" + i.retina + " 2x"),
							"extra-large": n + "=" + i.default+" 1x, " + (n + "=" + i.retina + " 2x")
						};
					return l[e] || this.src + "=" + i.default+" 1x, " + (this.src + "=" + i.retina + " 2x")
				}
			}, {
				key: "getImageWidth_",
				value: function (e) {
					var t = [{
							small: this.width,
							medium: this.md,
							large: this.lg,
							"extra-large": this.xl
						}],
						a = t.reduce(this.reduceSizes_, {}),
						o = a.size[e] ? a.size[e] : a.fallbackSize;
					return this.getInterpolatedSize_(e, o)
				}
			}, {
				key: "reduceSizes_",
				value: function (e, t) {
					var a = Object.keys(t),
						o = !0,
						n = !1,
						i;
					try {
						for (var l = a[Symbol.iterator](), r, s; !(o = (r = l.next()).done) && (s = r.value, t[s]); o = !0) e = t[s]
					} catch (e) {
						n = !0, i = e
					} finally {
						try {
							!o && l.return && l.return()
						} finally {
							if (n) throw i
						}
					}
					return {
						size: t,
						fallbackSize: e
					}
				}
			}, {
				key: "getInterpolatedSize_",
				value: function (e, t) {
					var a = window.innerWidth,
						o = parseInt(t),
						n = a * o / {
							small: 360,
							medium: 768,
							large: 1024,
							"extra-large": 1440
						}[e];
					return Math.round(n)
				}
			}, {
				key: "attributeChangedCallback",
				value: function (e, t, a) {
					this[e] !== a && (this[e] = a)
				}
			}, {
				key: "visible",
				set: function (e) {
					this.src && this.width && e && !this.loaded && (this.source = this.store_.state.currentBreakpoint, this.subscriptions_ = [
						[this.topics_.BREAKPOINT_CHANGE, this.handleBreakpointChange_]
					], this.store_.subscribe(this.subscriptions_))
				}
			}, {
				key: "source",
				set: function (e) {
					if (e) {
						var t = this.hasAttribute("src_md"),
							a = this.getImageParameters_(e);
						this.img_.srcset = t ? this.getMediaSource_(e) : this.src + "=" + a.default+" 1x, " + (this.src + "=" + a.retina + " 2x"), this.img_.alt = this.alt
					}
				}
			}, {
				key: "cacheTTL",
				get: function () {
					return this.getAttribute("cache-ttl")
				},
				set: function (e) {
					this.setAttribute("cache-ttl", e)
				}
			}]), t
		}(l);
		t.default = _
	},
	46: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.scrollService = void 0;
		var n = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			i = a(2),
			l = a(5),
			r = function () {
				function e(t) {
					o(this, e), this.global_ = t, this.initialized_ = !1, this.animatedElements_ = new Set, this.lastKnownScrollPosition_ = 0, this.isTicking_ = !1, this.observer_ = null, this.st_ = "scrollTop", this.sh_ = "scrollHeight", this.handleVisibility_ = this.handleVisibility_.bind(this), this.scrollThresholdPace_ = 25, this.scrollThresholdTrigger_ = 25, this.trackElements_ = this.trackElements_.bind(this)
				}
				return n(e, [{
					key: "initialize",
					value: function (e) {
						var t = this;
						this.store_ = e, "IntersectionObserver" in this.global_ && (this.initialized_ || (this.h_ = document.documentElement, this.b_ = document.body, this.observer_ = new IntersectionObserver(this.handleVisibility_, {
							rootMargin: "350px 0px 350px 0px",
							threshold: [0, 0.5, 1]
						}), this.global_.addEventListener("scroll", function () {
							return t.handleScroll_()
						}), this.store_.subscribe([
							[i.Topics.TRACK_SCROLL_POSITION, this.trackElements_]
						]), this.initialized_ = !0))
					}
				}, {
					key: "handleScroll_",
					value: function () {
						var e = this.global_.scrollY;
						this.lastKnownScrollPosition_ = 0 <= e ? e : 0, this.requestTick_()
					}
				}, {
					key: "requestTick_",
					value: function () {
						var e = this;
						this.isTicking_ || (requestAnimationFrame(function () {
							return e.updateScrollPosition_()
						}), this.handleScrollPercentages_()), this.isTicking_ = !0
					}
				}, {
					key: "handleScrollPercentages_",
					value: function () {
						this.storeScrollPercentage_(), this.checkScrollThreshold_()
					}
				}, {
					key: "checkScrollThreshold_",
					value: function () {
						100 >= this.scrollThresholdTrigger_ && this.store_.state.scrollPercentage >= this.scrollThresholdTrigger_ && (this.store_.dispatch(i.Topics.GA_TRACK_EVENT, {
							data: this.scrollThresholdTrigger_,
							id: l.analyticsEvents.SCROLL_V
						}), this.scrollThresholdTrigger_ += this.scrollThresholdPace_)
					}
				}, {
					key: "storeScrollPercentage_",
					value: function () {
						var e = Math.round(100 * ((this.h_[this.st_] || this.b_[this.st_]) / ((this.h_[this.sh_] || this.b_[this.sh_]) - this.h_.clientHeight)));
						this.store_.state = {
							scrollPercentage: e
						}
					}
				}, {
					key: "updateScrollPosition_",
					value: function () {
						var e = this.lastKnownScrollPosition_;
						this.animatedElements_.forEach(function (t) {
							t.style.setProperty("--scroll-position", e + "px")
						}), this.isTicking_ = !1
					}
				}, {
					key: "trackElements_",
					value: function (e) {
						var t = this;
						e.forEach(function (e) {
							t.observer_.observe(e)
						})
					}
				}, {
					key: "handleVisibility_",
					value: function (e) {
						var t = this;
						e.forEach(function (e) {
							e.isIntersecting ? t.animatedElements_.add(e.target) : t.animatedElements_.delete(e.target)
						})
					}
				}]), e
			}(),
			s = new r(window);
		t.scrollService = s
	},
	47: function (e, t) {
		"use strict";

		function a(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var n = Math.round;
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			l = function () {
				function e(t) {
					o(this, e), this.global_ = t, this.observerDefaults_ = {
						root: null,
						rootMargin: "350px 0px 350px 0px",
						threshold: [0, 1]
					}, this.cssVariableName_ = "--component-position", this.trackedSections_ = []
				}
				return i(e, [{
					key: "initialize",
					value: function () {
						var t = this;
						if ("IntersectionObserver" in this.global_) {
							this.trackedSections_ = [].concat(a(document.querySelectorAll("main > *:not(article)")), a(document.querySelectorAll("main > article  > *")));
							var e = new IntersectionObserver(function (a, e) {
								return t.handleVisibility_(a, e)
							}, this.observerDefaults_);
							this.trackedSections_.forEach(function (t) {
								e.observe(t)
							})
						}
					}
				}, {
					key: "setComponentPosition_",
					value: function (e) {
						var t = this,
							a = e.$pos || null;
						requestAnimationFrame(function () {
							var o = n(e.offsetTop);
							a !== o && (e.style.setProperty(t.cssVariableName_, n(e.offsetTop) + "px"), e.$pos = o)
						})
					}
				}, {
					key: "handleVisibility_",
					value: function (e) {
						var t = this;
						e.forEach(function (e) {
							t.setComponentPosition_(e.target)
						})
					}
				}]), e
			}(),
			r = new l(window);
		t.visibilityService = r
	},
	48: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.analyticsService = void 0;
		var n = Object.assign || function (e) {
				for (var t = 1, a; t < arguments.length; t++)
					for (var o in a = arguments[t], a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
				return e
			},
			i = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			l = a(9),
			r = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(l),
			s = a(2),
			c = a(3),
			_ = a(5),
			d = function () {
				function e(t, a) {
					o(this, e), this.document_ = t, this.global_ = a, this.bodyEl_ = this.document_.body, this.pageName_ = "", this.countAttemptsForGa_ = 0, this.maxAttemptsCheckGa_ = 3, this.gaCheckInterval_ = 1e3, this.clientId_ = "", this.sessionId_ = "", this.baseScrollEvent_ = {
						event: "trackScroll",
						eventCategory: "scroll",
						eventLabel: this.getPageName_()
					}, this.footerInAccordionBreakpoints_ = {
						small: !0,
						medium: !0
					}, this.handleTrackEvent_ = this.handleTrackEvent_.bind(this)
				}
				return i(e, [{
					key: "initialize",
					value: function (e) {
						var t = this;
						this.store_ = e, this.pageName_ = this.getPageName_(), this.bodyEl_.addEventListener("click", function (a) {
							return t.handleClickEvent_(a)
						}), this.gaInterval_ = setInterval(this.checkGaExistence_.bind(this), this.gaCheckInterval_), this.subscribeToEvents()
					}
				}, {
					key: "checkGaExistence_",
					value: function () {
						this.global_.ga ? (clearTimeout(this.gaInterval_), this.onGaLoad()) : (this.countAttemptsForGa_++, this.countAttemptsForGa_ == this.maxAttemptsCheckGa_ && clearTimeout(this.gaInterval_))
					}
				}, {
					key: "subscribeToEvents",
					value: function () {
						this.store_.subscribe([
							[s.Topics.GA_TRACK_EVENT, this.handleTrackEvent_]
						])
					}
				}, {
					key: "handleTrackEvent_",
					value: function (e, t) {
						if (e) switch (e) {
							case _.analyticsEvents.CLICK:
								this.handleClickEvent_(t);
								break;
							case _.analyticsEvents.SCROLL_V:
								this.handleScrollThresholdEvent_(t);
								break;
							case _.analyticsEvents.SCROLL_H:
								this.handleHorizontalScroll_(t);
								break;
							case _.analyticsEvents.VIDEO_INTERACTION:
								this.handleVideoInteraction_(t);
								break;
							case _.analyticsEvents.MODAL_INTERACTION:
								this.handleModalInteraction_(t);
								break;
							case _.analyticsEvents.AUTOMATED_INTERACTION:
								this.handleAutomatedInteractionEvent_(t);
								break;
							default:
						}
					}
				}, {
					key: "handleAutomatedInteractionEvent_",
					value: function (e) {
						var t = this.buildEventDataFromConfig_("trackEvent", e, _.analyticsEvents.AUTOMATED_INTERACTION);
						this.pushToDataLayer_(t)
					}
				}, {
					key: "handleScrollThresholdEvent_",
					value: function (e) {
						if (m[e]) {
							m[e] = !1;
							var t = n({}, this.baseScrollEvent_, {
								eventAction: e + "%"
							});
							this.pushToDataLayer_(t)
						}
					}
				}, {
					key: "getPageName_",
					value: function () {
						var e = window.location.pathname;
						return "/" === e ? "homepage" : e.replace(/\//g, " ").trim().split(" ").reduce(function (e, t) {
							return "" + (e ? e + ":" : "") + t.split("-").reduce(function (e, t) {
								return e + " " + (t.charAt(0).toUpperCase() + t.slice(1))
							}, "")
						}, "").trim().toLocaleLowerCase()
					}
				}, {
					key: "handleClickEvent_",
					value: function (e) {
						if (this.isValidEvent_(e)) switch (e.target.tagName.toLowerCase()) {
							case p.ANCHOR:
								this.handleAnchorClick_(e);
								break;
							case p.BUTTON:
								this.handleButtonClick_(e);
								break;
							case p.HEADING_3:
								this.handleHeading3Click_(e);
								break;
							case p.SELECT:
								this.handleSelectClick_(e);
								break;
							case p.OPTION:
								this.handleOptionClick_(e);
								break;
							case p.INPUT:
								this.handleInputClick_(e);
								break;
							default:
						}
					}
				}, {
					key: "handleVideoInteraction_",
					value: function (e) {
						var t = n({}, this.extractVideoProperties_(e), {
							eventCategory: e.category,
							eventAction: e.state,
							scrollPosition: this.store_.state.scrollPercentage + "%",
							moduleName: e.category
						});
						this.pushToDataLayer_(t)
					}
				}, {
					key: "handleModalInteraction_",
					value: function (e) {
						var t = {
							eventCategory: e.category,
							eventAction: e.isClosed ? "close pop up" : "open pop up",
							scrollPosition: this.store_.state.scrollPercentage + "%",
							moduleName: "modal"
						};
						"video" === e.category && (t = n({}, this.extractVideoProperties_(e), t)), this.pushToDataLayer_(t)
					}
				}, {
					key: "extractVideoProperties_",
					value: function (e) {
						var t = {
							event: "trackEvent",
							eventLabel: this.getVideoEventLabel_(e),
							videoUrl: e.url,
							videoName: e.name,
							videoLength: e.length
						};
						return t
					}
				}, {
					key: "getVideoEventLabel_",
					value: function (e) {
						return e.isComplete || e.isProgressTracked || e.isClosed ? e.url : e.progress + "%"
					}
				}, {
					key: "handleAnchorClick_",
					value: function (e) {
						var t = (0, r.default)(e.target, b);
						if (Object.keys(t).length) {
							var a = n({}, this.buildEventDataFromConfig_("trackEvent", t, e.type), {
								linkUrl: t.linkUrl
							});
							t.fileDownload && (a = n({}, a, {
								fileDownload: t.fileDownload
							})), this.pushToDataLayer_(a)
						}
					}
				}, {
					key: "handleButtonClick_",
					value: function (e) {
						var t = (0, r.default)(e.target, b),
							a = e.target,
							o = a.classList.contains(y.ACCORDION_ITEM_BUTTON);
						if (Object.keys(t).length) {
							o && (t.eventLabel = "true" === a.parentElement.getAttribute("aria-expanded") ? "open" : "close");
							var n = this.buildEventDataFromConfig_("trackEvent", t, e.type);
							this.pushToDataLayer_(n)
						}
					}
				}, {
					key: "handleHeading3Click_",
					value: function (e) {
						var t = (0, r.default)(e.target, b);
						if (Object.keys(t).length) {
							var a = e.target.attributes["aria-expanded"].value,
								o = this.buildEventDataFromConfig_("trackEvent", t, e.type),
								n = this.store_.state.currentBreakpoint,
								i = !0;
							e.target.classList.contains(y.FOOTER_COLUMN_NAME) && (this.footerInAccordionBreakpoints_[n] ? o.eventLabel = "" + ("true" === a ? "open" : "close") : i = !1), i && this.pushToDataLayer_(o)
						}
					}
				}, {
					key: "handleSelectClick_",
					value: function (e) {
						var t = (0, r.default)(e.target, b);
						if (Object.keys(t).length) {
							var a = this.buildEventDataFromConfig_("trackEvent", t, e.type);
							this.pushToDataLayer_(a)
						}
					}
				}, {
					key: "handleOptionClick_",
					value: function (e) {
						var t = (0, r.default)(e.target, b);
						if (Object.keys(t).length) {
							var a = this.buildEventDataFromConfig_("trackEvent", t, e.type);
							this.pushToDataLayer_(a)
						}
					}
				}, {
					key: "handleInputClick_",
					value: function (e) {
						var t = (0, r.default)(e.target, b);
						if (Object.keys(t).length) {
							var a = this.buildEventDataFromConfig_("trackEvent", t, e.type);
							this.pushToDataLayer_(a)
						}
					}
				}, {
					key: "buildEventDataFromConfig_",
					value: function (e, t, a) {
						var o = this.buildReducedTitle_(t.title),
							n = /<[^>]*>/gm,
							i = Object.keys(t),
							l = {
								event: e,
								eventCategory: t.eventCategory,
								eventAction: t.eventAction || o + " " + a,
								eventLabel: t.eventLabel.replace(n, "") || this.pageName_,
								scrollPosition: this.store_.state.scrollPercentage + "%",
								moduleName: t.moduleName,
								linkUrl: "",
								clientId: this.clientId_,
								sessionId: this.sessionId_,
								hitTimestamp: this.getTimestamp()
							};
						return u.forEach(function (e) {
							i.includes(e) && (l[e] = t[e])
						}), l
					}
				}, {
					key: "buildReducedTitle_",
					value: function () {
						var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
							t = e.indexOf("featured accordion"),
							a = e.indexOf("accordion"),
							o = e.indexOf("move carousel"),
							n = e,
							i = ""; - 1 < t && (n = e.substr(0, t).trim(), i = e.substr(t)), -1 < a && (n = e.substr(0, a).trim(), i = e.substr(a)), -1 < o && (n = e.substr(0, o).trim(), i = e.substr(o));
						var l = n ? n.split(" ").slice(0, 3).join(" ") : "";
						return (l + " " + i).trim()
					}
				}, {
					key: "pushToDataLayer_",
					value: function (e) {
						if (!("dataLayer" in this.global_)) throw this.store_.unsubscribe(s.Topics.GA_TRACK_EVENT, this.handleClickEvent_), this.bodyEl_.removeEventListener("click", this.handleClickEvent_), new c.DataLayerNotFound;
						this.global_.dataLayer.push(e)
					}
				}, {
					key: "onGaLoad",
					value: function () {
						if (this.clientId_ = this.getGATrackingClientId(), this.sessionId_ = this.getRandomSessionId(), !!this.clientId_) {
							var e = {
								clientId: this.clientId_,
								sessionId: this.sessionId_,
								hitTimestamp: this.getTimestamp()
							};
							this.pushToDataLayer_(e)
						}
					}
				}, {
					key: "getGATrackingClientId",
					value: function () {
						if (this.global_.ga && this.global_.ga.getAll) {
							var e = this.global_.ga.getAll().find(function (e) {
								return e.get("trackingId") === "UA-5686560-5"
							});
							return e ? e.get("clientId") : null
						}
						return null
					}
				}, {
					key: "getTimestamp",
					value: function () {
						var e = new Date,
							t = -e.getTimezoneOffset(),
							a = 0 <= t ? "+" : "-",
							o = function (e) {
								var t = Math.abs(Math.floor(e));
								return (10 > t ? "0" : "") + t
							},
							n = e.getFullYear() + "-" + o(e.getMonth() + 1) + "-" + o(e.getDate()) + "T" + o(e.getHours()) + ":" + o(e.getMinutes()) + ":" + o(e.getSeconds()) + "." + o(e.getMilliseconds()) + a + o(t / 60) + ":" + o(t % 60);
						return n
					}
				}, {
					key: "getRandomSessionId",
					value: function () {
						var e = new Date().getTime(),
							t = Math.random().toString(36).substring(5);
						return e + "." + t
					}
				}, {
					key: "handleHorizontalScroll_",
					value: function (e) {
						var t = e.event,
							a = e.direction;
						if (this.isValidEvent_(t) && a) {
							var o = (0, r.default)(t.target, b);
							if (Object.keys(o).length) {
								var n = this.buildEventDataFromConfig_("trackEvent", o, "");
								n.eventLabel = a, this.pushToDataLayer_(n)
							}
						}
					}
				}, {
					key: "isValidEvent_",
					value: function (e) {
						return e && e.target && e.target.tagName
					}
				}]), e
			}(),
			u = ["accordionString"],
			p = {
				ANCHOR: "a",
				BUTTON: "button",
				HEADING_3: "h3",
				OPTION: "option",
				SELECT: "select",
				INPUT: "input"
			},
			y = {
				FOOTER_COLUMN_NAME: "footer-default__title",
				ACCORDION_ITEM_BUTTON: "accordion__item-button",
				HEADER_DEFFAULT_LANGUAGE: "header-default__language"
			},
			b = "data-g-config",
			m = {
				25: !0,
				50: !0,
				75: !0,
				100: !0
			},
			g = new d(document, window);
		t.analyticsService = g
	},
	49: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.featureDetectionService = void 0;
		var n = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			i = a(6),
			l = a(2),
			r = function () {
				function e(t, a, n) {
					o(this, e), this.document_ = t, this.global_ = a, this.navigator_ = n, this.motionQuery_ = null, this.handleReduceMotionChanged_ = this.handleReduceMotionChanged_.bind(this), this.detectWebpSupport_ = this.detectWebpSupport_.bind(this)
				}
				return n(e, [{
					key: "initialize",
					value: function (e) {
						this.store_ = e, this.detectTouchability_(), this.detectReduceMotion_(), this.detectOs_(), this.detectConnectionSpeed_(), this.store_.subscribe([
							[l.Topics.APP_LOADED, this.detectWebpSupport_]
						])
					}
				}, {
					key: "detectOs_",
					value: function () {
						var e = this.navigator_.userAgent,
							t = 0 <= e.indexOf("Android");
						if (t) {
							var a = parseFloat(e.slice(e.indexOf("Android") + 8));
							this.store_.state = {
								version: a
							}
						}
						this.store_.state = {
							isAndroid: t
						}
					}
				}, {
					key: "detectTouchability_",
					value: function () {
						var e = this.getTouchability_();
						this.store_.state = {
							isTouch: e
						}
					}
				}, {
					key: "getTouchability_",
					value: function () {
						return "ontouchstart" in this.document_.documentElement
					}
				}, {
					key: "detectReduceMotion_",
					value: function () {
						this.motionQuery_ = matchMedia("(prefers-reduced-motion)"), this.motionQuery_.addListener(this.handleReduceMotionChanged_), this.handleReduceMotionChanged_()
					}
				}, {
					key: "handleReduceMotionChanged_",
					value: function () {
						var e = this.motionQuery_.matches;
						this.store_.state = {
							reduceMotion: e
						}, this.store_.dispatch(l.Topics.REDUCED_MOTION_CHANGE, {
							data: e
						})
					}
				}, {
					key: "detectConnectionSpeed_",
					value: function () {
						var e = new i.NetworkAware,
							t = e.isFast();
						this.store_.state = {
							isConnectionFast: t
						}
					}
				}, {
					key: "detectWebpSupport_",
					value: function () {
						var e = document.documentElement.classList.contains("webp");
						this.store_.state = {
							supportsWebp: e
						}
					}
				}]), e
			}(),
			s = new r(document, window, navigator);
		t.featureDetectionService = s
	},
	5: function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.analyticsEvents = {
			CLICK: "click",
			AUTOMATED_INTERACTION: "automated-interaction",
			MODAL_INTERACTION: "modal",
			SCROLL_H: "scroll-h",
			SCROLL_V: "scroll-v",
			VIDEO_INTERACTION: "video"
		}
	},
	50: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.lotteryService = void 0;
		var n = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			i = a(2),
			l = a(16),
			r = function () {
				function e() {
					o(this, e), this.raffles_ = {}, this.startLottery_ = this.startLottery_.bind(this)
				}
				return n(e, [{
					key: "initialize",
					value: function (e) {
						this.store_ = e, this.store_.subscribe([
							[i.Topics.START_LOTTERY, this.startLottery_]
						])
					}
				}, {
					key: "startLottery_",
					value: function (e, t) {
						if (!this.raffles_[e]) {
							this.raffles_[e] = !0;
							var a = Math.floor(100 * Math.random() + 1);
							a <= t.probability ? (this.store_.dispatch(i.Topics.SHOW_SURVEY, {
								id: e
							}), (0, l.logDevOnly)("User has won:", {
								ticket: a,
								probability: t.probability
							})) : (0, l.logDevOnly)("User has lost:", {
								ticket: a,
								probability: t.probability
							})
						}
					}
				}]), e
			}(),
			s = new r;
		t.lotteryService = s
	},
	51: function (e, t, a) {
		"use strict";

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.surveyService = void 0;
		var i = Object.assign || function (e) {
				for (var t = 1, a; t < arguments.length; t++)
					for (var o in a = arguments[t], a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
				return e
			},
			l = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			r = a(2),
			s = a(52),
			c = o(s),
			_ = a(17),
			d = o(_),
			u = a(16),
			p = function () {
				function e(t) {
					n(this, e), this.global_ = t, this.validatorFactory_ = c.default, this.dao_ = d.default.get("temporary"), this.surveysToTrack_ = {}, this.animationFrame_ = null, this.registerSurvey_ = this.registerSurvey_.bind(this), this.track_ = this.track_.bind(this), this.userMeetsConditions_ = this.userMeetsConditions_.bind(this)
				}
				return l(e, [{
					key: "initialize",
					value: function (e) {
						this.store_ = e, this.store_.subscribe([
							[r.Topics.REGISTER_SURVEY, this.registerSurvey_]
						]), this.track_()
					}
				}, {
					key: "trackVisitedPages_",
					value: function () {
						var e = window.location.pathname,
							t = this.dao_.read("visitedPages") || {};
						t[e] || (t[e] = 1), this.dao_.save("visitedPages", t)
					}
				}, {
					key: "registerSurvey_",
					value: function (e, t) {
						if (!this.surveysToTrack_[e]) {
							var a = t.validatorType,
								o = i({}, t, {
									validator: this.validatorFactory_.get(a, this.store_)
								});
							this.surveysToTrack_[e] = o, (0, u.logDevOnly)("Survey registered with the following configurations:", o)
						}
						cancelAnimationFrame(this.animationFrame_), this.track_()
					}
				}, {
					key: "track_",
					value: function () {
						var e = Object.keys(this.surveysToTrack_);
						this.surveysToTrack_ = e.reduce(this.userMeetsConditions_, {}), Object.keys(this.surveysToTrack_).length && (this.animationFrame_ = requestAnimationFrame(this.track_))
					}
				}, {
					key: "userMeetsConditions_",
					value: function (e, t) {
						var a = this.surveysToTrack_[t],
							o = this.store_.state.isCookieConsentAccepted;
						return o && a.validator.execute(a) ? this.store_.dispatch(r.Topics.START_LOTTERY, {
							id: t,
							data: a
						}) : e[t] = a, e
					}
				}]), e
			}(),
			y = new p(window);
		t.surveyService = y
	},
	52: function (e, t, a) {
		"use strict";

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			l = a(53),
			r = o(l),
			s = a(54),
			c = o(s),
			_ = window.performance,
			d = function () {
				function e() {
					n(this, e)
				}
				return i(e, null, [{
					key: "get",
					value: function (e, t) {
						var a = null;
						switch (e) {
							case "loose":
								a = new c.default(t, _);
								break;
							case "strict":
							default:
								a = new r.default(t, _);
						}
						return a
					}
				}]), e
			}();
		t.default = d
	},
	53: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var l = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			r = a(24),
			s = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(r),
			c = function (e) {
				function t(e, a) {
					return o(this, t), n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a))
				}
				return i(t, e), l(t, [{
					key: "execute",
					value: function (e) {
						var t = this.userSpentEnoughTime_(e.timeInPage),
							a = this.userScrolledEnough_(e.scrollPercentage),
							o = this.userNavigatedEnough_(e.amountOfPages);
						return t && a && o
					}
				}]), t
			}(s.default);
		t.default = c
	},
	54: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var l = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			r = a(24),
			s = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(r),
			c = function (e) {
				function t(e, a) {
					return o(this, t), n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a))
				}
				return i(t, e), l(t, [{
					key: "execute",
					value: function (e) {
						var t = this.userSpentEnoughTime_(e.timeInPage),
							a = this.userScrolledEnough_(e.scrollPercentage),
							o = this.userNavigatedEnough_(e.amountOfPages);
						return t || a || o
					}
				}, {
					key: "userNavigatedEnough_",
					value: function () {
						return !1
					}
				}]), t
			}(s.default);
		t.default = c
	},
	55: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var l = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			r = a(15),
			s = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(r),
			c = function (e) {
				function t(e) {
					o(this, t);
					var a = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					if (!a.isSupported_()) throw new Error("Session storage not supported");
					return a.storage_ = a.global_.sessionStorage, a
				}
				return i(t, e), l(t, [{
					key: "isSupported_",
					value: function () {
						return "sessionStorage" in window && window.sessionStorage
					}
				}, {
					key: "save",
					value: function (e, t) {
						var a = JSON.stringify(t);
						return this.storage_.setItem(this.generateKey_(e), a), this.read(e)
					}
				}, {
					key: "read",
					value: function (e) {
						var t = JSON.parse(this.storage_.getItem(this.generateKey_(e)));
						return t
					}
				}, {
					key: "delete",
					value: function (e) {
						this.storage_.removeItem(this.generateKey_(e))
					}
				}]), t
			}(s.default);
		t.default = c
	},
	56: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var l = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			r = a(15),
			s = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(r),
			c = function (e) {
				function t(e) {
					o(this, t);
					var a = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					if (!a.isSupported_()) throw new Error("Session storage not supported");
					return a.storage_ = a.global_.localStorage, a
				}
				return i(t, e), l(t, [{
					key: "isSupported_",
					value: function () {
						return "localStorage" in window && window.localStorage
					}
				}, {
					key: "save",
					value: function (e, t) {
						var a = JSON.stringify(t);
						return this.storage_.setItem(this.generateKey_(e), a), this.read(e)
					}
				}, {
					key: "read",
					value: function (e) {
						var t = JSON.parse(this.storage_.getItem(this.generateKey_(e)));
						return t
					}
				}, {
					key: "delete",
					value: function (e) {
						this.storage_.removeItem(this.generateKey_(e))
					}
				}]), t
			}(s.default);
		t.default = c
	},
	57: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var l = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			r = a(15),
			s = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(r),
			c = function (e) {
				function t(e) {
					o(this, t);
					var a = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					if (!a.isSupported_()) throw new Error("Cookies not supported");
					return a.cookie_ = a.global_.document.cookie, a
				}
				return i(t, e), l(t, [{
					key: "isSupported_",
					value: function () {
						return document && "cookie" in document
					}
				}, {
					key: "save",
					value: function (e, t, a) {
						var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "/",
							n = this.generateKey_(e),
							i = a.toGMTString();
						return this.global_.document.cookie = n + "=" + t + "; expires=" + i + "; path=" + o, this.read(e)
					}
				}, {
					key: "read",
					value: function (e) {
						for (var t = this.generateKey_(e) + "=", a = this.cookie_.split(";"), o = 0; o < a.length; o++)
							if (-1 < a[o].indexOf(t)) return a[o];
						return !1
					}
				}, {
					key: "delete",
					value: function (e) {
						this.cookie_ = this.generateKey_(e) + "=; " + "expires=Thu, 01 Jan 1970 00:00:01 GMT" + "; path=\"/\""
					}
				}]), t
			}(s.default);
		t.default = c
	},
	58: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.lottieService = void 0;
		var n = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			i = a(2),
			l = function () {
				function e() {
					o(this, e), this.lottieAnimationsMap_ = {}, this.registerAnimation_ = this.registerAnimation_.bind(this), this.loadAnimation_ = this.loadAnimation_.bind(this)
				}
				return n(e, [{
					key: "initialize",
					value: function (e) {
						this.store_ = e, this.store_.subscribe([
							[i.Topics.REGISTER_ANIMATION, this.registerAnimation_],
							[i.Topics.LOAD_ANIMATION, this.loadAnimation_]
						])
					}
				}, {
					key: "registerAnimation_",
					value: function (e) {
						this.lottieAnimationsMap_[e] = !1
					}
				}, {
					key: "loadAnimation_",
					value: function (e) {
						this.lottieAnimationsMap_[e] ? this.dispatchAnimationLoaded_(e, this.lottieAnimationsMap_[e]) : this.loadAnimationData_(e)
					}
				}, {
					key: "loadAnimationData_",
					value: function (e) {
						var t = this;
						fetch("/static/data/auto-animations/" + e + ".json").then(function (e) {
							return e.json()
						}).then(function (a) {
							t.lottieAnimationsMap_[e] = a, t.dispatchAnimationLoaded_(e, t.lottieAnimationsMap_[e])
						})
					}
				}, {
					key: "dispatchAnimationLoaded_",
					value: function (e, t) {
						this.store_.dispatch(i.Topics.LOTTIE_ANIMATION_LOADED, {
							id: e,
							data: t
						})
					}
				}]), e
			}(),
			r = new l;
		t.lottieService = r
	},
	59: function (e, t, a) {
		"use strict";

		function o(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function l(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.CookieBannerDefault = void 0;
		var r = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			s = a(0),
			c = a(17),
			_ = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(c),
			d = a(60),
			u = a(4),
			p = t.CookieBannerDefault = function (e) {
				function t(e, a) {
					n(this, t);
					var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return o.pageLocale_ = "", o.dao_ = null, o.generateCookieName_ = o.generateCookieName_.bind(o), o.validateCookie_ = o.validateCookie_.bind(o), o.dispatchVisibilityEvent_ = o.dispatchVisibilityEvent_.bind(o), o
				}
				return l(t, e), r(t, [{
					key: "initialize",
					value: function () {
						this.pageLocale_ = (0, d.getPageLocale)(), this.dao_ = _.default.get("short-term"), this.events = o({}, y.CLICK + " " + b.CTA, this.hideCookieBanner_), this.subscribeEvents_()
					}
				}, {
					key: "setCookie_",
					value: function () {
						var e = this.getCookieExpirationTime_();
						this.dao_.save(this.generateCookieName_(), "true", e)
					}
				}, {
					key: "getCookieExpirationTime_",
					value: function () {
						var e = new Date,
							t = f.EXPIRATION_DAYS * f.DAY * f.HOUR * f.MINUTE * f.SECOND,
							a = e.getTime() + t;
						return e.setTime(a), e
					}
				}, {
					key: "getCookie_",
					value: function () {
						return this.dao_.read(this.generateCookieName_())
					}
				}, {
					key: "generateCookieName_",
					value: function () {
						return g.NAME + "_" + this.pageLocale_.replace("-", "_").toUpperCase()
					}
				}, {
					key: "validateCookie_",
					value: function () {
						var e = this.generateCookieName_(),
							t = this.dao_.read(e);
						this.element.style = {}, t ? (this.element.parentNode.removeChild(this.element), this.acceptCookieConsent_()) : (this.element.classList.add(m.SHOW_BANNER), this.dispatchVisibilityEvent_(!0))
					}
				}, {
					key: "hideCookieBanner_",
					value: function () {
						var e = this;
						this.setCookie_(), this.element.classList.remove(m.SHOW_BANNER), this.dispatchVisibilityEvent_(!1), (0, u.requestTimeout)(function () {
							e.element.parentNode.removeChild(e.element), e.acceptCookieConsent_()
						}, 800)
					}
				}, {
					key: "acceptCookieConsent_",
					value: function () {
						this.store_.state = {
							isCookieConsentAccepted: !0
						}
					}
				}, {
					key: "dispatchVisibilityEvent_",
					value: function (e) {
						var t = this;
						requestAnimationFrame(function () {
							t.store_.dispatch(t.topics_.COOKIE_BANNER_INTERACTION, {
								data: {
									height: parseInt(t.element.offsetHeight),
									isShown: e
								}
							})
						})
					}
				}, {
					key: "subscribeEvents_",
					value: function () {
						this.subscriptions_ = [
							[this.topics_.APP_LOADED, this.validateCookie_],
							[this.topics_.WINDOW_RESIZE_ENDED, this.dispatchVisibilityEvent_]
						]
					}
				}]), t
			}(s.BaseComponent),
			y = {
				CLICK: "click"
			},
			b = {
				CTA: ".js-cookie-banner"
			},
			m = {
				SHOW_BANNER: "cookie-banner--show"
			},
			g = {
				NAME: "cba"
			},
			f = {
				EXPIRATION_DAYS: 365,
				DAY: 24,
				HOUR: 60,
				MINUTE: 60,
				SECOND: 1e3
			}
	},
	6: function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = a(13);
		Object.keys(o).forEach(function (e) {
			"default" === e || "__esModule" === e || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return o[e]
				}
			})
		});
		var n = a(32);
		Object.keys(n).forEach(function (e) {
			"default" === e || "__esModule" === e || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return n[e]
				}
			})
		});
		var i = a(33);
		Object.keys(i).forEach(function (e) {
			"default" === e || "__esModule" === e || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return i[e]
				}
			})
		});
		var l = a(14);
		Object.keys(l).forEach(function (e) {
			"default" === e || "__esModule" === e || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return l[e]
				}
			})
		});
		var r = a(34);
		Object.keys(r).forEach(function (e) {
			"default" === e || "__esModule" === e || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return r[e]
				}
			})
		});
		var s = a(26);
		Object.keys(s).forEach(function (e) {
			"default" === e || "__esModule" === e || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return s[e]
				}
			})
		});
		var c = a(27);
		Object.keys(c).forEach(function (e) {
			"default" === e || "__esModule" === e || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return c[e]
				}
			})
		});
		var _ = a(28);
		Object.keys(_).forEach(function (e) {
			"default" === e || "__esModule" === e || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return _[e]
				}
			})
		});
		var d = a(36);
		Object.keys(d).forEach(function (e) {
			"default" === e || "__esModule" === e || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return d[e]
				}
			})
		})
	},
	60: function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.getPageLocale = function () {
			var e = /(.*intl\/)(.*?)|(\/.*)/gm,
				t = window.location.pathname.replace(e, "");
			return "" === t ? "EN_US" : t
		}
	},
	65: function (e, t, a) {
		"use strict";

		function o(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}

		function n(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function l(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function r(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.FooterDefault = void 0;
		var s = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			c = a(0),
			_ = a(6),
			d = t.FooterDefault = function (e) {
				function t(e, a) {
					i(this, t);
					var o = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return o.breakpoints_ = new _.Breakpoints, o.navitems_ = [], o.events = n({}, y.CLICK + " " + u.NAV_ITEM, o.actionsAccordion_), o.breakpoints_.onChange(function (e) {
						return o.actionsAccordion_(e)
					}), o.handleCookieBannerInteraction_ = o.handleCookieBannerInteraction_.bind(o), o
				}
				return r(t, e), s(t, [{
					key: "initialize",
					value: function () {
						this.navitems_ = [].concat(o(this.element.querySelectorAll(u.NAV_ITEM))), this.updateFooterMenu_(), this.subscribeEvents_()
					}
				}, {
					key: "updateFooterMenu_",
					value: function () {
						var e = this.breakpoints_.current().breakpoint,
							t = e >= _.BreakPointsOption.desktop;
						t ? this.navitems_.forEach(function (e) {
							_.aria.setState(e, _.aria.State.EXPANDED, !0), e.setAttribute("disabled", !0)
						}) : this.navitems_.forEach(function (e) {
							_.aria.setState(e, _.aria.State.EXPANDED, !1), e.removeAttribute("disabled")
						})
					}
				}, {
					key: "actionsAccordion_",
					value: function (e) {
						if (y.CLICK !== e.type) return void this.updateFooterMenu_();
						var t = this.breakpoints_.current().breakpoint,
							a = e.currentTarget,
							o = t <= _.BreakPointsOption.tablet,
							n = a.nextElementSibling,
							i = n.classList.contains(p.SUBITEM_CONTAINER),
							l = a.getAttribute(_.aria.State.EXPANDED);
						l = JSON.parse(l), o && i && (_.aria.setState(a, _.aria.State.EXPANDED, !l), _.aria.setState(n, _.aria.State.HIDDEN, l))
					}
				}, {
					key: "handleCookieBannerInteraction_",
					value: function (e) {
						var t = e.isShown,
							a = e.height;
						this.element.style.setProperty("padding-bottom", t ? a + "px" : 0)
					}
				}, {
					key: "subscribeEvents_",
					value: function () {
						this.store_.subscribe([
							[this.topics_.COOKIE_BANNER_INTERACTION, this.handleCookieBannerInteraction_]
						])
					}
				}]), t
			}(c.BaseComponent),
			u = {
				NAV_ITEM: ".js-nav-item",
				MENU_BAR: ".js-footer-menubar",
				MENU_ITEM: ".js-footer-menuitem"
			},
			p = {
				SUBITEM_CONTAINER: "js-subitem-container"
			},
			y = {
				CLICK: "click"
			}
	},
	66: function (e, t, a) {
		"use strict";

		function o(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function l(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.HeaderDefault = void 0;
		var r = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			s = a(0),
			c = a(4),
			_ = a(5),
			d = t.HeaderDefault = function (e) {
				function t(e, a) {
					n(this, t);
					var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return o.events = {
						"click .js-hamburger": o.showNav_,
						"click .js-close": o.hideNav_,
						"blur .js-language-selector": o.handleFocus_,
						"focus .header-default__wrapper a": o.showHeader_
					}, o.isTicking_ = !1, o.lastKnownScrollPosition_ = 0, o.transparencyTimeout_ = null, o.isScrollingDown_ = !1, o.handleBreakpointChange_ = o.handleBreakpointChange_.bind(o), o
				}
				return l(t, e), r(t, [{
					key: "initialize",
					value: function () {
						var t = this;
						this.tabbable = [].concat(o(this.element.querySelectorAll("a"))), this.config_.isSticky && (this.onScrollHandler_(), this.global_.addEventListener("scroll", this.onScrollHandler_.bind(this))), this.element.addEventListener("click", function (a) {
							t.handleOverlay_(a)
						}), this.mainLogo = this.element.querySelector(p.MAIN_LOGO), this.subscriptions_ = [
							[this.topics_.BREAKPOINT_CHANGE, this.handleBreakpointChange_]
						]
					}
				}, {
					key: "showNav_",
					value: function (e) {
						var t = this;
						this.isOpen_ = !0, this.element.classList.add(u.OPEN), this.store_.dispatch(this.topics_.NAV_SHOWN, {
							data: e
						}), (0, c.requestTimeout)(function () {
							t.mainLogo.focus()
						}, 5)
					}
				}, {
					key: "handleOverlay_",
					value: function (e) {
						e.target === this.element && this.hideNav_(e)
					}
				}, {
					key: "handleFocus_",
					value: function () {
						this.isOpen_ && this.mainLogo.focus()
					}
				}, {
					key: "hideNav_",
					value: function (e) {
						var t = this.element.querySelector(p.HAMBURGER);
						e && (e.preventDefault(), e.stopPropagation()), this.isOpen_ = !1, this.element.classList.remove(u.OPEN), t.focus(), this.store_.dispatch(this.topics_.NAV_HIDDEN, {
							data: e
						}), this.store_.dispatch(this.topics_.GA_TRACK_EVENT, {
							data: e,
							id: _.analyticsEvents.CLICK
						})
					}
				}, {
					key: "onScrollHandler_",
					value: function () {
						this.isOpen_ || this.store_.state.isSearchOpened || this.requestTick_()
					}
				}, {
					key: "requestTick_",
					value: function () {
						var e = this;
						this.isTicking_ || requestAnimationFrame(function () {
							return e.updateScrollPosition_()
						}), this.isTicking_ = !0
					}
				}, {
					key: "getScrollPosition_",
					value: function () {
						var e = Math.max(this.global_.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
						return 0 <= e ? e : 0
					}
				}, {
					key: "updateScrollPosition_",
					value: function () {
						var e = this.getScrollPosition_();
						this.shouldHandleScrollDown_(e) ? this.handleScrollDown_(e) : this.shouldHandleScrollUp_(e) && this.handleScrollUp_(e), this.isTicking_ = !1, this.lastKnownScrollPosition_ = e, this.store_.dispatch(this.topics_.NAV_SCROLL_CHANGE, {})
					}
				}, {
					key: "shouldHandleScrollUp_",
					value: function (e) {
						return e < this.lastKnownScrollPosition_ && this.isScrollingDown_ || 0 === e
					}
				}, {
					key: "shouldHandleScrollDown_",
					value: function (e) {
						return e > this.lastKnownScrollPosition_ && !this.isScrollingDown_
					}
				}, {
					key: "handleScrollDown_",
					value: function (e) {
						var t = this;
						0 < e && 0 < this.lastKnownScrollPosition_ ? (this.element.classList.add(u.FIXED), this.element.classList.add(u.HIDDEN), this.element.style.transform = "translateY(-" + y + "px)", this.config_.isLegacy && (document.body.style.paddingTop = y + "px"), this.isScrollingDown_ = !0) : 0 < e && (this.transparencyTimeout_ = setTimeout(function () {
							requestAnimationFrame(function () {
								t.element.classList.add(u.IN_TRANSITION), t.isScrollingDown_ = !0
							})
						}, 0 === this.lastKnownScrollPosition_ ? 500 : 0))
					}
				}, {
					key: "handleScrollUp_",
					value: function (e) {
						this.element.style.transform = "", this.element.classList.remove(u.HIDDEN), 0 === e && (clearTimeout(this.transparencyTimeout_), this.element.classList.remove(u.FIXED), this.element.classList.remove(u.IN_TRANSITION), this.config_.isLegacy && (document.body.style.paddingTop = "0")), this.isScrollingDown_ = !1
					}
				}, {
					key: "showHeader_",
					value: function () {
						var e = this,
							t = this.getScrollPosition_();
						requestAnimationFrame(function () {
							e.element.style.transform = "", 0 < t && e.element.classList.add(u.IN_TRANSITION)
						})
					}
				}, {
					key: "handleBreakpointChange_",
					value: function () {
						var e = this.store_.state.currentBreakpoint;
						("large" === e || "extra-large" === e) && this.hideNav_()
					}
				}]), t
			}(s.BaseComponent),
			u = {
				FIXED: "header-default--fixed",
				IN_TRANSITION: "header-default--in-transition",
				OPEN: "header-default--nav-open",
				SEARCH_OPEN: "search-default--open",
				HIDDEN: "header-default--hidden",
				TRANSPARENT: "header-default--transparent"
			},
			p = {
				BODY: "body",
				HAMBURGER: ".js-hamburger",
				LINK: ".cta",
				MAIN_LOGO: ".js-logo",
				SEARCH: ".js-search"
			},
			y = 70
	},
	67: function (e, t, a) {
		"use strict";

		function o(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function l(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.LanguageSelector = void 0;
		var r = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			s = a(0),
			c = a(5),
			_ = t.LanguageSelector = function (e) {
				function t(e, a) {
					n(this, t);
					var l = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return l.events = o({}, "change " + d.SELECT, l.handleChange_), l
				}
				return l(t, e), r(t, [{
					key: "handleChange_",
					value: function (t) {
						var e = t.target,
							a = {
								target: e.options[e.selectedIndex],
								type: c.analyticsEvents.CLICK
							};
						this.store_.dispatch(this.topics_.GA_TRACK_EVENT, {
							data: a,
							id: c.analyticsEvents.CLICK
						}), this.global_.location.href = e.value
					}
				}]), t
			}(s.BaseComponent),
			d = {
				SELECT: ".js-language-selector"
			}
	},
	68: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.SearchDefault = void 0;
		var l = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			r = a(0),
			s = a(7),
			c = a(4),
			_ = t.SearchDefault = function (e) {
				function t(e, a) {
					o(this, t);
					var i = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return i.events = {
						"click .js-open": i.open_,
						"click .js-close-search": i.close_,
						"blur .js-close-search": i.handleFocus_
					}, i.input = i.element.querySelector(u.INPUT), i.button = i.element.querySelector(u.SEARCH), i.nav = document.querySelector(u.NAVIGATION), i.isOpened_ = !1, i.focusInput_, i
				}
				return i(t, e), l(t, [{
					key: "initialize",
					value: function () {
						var e = this;
						document.addEventListener("keydown", this.onKeydown_.bind(this)), this.close__ = function (t) {
							return e.close_(t, !1)
						}, this.subscriptions_ = [
							[this.topics_.NAV_SHOWN, this.close__],
							[this.topics_.NAV_HIDDEN, this.close__]
						]
					}
				}, {
					key: "handleFocus_",
					value: function () {
						var e = document.querySelector(u.MAIN_LOGO);
						this.isOpened_ && e.focus()
					}
				}, {
					key: "onKeydown_",
					value: function (t) {
						t.keyCode === s.KeyCodes.ESC && this.close_(t)
					}
				}, {
					key: "open_",
					value: function (t) {
						var a = this;
						t.preventDefault(), this.isOpened_ = !0, this.button.type = "submit", this.element.classList.add(d.ACTIVE), this.nav.classList.add(d.HIDE_NAV), this.store_.dispatch(this.topics_.SEARCH_OPENED, {
							data: t
						}), this.focusInput_ = this.focusInput_ || function () {
							return a.input.focus()
						}, (0, c.requestTimeout)(this.focusInput_, 400), this.submit_(), this.store_.state = {
							isSearchOpened: !0
						}
					}
				}, {
					key: "removeOpenedClasses_",
					value: function () {
						this.element.classList.remove(d.ACTIVE), this.nav.classList.remove(d.HIDE_NAV)
					}
				}, {
					key: "close_",
					value: function (t) {
						var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !0;
						t && t.preventDefault(), this.isOpened_ && (this.isOpened_ = !1, this.button.type = "button", this.element.querySelector(u.SEARCH).focus(), a && this.store_.dispatch(this.topics_.SEARCH_CLOSED, {
							data: t
						}), this.removeOpenedClasses_(), (0, c.clearRequestTimeout)(this.focusInput_), this.input.value = "", this.store_.state = {
							isSearchOpened: !1
						})
					}
				}, {
					key: "submit_",
					value: function () {
						var e = encodeURIComponent(this.input.value),
							t = this.getAttribute(this.element, p.ACTION);
						e.trim().length && (this.global_.location.href = "" + t + ("?q=" + e))
					}
				}]), t
			}(r.BaseComponent),
			d = {
				ACTIVE: "search-default--open",
				HIDE_NAV: "header-default--search-open"
			},
			u = {
				BODY: "body",
				INPUT: ".js-input",
				MAIN_LOGO: ".js-logo",
				NAVIGATION: ".header-default",
				SEARCH: ".js-open"
			},
			p = {
				ACTION: "action"
			}
	},
	7: function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = a(40);
		Object.keys(o).forEach(function (e) {
			"default" === e || "__esModule" === e || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return o[e]
				}
			})
		})
	},
	72: function (e, t, a) {
		"use strict";

		function o(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function l(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.StickyDialog = void 0;
		var r = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			s = a(0),
			c = a(29),
			_ = t.StickyDialog = function (e) {
				function t(e, a) {
					n(this, t);
					var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return o.isShown_ = !1, o.isOverlayElement_ = !0, o.closeBtn_ = null, o.focusTrap_ = null, o.show_ = o.show_.bind(o), o.start_ = o.start_.bind(o), o.close_ = o.close_.bind(o), o
				}
				return l(t, e), r(t, [{
					key: "initialize",
					value: function () {
						var e = this,
							t;
						this.closeBtn_ = this.element.querySelector(u.CLOSE), this.events = (t = {}, o(t, "click " + u.CLOSE, function () {
							return e.close_(e.config_.id)
						}), o(t, "mousedown", function (t) {
							return e.checkClickedElement_(t)
						}), o(t, "mouseup", function (t) {
							return e.handleOverlay_(t)
						}), t), this.subscriptions_ = [
							[this.topics_.SHOW_SURVEY, this.show_],
							[this.topics_.START_SURVEY, this.start_],
							[this.topics_.CLOSE_SURVEY, this.close_]
						]
					}
				}, {
					key: "show_",
					value: function (e) {
						e === this.config_.id && (this.isShown_ = !0, this.element.classList.remove(d.CLOSED), this.closeBtn_.tabindex = 0)
					}
				}, {
					key: "start_",
					value: function (e) {
						e === this.config_.id && (this.focusTrap_ = (0, c.focusTrap)(this.element), this.element.classList.add(d.IS_OVERLAY), this.element.classList.add(d.SHOW_CLOSE_BTN))
					}
				}, {
					key: "close_",
					value: function (e) {
						e === this.config_.id && this.isShown_ && (this.isShown_ = !1, this.element.classList.add(d.CLOSED), this.store_.dispatch(this.topics_.CLOSE_SURVEY, {
							id: this.config_.id
						}), this.element.classList.remove(d.IS_OVERLAY), this.element.classList.remove(d.SHOW_CLOSE_BTN), this.closeBtn_.tabindex = -1, this.focusTrap_ ? this.focusTrap_() : null)
					}
				}, {
					key: "handleOverlay_",
					value: function () {
						this.isOverlayElement_ && this.close_(this.config_.id)
					}
				}, {
					key: "checkClickedElement_",
					value: function (e) {
						this.isOverlayElement_ = e.target === this.element
					}
				}]), t
			}(s.BaseComponent),
			d = {
				CLOSED: "is-closed",
				IS_OVERLAY: "is-overlay",
				SHOW_CLOSE_BTN: "show-close-btn"
			},
			u = {
				CLOSE: ".js-sticky-dialog__close",
				DIALOG: ".sticky-dialog"
			}
	},
	73: function (e, t, a) {
		"use strict";

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function n(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}

		function i(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}

		function l(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function r(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function s(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.SurveyDefault = void 0;
		var c = Object.assign || function (e) {
				for (var t = 1, a; t < arguments.length; t++)
					for (var o in a = arguments[t], a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
				return e
			},
			_ = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			d = a(4),
			u = a(0),
			p = a(7),
			y = a(9),
			b = o(y),
			m = a(16),
			g = a(17),
			f = o(g),
			h = a(5),
			v = a(3),
			C = t.SurveyDefault = function (e) {
				function t(e, a) {
					l(this, t);
					var o = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return o.form_ = null, o.isEnabled_ = !1, o.isStarted_ = !1, o.wasSubmitted_ = !1, o.alertElement_ = null, o.nextBtn_ = null, o.backBtn_ = null, o.currentPanel_ = null, o.currentPanelConfig_ = {}, o.currentPanelFilled_ = null, o.currentInputs_ = [], o.panelContainer_ = null, o.previousPanel_ = null, o.nextPanel_ = null, o.configAnalytics_ = (0, b.default)(o.element, "data-g-config"), o.moduleName_ = o.configAnalytics_.moduleName || "", o.currentSelectedInputs_ = [], o.baseConfigAnalytics_ = {
						eventCategory: k.SURVEY_NAME,
						moduleName: o.moduleName_
					}, o.panelIndex_ = 0, o.indexQuestionList_ = [], o.indexQuestion_ = 0, o.panelsLength_ = 0, o.dao_ = f.default.get("persistent"), o.xhr_ = null, o.formData_ = null, o.submitRetries_ = o.config_.retries || 0, o.registerSurvey_ = o.registerSurvey_.bind(o), o.enableSurvey_ = o.enableSurvey_.bind(o), o.onKeydown_ = o.onKeydown_.bind(o), o.handleCloseSurveyAnalytics_ = o.handleCloseSurveyAnalytics_.bind(o), o.closeSurvey_ = o.closeSurvey_.bind(o), o.handleReadyStateChange_ = o.handleReadyStateChange_.bind(o), o
				}
				return s(t, e), _(t, [{
					key: "initialize",
					value: function () {
						var t = this;
						this.dao_.read(k.OPTOUT) || (this.getSurveyElements_(), this.events = i({}, "click " + A.PANEL_SUBMITTED_CTA, function () {
							t.closeSurvey_(t.config_.id)
						}), this.nextBtn_.addEventListener("click", function (a) {
							return t.changePanel_(a)
						}), this.backBtn_.addEventListener("click", function (a) {
							t.changePanel_(a, !1), t.handBackEventAnalytics_()
						}), this.subscriptions_ = [
							[this.topics_.APP_LOADED, this.registerSurvey_],
							[this.topics_.SHOW_SURVEY, this.enableSurvey_],
							[this.topics_.CLOSE_SURVEY, this.closeSurvey_]
						], this.updatePanel_(), this.setUiClass_(), this.panelsLength_ = [].concat(n(this.element.querySelectorAll(A.SURVEY_PANEL))).length, this.indexQuestionList_ = this.config_.indexQuestionList || [])
					}
				}, {
					key: "registerSurvey_",
					value: function () {
						this.store_.dispatch(this.topics_.REGISTER_SURVEY, {
							id: this.config_.id,
							data: this.config_.data
						}), this.handleLaunchForAnalytics_(0)
					}
				}, {
					key: "getSurveyElements_",
					value: function () {
						this.form_ = this.element.querySelector(A.FORM), this.alertElement_ = this.element.querySelector(A.ALERT), this.nextBtn_ = this.element.querySelector(A.NEXT), this.backBtn_ = this.element.querySelector(A.BACK), this.panelContainer_ = this.element.querySelector(A.PANEL_CONTAINER), this.currentPanel_ = this.element.querySelector(A.PANEL_VISIBLE), this.currentPanelConfig_ = (0, b.default)(this.currentPanel_, "data-p-config"), this.currentPanelFilled_ = (0, b.default)(this.currentPanel_, "data-p-filled"), this.nextPanel_ = this.currentPanel_.nextElementSibling
					}
				}, {
					key: "enableSurvey_",
					value: function (e) {
						e === this.config_.id && (this.isEnabled_ = !0)
					}
				}, {
					key: "changePanel_",
					value: function (e) {
						var t = this,
							a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !0;
						if (e.preventDefault(), !!this.isEnabled_) {
							if (this.currentSelectedInputs_ = this.getSelectedInputs_(), this.handlePanelAnalytics_(), !a && this.currentPanelConfig_.ctas.back.action === k.CLOSE || a && this.currentPanelConfig_.ctas.next.action === k.CLOSE) return void this.closeSurvey_(this.config_.id);
							if (a && !this.currentPanelFilled_) return void this.alertElement_.classList.add(E.VISIBLE);
							var o = this.currentPanel_;
							this.alertElement_.classList.remove(E.VISIBLE), this.panelContainer_.classList.add(E.FADE), this.setUiClass_(!1), this.currentPanelConfig_.submit && this.sendData_(), this.currentPanel_ = a ? this.nextPanel_ : this.previousPanel_, this.currentPanelConfig_ = (0, b.default)(this.currentPanel_, "data-p-config"), this.currentPanelFilled_ = (0, b.default)(this.currentPanel_, "data-p-filled"), this.currentInputs_ = [].concat(n(this.currentPanel_.querySelectorAll(A.INPUT))), this.nextPanel_ = this.currentPanel_.nextElementSibling, this.previousPanel_ = this.currentPanel_.previousElementSibling, (0, d.requestTimeout)(function () {
								t.currentPanelConfig_.centered ? t.panelContainer_.classList.add(E.CENTERED) : t.panelContainer_.classList.remove(E.CENTERED), o.classList.remove(E.VISIBLE), t.currentPanel_.classList.add(E.VISIBLE), t.panelContainer_.classList.remove(E.FADE)
							}, 600), this.setUiClass_(), this.updatePanel_(), this.handlePanelFilled_()
						}
					}
				}, {
					key: "updatePanel_",
					value: function () {
						this.isStarted_ || "full-height" !== this.currentPanelConfig_.type || (this.isStarted_ = !0, this.element.classList.add(E.FULL_HEIGHT), this.store_.dispatch(this.topics_.START_SURVEY, {
							id: this.config_.id
						}), document.addEventListener("keydown", this.onKeydown_)), this.updateCta_(this.nextBtn_, this.currentPanelConfig_.ctas.next), this.updateCta_(this.backBtn_, this.currentPanelConfig_.ctas.back), this.enableCurrentInputs_(), this.setInputListeners_(), this.panelIndex_ = this.currentPanelConfig_.index
					}
				}, {
					key: "closeSurvey_",
					value: function (e) {
						e === this.config_.id && this.isEnabled_ && (this.isEnabled_ = !1, this.element.classList.remove(E.FULL_HEIGHT), document.removeEventListener("keydown", this.onKeydown_), this.store_.dispatch(this.topics_.CLOSE_SURVEY, {
							id: this.config_.id
						}), this.optoutUser_(), event.target !== this.backBtn_ && this.handleCloseSurveyAnalytics_({}, this.config_.id))
					}
				}, {
					key: "setUiClass_",
					value: function () {
						var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !0;
						e ? this.element.classList.add(E.SURVEY_UI + "-" + this.currentPanel_.dataset.panel) : this.element.classList.remove(E.SURVEY_UI + "-" + this.currentPanel_.dataset.panel)
					}
				}, {
					key: "onKeydown_",
					value: function (t) {
						t.keyCode === p.KeyCodes.ESC && this.closeSurvey_(this.config_.id)
					}
				}, {
					key: "updateCta_",
					value: function (e, t) {
						t.display ? (e.classList.remove(E.HIDDEN), e.tabIndex = 0) : (e.classList.add(E.HIDDEN), e.tabIndex = -1), e.innerHTML = t.text
					}
				}, {
					key: "setInputListeners_",
					value: function () {
						var e = this;
						this.currentInputs_.forEach(function (t) {
							t.addEventListener("change", function () {
								e.handlePanelFilled_()
							})
						})
					}
				}, {
					key: "getSelectedInputs_",
					value: function () {
						return this.currentInputs_.filter(function (t) {
							return !0 === t.checked
						})
					}
				}, {
					key: "handleLaunchForAnalytics_",
					value: function (e) {
						if (this.isEnabled_) {
							var t = (0, b.default)(this.element, "data-g-config"),
								a = this.indexQuestionList_[e] || e;
							t.eventLabel = 0 === e ? k.LAUNCHED : e === this.panelsLength_ - 1 ? k.THANK_YOU : "Question " + a, this.store_.dispatch(this.topics_.GA_TRACK_EVENT, {
								data: t,
								id: h.analyticsEvents.AUTOMATED_INTERACTION
							})
						}
					}
				}, {
					key: "handleSelectedInputsAnalytics_",
					value: function () {
						var e = 0 < this.panelIndex_ && this.panelIndex_ < this.panelsLength_,
							t = this.currentSelectedInputs_.map(function (e) {
								return e.value
							}) || [],
							a = t.join(" - ");
						if (t.length) t.push(a);
						else return;
						var o = "question " + this.indexQuestion_ + " " + k.RESPONSE;
						e && t.length && this.store_.dispatch(this.topics_.GA_TRACK_EVENT, {
							data: c({}, this.baseConfigAnalytics_, {
								eventAction: o,
								eventLabel: a
							}),
							id: h.analyticsEvents.AUTOMATED_INTERACTION
						})
					}
				}, {
					key: "setCloseConfigAnalytics_",
					value: function (e) {
						var t = this.setCloseDataAnalytics_();
						e.setAttribute("data-g-config", JSON.stringify(t))
					}
				}, {
					key: "handleCloseSurveyAnalytics_",
					value: function () {
						var e = this.setCloseDataAnalytics_();
						this.store_.dispatch(this.topics_.GA_TRACK_EVENT, {
							data: e,
							id: h.analyticsEvents.AUTOMATED_INTERACTION
						})
					}
				}, {
					key: "setCloseDataAnalytics_",
					value: function () {
						var e = this.baseConfigAnalytics_;
						return Object.assign(e, {
							eventLabel: k.CLOSED,
							eventAction: k.CLOSE
						}), e
					}
				}, {
					key: "handlePanelAnalytics_",
					value: function () {
						this.indexQuestion_ = this.indexQuestionList_[this.panelIndex_] || this.panelIndex_, this.handleStartEventAnalytics_(), this.handleNextEventAnalytics_(), this.handleSelectedInputsAnalytics_()
					}
				}, {
					key: "handleStartEventAnalytics_",
					value: function () {
						var e = !this.panelIndex_,
							t = this.panelIndex_ === this.panelsLength_ - 2,
							a = event && event.target === this.backBtn_,
							o = {
								eventLabel: k.CLOSE,
								eventAction: k.START
							},
							n = {
								eventLabel: k.START_LABEL,
								eventAction: k.START
							},
							i = this.baseConfigAnalytics_;
						a || (e ? (i = c({}, i, n), this.handleLaunchForAnalytics_(1)) : t && (i = c({}, i, o)), (e || t) && this.store_.dispatch(this.topics_.GA_TRACK_EVENT, {
							data: i,
							id: h.analyticsEvents.AUTOMATED_INTERACTION
						}))
					}
				}, {
					key: "handleNextEventAnalytics_",
					value: function () {
						var e = event.target,
							t = this.currentPanelConfig_.ctas.next.action || "",
							a = t.toLowerCase() === k.NEXT && this.panelIndex_,
							o = this.setQuestionDataAnalytics_(this.panelIndex_ - 2, k.NEXT) || {};
						e !== this.nextBtn_ || (a && this.currentPanelFilled_ && this.handleLaunchForAnalytics_(this.panelIndex_ + 1), a && this.store_.dispatch(this.topics_.GA_TRACK_EVENT, {
							data: o,
							id: h.analyticsEvents.AUTOMATED_INTERACTION
						}))
					}
				}, {
					key: "handBackEventAnalytics_",
					value: function () {
						var e = this.setQuestionDataAnalytics_(this.panelIndex_ + 1, k.BACK);
						this.panelIndex_ ? (this.backBtn_.setAttribute("data-g-config", JSON.stringify(e)), this.handleLaunchForAnalytics_(this.panelIndex_)) : this.handleCloseSurveyAnalytics_()
					}
				}, {
					key: "setQuestionDataAnalytics_",
					value: function (e, t) {
						var a = {
								eventLabel: t,
								eventAction: ""
							},
							o = e,
							n = 0;
						return t === k.NEXT && (o += 2), n = this.indexQuestionList_[o] || o, a.eventAction = "question " + n + " " + k.CLICK, c({}, this.baseConfigAnalytics_, a)
					}
				}, {
					key: "enableCurrentInputs_",
					value: function () {
						this.currentInputs_.forEach(function (e) {
							e.tabIndex = 0
						})
					}
				}, {
					key: "handlePanelFilled_",
					value: function () {
						var e = !0;
						this.currentInputs_.length && (e = this.currentInputs_.some(function (t) {
							return !0 === t.checked
						})), this.currentPanelFilled_ = e, e ? this.alertElement_.classList.remove(E.VISIBLE) : null, this.currentPanel_.setAttribute("dataPFilled", e)
					}
				}, {
					key: "optoutUser_",
					value: function () {
						this.dao_.save(k.OPTOUT, "true")
					}
				}, {
					key: "valdidateDataTosend_",
					value: function () {
						this.wasSubmitted_ || !this.isEnabled_ || (this.wasSubmitted_ = !0, this.store_.dispatch(this.topics_.SUBMIT_SURVEY, {
							id: this.config_.id
						}))
					}
				}, {
					key: "sendData_",
					value: function () {
						this.valdidateDataTosend_(), this.formData_ = new FormData(this.form_), this.submitData_()
					}
				}, {
					key: "submitData_",
					value: function () {
						this.xhr_ = new XMLHttpRequest, this.xhr_.onreadystatechange = this.handleReadyStateChange_, this.xhr_.open("POST", this.config_.endpoint, !0), this.xhr_.send(this.formData_)
					}
				}, {
					key: "handleReadyStateChange_",
					value: function () {
						if (this.xhr_ && 4 === this.xhr_.readyState)
							if (200 === this.xhr_.status) this.optoutUser_(), (0, m.logDevOnly)(event.target.responseText);
							else if (0 !== this.submitRetries_) this.submitRetries_--, this.submitData_();
						else throw new v.SubmissionUnsuccessfulError
					}
				}]), t
			}(u.BaseComponent),
			k = {
				BACK: "back",
				CLICK: "click",
				CLOSE: "close",
				CLOSED: "closed",
				LAUNCHED: "launched",
				NEXT: "next",
				OPTOUT: "optout-survey",
				RESPONSE: "response",
				SURVEY_NAME: "survey",
				START: "start",
				START_LABEL: "get started",
				THANK_YOU: "thank you"
			},
			E = {
				CENTERED: "centered",
				FADE: "fade",
				FULL_HEIGHT: "full-height",
				HIDDEN: "hidden",
				SURVEY_UI: "survey-default__ui",
				VISIBLE: "is-visible"
			},
			A = {
				ALERT: ".survey-default__alert",
				BACK: ".survey-default__cta-back",
				FORM: ".survey-default__form",
				INPUT: "input",
				NEXT: ".survey-default__cta-next",
				PANEL_VISIBLE: ".survey-panel.is-visible",
				PANEL_CONTAINER: ".survey-default__panel-container",
				PANEL_SUBMITTED_CTA: ".survey-panel--end__cta",
				SURVEY_PANEL: ".survey-panel",
				TEXTAREA: "textarea"
			}
	},
	74: function (e, t, a) {
		"use strict";

		function o(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function l(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.ExpandableField = void 0;
		var r = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			s = a(0),
			c = a(13),
			_ = t.ExpandableField = function (e) {
				function t(e, a) {
					n(this, t);
					var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return o.value_ = "", o.blockCssClass_ = o.config_.blockCssClass, o.inputCssClass_ = "." + o.blockCssClass_ + "__input", o.textareaCssClass_ = "." + o.blockCssClass_ + "__textarea", o.dataCustomContent_ = o.config_.dataCustomContent, o.bottomTextCssClass_ = "." + o.blockCssClass_ + "__bottom-text", o.expandedCssClassModifier_ = o.blockCssClass_ + "--expanded", o.inputName_ = null, o.inputGroup_ = [], o.inputField_ = null, o.textarea_ = null, o.currentFormId_ = o.config_.formId, o.bottomText_ = null, o.handleChange_ = o.handleChange_.bind(o), o.updateInputValue_ = o.updateInputValue_.bind(o), o.addCustomContentToInputValue_ = o.addCustomContentToInputValue_.bind(o), o
				}
				return l(t, e), r(t, [{
					key: "initialize",
					value: function () {
						var e = this;
						this.inputField_ = this.element.querySelector(this.inputCssClass_), this.inputName_ = this.inputField_.getAttribute("name"), this.inputGroup_ = [].concat(o(document.querySelectorAll("input[name=" + this.inputName_ + "]"))), this.textarea_ = this.element.querySelector(this.textareaCssClass_), this.bottomText_ = this.element.querySelector(this.bottomTextCssClass_), this.value_ = this.inputField_.value, this.inputGroup_.forEach(function (t) {
							t.addEventListener("change", e.handleChange_)
						}), this.textarea_.addEventListener("keyup", this.updateInputValue_), this.subscribeEvents_()
					}
				}, {
					key: "handleChange_",
					value: function () {
						this.inputField_.checked ? (this.element.classList.add(this.expandedCssClassModifier_), this.textarea_.focus(), this.textarea_.tabIndex = 0, c.aria.setState(this.textarea_, c.aria.State.HIDDEN, "false"), c.aria.setState(this.bottomText_, c.aria.State.HIDDEN, "false")) : (this.textarea_.value = "", this.textarea_.tabIndex = -1, this.inputField_.value = this.value_, this.element.classList.remove(this.expandedCssClassModifier_), c.aria.setState(this.textarea_, c.aria.State.HIDDEN, "true"), c.aria.setState(this.bottomText_, c.aria.State.HIDDEN, "true"))
					}
				}, {
					key: "updateInputValue_",
					value: function () {
						this.textarea_.value && this.inputField_.setAttribute(this.dataCustomContent_, this.textarea_.value)
					}
				}, {
					key: "subscribeEvents_",
					value: function () {
						this.subscriptions_ = [
							[this.topics_.SUBMIT_SURVEY, this.addCustomContentToInputValue_]
						]
					}
				}, {
					key: "addCustomContentToInputValue_",
					value: function (e) {
						if (this.currentFormId_ === e) {
							var t = this.inputField_.getAttribute(this.dataCustomContent_);
							t && (this.inputField_.value += ": " + t)
						}
					}
				}]), t
			}(s.BaseComponent)
	},
	75: function (e, t, a) {
		"use strict";

		function o(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function l(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.SubnavDefault = void 0;
		var r = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			s = a(0),
			c = a(5),
			_ = t.SubnavDefault = function (e) {
				function t(e, a) {
					n(this, t);
					var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return o.dropdowns_ = [], o.toggles_ = [], o.closeAllDropdowns_ = o.closeAllDropdowns_.bind(o), o
				}
				return l(t, e), r(t, [{
					key: "initialize",
					value: function () {
						this.dropdowns_ = [].concat(o(this.element.querySelectorAll(u.SUBNAV_DROPDOWN))), this.toggles_ = [].concat(o(this.element.querySelectorAll(u.SUBNAV_DROPDOWN_TOGGLE))), this.events = {
							"click .js-header-subnav-toggle": this.toggleHeaderSubnav_,
							"click .js-subnav-dropdown": this.toggleSubnavDropdown_,
							"focus .header-subnav a": this.handleDropdownFocus_
						}, this.subscriptions_ = [
							[this.topics_.NAV_SCROLL_CHANGE, this.closeAllDropdowns_]
						]
					}
				}, {
					key: "toggleHeaderSubnav_",
					value: function (e) {
						var t = this.element.parentElement;
						t.classList.contains(d.SUBNAV_OPEN) ? (t.classList.remove(d.SUBNAV_OPEN), this.store_.state = {
							isSubnavOpened: !1
						}, this.store_.dispatch(this.topics_.NAV_HIDDEN, {
							data: e
						})) : (t.classList.add(d.SUBNAV_OPEN), this.store_.state = {
							isSubnavOpened: !0
						}, this.store_.dispatch(this.topics_.NAV_SHOWN, {
							data: e
						})), this.updateSubNavToggleAnalytics_(e), this.store_.dispatch(this.topics_.GA_TRACK_EVENT, {
							data: e,
							id: c.analyticsEvents.CLICK
						})
					}
				}, {
					key: "updateSubNavToggleAnalytics_",
					value: function (e) {
						var t = e.target;
						t.setAttribute("data-g-config", "{\n      'eventLabel': '" + (this.store_.state.isSubnavOpened ? "open" : "close") + "',\n      'moduleName': 'header',\n      'eventCategory': 'navigation',\n      'title': 'sub menu accordion'\n    }")
					}
				}, {
					key: "toggleSubnavDropdown_",
					value: function (e) {
						e.stopPropagation(), e.preventDefault();
						var t = e.target.nextElementSibling;
						t.classList.contains(d.SUBNAV_DROPDOWN_OPEN) ? (t.classList.remove(d.SUBNAV_DROPDOWN_OPEN), e.target.setAttribute("aria-expanded", !1), document.removeEventListener("click", this.closeAllDropdowns_)) : (this.closeAllDropdowns_(), t.classList.add(d.SUBNAV_DROPDOWN_OPEN), e.target.setAttribute("aria-expanded", !0), document.addEventListener("click", this.closeAllDropdowns_)), this.store_.dispatch(this.topics_.GA_TRACK_EVENT, {
							data: e,
							id: c.analyticsEvents.CLICK
						})
					}
				}, {
					key: "handleDropdownFocus_",
					value: function (e) {
						e.stopPropagation();
						var t = e.target;
						"menuitem" === t.getAttribute("role") || t.classList.contains("js-subnav-dropdown") || this.closeAllDropdowns_()
					}
				}, {
					key: "closeAllDropdowns_",
					value: function (e) {
						e && e.stopPropagation(), this.dropdowns_.forEach(function (e) {
							e.classList.remove(d.SUBNAV_DROPDOWN_OPEN)
						}), this.toggles_.forEach(function (e) {
							e.setAttribute("aria-expanded", !1)
						}), document.removeEventListener("click", this.closeAllDropdowns_)
					}
				}]), t
			}(s.BaseComponent),
			d = {
				SUBNAV_OPEN: "header-default--subnav-open",
				SUBNAV_DROPDOWN_OPEN: "header-subnav__dropdown--open",
				SUBNAV_DROPDOWN: "header-subnav__dropdown"
			},
			u = {
				SUBNAV_DROPDOWN: ".header-subnav__dropdown",
				SUBNAV_DROPDOWN_TOGGLE: ".js-subnav-dropdown",
				SUBNAV: ".header-subnav"
			}
	},
	79: function (e, t, a) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t && ("object" == typeof t || "function" == typeof t) ? t : e
		}

		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var l = Math.abs;
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.ProgressBar = void 0;
		var r = Object.assign || function (e) {
				for (var t = 1, a; t < arguments.length; t++)
					for (var o in a = arguments[t], a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
				return e
			},
			s = function () {
				function e(e, t) {
					for (var a = 0, o; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
				return function (t, a, o) {
					return a && e(t.prototype, a), o && e(t, o), t
				}
			}(),
			c = a(0),
			_ = a(14),
			d = a(3),
			u = a(2),
			p = a(5),
			y = a(80),
			b = t.ProgressBar = function (e) {
				function t(e, a) {
					o(this, t);
					var i = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
					return i.config_ = i.processDefaultConfigurations_(), i.configByBreakpoint_ = null, i.isTicking_ = !1, i.lastKnownScrollProgress_ = 0, i.blockCssClass_ = "carousel-progress", i.nextBtnCssClass_ = i.blockCssClass_ + "__next", i.backBtnCssClass_ = i.blockCssClass_ + "__back", i.visibleCssClass_ = i.blockCssClass_ + "--visible", i.originCssClass_ = i.blockCssClass_ + "--origin", i.destinationCssClass_ = i.blockCssClass_ + "--destination", i.buttonsShownCssClass_ = i.blockCssClass_ + "--buttons-shown", i.start_ = null, i.animationDuration_ = 750, i.animationTiming_ = "easeOutQuint", i.currentBreakpoint_ = "", i.carousel_ = document.querySelector("#" + i.config_.id), i.progressBar_ = i.element.querySelector("progress"), i.nextBtn_ = i.element.querySelector("." + i.nextBtnCssClass_), i.backBtn_ = i.element.querySelector("." + i.backBtnCssClass_), i.horizontalScrollTrackingTimeout_ = null, i.nextBtn_.addEventListener("click", function (t) {
						return i.handleScrollByClick_(t)
					}), i.backBtn_.addEventListener("click", function (t) {
						return i.handleScrollByClick_(t, !1)
					}), i.render_ = i.render_.bind(i), i.handleVisibility_ = i.handleVisibility_.bind(i), i
				}
				return i(t, e), s(t, [{
					key: "initialize",
					value: function () {
						var t = this;
						if (!this.carousel_) throw new d.CarouselNotFound;
						this.trackComponentVisibility_(function () {
							return t.handleVisibility_()
						}, null, {
							rootMargin: "350px 0px 350px 0px",
							threshold: 0
						}), this.carousel_.addEventListener("scroll", function (a) {
							return t.setProgressBarState_(a)
						}), this.global_.addEventListener("resize", (0, _.debounce)(function () {
							return t.setProgressBarState_()
						}, 250)), this.subscriptions_ = [
							[this.topics_.APP_LOADED, this.render_],
							[this.topics_.BREAKPOINT_CHANGE, this.render_]
						]
					}
				}, {
					key: "isVisible_",
					value: function () {
						return this.carousel_.scrollWidth !== this.carousel_.offsetWidth
					}
				}, {
					key: "setProgressBarState_",
					value: function (e) {
						var t = this,
							a = this.lastKnownScrollProgress_;
						this.lastKnownScrollProgress_ = 1 * (100 * ((this.carousel_.offsetWidth + this.carousel_.scrollLeft) / this.carousel_.scrollWidth)).toFixed(2), this.isTicking_ || (this.global_.clearTimeout(this.horizontalScrollTrackingTimeout_), this.global_.requestAnimationFrame(function () {
							t.progressBar_.value = t.lastKnownScrollProgress_, t.toggleArrowsActivation_(), t.isTicking_ = !1
						})), this.horizontalScrollTrackingTimeout_ = this.global_.setTimeout(function () {
							t.dispatchHorizontalScrollEvent_(a, e)
						}, 500), this.isTicking_ = !0
					}
				}, {
					key: "dispatchHorizontalScrollEvent_",
					value: function (e, t) {
						var a = "left";
						e > this.lastKnownScrollProgress_ && (a = "right"), this.store_.dispatch(u.Topics.GA_TRACK_EVENT, {
							data: {
								event: t,
								direction: a
							},
							id: p.analyticsEvents.SCROLL_H
						})
					}
				}, {
					key: "calculateScrollDistance_",
					value: function () {
						return this.carousel_.firstElementChild.offsetWidth * this.configByBreakpoint_.scrollBy
					}
				}, {
					key: "handleScrollByClick_",
					value: function (e) {
						var a = this,
							t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !0;
						if (e.preventDefault(), !this.start_) {
							this.currentXOffset_ = this.carousel_.scrollLeft, this.scrollDistance_ = this.calculateScrollDistance_();
							var o = this.currentXOffset_ % this.scrollDistance_;
							this.scrollDistance_ = t ? l(this.scrollDistance_ - o) : -l(o ? o : this.scrollDistance_), this.global_.requestAnimationFrame(function (e) {
								return a.scrollHorizontally_(e)
							})
						}
					}
				}, {
					key: "scrollHorizontally_",
					value: function (e) {
						var a = this;
						this.start_ = this.start_ || e;
						var t = e - this.start_,
							o = {
								elapsedTime: t,
								startPosition: this.currentXOffset_,
								endPosition: this.scrollDistance_,
								duration: this.configByBreakpoint_.animationDuration
							},
							n = (0, y.getAnimationTiming)(this.animationTiming_, o);
						this.carousel_.scrollLeft = n, t <= this.configByBreakpoint_.animationDuration + 5 ? this.global_.requestAnimationFrame(function (e) {
							return a.scrollHorizontally_(e)
						}) : this.start_ = null
					}
				}, {
					key: "render_",
					value: function () {
						this.currentBreakpoint_ === this.store_.state.currentBreakpoint || (this.getConfigurations_(), this.configByBreakpoint_.showArrows ? this.element.classList.add(this.buttonsShownCssClass_) : this.element.classList.remove(this.buttonsShownCssClass_), this.toggleVisibility_())
					}
				}, {
					key: "getConfigurations_",
					value: function () {
						this.currentBreakpoint_ = this.store_.state.currentBreakpoint, this.configByBreakpoint_ = this.config_[this.currentBreakpoint_], this.scrollDistance_ = this.calculateScrollDistance_()
					}
				}, {
					key: "toggleArrowsActivation_",
					value: function () {
						0 === this.carousel_.scrollLeft ? (this.element.classList.add(this.originCssClass_), this.backBtn_.setAttribute("disabled", !0)) : this.carousel_.scrollWidth === this.carousel_.offsetWidth + this.carousel_.scrollLeft ? (this.element.classList.add(this.destinationCssClass_), this.nextBtn_.setAttribute("disabled", !0)) : (this.element.classList.remove(this.originCssClass_), this.element.classList.remove(this.destinationCssClass_), this.backBtn_.removeAttribute("disabled"), this.nextBtn_.removeAttribute("disabled"))
					}
				}, {
					key: "handleVisibility_",
					value: function () {
						this.setProgressBarState_()
					}
				}, {
					key: "toggleVisibility_",
					value: function () {
						var e = this;
						requestAnimationFrame(function () {
							e.isVisible_() ? e.element.classList.add(e.visibleCssClass_) : e.element.classList.remove(e.visibleCssClass_), e.enableA11y_()
						})
					}
				}, {
					key: "processDefaultConfigurations_",
					value: function () {
						var e = r({}, this.config_),
							t = 500;
						return e.small = r({
							scrollBy: 1,
							animationDuration: t
						}, this.config_.small), e.medium = r({
							scrollBy: 2,
							animationDuration: 1.4 * t
						}, this.config_.medium), e.large = r({
							scrollBy: 2,
							animationDuration: 1.8 * t
						}, this.config_.large), e["extra-large"] = r({
							scrollBy: 2,
							animationDuration: 1.8 * t
						}, this.config_["extra-large"]), e
					}
				}, {
					key: "enableA11y_",
					value: function () {
						this.isVisible_() ? this.carousel_.removeAttribute("tabindex") : this.carousel_.setAttribute("tabindex", "0")
					}
				}]), t
			}(c.BaseComponent)
	},
	80: function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = t.getAnimationTiming = function (e, t) {
				return {
					easeOutQuint: n,
					easeInOutCubic: o
				}[e](t.elapsedTime, t.startPosition, t.endPosition, t.duration)
			},
			o = function (e, t, a, o) {
				return 1 > (e /= o / 2) ? a / 2 * e * e * e + t : a / 2 * ((e -= 2) * e * e + 2) + t
			},
			n = function (e, t, a, o) {
				return e /= o, e--, a * (e * e * e * e * e + 1) + t
			}
	},
	9: function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = function (e) {
				var t = /\('/g,
					a = /'\)/g;
				return e = e.replace(t, "__(__"), e = e.replace(a, "__)__"), e
			},
			o = function (e) {
				var t = /__\(__/g,
					a = /__\)__/g;
				return e = JSON.stringify(e), e = e.replace(t, "('"), e = e.replace(a, "')"), JSON.parse(e)
			};
		t.default = function (e, t) {
			var n = e.getAttribute(t) || "",
				i = /'/g,
				l;
			n = a(n), n = n.replace(/True/gi, !0), n = n.replace(/False/gi, !1);
			try {
				l = JSON.parse(n.replace(i, "\"")), l = o(l), Object.keys(l, function (e, t) {
					"string" == typeof t && (l[e] = decodeURIComponent(t))
				})
			} catch (t) {
				l = {}
			}
			return l
		}
	}
}, [436]);
