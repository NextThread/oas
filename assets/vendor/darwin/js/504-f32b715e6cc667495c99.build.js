(self.webpackChunkdarwinapps = self.webpackChunkdarwinapps || []).push([
	[504], {
		6030: function(n, e) {
			"use strict";
			var r = {
					update: null,
					begin: null,
					loopBegin: null,
					changeBegin: null,
					change: null,
					changeComplete: null,
					loopComplete: null,
					complete: null,
					loop: 1,
					direction: "normal",
					autoplay: !0,
					timelineOffset: 0
				},
				t = {
					duration: 1e3,
					delay: 0,
					endDelay: 0,
					easing: "easeOutElastic(1, .5)",
					round: 0
				},
				a = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
				u = {
					CSS: {},
					springs: {}
				};

			function o(n, e, r) {
				return Math.min(Math.max(n, e), r)
			}

			function i(n, e) {
				return n.indexOf(e) > -1
			}

			function c(n, e) {
				return n.apply(null, e)
			}
			var s = {
				arr: function(n) {
					return Array.isArray(n)
				},
				obj: function(n) {
					return i(Object.prototype.toString.call(n), "Object")
				},
				pth: function(n) {
					return s.obj(n) && n.hasOwnProperty("totalLength")
				},
				svg: function(n) {
					return n instanceof SVGElement
				},
				inp: function(n) {
					return n instanceof HTMLInputElement
				},
				dom: function(n) {
					return n.nodeType || s.svg(n)
				},
				str: function(n) {
					return "string" == typeof n
				},
				fnc: function(n) {
					return "function" == typeof n
				},
				und: function(n) {
					return void 0 === n
				},
				hex: function(n) {
					return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)
				},
				rgb: function(n) {
					return /^rgb/.test(n)
				},
				hsl: function(n) {
					return /^hsl/.test(n)
				},
				col: function(n) {
					return s.hex(n) || s.rgb(n) || s.hsl(n)
				},
				key: function(n) {
					return !r.hasOwnProperty(n) && !t.hasOwnProperty(n) && "targets" !== n && "keyframes" !== n
				}
			};

			function f(n) {
				var e = /\(([^)]+)\)/.exec(n);
				return e ? e[1].split(",").map((function(n) {
					return parseFloat(n)
				})) : []
			}

			function l(n, e) {
				var r = f(n),
					t = o(s.und(r[0]) ? 1 : r[0], .1, 100),
					a = o(s.und(r[1]) ? 100 : r[1], .1, 100),
					i = o(s.und(r[2]) ? 10 : r[2], .1, 100),
					c = o(s.und(r[3]) ? 0 : r[3], .1, 100),
					l = Math.sqrt(a / t),
					d = i / (2 * Math.sqrt(a * t)),
					p = d < 1 ? l * Math.sqrt(1 - d * d) : 0,
					v = d < 1 ? (d * l - c) / p : -c + l;

				function h(n) {
					var r = e ? e * n / 1e3 : n;
					return r = d < 1 ? Math.exp(-r * d * l) * (1 * Math.cos(p * r) + v * Math.sin(p * r)) : (1 + v * r) * Math.exp(-r * l), 0 === n || 1 === n ? n : 1 - r
				}
				return e ? h : function() {
					var e = u.springs[n];
					if (e) return e;
					for (var r = 1 / 6, t = 0, a = 0;;)
						if (1 === h(t += r)) {
							if (++a >= 16) break
						} else a = 0;
					var o = t * r * 1e3;
					return u.springs[n] = o, o
				}
			}

			function d(n) {
				return void 0 === n && (n = 10),
					function(e) {
						return Math.ceil(o(e, 1e-6, 1) * n) * (1 / n)
					}
			}
			var p, v, h = function() {
					var n = .1;

					function e(n, e) {
						return 1 - 3 * e + 3 * n
					}

					function r(n, e) {
						return 3 * e - 6 * n
					}

					function t(n) {
						return 3 * n
					}

					function a(n, a, u) {
						return ((e(a, u) * n + r(a, u)) * n + t(a)) * n
					}

					function u(n, a, u) {
						return 3 * e(a, u) * n * n + 2 * r(a, u) * n + t(a)
					}
					return function(e, r, t, o) {
						if (0 <= e && e <= 1 && 0 <= t && t <= 1) {
							var i = new Float32Array(11);
							if (e !== r || t !== o)
								for (var c = 0; c < 11; ++c) i[c] = a(c * n, e, t);
							return function(n) {
								return e === r && t === o || 0 === n || 1 === n ? n : a(s(n), r, o)
							}
						}

						function s(r) {
							for (var o = 0, c = 1; 10 !== c && i[c] <= r; ++c) o += n;
							--c;
							var s = o + (r - i[c]) / (i[c + 1] - i[c]) * n,
								f = u(s, e, t);
							return f >= .001 ? function(n, e, r, t) {
								for (var o = 0; o < 4; ++o) {
									var i = u(e, r, t);
									if (0 === i) return e;
									e -= (a(e, r, t) - n) / i
								}
								return e
							}(r, s, e, t) : 0 === f ? s : function(n, e, r, t, u) {
								var o, i, c = 0;
								do {
									(o = a(i = e + (r - e) / 2, t, u) - n) > 0 ? r = i : e = i
								} while (Math.abs(o) > 1e-7 && ++c < 10);
								return i
							}(r, o, o + n, e, t)
						}
					}
				}(),
				g = (p = {
					linear: function() {
						return function(n) {
							return n
						}
					}
				}, v = {
					Sine: function() {
						return function(n) {
							return 1 - Math.cos(n * Math.PI / 2)
						}
					},
					Circ: function() {
						return function(n) {
							return 1 - Math.sqrt(1 - n * n)
						}
					},
					Back: function() {
						return function(n) {
							return n * n * (3 * n - 2)
						}
					},
					Bounce: function() {
						return function(n) {
							for (var e, r = 4; n < ((e = Math.pow(2, --r)) - 1) / 11;);
							return 1 / Math.pow(4, 3 - r) - 7.5625 * Math.pow((3 * e - 2) / 22 - n, 2)
						}
					},
					Elastic: function(n, e) {
						void 0 === n && (n = 1), void 0 === e && (e = .5);
						var r = o(n, 1, 10),
							t = o(e, .1, 2);
						return function(n) {
							return 0 === n || 1 === n ? n : -r * Math.pow(2, 10 * (n - 1)) * Math.sin((n - 1 - t / (2 * Math.PI) * Math.asin(1 / r)) * (2 * Math.PI) / t)
						}
					}
				}, ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach((function(n, e) {
					v[n] = function() {
						return function(n) {
							return Math.pow(n, e + 2)
						}
					}
				})), Object.keys(v).forEach((function(n) {
					var e = v[n];
					p["easeIn" + n] = e, p["easeOut" + n] = function(n, r) {
						return function(t) {
							return 1 - e(n, r)(1 - t)
						}
					}, p["easeInOut" + n] = function(n, r) {
						return function(t) {
							return t < .5 ? e(n, r)(2 * t) / 2 : 1 - e(n, r)(-2 * t + 2) / 2
						}
					}
				})), p);

			function m(n, e) {
				if (s.fnc(n)) return n;
				var r = n.split("(")[0],
					t = g[r],
					a = f(n);
				switch (r) {
					case "spring":
						return l(n, e);
					case "cubicBezier":
						return c(h, a);
					case "steps":
						return c(d, a);
					default:
						return c(t, a)
				}
			}

			function y(n) {
				try {
					return document.querySelectorAll(n)
				} catch (n) {
					return
				}
			}

			function b(n, e) {
				for (var r = n.length, t = arguments.length >= 2 ? arguments[1] : void 0, a = [], u = 0; u < r; u++)
					if (u in n) {
						var o = n[u];
						e.call(t, o, u, n) && a.push(o)
					} return a
			}

			function M(n) {
				return n.reduce((function(n, e) {
					return n.concat(s.arr(e) ? M(e) : e)
				}), [])
			}

			function w(n) {
				return s.arr(n) ? n : (s.str(n) && (n = y(n) || n), n instanceof NodeList || n instanceof HTMLCollection ? [].slice.call(n) : [n])
			}

			function x(n, e) {
				return n.some((function(n) {
					return n === e
				}))
			}

			function k(n) {
				var e = {};
				for (var r in n) e[r] = n[r];
				return e
			}

			function O(n, e) {
				var r = k(n);
				for (var t in n) r[t] = e.hasOwnProperty(t) ? e[t] : n[t];
				return r
			}

			function C(n, e) {
				var r = k(n);
				for (var t in e) r[t] = s.und(n[t]) ? e[t] : n[t];
				return r
			}

			function B(n) {
				return s.rgb(n) ? (r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = n)) ? "rgba(" + r[1] + ",1)" : e : s.hex(n) ? function(n) {
					var e = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(n, e, r, t) {
							return e + e + r + r + t + t
						})),
						r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
					return "rgba(" + parseInt(r[1], 16) + "," + parseInt(r[2], 16) + "," + parseInt(r[3], 16) + ",1)"
				}(n) : s.hsl(n) ? function(n) {
					var e, r, t, a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),
						u = parseInt(a[1], 10) / 360,
						o = parseInt(a[2], 10) / 100,
						i = parseInt(a[3], 10) / 100,
						c = a[4] || 1;

					function s(n, e, r) {
						return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? n + 6 * (e - n) * r : r < .5 ? e : r < 2 / 3 ? n + (e - n) * (2 / 3 - r) * 6 : n
					}
					if (0 == o) e = r = t = i;
					else {
						var f = i < .5 ? i * (1 + o) : i + o - i * o,
							l = 2 * i - f;
						e = s(l, f, u + 1 / 3), r = s(l, f, u), t = s(l, f, u - 1 / 3)
					}
					return "rgba(" + 255 * e + "," + 255 * r + "," + 255 * t + "," + c + ")"
				}(n) : void 0;
				var e, r
			}

			function P(n) {
				var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);
				if (e) return e[1]
			}

			function I(n, e) {
				return s.fnc(n) ? n(e.target, e.id, e.total) : n
			}

			function T(n, e) {
				return n.getAttribute(e)
			}

			function D(n, e, r) {
				if (x([r, "deg", "rad", "turn"], P(e))) return e;
				var t = u.CSS[e + r];
				if (!s.und(t)) return t;
				var a = document.createElement(n.tagName),
					o = n.parentNode && n.parentNode !== document ? n.parentNode : document.body;
				o.appendChild(a), a.style.position = "absolute", a.style.width = 100 + r;
				var i = 100 / a.offsetWidth;
				o.removeChild(a);
				var c = i * parseFloat(e);
				return u.CSS[e + r] = c, c
			}

			function E(n, e, r) {
				if (e in n.style) {
					var t = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
						a = n.style[e] || getComputedStyle(n).getPropertyValue(t) || "0";
					return r ? D(n, a, r) : a
				}
			}

			function A(n, e) {
				return s.dom(n) && !s.inp(n) && (T(n, e) || s.svg(n) && n[e]) ? "attribute" : s.dom(n) && x(a, e) ? "transform" : s.dom(n) && "transform" !== e && E(n, e) ? "css" : null != n[e] ? "object" : void 0
			}

			function F(n) {
				if (s.dom(n)) {
					for (var e, r = n.style.transform || "", t = /(\w+)\(([^)]*)\)/g, a = new Map; e = t.exec(r);) a.set(e[1], e[2]);
					return a
				}
			}

			function N(n, e, r, t) {
				var a = i(e, "scale") ? 1 : 0 + function(n) {
						return i(n, "translate") || "perspective" === n ? "px" : i(n, "rotate") || i(n, "skew") ? "deg" : void 0
					}(e),
					u = F(n).get(e) || a;
				return r && (r.transforms.list.set(e, u), r.transforms.last = e), t ? D(n, u, t) : u
			}

			function j(n, e, r, t) {
				switch (A(n, e)) {
					case "transform":
						return N(n, e, t, r);
					case "css":
						return E(n, e, r);
					case "attribute":
						return T(n, e);
					default:
						return n[e] || 0
				}
			}

			function L(n, e) {
				var r = /^(\*=|\+=|-=)/.exec(n);
				if (!r) return n;
				var t = P(n) || 0,
					a = parseFloat(e),
					u = parseFloat(n.replace(r[0], ""));
				switch (r[0][0]) {
					case "+":
						return a + u + t;
					case "-":
						return a - u + t;
					case "*":
						return a * u + t
				}
			}

			function S(n, e) {
				if (s.col(n)) return B(n);
				if (/\s/g.test(n)) return n;
				var r = P(n),
					t = r ? n.substr(0, n.length - r.length) : n;
				return e ? t + e : t
			}

			function q(n, e) {
				return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2))
			}

			function $(n) {
				for (var e, r = n.points, t = 0, a = 0; a < r.numberOfItems; a++) {
					var u = r.getItem(a);
					a > 0 && (t += q(e, u)), e = u
				}
				return t
			}

			function Z(n) {
				if (n.getTotalLength) return n.getTotalLength();
				switch (n.tagName.toLowerCase()) {
					case "circle":
						return function(n) {
							return 2 * Math.PI * T(n, "r")
						}(n);
					case "rect":
						return function(n) {
							return 2 * T(n, "width") + 2 * T(n, "height")
						}(n);
					case "line":
						return function(n) {
							return q({
								x: T(n, "x1"),
								y: T(n, "y1")
							}, {
								x: T(n, "x2"),
								y: T(n, "y2")
							})
						}(n);
					case "polyline":
						return $(n);
					case "polygon":
						return function(n) {
							var e = n.points;
							return $(n) + q(e.getItem(e.numberOfItems - 1), e.getItem(0))
						}(n)
				}
			}

			function X(n, e) {
				var r = e || {},
					t = r.el || function(n) {
						for (var e = n.parentNode; s.svg(e) && s.svg(e.parentNode);) e = e.parentNode;
						return e
					}(n),
					a = t.getBoundingClientRect(),
					u = T(t, "viewBox"),
					o = a.width,
					i = a.height,
					c = r.viewBox || (u ? u.split(" ") : [0, 0, o, i]);
				return {
					el: t,
					viewBox: c,
					x: c[0] / 1,
					y: c[1] / 1,
					w: o / c[2],
					h: i / c[3]
				}
			}

			function Y(n, e) {
				function r(r) {
					void 0 === r && (r = 0);
					var t = e + r >= 1 ? e + r : 0;
					return n.el.getPointAtLength(t)
				}
				var t = X(n.el, n.svg),
					a = r(),
					u = r(-1),
					o = r(1);
				switch (n.property) {
					case "x":
						return (a.x - t.x) * t.w;
					case "y":
						return (a.y - t.y) * t.h;
					case "angle":
						return 180 * Math.atan2(o.y - u.y, o.x - u.x) / Math.PI
				}
			}

			function Q(n, e) {
				var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
					t = S(s.pth(n) ? n.totalLength : n, e) + "";
				return {
					original: t,
					numbers: t.match(r) ? t.match(r).map(Number) : [0],
					strings: s.str(n) || e ? t.split(r) : []
				}
			}

			function V(n) {
				return b(n ? M(s.arr(n) ? n.map(w) : w(n)) : [], (function(n, e, r) {
					return r.indexOf(n) === e
				}))
			}

			function z(n) {
				var e = V(n);
				return e.map((function(n, r) {
					return {
						target: n,
						id: r,
						total: e.length,
						transforms: {
							list: F(n)
						}
					}
				}))
			}

			function H(n, e) {
				var r = k(e);
				if (/^spring/.test(r.easing) && (r.duration = l(r.easing)), s.arr(n)) {
					var t = n.length;
					2 === t && !s.obj(n[0]) ? n = {
						value: n
					} : s.fnc(e.duration) || (r.duration = e.duration / t)
				}
				var a = s.arr(n) ? n : [n];
				return a.map((function(n, r) {
					var t = s.obj(n) && !s.pth(n) ? n : {
						value: n
					};
					return s.und(t.delay) && (t.delay = r ? 0 : e.delay), s.und(t.endDelay) && (t.endDelay = r === a.length - 1 ? e.endDelay : 0), t
				})).map((function(n) {
					return C(n, r)
				}))
			}

			function G(n, e) {
				var r = [],
					t = e.keyframes;
				for (var a in t && (e = C(function(n) {
						for (var e = b(M(n.map((function(n) {
								return Object.keys(n)
							}))), (function(n) {
								return s.key(n)
							})).reduce((function(n, e) {
								return n.indexOf(e) < 0 && n.push(e), n
							}), []), r = {}, t = function(t) {
								var a = e[t];
								r[a] = n.map((function(n) {
									var e = {};
									for (var r in n) s.key(r) ? r == a && (e.value = n[r]) : e[r] = n[r];
									return e
								}))
							}, a = 0; a < e.length; a++) t(a);
						return r
					}(t), e)), e) s.key(a) && r.push({
					name: a,
					tweens: H(e[a], n)
				});
				return r
			}

			function R(n, e) {
				var r;
				return n.tweens.map((function(t) {
					var a = function(n, e) {
							var r = {};
							for (var t in n) {
								var a = I(n[t], e);
								s.arr(a) && 1 === (a = a.map((function(n) {
									return I(n, e)
								}))).length && (a = a[0]), r[t] = a
							}
							return r.duration = parseFloat(r.duration), r.delay = parseFloat(r.delay), r
						}(t, e),
						u = a.value,
						o = s.arr(u) ? u[1] : u,
						i = P(o),
						c = j(e.target, n.name, i, e),
						f = r ? r.to.original : c,
						l = s.arr(u) ? u[0] : f,
						d = P(l) || P(c),
						p = i || d;
					return s.und(o) && (o = f), a.from = Q(l, p), a.to = Q(L(o, l), p), a.start = r ? r.end : 0, a.end = a.start + a.delay + a.duration + a.endDelay, a.easing = m(a.easing, a.duration), a.isPath = s.pth(u), a.isColor = s.col(a.from.original), a.isColor && (a.round = 1), r = a, a
				}))
			}
			var W = {
				css: function(n, e, r) {
					return n.style[e] = r
				},
				attribute: function(n, e, r) {
					return n.setAttribute(e, r)
				},
				object: function(n, e, r) {
					return n[e] = r
				},
				transform: function(n, e, r, t, a) {
					if (t.list.set(e, r), e === t.last || a) {
						var u = "";
						t.list.forEach((function(n, e) {
							u += e + "(" + n + ") "
						})), n.style.transform = u
					}
				}
			};

			function J(n, e) {
				z(n).forEach((function(n) {
					for (var r in e) {
						var t = I(e[r], n),
							a = n.target,
							u = P(t),
							o = j(a, r, u, n),
							i = L(S(t, u || P(o)), o),
							c = A(a, r);
						W[c](a, r, i, n.transforms, !0)
					}
				}))
			}

			function K(n, e) {
				return b(M(n.map((function(n) {
					return e.map((function(e) {
						return function(n, e) {
							var r = A(n.target, e.name);
							if (r) {
								var t = R(e, n),
									a = t[t.length - 1];
								return {
									type: r,
									property: e.name,
									animatable: n,
									tweens: t,
									duration: a.end,
									delay: t[0].delay,
									endDelay: a.endDelay
								}
							}
						}(n, e)
					}))
				}))), (function(n) {
					return !s.und(n)
				}))
			}

			function U(n, e) {
				var r = n.length,
					t = function(n) {
						return n.timelineOffset ? n.timelineOffset : 0
					},
					a = {};
				return a.duration = r ? Math.max.apply(Math, n.map((function(n) {
					return t(n) + n.duration
				}))) : e.duration, a.delay = r ? Math.min.apply(Math, n.map((function(n) {
					return t(n) + n.delay
				}))) : e.delay, a.endDelay = r ? a.duration - Math.max.apply(Math, n.map((function(n) {
					return t(n) + n.duration - n.endDelay
				}))) : e.endDelay, a
			}
			var _ = 0;
			var nn, en = [],
				rn = [],
				tn = function() {
					function n() {
						nn = requestAnimationFrame(e)
					}

					function e(e) {
						var r = en.length;
						if (r) {
							for (var t = 0; t < r;) {
								var a = en[t];
								if (a.paused) {
									var u = en.indexOf(a);
									u > -1 && (en.splice(u, 1), r = en.length)
								} else a.tick(e);
								t++
							}
							n()
						} else nn = cancelAnimationFrame(nn)
					}
					return n
				}();

			function an(n) {
				void 0 === n && (n = {});
				var e, a = 0,
					u = 0,
					i = 0,
					c = 0,
					s = null;

				function f(n) {
					var e = window.Promise && new Promise((function(n) {
						return s = n
					}));
					return n.finished = e, e
				}
				var l = function(n) {
					var e = O(r, n),
						a = O(t, n),
						u = G(a, n),
						o = z(n.targets),
						i = K(o, u),
						c = U(i, a),
						s = _;
					return _++, C(e, {
						id: s,
						children: [],
						animatables: o,
						animations: i,
						duration: c.duration,
						delay: c.delay,
						endDelay: c.endDelay
					})
				}(n);
				f(l);

				function d() {
					var n = l.direction;
					"alternate" !== n && (l.direction = "normal" !== n ? "normal" : "reverse"), l.reversed = !l.reversed, e.forEach((function(n) {
						return n.reversed = l.reversed
					}))
				}

				function p(n) {
					return l.reversed ? l.duration - n : n
				}

				function v() {
					a = 0, u = p(l.currentTime) * (1 / an.speed)
				}

				function h(n, e) {
					e && e.seek(n - e.timelineOffset)
				}

				function g(n) {
					for (var e = 0, r = l.animations, t = r.length; e < t;) {
						var a = r[e],
							u = a.animatable,
							i = a.tweens,
							c = i.length - 1,
							s = i[c];
						c && (s = b(i, (function(e) {
							return n < e.end
						}))[0] || s);
						for (var f = o(n - s.start - s.delay, 0, s.duration) / s.duration, d = isNaN(f) ? 1 : s.easing(f), p = s.to.strings, v = s.round, h = [], g = s.to.numbers.length, m = void 0, y = 0; y < g; y++) {
							var M = void 0,
								w = s.to.numbers[y],
								x = s.from.numbers[y] || 0;
							M = s.isPath ? Y(s.value, d * w) : x + d * (w - x), v && (s.isColor && y > 2 || (M = Math.round(M * v) / v)), h.push(M)
						}
						var k = p.length;
						if (k) {
							m = p[0];
							for (var O = 0; O < k; O++) {
								p[O];
								var C = p[O + 1],
									B = h[O];
								isNaN(B) || (m += C ? B + C : B + " ")
							}
						} else m = h[0];
						W[a.type](u.target, a.property, m, u.transforms), a.currentValue = m, e++
					}
				}

				function m(n) {
					l[n] && !l.passThrough && l[n](l)
				}

				function y(n) {
					var r = l.duration,
						t = l.delay,
						v = r - l.endDelay,
						y = p(n);
					l.progress = o(y / r * 100, 0, 100), l.reversePlayback = y < l.currentTime, e && function(n) {
						if (l.reversePlayback)
							for (var r = c; r--;) h(n, e[r]);
						else
							for (var t = 0; t < c; t++) h(n, e[t])
					}(y), !l.began && l.currentTime > 0 && (l.began = !0, m("begin")), !l.loopBegan && l.currentTime > 0 && (l.loopBegan = !0, m("loopBegin")), y <= t && 0 !== l.currentTime && g(0), (y >= v && l.currentTime !== r || !r) && g(r), y > t && y < v ? (l.changeBegan || (l.changeBegan = !0, l.changeCompleted = !1, m("changeBegin")), m("change"), g(y)) : l.changeBegan && (l.changeCompleted = !0, l.changeBegan = !1, m("changeComplete")), l.currentTime = o(y, 0, r), l.began && m("update"), n >= r && (u = 0, l.remaining && !0 !== l.remaining && l.remaining--, l.remaining ? (a = i, m("loopComplete"), l.loopBegan = !1, "alternate" === l.direction && d()) : (l.paused = !0, l.completed || (l.completed = !0, m("loopComplete"), m("complete"), !l.passThrough && "Promise" in window && (s(), f(l)))))
				}
				return l.reset = function() {
					var n = l.direction;
					l.passThrough = !1, l.currentTime = 0, l.progress = 0, l.paused = !0, l.began = !1, l.loopBegan = !1, l.changeBegan = !1, l.completed = !1, l.changeCompleted = !1, l.reversePlayback = !1, l.reversed = "reverse" === n, l.remaining = l.loop, e = l.children;
					for (var r = c = e.length; r--;) l.children[r].reset();
					(l.reversed && !0 !== l.loop || "alternate" === n && 1 === l.loop) && l.remaining++, g(l.reversed ? l.duration : 0)
				}, l.set = function(n, e) {
					return J(n, e), l
				}, l.tick = function(n) {
					i = n, a || (a = i), y((i + (u - a)) * an.speed)
				}, l.seek = function(n) {
					y(p(n))
				}, l.pause = function() {
					l.paused = !0, v()
				}, l.play = function() {
					l.paused && (l.completed && l.reset(), l.paused = !1, en.push(l), v(), nn || tn())
				}, l.reverse = function() {
					d(), l.completed = !l.reversed, v()
				}, l.restart = function() {
					l.reset(), l.play()
				}, l.reset(), l.autoplay && l.play(), l
			}

			function un(n, e) {
				for (var r = e.length; r--;) x(n, e[r].animatable.target) && e.splice(r, 1)
			}
			"undefined" != typeof document && document.addEventListener("visibilitychange", (function() {
				document.hidden ? (en.forEach((function(n) {
					return n.pause()
				})), rn = en.slice(0), an.running = en = []) : rn.forEach((function(n) {
					return n.play()
				}))
			})), an.version = "3.2.0", an.speed = 1, an.running = en, an.remove = function(n) {
				for (var e = V(n), r = en.length; r--;) {
					var t = en[r],
						a = t.animations,
						u = t.children;
					un(e, a);
					for (var o = u.length; o--;) {
						var i = u[o],
							c = i.animations;
						un(e, c), c.length || i.children.length || u.splice(o, 1)
					}
					a.length || u.length || t.pause()
				}
			}, an.get = j, an.set = J, an.convertPx = D, an.path = function(n, e) {
				var r = s.str(n) ? y(n)[0] : n,
					t = e || 100;
				return function(n) {
					return {
						property: n,
						el: r,
						svg: X(r),
						totalLength: Z(r) * (t / 100)
					}
				}
			}, an.setDashoffset = function(n) {
				var e = Z(n);
				return n.setAttribute("stroke-dasharray", e), e
			}, an.stagger = function(n, e) {
				void 0 === e && (e = {});
				var r = e.direction || "normal",
					t = e.easing ? m(e.easing) : null,
					a = e.grid,
					u = e.axis,
					o = e.from || 0,
					i = "first" === o,
					c = "center" === o,
					f = "last" === o,
					l = s.arr(n),
					d = l ? parseFloat(n[0]) : parseFloat(n),
					p = l ? parseFloat(n[1]) : 0,
					v = P(l ? n[1] : n) || 0,
					h = e.start || 0 + (l ? d : 0),
					g = [],
					y = 0;
				return function(n, e, s) {
					if (i && (o = 0), c && (o = (s - 1) / 2), f && (o = s - 1), !g.length) {
						for (var m = 0; m < s; m++) {
							if (a) {
								var b = c ? (a[0] - 1) / 2 : o % a[0],
									M = c ? (a[1] - 1) / 2 : Math.floor(o / a[0]),
									w = b - m % a[0],
									x = M - Math.floor(m / a[0]),
									k = Math.sqrt(w * w + x * x);
								"x" === u && (k = -w), "y" === u && (k = -x), g.push(k)
							} else g.push(Math.abs(o - m));
							y = Math.max.apply(Math, g)
						}
						t && (g = g.map((function(n) {
							return t(n / y) * y
						}))), "reverse" === r && (g = g.map((function(n) {
							return u ? n < 0 ? -1 * n : -n : Math.abs(y - n)
						})))
					}
					return h + (l ? (p - d) / y : d) * (Math.round(100 * g[e]) / 100) + v
				}
			}, an.timeline = function(n) {
				void 0 === n && (n = {});
				var e = an(n);
				return e.duration = 0, e.add = function(r, a) {
					var u = en.indexOf(e),
						o = e.children;

					function i(n) {
						n.passThrough = !0
					}
					u > -1 && en.splice(u, 1);
					for (var c = 0; c < o.length; c++) i(o[c]);
					var f = C(r, O(t, n));
					f.targets = f.targets || n.targets;
					var l = e.duration;
					f.autoplay = !1, f.direction = e.direction, f.timelineOffset = s.und(a) ? l : L(a, l), i(e), e.seek(f.timelineOffset);
					var d = an(f);
					i(d), o.push(d);
					var p = U(o, n);
					return e.delay = p.delay, e.endDelay = p.endDelay, e.duration = p.duration, e.seek(0), e.reset(), e.autoplay && e.play(), e
				}, e
			}, an.easing = m, an.penner = g, an.random = function(n, e) {
				return Math.floor(Math.random() * (e - n + 1)) + n
			}, e.Z = an
		},
		1956: function(n, e, r) {
			var t = r(6324),
				a = r(748);
			n.exports = Object.keys || function(n) {
				return t(n, a)
			}
		},
		1249: function(n, e, r) {
			"use strict";
			var t = r(2109),
				a = r(2092).map,
				u = r(1194),
				o = r(9207),
				i = u("map"),
				c = o("map");
			t({
				target: "Array",
				proto: !0,
				forced: !i || !c
			}, {
				map: function(n) {
					return a(this, n, arguments.length > 1 ? arguments[1] : void 0)
				}
			})
		},
		7941: function(n, e, r) {
			var t = r(2109),
				a = r(7908),
				u = r(1956);
			t({
				target: "Object",
				stat: !0,
				forced: r(7293)((function() {
					u(1)
				}))
			}, {
				keys: function(n) {
					return u(a(n))
				}
			})
		}
	}
]);