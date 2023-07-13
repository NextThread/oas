! function() {
	"use strict";
	var e, n, r, t, o, i, c, a = {},
		d = {};

	function u(e) {
		if (d[e]) return d[e].exports;
		var n = d[e] = {
				id: e,
				exports: {}
			},
			r = {
				id: e,
				module: n,
				factory: a[e],
				require: u
			};
		return u.i.forEach((function(e) {
			e(r)
		})), n = r.module, r.factory.call(n.exports, n, n.exports, r.require), n.exports
	}
	u.m = a, u.c = d, u.i = [], u.x = function() {}, u.n = function(e) {
			var n = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return u.d(n, {
				a: n
			}), n
		}, u.d = function(e, n) {
			for (var r in n) u.o(n, r) && !u.o(e, r) && Object.defineProperty(e, r, {
				enumerable: !0,
				get: n[r]
			})
		}, u.hu = function(e) {
			return e + "." + u.h() + ".hot-update.js"
		}, u.miniCssF = function(e) {
			return "assets/css/" + ({
				143: "app",
				279: "hero",
				429: "polyfills",
				666: "runtime"
			} [e] || e) + "-" + u.h() + ".build.css"
		}, u.hmrF = function() {
			return "runtime." + u.h() + ".hot-update.json"
		}, u.h = function() {
			return "f32b715e6cc667495c99"
		}, u.g = function() {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")()
			} catch (e) {
				if ("object" == typeof window) return window
			}
		}(), u.o = function(e, n) {
			return Object.prototype.hasOwnProperty.call(e, n)
		}, e = {}, n = "darwinapps:", u.l = function(r, t, o, i) {
			if (e[r]) e[r].push(t);
			else {
				var c, a;
				if (void 0 !== o)
					for (var d = document.getElementsByTagName("script"), s = 0; s < d.length; s++) {
						var f = d[s];
						if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == n + o) {
							c = f;
							break
						}
					}
				c || (a = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, u.nc && c.setAttribute("nonce", u.nc), c.setAttribute("data-webpack", n + o), c.src = r), e[r] = [t];
				var l = function(n, t) {
						c.onerror = c.onload = null, clearTimeout(p);
						var o = e[r];
						if (delete e[r], c.parentNode && c.parentNode.removeChild(c), o && o.forEach((function(e) {
								return e(t)
							})), n) return n(t)
					},
					p = setTimeout(l.bind(null, void 0, {
						type: "timeout",
						target: c
					}), 12e4);
				c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), a && document.head.appendChild(c)
			}
		},
		function() {
			var e, n, r, t, o = {},
				i = u.c,
				c = [],
				a = [],
				d = "idle";

			function s(e) {
				d = e;
				for (var n = 0; n < a.length; n++) a[n].call(null, e)
			}

			function f(e) {
				if (0 === n.length) return e();
				var r = n;
				return n = [], Promise.all(r).then((function() {
					return f(e)
				}))
			}

			function l(e) {
				if ("idle" !== d) throw new Error("check() is only allowed in idle status");
				return s("check"), u.hmrM().then((function(t) {
					if (!t) return s(v() ? "ready" : "idle"), null;
					s("prepare");
					var o = [];
					return n = [], r = [], Promise.all(Object.keys(u.hmrC).reduce((function(e, n) {
						return u.hmrC[n](t.c, t.r, t.m, e, r, o), e
					}), [])).then((function() {
						return f((function() {
							return e ? h(e) : (s("ready"), o)
						}))
					}))
				}))
			}

			function p(e) {
				return "ready" !== d ? Promise.resolve().then((function() {
					throw new Error("apply() is only allowed in ready status")
				})) : h(e)
			}

			function h(e) {
				e = e || {}, v();
				var n = r.map((function(n) {
					return n(e)
				}));
				r = void 0;
				var o, i = n.map((function(e) {
					return e.error
				})).filter(Boolean);
				if (i.length > 0) return s("abort"), Promise.resolve().then((function() {
					throw i[0]
				}));
				s("dispose"), n.forEach((function(e) {
					e.dispose && e.dispose()
				})), s("apply");
				var c = function(e) {
						o || (o = e)
					},
					a = [];
				return n.forEach((function(e) {
					if (e.apply) {
						var n = e.apply(c);
						if (n)
							for (var r = 0; r < n.length; r++) a.push(n[r])
					}
				})), o ? (s("fail"), Promise.resolve().then((function() {
					throw o
				}))) : t ? h(e).then((function(e) {
					return a.forEach((function(n) {
						e.indexOf(n) < 0 && e.push(n)
					})), e
				})) : (s("idle"), Promise.resolve(a))
			}

			function v() {
				if (t) return r || (r = []), Object.keys(u.hmrI).forEach((function(e) {
					t.forEach((function(n) {
						u.hmrI[e](n, r)
					}))
				})), t = void 0, !0
			}
			u.hmrD = o, u.i.push((function(h) {
				var v, m, y, g = h.module,
					b = function(r, t) {
						var o = i[t];
						if (!o) return r;
						var a = function(n) {
								if (o.hot.active) {
									if (i[n]) {
										var a = i[n].parents; - 1 === a.indexOf(t) && a.push(t)
									} else c = [t], e = n; - 1 === o.children.indexOf(n) && o.children.push(n)
								} else console.warn("[HMR] unexpected require(" + n + ") from disposed module " + t), c = [];
								return r(n)
							},
							u = function(e) {
								return {
									configurable: !0,
									enumerable: !0,
									get: function() {
										return r[e]
									},
									set: function(n) {
										r[e] = n
									}
								}
							};
						for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && "e" !== l && Object.defineProperty(a, l, u(l));
						return a.e = function(e) {
							return function(e) {
								switch (d) {
									case "ready":
										return s("prepare"), n.push(e), f((function() {
											s("ready")
										})), e;
									case "prepare":
										return n.push(e), e;
									default:
										return e
								}
							}(r.e(e))
						}, a
					}(h.require, h.id);
				g.hot = (v = h.id, m = g, y = {
					_acceptedDependencies: {},
					_declinedDependencies: {},
					_selfAccepted: !1,
					_selfDeclined: !1,
					_selfInvalidated: !1,
					_disposeHandlers: [],
					_main: e !== v,
					_requireSelf: function() {
						c = m.parents.slice(), e = v, u(v)
					},
					active: !0,
					accept: function(e, n) {
						if (void 0 === e) y._selfAccepted = !0;
						else if ("function" == typeof e) y._selfAccepted = e;
						else if ("object" == typeof e && null !== e)
							for (var r = 0; r < e.length; r++) y._acceptedDependencies[e[r]] = n || function() {};
						else y._acceptedDependencies[e] = n || function() {}
					},
					decline: function(e) {
						if (void 0 === e) y._selfDeclined = !0;
						else if ("object" == typeof e && null !== e)
							for (var n = 0; n < e.length; n++) y._declinedDependencies[e[n]] = !0;
						else y._declinedDependencies[e] = !0
					},
					dispose: function(e) {
						y._disposeHandlers.push(e)
					},
					addDisposeHandler: function(e) {
						y._disposeHandlers.push(e)
					},
					removeDisposeHandler: function(e) {
						var n = y._disposeHandlers.indexOf(e);
						n >= 0 && y._disposeHandlers.splice(n, 1)
					},
					invalidate: function() {
						switch (this._selfInvalidated = !0, d) {
							case "idle":
								r = [], Object.keys(u.hmrI).forEach((function(e) {
									u.hmrI[e](v, r)
								})), s("ready");
								break;
							case "ready":
								Object.keys(u.hmrI).forEach((function(e) {
									u.hmrI[e](v, r)
								}));
								break;
							case "prepare":
							case "check":
							case "dispose":
							case "apply":
								(t = t || []).push(v)
						}
					},
					check: l,
					apply: p,
					status: function(e) {
						if (!e) return d;
						a.push(e)
					},
					addStatusHandler: function(e) {
						a.push(e)
					},
					removeStatusHandler: function(e) {
						var n = a.indexOf(e);
						n >= 0 && a.splice(n, 1)
					},
					data: o[v]
				}, e = void 0, y), g.parents = c, g.children = [], c = [], h.require = b
			})), u.hmrC = {}, u.hmrI = {}
		}(), u.p = "index.html", r = function(e, n, r, t) {
			var o = document.createElement("link");
			return o.rel = "stylesheet", o.type = "text/css", o.onload = r, o.onerror = function(r) {
				var i = r && r.target && r.target.href || n,
					c = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
				c.code = "CSS_CHUNK_LOAD_FAILED", c.request = i, o.parentNode.removeChild(o), t(c)
			}, o.href = n, document.getElementsByTagName("head")[0].appendChild(o), o
		}, t = function(e, n) {
			for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
				var o = (c = r[t]).getAttribute("data-href") || c.getAttribute("href");
				if ("stylesheet" === c.rel && (o === e || o === n)) return c
			}
			var i = document.getElementsByTagName("style");
			for (t = 0; t < i.length; t++) {
				var c;
				if ((o = (c = i[t]).getAttribute("data-href")) === e || o === n) return c
			}
		}, o = [], i = [], c = function(e) {
			return {
				dispose: function() {
					for (var e = 0; e < o.length; e++) {
						var n = o[e];
						n.parentNode && n.parentNode.removeChild(n)
					}
					o.length = 0
				},
				apply: function() {
					for (var e = 0; e < i.length; e++) i[e].rel = "stylesheet";
					i.length = 0
				}
			}
		}, u.hmrC.miniCss = function(e, n, a, d, s, f) {
			s.push(c), e.forEach((function(e) {
				var n = u.miniCssF(e),
					c = u.p + n;
				const a = t(n, c);
				a && d.push(new Promise((function(n, t) {
					var d = r(e, c, (function() {
						d.as = "style", d.rel = "preload", n()
					}), t);
					o.push(a), i.push(d)
				})))
			}))
		},
		function() {
			var e, n, r, t, o = {
					666: 0
				},
				i = [],
				c = {};

			function a(e) {
				return new Promise((function(n, r) {
					c[e] = n;
					var t = u.p + u.hu(e),
						o = new Error;
					u.l(t, (function(n) {
						if (c[e]) {
							c[e] = void 0;
							var t = n && ("load" === n.type ? "missing" : n.type),
								i = n && n.target && n.target.src;
							o.message = "Loading hot update chunk " + e + " failed.\n(" + t + ": " + i + ")", o.name = "ChunkLoadError", o.type = t, o.request = i, r(o)
						}
					}))
				}))
			}

			function d(i) {
				function c(e) {
					for (var n = [e], r = {}, t = n.map((function(e) {
							return {
								chain: [e],
								id: e
							}
						})); t.length > 0;) {
						var o = t.pop(),
							i = o.id,
							c = o.chain,
							d = u.c[i];
						if (d && (!d.hot._selfAccepted || d.hot._selfInvalidated)) {
							if (d.hot._selfDeclined) return {
								type: "self-declined",
								chain: c,
								moduleId: i
							};
							if (d.hot._main) return {
								type: "unaccepted",
								chain: c,
								moduleId: i
							};
							for (var s = 0; s < d.parents.length; s++) {
								var f = d.parents[s],
									l = u.c[f];
								if (l) {
									if (l.hot._declinedDependencies[i]) return {
										type: "declined",
										chain: c.concat([f]),
										moduleId: i,
										parentId: f
									}; - 1 === n.indexOf(f) && (l.hot._acceptedDependencies[i] ? (r[f] || (r[f] = []), a(r[f], [i])) : (delete r[f], n.push(f), t.push({
										chain: c.concat([f]),
										id: f
									})))
								}
							}
						}
					}
					return {
						type: "accepted",
						moduleId: e,
						outdatedModules: n,
						outdatedDependencies: r
					}
				}

				function a(e, n) {
					for (var r = 0; r < n.length; r++) {
						var t = n[r]; - 1 === e.indexOf(t) && e.push(t)
					}
				}
				u.f && delete u.f.jsonpHmr, e = void 0;
				var d = {},
					s = [],
					f = {},
					l = function(e) {
						console.warn("[HMR] unexpected require(" + e.id + ") to disposed module")
					};
				for (var p in n)
					if (u.o(n, p)) {
						var h, v = n[p],
							m = !1,
							y = !1,
							g = !1,
							b = "";
						switch ((h = v ? c(p) : {
								type: "disposed",
								moduleId: p
							}).chain && (b = "\nUpdate propagation: " + h.chain.join(" -> ")), h.type) {
							case "self-declined":
								i.onDeclined && i.onDeclined(h), i.ignoreDeclined || (m = new Error("Aborted because of self decline: " + h.moduleId + b));
								break;
							case "declined":
								i.onDeclined && i.onDeclined(h), i.ignoreDeclined || (m = new Error("Aborted because of declined dependency: " + h.moduleId + " in " + h.parentId + b));
								break;
							case "unaccepted":
								i.onUnaccepted && i.onUnaccepted(h), i.ignoreUnaccepted || (m = new Error("Aborted because " + p + " is not accepted" + b));
								break;
							case "accepted":
								i.onAccepted && i.onAccepted(h), y = !0;
								break;
							case "disposed":
								i.onDisposed && i.onDisposed(h), g = !0;
								break;
							default:
								throw new Error("Unexception type " + h.type)
						}
						if (m) return {
							error: m
						};
						if (y)
							for (p in f[p] = v, a(s, h.outdatedModules), h.outdatedDependencies) u.o(h.outdatedDependencies, p) && (d[p] || (d[p] = []), a(d[p], h.outdatedDependencies[p]));
						g && (a(s, [h.moduleId]), f[p] = l)
					} n = void 0;
				for (var w, E = [], _ = 0; _ < s.length; _++) {
					var D = s[_];
					u.c[D] && u.c[D].hot._selfAccepted && f[D] !== l && !u.c[D].hot._selfInvalidated && E.push({
						module: D,
						require: u.c[D].hot._requireSelf,
						errorHandler: u.c[D].hot._selfAccepted
					})
				}
				return {
					dispose: function() {
						var e;
						r.forEach((function(e) {
							delete o[e]
						})), r = void 0;
						for (var n, t = s.slice(); t.length > 0;) {
							var i = t.pop(),
								c = u.c[i];
							if (c) {
								var a = {},
									f = c.hot._disposeHandlers;
								for (_ = 0; _ < f.length; _++) f[_].call(null, a);
								for (u.hmrD[i] = a, c.hot.active = !1, delete u.c[i], delete d[i], _ = 0; _ < c.children.length; _++) {
									var l = u.c[c.children[_]];
									l && ((e = l.parents.indexOf(i)) >= 0 && l.parents.splice(e, 1))
								}
							}
						}
						for (var p in d)
							if (u.o(d, p) && (c = u.c[p]))
								for (w = d[p], _ = 0; _ < w.length; _++) n = w[_], (e = c.children.indexOf(n)) >= 0 && c.children.splice(e, 1)
					},
					apply: function(e) {
						for (var n in f) u.o(f, n) && (u.m[n] = f[n]);
						for (var r = 0; r < t.length; r++) t[r](u);
						for (var o in d)
							if (u.o(d, o)) {
								var c = u.c[o];
								if (c) {
									w = d[o];
									for (var a = [], l = [], p = 0; p < w.length; p++) {
										var h = w[p],
											v = c.hot._acceptedDependencies[h];
										if (v) {
											if (-1 !== a.indexOf(v)) continue;
											a.push(v), l.push(h)
										}
									}
									for (var m = 0; m < a.length; m++) try {
										a[m].call(null, w)
									} catch (n) {
										i.onErrored && i.onErrored({
											type: "accept-errored",
											moduleId: o,
											dependencyId: l[m],
											error: n
										}), i.ignoreErrored || e(n)
									}
								}
							} for (var y = 0; y < E.length; y++) {
							var g = E[y],
								b = g.module;
							try {
								g.require(b)
							} catch (n) {
								if ("function" == typeof g.errorHandler) try {
									g.errorHandler(n)
								} catch (r) {
									i.onErrored && i.onErrored({
										type: "self-accept-error-handler-errored",
										moduleId: b,
										error: r,
										originalError: n
									}), i.ignoreErrored || e(r), e(n)
								} else i.onErrored && i.onErrored({
									type: "self-accept-errored",
									moduleId: b,
									error: n
								}), i.ignoreErrored || e(n)
							}
						}
						return s
					}
				}
			}
			self.webpackHotUpdatedarwinapps = function(e, r, o) {
				for (var i in r) u.o(r, i) && (n[i] = r[i]);
				o && t.push(o), c[e] && (c[e](), c[e] = void 0)
			}, u.hmrI.jsonp = function(e, o) {
				n || (n = {}, t = [], r = [], o.push(d)), u.o(n, e) || (n[e] = u.m[e])
			}, u.hmrC.jsonp = function(i, c, s, f, l, p) {
				l.push(d), e = {}, r = c, n = s.reduce((function(e, n) {
					return e[n] = !1, e
				}), {}), t = [], i.forEach((function(n) {
					u.o(o, n) && void 0 !== o[n] && (f.push(a(n)), e[n] = !0)
				})), u.f && (u.f.jsonpHmr = function(n, r) {
					e && !u.o(e, n) && u.o(o, n) && void 0 !== o[n] && (r.push(a(n)), e[n] = !0)
				})
			}, u.hmrM = function() {
				if ("undefined" == typeof fetch) throw new Error("No browser support: need fetch API");
				return fetch(u.p + u.hmrF()).then((function(e) {
					if (404 !== e.status) {
						if (!e.ok) throw new Error("Failed to fetch update manifest " + e.statusText);
						return e.json()
					}
				}))
			};
			var s = function() {},
				f = function(e, n) {
					for (var r, t, c = n[0], a = n[1], d = n[2], f = n[3], l = 0, p = []; l < c.length; l++) t = c[l], u.o(o, t) && o[t] && p.push(o[t][0]), o[t] = 0;
					for (r in a) u.o(a, r) && (u.m[r] = a[r]);
					for (d && d(u), e && e(n); p.length;) p.shift()();
					return f && i.push.apply(i, f), s()
				},
				l = self.webpackChunkdarwinapps = self.webpackChunkdarwinapps || [];

			function p() {
				for (var e, n = 0; n < i.length; n++) {
					for (var r = i[n], t = !0, c = 1; c < r.length; c++) {
						var a = r[c];
						0 !== o[a] && (t = !1)
					}
					t && (i.splice(n--, 1), e = u(u.s = r[0]))
				}
				return 0 === i.length && (u.x(), u.x = function() {}), e
			}
			l.forEach(f.bind(null, 0)), l.push = f.bind(null, l.push.bind(l));
			var h = u.x;
			u.x = function() {
				return u.x = h || function() {}, (s = p)()
			}
		}();
	u.x()
}();