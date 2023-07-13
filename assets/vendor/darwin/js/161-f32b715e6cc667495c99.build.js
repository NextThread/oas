(self.webpackChunkdarwinapps = self.webpackChunkdarwinapps || []).push([
	[161], {
		5745: function(t, e) {
			var r, i, a;
			(function() {
				var s, n, o, h, l, p, f, c, u, m, d, y, v, b;
				t.exports = 0;
				o = "0.5.0", h = "hasOwnProperty", l = /[\.\/]/, p = /\s*,\s*/, f = function(t, e) {
					return t - e
				}, c = {
					n: {}
				}, u = function() {
					for (var t = 0, e = this.length; t < e; t++)
						if (void 0 !== this[t]) return this[t]
				}, m = function() {
					for (var t = this.length; --t;)
						if (void 0 !== this[t]) return this[t]
				}, d = Object.prototype.toString, y = String, v = Array.isArray || function(t) {
					return t instanceof Array || "[object Array]" == d.call(t)
				}, eve = function(t, e) {
					var r, i = n,
						a = Array.prototype.slice.call(arguments, 2),
						o = eve.listeners(t),
						h = 0,
						l = [],
						p = {},
						c = [],
						d = s;
					c.firstDefined = u, c.lastDefined = m, s = t, n = 0;
					for (var g = 0, y = o.length; g < y; g++) "zIndex" in o[g] && (l.push(o[g].zIndex), o[g].zIndex < 0 && (p[o[g].zIndex] = o[g]));
					for (l.sort(f); l[h] < 0;)
						if (r = p[l[h++]], c.push(r.apply(e, a)), n) return n = i, c;
					for (g = 0; g < y; g++)
						if ("zIndex" in (r = o[g]))
							if (r.zIndex == l[h]) {
								if (c.push(r.apply(e, a)), n) break;
								do {
									if ((r = p[l[++h]]) && c.push(r.apply(e, a)), n) break
								} while (r)
							} else p[r.zIndex] = r;
					else if (c.push(r.apply(e, a)), n) break;
					return n = i, s = d, c
				}, eve._events = c, eve.listeners = function(t) {
					var e, r, i, a, s, n, o, h, p = v(t) ? t : t.split(l),
						f = c,
						u = [f],
						m = [];
					for (a = 0, s = p.length; a < s; a++) {
						for (h = [], n = 0, o = u.length; n < o; n++)
							for (r = [(f = u[n].n)[p[a]], f["*"]], i = 2; i--;)(e = r[i]) && (h.push(e), m = m.concat(e.f || []));
						u = h
					}
					return m
				}, eve.separator = function(t) {
					t ? (t = "[" + (t = y(t).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", l = new RegExp(t)) : l = /[\.\/]/
				}, eve.on = function(t, e) {
					if ("function" != typeof e) return function() {};
					for (var r = v(t) ? v(t[0]) ? t : [t] : y(t).split(p), i = 0, a = r.length; i < a; i++) ! function(t) {
						for (var r, i = v(t) ? t : y(t).split(l), a = c, s = 0, n = i.length; s < n; s++) a = (a = a.n).hasOwnProperty(i[s]) && a[i[s]] || (a[i[s]] = {
							n: {}
						});
						for (a.f = a.f || [], s = 0, n = a.f.length; s < n; s++)
							if (a.f[s] == e) {
								r = !0;
								break
							}! r && a.f.push(e)
					}(r[i]);
					return function(t) {
						+t == +t && (e.zIndex = +t)
					}
				}, eve.f = function(t) {
					var e = [].slice.call(arguments, 1);
					return function() {
						eve.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
					}
				}, eve.stop = function() {
					n = 1
				}, eve.nt = function(t) {
					var e = v(s) ? s.join(".") : s;
					return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
				}, eve.nts = function() {
					return v(s) ? s : s.split(l)
				}, eve.off = eve.unbind = function(t, e) {
					if (t) {
						var r = v(t) ? v(t[0]) ? t : [t] : y(t).split(p);
						if (r.length > 1)
							for (var i = 0, a = r.length; i < a; i++) eve.off(r[i], e);
						else {
							r = v(t) ? t : y(t).split(l);
							var s, n, o, f, u, m = [c],
								d = [];
							for (i = 0, a = r.length; i < a; i++)
								for (f = 0; f < m.length; f += o.length - 2) {
									if (o = [f, 1], s = m[f].n, "*" != r[i]) s[r[i]] && (o.push(s[r[i]]), d.unshift({
										n: s,
										name: r[i]
									}));
									else
										for (n in s) s[h](n) && (o.push(s[n]), d.unshift({
											n: s,
											name: n
										}));
									m.splice.apply(m, o)
								}
							for (i = 0, a = m.length; i < a; i++)
								for (s = m[i]; s.n;) {
									if (e) {
										if (s.f) {
											for (f = 0, u = s.f.length; f < u; f++)
												if (s.f[f] == e) {
													s.f.splice(f, 1);
													break
												}! s.f.length && delete s.f
										}
										for (n in s.n)
											if (s.n[h](n) && s.n[n].f) {
												var g = s.n[n].f;
												for (f = 0, u = g.length; f < u; f++)
													if (g[f] == e) {
														g.splice(f, 1);
														break
													}! g.length && delete s.n[n].f
											}
									} else
										for (n in delete s.f, s.n) s.n[h](n) && s.n[n].f && delete s.n[n].f;
									s = s.n
								}
							t: for (i = 0, a = d.length; i < a; i++) {
								for (n in (s = d[i]).n[s.name].f) continue t;
								for (n in s.n[s.name].n) continue t;
								delete s.n[s.name]
							}
						}
					} else eve._events = c = {
						n: {}
					}
				}, eve.once = function(t, e) {
					var r = function() {
						return eve.off(t, r), e.apply(this, arguments)
					};
					return eve.on(t, r)
				}, eve.version = o, eve.toString = function() {
					return "You are running Eve 0.5.0"
				}, t.exports ? t.exports = eve : void 0 !== (r = function() {
					return eve
				}.apply(i = {}, [])) || (r = i), b = window || this, a = function(t) {
					return function(t, e) {
						var r = function(e) {
								var r, i = {},
									a = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
										return setTimeout(t, 16, (new Date).getTime()), !0
									},
									s = Array.isArray || function(t) {
										return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
									},
									n = 0,
									o = "M" + (+new Date).toString(36),
									h = function() {
										return o + (n++).toString(36)
									},
									l = Date.now || function() {
										return +new Date
									},
									p = function(t) {
										var e = this;
										if (null == t) return e.s;
										var r = e.s - t;
										e.b += e.dur * r, e.B += e.dur * r, e.s = t
									},
									f = function(t) {
										var e = this;
										if (null == t) return e.spd;
										e.spd = t
									},
									c = function(t) {
										var e = this;
										if (null == t) return e.dur;
										e.s = e.s * t / e.dur, e.dur = t
									},
									u = function() {
										var t = this;
										delete i[t.id], t.update(), e("mina.stop." + t.id, t)
									},
									m = function() {
										var t = this;
										t.pdif || (delete i[t.id], t.update(), t.pdif = t.get() - t.b)
									},
									d = function() {
										var t = this;
										t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, i[t.id] = t, y())
									},
									g = function() {
										var t, e = this;
										if (s(e.start)) {
											t = [];
											for (var r = 0, i = e.start.length; r < i; r++) t[r] = +e.start[r] + (e.end[r] - e.start[r]) * e.easing(e.s)
										} else t = +e.start + (e.end - e.start) * e.easing(e.s);
										e.set(t)
									},
									y = function(t) {
										if (t) {
											var s = 0;
											for (var n in i)
												if (i.hasOwnProperty(n)) {
													var o = i[n],
														h = o.get();
													s++, o.s = (h - o.b) / (o.dur / o.spd), o.s >= 1 && (delete i[n], o.s = 1, s--, function(t) {
														setTimeout((function() {
															e("mina.finish." + t.id, t)
														}))
													}(o)), o.update()
												} r = !!s && a(y)
										} else r || (r = a(y))
									},
									v = function(t, e, r, a, s, n, o) {
										var l = {
											id: h(),
											start: t,
											end: e,
											b: r,
											s: 0,
											dur: a - r,
											spd: 1,
											get: s,
											set: n,
											easing: o || v.linear,
											status: p,
											speed: f,
											duration: c,
											stop: u,
											pause: m,
											resume: d,
											update: g
										};
										i[l.id] = l;
										var b, x = 0;
										for (b in i)
											if (i.hasOwnProperty(b) && 2 == ++x) break;
										return 1 == x && y(), l
									};
								return v.time = l, v.getById = function(t) {
									return i[t] || null
								}, v.linear = function(t) {
									return t
								}, v.easeout = function(t) {
									return Math.pow(t, 1.7)
								}, v.easein = function(t) {
									return Math.pow(t, .48)
								}, v.easeinout = function(t) {
									if (1 == t) return 1;
									if (0 == t) return 0;
									var e = .48 - t / 1.04,
										r = Math.sqrt(.1734 + e * e),
										i = r - e,
										a = -r - e,
										s = Math.pow(Math.abs(i), 1 / 3) * (i < 0 ? -1 : 1) + Math.pow(Math.abs(a), 1 / 3) * (a < 0 ? -1 : 1) + .5;
									return 3 * (1 - s) * s * s + s * s * s
								}, v.backin = function(t) {
									if (1 == t) return 1;
									var e = 1.70158;
									return t * t * ((e + 1) * t - e)
								}, v.backout = function(t) {
									if (0 == t) return 0;
									var e = 1.70158;
									return (t -= 1) * t * ((e + 1) * t + e) + 1
								}, v.elastic = function(t) {
									return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
								}, v.bounce = function(t) {
									var e = 7.5625,
										r = 2.75;
									return t < 1 / r ? e * t * t : t < 2 / r ? e * (t -= 1.5 / r) * t + .75 : t < 2.5 / r ? e * (t -= 2.25 / r) * t + .9375 : e * (t -= 2.625 / r) * t + .984375
								}, t.mina = v, v
							}(void 0 === e ? function() {} : e),
							i = function(t) {
								function r(t, e) {
									if (t) {
										if (t.nodeType) return rt(t);
										if (M(t, "array") && r.set) return r.set.apply(r, t);
										if (t instanceof J) return t;
										if (null == e) return rt(t = i.doc.querySelector(String(t)))
									}
									return new et(t = null == t ? "100%" : t, e = null == e ? "100%" : e)
								}
								r.version = "0.5.1", r.toString = function() {
									return "Snap v" + this.version
								}, r._ = {};
								var i = {
									win: t.window,
									doc: t.window.document
								};
								r._.glob = i;
								var a, s, n, o = "hasOwnProperty",
									h = String,
									l = parseFloat,
									p = parseInt,
									f = Math,
									c = f.max,
									u = f.min,
									m = f.abs,
									d = (f.pow, f.PI),
									y = (f.round, ""),
									v = Object.prototype.toString,
									b = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
									x = (r._.separator = /[,\s]+/, /[\s]*,[\s]*/),
									E = {
										hs: 1,
										rg: 1
									},
									P = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
									S = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
									C = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
									A = 0,
									F = "S" + (+new Date).toString(36),
									_ = function(t) {
										return (t && t.type ? t.type : y) + F + (A++).toString(36)
									},
									k = "http://www.w3.org/1999/xlink",
									T = "http://www.w3.org/2000/svg",
									D = {};

								function w(t, e) {
									if (e) {
										if ("#text" == t && (t = i.doc.createTextNode(e.text || e["#text"] || "")), "#comment" == t && (t = i.doc.createComment(e.text || e["#text"] || "")), "string" == typeof t && (t = w(t)), "string" == typeof e) return 1 == t.nodeType ? "xlink:" == e.substring(0, 6) ? t.getAttributeNS(k, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(T, e.substring(4)) : t.getAttribute(e) : "text" == e ? t.nodeValue : null;
										if (1 == t.nodeType) {
											for (var r in e)
												if (e[o](r)) {
													var a = h(e[r]);
													a ? "xlink:" == r.substring(0, 6) ? t.setAttributeNS(k, r.substring(6), a) : "xml:" == r.substring(0, 4) ? t.setAttributeNS(T, r.substring(4), a) : t.setAttribute(r, a) : t.removeAttribute(r)
												}
										} else "text" in e && (t.nodeValue = e.text)
									} else t = i.doc.createElementNS(T, t);
									return t
								}

								function M(t, e) {
									return "finite" == (e = h.prototype.toLowerCase.call(e)) ? isFinite(t) : !("array" != e || !(t instanceof Array || Array.isArray && Array.isArray(t))) || "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || v.call(t).slice(8, -1).toLowerCase() == e
								}

								function I(t) {
									if ("function" == typeof t || Object(t) !== t) return t;
									var e = new t.constructor;
									for (var r in t) t[o](r) && (e[r] = I(t[r]));
									return e
								}

								function B(t, e) {
									for (var r = 0, i = t.length; r < i; r++)
										if (t[r] === e) return t.push(t.splice(r, 1)[0])
								}

								function V(t, e, r) {
									function i() {
										var a = Array.prototype.slice.call(arguments, 0),
											s = a.join("␀"),
											n = i.cache = i.cache || {},
											h = i.count = i.count || [];
										return n[o](s) ? (B(h, s), r ? r(n[s]) : n[s]) : (h.length >= 1e3 && delete n[h.shift()], h.push(s), n[s] = t.apply(e, a), r ? r(n[s]) : n[s])
									}
									return i
								}

								function R(t, e, r, i, a, s) {
									if (null == a) {
										var n = t - r,
											o = e - i;
										return n || o ? (180 + 180 * f.atan2(-o, -n) / d + 360) % 360 : 0
									}
									return R(t, e, a, s) - R(r, i, a, s)
								}

								function L(t) {
									return t % 360 * d / 180
								}

								function G(t) {
									return 180 * t / d % 360
								}
								r.url = function(t) {
									return "url('#" + t + "')"
								}, r._.$ = w, r._.id = _, r.format = (a = /\{([^\}]+)\}/g, s = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, n = function(t, e, r) {
									var i = r;
									return e.replace(s, (function(t, e, r, a, s) {
										e = e || a, i && (e in i && (i = i[e]), "function" == typeof i && s && (i = i()))
									})), i = (null == i || i == r ? t : i) + ""
								}, function(t, e) {
									return h(t).replace(a, (function(t, r) {
										return n(t, r, e)
									}))
								}), r._.clone = I, r._.cacher = V, r.rad = L, r.deg = G, r.sin = function(t) {
									return f.sin(r.rad(t))
								}, r.tan = function(t) {
									return f.tan(r.rad(t))
								}, r.cos = function(t) {
									return f.cos(r.rad(t))
								}, r.asin = function(t) {
									return r.deg(f.asin(t))
								}, r.acos = function(t) {
									return r.deg(f.acos(t))
								}, r.atan = function(t) {
									return r.deg(f.atan(t))
								}, r.atan2 = function(t) {
									return r.deg(f.atan2(t))
								}, r.angle = R, r.len = function(t, e, i, a) {
									return Math.sqrt(r.len2(t, e, i, a))
								}, r.len2 = function(t, e, r, i) {
									return (t - r) * (t - r) + (e - i) * (e - i)
								}, r.closestPoint = function(t, e, r) {
									function i(t) {
										var i = t.x - e,
											a = t.y - r;
										return i * i + a * a
									}
									for (var a, s, n, o, h = t.node, l = h.getTotalLength(), p = l / h.pathSegList.numberOfItems * .125, f = 1 / 0, c = 0; c <= l; c += p)(o = i(n = h.getPointAtLength(c))) < f && (a = n, s = c, f = o);
									for (p *= .5; p > .5;) {
										var u, m, d, g, y, v;
										(d = s - p) >= 0 && (y = i(u = h.getPointAtLength(d))) < f ? (a = u, s = d, f = y) : (g = s + p) <= l && (v = i(m = h.getPointAtLength(g))) < f ? (a = m, s = g, f = v) : p *= .5
									}
									return a = {
										x: a.x,
										y: a.y,
										length: s,
										distance: Math.sqrt(f)
									}
								}, r.is = M, r.snapTo = function(t, e, r) {
									if (r = M(r, "finite") ? r : 10, M(t, "array")) {
										for (var i = t.length; i--;)
											if (m(t[i] - e) <= r) return t[i]
									} else {
										var a = e % (t = +t);
										if (a < r) return e - a;
										if (a > t - r) return e - a + t
									}
									return e
								}, r.getRGB = V((function(t) {
									if (!t || (t = h(t)).indexOf("-") + 1) return {
										r: -1,
										g: -1,
										b: -1,
										hex: "none",
										error: 1,
										toString: H
									};
									if ("none" == t) return {
										r: -1,
										g: -1,
										b: -1,
										hex: "none",
										toString: H
									};
									if (!E[o](t.toLowerCase().substring(0, 2)) && "#" != t.charAt() && (t = N(t)), !t) return {
										r: -1,
										g: -1,
										b: -1,
										hex: "none",
										error: 1,
										toString: H
									};
									var e, i, a, s, n, m, d = t.match(b);
									return d ? (d[2] && (a = p(d[2].substring(5), 16), i = p(d[2].substring(3, 5), 16), e = p(d[2].substring(1, 3), 16)), d[3] && (a = p((n = d[3].charAt(3)) + n, 16), i = p((n = d[3].charAt(2)) + n, 16), e = p((n = d[3].charAt(1)) + n, 16)), d[4] && (m = d[4].split(x), e = l(m[0]), "%" == m[0].slice(-1) && (e *= 2.55), i = l(m[1]), "%" == m[1].slice(-1) && (i *= 2.55), a = l(m[2]), "%" == m[2].slice(-1) && (a *= 2.55), "rgba" == d[1].toLowerCase().slice(0, 4) && (s = l(m[3])), m[3] && "%" == m[3].slice(-1) && (s /= 100)), d[5] ? (m = d[5].split(x), e = l(m[0]), "%" == m[0].slice(-1) && (e /= 100), i = l(m[1]), "%" == m[1].slice(-1) && (i /= 100), a = l(m[2]), "%" == m[2].slice(-1) && (a /= 100), ("deg" == m[0].slice(-3) || "°" == m[0].slice(-1)) && (e /= 360), "hsba" == d[1].toLowerCase().slice(0, 4) && (s = l(m[3])), m[3] && "%" == m[3].slice(-1) && (s /= 100), r.hsb2rgb(e, i, a, s)) : d[6] ? (m = d[6].split(x), e = l(m[0]), "%" == m[0].slice(-1) && (e /= 100), i = l(m[1]), "%" == m[1].slice(-1) && (i /= 100), a = l(m[2]), "%" == m[2].slice(-1) && (a /= 100), ("deg" == m[0].slice(-3) || "°" == m[0].slice(-1)) && (e /= 360), "hsla" == d[1].toLowerCase().slice(0, 4) && (s = l(m[3])), m[3] && "%" == m[3].slice(-1) && (s /= 100), r.hsl2rgb(e, i, a, s)) : (e = u(f.round(e), 255), i = u(f.round(i), 255), a = u(f.round(a), 255), s = u(c(s, 0), 1), (d = {
										r: e,
										g: i,
										b: a,
										toString: H
									}).hex = "#" + (16777216 | a | i << 8 | e << 16).toString(16).slice(1), d.opacity = M(s, "finite") ? s : 1, d)) : {
										r: -1,
										g: -1,
										b: -1,
										hex: "none",
										error: 1,
										toString: H
									}
								}), r), r.hsb = V((function(t, e, i) {
									return r.hsb2rgb(t, e, i).hex
								})), r.hsl = V((function(t, e, i) {
									return r.hsl2rgb(t, e, i).hex
								})), r.rgb = V((function(t, e, r, i) {
									if (M(i, "finite")) {
										var a = f.round;
										return "rgba(" + [a(t), a(e), a(r), +i.toFixed(2)] + ")"
									}
									return "#" + (16777216 | r | e << 8 | t << 16).toString(16).slice(1)
								}));
								var N = function(t) {
										var e = i.doc.getElementsByTagName("head")[0] || i.doc.getElementsByTagName("svg")[0],
											r = "rgb(255, 0, 0)";
										return N = V((function(t) {
											if ("red" == t.toLowerCase()) return r;
											e.style.color = r, e.style.color = t;
											var a = i.doc.defaultView.getComputedStyle(e, y).getPropertyValue("color");
											return a == r ? null : a
										})), N(t)
									},
									z = function() {
										return "hsb(" + [this.h, this.s, this.b] + ")"
									},
									O = function() {
										return "hsl(" + [this.h, this.s, this.l] + ")"
									},
									H = function() {
										return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
									},
									j = function(t, e, i) {
										if (null == e && M(t, "object") && "r" in t && "g" in t && "b" in t && (i = t.b, e = t.g, t = t.r), null == e && M(t, string)) {
											var a = r.getRGB(t);
											t = a.r, e = a.g, i = a.b
										}
										return (t > 1 || e > 1 || i > 1) && (t /= 255, e /= 255, i /= 255), [t, e, i]
									},
									q = function(t, e, i, a) {
										var s = {
											r: t = f.round(255 * t),
											g: e = f.round(255 * e),
											b: i = f.round(255 * i),
											opacity: M(a, "finite") ? a : 1,
											hex: r.rgb(t, e, i),
											toString: H
										};
										return M(a, "finite") && (s.opacity = a), s
									};
								r.color = function(t) {
									var e;
									return M(t, "object") && "h" in t && "s" in t && "b" in t ? (e = r.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : M(t, "object") && "h" in t && "s" in t && "l" in t ? (e = r.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (M(t, "string") && (t = r.getRGB(t)), M(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = r.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = r.rgb2hsb(t), t.v = e.b) : ((t = {
										hex: "none"
									}).r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = H, t
								}, r.hsb2rgb = function(t, e, r, i) {
									var a, s, n, o, h;
									return M(t, "object") && "h" in t && "s" in t && "b" in t && (r = t.b, e = t.s, i = t.o, t = t.h), o = (h = r * e) * (1 - m((t = (t *= 360) % 360 / 60) % 2 - 1)), a = s = n = r - h, q(a += [h, o, 0, 0, o, h][t = ~~t], s += [o, h, h, o, 0, 0][t], n += [0, 0, o, h, h, o][t], i)
								}, r.hsl2rgb = function(t, e, r, i) {
									var a, s, n, o, h;
									return M(t, "object") && "h" in t && "s" in t && "l" in t && (r = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || r > 1) && (t /= 360, e /= 100, r /= 100), o = (h = 2 * e * (r < .5 ? r : 1 - r)) * (1 - m((t = (t *= 360) % 360 / 60) % 2 - 1)), a = s = n = r - h / 2, q(a += [h, o, 0, 0, o, h][t = ~~t], s += [o, h, h, o, 0, 0][t], n += [0, 0, o, h, h, o][t], i)
								}, r.rgb2hsb = function(t, e, r) {
									var i, a;
									return t = (r = j(t, e, r))[0], e = r[1], r = r[2], {
										h: ((0 == (a = (i = c(t, e, r)) - u(t, e, r)) ? null : i == t ? (e - r) / a : i == e ? (r - t) / a + 2 : (t - e) / a + 4) + 360) % 6 * 60 / 360,
										s: 0 == a ? 0 : a / i,
										b: i,
										toString: z
									}
								}, r.rgb2hsl = function(t, e, r) {
									var i, a, s, n;
									return t = (r = j(t, e, r))[0], e = r[1], r = r[2], i = ((a = c(t, e, r)) + (s = u(t, e, r))) / 2, {
										h: ((0 == (n = a - s) ? null : a == t ? (e - r) / n : a == e ? (r - t) / n + 2 : (t - e) / n + 4) + 360) % 6 * 60 / 360,
										s: 0 == n ? 0 : i < .5 ? n / (2 * i) : n / (2 - 2 * i),
										l: i,
										toString: O
									}
								}, r.parsePathString = function(t) {
									if (!t) return null;
									var e = r.path(t);
									if (e.arr) return r.path.clone(e.arr);
									var i = {
											a: 7,
											c: 6,
											o: 2,
											h: 1,
											l: 2,
											m: 2,
											r: 4,
											q: 4,
											s: 4,
											t: 2,
											v: 1,
											u: 3,
											z: 0
										},
										a = [];
									return M(t, "array") && M(t[0], "array") && (a = r.path.clone(t)), a.length || h(t).replace(P, (function(t, e, r) {
										var s = [],
											n = e.toLowerCase();
										if (r.replace(C, (function(t, e) {
												e && s.push(+e)
											})), "m" == n && s.length > 2 && (a.push([e].concat(s.splice(0, 2))), n = "l", e = "m" == e ? "l" : "L"), "o" == n && 1 == s.length && a.push([e, s[0]]), "r" == n) a.push([e].concat(s));
										else
											for (; s.length >= i[n] && (a.push([e].concat(s.splice(0, i[n]))), i[n]););
									})), a.toString = r.path.toString, e.arr = r.path.clone(a), a
								};
								var W = r.parseTransformString = function(t) {
									if (!t) return null;
									var e = [];
									return M(t, "array") && M(t[0], "array") && (e = r.path.clone(t)), e.length || h(t).replace(S, (function(t, r, i) {
										var a = [];
										r.toLowerCase(), i.replace(C, (function(t, e) {
											e && a.push(+e)
										})), e.push([r].concat(a))
									})), e.toString = r.path.toString, e
								};

								function X(t) {
									var e = [];
									return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, (function(t, r, i) {
										return i = i.split(/\s*,\s*|\s+/), "rotate" == r && 1 == i.length && i.push(0, 0), "scale" == r && (i.length > 2 ? i = i.slice(0, 2) : 2 == i.length && i.push(0, 0), 1 == i.length && i.push(i[0], 0, 0)), "skewX" == r ? e.push(["m", 1, 0, f.tan(L(i[0])), 1, 0, 0]) : "skewY" == r ? e.push(["m", 1, f.tan(L(i[0])), 0, 1, 0, 0]) : e.push([r.charAt(0)].concat(i)), t
									})), e
								}

								function Y(t, e) {
									var i = W(t),
										a = new r.Matrix;
									if (i)
										for (var s = 0, n = i.length; s < n; s++) {
											var o, l, p, f, c, u = i[s],
												m = u.length,
												d = h(u[0]).toLowerCase(),
												g = u[0] != d,
												y = g ? a.invert() : 0;
											"t" == d && 2 == m ? a.translate(u[1], 0) : "t" == d && 3 == m ? g ? (o = y.x(0, 0), l = y.y(0, 0), p = y.x(u[1], u[2]), f = y.y(u[1], u[2]), a.translate(p - o, f - l)) : a.translate(u[1], u[2]) : "r" == d ? 2 == m ? (c = c || e, a.rotate(u[1], c.x + c.width / 2, c.y + c.height / 2)) : 4 == m && (g ? (p = y.x(u[2], u[3]), f = y.y(u[2], u[3]), a.rotate(u[1], p, f)) : a.rotate(u[1], u[2], u[3])) : "s" == d ? 2 == m || 3 == m ? (c = c || e, a.scale(u[1], u[m - 1], c.x + c.width / 2, c.y + c.height / 2)) : 4 == m ? g ? (p = y.x(u[2], u[3]), f = y.y(u[2], u[3]), a.scale(u[1], u[1], p, f)) : a.scale(u[1], u[1], u[2], u[3]) : 5 == m && (g ? (p = y.x(u[3], u[4]), f = y.y(u[3], u[4]), a.scale(u[1], u[2], p, f)) : a.scale(u[1], u[2], u[3], u[4])) : "m" == d && 7 == m && a.add(u[1], u[2], u[3], u[4], u[5], u[6])
										}
									return a
								}

								function U(t) {
									var e = t.node.ownerSVGElement && rt(t.node.ownerSVGElement) || t.node.parentNode && rt(t.node.parentNode) || r.select("svg") || r(0, 0),
										i = e.select("defs"),
										a = null != i && i.node;
									return a || (a = tt("defs", e.node).node), a
								}

								function $(t) {
									return t.node.ownerSVGElement && rt(t.node.ownerSVGElement) || r.select("svg")
								}

								function K(t, e, r) {
									var i = $(t).node,
										a = {},
										s = i.querySelector(".svg---mgr");

									function n(t) {
										if (null == t) return y;
										if (t == +t) return t;
										w(s, {
											width: t
										});
										try {
											return s.getBBox().width
										} catch (t) {
											return 0
										}
									}

									function o(t) {
										if (null == t) return y;
										if (t == +t) return t;
										w(s, {
											height: t
										});
										try {
											return s.getBBox().height
										} catch (t) {
											return 0
										}
									}

									function h(i, s) {
										null == e ? a[i] = s(t.attr(i) || 0) : i == e && (a = s(null == r ? t.attr(i) || 0 : r))
									}
									switch (s || (s = w("rect"), w(s, {
											x: -9e9,
											y: -9e9,
											width: 10,
											height: 10,
											class: "svg---mgr",
											fill: "none"
										}), i.appendChild(s)), t.type) {
										case "rect":
											h("rx", n), h("ry", o);
										case "image":
											h("width", n), h("height", o);
										case "text":
											h("x", n), h("y", o);
											break;
										case "circle":
											h("cx", n), h("cy", o), h("r", n);
											break;
										case "ellipse":
											h("cx", n), h("cy", o), h("rx", n), h("ry", o);
											break;
										case "line":
											h("x1", n), h("x2", n), h("y1", o), h("y2", o);
											break;
										case "marker":
											h("refX", n), h("markerWidth", n), h("refY", o), h("markerHeight", o);
											break;
										case "radialGradient":
											h("fx", n), h("fy", o);
											break;
										case "tspan":
											h("dx", n), h("dy", o);
											break;
										default:
											h(e, n)
									}
									return i.removeChild(s), a
								}

								function Z(t) {
									M(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
									for (var e = 0, r = 0, i = this.node; this[e];) delete this[e++];
									for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach((function(t) {
										i.appendChild(t.node)
									})) : i.appendChild(t[e].node);
									var a = i.childNodes;
									for (e = 0; e < a.length; e++) this[r++] = rt(a[e]);
									return this
								}

								function J(t) {
									if (t.snap in D) return D[t.snap];
									var e;
									try {
										e = t.ownerSVGElement
									} catch (t) {}
									this.node = t, e && (this.paper = new et(e)), this.type = t.tagName || t.nodeName;
									var r = this.id = _(this);
									if (this.anims = {}, this._ = {
											transform: []
										}, t.snap = r, D[r] = this, "g" == this.type && (this.add = Z), this.type in {
											g: 1,
											mask: 1,
											pattern: 1,
											symbol: 1
										})
										for (var i in et.prototype) et.prototype[o](i) && (this[i] = et.prototype[i])
								}

								function Q(t) {
									this.node = t
								}

								function tt(t, e) {
									var r = w(t);
									return e.appendChild(r), rt(r)
								}

								function et(t, e) {
									var r, a, s, n = et.prototype;
									if (t && t.tagName && "svg" == t.tagName.toLowerCase()) {
										if (t.snap in D) return D[t.snap];
										var h = t.ownerDocument;
										for (var l in r = new J(t), a = t.getElementsByTagName("desc")[0], s = t.getElementsByTagName("defs")[0], a || ((a = w("desc")).appendChild(h.createTextNode("Created with Snap")), r.node.appendChild(a)), s || (s = w("defs"), r.node.appendChild(s)), r.defs = s, n) n[o](l) && (r[l] = n[l]);
										r.paper = r.root = r
									} else w((r = tt("svg", i.doc.body)).node, {
										height: e,
										version: 1.1,
										width: t,
										xmlns: T
									});
									return r
								}

								function rt(t) {
									return t ? t instanceof J || t instanceof Q ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new et(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new et(t.contentDocument.getElementsByTagName("svg")[0]) : new J(t) : t
								}

								function it(t, e) {
									for (var r = 0, i = t.length; r < i; r++) {
										var a = {
												type: t[r].type,
												attr: t[r].attr()
											},
											s = t[r].children();
										e.push(a), s.length && it(s, a.childNodes = [])
									}
								}
								r._.svgTransform2string = X, r._.rgTransform = /^[a-z][\s]*-?\.?\d/i, r._.transform2matrix = Y, r._unit2px = K, i.doc.contains || i.doc.compareDocumentPosition, r._.getSomeDefs = U, r._.getSomeSVG = $, r.select = function(t) {
									return t = h(t).replace(/([^\\]):/g, "$1\\:"), rt(i.doc.querySelector(t))
								}, r.selectAll = function(t) {
									for (var e = i.doc.querySelectorAll(t), a = (r.set || Array)(), s = 0; s < e.length; s++) a.push(rt(e[s]));
									return a
								}, setInterval((function() {
									for (var t in D)
										if (D[o](t)) {
											var e = D[t],
												r = e.node;
											("svg" != e.type && !r.ownerSVGElement || "svg" == e.type && (!r.parentNode || "ownerSVGElement" in r.parentNode && !r.ownerSVGElement)) && delete D[t]
										}
								}), 1e4), J.prototype.attr = function(t, r) {
									var i = this,
										a = i.node;
									if (!t) {
										if (1 != a.nodeType) return {
											text: a.nodeValue
										};
										for (var s = a.attributes, n = {}, h = 0, l = s.length; h < l; h++) n[s[h].nodeName] = s[h].nodeValue;
										return n
									}
									if (M(t, "string")) {
										if (!(arguments.length > 1)) return e("snap.util.getattr." + t, i).firstDefined();
										var p = {};
										p[t] = r, t = p
									}
									for (var f in t) t[o](f) && e("snap.util.attr." + f, i, t[f]);
									return i
								}, r.parse = function(t) {
									var e = i.doc.createDocumentFragment(),
										r = !0,
										a = i.doc.createElement("div");
									if ((t = h(t)).match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", r = !1), a.innerHTML = t, t = a.getElementsByTagName("svg")[0])
										if (r) e = t;
										else
											for (; t.firstChild;) e.appendChild(t.firstChild);
									return new Q(e)
								}, r.fragment = function() {
									for (var t = Array.prototype.slice.call(arguments, 0), e = i.doc.createDocumentFragment(), a = 0, s = t.length; a < s; a++) {
										var n = t[a];
										n.node && n.node.nodeType && e.appendChild(n.node), n.nodeType && e.appendChild(n), "string" == typeof n && e.appendChild(r.parse(n).node)
									}
									return new Q(e)
								}, r._.make = tt, r._.wrap = rt, et.prototype.el = function(t, e) {
									var r = tt(t, this.node);
									return e && r.attr(e), r
								}, J.prototype.children = function() {
									for (var t = [], e = this.node.childNodes, i = 0, a = e.length; i < a; i++) t[i] = r(e[i]);
									return t
								}, J.prototype.toJSON = function() {
									var t = [];
									return it([this], t), t[0]
								}, e.on("snap.util.getattr", (function() {
									var t = e.nt(),
										r = (t = t.substring(t.lastIndexOf(".") + 1)).replace(/[A-Z]/g, (function(t) {
											return "-" + t.toLowerCase()
										}));
									return at[o](r) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(r) : w(this.node, t)
								}));
								var at = {
									"alignment-baseline": 0,
									"baseline-shift": 0,
									clip: 0,
									"clip-path": 0,
									"clip-rule": 0,
									color: 0,
									"color-interpolation": 0,
									"color-interpolation-filters": 0,
									"color-profile": 0,
									"color-rendering": 0,
									cursor: 0,
									direction: 0,
									display: 0,
									"dominant-baseline": 0,
									"enable-background": 0,
									fill: 0,
									"fill-opacity": 0,
									"fill-rule": 0,
									filter: 0,
									"flood-color": 0,
									"flood-opacity": 0,
									font: 0,
									"font-family": 0,
									"font-size": 0,
									"font-size-adjust": 0,
									"font-stretch": 0,
									"font-style": 0,
									"font-variant": 0,
									"font-weight": 0,
									"glyph-orientation-horizontal": 0,
									"glyph-orientation-vertical": 0,
									"image-rendering": 0,
									kerning: 0,
									"letter-spacing": 0,
									"lighting-color": 0,
									marker: 0,
									"marker-end": 0,
									"marker-mid": 0,
									"marker-start": 0,
									mask: 0,
									opacity: 0,
									overflow: 0,
									"pointer-events": 0,
									"shape-rendering": 0,
									"stop-color": 0,
									"stop-opacity": 0,
									stroke: 0,
									"stroke-dasharray": 0,
									"stroke-dashoffset": 0,
									"stroke-linecap": 0,
									"stroke-linejoin": 0,
									"stroke-miterlimit": 0,
									"stroke-opacity": 0,
									"stroke-width": 0,
									"text-anchor": 0,
									"text-decoration": 0,
									"text-rendering": 0,
									"unicode-bidi": 0,
									visibility: 0,
									"word-spacing": 0,
									"writing-mode": 0
								};
								e.on("snap.util.attr", (function(t) {
									var r = e.nt(),
										i = {};
									i[r = r.substring(r.lastIndexOf(".") + 1)] = t;
									var a = r.replace(/-(\w)/gi, (function(t, e) {
											return e.toUpperCase()
										})),
										s = r.replace(/[A-Z]/g, (function(t) {
											return "-" + t.toLowerCase()
										}));
									at[o](s) ? this.node.style[a] = null == t ? y : t : w(this.node, i)
								})), et.prototype, r.ajax = function(t, r, i, a) {
									var s = new XMLHttpRequest,
										n = _();
									if (s) {
										if (M(r, "function")) a = i, i = r, r = null;
										else if (M(r, "object")) {
											var o = [];
											for (var h in r) r.hasOwnProperty(h) && o.push(encodeURIComponent(h) + "=" + encodeURIComponent(r[h]));
											r = o.join("&")
										}
										return s.open(r ? "POST" : "GET", t, !0), r && (s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), i && (e.once("snap.ajax." + n + ".0", i), e.once("snap.ajax." + n + ".200", i), e.once("snap.ajax." + n + ".304", i)), s.onreadystatechange = function() {
											4 == s.readyState && e("snap.ajax." + n + "." + s.status, a, s)
										}, 4 == s.readyState || s.send(r), s
									}
								}, r.load = function(t, e, i) {
									r.ajax(t, (function(t) {
										var a = r.parse(t.responseText);
										i ? e.call(i, a) : e(a)
									}))
								};
								var st = function(t) {
									var e = t.getBoundingClientRect(),
										r = t.ownerDocument,
										i = r.body,
										a = r.documentElement,
										s = a.clientTop || i.clientTop || 0,
										n = a.clientLeft || i.clientLeft || 0;
									return {
										y: e.top + (g.win.pageYOffset || a.scrollTop || i.scrollTop) - s,
										x: e.left + (g.win.pageXOffset || a.scrollLeft || i.scrollLeft) - n
									}
								};
								return r.getElementByPoint = function(t, e) {
									this.canvas;
									var r = i.doc.elementFromPoint(t, e);
									if (i.win.opera && "svg" == r.tagName) {
										var a = st(r),
											s = r.createSVGRect();
										s.x = t - a.x, s.y = e - a.y, s.width = s.height = 1;
										var n = r.getIntersectionList(s, null);
										n.length && (r = n[n.length - 1])
									}
									return r ? rt(r) : null
								}, r.plugin = function(t) {
									t(r, J, et, i, Q)
								}, i.win.Snap = r, r
							}(t || this);
						return i.plugin((function(r, i, a, s, n) {
							var o = i.prototype,
								h = r.is,
								l = String,
								p = r._unit2px,
								f = r._.$,
								c = r._.make,
								u = r._.getSomeDefs,
								m = "hasOwnProperty",
								d = r._.wrap;
							o.getBBox = function(t) {
								if ("tspan" == this.type) return r._.box(this.node.getClientRects().item(0));
								if (!r.Matrix || !r.path) return this.node.getBBox();
								var e = this,
									i = new r.Matrix;
								if (e.removed) return r._.box();
								for (;
									"use" == e.type;)
									if (t || (i = i.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original) e = e.original;
									else {
										var a = e.attr("xlink:href");
										e = e.original = e.node.ownerDocument.getElementById(a.substring(a.indexOf("#") + 1))
									} var s = e._,
									n = r.path.get[e.type] || r.path.get.deflt;
								try {
									return t ? (s.bboxwt = n ? r.path.getBBox(e.realPath = n(e)) : r._.box(e.node.getBBox()), r._.box(s.bboxwt)) : (e.realPath = n(e), e.matrix = e.transform().localMatrix, s.bbox = r.path.getBBox(r.path.map(e.realPath, i.add(e.matrix))), r._.box(s.bbox))
								} catch (t) {
									return r._.box()
								}
							};
							var g = function() {
								return this.string
							};

							function y(t, e) {
								if (null == e) {
									var i = !0;
									if (!(e = "linearGradient" == t.type || "radialGradient" == t.type ? t.node.getAttribute("gradientTransform") : "pattern" == t.type ? t.node.getAttribute("patternTransform") : t.node.getAttribute("transform"))) return new r.Matrix;
									e = r._.svgTransform2string(e)
								} else e = r._.rgTransform.test(e) ? l(e).replace(/\.{3}|\u2026/g, t._.transform || "") : r._.svgTransform2string(e), h(e, "array") && (e = r.path ? r.path.toString.call(e) : l(e)), t._.transform = e;
								var a = r._.transform2matrix(e, t.getBBox(1));
								if (i) return a;
								t.matrix = a
							}

							function v(t) {
								var e, i = t.selectAll("*"),
									a = /^\s*url\(("|'|)(.*)\1\)\s*$/,
									s = [],
									n = {};

								function o(t, e) {
									var i = f(t.node, e);
									(i = (i = i && i.match(a)) && i[2]) && "#" == i.charAt() && (i = i.substring(1)) && (n[i] = (n[i] || []).concat((function(i) {
										var a = {};
										a[e] = r.url(i.html), f(t.node, a)
									})))
								}

								function h(t) {
									var e = f(t.node, "xlink:href");
									e && "#" == e.charAt() && (e = e.substring(1)) && (n[e] = (n[e] || []).concat((function(e) {
										t.attr("xlink:href", "#" + e)
									})))
								}
								for (var l = 0, p = i.length; l < p; l++) {
									o(e = i[l], "fill"), o(e, "stroke"), o(e, "filter"), o(e, "mask"), o(e, "clip-path"), h(e);
									var c = f(e.node, "id");
									c && (f(e.node, {
										id: e.id
									}), s.push({
										old: c,
										id: e.id
									}))
								}
								for (l = 0, p = s.length; l < p; l++) {
									var u = n[s[l].old];
									if (u)
										for (var m = 0, d = u.length; m < d; m++) u[m](s[l].id)
								}
							}
							o.transform = function(t) {
								var e = this._;
								if (null == t) {
									for (var i, a = this, s = new r.Matrix(this.node.getCTM()), n = y(this), o = [n], h = new r.Matrix, p = n.toTransformString(), c = l(n) == l(this.matrix) ? l(e.transform) : p;
										"svg" != a.type && (a = a.parent());) o.push(y(a));
									for (i = o.length; i--;) h.add(o[i]);
									return {
										string: c,
										globalMatrix: s,
										totalMatrix: h,
										localMatrix: n,
										diffMatrix: s.clone().add(n.invert()),
										global: s.toTransformString(),
										total: h.toTransformString(),
										local: p,
										toString: g
									}
								}
								return t instanceof r.Matrix ? (this.matrix = t, this._.transform = t.toTransformString()) : y(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? f(this.node, {
									gradientTransform: this.matrix
								}) : "pattern" == this.type ? f(this.node, {
									patternTransform: this.matrix
								}) : f(this.node, {
									transform: this.matrix
								})), this
							}, o.parent = function() {
								return d(this.node.parentNode)
							}, o.append = o.add = function(t) {
								if (t) {
									if ("set" == t.type) {
										var e = this;
										return t.forEach((function(t) {
											e.add(t)
										})), this
									}
									t = d(t), this.node.appendChild(t.node), t.paper = this.paper
								}
								return this
							}, o.appendTo = function(t) {
								return t && (t = d(t)).append(this), this
							}, o.prepend = function(t) {
								if (t) {
									if ("set" == t.type) {
										var e, r = this;
										return t.forEach((function(t) {
											e ? e.after(t) : r.prepend(t), e = t
										})), this
									}
									var i = (t = d(t)).parent();
									this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), i && i.add()
								}
								return this
							}, o.prependTo = function(t) {
								return (t = d(t)).prepend(this), this
							}, o.before = function(t) {
								if ("set" == t.type) {
									var e = this;
									return t.forEach((function(t) {
										var r = t.parent();
										e.node.parentNode.insertBefore(t.node, e.node), r && r.add()
									})), this.parent().add(), this
								}
								var r = (t = d(t)).parent();
								return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), r && r.add(), t.paper = this.paper, this
							}, o.after = function(t) {
								var e = (t = d(t)).parent();
								return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
							}, o.insertBefore = function(t) {
								t = d(t);
								var e = this.parent();
								return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
							}, o.insertAfter = function(t) {
								t = d(t);
								var e = this.parent();
								return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
							}, o.remove = function() {
								var t = this.parent();
								return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
							}, o.select = function(t) {
								return d(this.node.querySelector(t))
							}, o.selectAll = function(t) {
								for (var e = this.node.querySelectorAll(t), i = (r.set || Array)(), a = 0; a < e.length; a++) i.push(d(e[a]));
								return i
							}, o.asPX = function(t, e) {
								return null == e && (e = this.attr(t)), +p(this, t, e)
							}, o.use = function() {
								var t, e = this.node.id;
								return e || (e = this.id, f(this.node, {
									id: e
								})), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? c(this.type, this.node.parentNode) : c("use", this.node.parentNode), f(t.node, {
									"xlink:href": "#" + e
								}), t.original = this, t
							}, o.clone = function() {
								var t = d(this.node.cloneNode(!0));
								return f(t.node, "id") && f(t.node, {
									id: t.id
								}), v(t), t.insertAfter(this), t
							}, o.toDefs = function() {
								return u(this).appendChild(this.node), this
							}, o.pattern = o.toPattern = function(t, e, r, i) {
								var a = c("pattern", u(this));
								return null == t && (t = this.getBBox()), h(t, "object") && "x" in t && (e = t.y, r = t.width, i = t.height, t = t.x), f(a.node, {
									x: t,
									y: e,
									width: r,
									height: i,
									patternUnits: "userSpaceOnUse",
									id: a.id,
									viewBox: [t, e, r, i].join(" ")
								}), a.node.appendChild(this.node), a
							}, o.marker = function(t, e, r, i, a, s) {
								var n = c("marker", u(this));
								return null == t && (t = this.getBBox()), h(t, "object") && "x" in t && (e = t.y, r = t.width, i = t.height, a = t.refX || t.cx, s = t.refY || t.cy, t = t.x), f(n.node, {
									viewBox: [t, e, r, i].join(" "),
									markerWidth: r,
									markerHeight: i,
									orient: "auto",
									refX: a || 0,
									refY: s || 0,
									id: n.id
								}), n.node.appendChild(this.node), n
							};
							var b = {};

							function x(t) {
								return function() {
									var e = t ? "<" + this.type : "",
										r = this.node.attributes,
										i = this.node.childNodes;
									if (t)
										for (var a = 0, s = r.length; a < s; a++) e += " " + r[a].name + '="' + r[a].value.replace(/"/g, '\\"') + '"';
									if (i.length) {
										for (t && (e += ">"), a = 0, s = i.length; a < s; a++) 3 == i[a].nodeType ? e += i[a].nodeValue : 1 == i[a].nodeType && (e += d(i[a]).toString());
										t && (e += "</" + this.type + ">")
									} else t && (e += "/>");
									return e
								}
							}
							o.data = function(t, i) {
								var a = b[this.id] = b[this.id] || {};
								if (0 == arguments.length) return e("snap.data.get." + this.id, this, a, null), a;
								if (1 == arguments.length) {
									if (r.is(t, "object")) {
										for (var s in t) t[m](s) && this.data(s, t[s]);
										return this
									}
									return e("snap.data.get." + this.id, this, a[t], t), a[t]
								}
								return a[t] = i, e("snap.data.set." + this.id, this, i, t), this
							}, o.removeData = function(t) {
								return null == t ? b[this.id] = {} : b[this.id] && delete b[this.id][t], this
							}, o.outerSVG = o.toString = x(1), o.innerSVG = x(), o.toDataURL = function() {
								if (t && t.btoa) {
									var e = this.getBBox(),
										i = r.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
											x: +e.x.toFixed(3),
											y: +e.y.toFixed(3),
											width: +e.width.toFixed(3),
											height: +e.height.toFixed(3),
											contents: this.outerSVG()
										});
									return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(i)))
								}
							}, n.prototype.select = o.select, n.prototype.selectAll = o.selectAll
						})), i.plugin((function(t, i, a, s, n) {
							var o = i.prototype,
								h = t.is,
								l = String,
								p = "hasOwnProperty";

							function f(t, e, r) {
								return function(i) {
									var a = i.slice(t, e);
									return 1 == a.length && (a = a[0]), r ? r(a) : a
								}
							}
							var c = function(t, e, i, a) {
								"function" != typeof i || i.length || (a = i, i = r.linear), this.attr = t, this.dur = e, i && (this.easing = i), a && (this.callback = a)
							};
							t._.Animation = c, t.animation = function(t, e, r, i) {
								return new c(t, e, r, i)
							}, o.inAnim = function() {
								var t = this,
									e = [];
								for (var r in t.anims) t.anims[p](r) && function(t) {
									e.push({
										anim: new c(t._attrs, t.dur, t.easing, t._callback),
										mina: t,
										curStatus: t.status(),
										status: function(e) {
											return t.status(e)
										},
										stop: function() {
											t.stop()
										}
									})
								}(t.anims[r]);
								return e
							}, t.animate = function(t, i, a, s, n, o) {
								"function" != typeof n || n.length || (o = n, n = r.linear);
								var h = r.time(),
									l = r(t, i, h, h + s, r.time, a, n);
								return o && e.once("mina.finish." + l.id, o), l
							}, o.stop = function() {
								for (var t = this.inAnim(), e = 0, r = t.length; e < r; e++) t[e].stop();
								return this
							}, o.animate = function(t, i, a, s) {
								"function" != typeof a || a.length || (s = a, a = r.linear), t instanceof c && (s = t.callback, a = t.easing, i = t.dur, t = t.attr);
								var n, o, u, m, d = [],
									g = [],
									y = {},
									v = this;
								for (var b in t)
									if (t[p](b)) {
										v.equal ? (n = (m = v.equal(b, l(t[b]))).from, o = m.to, u = m.f) : (n = +v.attr(b), o = +t[b]);
										var x = h(n, "array") ? n.length : 1;
										y[b] = f(d.length, d.length + x, u), d = d.concat(n), g = g.concat(o)
									} var E = r.time(),
									P = r(d, g, E, E + i, r.time, (function(t) {
										var e = {};
										for (var r in y) y[p](r) && (e[r] = y[r](t));
										v.attr(e)
									}), a);
								return v.anims[P.id] = P, P._attrs = t, P._callback = s, e("snap.animcreated." + v.id, P), e.once("mina.finish." + P.id, (function() {
									e.off("mina.*." + P.id), delete v.anims[P.id], s && s.call(v)
								})), e.once("mina.stop." + P.id, (function() {
									e.off("mina.*." + P.id), delete v.anims[P.id]
								})), v
							}
						})), i.plugin((function(t, e, r, i, a) {
							var s = Object.prototype.toString,
								n = String,
								o = Math,
								h = "";

							function l(t, e, r, i, a, n) {
								if (null == e && "[object SVGMatrix]" == s.call(t)) return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f);
								null != t ? (this.a = +t, this.b = +e, this.c = +r, this.d = +i, this.e = +a, this.f = +n) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
							}! function(e) {
								function r(t) {
									return t[0] * t[0] + t[1] * t[1]
								}

								function i(t) {
									var e = o.sqrt(r(t));
									t[0] && (t[0] /= e), t[1] && (t[1] /= e)
								}
								e.add = function(t, e, r, i, a, s) {
									if (t && t instanceof l) return this.add(t.a, t.b, t.c, t.d, t.e, t.f);
									var n = t * this.a + e * this.c,
										o = t * this.b + e * this.d;
									return this.e += a * this.a + s * this.c, this.f += a * this.b + s * this.d, this.c = r * this.a + i * this.c, this.d = r * this.b + i * this.d, this.a = n, this.b = o, this
								}, l.prototype.multLeft = function(t, e, r, i, a, s) {
									if (t && t instanceof l) return this.multLeft(t.a, t.b, t.c, t.d, t.e, t.f);
									var n = t * this.a + r * this.b,
										o = t * this.c + r * this.d,
										h = t * this.e + r * this.f + a;
									return this.b = e * this.a + i * this.b, this.d = e * this.c + i * this.d, this.f = e * this.e + i * this.f + s, this.a = n, this.c = o, this.e = h, this
								}, e.invert = function() {
									var t = this,
										e = t.a * t.d - t.b * t.c;
									return new l(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
								}, e.clone = function() {
									return new l(this.a, this.b, this.c, this.d, this.e, this.f)
								}, e.translate = function(t, e) {
									return this.e += t * this.a + e * this.c, this.f += t * this.b + e * this.d, this
								}, e.scale = function(t, e, r, i) {
									return null == e && (e = t), (r || i) && this.translate(r, i), this.a *= t, this.b *= t, this.c *= e, this.d *= e, (r || i) && this.translate(-r, -i), this
								}, e.rotate = function(e, r, i) {
									e = t.rad(e), r = r || 0, i = i || 0;
									var a = +o.cos(e).toFixed(9),
										s = +o.sin(e).toFixed(9);
									return this.add(a, s, -s, a, r, i), this.add(1, 0, 0, 1, -r, -i)
								}, e.skewX = function(t) {
									return this.skew(t, 0)
								}, e.skewY = function(t) {
									return this.skew(0, t)
								}, e.skew = function(e, r) {
									e = e || 0, r = r || 0, e = t.rad(e), r = t.rad(r);
									var i = o.tan(e).toFixed(9),
										a = o.tan(r).toFixed(9);
									return this.add(1, a, i, 1, 0, 0)
								}, e.x = function(t, e) {
									return t * this.a + e * this.c + this.e
								}, e.y = function(t, e) {
									return t * this.b + e * this.d + this.f
								}, e.get = function(t) {
									return +this[n.fromCharCode(97 + t)].toFixed(4)
								}, e.toString = function() {
									return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
								}, e.offset = function() {
									return [this.e.toFixed(4), this.f.toFixed(4)]
								}, e.determinant = function() {
									return this.a * this.d - this.b * this.c
								}, e.split = function() {
									var e = {};
									e.dx = this.e, e.dy = this.f;
									var a = [
										[this.a, this.b],
										[this.c, this.d]
									];
									e.scalex = o.sqrt(r(a[0])), i(a[0]), e.shear = a[0][0] * a[1][0] + a[0][1] * a[1][1], a[1] = [a[1][0] - a[0][0] * e.shear, a[1][1] - a[0][1] * e.shear], e.scaley = o.sqrt(r(a[1])), i(a[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
									var s = a[0][1],
										n = a[1][1];
									return n < 0 ? (e.rotate = t.deg(o.acos(n)), s < 0 && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(o.asin(s)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
								}, e.toTransformString = function(t) {
									var e = t || this.split();
									return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : h) + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : h) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : h))
								}
							}(l.prototype), t.Matrix = l, t.matrix = function(t, e, r, i, a, s) {
								return new l(t, e, r, i, a, s)
							}
						})), i.plugin((function(t, r, i, a, s) {
							var n, o = t._.make,
								h = t._.wrap,
								l = t.is,
								p = t._.getSomeDefs,
								f = /^url\((['"]?)([^)]+)\1\)$/,
								c = t._.$,
								u = t.url,
								m = String,
								d = t._.separator,
								g = "";

							function y(i) {
								return function(a) {
									if (e.stop(), a instanceof s && 1 == a.node.childNodes.length && ("radialGradient" == a.node.firstChild.tagName || "linearGradient" == a.node.firstChild.tagName || "pattern" == a.node.firstChild.tagName) && (a = a.node.firstChild, p(this).appendChild(a), a = h(a)), a instanceof r)
										if ("radialGradient" == a.type || "linearGradient" == a.type || "pattern" == a.type) {
											a.node.id || c(a.node, {
												id: a.id
											});
											var n = u(a.node.id)
										} else n = a.attr(i);
									else if ((n = t.color(a)).error) {
										var o = t(p(this).ownerSVGElement).gradient(a);
										o ? (o.node.id || c(o.node, {
											id: o.id
										}), n = u(o.node.id)) : n = a
									} else n = m(n);
									var l = {};
									l[i] = n, c(this.node, l), this.node.style[i] = g
								}
							}
							t.deurl = function(t) {
								var e = String(t).match(f);
								return e ? e[2] : t
							}, e.on("snap.util.attr.mask", (function(t) {
								if (t instanceof r || t instanceof s) {
									if (e.stop(), t instanceof s && 1 == t.node.childNodes.length && (t = t.node.firstChild, p(this).appendChild(t), t = h(t)), "mask" == t.type) var i = t;
									else(i = o("mask", p(this))).node.appendChild(t.node);
									!i.node.id && c(i.node, {
										id: i.id
									}), c(this.node, {
										mask: u(i.id)
									})
								}
							})), n = function(t) {
								if (t instanceof r || t instanceof s) {
									e.stop();
									for (var i, a = t.node; a;) {
										if ("clipPath" === a.nodeName) {
											i = new r(a);
											break
										}
										if ("svg" === a.nodeName) {
											i = void 0;
											break
										}
										a = a.parentNode
									}
									i || ((i = o("clipPath", p(this))).node.appendChild(t.node), !i.node.id && c(i.node, {
										id: i.id
									})), c(this.node, {
										"clip-path": u(i.node.id || i.id)
									})
								}
							}, e.on("snap.util.attr.clip", n), e.on("snap.util.attr.clip-path", n), e.on("snap.util.attr.clipPath", n), e.on("snap.util.attr.fill", y("fill")), e.on("snap.util.attr.stroke", y("stroke"));
							var v = /^([lr])(?:\(([^)]*)\))?(.*)$/i;

							function b(t) {
								e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
							}

							function x(t) {
								for (var e = [], r = t.childNodes, i = 0, a = r.length; i < a; i++) {
									var s = r[i];
									3 == s.nodeType && e.push(s.nodeValue), "tspan" == s.tagName && (1 == s.childNodes.length && 3 == s.firstChild.nodeType ? e.push(s.firstChild.nodeValue) : e.push(x(s)))
								}
								return e
							}

							function E() {
								return e.stop(), this.node.style.fontSize
							}
							e.on("snap.util.grad.parse", (function(t) {
									var e = (t = m(t)).match(v);
									if (!e) return null;
									var r = e[1],
										i = e[2],
										a = e[3];
									1 == (i = i.split(/\s*,\s*/).map((function(t) {
										return +t == t ? +t : t
									}))).length && 0 == i[0] && (i = []);
									var s = (a = (a = a.split("-")).map((function(t) {
											var e = {
												color: (t = t.split(":"))[0]
											};
											return t[1] && (e.offset = parseFloat(t[1])), e
										}))).length,
										n = 0,
										o = 0;

									function h(t, e) {
										for (var r = (e - n) / (t - o), i = o; i < t; i++) a[i].offset = +(+n + r * (i - o)).toFixed(2);
										o = t, n = e
									}
									s--;
									for (var l = 0; l < s; l++) "offset" in a[l] && h(l, a[l].offset);
									return a[s].offset = a[s].offset || 100, h(s, a[s].offset), {
										type: r,
										params: i,
										stops: a
									}
								})), e.on("snap.util.attr.d", (function(r) {
									e.stop(), l(r, "array") && l(r[0], "array") && (r = t.path.toString.call(r)), (r = m(r)).match(/[ruo]/i) && (r = t.path.toAbsolute(r)), c(this.node, {
										d: r
									})
								}))(-1), e.on("snap.util.attr.#text", (function(t) {
									e.stop(), t = m(t);
									for (var r = a.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
									this.node.appendChild(r)
								}))(-1), e.on("snap.util.attr.path", (function(t) {
									e.stop(), this.attr({
										d: t
									})
								}))(-1), e.on("snap.util.attr.class", (function(t) {
									e.stop(), this.node.className.baseVal = t
								}))(-1), e.on("snap.util.attr.viewBox", (function(t) {
									var r;
									r = l(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : l(t, "array") ? t.join(" ") : t, c(this.node, {
										viewBox: r
									}), e.stop()
								}))(-1), e.on("snap.util.attr.transform", (function(t) {
									this.transform(t), e.stop()
								}))(-1), e.on("snap.util.attr.r", (function(t) {
									"rect" == this.type && (e.stop(), c(this.node, {
										rx: t,
										ry: t
									}))
								}))(-1), e.on("snap.util.attr.textpath", (function(t) {
									if (e.stop(), "text" == this.type) {
										var i, a, s;
										if (!t && this.textPath) {
											for (a = this.textPath; a.node.firstChild;) this.node.appendChild(a.node.firstChild);
											return a.remove(), void delete this.textPath
										}
										if (l(t, "string")) {
											var n = p(this),
												o = h(n.parentNode).path(t);
											n.appendChild(o.node), i = o.id, o.attr({
												id: i
											})
										} else(t = h(t)) instanceof r && ((i = t.attr("id")) || (i = t.id, t.attr({
											id: i
										})));
										if (i)
											if (a = this.textPath, s = this.node, a) a.attr({
												"xlink:href": "#" + i
											});
											else {
												for (a = c("textPath", {
														"xlink:href": "#" + i
													}); s.firstChild;) a.appendChild(s.firstChild);
												s.appendChild(a), this.textPath = h(a)
											}
									}
								}))(-1), e.on("snap.util.attr.text", (function(t) {
									if ("text" == this.type) {
										for (var r = this.node, i = function(t) {
												var e = c("tspan");
												if (l(t, "array"))
													for (var r = 0; r < t.length; r++) e.appendChild(i(t[r]));
												else e.appendChild(a.doc.createTextNode(t));
												return e.normalize && e.normalize(), e
											}; r.firstChild;) r.removeChild(r.firstChild);
										for (var s = i(t); s.firstChild;) r.appendChild(s.firstChild)
									}
									e.stop()
								}))(-1), e.on("snap.util.attr.fontSize", b)(-1), e.on("snap.util.attr.font-size", b)(-1), e.on("snap.util.getattr.transform", (function() {
									return e.stop(), this.transform()
								}))(-1), e.on("snap.util.getattr.textpath", (function() {
									return e.stop(), this.textPath
								}))(-1),
								function() {
									function r(r) {
										return function() {
											e.stop();
											var i = a.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + r);
											return "none" == i ? i : t(a.doc.getElementById(i.match(f)[1]))
										}
									}

									function i(t) {
										return function(r) {
											e.stop();
											var i = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
											if ("" != r && r) {
												if ("marker" == r.type) {
													var a = r.node.id;
													return a || c(r.node, {
														id: r.id
													}), void(this.node.style[i] = u(a))
												}
											} else this.node.style[i] = "none"
										}
									}
									e.on("snap.util.getattr.marker-end", r("end"))(-1), e.on("snap.util.getattr.markerEnd", r("end"))(-1), e.on("snap.util.getattr.marker-start", r("start"))(-1), e.on("snap.util.getattr.markerStart", r("start"))(-1), e.on("snap.util.getattr.marker-mid", r("mid"))(-1), e.on("snap.util.getattr.markerMid", r("mid"))(-1), e.on("snap.util.attr.marker-end", i("end"))(-1), e.on("snap.util.attr.markerEnd", i("end"))(-1), e.on("snap.util.attr.marker-start", i("start"))(-1), e.on("snap.util.attr.markerStart", i("start"))(-1), e.on("snap.util.attr.marker-mid", i("mid"))(-1), e.on("snap.util.attr.markerMid", i("mid"))(-1)
								}(), e.on("snap.util.getattr.r", (function() {
									if ("rect" == this.type && c(this.node, "rx") == c(this.node, "ry")) return e.stop(), c(this.node, "rx")
								}))(-1), e.on("snap.util.getattr.text", (function() {
									if ("text" == this.type || "tspan" == this.type) {
										e.stop();
										var t = x(this.node);
										return 1 == t.length ? t[0] : t
									}
								}))(-1), e.on("snap.util.getattr.#text", (function() {
									return this.node.textContent
								}))(-1), e.on("snap.util.getattr.fill", (function(r) {
									if (!r) {
										e.stop();
										var i = e("snap.util.getattr.fill", this, !0).firstDefined();
										return t(t.deurl(i)) || i
									}
								}))(-1), e.on("snap.util.getattr.stroke", (function(r) {
									if (!r) {
										e.stop();
										var i = e("snap.util.getattr.stroke", this, !0).firstDefined();
										return t(t.deurl(i)) || i
									}
								}))(-1), e.on("snap.util.getattr.viewBox", (function() {
									e.stop();
									var r = c(this.node, "viewBox");
									return r ? (r = r.split(d), t._.box(+r[0], +r[1], +r[2], +r[3])) : void 0
								}))(-1), e.on("snap.util.getattr.points", (function() {
									var t = c(this.node, "points");
									return e.stop(), t ? t.split(d) : void 0
								}))(-1), e.on("snap.util.getattr.path", (function() {
									var t = c(this.node, "d");
									return e.stop(), t
								}))(-1), e.on("snap.util.getattr.class", (function() {
									return this.node.className.baseVal
								}))(-1), e.on("snap.util.getattr.fontSize", E)(-1), e.on("snap.util.getattr.font-size", E)(-1)
						})), i.plugin((function(t, e, r, i, a) {
							var s = /\S+/g,
								n = String,
								o = e.prototype;
							o.addClass = function(t) {
								var e, r, i, a = n(t || "").match(s) || [],
									o = this.node,
									h = o.className.baseVal,
									l = h.match(s) || [];
								if (a.length) {
									for (e = 0; r = a[e++];) ~l.indexOf(r) || l.push(r);
									h != (i = l.join(" ")) && (o.className.baseVal = i)
								}
								return this
							}, o.removeClass = function(t) {
								var e, r, i, a, o = n(t || "").match(s) || [],
									h = this.node,
									l = h.className.baseVal,
									p = l.match(s) || [];
								if (p.length) {
									for (e = 0; i = o[e++];) ~(r = p.indexOf(i)) && p.splice(r, 1);
									l != (a = p.join(" ")) && (h.className.baseVal = a)
								}
								return this
							}, o.hasClass = function(t) {
								return !!~(this.node.className.baseVal.match(s) || []).indexOf(t)
							}, o.toggleClass = function(t, e) {
								if (null != e) return e ? this.addClass(t) : this.removeClass(t);
								var r, i, a, n, o = (t || "").match(s) || [],
									h = this.node,
									l = h.className.baseVal,
									p = l.match(s) || [];
								for (r = 0; a = o[r++];) ~(i = p.indexOf(a)) ? p.splice(i, 1) : p.push(a);
								return l != (n = p.join(" ")) && (h.className.baseVal = n), this
							}
						})), i.plugin((function(t, r, i, a, s) {
							var n = {
									"+": function(t, e) {
										return t + e
									},
									"-": function(t, e) {
										return t - e
									},
									"/": function(t, e) {
										return t / e
									},
									"*": function(t, e) {
										return t * e
									}
								},
								o = String,
								h = /[a-z]+$/i,
								l = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;

							function p(t) {
								return t
							}

							function f(t) {
								return function(e) {
									return +e.toFixed(3) + t
								}
							}
							e.on("snap.util.attr", (function(t) {
								var r = o(t).match(l);
								if (r) {
									var i = e.nt(),
										a = i.substring(i.lastIndexOf(".") + 1),
										s = this.attr(a),
										p = {};
									e.stop();
									var f = r[3] || "",
										c = s.match(h),
										u = n[r[1]];
									if (c && c == f ? t = u(parseFloat(s), +r[2]) : (s = this.asPX(a), t = u(this.asPX(a), this.asPX(a, r[2] + f))), isNaN(s) || isNaN(t)) return;
									p[a] = t, this.attr(p)
								}
							}))(-10), e.on("snap.util.equal", (function(t, r) {
								var i = o(this.attr(t) || ""),
									a = o(r).match(l);
								if (a) {
									e.stop();
									var s = a[3] || "",
										c = i.match(h),
										u = n[a[1]];
									return c && c == s ? {
										from: parseFloat(i),
										to: u(parseFloat(i), +a[2]),
										f: f(c)
									} : {
										from: i = this.asPX(t),
										to: u(i, this.asPX(t, a[2] + s)),
										f: p
									}
								}
							}))(-10)
						})), i.plugin((function(r, i, a, s, n) {
							var o = a.prototype,
								h = r.is;
							o.rect = function(t, e, r, i, a, s) {
								var n;
								return null == s && (s = a), h(t, "object") && "[object Object]" == t ? n = t : null != t && (n = {
									x: t,
									y: e,
									width: r,
									height: i
								}, null != a && (n.rx = a, n.ry = s)), this.el("rect", n)
							}, o.circle = function(t, e, r) {
								var i;
								return h(t, "object") && "[object Object]" == t ? i = t : null != t && (i = {
									cx: t,
									cy: e,
									r: r
								}), this.el("circle", i)
							};
							var l = function() {
								function t() {
									this.parentNode.removeChild(this)
								}
								return function(e, r) {
									var i = s.doc.createElement("img"),
										a = s.doc.body;
									i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function() {
										r.call(i), i.onload = i.onerror = null, a.removeChild(i)
									}, i.onerror = t, a.appendChild(i), i.src = e
								}
							}();
							o.image = function(t, e, i, a, s) {
									var n = this.el("image");
									if (h(t, "object") && "src" in t) n.attr(t);
									else if (null != t) {
										var o = {
											"xlink:href": t,
											preserveAspectRatio: "none"
										};
										null != e && null != i && (o.x = e, o.y = i), null != a && null != s ? (o.width = a, o.height = s) : l(t, (function() {
											r._.$(n.node, {
												width: this.offsetWidth,
												height: this.offsetHeight
											})
										})), r._.$(n.node, o)
									}
									return n
								}, o.ellipse = function(t, e, r, i) {
									var a;
									return h(t, "object") && "[object Object]" == t ? a = t : null != t && (a = {
										cx: t,
										cy: e,
										rx: r,
										ry: i
									}), this.el("ellipse", a)
								}, o.path = function(t) {
									var e;
									return h(t, "object") && !h(t, "array") ? e = t : t && (e = {
										d: t
									}), this.el("path", e)
								}, o.group = o.g = function(t) {
									var e = this.el("g");
									return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
								}, o.svg = function(t, e, r, i, a, s, n, o) {
									var l = {};
									return h(t, "object") && null == e ? l = t : (null != t && (l.x = t), null != e && (l.y = e), null != r && (l.width = r), null != i && (l.height = i), null != a && null != s && null != n && null != o && (l.viewBox = [a, s, n, o])), this.el("svg", l)
								}, o.mask = function(t) {
									var e = this.el("mask");
									return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
								}, o.ptrn = function(t, e, r, i, a, s, n, o) {
									if (h(t, "object")) var l = t;
									else l = {
										patternUnits: "userSpaceOnUse"
									}, t && (l.x = t), e && (l.y = e), null != r && (l.width = r), null != i && (l.height = i), l.viewBox = null != a && null != s && null != n && null != o ? [a, s, n, o] : [t || 0, e || 0, r || 0, i || 0];
									return this.el("pattern", l)
								}, o.use = function(t) {
									return null != t ? (t instanceof i && (t.attr("id") || t.attr({
										id: r._.id(t)
									}), t = t.attr("id")), "#" == String(t).charAt() && (t = t.substring(1)), this.el("use", {
										"xlink:href": "#" + t
									})) : i.prototype.use.call(this)
								}, o.symbol = function(t, e, r, i) {
									var a = {};
									return null != t && null != e && null != r && null != i && (a.viewBox = [t, e, r, i]), this.el("symbol", a)
								}, o.text = function(t, e, r) {
									var i = {};
									return h(t, "object") ? i = t : null != t && (i = {
										x: t,
										y: e,
										text: r || ""
									}), this.el("text", i)
								}, o.line = function(t, e, r, i) {
									var a = {};
									return h(t, "object") ? a = t : null != t && (a = {
										x1: t,
										x2: r,
										y1: e,
										y2: i
									}), this.el("line", a)
								}, o.polyline = function(t) {
									arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
									var e = {};
									return h(t, "object") && !h(t, "array") ? e = t : null != t && (e = {
										points: t
									}), this.el("polyline", e)
								}, o.polygon = function(t) {
									arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
									var e = {};
									return h(t, "object") && !h(t, "array") ? e = t : null != t && (e = {
										points: t
									}), this.el("polygon", e)
								},
								function() {
									var i = r._.$;

									function a() {
										return this.selectAll("stop")
									}

									function s(t, e) {
										var a = i("stop"),
											s = {
												offset: +e + "%"
											};
										t = r.color(t), s["stop-color"] = t.hex, t.opacity < 1 && (s["stop-opacity"] = t.opacity), i(a, s);
										for (var n, o = this.stops(), h = 0; h < o.length; h++)
											if (parseFloat(o[h].attr("offset")) > e) {
												this.node.insertBefore(a, o[h].node), n = !0;
												break
											} return n || this.node.appendChild(a), this
									}

									function n() {
										if ("linearGradient" == this.type) {
											var t = i(this.node, "x1") || 0,
												e = i(this.node, "x2") || 1,
												a = i(this.node, "y1") || 0,
												s = i(this.node, "y2") || 0;
											return r._.box(t, a, math.abs(e - t), math.abs(s - a))
										}
										var n = this.node.cx || .5,
											o = this.node.cy || .5,
											h = this.node.r || 0;
										return r._.box(n - h, o - h, 2 * h, 2 * h)
									}

									function h(t) {
										var i = t,
											a = this.stops();
										if ("string" == typeof t && (i = e("snap.util.grad.parse", null, "l(0,0,0,1)" + t).firstDefined().stops), r.is(i, "array")) {
											for (var s = 0; s < a.length; s++)
												if (i[s]) {
													var n = r.color(i[s].color),
														o = {
															offset: i[s].offset + "%"
														};
													o["stop-color"] = n.hex, n.opacity < 1 && (o["stop-opacity"] = n.opacity), a[s].attr(o)
												} else a[s].remove();
											for (s = a.length; s < i.length; s++) this.addStop(i[s].color, i[s].offset);
											return this
										}
									}

									function l(t, r) {
										var a, s = e("snap.util.grad.parse", null, r).firstDefined();
										if (!s) return null;
										s.params.unshift(t), a = "l" == s.type.toLowerCase() ? p.apply(0, s.params) : f.apply(0, s.params), s.type != s.type.toLowerCase() && i(a.node, {
											gradientUnits: "userSpaceOnUse"
										});
										for (var n = s.stops, o = n.length, h = 0; h < o; h++) {
											var l = n[h];
											a.addStop(l.color, l.offset)
										}
										return a
									}

									function p(t, e, o, l, p) {
										var f = r._.make("linearGradient", t);
										return f.stops = a, f.addStop = s, f.getBBox = n, f.setStops = h, null != e && i(f.node, {
											x1: e,
											y1: o,
											x2: l,
											y2: p
										}), f
									}

									function f(t, e, o, h, l, p) {
										var f = r._.make("radialGradient", t);
										return f.stops = a, f.addStop = s, f.getBBox = n, null != e && i(f.node, {
											cx: e,
											cy: o,
											r: h
										}), null != l && null != p && i(f.node, {
											fx: l,
											fy: p
										}), f
									}
									o.gradient = function(t) {
										return l(this.defs, t)
									}, o.gradientLinear = function(t, e, r, i) {
										return p(this.defs, t, e, r, i)
									}, o.gradientRadial = function(t, e, r, i, a) {
										return f(this.defs, t, e, r, i, a)
									}, o.toString = function() {
										var t, e = this.node.ownerDocument,
											i = e.createDocumentFragment(),
											a = e.createElement("div"),
											s = this.node.cloneNode(!0);
										return i.appendChild(a), a.appendChild(s), r._.$(s, {
											xmlns: "http://www.w3.org/2000/svg"
										}), t = a.innerHTML, i.removeChild(i.firstChild), t
									}, o.toDataURL = function() {
										if (t && t.btoa) return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)))
									}, o.clear = function() {
										for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : o.clear.call({
											node: e
										}), e = t
									}
								}()
						})), i.plugin((function(t, e, r, i) {
							var a = e.prototype,
								s = t.is,
								n = t._.clone,
								o = "hasOwnProperty",
								h = /,?([a-z]),?/gi,
								l = parseFloat,
								p = Math,
								f = p.PI,
								c = p.min,
								u = p.max,
								m = p.pow,
								d = p.abs;

							function g(t) {
								var e = g.ps = g.ps || {};
								return e[t] ? e[t].sleep = 100 : e[t] = {
									sleep: 100
								}, setTimeout((function() {
									for (var r in e) e[o](r) && r != t && (e[r].sleep--, !e[r].sleep && delete e[r])
								})), e[t]
							}

							function y(t, e, r, i) {
								return null == t && (t = e = r = i = 0), null == e && (e = t.y, r = t.width, i = t.height, t = t.x), {
									x: t,
									y: e,
									width: r,
									w: r,
									height: i,
									h: i,
									x2: t + r,
									y2: e + i,
									cx: t + r / 2,
									cy: e + i / 2,
									r1: p.min(r, i) / 2,
									r2: p.max(r, i) / 2,
									r0: p.sqrt(r * r + i * i) / 2,
									path: N(t, e, r, i),
									vb: [t, e, r, i].join(" ")
								}
							}

							function v() {
								return this.join(",").replace(h, "$1")
							}

							function b(t) {
								var e = n(t);
								return e.toString = v, e
							}

							function x(t, e, r, i, a, s, n, o, h) {
								return null == h ? D(t, e, r, i, a, s, n, o) : A(t, e, r, i, a, s, n, o, w(t, e, r, i, a, s, n, o, h))
							}

							function E(r, i) {
								function a(t) {
									return +(+t).toFixed(3)
								}
								return t._.cacher((function(t, s, n) {
									t instanceof e && (t = t.attr("d"));
									for (var o, h, l, p, f, c = "", u = {}, m = 0, d = 0, g = (t = $(t)).length; d < g; d++) {
										if ("M" == (l = t[d])[0]) o = +l[1], h = +l[2];
										else {
											if (m + (p = x(o, h, l[1], l[2], l[3], l[4], l[5], l[6])) > s) {
												if (i && !u.start) {
													if (c += ["C" + a((f = x(o, h, l[1], l[2], l[3], l[4], l[5], l[6], s - m)).start.x), a(f.start.y), a(f.m.x), a(f.m.y), a(f.x), a(f.y)], n) return c;
													u.start = c, c = ["M" + a(f.x), a(f.y) + "C" + a(f.n.x), a(f.n.y), a(f.end.x), a(f.end.y), a(l[5]), a(l[6])].join(), m += p, o = +l[5], h = +l[6];
													continue
												}
												if (!r && !i) return f = x(o, h, l[1], l[2], l[3], l[4], l[5], l[6], s - m)
											}
											m += p, o = +l[5], h = +l[6]
										}
										c += l.shift() + l
									}
									return u.end = c, f = r ? m : i ? u : A(o, h, l[0], l[1], l[2], l[3], l[4], l[5], 1)
								}), null, t._.clone)
							}
							var P = E(1),
								S = E(),
								C = E(0, 1);

							function A(t, e, r, i, a, s, n, o, h) {
								var l = 1 - h,
									c = m(l, 3),
									u = m(l, 2),
									d = h * h,
									g = d * h,
									y = t + 2 * h * (r - t) + d * (a - 2 * r + t),
									v = e + 2 * h * (i - e) + d * (s - 2 * i + e),
									b = r + 2 * h * (a - r) + d * (n - 2 * a + r),
									x = i + 2 * h * (s - i) + d * (o - 2 * s + i);
								return {
									x: c * t + 3 * u * h * r + 3 * l * h * h * a + g * n,
									y: c * e + 3 * u * h * i + 3 * l * h * h * s + g * o,
									m: {
										x: y,
										y: v
									},
									n: {
										x: b,
										y: x
									},
									start: {
										x: l * t + h * r,
										y: l * e + h * i
									},
									end: {
										x: l * a + h * n,
										y: l * s + h * o
									},
									alpha: 90 - 180 * p.atan2(y - b, v - x) / f
								}
							}

							function F(e, r, i, a, s, n, o, h) {
								t.is(e, "array") || (e = [e, r, i, a, s, n, o, h]);
								var l = U.apply(null, e);
								return y(l.min.x, l.min.y, l.max.x - l.min.x, l.max.y - l.min.y)
							}

							function _(t, e, r) {
								return e >= t.x && e <= t.x + t.width && r >= t.y && r <= t.y + t.height
							}

							function k(t, e) {
								return t = y(t), _(e = y(e), t.x, t.y) || _(e, t.x2, t.y) || _(e, t.x, t.y2) || _(e, t.x2, t.y2) || _(t, e.x, e.y) || _(t, e.x2, e.y) || _(t, e.x, e.y2) || _(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
							}

							function T(t, e, r, i, a) {
								return t * (t * (-3 * e + 9 * r - 9 * i + 3 * a) + 6 * e - 12 * r + 6 * i) - 3 * e + 3 * r
							}

							function D(t, e, r, i, a, s, n, o, h) {
								null == h && (h = 1);
								for (var l = (h = h > 1 ? 1 : h < 0 ? 0 : h) / 2, f = 12, c = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], u = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], m = 0, d = 0; d < f; d++) {
									var g = l * c[d] + l,
										y = T(g, t, r, a, n),
										v = T(g, e, i, s, o),
										b = y * y + v * v;
									m += u[d] * p.sqrt(b)
								}
								return l * m
							}

							function w(t, e, r, i, a, s, n, o, h) {
								if (!(h < 0 || D(t, e, r, i, a, s, n, o) < h)) {
									var l, p = 1,
										f = p / 2,
										c = p - f,
										u = .01;
									for (l = D(t, e, r, i, a, s, n, o, c); d(l - h) > u;) l = D(t, e, r, i, a, s, n, o, c += (l < h ? 1 : -1) * (f /= 2));
									return c
								}
							}

							function M(t, e, r, i, a, s, n, o) {
								if (!(u(t, r) < c(a, n) || c(t, r) > u(a, n) || u(e, i) < c(s, o) || c(e, i) > u(s, o))) {
									var h = (t - r) * (s - o) - (e - i) * (a - n);
									if (h) {
										var l = ((t * i - e * r) * (a - n) - (t - r) * (a * o - s * n)) / h,
											p = ((t * i - e * r) * (s - o) - (e - i) * (a * o - s * n)) / h,
											f = +l.toFixed(2),
											m = +p.toFixed(2);
										if (!(f < +c(t, r).toFixed(2) || f > +u(t, r).toFixed(2) || f < +c(a, n).toFixed(2) || f > +u(a, n).toFixed(2) || m < +c(e, i).toFixed(2) || m > +u(e, i).toFixed(2) || m < +c(s, o).toFixed(2) || m > +u(s, o).toFixed(2))) return {
											x: l,
											y: p
										}
									}
								}
							}

							function I(t, e, r) {
								if (!k(F(t), F(e))) return r ? 0 : [];
								for (var i = ~~(D.apply(0, t) / 8), a = ~~(D.apply(0, e) / 8), s = [], n = [], o = {}, h = r ? 0 : [], l = 0; l < i + 1; l++) {
									var p = A.apply(0, t.concat(l / i));
									s.push({
										x: p.x,
										y: p.y,
										t: l / i
									})
								}
								for (l = 0; l < a + 1; l++) p = A.apply(0, e.concat(l / a)), n.push({
									x: p.x,
									y: p.y,
									t: l / a
								});
								for (l = 0; l < i; l++)
									for (var f = 0; f < a; f++) {
										var c = s[l],
											u = s[l + 1],
											m = n[f],
											g = n[f + 1],
											y = d(u.x - c.x) < .001 ? "y" : "x",
											v = d(g.x - m.x) < .001 ? "y" : "x",
											b = M(c.x, c.y, u.x, u.y, m.x, m.y, g.x, g.y);
										if (b) {
											if (o[b.x.toFixed(4)] == b.y.toFixed(4)) continue;
											o[b.x.toFixed(4)] = b.y.toFixed(4);
											var x = c.t + d((b[y] - c[y]) / (u[y] - c[y])) * (u.t - c.t),
												E = m.t + d((b[v] - m[v]) / (g[v] - m[v])) * (g.t - m.t);
											x >= 0 && x <= 1 && E >= 0 && E <= 1 && (r ? h++ : h.push({
												x: b.x,
												y: b.y,
												t1: x,
												t2: E
											}))
										}
									}
								return h
							}

							function B(t, e) {
								return R(t, e)
							}

							function V(t, e) {
								return R(t, e, 1)
							}

							function R(t, e, r) {
								t = $(t), e = $(e);
								for (var i, a, s, n, o, h, l, p, f, c, u = r ? 0 : [], m = 0, d = t.length; m < d; m++) {
									var g = t[m];
									if ("M" == g[0]) i = o = g[1], a = h = g[2];
									else {
										"C" == g[0] ? (f = [i, a].concat(g.slice(1)), i = f[6], a = f[7]) : (f = [i, a, i, a, o, h, o, h], i = o, a = h);
										for (var y = 0, v = e.length; y < v; y++) {
											var b = e[y];
											if ("M" == b[0]) s = l = b[1], n = p = b[2];
											else {
												"C" == b[0] ? (c = [s, n].concat(b.slice(1)), s = c[6], n = c[7]) : (c = [s, n, s, n, l, p, l, p], s = l, n = p);
												var x = I(f, c, r);
												if (r) u += x;
												else {
													for (var E = 0, P = x.length; E < P; E++) x[E].segment1 = m, x[E].segment2 = y, x[E].bez1 = f, x[E].bez2 = c;
													u = u.concat(x)
												}
											}
										}
									}
								}
								return u
							}

							function L(t, e, r) {
								var i = G(t);
								return _(i, e, r) && R(t, [
									["M", e, r],
									["H", i.x2 + 10]
								], 1) % 2 == 1
							}

							function G(t) {
								var e = g(t);
								if (e.bbox) return n(e.bbox);
								if (!t) return y();
								for (var r, i = 0, a = 0, s = [], o = [], h = 0, l = (t = $(t)).length; h < l; h++)
									if ("M" == (r = t[h])[0]) i = r[1], a = r[2], s.push(i), o.push(a);
									else {
										var p = U(i, a, r[1], r[2], r[3], r[4], r[5], r[6]);
										s = s.concat(p.min.x, p.max.x), o = o.concat(p.min.y, p.max.y), i = r[5], a = r[6]
									} var f = c.apply(0, s),
									m = c.apply(0, o),
									d = y(f, m, u.apply(0, s) - f, u.apply(0, o) - m);
								return e.bbox = n(d), d
							}

							function N(t, e, r, i, a) {
								if (a) return [
									["M", +t + +a, e],
									["l", r - 2 * a, 0],
									["a", a, a, 0, 0, 1, a, a],
									["l", 0, i - 2 * a],
									["a", a, a, 0, 0, 1, -a, a],
									["l", 2 * a - r, 0],
									["a", a, a, 0, 0, 1, -a, -a],
									["l", 0, 2 * a - i],
									["a", a, a, 0, 0, 1, a, -a],
									["z"]
								];
								var s = [
									["M", t, e],
									["l", r, 0],
									["l", 0, i],
									["l", -r, 0],
									["z"]
								];
								return s.toString = v, s
							}

							function z(t, e, r, i, a) {
								if (null == a && null == i && (i = r), t = +t, e = +e, r = +r, i = +i, null != a) var s = Math.PI / 180,
									n = t + r * Math.cos(-i * s),
									o = t + r * Math.cos(-a * s),
									h = [
										["M", n, e + r * Math.sin(-i * s)],
										["A", r, r, 0, +(a - i > 180), 0, o, e + r * Math.sin(-a * s)]
									];
								else h = [
									["M", t, e],
									["m", 0, -i],
									["a", r, i, 0, 1, 1, 0, 2 * i],
									["a", r, i, 0, 1, 1, 0, -2 * i],
									["z"]
								];
								return h.toString = v, h
							}
							var O = t._unit2px,
								H = {
									path: function(t) {
										return t.attr("path")
									},
									circle: function(t) {
										var e = O(t);
										return z(e.cx, e.cy, e.r)
									},
									ellipse: function(t) {
										var e = O(t);
										return z(e.cx || 0, e.cy || 0, e.rx, e.ry)
									},
									rect: function(t) {
										var e = O(t);
										return N(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
									},
									image: function(t) {
										var e = O(t);
										return N(e.x || 0, e.y || 0, e.width, e.height)
									},
									line: function(t) {
										return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
									},
									polyline: function(t) {
										return "M" + t.attr("points")
									},
									polygon: function(t) {
										return "M" + t.attr("points") + "z"
									},
									deflt: function(t) {
										var e = t.node.getBBox();
										return N(e.x, e.y, e.width, e.height)
									}
								};

							function j(e) {
								var r = g(e),
									i = String.prototype.toLowerCase;
								if (r.rel) return b(r.rel);
								t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
								var a = [],
									s = 0,
									n = 0,
									o = 0,
									h = 0,
									l = 0;
								"M" == e[0][0] && (o = s = e[0][1], h = n = e[0][2], l++, a.push(["M", s, n]));
								for (var p = l, f = e.length; p < f; p++) {
									var c = a[p] = [],
										u = e[p];
									if (u[0] != i.call(u[0])) switch (c[0] = i.call(u[0]), c[0]) {
										case "a":
											c[1] = u[1], c[2] = u[2], c[3] = u[3], c[4] = u[4], c[5] = u[5], c[6] = +(u[6] - s).toFixed(3), c[7] = +(u[7] - n).toFixed(3);
											break;
										case "v":
											c[1] = +(u[1] - n).toFixed(3);
											break;
										case "m":
											o = u[1], h = u[2];
										default:
											for (var m = 1, d = u.length; m < d; m++) c[m] = +(u[m] - (m % 2 ? s : n)).toFixed(3)
									} else {
										c = a[p] = [], "m" == u[0] && (o = u[1] + s, h = u[2] + n);
										for (var y = 0, x = u.length; y < x; y++) a[p][y] = u[y]
									}
									var E = a[p].length;
									switch (a[p][0]) {
										case "z":
											s = o, n = h;
											break;
										case "h":
											s += +a[p][E - 1];
											break;
										case "v":
											n += +a[p][E - 1];
											break;
										default:
											s += +a[p][E - 2], n += +a[p][E - 1]
									}
								}
								return a.toString = v, r.rel = b(a), a
							}

							function q(e) {
								var r = g(e);
								if (r.abs) return b(r.abs);
								if (s(e, "array") && s(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [
									["M", 0, 0]
								];
								var i, a = [],
									n = 0,
									o = 0,
									h = 0,
									l = 0,
									p = 0;
								"M" == e[0][0] && (h = n = +e[0][1], l = o = +e[0][2], p++, a[0] = ["M", n, o]);
								for (var f, c, u = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), m = p, d = e.length; m < d; m++) {
									if (a.push(f = []), (i = (c = e[m])[0]) != i.toUpperCase()) switch (f[0] = i.toUpperCase(), f[0]) {
											case "A":
												f[1] = c[1], f[2] = c[2], f[3] = c[3], f[4] = c[4], f[5] = c[5], f[6] = +c[6] + n, f[7] = +c[7] + o;
												break;
											case "V":
												f[1] = +c[1] + o;
												break;
											case "H":
												f[1] = +c[1] + n;
												break;
											case "R":
												for (var y = [n, o].concat(c.slice(1)), x = 2, E = y.length; x < E; x++) y[x] = +y[x] + n, y[++x] = +y[x] + o;
												a.pop(), a = a.concat(Z(y, u));
												break;
											case "O":
												a.pop(), (y = z(n, o, c[1], c[2])).push(y[0]), a = a.concat(y);
												break;
											case "U":
												a.pop(), a = a.concat(z(n, o, c[1], c[2], c[3])), f = ["U"].concat(a[a.length - 1].slice(-2));
												break;
											case "M":
												h = +c[1] + n, l = +c[2] + o;
											default:
												for (x = 1, E = c.length; x < E; x++) f[x] = +c[x] + (x % 2 ? n : o)
										} else if ("R" == i) y = [n, o].concat(c.slice(1)), a.pop(), a = a.concat(Z(y, u)), f = ["R"].concat(c.slice(-2));
										else if ("O" == i) a.pop(), (y = z(n, o, c[1], c[2])).push(y[0]), a = a.concat(y);
									else if ("U" == i) a.pop(), a = a.concat(z(n, o, c[1], c[2], c[3])), f = ["U"].concat(a[a.length - 1].slice(-2));
									else
										for (var P = 0, S = c.length; P < S; P++) f[P] = c[P];
									if ("O" != (i = i.toUpperCase())) switch (f[0]) {
										case "Z":
											n = +h, o = +l;
											break;
										case "H":
											n = f[1];
											break;
										case "V":
											o = f[1];
											break;
										case "M":
											h = f[f.length - 2], l = f[f.length - 1];
										default:
											n = f[f.length - 2], o = f[f.length - 1]
									}
								}
								return a.toString = v, r.abs = b(a), a
							}

							function W(t, e, r, i) {
								return [t, e, r, i, r, i]
							}

							function X(t, e, r, i, a, s) {
								var n = 1 / 3,
									o = 2 / 3;
								return [n * t + o * r, n * e + o * i, n * a + o * r, n * s + o * i, a, s]
							}

							function Y(e, r, i, a, s, n, o, h, l, c) {
								var u, m = 120 * f / 180,
									g = f / 180 * (+s || 0),
									y = [],
									v = t._.cacher((function(t, e, r) {
										return {
											x: t * p.cos(r) - e * p.sin(r),
											y: t * p.sin(r) + e * p.cos(r)
										}
									}));
								if (!i || !a) return [e, r, h, l, h, l];
								if (c) _ = c[0], k = c[1], A = c[2], F = c[3];
								else {
									e = (u = v(e, r, -g)).x, r = u.y, h = (u = v(h, l, -g)).x, l = u.y, p.cos(f / 180 * s), p.sin(f / 180 * s);
									var b = (e - h) / 2,
										x = (r - l) / 2,
										E = b * b / (i * i) + x * x / (a * a);
									E > 1 && (i *= E = p.sqrt(E), a *= E);
									var P = i * i,
										S = a * a,
										C = (n == o ? -1 : 1) * p.sqrt(d((P * S - P * x * x - S * b * b) / (P * x * x + S * b * b))),
										A = C * i * x / a + (e + h) / 2,
										F = C * -a * b / i + (r + l) / 2,
										_ = p.asin(((r - F) / a).toFixed(9)),
										k = p.asin(((l - F) / a).toFixed(9));
									(_ = e < A ? f - _ : _) < 0 && (_ = 2 * f + _), (k = h < A ? f - k : k) < 0 && (k = 2 * f + k), o && _ > k && (_ -= 2 * f), !o && k > _ && (k -= 2 * f)
								}
								var T = k - _;
								if (d(T) > m) {
									var D = k,
										w = h,
										M = l;
									k = _ + m * (o && k > _ ? 1 : -1), y = Y(h = A + i * p.cos(k), l = F + a * p.sin(k), i, a, s, 0, o, w, M, [k, D, A, F])
								}
								T = k - _;
								var I = p.cos(_),
									B = p.sin(_),
									V = p.cos(k),
									R = p.sin(k),
									L = p.tan(T / 4),
									G = 4 / 3 * i * L,
									N = 4 / 3 * a * L,
									z = [e, r],
									O = [e + G * B, r - N * I],
									H = [h + G * R, l - N * V],
									j = [h, l];
								if (O[0] = 2 * z[0] - O[0], O[1] = 2 * z[1] - O[1], c) return [O, H, j].concat(y);
								for (var q = [], W = 0, X = (y = [O, H, j].concat(y).join().split(",")).length; W < X; W++) q[W] = W % 2 ? v(y[W - 1], y[W], g).y : v(y[W], y[W + 1], g).x;
								return q
							}

							function U(t, e, r, i, a, s, n, o) {
								for (var h, l, f, m, g, y, v, b, x = [], E = [
										[],
										[]
									], P = 0; P < 2; ++P)
									if (0 == P ? (l = 6 * t - 12 * r + 6 * a, h = -3 * t + 9 * r - 9 * a + 3 * n, f = 3 * r - 3 * t) : (l = 6 * e - 12 * i + 6 * s, h = -3 * e + 9 * i - 9 * s + 3 * o, f = 3 * i - 3 * e), d(h) < 1e-12) {
										if (d(l) < 1e-12) continue;
										0 < (m = -f / l) && m < 1 && x.push(m)
									} else v = l * l - 4 * f * h, b = p.sqrt(v), v < 0 || (0 < (g = (-l + b) / (2 * h)) && g < 1 && x.push(g), 0 < (y = (-l - b) / (2 * h)) && y < 1 && x.push(y));
								for (var S, C = x.length, A = C; C--;) S = 1 - (m = x[C]), E[0][C] = S * S * S * t + 3 * S * S * m * r + 3 * S * m * m * a + m * m * m * n, E[1][C] = S * S * S * e + 3 * S * S * m * i + 3 * S * m * m * s + m * m * m * o;
								return E[0][A] = t, E[1][A] = e, E[0][A + 1] = n, E[1][A + 1] = o, E[0].length = E[1].length = A + 2, {
									min: {
										x: c.apply(0, E[0]),
										y: c.apply(0, E[1])
									},
									max: {
										x: u.apply(0, E[0]),
										y: u.apply(0, E[1])
									}
								}
							}

							function $(t, e) {
								var r = !e && g(t);
								if (!e && r.curve) return b(r.curve);
								for (var i = q(t), a = e && q(e), s = {
										x: 0,
										y: 0,
										bx: 0,
										by: 0,
										X: 0,
										Y: 0,
										qx: null,
										qy: null
									}, n = {
										x: 0,
										y: 0,
										bx: 0,
										by: 0,
										X: 0,
										Y: 0,
										qx: null,
										qy: null
									}, o = function(t, e, r) {
										var i, a;
										if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
										switch (!(t[0] in {
												T: 1,
												Q: 1
											}) && (e.qx = e.qy = null), t[0]) {
											case "M":
												e.X = t[1], e.Y = t[2];
												break;
											case "A":
												t = ["C"].concat(Y.apply(0, [e.x, e.y].concat(t.slice(1))));
												break;
											case "S":
												"C" == r || "S" == r ? (i = 2 * e.x - e.bx, a = 2 * e.y - e.by) : (i = e.x, a = e.y), t = ["C", i, a].concat(t.slice(1));
												break;
											case "T":
												"Q" == r || "T" == r ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(X(e.x, e.y, e.qx, e.qy, t[1], t[2]));
												break;
											case "Q":
												e.qx = t[1], e.qy = t[2], t = ["C"].concat(X(e.x, e.y, t[1], t[2], t[3], t[4]));
												break;
											case "L":
												t = ["C"].concat(W(e.x, e.y, t[1], t[2]));
												break;
											case "H":
												t = ["C"].concat(W(e.x, e.y, t[1], e.y));
												break;
											case "V":
												t = ["C"].concat(W(e.x, e.y, e.x, t[1]));
												break;
											case "Z":
												t = ["C"].concat(W(e.x, e.y, e.X, e.Y))
										}
										return t
									}, h = function(t, e) {
										if (t[e].length > 7) {
											t[e].shift();
											for (var r = t[e]; r.length;) f[e] = "A", a && (c[e] = "A"), t.splice(e++, 0, ["C"].concat(r.splice(0, 6)));
											t.splice(e, 1), v = u(i.length, a && a.length || 0)
										}
									}, p = function(t, e, r, s, n) {
										t && e && "M" == t[n][0] && "M" != e[n][0] && (e.splice(n, 0, ["M", s.x, s.y]), r.bx = 0, r.by = 0, r.x = t[n][1], r.y = t[n][2], v = u(i.length, a && a.length || 0))
									}, f = [], c = [], m = "", d = "", y = 0, v = u(i.length, a && a.length || 0); y < v; y++) {
									i[y] && (m = i[y][0]), "C" != m && (f[y] = m, y && (d = f[y - 1])), i[y] = o(i[y], s, d), "A" != f[y] && "C" == m && (f[y] = "C"), h(i, y), a && (a[y] && (m = a[y][0]), "C" != m && (c[y] = m, y && (d = c[y - 1])), a[y] = o(a[y], n, d), "A" != c[y] && "C" == m && (c[y] = "C"), h(a, y)), p(i, a, s, n, y), p(a, i, n, s, y);
									var x = i[y],
										E = a && a[y],
										P = x.length,
										S = a && E.length;
									s.x = x[P - 2], s.y = x[P - 1], s.bx = l(x[P - 4]) || s.x, s.by = l(x[P - 3]) || s.y, n.bx = a && (l(E[S - 4]) || n.x), n.by = a && (l(E[S - 3]) || n.y), n.x = a && E[S - 2], n.y = a && E[S - 1]
								}
								return a || (r.curve = b(i)), a ? [i, a] : i
							}

							function K(t, e) {
								if (!e) return t;
								var r, i, a, s, n, o, h;
								for (a = 0, n = (t = $(t)).length; a < n; a++)
									for (s = 1, o = (h = t[a]).length; s < o; s += 2) r = e.x(h[s], h[s + 1]), i = e.y(h[s], h[s + 1]), h[s] = r, h[s + 1] = i;
								return t
							}

							function Z(t, e) {
								for (var r = [], i = 0, a = t.length; a - 2 * !e > i; i += 2) {
									var s = [{
										x: +t[i - 2],
										y: +t[i - 1]
									}, {
										x: +t[i],
										y: +t[i + 1]
									}, {
										x: +t[i + 2],
										y: +t[i + 3]
									}, {
										x: +t[i + 4],
										y: +t[i + 5]
									}];
									e ? i ? a - 4 == i ? s[3] = {
										x: +t[0],
										y: +t[1]
									} : a - 2 == i && (s[2] = {
										x: +t[0],
										y: +t[1]
									}, s[3] = {
										x: +t[2],
										y: +t[3]
									}) : s[0] = {
										x: +t[a - 2],
										y: +t[a - 1]
									} : a - 4 == i ? s[3] = s[2] : i || (s[0] = {
										x: +t[i],
										y: +t[i + 1]
									}), r.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y])
								}
								return r
							}
							t.path = g, t.path.getTotalLength = P, t.path.getPointAtLength = S, t.path.getSubpath = function(t, e, r) {
								if (this.getTotalLength(t) - r < 1e-6) return C(t, e).end;
								var i = C(t, r, 1);
								return e ? C(i, e).end : i
							}, a.getTotalLength = function() {
								if (this.node.getTotalLength) return this.node.getTotalLength()
							}, a.getPointAtLength = function(t) {
								return S(this.attr("d"), t)
							}, a.getSubpath = function(e, r) {
								return t.path.getSubpath(this.attr("d"), e, r)
							}, t._.box = y, t.path.findDotsAtSegment = A, t.path.bezierBBox = F, t.path.isPointInsideBBox = _, t.closest = function(e, r, i, a) {
								for (var s = 100, n = y(e - s / 2, r - s / 2, s, s), o = [], h = i[0].hasOwnProperty("x") ? function(t) {
										return {
											x: i[t].x,
											y: i[t].y
										}
									} : function(t) {
										return {
											x: i[t],
											y: a[t]
										}
									}, l = 0; s <= 1e6 && !l;) {
									for (var p = 0, f = i.length; p < f; p++) {
										var c = h(p);
										if (_(n, c.x, c.y)) {
											l++, o.push(c);
											break
										}
									}
									l || (n = y(e - (s *= 2) / 2, r - s / 2, s, s))
								}
								if (1e6 != s) {
									var u, m = 1 / 0;
									for (p = 0, f = o.length; p < f; p++) {
										var d = t.len(e, r, o[p].x, o[p].y);
										m > d && (m = d, o[p].len = d, u = o[p])
									}
									return u
								}
							}, t.path.isBBoxIntersect = k, t.path.intersection = B, t.path.intersectionNumber = V, t.path.isPointInside = L, t.path.getBBox = G, t.path.get = H, t.path.toRelative = j, t.path.toAbsolute = q, t.path.toCubic = $, t.path.map = K, t.path.toString = v, t.path.clone = b
						})), i.plugin((function(t, i, a, s) {
							var n = Math.max,
								o = Math.min,
								h = function(t) {
									if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t)
										for (var e = 0, r = t.length; e < r; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
								},
								l = h.prototype;
							l.push = function() {
								for (var t, e, r = 0, i = arguments.length; r < i; r++)(t = arguments[r]) && (this[e = this.items.length] = this.items[e] = t, this.length++);
								return this
							}, l.pop = function() {
								return this.length && delete this[this.length--], this.items.pop()
							}, l.forEach = function(t, e) {
								for (var r = 0, i = this.items.length; r < i; r++)
									if (!1 === t.call(e, this.items[r], r)) return this;
								return this
							}, l.animate = function(i, a, s, n) {
								"function" != typeof s || s.length || (n = s, s = r.linear), i instanceof t._.Animation && (n = i.callback, s = i.easing, a = s.dur, i = i.attr);
								var o = arguments;
								if (t.is(i, "array") && t.is(o[o.length - 1], "array")) var h = !0;
								var l, p = function() {
										l ? this.b = l : l = this.b
									},
									f = 0,
									c = this,
									u = n && function() {
										++f == c.length && n.call(this)
									};
								return this.forEach((function(t, r) {
									e.once("snap.animcreated." + t.id, p), h ? o[r] && t.animate.apply(t, o[r]) : t.animate(i, a, s, u)
								}))
							}, l.remove = function() {
								for (; this.length;) this.pop().remove();
								return this
							}, l.bind = function(t, e, r) {
								var i = {};
								if ("function" == typeof e) this.bindings[t] = e;
								else {
									var a = r || t;
									this.bindings[t] = function(t) {
										i[a] = t, e.attr(i)
									}
								}
								return this
							}, l.attr = function(t) {
								var e = {};
								for (var r in t) this.bindings[r] ? this.bindings[r](t[r]) : e[r] = t[r];
								for (var i = 0, a = this.items.length; i < a; i++) this.items[i].attr(e);
								return this
							}, l.clear = function() {
								for (; this.length;) this.pop()
							}, l.splice = function(t, e, r) {
								t = t < 0 ? n(this.length + t, 0) : t, e = n(0, o(this.length - t, e));
								var i, a = [],
									s = [],
									l = [];
								for (i = 2; i < arguments.length; i++) l.push(arguments[i]);
								for (i = 0; i < e; i++) s.push(this[t + i]);
								for (; i < this.length - t; i++) a.push(this[t + i]);
								var p = l.length;
								for (i = 0; i < p + a.length; i++) this.items[t + i] = this[t + i] = i < p ? l[i] : a[i - p];
								for (i = this.items.length = this.length -= e - p; this[i];) delete this[i++];
								return new h(s)
							}, l.exclude = function(t) {
								for (var e = 0, r = this.length; e < r; e++)
									if (this[e] == t) return this.splice(e, 1), !0;
								return !1
							}, l.insertAfter = function(t) {
								for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
								return this
							}, l.getBBox = function() {
								for (var t = [], e = [], r = [], i = [], a = this.items.length; a--;)
									if (!this.items[a].removed) {
										var s = this.items[a].getBBox();
										t.push(s.x), e.push(s.y), r.push(s.x + s.width), i.push(s.y + s.height)
									} return {
									x: t = o.apply(0, t),
									y: e = o.apply(0, e),
									x2: r = n.apply(0, r),
									y2: i = n.apply(0, i),
									width: r - t,
									height: i - e,
									cx: t + (r - t) / 2,
									cy: e + (i - e) / 2
								}
							}, l.clone = function(t) {
								t = new h;
								for (var e = 0, r = this.items.length; e < r; e++) t.push(this.items[e].clone());
								return t
							}, l.toString = function() {
								return "Snap‘s set"
							}, l.type = "set", t.Set = h, t.set = function() {
								var t = new h;
								return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
							}
						})), i.plugin((function(t, r, i, a) {
							var s = {},
								n = /[%a-z]+$/i,
								o = String;

							function h(t) {
								var e = t[0];
								switch (e.toLowerCase()) {
									case "t":
										return [e, 0, 0];
									case "m":
										return [e, 1, 0, 0, 1, 0, 0];
									case "r":
										return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
									case "s":
										return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
								}
							}

							function l(e, r, i) {
								e = e || new t.Matrix, r = r || new t.Matrix, e = t.parseTransformString(e.toTransformString()) || [], r = t.parseTransformString(r.toTransformString()) || [];
								for (var a, s, n, o, l = Math.max(e.length, r.length), p = [], f = [], c = 0; c < l; c++) {
									if (n = e[c] || h(r[c]), o = r[c] || h(n), n[0] != o[0] || "r" == n[0].toLowerCase() && (n[2] != o[2] || n[3] != o[3]) || "s" == n[0].toLowerCase() && (n[3] != o[3] || n[4] != o[4])) {
										e = t._.transform2matrix(e, i()), r = t._.transform2matrix(r, i()), p = [
											["m", e.a, e.b, e.c, e.d, e.e, e.f]
										], f = [
											["m", r.a, r.b, r.c, r.d, r.e, r.f]
										];
										break
									}
									for (p[c] = [], f[c] = [], a = 0, s = Math.max(n.length, o.length); a < s; a++) a in n && (p[c][a] = n[a]), a in o && (f[c][a] = o[a])
								}
								return {
									from: d(p),
									to: d(f),
									f: m(p)
								}
							}

							function p(t) {
								return t
							}

							function f(t) {
								return function(e) {
									return +e.toFixed(3) + t
								}
							}

							function c(t) {
								return t.join(" ")
							}

							function u(e) {
								return t.rgb(e[0], e[1], e[2], e[3])
							}

							function m(t) {
								var e, r, i, a, s, n, o = 0,
									h = [];
								for (e = 0, r = t.length; e < r; e++) {
									for (s = "[", n = ['"' + t[e][0] + '"'], i = 1, a = t[e].length; i < a; i++) n[i] = "val[" + o++ + "]";
									s += n + "]", h[e] = s
								}
								return Function("val", "return Snap.path.toString.call([" + h + "])")
							}

							function d(t) {
								for (var e = [], r = 0, i = t.length; r < i; r++)
									for (var a = 1, s = t[r].length; a < s; a++) e.push(t[r][a]);
								return e
							}

							function g(t) {
								return isFinite(t)
							}

							function y(e, r) {
								return !(!t.is(e, "array") || !t.is(r, "array")) && e.toString() == r.toString()
							}
							s.stroke = s.fill = "colour", r.prototype.equal = function(t, r) {
								return e("snap.util.equal", this, t, r).firstDefined()
							}, e.on("snap.util.equal", (function(e, r) {
								var i, a, h = o(this.attr(e) || ""),
									v = this;
								if ("colour" == s[e]) return i = t.color(h), a = t.color(r), {
									from: [i.r, i.g, i.b, i.opacity],
									to: [a.r, a.g, a.b, a.opacity],
									f: u
								};
								if ("viewBox" == e) return {
									from: i = this.attr(e).vb.split(" ").map(Number),
									to: a = r.split(" ").map(Number),
									f: c
								};
								if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return "string" == typeof r && (r = o(r).replace(/\.{3}|\u2026/g, h)), l(h = this.matrix, r = t._.rgTransform.test(r) ? t._.transform2matrix(r, this.getBBox()) : t._.transform2matrix(t._.svgTransform2string(r), this.getBBox()), (function() {
									return v.getBBox(1)
								}));
								if ("d" == e || "path" == e) return {
									from: d((i = t.path.toCubic(h, r))[0]),
									to: d(i[1]),
									f: m(i[0])
								};
								if ("points" == e) return {
									from: i = o(h).split(t._.separator),
									to: a = o(r).split(t._.separator),
									f: function(t) {
										return t
									}
								};
								if (g(h) && g(r)) return {
									from: parseFloat(h),
									to: parseFloat(r),
									f: p
								};
								var b = h.match(n),
									x = o(r).match(n);
								return b && y(b, x) ? {
									from: parseFloat(h),
									to: parseFloat(r),
									f: f(b)
								} : {
									from: this.asPX(e),
									to: this.asPX(e, r),
									f: p
								}
							}))
						})), i.plugin((function(t, r, i, a) {
							for (var s = r.prototype, n = "hasOwnProperty", o = ("createTouch" in a.doc), h = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], l = {
									mousedown: "touchstart",
									mousemove: "touchmove",
									mouseup: "touchend"
								}, p = function(t, e) {
									var r = "y" == t ? "scrollTop" : "scrollLeft",
										i = e && e.node ? e.node.ownerDocument : a.doc;
									return i[r in i.documentElement ? "documentElement" : "body"][r]
								}, f = function() {
									return this.originalEvent.preventDefault()
								}, c = function() {
									return this.originalEvent.stopPropagation()
								}, u = function(t, e, r, i) {
									var a = o && l[e] ? l[e] : e,
										s = function(a) {
											var s = p("y", i),
												h = p("x", i);
											if (o && l[n](e))
												for (var u = 0, m = a.targetTouches && a.targetTouches.length; u < m; u++)
													if (a.targetTouches[u].target == t || t.contains(a.targetTouches[u].target)) {
														var d = a;
														(a = a.targetTouches[u]).originalEvent = d, a.preventDefault = f, a.stopPropagation = c;
														break
													} var g = a.clientX + h,
												y = a.clientY + s;
											return r.call(i, a, g, y)
										};
									return e !== a && t.addEventListener(e, s, !1), t.addEventListener(a, s, !1),
										function() {
											return e !== a && t.removeEventListener(e, s, !1), t.removeEventListener(a, s, !1), !0
										}
								}, m = [], d = function(t) {
									for (var r, i = t.clientX, a = t.clientY, s = p("y"), n = p("x"), h = m.length; h--;) {
										if (r = m[h], o) {
											for (var l, f = t.touches && t.touches.length; f--;)
												if ((l = t.touches[f]).identifier == r.el._drag.id || r.el.node.contains(l.target)) {
													i = l.clientX, a = l.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
													break
												}
										} else t.preventDefault();
										var c = r.el.node;
										c.nextSibling, c.parentNode, c.style.display, i += n, a += s, e("snap.drag.move." + r.el.id, r.move_scope || r.el, i - r.el._drag.x, a - r.el._drag.y, i, a, t)
									}
								}, g = function(r) {
									t.unmousemove(d).unmouseup(g);
									for (var i, a = m.length; a--;)(i = m[a]).el._drag = {}, e("snap.drag.end." + i.el.id, i.end_scope || i.start_scope || i.move_scope || i.el, r), e.off("snap.drag.*." + i.el.id);
									m = []
								}, y = h.length; y--;) ! function(e) {
								t[e] = s[e] = function(r, i) {
									if (t.is(r, "function")) this.events = this.events || [], this.events.push({
										name: e,
										f: r,
										unbind: u(this.node || document, e, r, i || this)
									});
									else
										for (var a = 0, s = this.events.length; a < s; a++)
											if (this.events[a].name == e) try {
												this.events[a].f.call(this)
											} catch (t) {}
									return this
								}, t["un" + e] = s["un" + e] = function(t) {
									for (var r = this.events || [], i = r.length; i--;)
										if (r[i].name == e && (r[i].f == t || !t)) return r[i].unbind(), r.splice(i, 1), !r.length && delete this.events, this;
									return this
								}
							}(h[y]);
							s.hover = function(t, e, r, i) {
								return this.mouseover(t, r).mouseout(e, i || r)
							}, s.unhover = function(t, e) {
								return this.unmouseover(t).unmouseout(e)
							};
							var v = [];
							s.drag = function(r, i, a, s, n, o) {
								var h, l = this;
								if (!arguments.length) return l.drag((function(t, e) {
									this.attr({
										transform: h + (h ? "T" : "t") + [t, e]
									})
								}), (function() {
									h = this.transform().local
								}));

								function p(h, p, f) {
									(h.originalEvent || h).preventDefault(), l._drag.x = p, l._drag.y = f, l._drag.id = h.identifier, !m.length && t.mousemove(d).mouseup(g), m.push({
										el: l,
										move_scope: s,
										start_scope: n,
										end_scope: o
									}), i && e.on("snap.drag.start." + l.id, i), r && e.on("snap.drag.move." + l.id, r), a && e.on("snap.drag.end." + l.id, a), e("snap.drag.start." + l.id, n || s || l, p, f, h)
								}

								function f(t, r, i) {
									e("snap.draginit." + l.id, l, t, r, i)
								}
								return e.on("snap.draginit." + l.id, p), l._drag = {}, v.push({
									el: l,
									start: p,
									init: f
								}), l.mousedown(f), l
							}, s.undrag = function() {
								for (var r = v.length; r--;) v[r].el == this && (this.unmousedown(v[r].init), v.splice(r, 1), e.unbind("snap.drag.*." + this.id), e.unbind("snap.draginit." + this.id));
								return !v.length && t.unmousemove(d).unmouseup(g), this
							}
						})), i.plugin((function(t, r, i, a) {
							r.prototype;
							var s = i.prototype,
								n = /^\s*url\((.+)\)/,
								o = String,
								h = t._.$;
							t.filter = {}, s.filter = function(e) {
								var i = this;
								"svg" != i.type && (i = i.paper);
								var a = t.parse(o(e)),
									s = t._.id(),
									n = (i.node.offsetWidth, i.node.offsetHeight, h("filter"));
								return h(n, {
									id: s,
									filterUnits: "userSpaceOnUse"
								}), n.appendChild(a.node), i.defs.appendChild(n), new r(n)
							}, e.on("snap.util.getattr.filter", (function() {
								e.stop();
								var r = h(this.node, "filter");
								if (r) {
									var i = o(r).match(n);
									return i && t.select(i[1])
								}
							})), e.on("snap.util.attr.filter", (function(i) {
								if (i instanceof r && "filter" == i.type) {
									e.stop();
									var a = i.node.id;
									a || (h(i.node, {
										id: i.id
									}), a = i.id), h(this.node, {
										filter: t.url(a)
									})
								}
								i && "none" != i || (e.stop(), this.node.removeAttribute("filter"))
							})), t.filter.blur = function(e, r) {
								null == e && (e = 2);
								var i = null == r ? e : [e, r];
								return t.format('<feGaussianBlur stdDeviation="{def}"/>', {
									def: i
								})
							}, t.filter.blur.toString = function() {
								return this()
							}, t.filter.shadow = function(e, r, i, a, s) {
								return null == s && (null == a ? (s = i, i = 4, a = "#000") : (s = a, a = i, i = 4)), null == i && (i = 4), null == s && (s = 1), null == e && (e = 0, r = 2), null == r && (r = e), a = t.color(a), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
									color: a,
									dx: e,
									dy: r,
									blur: i,
									opacity: s
								})
							}, t.filter.shadow.toString = function() {
								return this()
							}, t.filter.grayscale = function(e) {
								return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
									a: .2126 + .7874 * (1 - e),
									b: .7152 - .7152 * (1 - e),
									c: .0722 - .0722 * (1 - e),
									d: .2126 - .2126 * (1 - e),
									e: .7152 + .2848 * (1 - e),
									f: .0722 - .0722 * (1 - e),
									g: .2126 - .2126 * (1 - e),
									h: .0722 + .9278 * (1 - e)
								})
							}, t.filter.grayscale.toString = function() {
								return this()
							}, t.filter.sepia = function(e) {
								return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
									a: .393 + .607 * (1 - e),
									b: .769 - .769 * (1 - e),
									c: .189 - .189 * (1 - e),
									d: .349 - .349 * (1 - e),
									e: .686 + .314 * (1 - e),
									f: .168 - .168 * (1 - e),
									g: .272 - .272 * (1 - e),
									h: .534 - .534 * (1 - e),
									i: .131 + .869 * (1 - e)
								})
							}, t.filter.sepia.toString = function() {
								return this()
							}, t.filter.saturate = function(e) {
								return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {
									amount: 1 - e
								})
							}, t.filter.saturate.toString = function() {
								return this()
							}, t.filter.hueRotate = function(e) {
								return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
									angle: e
								})
							}, t.filter.hueRotate.toString = function() {
								return this()
							}, t.filter.invert = function(e) {
								return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
									amount: e,
									amount2: 1 - e
								})
							}, t.filter.invert.toString = function() {
								return this()
							}, t.filter.brightness = function(e) {
								return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
									amount: e
								})
							}, t.filter.brightness.toString = function() {
								return this()
							}, t.filter.contrast = function(e) {
								return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
									amount: e,
									amount2: .5 - e / 2
								})
							}, t.filter.contrast.toString = function() {
								return this()
							}
						})), i.plugin((function(t, e, r, i, a) {
							var s = t._.box,
								n = t.is,
								o = /^[^a-z]*([tbmlrc])/i,
								h = function() {
									return "T" + this.dx + "," + this.dy
								};
							e.prototype.getAlign = function(t, e) {
								null == e && n(t, "string") && (e = t, t = null);
								var r = (t = t || this.paper).getBBox ? t.getBBox() : s(t),
									i = this.getBBox(),
									a = {};
								switch (e = (e = e && e.match(o)) ? e[1].toLowerCase() : "c") {
									case "t":
										a.dx = 0, a.dy = r.y - i.y;
										break;
									case "b":
										a.dx = 0, a.dy = r.y2 - i.y2;
										break;
									case "m":
										a.dx = 0, a.dy = r.cy - i.cy;
										break;
									case "l":
										a.dx = r.x - i.x, a.dy = 0;
										break;
									case "r":
										a.dx = r.x2 - i.x2, a.dy = 0;
										break;
									default:
										a.dx = r.cx - i.cx, a.dy = 0
								}
								return a.toString = h, a
							}, e.prototype.align = function(t, e) {
								return this.transform("..." + this.getAlign(t, e))
							}
						})), i.plugin((function(e, r, i, a) {
							var s = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",
								n = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",
								o = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",
								h = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",
								l = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",
								p = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",
								f = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",
								c = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",
								u = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",
								m = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",
								d = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",
								g = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",
								y = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",
								v = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",
								b = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",
								x = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",
								E = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",
								P = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",
								S = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";

							function C(t) {
								t = t.split(/(?=#)/);
								var e = new String(t[5]);
								return e[50] = t[0], e[100] = t[1], e[200] = t[2], e[300] = t[3], e[400] = t[4], e[500] = t[5], e[600] = t[6], e[700] = t[7], e[800] = t[8], e[900] = t[9], t[10] && (e.A100 = t[10], e.A200 = t[11], e.A400 = t[12], e.A700 = t[13]), e
							}
							e.mui = {}, e.flat = {}, e.mui.red = C(s), e.mui.pink = C(n), e.mui.purple = C(o), e.mui.deeppurple = C(h), e.mui.indigo = C(l), e.mui.blue = C(p), e.mui.lightblue = C(f), e.mui.cyan = C(c), e.mui.teal = C(u), e.mui.green = C(m), e.mui.lightgreen = C(d), e.mui.lime = C(g), e.mui.yellow = C(y), e.mui.amber = C(v), e.mui.orange = C(b), e.mui.deeporange = C(x), e.mui.brown = C(E), e.mui.grey = C(P), e.mui.bluegrey = C(S), e.flat.turquoise = "#1abc9c", e.flat.greensea = "#16a085", e.flat.sunflower = "#f1c40f", e.flat.orange = "#f39c12", e.flat.emerland = "#2ecc71", e.flat.nephritis = "#27ae60", e.flat.carrot = "#e67e22", e.flat.pumpkin = "#d35400", e.flat.peterriver = "#3498db", e.flat.belizehole = "#2980b9", e.flat.alizarin = "#e74c3c", e.flat.pomegranate = "#c0392b", e.flat.amethyst = "#9b59b6", e.flat.wisteria = "#8e44ad", e.flat.clouds = "#ecf0f1", e.flat.silver = "#bdc3c7", e.flat.wetasphalt = "#34495e", e.flat.midnightblue = "#2c3e50", e.flat.concrete = "#95a5a6", e.flat.asbestos = "#7f8c8d", e.importMUIColors = function() {
								for (var r in e.mui) e.mui.hasOwnProperty(r) && (t[r] = e.mui[r])
							}
						})), i
					}(b, t)
				}.apply(e, [r]), void 0 === a || (t.exports = a)
			}).call(window)
		},
		1248: function(module, exports, __webpack_require__) {
			var __WEBPACK_AMD_DEFINE_RESULT__, root, factory;
			"undefined" != typeof navigator && (root = window || {}, factory = function(window) {
				"use strict";
				var svgNS = "http://www.w3.org/2000/svg",
					locationHref = "",
					initialDefaultFrame = -999999,
					subframeEnabled = !0,
					idPrefix = "",
					expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
					cachedColors = {},
					bmRnd, bmPow = Math.pow,
					bmSqrt = Math.sqrt,
					bmFloor = Math.floor,
					bmMax = Math.max,
					bmMin = Math.min,
					BMMath = {};

				function ProjectInterface() {
					return {}
				}! function() {
					var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
						r = e.length;
					for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
				}(), BMMath.random = Math.random, BMMath.abs = function(t) {
					if ("object" == typeof t && t.length) {
						var e, r = createSizedArray(t.length),
							i = t.length;
						for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
						return r
					}
					return Math.abs(t)
				};
				var defaultCurveSegments = 150,
					degToRads = Math.PI / 180,
					roundCorner = .5519;

				function roundValues(t) {
					bmRnd = t ? Math.round : function(t) {
						return t
					}
				}

				function styleDiv(t) {
					t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
				}

				function BMEnterFrameEvent(t, e, r, i) {
					this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1
				}

				function BMCompleteEvent(t, e) {
					this.type = t, this.direction = e < 0 ? -1 : 1
				}

				function BMCompleteLoopEvent(t, e, r, i) {
					this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
				}

				function BMSegmentStartEvent(t, e, r) {
					this.type = t, this.firstFrame = e, this.totalFrames = r
				}

				function BMDestroyEvent(t, e) {
					this.type = t, this.target = e
				}

				function BMRenderFrameErrorEvent(t, e) {
					this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
				}

				function BMConfigErrorEvent(t) {
					this.type = "configError", this.nativeError = t
				}

				function BMAnimationConfigErrorEvent(t, e) {
					this.type = t, this.nativeError = e
				}
				roundValues(!1);
				var createElementID = (_count = 0, function() {
						return idPrefix + "__lottie_element_" + (_count += 1)
					}),
					_count;

				function HSVtoRGB(t, e, r) {
					var i, a, s, n, o, h, l, p;
					switch (h = r * (1 - e), l = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = r * (1 - (1 - o) * e), n % 6) {
						case 0:
							i = r, a = p, s = h;
							break;
						case 1:
							i = l, a = r, s = h;
							break;
						case 2:
							i = h, a = r, s = p;
							break;
						case 3:
							i = h, a = l, s = r;
							break;
						case 4:
							i = p, a = h, s = r;
							break;
						case 5:
							i = r, a = h, s = l
					}
					return [i, a, s]
				}

				function RGBtoHSV(t, e, r) {
					var i, a = Math.max(t, e, r),
						s = Math.min(t, e, r),
						n = a - s,
						o = 0 === a ? 0 : n / a,
						h = a / 255;
					switch (a) {
						case s:
							i = 0;
							break;
						case t:
							i = e - r + n * (e < r ? 6 : 0), i /= 6 * n;
							break;
						case e:
							i = r - t + 2 * n, i /= 6 * n;
							break;
						case r:
							i = t - e + 4 * n, i /= 6 * n
					}
					return [i, o, h]
				}

				function addSaturationToRGB(t, e) {
					var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
					return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
				}

				function addBrightnessToRGB(t, e) {
					var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
					return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
				}

				function addHueToRGB(t, e) {
					var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
					return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
				}
				var rgbToHex = function() {
					var t, e, r = [];
					for (t = 0; t < 256; t += 1) e = t.toString(16), r[t] = 1 === e.length ? "0" + e : e;
					return function(t, e, i) {
						return t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), "#" + r[t] + r[e] + r[i]
					}
				}();

				function BaseEvent() {}
				BaseEvent.prototype = {
					triggerEvent: function(t, e) {
						if (this._cbs[t])
							for (var r = this._cbs[t].length, i = 0; i < r; i += 1) this._cbs[t][i](e)
					},
					addEventListener: function(t, e) {
						return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
							function() {
								this.removeEventListener(t, e)
							}.bind(this)
					},
					removeEventListener: function(t, e) {
						if (e) {
							if (this._cbs[t]) {
								for (var r = 0, i = this._cbs[t].length; r < i;) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
								this._cbs[t].length || (this._cbs[t] = null)
							}
						} else this._cbs[t] = null
					}
				};
				var createTypedArray = function() {
					function t(t, e) {
						var r, i = 0,
							a = [];
						switch (t) {
							case "int16":
							case "uint8c":
								r = 1;
								break;
							default:
								r = 1.1
						}
						for (i = 0; i < e; i += 1) a.push(r);
						return a
					}
					return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, r) {
						return "float32" === e ? new Float32Array(r) : "int16" === e ? new Int16Array(r) : "uint8c" === e ? new Uint8ClampedArray(r) : t(e, r)
					} : t
				}();

				function createSizedArray(t) {
					return Array.apply(null, {
						length: t
					})
				}

				function createNS(t) {
					return document.createElementNS(svgNS, t)
				}

				function createTag(t) {
					return document.createElement(t)
				}

				function DynamicPropertyContainer() {}
				DynamicPropertyContainer.prototype = {
					addDynamicProperty: function(t) {
						-1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
					},
					iterateDynamicProperties: function() {
						var t;
						this._mdf = !1;
						var e = this.dynamicProperties.length;
						for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
					},
					initDynamicPropertyContainer: function(t) {
						this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
					}
				};
				var getBlendMode = (blendModeEnums = {
						0: "source-over",
						1: "multiply",
						2: "screen",
						3: "overlay",
						4: "darken",
						5: "lighten",
						6: "color-dodge",
						7: "color-burn",
						8: "hard-light",
						9: "soft-light",
						10: "difference",
						11: "exclusion",
						12: "hue",
						13: "saturation",
						14: "color",
						15: "luminosity"
					}, function(t) {
						return blendModeEnums[t] || ""
					}),
					blendModeEnums, Matrix = function() {
						var t = Math.cos,
							e = Math.sin,
							r = Math.tan,
							i = Math.round;

						function a() {
							return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
						}

						function s(r) {
							if (0 === r) return this;
							var i = t(r),
								a = e(r);
							return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
						}

						function n(r) {
							if (0 === r) return this;
							var i = t(r),
								a = e(r);
							return this._t(1, 0, 0, 0, 0, i, -a, 0, 0, a, i, 0, 0, 0, 0, 1)
						}

						function o(r) {
							if (0 === r) return this;
							var i = t(r),
								a = e(r);
							return this._t(i, 0, a, 0, 0, 1, 0, 0, -a, 0, i, 0, 0, 0, 0, 1)
						}

						function h(r) {
							if (0 === r) return this;
							var i = t(r),
								a = e(r);
							return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
						}

						function l(t, e) {
							return this._t(1, e, t, 1, 0, 0)
						}

						function p(t, e) {
							return this.shear(r(t), r(e))
						}

						function f(i, a) {
							var s = t(a),
								n = e(a);
							return this._t(s, n, 0, 0, -n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -n, 0, 0, n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
						}

						function c(t, e, r) {
							return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
						}

						function u(t, e, r, i, a, s, n, o, h, l, p, f, c, u, m, d) {
							return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = i, this.props[4] = a, this.props[5] = s, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = f, this.props[12] = c, this.props[13] = u, this.props[14] = m, this.props[15] = d, this
						}

						function m(t, e, r) {
							return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
						}

						function d(t, e, r, i, a, s, n, o, h, l, p, f, c, u, m, d) {
							var g = this.props;
							if (1 === t && 0 === e && 0 === r && 0 === i && 0 === a && 1 === s && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === f) return g[12] = g[12] * t + g[15] * c, g[13] = g[13] * s + g[15] * u, g[14] = g[14] * p + g[15] * m, g[15] *= d, this._identityCalculated = !1, this;
							var y = g[0],
								v = g[1],
								b = g[2],
								x = g[3],
								E = g[4],
								P = g[5],
								S = g[6],
								C = g[7],
								A = g[8],
								F = g[9],
								_ = g[10],
								k = g[11],
								T = g[12],
								D = g[13],
								w = g[14],
								M = g[15];
							return g[0] = y * t + v * a + b * h + x * c, g[1] = y * e + v * s + b * l + x * u, g[2] = y * r + v * n + b * p + x * m, g[3] = y * i + v * o + b * f + x * d, g[4] = E * t + P * a + S * h + C * c, g[5] = E * e + P * s + S * l + C * u, g[6] = E * r + P * n + S * p + C * m, g[7] = E * i + P * o + S * f + C * d, g[8] = A * t + F * a + _ * h + k * c, g[9] = A * e + F * s + _ * l + k * u, g[10] = A * r + F * n + _ * p + k * m, g[11] = A * i + F * o + _ * f + k * d, g[12] = T * t + D * a + w * h + M * c, g[13] = T * e + D * s + w * l + M * u, g[14] = T * r + D * n + w * p + M * m, g[15] = T * i + D * o + w * f + M * d, this._identityCalculated = !1, this
						}

						function g() {
							return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
						}

						function y(t) {
							for (var e = 0; e < 16;) {
								if (t.props[e] !== this.props[e]) return !1;
								e += 1
							}
							return !0
						}

						function v(t) {
							var e;
							for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
							return t
						}

						function b(t) {
							var e;
							for (e = 0; e < 16; e += 1) this.props[e] = t[e]
						}

						function x(t, e, r) {
							return {
								x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
								y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
								z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
							}
						}

						function E(t, e, r) {
							return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
						}

						function P(t, e, r) {
							return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
						}

						function S(t, e, r) {
							return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
						}

						function C() {
							var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
								e = this.props[5] / t,
								r = -this.props[1] / t,
								i = -this.props[4] / t,
								a = this.props[0] / t,
								s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
								n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
								o = new Matrix;
							return o.props[0] = e, o.props[1] = r, o.props[4] = i, o.props[5] = a, o.props[12] = s, o.props[13] = n, o
						}

						function A(t) {
							return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
						}

						function F(t) {
							var e, r = t.length,
								i = [];
							for (e = 0; e < r; e += 1) i[e] = A(t[e]);
							return i
						}

						function _(t, e, r) {
							var i = createTypedArray("float32", 6);
							if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = r[0], i[5] = r[1];
							else {
								var a = this.props[0],
									s = this.props[1],
									n = this.props[4],
									o = this.props[5],
									h = this.props[12],
									l = this.props[13];
								i[0] = t[0] * a + t[1] * n + h, i[1] = t[0] * s + t[1] * o + l, i[2] = e[0] * a + e[1] * n + h, i[3] = e[0] * s + e[1] * o + l, i[4] = r[0] * a + r[1] * n + h, i[5] = r[0] * s + r[1] * o + l
							}
							return i
						}

						function k(t, e, r) {
							return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
						}

						function T(t, e) {
							if (this.isIdentity()) return t + "," + e;
							var r = this.props;
							return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
						}

						function D() {
							for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) r += i(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1;
							return r
						}

						function w(t) {
							return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? i(1e4 * t) / 1e4 : t
						}

						function M() {
							var t = this.props;
							return "matrix(" + w(t[0]) + "," + w(t[1]) + "," + w(t[4]) + "," + w(t[5]) + "," + w(t[12]) + "," + w(t[13]) + ")"
						}
						return function() {
							this.reset = a, this.rotate = s, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = f, this.shear = l, this.scale = c, this.setTransform = u, this.translate = m, this.transform = d, this.applyToPoint = x, this.applyToX = E, this.applyToY = P, this.applyToZ = S, this.applyToPointArray = k, this.applyToTriplePoints = _, this.applyToPointStringified = T, this.toCSS = D, this.to2dCSS = M, this.clone = v, this.cloneFromProps = b, this.equals = y, this.inversePoints = F, this.inversePoint = A, this.getInverseMatrix = C, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
						}
					}();
				! function(t, e) {
					var r = this,
						i = 256,
						a = e.pow(i, 6),
						s = e.pow(2, 52),
						n = 2 * s,
						o = 255;

					function h(t) {
						var e, r = t.length,
							a = this,
							s = 0,
							n = a.i = a.j = 0,
							h = a.S = [];
						for (r || (t = [r++]); s < i;) h[s] = s++;
						for (s = 0; s < i; s++) h[s] = h[n = o & n + t[s % r] + (e = h[s])], h[n] = e;
						a.g = function(t) {
							for (var e, r = 0, s = a.i, n = a.j, h = a.S; t--;) e = h[s = o & s + 1], r = r * i + h[o & (h[s] = h[n = o & n + e]) + (h[n] = e)];
							return a.i = s, a.j = n, r
						}
					}

					function l(t, e) {
						return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
					}

					function p(t, e) {
						var r, i = [],
							a = typeof t;
						if (e && "object" == a)
							for (r in t) try {
								i.push(p(t[r], e - 1))
							} catch (t) {}
						return i.length ? i : "string" == a ? t : t + "\0"
					}

					function f(t, e) {
						for (var r, i = t + "", a = 0; a < i.length;) e[o & a] = o & (r ^= 19 * e[o & a]) + i.charCodeAt(a++);
						return c(e)
					}

					function c(t) {
						return String.fromCharCode.apply(0, t)
					}
					e.seedrandom = function(o, u, m) {
						var d = [],
							g = f(p((u = !0 === u ? {
								entropy: !0
							} : u || {}).entropy ? [o, c(t)] : null === o ? function() {
								try {
									var e = new Uint8Array(i);
									return (r.crypto || r.msCrypto).getRandomValues(e), c(e)
								} catch (e) {
									var a = r.navigator,
										s = a && a.plugins;
									return [+new Date, r, s, r.screen, c(t)]
								}
							}() : o, 3), d),
							y = new h(d),
							v = function() {
								for (var t = y.g(6), e = a, r = 0; t < s;) t = (t + r) * i, e *= i, r = y.g(1);
								for (; t >= n;) t /= 2, e /= 2, r >>>= 1;
								return (t + r) / e
							};
						return v.int32 = function() {
							return 0 | y.g(4)
						}, v.quick = function() {
							return y.g(4) / 4294967296
						}, v.double = v, f(c(y.S), t), (u.pass || m || function(t, r, i, a) {
							return a && (a.S && l(a, y), t.state = function() {
								return l(y, {})
							}), i ? (e.random = t, r) : t
						})(v, g, "global" in u ? u.global : this == e, u.state)
					}, f(e.random(), t)
				}([], BMMath);
				var BezierFactory = function() {
					var t = {
							getBezierEasing: function(t, r, i, a, s) {
								var n = s || ("bez_" + t + "_" + r + "_" + i + "_" + a).replace(/\./g, "p");
								if (e[n]) return e[n];
								var o = new l([t, r, i, a]);
								return e[n] = o, o
							}
						},
						e = {},
						r = .1,
						i = "function" == typeof Float32Array;

					function a(t, e) {
						return 1 - 3 * e + 3 * t
					}

					function s(t, e) {
						return 3 * e - 6 * t
					}

					function n(t) {
						return 3 * t
					}

					function o(t, e, r) {
						return ((a(e, r) * t + s(e, r)) * t + n(e)) * t
					}

					function h(t, e, r) {
						return 3 * a(e, r) * t * t + 2 * s(e, r) * t + n(e)
					}

					function l(t) {
						this._p = t, this._mSampleValues = i ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
					}
					return l.prototype = {
						get: function(t) {
							var e = this._p[0],
								r = this._p[1],
								i = this._p[2],
								a = this._p[3];
							return this._precomputed || this._precompute(), e === r && i === a ? t : 0 === t ? 0 : 1 === t ? 1 : o(this._getTForX(t), r, a)
						},
						_precompute: function() {
							var t = this._p[0],
								e = this._p[1],
								r = this._p[2],
								i = this._p[3];
							this._precomputed = !0, t === e && r === i || this._calcSampleValues()
						},
						_calcSampleValues: function() {
							for (var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i) this._mSampleValues[i] = o(i * r, t, e)
						},
						_getTForX: function(t) {
							for (var e = this._p[0], i = this._p[2], a = this._mSampleValues, s = 0, n = 1; 10 !== n && a[n] <= t; ++n) s += r;
							var l = s + (t - a[--n]) / (a[n + 1] - a[n]) * r,
								p = h(l, e, i);
							return p >= .001 ? function(t, e, r, i) {
								for (var a = 0; a < 4; ++a) {
									var s = h(e, r, i);
									if (0 === s) return e;
									e -= (o(e, r, i) - t) / s
								}
								return e
							}(t, l, e, i) : 0 === p ? l : function(t, e, r, i, a) {
								var s, n, h = 0;
								do {
									(s = o(n = e + (r - e) / 2, i, a) - t) > 0 ? r = n : e = n
								} while (Math.abs(s) > 1e-7 && ++h < 10);
								return n
							}(t, s, s + r, e, i)
						}
					}, t
				}();

				function extendPrototype(t, e) {
					var r, i, a = t.length;
					for (r = 0; r < a; r += 1)
						for (var s in i = t[r].prototype) Object.prototype.hasOwnProperty.call(i, s) && (e.prototype[s] = i[s])
				}

				function getDescriptor(t, e) {
					return Object.getOwnPropertyDescriptor(t, e)
				}

				function createProxyFunction(t) {
					function e() {}
					return e.prototype = t, e
				}

				function bezFunction() {
					var t = Math;

					function e(t, e, r, i, a, s) {
						var n = t * i + e * a + r * s - a * i - s * t - r * e;
						return n > -.001 && n < .001
					}
					var r = function(t, e, r, i) {
						var a, s, n, o, h, l, p = defaultCurveSegments,
							f = 0,
							c = [],
							u = [],
							m = bezierLengthPool.newElement();
						for (n = r.length, a = 0; a < p; a += 1) {
							for (h = a / (p - 1), l = 0, s = 0; s < n; s += 1) o = bmPow(1 - h, 3) * t[s] + 3 * bmPow(1 - h, 2) * h * r[s] + 3 * (1 - h) * bmPow(h, 2) * i[s] + bmPow(h, 3) * e[s], c[s] = o, null !== u[s] && (l += bmPow(c[s] - u[s], 2)), u[s] = c[s];
							l && (f += l = bmSqrt(l)), m.percents[a] = h, m.lengths[a] = f
						}
						return m.addedLength = f, m
					};

					function i(t) {
						this.segmentLength = 0, this.points = new Array(t)
					}

					function a(t, e) {
						this.partialLength = t, this.point = e
					}
					var s, n = (s = {}, function(t, r, n, o) {
						var h = (t[0] + "_" + t[1] + "_" + r[0] + "_" + r[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
						if (!s[h]) {
							var l, p, f, c, u, m, d, g = defaultCurveSegments,
								y = 0,
								v = null;
							2 === t.length && (t[0] !== r[0] || t[1] !== r[1]) && e(t[0], t[1], r[0], r[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) && (g = 2);
							var b = new i(g);
							for (f = n.length, l = 0; l < g; l += 1) {
								for (d = createSizedArray(f), u = l / (g - 1), m = 0, p = 0; p < f; p += 1) c = bmPow(1 - u, 3) * t[p] + 3 * bmPow(1 - u, 2) * u * (t[p] + n[p]) + 3 * (1 - u) * bmPow(u, 2) * (r[p] + o[p]) + bmPow(u, 3) * r[p], d[p] = c, null !== v && (m += bmPow(d[p] - v[p], 2));
								y += m = bmSqrt(m), b.points[l] = new a(m, d), v = d
							}
							b.segmentLength = y, s[h] = b
						}
						return s[h]
					});

					function o(t, e) {
						var r = e.percents,
							i = e.lengths,
							a = r.length,
							s = bmFloor((a - 1) * t),
							n = t * e.addedLength,
							o = 0;
						if (s === a - 1 || 0 === s || n === i[s]) return r[s];
						for (var h = i[s] > n ? -1 : 1, l = !0; l;)
							if (i[s] <= n && i[s + 1] > n ? (o = (n - i[s]) / (i[s + 1] - i[s]), l = !1) : s += h, s < 0 || s >= a - 1) {
								if (s === a - 1) return r[s];
								l = !1
							} return r[s] + (r[s + 1] - r[s]) * o
					}
					var h = createTypedArray("float32", 8);
					return {
						getSegmentsLength: function(t) {
							var e, i = segmentsLengthPool.newElement(),
								a = t.c,
								s = t.v,
								n = t.o,
								o = t.i,
								h = t._length,
								l = i.lengths,
								p = 0;
							for (e = 0; e < h - 1; e += 1) l[e] = r(s[e], s[e + 1], n[e], o[e + 1]), p += l[e].addedLength;
							return a && h && (l[e] = r(s[e], s[0], n[e], o[0]), p += l[e].addedLength), i.totalLength = p, i
						},
						getNewSegment: function(e, r, i, a, s, n, l) {
							s < 0 ? s = 0 : s > 1 && (s = 1);
							var p, f = o(s, l),
								c = o(n = n > 1 ? 1 : n, l),
								u = e.length,
								m = 1 - f,
								d = 1 - c,
								g = m * m * m,
								y = f * m * m * 3,
								v = f * f * m * 3,
								b = f * f * f,
								x = m * m * d,
								E = f * m * d + m * f * d + m * m * c,
								P = f * f * d + m * f * c + f * m * c,
								S = f * f * c,
								C = m * d * d,
								A = f * d * d + m * c * d + m * d * c,
								F = f * c * d + m * c * c + f * d * c,
								_ = f * c * c,
								k = d * d * d,
								T = c * d * d + d * c * d + d * d * c,
								D = c * c * d + d * c * c + c * d * c,
								w = c * c * c;
							for (p = 0; p < u; p += 1) h[4 * p] = t.round(1e3 * (g * e[p] + y * i[p] + v * a[p] + b * r[p])) / 1e3, h[4 * p + 1] = t.round(1e3 * (x * e[p] + E * i[p] + P * a[p] + S * r[p])) / 1e3, h[4 * p + 2] = t.round(1e3 * (C * e[p] + A * i[p] + F * a[p] + _ * r[p])) / 1e3, h[4 * p + 3] = t.round(1e3 * (k * e[p] + T * i[p] + D * a[p] + w * r[p])) / 1e3;
							return h
						},
						getPointInSegment: function(e, r, i, a, s, n) {
							var h = o(s, n),
								l = 1 - h;
							return [t.round(1e3 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * i[0] + (h * h * l + l * h * h + h * l * h) * a[0] + h * h * h * r[0])) / 1e3, t.round(1e3 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * i[1] + (h * h * l + l * h * h + h * l * h) * a[1] + h * h * h * r[1])) / 1e3]
						},
						buildBezierData: n,
						pointOnLine2D: e,
						pointOnLine3D: function(r, i, a, s, n, o, h, l, p) {
							if (0 === a && 0 === o && 0 === p) return e(r, i, s, n, h, l);
							var f, c = t.sqrt(t.pow(s - r, 2) + t.pow(n - i, 2) + t.pow(o - a, 2)),
								u = t.sqrt(t.pow(h - r, 2) + t.pow(l - i, 2) + t.pow(p - a, 2)),
								m = t.sqrt(t.pow(h - s, 2) + t.pow(l - n, 2) + t.pow(p - o, 2));
							return (f = c > u ? c > m ? c - u - m : m - u - c : m > u ? m - u - c : u - c - m) > -1e-4 && f < 1e-4
						}
					}
				}! function() {
					for (var t = 0, e = ["ms", "moz", "webkit", "o"], r = 0; r < e.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window[e[r] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[r] + "CancelAnimationFrame"] || window[e[r] + "CancelRequestAnimationFrame"];
					window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
						var r = (new Date).getTime(),
							i = Math.max(0, 16 - (r - t)),
							a = setTimeout((function() {
								e(r + i)
							}), i);
						return t = r + i, a
					}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
						clearTimeout(t)
					})
				}();
				var bez = bezFunction();

				function dataFunctionManager() {
					function t(a, s, n) {
						var o, h, l, p, f, c, u, m = a.length;
						for (h = 0; h < m; h += 1)
							if ("ks" in (o = a[h]) && !o.completed) {
								if (o.completed = !0, o.tt && (a[h - 1].td = o.tt), o.hasMask) {
									var d = o.masksProperties;
									for (p = d.length, l = 0; l < p; l += 1)
										if (d[l].pt.k.i) i(d[l].pt.k);
										else
											for (c = d[l].pt.k.length, f = 0; f < c; f += 1) d[l].pt.k[f].s && i(d[l].pt.k[f].s[0]), d[l].pt.k[f].e && i(d[l].pt.k[f].e[0])
								}
								0 === o.ty ? (o.layers = e(o.refId, s), t(o.layers, s, n)) : 4 === o.ty ? r(o.shapes) : 5 === o.ty && (0 !== (u = o).t.a.length || "m" in u.t.p || (u.singleShape = !0))
							}
					}

					function e(t, e) {
						for (var r = 0, i = e.length; r < i;) {
							if (e[r].id === t) return e[r].layers.__used ? JSON.parse(JSON.stringify(e[r].layers)) : (e[r].layers.__used = !0, e[r].layers);
							r += 1
						}
						return null
					}

					function r(t) {
						var e, a, s;
						for (e = t.length - 1; e >= 0; e -= 1)
							if ("sh" === t[e].ty)
								if (t[e].ks.k.i) i(t[e].ks.k);
								else
									for (s = t[e].ks.k.length, a = 0; a < s; a += 1) t[e].ks.k[a].s && i(t[e].ks.k[a].s[0]), t[e].ks.k[a].e && i(t[e].ks.k[a].e[0]);
						else "gr" === t[e].ty && r(t[e].it)
					}

					function i(t) {
						var e, r = t.i.length;
						for (e = 0; e < r; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
					}

					function a(t, e) {
						var r = e ? e.split(".") : [100, 100, 100];
						return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && null))
					}
					var s, n = function() {
							var t = [4, 4, 14];

							function e(t) {
								var e, r, i, a = t.length;
								for (e = 0; e < a; e += 1) 5 === t[e].ty && (r = t[e], i = void 0, i = r.t.d, r.t.d = {
									k: [{
										s: i,
										t: 0
									}]
								})
							}
							return function(r) {
								if (a(t, r.v) && (e(r.layers), r.assets)) {
									var i, s = r.assets.length;
									for (i = 0; i < s; i += 1) r.assets[i].layers && e(r.assets[i].layers)
								}
							}
						}(),
						o = (s = [4, 7, 99], function(t) {
							if (t.chars && !a(s, t.v)) {
								var e, r, n, o, h, l = t.chars.length;
								for (e = 0; e < l; e += 1)
									if (t.chars[e].data && t.chars[e].data.shapes)
										for (n = (h = t.chars[e].data.shapes[0].it).length, r = 0; r < n; r += 1)(o = h[r].ks.k).__converted || (i(h[r].ks.k), o.__converted = !0)
							}
						}),
						h = function() {
							var t = [4, 1, 9];

							function e(t) {
								var r, i, a, s = t.length;
								for (r = 0; r < s; r += 1)
									if ("gr" === t[r].ty) e(t[r].it);
									else if ("fl" === t[r].ty || "st" === t[r].ty)
									if (t[r].c.k && t[r].c.k[0].i)
										for (a = t[r].c.k.length, i = 0; i < a; i += 1) t[r].c.k[i].s && (t[r].c.k[i].s[0] /= 255, t[r].c.k[i].s[1] /= 255, t[r].c.k[i].s[2] /= 255, t[r].c.k[i].s[3] /= 255), t[r].c.k[i].e && (t[r].c.k[i].e[0] /= 255, t[r].c.k[i].e[1] /= 255, t[r].c.k[i].e[2] /= 255, t[r].c.k[i].e[3] /= 255);
									else t[r].c.k[0] /= 255, t[r].c.k[1] /= 255, t[r].c.k[2] /= 255, t[r].c.k[3] /= 255
							}

							function r(t) {
								var r, i = t.length;
								for (r = 0; r < i; r += 1) 4 === t[r].ty && e(t[r].shapes)
							}
							return function(e) {
								if (a(t, e.v) && (r(e.layers), e.assets)) {
									var i, s = e.assets.length;
									for (i = 0; i < s; i += 1) e.assets[i].layers && r(e.assets[i].layers)
								}
							}
						}(),
						l = function() {
							var t = [4, 4, 18];

							function e(t) {
								var r, i, a;
								for (r = t.length - 1; r >= 0; r -= 1)
									if ("sh" === t[r].ty)
										if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
										else
											for (a = t[r].ks.k.length, i = 0; i < a; i += 1) t[r].ks.k[i].s && (t[r].ks.k[i].s[0].c = t[r].closed), t[r].ks.k[i].e && (t[r].ks.k[i].e[0].c = t[r].closed);
								else "gr" === t[r].ty && e(t[r].it)
							}

							function r(t) {
								var r, i, a, s, n, o, h = t.length;
								for (i = 0; i < h; i += 1) {
									if ((r = t[i]).hasMask) {
										var l = r.masksProperties;
										for (s = l.length, a = 0; a < s; a += 1)
											if (l[a].pt.k.i) l[a].pt.k.c = l[a].cl;
											else
												for (o = l[a].pt.k.length, n = 0; n < o; n += 1) l[a].pt.k[n].s && (l[a].pt.k[n].s[0].c = l[a].cl), l[a].pt.k[n].e && (l[a].pt.k[n].e[0].c = l[a].cl)
									}
									4 === r.ty && e(r.shapes)
								}
							}
							return function(e) {
								if (a(t, e.v) && (r(e.layers), e.assets)) {
									var i, s = e.assets.length;
									for (i = 0; i < s; i += 1) e.assets[i].layers && r(e.assets[i].layers)
								}
							}
						}();
					var p = {
						completeData: function(e, r) {
							e.__complete || (h(e), n(e), o(e), l(e), t(e.layers, e.assets, r), e.__complete = !0)
						}
					};
					return p.checkColors = h, p.checkChars = o, p.checkShapes = l, p.completeLayers = t, p
				}
				var dataManager = dataFunctionManager();

				function getFontProperties(t) {
					for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", a = e.length, s = 0; s < a; s += 1) switch (e[s].toLowerCase()) {
						case "italic":
							i = "italic";
							break;
						case "bold":
							r = "700";
							break;
						case "black":
							r = "900";
							break;
						case "medium":
							r = "500";
							break;
						case "regular":
						case "normal":
							r = "400";
							break;
						case "light":
						case "thin":
							r = "200"
					}
					return {
						style: i,
						weight: t.fWeight || r
					}
				}
				var FontManager = function() {
						var t = {
								w: 0,
								size: 0,
								shapes: []
							},
							e = [];

						function r(t, e) {
							var r = createTag("span");
							r.setAttribute("aria-hidden", !0), r.style.fontFamily = e;
							var i = createTag("span");
							i.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(i), document.body.appendChild(r);
							var a = i.offsetWidth;
							return i.style.fontFamily = function(t) {
								var e, r = t.split(","),
									i = r.length,
									a = [];
								for (e = 0; e < i; e += 1) "sans-serif" !== r[e] && "monospace" !== r[e] && a.push(r[e]);
								return a.join(",")
							}(t) + ", " + e, {
								node: i,
								w: a,
								parent: r
							}
						}

						function i(t, e) {
							var r = createNS("text");
							r.style.fontSize = "100px";
							var i = getFontProperties(e);
							return r.setAttribute("font-family", e.fFamily), r.setAttribute("font-style", i.style), r.setAttribute("font-weight", i.weight), r.textContent = "1", e.fClass ? (r.style.fontFamily = "inherit", r.setAttribute("class", e.fClass)) : r.style.fontFamily = e.fFamily, t.appendChild(r), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, r
						}
						e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
						var a = function() {
							this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
						};
						a.getCombinedCharacterCodes = function() {
							return e
						};
						var s = {
							addChars: function(t) {
								if (t) {
									var e;
									this.chars || (this.chars = []);
									var r, i, a = t.length,
										s = this.chars.length;
									for (e = 0; e < a; e += 1) {
										for (r = 0, i = !1; r < s;) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0), r += 1;
										i || (this.chars.push(t[e]), s += 1)
									}
								}
							},
							addFonts: function(t, e) {
								if (t) {
									if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
									var a, s = t.list,
										n = s.length,
										o = n;
									for (a = 0; a < n; a += 1) {
										var h, l, p = !0;
										if (s[a].loaded = !1, s[a].monoCase = r(s[a].fFamily, "monospace"), s[a].sansCase = r(s[a].fFamily, "sans-serif"), s[a].fPath) {
											if ("p" === s[a].fOrigin || 3 === s[a].origin) {
												if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + s[a].fFamily + '"], style[f-origin="3"][f-family="' + s[a].fFamily + '"]')).length > 0 && (p = !1), p) {
													var f = createTag("style");
													f.setAttribute("f-forigin", s[a].fOrigin), f.setAttribute("f-origin", s[a].origin), f.setAttribute("f-family", s[a].fFamily), f.type = "text/css", f.innerText = "@font-face {font-family: " + s[a].fFamily + "; font-style: normal; src: url('" + s[a].fPath + "');}", e.appendChild(f)
												}
											} else if ("g" === s[a].fOrigin || 1 === s[a].origin) {
												for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1) - 1 !== h[l].href.indexOf(s[a].fPath) && (p = !1);
												if (p) {
													var c = createTag("link");
													c.setAttribute("f-forigin", s[a].fOrigin), c.setAttribute("f-origin", s[a].origin), c.type = "text/css", c.rel = "stylesheet", c.href = s[a].fPath, document.body.appendChild(c)
												}
											} else if ("t" === s[a].fOrigin || 2 === s[a].origin) {
												for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1) s[a].fPath === h[l].src && (p = !1);
												if (p) {
													var u = createTag("link");
													u.setAttribute("f-forigin", s[a].fOrigin), u.setAttribute("f-origin", s[a].origin), u.setAttribute("rel", "stylesheet"), u.setAttribute("href", s[a].fPath), e.appendChild(u)
												}
											}
										} else s[a].loaded = !0, o -= 1;
										s[a].helper = i(e, s[a]), s[a].cache = {}, this.fonts.push(s[a])
									}
									0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
								} else this.isLoaded = !0
							},
							getCharData: function(e, r, i) {
								for (var a = 0, s = this.chars.length; a < s;) {
									if (this.chars[a].ch === e && this.chars[a].style === r && this.chars[a].fFamily === i) return this.chars[a];
									a += 1
								}
								return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, r, i)), t
							},
							getFontByName: function(t) {
								for (var e = 0, r = this.fonts.length; e < r;) {
									if (this.fonts[e].fName === t) return this.fonts[e];
									e += 1
								}
								return this.fonts[0]
							},
							measureText: function(t, e, r) {
								var i = this.getFontByName(e),
									a = t.charCodeAt(0);
								if (!i.cache[a + 1]) {
									var s = i.helper;
									if (" " === t) {
										s.textContent = "|" + t + "|";
										var n = s.getComputedTextLength();
										s.textContent = "||";
										var o = s.getComputedTextLength();
										i.cache[a + 1] = (n - o) / 100
									} else s.textContent = t, i.cache[a + 1] = s.getComputedTextLength() / 100
								}
								return i.cache[a + 1] * r
							},
							checkLoadedFonts: function() {
								var t, e, r, i = this.fonts.length,
									a = i;
								for (t = 0; t < i; t += 1) this.fonts[t].loaded ? a -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, e.offsetWidth !== r ? (a -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, e.offsetWidth !== r && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
								0 !== a && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
							},
							setIsLoaded: function() {
								this.isLoaded = !0
							}
						};
						return a.prototype = s, a
					}(),
					PropertyFactory = function() {
						var t = initialDefaultFrame,
							e = Math.abs;

						function r(t, e) {
							var r, a = this.offsetTime;
							"multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
							for (var s, n, o, h, l, p, f, c, u = e.lastIndex, m = u, d = this.keyframes.length - 1, g = !0; g;) {
								if (s = this.keyframes[m], n = this.keyframes[m + 1], m === d - 1 && t >= n.t - a) {
									s.h && (s = n), u = 0;
									break
								}
								if (n.t - a > t) {
									u = m;
									break
								}
								m < d - 1 ? m += 1 : (u = 0, g = !1)
							}
							var y, v, b, x, E, P, S, C, A, F, _ = n.t - a,
								k = s.t - a;
							if (s.to) {
								s.bezierData || (s.bezierData = bez.buildBezierData(s.s, n.s || s.e, s.to, s.ti));
								var T = s.bezierData;
								if (t >= _ || t < k) {
									var D = t >= _ ? T.points.length - 1 : 0;
									for (h = T.points[D].point.length, o = 0; o < h; o += 1) r[o] = T.points[D].point[o]
								} else {
									s.__fnct ? c = s.__fnct : (c = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, s.__fnct = c), l = c((t - k) / (_ - k));
									var w, M = T.segmentLength * l,
										I = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
									for (f = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, g = !0, p = T.points.length; g;) {
										if (I += T.points[f].partialLength, 0 === M || 0 === l || f === T.points.length - 1) {
											for (h = T.points[f].point.length, o = 0; o < h; o += 1) r[o] = T.points[f].point[o];
											break
										}
										if (M >= I && M < I + T.points[f + 1].partialLength) {
											for (w = (M - I) / T.points[f + 1].partialLength, h = T.points[f].point.length, o = 0; o < h; o += 1) r[o] = T.points[f].point[o] + (T.points[f + 1].point[o] - T.points[f].point[o]) * w;
											break
										}
										f < p - 1 ? f += 1 : g = !1
									}
									e._lastPoint = f, e._lastAddedLength = I - T.points[f].partialLength, e._lastKeyframeIndex = m
								}
							} else {
								var B, V, R, L, G;
								if (d = s.s.length, y = n.s || s.e, this.sh && 1 !== s.h)
									if (t >= _) r[0] = y[0], r[1] = y[1], r[2] = y[2];
									else if (t <= k) r[0] = s.s[0], r[1] = s.s[1], r[2] = s.s[2];
								else {
									var N = i(s.s),
										z = i(y);
									v = r, b = function(t, e, r) {
										var i, a, s, n, o, h = [],
											l = t[0],
											p = t[1],
											f = t[2],
											c = t[3],
											u = e[0],
											m = e[1],
											d = e[2],
											g = e[3];
										return (a = l * u + p * m + f * d + c * g) < 0 && (a = -a, u = -u, m = -m, d = -d, g = -g), 1 - a > 1e-6 ? (i = Math.acos(a), s = Math.sin(i), n = Math.sin((1 - r) * i) / s, o = Math.sin(r * i) / s) : (n = 1 - r, o = r), h[0] = n * l + o * u, h[1] = n * p + o * m, h[2] = n * f + o * d, h[3] = n * c + o * g, h
									}(N, z, (t - k) / (_ - k)), x = b[0], E = b[1], P = b[2], S = b[3], C = Math.atan2(2 * E * S - 2 * x * P, 1 - 2 * E * E - 2 * P * P), A = Math.asin(2 * x * E + 2 * P * S), F = Math.atan2(2 * x * S - 2 * E * P, 1 - 2 * x * x - 2 * P * P), v[0] = C / degToRads, v[1] = A / degToRads, v[2] = F / degToRads
								} else
									for (m = 0; m < d; m += 1) 1 !== s.h && (t >= _ ? l = 1 : t < k ? l = 0 : (s.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[m] ? c = s.__fnct[m] : (B = void 0 === s.o.x[m] ? s.o.x[0] : s.o.x[m], V = void 0 === s.o.y[m] ? s.o.y[0] : s.o.y[m], R = void 0 === s.i.x[m] ? s.i.x[0] : s.i.x[m], L = void 0 === s.i.y[m] ? s.i.y[0] : s.i.y[m], c = BezierFactory.getBezierEasing(B, V, R, L).get, s.__fnct[m] = c)) : s.__fnct ? c = s.__fnct : (B = s.o.x, V = s.o.y, R = s.i.x, L = s.i.y, c = BezierFactory.getBezierEasing(B, V, R, L).get, s.__fnct = c), l = c((t - k) / (_ - k)))), y = n.s || s.e, G = 1 === s.h ? s.s[m] : s.s[m] + (y[m] - s.s[m]) * l, "multidimensional" === this.propType ? r[m] = G : r = G
							}
							return e.lastIndex = u, r
						}

						function i(t) {
							var e = t[0] * degToRads,
								r = t[1] * degToRads,
								i = t[2] * degToRads,
								a = Math.cos(e / 2),
								s = Math.cos(r / 2),
								n = Math.cos(i / 2),
								o = Math.sin(e / 2),
								h = Math.sin(r / 2),
								l = Math.sin(i / 2);
							return [o * h * n + a * s * l, o * s * n + a * h * l, a * h * n - o * s * l, a * s * n - o * h * l]
						}

						function a() {
							var e = this.comp.renderedFrame - this.offsetTime,
								r = this.keyframes[0].t - this.offsetTime,
								i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
							if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= i && e >= i || this._caching.lastFrame < r && e < r))) {
								this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
								var a = this.interpolateValue(e, this._caching);
								this.pv = a
							}
							return this._caching.lastFrame = e, this.pv
						}

						function s(t) {
							var r;
							if ("unidimensional" === this.propType) r = t * this.mult, e(this.v - r) > 1e-5 && (this.v = r, this._mdf = !0);
							else
								for (var i = 0, a = this.v.length; i < a;) r = t[i] * this.mult, e(this.v[i] - r) > 1e-5 && (this.v[i] = r, this._mdf = !0), i += 1
						}

						function n() {
							if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
								if (this.lock) this.setVValue(this.pv);
								else {
									var t;
									this.lock = !0, this._mdf = this._isFirstFrame;
									var e = this.effectsSequence.length,
										r = this.kf ? this.pv : this.data.k;
									for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
									this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
								}
						}

						function o(t) {
							this.effectsSequence.push(t), this.container.addDynamicProperty(this)
						}

						function h(t, e, r, i) {
							this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = n, this.setVValue = s, this.addEffect = o
						}

						function l(t, e, r, i) {
							var a;
							this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
							var h = e.k.length;
							for (this.v = createTypedArray("float32", h), this.pv = createTypedArray("float32", h), this.vel = createTypedArray("float32", h), a = 0; a < h; a += 1) this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
							this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = n, this.setVValue = s, this.addEffect = o
						}

						function p(e, i, h, l) {
							this.propType = "unidimensional", this.keyframes = i.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
								lastFrame: t,
								lastIndex: 0,
								value: 0,
								_lastKeyframeIndex: -1
							}, this.k = !0, this.kf = !0, this.data = i, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = n, this.setVValue = s, this.interpolateValue = r, this.effectsSequence = [a.bind(this)], this.addEffect = o
						}

						function f(e, i, h, l) {
							var p;
							this.propType = "multidimensional";
							var f, c, u, m, d = i.k.length;
							for (p = 0; p < d - 1; p += 1) i.k[p].to && i.k[p].s && i.k[p + 1] && i.k[p + 1].s && (f = i.k[p].s, c = i.k[p + 1].s, u = i.k[p].to, m = i.k[p].ti, (2 === f.length && (f[0] !== c[0] || f[1] !== c[1]) && bez.pointOnLine2D(f[0], f[1], c[0], c[1], f[0] + u[0], f[1] + u[1]) && bez.pointOnLine2D(f[0], f[1], c[0], c[1], c[0] + m[0], c[1] + m[1]) || 3 === f.length && (f[0] !== c[0] || f[1] !== c[1] || f[2] !== c[2]) && bez.pointOnLine3D(f[0], f[1], f[2], c[0], c[1], c[2], f[0] + u[0], f[1] + u[1], f[2] + u[2]) && bez.pointOnLine3D(f[0], f[1], f[2], c[0], c[1], c[2], c[0] + m[0], c[1] + m[1], c[2] + m[2])) && (i.k[p].to = null, i.k[p].ti = null), f[0] === c[0] && f[1] === c[1] && 0 === u[0] && 0 === u[1] && 0 === m[0] && 0 === m[1] && (2 === f.length || f[2] === c[2] && 0 === u[2] && 0 === m[2]) && (i.k[p].to = null, i.k[p].ti = null));
							this.effectsSequence = [a.bind(this)], this.data = i, this.keyframes = i.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.getValue = n, this.setVValue = s, this.interpolateValue = r, this.frameId = -1;
							var g = i.k[0].s.length;
							for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), p = 0; p < g; p += 1) this.v[p] = t, this.pv[p] = t;
							this._caching = {
								lastFrame: t,
								lastIndex: 0,
								value: createTypedArray("float32", g)
							}, this.addEffect = o
						}
						return {
							getProp: function(t, e, r, i, a) {
								var s;
								if (e.k.length)
									if ("number" == typeof e.k[0]) s = new l(t, e, i, a);
									else switch (r) {
										case 0:
											s = new p(t, e, i, a);
											break;
										case 1:
											s = new f(t, e, i, a)
									} else s = new h(t, e, i, a);
								return s.effectsSequence.length && a.addDynamicProperty(s), s
							}
						}
					}(),
					TransformPropertyFactory = function() {
						var t = [0, 0];

						function e(t, e, r) {
							if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
									k: [0, 0, 0]
								}, 1, 0, this), e.rx) {
								if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
									var i, a = e.or.k.length;
									for (i = 0; i < a; i += 1) e.or.k[i].to = null, e.or.k[i].ti = null
								}
								this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
							} else this.r = PropertyFactory.getProp(t, e.r || {
								k: 0
							}, 0, degToRads, this);
							e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
								k: [0, 0, 0]
							}, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
								k: [100, 100, 100]
							}, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
								_mdf: !1,
								v: 1
							}, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
						}
						return e.prototype = {
							applyToMatrix: function(t) {
								var e = this._mdf;
								this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
							},
							getValue: function(e) {
								if (this.elem.globalData.frameId !== this.frameId) {
									if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
										var r;
										if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
											var i, a;
											if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (i = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
											else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
												i = [], a = [];
												var s = this.px,
													n = this.py;
												s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (i[0] = s.getValueAtTime((s.keyframes[0].t + .01) / r, 0), i[1] = n.getValueAtTime((n.keyframes[0].t + .01) / r, 0), a[0] = s.getValueAtTime(s.keyframes[0].t / r, 0), a[1] = n.getValueAtTime(n.keyframes[0].t / r, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (i[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), i[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / r, 0), a[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / r, 0), a[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / r, 0)) : (i = [s.pv, n.pv], a[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / r, s.offsetTime), a[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / r, n.offsetTime))
											} else i = a = t;
											this.v.rotate(-Math.atan2(i[1] - a[1], i[0] - a[0]))
										}
										this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
									}
									this.frameId = this.elem.globalData.frameId
								}
							},
							precalculateMatrix: function() {
								if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
									if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
										if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
										this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
									}
									this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
								}
							},
							autoOrient: function() {}
						}, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
							this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
						}, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
							getTransformProperty: function(t, r, i) {
								return new e(t, r, i)
							}
						}
					}();

				function ShapePath() {
					this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
				}
				ShapePath.prototype.setPathData = function(t, e) {
					this.c = t, this.setLength(e);
					for (var r = 0; r < e;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
				}, ShapePath.prototype.setLength = function(t) {
					for (; this._maxLength < t;) this.doubleArrayLength();
					this._length = t
				}, ShapePath.prototype.doubleArrayLength = function() {
					this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
				}, ShapePath.prototype.setXYAt = function(t, e, r, i, a) {
					var s;
					switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
						case "v":
							s = this.v;
							break;
						case "i":
							s = this.i;
							break;
						case "o":
							s = this.o;
							break;
						default:
							s = []
					}(!s[i] || s[i] && !a) && (s[i] = pointPool.newElement()), s[i][0] = t, s[i][1] = e
				}, ShapePath.prototype.setTripleAt = function(t, e, r, i, a, s, n, o) {
					this.setXYAt(t, e, "v", n, o), this.setXYAt(r, i, "o", n, o), this.setXYAt(a, s, "i", n, o)
				}, ShapePath.prototype.reverse = function() {
					var t = new ShapePath;
					t.setPathData(this.c, this._length);
					var e = this.v,
						r = this.o,
						i = this.i,
						a = 0;
					this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), a = 1);
					var s, n = this._length - 1,
						o = this._length;
					for (s = a; s < o; s += 1) t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], s, !1), n -= 1;
					return t
				};
				var ShapePropertyFactory = function() {
						var t = -999999;

						function e(t, e, r) {
							var i, a, s, n, o, h, l, p, f, c = r.lastIndex,
								u = this.keyframes;
							if (t < u[0].t - this.offsetTime) i = u[0].s[0], s = !0, c = 0;
							else if (t >= u[u.length - 1].t - this.offsetTime) i = u[u.length - 1].s ? u[u.length - 1].s[0] : u[u.length - 2].e[0], s = !0;
							else {
								for (var m, d, g = c, y = u.length - 1, v = !0; v && (m = u[g], !((d = u[g + 1]).t - this.offsetTime > t));) g < y - 1 ? g += 1 : v = !1;
								if (c = g, !(s = 1 === m.h)) {
									if (t >= d.t - this.offsetTime) p = 1;
									else if (t < m.t - this.offsetTime) p = 0;
									else {
										var b;
										m.__fnct ? b = m.__fnct : (b = BezierFactory.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y).get, m.__fnct = b), p = b((t - (m.t - this.offsetTime)) / (d.t - this.offsetTime - (m.t - this.offsetTime)))
									}
									a = d.s ? d.s[0] : m.e[0]
								}
								i = m.s[0]
							}
							for (h = e._length, l = i.i[0].length, r.lastIndex = c, n = 0; n < h; n += 1)
								for (o = 0; o < l; o += 1) f = s ? i.i[n][o] : i.i[n][o] + (a.i[n][o] - i.i[n][o]) * p, e.i[n][o] = f, f = s ? i.o[n][o] : i.o[n][o] + (a.o[n][o] - i.o[n][o]) * p, e.o[n][o] = f, f = s ? i.v[n][o] : i.v[n][o] + (a.v[n][o] - i.v[n][o]) * p, e.v[n][o] = f
						}

						function r() {
							var e = this.comp.renderedFrame - this.offsetTime,
								r = this.keyframes[0].t - this.offsetTime,
								i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
								a = this._caching.lastFrame;
							return a !== t && (a < r && e < r || a > i && e > i) || (this._caching.lastIndex = a < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
						}

						function i() {
							this.paths = this.localShapeCollection
						}

						function a(t) {
							(function(t, e) {
								if (t._length !== e._length || t.c !== e.c) return !1;
								var r, i = t._length;
								for (r = 0; r < i; r += 1)
									if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
								return !0
							})(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
						}

						function s() {
							if (this.elem.globalData.frameId !== this.frameId)
								if (this.effectsSequence.length)
									if (this.lock) this.setVValue(this.pv);
									else {
										var t, e;
										this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
										var r = this.effectsSequence.length;
										for (e = 0; e < r; e += 1) t = this.effectsSequence[e](t);
										this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
									}
							else this._mdf = !1
						}

						function n(t, e, r) {
							this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
							var a = 3 === r ? e.pt.k : e.ks.k;
							this.v = shapePool.clone(a), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
						}

						function o(t) {
							this.effectsSequence.push(t), this.container.addDynamicProperty(this)
						}

						function h(e, a, s) {
							this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === s ? a.pt.k : a.ks.k, this.k = !0, this.kf = !0;
							var n = this.keyframes[0].s[0].i.length;
							this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
								lastFrame: t,
								lastIndex: 0
							}, this.effectsSequence = [r.bind(this)]
						}
						n.prototype.interpolateShape = e, n.prototype.getValue = s, n.prototype.setVValue = a, n.prototype.addEffect = o, h.prototype.getValue = s, h.prototype.interpolateShape = e, h.prototype.setVValue = a, h.prototype.addEffect = o;
						var l = function() {
								var t = roundCorner;

								function e(t, e) {
									this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
								}
								return e.prototype = {
									reset: i,
									getValue: function() {
										this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
									},
									convertEllToPath: function() {
										var e = this.p.v[0],
											r = this.p.v[1],
											i = this.s.v[0] / 2,
											a = this.s.v[1] / 2,
											s = 3 !== this.d,
											n = this.v;
										n.v[0][0] = e, n.v[0][1] = r - a, n.v[1][0] = s ? e + i : e - i, n.v[1][1] = r, n.v[2][0] = e, n.v[2][1] = r + a, n.v[3][0] = s ? e - i : e + i, n.v[3][1] = r, n.i[0][0] = s ? e - i * t : e + i * t, n.i[0][1] = r - a, n.i[1][0] = s ? e + i : e - i, n.i[1][1] = r - a * t, n.i[2][0] = s ? e + i * t : e - i * t, n.i[2][1] = r + a, n.i[3][0] = s ? e - i : e + i, n.i[3][1] = r + a * t, n.o[0][0] = s ? e + i * t : e - i * t, n.o[0][1] = r - a, n.o[1][0] = s ? e + i : e - i, n.o[1][1] = r + a * t, n.o[2][0] = s ? e - i * t : e + i * t, n.o[2][1] = r + a, n.o[3][0] = s ? e - i : e + i, n.o[3][1] = r - a * t
									}
								}, extendPrototype([DynamicPropertyContainer], e), e
							}(),
							p = function() {
								function t(t, e) {
									this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
								}
								return t.prototype = {
									reset: i,
									getValue: function() {
										this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
									},
									convertStarToPath: function() {
										var t, e, r, i, a = 2 * Math.floor(this.pt.v),
											s = 2 * Math.PI / a,
											n = !0,
											o = this.or.v,
											h = this.ir.v,
											l = this.os.v,
											p = this.is.v,
											f = 2 * Math.PI * o / (2 * a),
											c = 2 * Math.PI * h / (2 * a),
											u = -Math.PI / 2;
										u += this.r.v;
										var m = 3 === this.data.d ? -1 : 1;
										for (this.v._length = 0, t = 0; t < a; t += 1) {
											r = n ? l : p, i = n ? f : c;
											var d = (e = n ? o : h) * Math.cos(u),
												g = e * Math.sin(u),
												y = 0 === d && 0 === g ? 0 : g / Math.sqrt(d * d + g * g),
												v = 0 === d && 0 === g ? 0 : -d / Math.sqrt(d * d + g * g);
											d += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(d, g, d - y * i * r * m, g - v * i * r * m, d + y * i * r * m, g + v * i * r * m, t, !0), n = !n, u += s * m
										}
									},
									convertPolygonToPath: function() {
										var t, e = Math.floor(this.pt.v),
											r = 2 * Math.PI / e,
											i = this.or.v,
											a = this.os.v,
											s = 2 * Math.PI * i / (4 * e),
											n = .5 * -Math.PI,
											o = 3 === this.data.d ? -1 : 1;
										for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
											var h = i * Math.cos(n),
												l = i * Math.sin(n),
												p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
												f = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
											h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * s * a * o, l - f * s * a * o, h + p * s * a * o, l + f * s * a * o, t, !0), n += r * o
										}
										this.paths.length = 0, this.paths[0] = this.v
									}
								}, extendPrototype([DynamicPropertyContainer], t), t
							}(),
							f = function() {
								function t(t, e) {
									this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
								}
								return t.prototype = {
									convertRectToPath: function() {
										var t = this.p.v[0],
											e = this.p.v[1],
											r = this.s.v[0] / 2,
											i = this.s.v[1] / 2,
											a = bmMin(r, i, this.r.v),
											s = a * (1 - roundCorner);
										this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + a, t + r, e - i + a, t + r, e - i + s, 0, !0), this.v.setTripleAt(t + r, e + i - a, t + r, e + i - s, t + r, e + i - a, 1, !0), 0 !== a ? (this.v.setTripleAt(t + r - a, e + i, t + r - a, e + i, t + r - s, e + i, 2, !0), this.v.setTripleAt(t - r + a, e + i, t - r + s, e + i, t - r + a, e + i, 3, !0), this.v.setTripleAt(t - r, e + i - a, t - r, e + i - a, t - r, e + i - s, 4, !0), this.v.setTripleAt(t - r, e - i + a, t - r, e - i + s, t - r, e - i + a, 5, !0), this.v.setTripleAt(t - r + a, e - i, t - r + a, e - i, t - r + s, e - i, 6, !0), this.v.setTripleAt(t + r - a, e - i, t + r - s, e - i, t + r - a, e - i, 7, !0)) : (this.v.setTripleAt(t - r, e + i, t - r + s, e + i, t - r, e + i, 2), this.v.setTripleAt(t - r, e - i, t - r, e - i + s, t - r, e - i, 3))) : (this.v.setTripleAt(t + r, e - i + a, t + r, e - i + s, t + r, e - i + a, 0, !0), 0 !== a ? (this.v.setTripleAt(t + r - a, e - i, t + r - a, e - i, t + r - s, e - i, 1, !0), this.v.setTripleAt(t - r + a, e - i, t - r + s, e - i, t - r + a, e - i, 2, !0), this.v.setTripleAt(t - r, e - i + a, t - r, e - i + a, t - r, e - i + s, 3, !0), this.v.setTripleAt(t - r, e + i - a, t - r, e + i - s, t - r, e + i - a, 4, !0), this.v.setTripleAt(t - r + a, e + i, t - r + a, e + i, t - r + s, e + i, 5, !0), this.v.setTripleAt(t + r - a, e + i, t + r - s, e + i, t + r - a, e + i, 6, !0), this.v.setTripleAt(t + r, e + i - a, t + r, e + i - a, t + r, e + i - s, 7, !0)) : (this.v.setTripleAt(t - r, e - i, t - r + s, e - i, t - r, e - i, 1, !0), this.v.setTripleAt(t - r, e + i, t - r, e + i - s, t - r, e + i, 2, !0), this.v.setTripleAt(t + r, e + i, t + r - s, e + i, t + r, e + i, 3, !0)))
									},
									getValue: function() {
										this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
									},
									reset: i
								}, extendPrototype([DynamicPropertyContainer], t), t
							}(),
							c = {
								getShapeProp: function(t, e, r) {
									var i;
									return 3 === r || 4 === r ? i = (3 === r ? e.pt : e.ks).k.length ? new h(t, e, r) : new n(t, e, r) : 5 === r ? i = new f(t, e) : 6 === r ? i = new l(t, e) : 7 === r && (i = new p(t, e)), i.k && t.addDynamicProperty(i), i
								},
								getConstructorFunction: function() {
									return n
								},
								getKeyframedConstructorFunction: function() {
									return h
								}
							};
						return c
					}(),
					ShapeModifiers = (ob = {}, modifiers = {}, ob.registerModifier = function(t, e) {
						modifiers[t] || (modifiers[t] = e)
					}, ob.getModifier = function(t, e, r) {
						return new modifiers[t](e, r)
					}, ob),
					ob, modifiers;

				function ShapeModifier() {}

				function TrimModifier() {}

				function RoundCornersModifier() {}

				function PuckerAndBloatModifier() {}

				function RepeaterModifier() {}

				function ShapeCollection() {
					this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
				}

				function DashProperty(t, e, r, i) {
					var a;
					this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
					var s, n = e.length || 0;
					for (a = 0; a < n; a += 1) s = PropertyFactory.getProp(t, e[a].v, 0, 0, this), this.k = s.k || this.k, this.dataProps[a] = {
						n: e[a].n,
						p: s
					};
					this.k || this.getValue(!0), this._isAnimated = this.k
				}

				function GradientProperty(t, e, r) {
					this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
					var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
					this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
				}
				ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
					if (!this.closed) {
						t.sh.container.addDynamicProperty(t.sh);
						var e = {
							shape: t.sh,
							data: t,
							localShapeCollection: shapeCollectionPool.newShapeCollection()
						};
						this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
					}
				}, ShapeModifier.prototype.init = function(t, e) {
					this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
				}, ShapeModifier.prototype.processKeys = function() {
					this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
				}, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
					this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
				}, TrimModifier.prototype.addShapeToModifier = function(t) {
					t.pathsData = []
				}, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, a) {
					var s = [];
					e <= 1 ? s.push({
						s: t,
						e: e
					}) : t >= 1 ? s.push({
						s: t - 1,
						e: e - 1
					}) : (s.push({
						s: t,
						e: 1
					}), s.push({
						s: 0,
						e: e - 1
					}));
					var n, o, h = [],
						l = s.length;
					for (n = 0; n < l; n += 1) {
						var p, f;
						(o = s[n]).e * a < i || o.s * a > i + r || (p = o.s * a <= i ? 0 : (o.s * a - i) / r, f = o.e * a >= i + r ? 1 : (o.e * a - i) / r, h.push([p, f]))
					}
					return h.length || h.push([0, 0]), h
				}, TrimModifier.prototype.releasePathsData = function(t) {
					var e, r = t.length;
					for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
					return t.length = 0, t
				}, TrimModifier.prototype.processShapes = function(t) {
					var e, r, i, a;
					if (this._mdf || t) {
						var s = this.o.v % 360 / 360;
						if (s < 0 && (s += 1), (e = this.s.v > 1 ? 1 + s : this.s.v < 0 ? 0 + s : this.s.v + s) > (r = this.e.v > 1 ? 1 + s : this.e.v < 0 ? 0 + s : this.e.v + s)) {
							var n = e;
							e = r, r = n
						}
						e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r
					} else e = this.sValue, r = this.eValue;
					var o, h, l, p, f, c = this.shapes.length,
						u = 0;
					if (r === e)
						for (a = 0; a < c; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = !0, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
					else if (1 === r && 0 === e || 0 === r && 1 === e) {
						if (this._mdf)
							for (a = 0; a < c; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = !0
					} else {
						var m, d, g = [];
						for (a = 0; a < c; a += 1)
							if ((m = this.shapes[a]).shape._mdf || this._mdf || t || 2 === this.m) {
								if (h = (i = m.shape.paths)._length, f = 0, !m.shape._mdf && m.pathsData.length) f = m.totalShapeLength;
								else {
									for (l = this.releasePathsData(m.pathsData), o = 0; o < h; o += 1) p = bez.getSegmentsLength(i.shapes[o]), l.push(p), f += p.totalLength;
									m.totalShapeLength = f, m.pathsData = l
								}
								u += f, m.shape._mdf = !0
							} else m.shape.paths = m.localShapeCollection;
						var y, v = e,
							b = r,
							x = 0;
						for (a = c - 1; a >= 0; a -= 1)
							if ((m = this.shapes[a]).shape._mdf) {
								for ((d = m.localShapeCollection).releaseShapes(), 2 === this.m && c > 1 ? (y = this.calculateShapeEdges(e, r, m.totalShapeLength, x, u), x += m.totalShapeLength) : y = [
										[v, b]
									], h = y.length, o = 0; o < h; o += 1) {
									v = y[o][0], b = y[o][1], g.length = 0, b <= 1 ? g.push({
										s: m.totalShapeLength * v,
										e: m.totalShapeLength * b
									}) : v >= 1 ? g.push({
										s: m.totalShapeLength * (v - 1),
										e: m.totalShapeLength * (b - 1)
									}) : (g.push({
										s: m.totalShapeLength * v,
										e: m.totalShapeLength
									}), g.push({
										s: 0,
										e: m.totalShapeLength * (b - 1)
									}));
									var E = this.addShapes(m, g[0]);
									if (g[0].s !== g[0].e) {
										if (g.length > 1)
											if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
												var P = E.pop();
												this.addPaths(E, d), E = this.addShapes(m, g[1], P)
											} else this.addPaths(E, d), E = this.addShapes(m, g[1]);
										this.addPaths(E, d)
									}
								}
								m.shape.paths = d
							}
					}
				}, TrimModifier.prototype.addPaths = function(t, e) {
					var r, i = t.length;
					for (r = 0; r < i; r += 1) e.addShape(t[r])
				}, TrimModifier.prototype.addSegment = function(t, e, r, i, a, s, n) {
					a.setXYAt(e[0], e[1], "o", s), a.setXYAt(r[0], r[1], "i", s + 1), n && a.setXYAt(t[0], t[1], "v", s), a.setXYAt(i[0], i[1], "v", s + 1)
				}, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
					e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
				}, TrimModifier.prototype.addShapes = function(t, e, r) {
					var i, a, s, n, o, h, l, p, f = t.pathsData,
						c = t.shape.paths.shapes,
						u = t.shape.paths._length,
						m = 0,
						d = [],
						g = !0;
					for (r ? (o = r._length, p = r._length) : (r = shapePool.newElement(), o = 0, p = 0), d.push(r), i = 0; i < u; i += 1) {
						for (h = f[i].lengths, r.c = c[i].c, s = c[i].c ? h.length : h.length + 1, a = 1; a < s; a += 1)
							if (m + (n = h[a - 1]).addedLength < e.s) m += n.addedLength, r.c = !1;
							else {
								if (m > e.e) {
									r.c = !1;
									break
								}
								e.s <= m && e.e >= m + n.addedLength ? (this.addSegment(c[i].v[a - 1], c[i].o[a - 1], c[i].i[a], c[i].v[a], r, o, g), g = !1) : (l = bez.getNewSegment(c[i].v[a - 1], c[i].v[a], c[i].o[a - 1], c[i].i[a], (e.s - m) / n.addedLength, (e.e - m) / n.addedLength, h[a - 1]), this.addSegmentFromArray(l, r, o, g), g = !1, r.c = !1), m += n.addedLength, o += 1
							} if (c[i].c && h.length) {
							if (n = h[a - 1], m <= e.e) {
								var y = h[a - 1].addedLength;
								e.s <= m && e.e >= m + y ? (this.addSegment(c[i].v[a - 1], c[i].o[a - 1], c[i].i[0], c[i].v[0], r, o, g), g = !1) : (l = bez.getNewSegment(c[i].v[a - 1], c[i].v[0], c[i].o[a - 1], c[i].i[0], (e.s - m) / y, (e.e - m) / y, h[a - 1]), this.addSegmentFromArray(l, r, o, g), g = !1, r.c = !1)
							} else r.c = !1;
							m += n.addedLength, o += 1
						}
						if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), m > e.e) break;
						i < u - 1 && (r = shapePool.newElement(), g = !0, d.push(r), o = 0)
					}
					return d
				}, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
					this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
				}, RoundCornersModifier.prototype.processPath = function(t, e) {
					var r, i = shapePool.newElement();
					i.c = t.c;
					var a, s, n, o, h, l, p, f, c, u, m, d, g = t._length,
						y = 0;
					for (r = 0; r < g; r += 1) a = t.v[r], n = t.o[r], s = t.i[r], a[0] === n[0] && a[1] === n[1] && a[0] === s[0] && a[1] === s[1] ? 0 !== r && r !== g - 1 || t.c ? (o = 0 === r ? t.v[g - 1] : t.v[r - 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = m = a[0] + (o[0] - a[0]) * l, f = d = a[1] - (a[1] - o[1]) * l, c = p - (p - a[0]) * roundCorner, u = f - (f - a[1]) * roundCorner, i.setTripleAt(p, f, c, u, m, d, y), y += 1, o = r === g - 1 ? t.v[0] : t.v[r + 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = c = a[0] + (o[0] - a[0]) * l, f = u = a[1] + (o[1] - a[1]) * l, m = p - (p - a[0]) * roundCorner, d = f - (f - a[1]) * roundCorner, i.setTripleAt(p, f, c, u, m, d, y), y += 1) : (i.setTripleAt(a[0], a[1], n[0], n[1], s[0], s[1], y), y += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], y), y += 1);
					return i
				}, RoundCornersModifier.prototype.processShapes = function(t) {
					var e, r, i, a, s, n, o = this.shapes.length,
						h = this.rd.v;
					if (0 !== h)
						for (r = 0; r < o; r += 1) {
							if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
								for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) n.addShape(this.processPath(e[i], h));
							s.shape.paths = s.localShapeCollection
						}
					this.dynamicProperties.length || (this._mdf = !1)
				}, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
					this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
				}, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
					var r = e / 100,
						i = [0, 0],
						a = t._length,
						s = 0;
					for (s = 0; s < a; s += 1) i[0] += t.v[s][0], i[1] += t.v[s][1];
					i[0] /= a, i[1] /= a;
					var n, o, h, l, p, f, c = shapePool.newElement();
					for (c.c = t.c, s = 0; s < a; s += 1) n = t.v[s][0] + (i[0] - t.v[s][0]) * r, o = t.v[s][1] + (i[1] - t.v[s][1]) * r, h = t.o[s][0] + (i[0] - t.o[s][0]) * -r, l = t.o[s][1] + (i[1] - t.o[s][1]) * -r, p = t.i[s][0] + (i[0] - t.i[s][0]) * -r, f = t.i[s][1] + (i[1] - t.i[s][1]) * -r, c.setTripleAt(n, o, h, l, p, f, s);
					return c
				}, PuckerAndBloatModifier.prototype.processShapes = function(t) {
					var e, r, i, a, s, n, o = this.shapes.length,
						h = this.amount.v;
					if (0 !== h)
						for (r = 0; r < o; r += 1) {
							if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
								for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) n.addShape(this.processPath(e[i], h));
							s.shape.paths = s.localShapeCollection
						}
					this.dynamicProperties.length || (this._mdf = !1)
				}, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
					this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
				}, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, a, s) {
					var n = s ? -1 : 1,
						o = i.s.v[0] + (1 - i.s.v[0]) * (1 - a),
						h = i.s.v[1] + (1 - i.s.v[1]) * (1 - a);
					t.translate(i.p.v[0] * n * a, i.p.v[1] * n * a, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * a), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(s ? 1 / o : o, s ? 1 / h : h), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
				}, RepeaterModifier.prototype.init = function(t, e, r, i) {
					for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;) r -= 1, this._elements.unshift(e[r]);
					this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
				}, RepeaterModifier.prototype.resetElements = function(t) {
					var e, r = t.length;
					for (e = 0; e < r; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
				}, RepeaterModifier.prototype.cloneElements = function(t) {
					var e = JSON.parse(JSON.stringify(t));
					return this.resetElements(e), e
				}, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
					var r, i = t.length;
					for (r = 0; r < i; r += 1) t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e)
				}, RepeaterModifier.prototype.processShapes = function(t) {
					var e, r, i, a, s, n = !1;
					if (this._mdf || t) {
						var o, h = Math.ceil(this.c.v);
						if (this._groups.length < h) {
							for (; this._groups.length < h;) {
								var l = {
									it: this.cloneElements(this._elements),
									ty: "gr"
								};
								l.it.push({
									a: {
										a: 0,
										ix: 1,
										k: [0, 0]
									},
									nm: "Transform",
									o: {
										a: 0,
										ix: 7,
										k: 100
									},
									p: {
										a: 0,
										ix: 2,
										k: [0, 0]
									},
									r: {
										a: 1,
										ix: 6,
										k: [{
											s: 0,
											e: 0,
											t: 0
										}, {
											s: 0,
											e: 0,
											t: 1
										}]
									},
									s: {
										a: 0,
										ix: 3,
										k: [100, 100]
									},
									sa: {
										a: 0,
										ix: 5,
										k: 0
									},
									sk: {
										a: 0,
										ix: 4,
										k: 0
									},
									ty: "tr"
								}), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
							}
							this.elem.reloadShapes(), n = !0
						}
						for (s = 0, i = 0; i <= this._groups.length - 1; i += 1) {
							if (o = s < h, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
								var p = this.elemsData[i].it,
									f = p[p.length - 1];
								0 !== f.transform.op.v ? (f.transform.op._mdf = !0, f.transform.op.v = 0) : f.transform.op._mdf = !1
							}
							s += 1
						}
						this._currentCopies = h;
						var c = this.o.v,
							u = c % 1,
							m = c > 0 ? Math.floor(c) : Math.ceil(c),
							d = this.pMatrix.props,
							g = this.rMatrix.props,
							y = this.sMatrix.props;
						this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
						var v, b, x = 0;
						if (c > 0) {
							for (; x < m;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), x += 1;
							u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, u, !1), x += u)
						} else if (c < 0) {
							for (; x > m;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), x -= 1;
							u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -u, !0), x -= u)
						}
						for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;) {
							if (b = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== x) {
								for ((0 !== i && 1 === a || i !== this._currentCopies - 1 && -1 === a) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), v = 0; v < b; v += 1) r[v] = this.matrix.props[v];
								this.matrix.reset()
							} else
								for (this.matrix.reset(), v = 0; v < b; v += 1) r[v] = this.matrix.props[v];
							x += 1, s -= 1, i += a
						}
					} else
						for (s = this._currentCopies, i = 0, a = 1; s;) r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, i += a;
					return n
				}, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
					this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
				}, ShapeCollection.prototype.releaseShapes = function() {
					var t;
					for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
					this._length = 0
				}, DashProperty.prototype.getValue = function(t) {
					if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
						var e = 0,
							r = this.dataProps.length;
						for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
					}
				}, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
					for (var r = 0, i = this.o.length / 2; r < i;) {
						if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > .01) return !1;
						r += 1
					}
					return !0
				}, GradientProperty.prototype.checkCollapsable = function() {
					if (this.o.length / 2 != this.c.length / 4) return !1;
					if (this.data.k.k[0].s)
						for (var t = 0, e = this.data.k.k.length; t < e;) {
							if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
							t += 1
						} else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
					return !0
				}, GradientProperty.prototype.getValue = function(t) {
					if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
						var e, r, i, a = 4 * this.data.p;
						for (e = 0; e < a; e += 1) r = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
						if (this.o.length)
							for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1) r = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
						this._mdf = !t
					}
				}, extendPrototype([DynamicPropertyContainer], GradientProperty);
				var buildShapeString = function(t, e, r, i) {
						if (0 === e) return "";
						var a, s = t.o,
							n = t.i,
							o = t.v,
							h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
						for (a = 1; a < e; a += 1) h += " C" + i.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + " " + i.applyToPointStringified(n[a][0], n[a][1]) + " " + i.applyToPointStringified(o[a][0], o[a][1]);
						return r && e && (h += " C" + i.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
					},
					audioControllerFactory = function() {
						function t(t) {
							this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
						}
						return t.prototype = {
								addAudio: function(t) {
									this.audios.push(t)
								},
								pause: function() {
									var t, e = this.audios.length;
									for (t = 0; t < e; t += 1) this.audios[t].pause()
								},
								resume: function() {
									var t, e = this.audios.length;
									for (t = 0; t < e; t += 1) this.audios[t].resume()
								},
								setRate: function(t) {
									var e, r = this.audios.length;
									for (e = 0; e < r; e += 1) this.audios[e].setRate(t)
								},
								createAudio: function(t) {
									return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({
										src: [t]
									}) : {
										isPlaying: !1,
										play: function() {
											this.isPlaying = !0
										},
										seek: function() {
											this.isPlaying = !1
										},
										playing: function() {},
										rate: function() {},
										setVolume: function() {}
									}
								},
								setAudioFactory: function(t) {
									this.audioFactory = t
								},
								setVolume: function(t) {
									this._volume = t, this._updateVolume()
								},
								mute: function() {
									this._isMuted = !0, this._updateVolume()
								},
								unmute: function() {
									this._isMuted = !1, this._updateVolume()
								},
								getVolume: function() {
									return this._volume
								},
								_updateVolume: function() {
									var t, e = this.audios.length;
									for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
								}
							},
							function() {
								return new t
							}
					}(),
					ImagePreloader = function() {
						var t = function() {
							var t = createTag("canvas");
							t.width = 1, t.height = 1;
							var e = t.getContext("2d");
							return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
						}();

						function e() {
							this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
						}

						function r() {
							this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
						}

						function i(t, e, r) {
							var i = "";
							if (t.e) i = t.p;
							else if (e) {
								var a = t.p; - 1 !== a.indexOf("images/") && (a = a.split("/")[1]), i = e + a
							} else i = r, i += t.u ? t.u : "", i += t.p;
							return i
						}

						function a(t) {
							var e = 0,
								r = setInterval(function() {
									(t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(r)), e += 1
								}.bind(this), 50)
						}

						function s(t) {
							var e = {
									assetData: t
								},
								r = i(t, this.assetsPath, this.path);
							return assetLoader.load(r, function(t) {
								e.img = t, this._footageLoaded()
							}.bind(this), function() {
								e.img = {}, this._footageLoaded()
							}.bind(this)), e
						}

						function n() {
							this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = a.bind(this), this.createFootageData = s.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
						}
						return n.prototype = {
							loadAssets: function(t, e) {
								var r;
								this.imagesLoadedCb = e;
								var i = t.length;
								for (r = 0; r < i; r += 1) t[r].layers || (t[r].t && "seq" !== t[r].t ? 3 === t[r].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[r]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[r]))))
							},
							setAssetsPath: function(t) {
								this.assetsPath = t || ""
							},
							setPath: function(t) {
								this.path = t || ""
							},
							loadedImages: function() {
								return this.totalImages === this.loadedAssets
							},
							loadedFootages: function() {
								return this.totalFootages === this.loadedFootagesCount
							},
							destroy: function() {
								this.imagesLoadedCb = null, this.images.length = 0
							},
							getAsset: function(t) {
								for (var e = 0, r = this.images.length; e < r;) {
									if (this.images[e].assetData === t) return this.images[e].img;
									e += 1
								}
								return null
							},
							createImgData: function(e) {
								var r = i(e, this.assetsPath, this.path),
									a = createTag("img");
								a.crossOrigin = "anonymous", a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", function() {
									s.img = t, this._imageLoaded()
								}.bind(this), !1), a.src = r;
								var s = {
									img: a,
									assetData: e
								};
								return s
							},
							createImageData: function(e) {
								var r = i(e, this.assetsPath, this.path),
									a = createNS("image");
								isSafari ? this.testImageLoaded(a) : a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", function() {
									s.img = t, this._imageLoaded()
								}.bind(this), !1), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append ? this._elementHelper.append(a) : this._elementHelper.appendChild(a);
								var s = {
									img: a,
									assetData: e
								};
								return s
							},
							imageLoaded: e,
							footageLoaded: r,
							setCacheType: function(t, e) {
								"svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
							}
						}, n
					}(),
					featureSupport = function() {
						var t = {
							maskType: !0
						};
						return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
					}(),
					filtersFactory = function() {
						var t = {
							createFilter: function(t, e) {
								var r = createNS("filter");
								return r.setAttribute("id", t), !0 !== e && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r
							},
							createAlphaToLuminanceFilter: function() {
								var t = createNS("feColorMatrix");
								return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
							}
						};
						return t
					}(),
					assetLoader = function() {
						function t(t) {
							return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
						}
						return {
							load: function(e, r, i) {
								var a, s = new XMLHttpRequest;
								try {
									s.responseType = "json"
								} catch (t) {}
								s.onreadystatechange = function() {
									if (4 === s.readyState)
										if (200 === s.status) a = t(s), r(a);
										else try {
											a = t(s), r(a)
										} catch (t) {
											i && i(t)
										}
								}, s.open("GET", e, !0), s.send()
							}
						}
					}();

				function TextAnimatorProperty(t, e, r) {
					this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
						alignment: {}
					}, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
				}

				function TextAnimatorDataProperty(t, e, r) {
					var i = {
							propType: !1
						},
						a = PropertyFactory.getProp,
						s = e.a;
					this.a = {
						r: s.r ? a(t, s.r, 0, degToRads, r) : i,
						rx: s.rx ? a(t, s.rx, 0, degToRads, r) : i,
						ry: s.ry ? a(t, s.ry, 0, degToRads, r) : i,
						sk: s.sk ? a(t, s.sk, 0, degToRads, r) : i,
						sa: s.sa ? a(t, s.sa, 0, degToRads, r) : i,
						s: s.s ? a(t, s.s, 1, .01, r) : i,
						a: s.a ? a(t, s.a, 1, 0, r) : i,
						o: s.o ? a(t, s.o, 0, .01, r) : i,
						p: s.p ? a(t, s.p, 1, 0, r) : i,
						sw: s.sw ? a(t, s.sw, 0, 0, r) : i,
						sc: s.sc ? a(t, s.sc, 1, 0, r) : i,
						fc: s.fc ? a(t, s.fc, 1, 0, r) : i,
						fh: s.fh ? a(t, s.fh, 0, 0, r) : i,
						fs: s.fs ? a(t, s.fs, 0, .01, r) : i,
						fb: s.fb ? a(t, s.fb, 0, .01, r) : i,
						t: s.t ? a(t, s.t, 0, 0, r) : i
					}, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
				}

				function LetterProps(t, e, r, i, a, s) {
					this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = a, this.p = s, this._mdf = {
						o: !0,
						sw: !!e,
						sc: !!r,
						fc: !!i,
						m: !0,
						p: !0
					}
				}

				function TextProperty(t, e) {
					this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
						ascent: 0,
						boxWidth: this.defaultBoxWidth,
						f: "",
						fStyle: "",
						fWeight: "",
						fc: "",
						j: "",
						justifyOffset: "",
						l: [],
						lh: 0,
						lineWidths: [],
						ls: "",
						of: "",
						s: "",
						sc: "",
						sw: 0,
						t: 0,
						tr: 0,
						sz: 0,
						ps: null,
						fillColorAnim: !1,
						strokeColorAnim: !1,
						strokeWidthAnim: !1,
						yOffset: 0,
						finalSize: 0,
						finalText: [],
						finalLineHeight: 0,
						__complete: !1
					}, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
				}
				TextAnimatorProperty.prototype.searchProperties = function() {
					var t, e, r = this._textData.a.length,
						i = PropertyFactory.getProp;
					for (t = 0; t < r; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
					this._textData.p && "m" in this._textData.p ? (this._pathData = {
						f: i(this._elem, this._textData.p.f, 0, 0, this),
						l: i(this._elem, this._textData.p.l, 0, 0, this),
						r: this._textData.p.r,
						m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
					}, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
				}, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
					if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
						this._isFirstFrame = !1;
						var r, i, a, s, n, o, h, l, p, f, c, u, m, d, g, y, v, b, x, E = this._moreOptions.alignment.v,
							P = this._animatorsData,
							S = this._textData,
							C = this.mHelper,
							A = this._renderType,
							F = this.renderedLetters.length,
							_ = t.l;
						if (this._hasMaskedPath) {
							if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
								var k, T = x.v;
								for (this._pathData.r && (T = T.reverse()), n = {
										tLength: 0,
										segments: []
									}, s = T._length - 1, y = 0, a = 0; a < s; a += 1) k = bez.buildBezierData(T.v[a], T.v[a + 1], [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]], [T.i[a + 1][0] - T.v[a + 1][0], T.i[a + 1][1] - T.v[a + 1][1]]), n.tLength += k.segmentLength, n.segments.push(k), y += k.segmentLength;
								a = s, x.v.c && (k = bez.buildBezierData(T.v[a], T.v[0], [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]], [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]]), n.tLength += k.segmentLength, n.segments.push(k), y += k.segmentLength), this._pathData.pi = n
							}
							if (n = this._pathData.pi, o = this._pathData.f.v, c = 0, f = 1, l = 0, p = !0, d = n.segments, o < 0 && x.v.c)
								for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), f = (m = d[c = d.length - 1].points).length - 1; o < 0;) o += m[f].partialLength, (f -= 1) < 0 && (f = (m = d[c -= 1].points).length - 1);
							u = (m = d[c].points)[f - 1], g = (h = m[f]).partialLength
						}
						s = _.length, r = 0, i = 0;
						var D, w, M, I, B, V = 1.2 * t.finalSize * .714,
							R = !0;
						M = P.length;
						var L, G, N, z, O, H, j, q, W, X, Y, U, $ = -1,
							K = o,
							Z = c,
							J = f,
							Q = -1,
							tt = "",
							et = this.defaultPropsArray;
						if (2 === t.j || 1 === t.j) {
							var rt = 0,
								it = 0,
								at = 2 === t.j ? -.5 : -1,
								st = 0,
								nt = !0;
							for (a = 0; a < s; a += 1)
								if (_[a].n) {
									for (rt && (rt += it); st < a;) _[st].animatorJustifyOffset = rt, st += 1;
									rt = 0, nt = !0
								} else {
									for (w = 0; w < M; w += 1)(D = P[w].a).t.propType && (nt && 2 === t.j && (it += D.t.v * at), (B = P[w].s.getMult(_[a].anIndexes[w], S.a[w].s.totalChars)).length ? rt += D.t.v * B[0] * at : rt += D.t.v * B * at);
									nt = !1
								} for (rt && (rt += it); st < a;) _[st].animatorJustifyOffset = rt, st += 1
						}
						for (a = 0; a < s; a += 1) {
							if (C.reset(), z = 1, _[a].n) r = 0, i += t.yOffset, i += R ? 1 : 0, o = K, R = !1, this._hasMaskedPath && (f = J, u = (m = d[c = Z].points)[f - 1], g = (h = m[f]).partialLength, l = 0), tt = "", Y = "", W = "", U = "", et = this.defaultPropsArray;
							else {
								if (this._hasMaskedPath) {
									if (Q !== _[a].line) {
										switch (t.j) {
											case 1:
												o += y - t.lineWidths[_[a].line];
												break;
											case 2:
												o += (y - t.lineWidths[_[a].line]) / 2
										}
										Q = _[a].line
									}
									$ !== _[a].ind && (_[$] && (o += _[$].extra), o += _[a].an / 2, $ = _[a].ind), o += E[0] * _[a].an * .005;
									var ot = 0;
									for (w = 0; w < M; w += 1)(D = P[w].a).p.propType && ((B = P[w].s.getMult(_[a].anIndexes[w], S.a[w].s.totalChars)).length ? ot += D.p.v[0] * B[0] : ot += D.p.v[0] * B), D.a.propType && ((B = P[w].s.getMult(_[a].anIndexes[w], S.a[w].s.totalChars)).length ? ot += D.a.v[0] * B[0] : ot += D.a.v[0] * B);
									for (p = !0; p;) l + g >= o + ot || !m ? (v = (o + ot - l) / h.partialLength, G = u.point[0] + (h.point[0] - u.point[0]) * v, N = u.point[1] + (h.point[1] - u.point[1]) * v, C.translate(-E[0] * _[a].an * .005, -E[1] * V * .01), p = !1) : m && (l += h.partialLength, (f += 1) >= m.length && (f = 0, d[c += 1] ? m = d[c].points : x.v.c ? (f = 0, m = d[c = 0].points) : (l -= h.partialLength, m = null)), m && (u = h, g = (h = m[f]).partialLength));
									L = _[a].an / 2 - _[a].add, C.translate(-L, 0, 0)
								} else L = _[a].an / 2 - _[a].add, C.translate(-L, 0, 0), C.translate(-E[0] * _[a].an * .005, -E[1] * V * .01, 0);
								for (w = 0; w < M; w += 1)(D = P[w].a).t.propType && (B = P[w].s.getMult(_[a].anIndexes[w], S.a[w].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? B.length ? o += D.t.v * B[0] : o += D.t.v * B : B.length ? r += D.t.v * B[0] : r += D.t.v * B));
								for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (O = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (j = [t.fc[0], t.fc[1], t.fc[2]]), w = 0; w < M; w += 1)(D = P[w].a).a.propType && ((B = P[w].s.getMult(_[a].anIndexes[w], S.a[w].s.totalChars)).length ? C.translate(-D.a.v[0] * B[0], -D.a.v[1] * B[1], D.a.v[2] * B[2]) : C.translate(-D.a.v[0] * B, -D.a.v[1] * B, D.a.v[2] * B));
								for (w = 0; w < M; w += 1)(D = P[w].a).s.propType && ((B = P[w].s.getMult(_[a].anIndexes[w], S.a[w].s.totalChars)).length ? C.scale(1 + (D.s.v[0] - 1) * B[0], 1 + (D.s.v[1] - 1) * B[1], 1) : C.scale(1 + (D.s.v[0] - 1) * B, 1 + (D.s.v[1] - 1) * B, 1));
								for (w = 0; w < M; w += 1) {
									if (D = P[w].a, B = P[w].s.getMult(_[a].anIndexes[w], S.a[w].s.totalChars), D.sk.propType && (B.length ? C.skewFromAxis(-D.sk.v * B[0], D.sa.v * B[1]) : C.skewFromAxis(-D.sk.v * B, D.sa.v * B)), D.r.propType && (B.length ? C.rotateZ(-D.r.v * B[2]) : C.rotateZ(-D.r.v * B)), D.ry.propType && (B.length ? C.rotateY(D.ry.v * B[1]) : C.rotateY(D.ry.v * B)), D.rx.propType && (B.length ? C.rotateX(D.rx.v * B[0]) : C.rotateX(D.rx.v * B)), D.o.propType && (B.length ? z += (D.o.v * B[0] - z) * B[0] : z += (D.o.v * B - z) * B), t.strokeWidthAnim && D.sw.propType && (B.length ? H += D.sw.v * B[0] : H += D.sw.v * B), t.strokeColorAnim && D.sc.propType)
										for (q = 0; q < 3; q += 1) B.length ? O[q] += (D.sc.v[q] - O[q]) * B[0] : O[q] += (D.sc.v[q] - O[q]) * B;
									if (t.fillColorAnim && t.fc) {
										if (D.fc.propType)
											for (q = 0; q < 3; q += 1) B.length ? j[q] += (D.fc.v[q] - j[q]) * B[0] : j[q] += (D.fc.v[q] - j[q]) * B;
										D.fh.propType && (j = B.length ? addHueToRGB(j, D.fh.v * B[0]) : addHueToRGB(j, D.fh.v * B)), D.fs.propType && (j = B.length ? addSaturationToRGB(j, D.fs.v * B[0]) : addSaturationToRGB(j, D.fs.v * B)), D.fb.propType && (j = B.length ? addBrightnessToRGB(j, D.fb.v * B[0]) : addBrightnessToRGB(j, D.fb.v * B))
									}
								}
								for (w = 0; w < M; w += 1)(D = P[w].a).p.propType && (B = P[w].s.getMult(_[a].anIndexes[w], S.a[w].s.totalChars), this._hasMaskedPath ? B.length ? C.translate(0, D.p.v[1] * B[0], -D.p.v[2] * B[1]) : C.translate(0, D.p.v[1] * B, -D.p.v[2] * B) : B.length ? C.translate(D.p.v[0] * B[0], D.p.v[1] * B[1], -D.p.v[2] * B[2]) : C.translate(D.p.v[0] * B, D.p.v[1] * B, -D.p.v[2] * B));
								if (t.strokeWidthAnim && (W = H < 0 ? 0 : H), t.strokeColorAnim && (X = "rgb(" + Math.round(255 * O[0]) + "," + Math.round(255 * O[1]) + "," + Math.round(255 * O[2]) + ")"), t.fillColorAnim && t.fc && (Y = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), this._hasMaskedPath) {
									if (C.translate(0, -t.ls), C.translate(0, E[1] * V * .01 + i, 0), S.p.p) {
										b = (h.point[1] - u.point[1]) / (h.point[0] - u.point[0]);
										var ht = 180 * Math.atan(b) / Math.PI;
										h.point[0] < u.point[0] && (ht += 180), C.rotate(-ht * Math.PI / 180)
									}
									C.translate(G, N, 0), o -= E[0] * _[a].an * .005, _[a + 1] && $ !== _[a + 1].ind && (o += _[a].an / 2, o += .001 * t.tr * t.finalSize)
								} else {
									switch (C.translate(r, i, 0), t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
										case 1:
											C.translate(_[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[_[a].line]), 0, 0);
											break;
										case 2:
											C.translate(_[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[_[a].line]) / 2, 0, 0)
									}
									C.translate(0, -t.ls), C.translate(L, 0, 0), C.translate(E[0] * _[a].an * .005, E[1] * V * .01, 0), r += _[a].l + .001 * t.tr * t.finalSize
								}
								"html" === A ? tt = C.toCSS() : "svg" === A ? tt = C.to2dCSS() : et = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]], U = z
							}
							F <= a ? (I = new LetterProps(U, W, X, Y, tt, et), this.renderedLetters.push(I), F += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[a], this.lettersChangedFlag = I.update(U, W, X, Y, tt, et) || this.lettersChangedFlag)
						}
					}
				}, TextAnimatorProperty.prototype.getValue = function() {
					this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
				}, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, r, i, a, s) {
					this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
					var n = !1;
					return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== a && (this.m = a, this._mdf.m = !0, n = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this._mdf.p = !0, n = !0), n
				}, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
					return t
				}, TextProperty.prototype.setCurrentData = function(t) {
					t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
				}, TextProperty.prototype.searchProperty = function() {
					return this.searchKeyframes()
				}, TextProperty.prototype.searchKeyframes = function() {
					return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
				}, TextProperty.prototype.addEffect = function(t) {
					this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
				}, TextProperty.prototype.getValue = function(t) {
					if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
						this.currentData.t = this.data.d.k[this.keysIndex].s.t;
						var e = this.currentData,
							r = this.keysIndex;
						if (this.lock) this.setCurrentData(this.currentData);
						else {
							var i;
							this.lock = !0, this._mdf = !1;
							var a = this.effectsSequence.length,
								s = t || this.data.d.k[this.keysIndex].s;
							for (i = 0; i < a; i += 1) s = r !== this.keysIndex ? this.effectsSequence[i](s, s.t) : this.effectsSequence[i](this.currentData, s.t);
							e !== s && this.setCurrentData(s), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
						}
					}
				}, TextProperty.prototype.getKeyframeValue = function() {
					for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);) r += 1;
					return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
				}, TextProperty.prototype.buildFinalText = function(t) {
					for (var e, r = FontManager.getCombinedCharacterCodes(), i = [], a = 0, s = t.length; a < s;) e = t.charCodeAt(a), -1 !== r.indexOf(e) ? i[i.length - 1] += t.charAt(a) : e >= 55296 && e <= 56319 && (e = t.charCodeAt(a + 1)) >= 56320 && e <= 57343 ? (i.push(t.substr(a, 2)), a += 1) : i.push(t.charAt(a)), a += 1;
					return i
				}, TextProperty.prototype.completeTextData = function(t) {
					t.__complete = !0;
					var e, r, i, a, s, n, o, h = this.elem.globalData.fontManager,
						l = this.data,
						p = [],
						f = 0,
						c = l.m.g,
						u = 0,
						m = 0,
						d = 0,
						g = [],
						y = 0,
						v = 0,
						b = h.getFontByName(t.f),
						x = 0,
						E = getFontProperties(b);
					t.fWeight = E.weight, t.fStyle = E.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
					var P, S = t.tr / 1e3 * t.finalSize;
					if (t.sz)
						for (var C, A, F = !0, _ = t.sz[0], k = t.sz[1]; F;) {
							C = 0, y = 0, r = (A = this.buildFinalText(t.t)).length, S = t.tr / 1e3 * t.finalSize;
							var T = -1;
							for (e = 0; e < r; e += 1) P = A[e].charCodeAt(0), i = !1, " " === A[e] ? T = e : 13 !== P && 3 !== P || (y = 0, i = !0, C += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(A[e], b.fStyle, b.fFamily), x = i ? 0 : o.w * t.finalSize / 100) : x = h.measureText(A[e], t.f, t.finalSize), y + x > _ && " " !== A[e] ? (-1 === T ? r += 1 : e = T, C += t.finalLineHeight || 1.2 * t.finalSize, A.splice(e, T === e ? 1 : 0, "\r"), T = -1, y = 0) : (y += x, y += S);
							C += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && k < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = A, r = t.finalText.length, F = !1)
						}
					y = -S, x = 0;
					var D, w = 0;
					for (e = 0; e < r; e += 1)
						if (i = !1, 13 === (P = (D = t.finalText[e]).charCodeAt(0)) || 3 === P ? (w = 0, g.push(y), v = y > v ? y : v, y = -2 * S, a = "", i = !0, d += 1) : a = D, h.chars ? (o = h.getCharData(D, b.fStyle, h.getFontByName(t.f).fFamily), x = i ? 0 : o.w * t.finalSize / 100) : x = h.measureText(a, t.f, t.finalSize), " " === D ? w += x + S : (y += x + S + w, w = 0), p.push({
								l: x,
								an: x,
								add: u,
								n: i,
								anIndexes: [],
								val: a,
								line: d,
								animatorJustifyOffset: 0
							}), 2 == c) {
							if (u += x, "" === a || " " === a || e === r - 1) {
								for ("" !== a && " " !== a || (u -= x); m <= e;) p[m].an = u, p[m].ind = f, p[m].extra = x, m += 1;
								f += 1, u = 0
							}
						} else if (3 == c) {
						if (u += x, "" === a || e === r - 1) {
							for ("" === a && (u -= x); m <= e;) p[m].an = u, p[m].ind = f, p[m].extra = x, m += 1;
							u = 0, f += 1
						}
					} else p[f].ind = f, p[f].extra = 0, f += 1;
					if (t.l = p, v = y > v ? y : v, g.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
					else switch (t.boxWidth = v, t.j) {
						case 1:
							t.justifyOffset = -t.boxWidth;
							break;
						case 2:
							t.justifyOffset = -t.boxWidth / 2;
							break;
						default:
							t.justifyOffset = 0
					}
					t.lineWidths = g;
					var M, I, B, V, R = l.a;
					n = R.length;
					var L = [];
					for (s = 0; s < n; s += 1) {
						for ((M = R[s]).a.sc && (t.strokeColorAnim = !0), M.a.sw && (t.strokeWidthAnim = !0), (M.a.fc || M.a.fh || M.a.fs || M.a.fb) && (t.fillColorAnim = !0), V = 0, B = M.s.b, e = 0; e < r; e += 1)(I = p[e]).anIndexes[s] = V, (1 == B && "" !== I.val || 2 == B && "" !== I.val && " " !== I.val || 3 == B && (I.n || " " == I.val || e == r - 1) || 4 == B && (I.n || e == r - 1)) && (1 === M.s.rn && L.push(V), V += 1);
						l.a[s].s.totalChars = V;
						var G, N = -1;
						if (1 === M.s.rn)
							for (e = 0; e < r; e += 1) N != (I = p[e]).anIndexes[s] && (N = I.anIndexes[s], G = L.splice(Math.floor(Math.random() * L.length), 1)[0]), I.anIndexes[s] = G
					}
					t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
				}, TextProperty.prototype.updateDocumentData = function(t, e) {
					e = void 0 === e ? this.keysIndex : e;
					var r = this.copyData({}, this.data.d.k[e].s);
					r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this)
				}, TextProperty.prototype.recalculate = function(t) {
					var e = this.data.d.k[t].s;
					e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
				}, TextProperty.prototype.canResizeFont = function(t) {
					this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
				}, TextProperty.prototype.setMinimumFontSize = function(t) {
					this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
				};
				var TextSelectorProp = function() {
						var t = Math.max,
							e = Math.min,
							r = Math.floor;

						function i(t, e) {
							this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
								k: 0
							}, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
								v: 100
							}, this.o = PropertyFactory.getProp(t, e.o || {
								k: 0
							}, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
								k: 0
							}, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
								k: 0
							}, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
						}
						return i.prototype = {
							getMult: function(i) {
								this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
								var a = 0,
									s = 0,
									n = 1,
									o = 1;
								this.ne.v > 0 ? a = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
								var h = BezierFactory.getBezierEasing(a, s, n, o).get,
									l = 0,
									p = this.finalS,
									f = this.finalE,
									c = this.data.sh;
								if (2 === c) l = h(l = f === p ? i >= f ? 1 : 0 : t(0, e(.5 / (f - p) + (i - p) / (f - p), 1)));
								else if (3 === c) l = h(l = f === p ? i >= f ? 0 : 1 : 1 - t(0, e(.5 / (f - p) + (i - p) / (f - p), 1)));
								else if (4 === c) f === p ? l = 0 : (l = t(0, e(.5 / (f - p) + (i - p) / (f - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
								else if (5 === c) {
									if (f === p) l = 0;
									else {
										var u = f - p,
											m = -u / 2 + (i = e(t(0, i + .5 - p), f - p)),
											d = u / 2;
										l = Math.sqrt(1 - m * m / (d * d))
									}
									l = h(l)
								} else 6 === c ? (f === p ? l = 0 : (i = e(t(0, i + .5 - p), f - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (f - p))) / 2), l = h(l)) : (i >= r(p) && (l = t(0, e(i - p < 0 ? e(f, 1) - (p - i) : f - i, 1))), l = h(l));
								return l * this.a.v
							},
							getValue: function(t) {
								this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
								var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
									r = this.o.v / e,
									i = this.s.v / e + r,
									a = this.e.v / e + r;
								if (i > a) {
									var s = i;
									i = a, a = s
								}
								this.finalS = i, this.finalE = a
							}
						}, extendPrototype([DynamicPropertyContainer], i), {
							getTextSelectorProp: function(t, e, r) {
								return new i(t, e, r)
							}
						}
					}(),
					poolFactory = function(t, e, r) {
						var i = 0,
							a = t,
							s = createSizedArray(a);
						return {
							newElement: function() {
								return i ? s[i -= 1] : e()
							},
							release: function(t) {
								i === a && (s = pooling.double(s), a *= 2), r && r(t), s[i] = t, i += 1
							}
						}
					},
					pooling = {
						double: function(t) {
							return t.concat(createSizedArray(t.length))
						}
					},
					pointPool = poolFactory(8, (function() {
						return createTypedArray("float32", 2)
					})),
					shapePool = (factory = poolFactory(4, (function() {
						return new ShapePath
					}), (function(t) {
						var e, r = t._length;
						for (e = 0; e < r; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
						t._length = 0, t.c = !1
					})), factory.clone = function(t) {
						var e, r = factory.newElement(),
							i = void 0 === t._length ? t.v.length : t._length;
						for (r.setLength(i), r.c = t.c, e = 0; e < i; e += 1) r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
						return r
					}, factory),
					factory, shapeCollectionPool = function() {
						var t = {
								newShapeCollection: function() {
									return e ? i[e -= 1] : new ShapeCollection
								},
								release: function(t) {
									var a, s = t._length;
									for (a = 0; a < s; a += 1) shapePool.release(t.shapes[a]);
									t._length = 0, e === r && (i = pooling.double(i), r *= 2), i[e] = t, e += 1
								}
							},
							e = 0,
							r = 4,
							i = createSizedArray(r);
						return t
					}(),
					segmentsLengthPool = poolFactory(8, (function() {
						return {
							lengths: [],
							totalLength: 0
						}
					}), (function(t) {
						var e, r = t.lengths.length;
						for (e = 0; e < r; e += 1) bezierLengthPool.release(t.lengths[e]);
						t.lengths.length = 0
					})),
					bezierLengthPool = poolFactory(8, (function() {
						return {
							addedLength: 0,
							percents: createTypedArray("float32", defaultCurveSegments),
							lengths: createTypedArray("float32", defaultCurveSegments)
						}
					})),
					markerParser = function() {
						function t(t) {
							for (var e, r = t.split("\r\n"), i = {}, a = 0, s = 0; s < r.length; s += 1) 2 === (e = r[s].split(":")).length && (i[e[0]] = e[1].trim(), a += 1);
							if (0 === a) throw new Error;
							return i
						}
						return function(e) {
							for (var r = [], i = 0; i < e.length; i += 1) {
								var a = e[i],
									s = {
										time: a.tm,
										duration: a.dr
									};
								try {
									s.payload = JSON.parse(e[i].cm)
								} catch (r) {
									try {
										s.payload = t(e[i].cm)
									} catch (t) {
										s.payload = {
											name: e[i]
										}
									}
								}
								r.push(s)
							}
							return r
						}
					}();

				function BaseRenderer() {}

				function SVGRenderer(t, e) {
					this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
					var r = "";
					if (e && e.title) {
						var i = createNS("title"),
							a = createElementID();
						i.setAttribute("id", a), i.textContent = e.title, this.svgElement.appendChild(i), r += a
					}
					if (e && e.description) {
						var s = createNS("desc"),
							n = createElementID();
						s.setAttribute("id", n), s.textContent = e.description, this.svgElement.appendChild(s), r += " " + n
					}
					r && this.svgElement.setAttribute("aria-labelledby", r);
					var o = createNS("defs");
					this.svgElement.appendChild(o);
					var h = createNS("g");
					this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
						preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
						imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
						progressiveLoad: e && e.progressiveLoad || !1,
						hideOnTransparent: !(e && !1 === e.hideOnTransparent),
						viewBoxOnly: e && e.viewBoxOnly || !1,
						viewBoxSize: e && e.viewBoxSize || !1,
						className: e && e.className || "",
						id: e && e.id || "",
						focusable: e && e.focusable,
						filterSize: {
							width: e && e.filterSize && e.filterSize.width || "100%",
							height: e && e.filterSize && e.filterSize.height || "100%",
							x: e && e.filterSize && e.filterSize.x || "0%",
							y: e && e.filterSize && e.filterSize.y || "0%"
						}
					}, this.globalData = {
						_mdf: !1,
						frameNum: -1,
						defs: o,
						renderConfig: this.renderConfig
					}, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
				}

				function CanvasRenderer(t, e) {
					this.animationItem = t, this.renderConfig = {
						clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
						context: e && e.context || null,
						progressiveLoad: e && e.progressiveLoad || !1,
						preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
						imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
						className: e && e.className || "",
						id: e && e.id || ""
					}, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
						frameNum: -1,
						_mdf: !1,
						renderConfig: this.renderConfig,
						currentGlobalAlpha: -1
					}, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
				}

				function HybridRenderer(t, e) {
					this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
						className: e && e.className || "",
						imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
						hideOnTransparent: !(e && !1 === e.hideOnTransparent),
						filterSize: {
							width: e && e.filterSize && e.filterSize.width || "400%",
							height: e && e.filterSize && e.filterSize.height || "400%",
							x: e && e.filterSize && e.filterSize.x || "-100%",
							y: e && e.filterSize && e.filterSize.y || "-100%"
						}
					}, this.globalData = {
						_mdf: !1,
						frameNum: -1,
						renderConfig: this.renderConfig
					}, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
				}

				function MaskElement(t, e, r) {
					this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
					var i, a, s = this.globalData.defs,
						n = this.masksProperties ? this.masksProperties.length : 0;
					this.viewData = createSizedArray(n), this.solidPath = "";
					var o, h, l, p, f, c, u = this.masksProperties,
						m = 0,
						d = [],
						g = createElementID(),
						y = "clipPath",
						v = "clip-path";
					for (i = 0; i < n; i += 1)
						if (("a" !== u[i].mode && "n" !== u[i].mode || u[i].inv || 100 !== u[i].o.k || u[i].o.x) && (y = "mask", v = "mask"), "s" !== u[i].mode && "i" !== u[i].mode || 0 !== m ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), d.push(l)), a = createNS("path"), "n" === u[i].mode) this.viewData[i] = {
							op: PropertyFactory.getProp(this.element, u[i].o, 0, .01, this.element),
							prop: ShapePropertyFactory.getShapeProp(this.element, u[i], 3),
							elem: a,
							lastPath: ""
						}, s.appendChild(a);
						else {
							var b;
							if (m += 1, a.setAttribute("fill", "s" === u[i].mode ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero"), 0 !== u[i].x.k ? (y = "mask", v = "mask", c = PropertyFactory.getProp(this.element, u[i].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (f = createNS("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), p.appendChild(f), s.appendChild(p), a.setAttribute("stroke", "s" === u[i].mode ? "#000000" : "#ffffff")) : (f = null, c = null), this.storedData[i] = {
									elem: a,
									x: c,
									expan: f,
									lastPath: "",
									lastOperator: "",
									filterId: b,
									lastRadius: 0
								}, "i" === u[i].mode) {
								h = d.length;
								var x = createNS("g");
								for (o = 0; o < h; o += 1) x.appendChild(d[o]);
								var E = createNS("mask");
								E.setAttribute("mask-type", "alpha"), E.setAttribute("id", g + "_" + m), E.appendChild(a), s.appendChild(E), x.setAttribute("mask", "url(" + locationHref + "#" + g + "_" + m + ")"), d.length = 0, d.push(x)
							} else d.push(a);
							u[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
								elem: a,
								lastPath: "",
								op: PropertyFactory.getProp(this.element, u[i].o, 0, .01, this.element),
								prop: ShapePropertyFactory.getShapeProp(this.element, u[i], 3),
								invRect: l
							}, this.viewData[i].prop.k || this.drawPath(u[i], this.viewData[i].prop.v, this.viewData[i])
						} for (this.maskElement = createNS(y), n = d.length, i = 0; i < n; i += 1) this.maskElement.appendChild(d[i]);
					m > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + g + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
				}

				function HierarchyElement() {}

				function FrameElement() {}

				function TransformElement() {}

				function RenderableElement() {}

				function RenderableDOMElement() {}

				function ProcessedElement(t, e) {
					this.elem = t, this.pos = e
				}

				function SVGStyleData(t, e) {
					this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
				}

				function SVGShapeData(t, e, r) {
					this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
					for (var i = 0, a = t.length; i < a;) {
						if (t[i].mProps.dynamicProperties.length) {
							this._isAnimated = !0;
							break
						}
						i += 1
					}
				}

				function SVGTransformData(t, e, r) {
					this.transform = {
						mProps: t,
						op: e,
						container: r
					}, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
				}

				function SVGStrokeStyleData(t, e, r) {
					this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
				}

				function SVGFillStyleData(t, e, r) {
					this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
				}

				function SVGGradientFillStyleData(t, e, r) {
					this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
				}

				function SVGGradientStrokeStyleData(t, e, r) {
					this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
				}

				function ShapeGroupData() {
					this.it = [], this.prevViewData = [], this.gr = createNS("g")
				}
				BaseRenderer.prototype.checkLayers = function(t) {
					var e, r, i = this.layers.length;
					for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
					this.checkPendingElements()
				}, BaseRenderer.prototype.createItem = function(t) {
					switch (t.ty) {
						case 2:
							return this.createImage(t);
						case 0:
							return this.createComp(t);
						case 1:
							return this.createSolid(t);
						case 3:
						default:
							return this.createNull(t);
						case 4:
							return this.createShape(t);
						case 5:
							return this.createText(t);
						case 6:
							return this.createAudio(t);
						case 13:
							return this.createCamera(t);
						case 15:
							return this.createFootage(t)
					}
				}, BaseRenderer.prototype.createCamera = function() {
					throw new Error("You're using a 3d camera. Try the html renderer.")
				}, BaseRenderer.prototype.createAudio = function(t) {
					return new AudioElement(t, this.globalData, this)
				}, BaseRenderer.prototype.createFootage = function(t) {
					return new FootageElement(t, this.globalData, this)
				}, BaseRenderer.prototype.buildAllItems = function() {
					var t, e = this.layers.length;
					for (t = 0; t < e; t += 1) this.buildItem(t);
					this.checkPendingElements()
				}, BaseRenderer.prototype.includeLayers = function(t) {
					var e;
					this.completeLayers = !1;
					var r, i = t.length,
						a = this.layers.length;
					for (e = 0; e < i; e += 1)
						for (r = 0; r < a;) {
							if (this.layers[r].id === t[e].id) {
								this.layers[r] = t[e];
								break
							}
							r += 1
						}
				}, BaseRenderer.prototype.setProjectInterface = function(t) {
					this.globalData.projectInterface = t
				}, BaseRenderer.prototype.initItems = function() {
					this.globalData.progressiveLoad || this.buildAllItems()
				}, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
					for (var i = this.elements, a = this.layers, s = 0, n = a.length; s < n;) a[s].ind == e && (i[s] && !0 !== i[s] ? (r.push(i[s]), i[s].setAsParent(), void 0 !== a[s].parent ? this.buildElementParenting(t, a[s].parent, r) : t.setHierarchy(r)) : (this.buildItem(s), this.addPendingElement(t))), s += 1
				}, BaseRenderer.prototype.addPendingElement = function(t) {
					this.pendingElements.push(t)
				}, BaseRenderer.prototype.searchExtraCompositions = function(t) {
					var e, r = t.length;
					for (e = 0; e < r; e += 1)
						if (t[e].xt) {
							var i = this.createComp(t[e]);
							i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
						}
				}, BaseRenderer.prototype.setupGlobalData = function(t, e) {
					this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
						w: t.w,
						h: t.h
					}
				}, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
					return new NullElement(t, this.globalData, this)
				}, SVGRenderer.prototype.createShape = function(t) {
					return new SVGShapeElement(t, this.globalData, this)
				}, SVGRenderer.prototype.createText = function(t) {
					return new SVGTextLottieElement(t, this.globalData, this)
				}, SVGRenderer.prototype.createImage = function(t) {
					return new IImageElement(t, this.globalData, this)
				}, SVGRenderer.prototype.createComp = function(t) {
					return new SVGCompElement(t, this.globalData, this)
				}, SVGRenderer.prototype.createSolid = function(t) {
					return new ISolidElement(t, this.globalData, this)
				}, SVGRenderer.prototype.configAnimation = function(t) {
					this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
					var e = this.globalData.defs;
					this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
					var r = createNS("clipPath"),
						i = createNS("rect");
					i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
					var a = createElementID();
					r.setAttribute("id", a), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + a + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
				}, SVGRenderer.prototype.destroy = function() {
					var t;
					this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
					var e = this.layers ? this.layers.length : 0;
					for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
					this.elements.length = 0, this.destroyed = !0, this.animationItem = null
				}, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
					var e = this.elements;
					if (!e[t] && 99 !== this.layers[t].ty) {
						e[t] = !0;
						var r = this.createItem(this.layers[t]);
						e[t] = r, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(r)))
					}
				}, SVGRenderer.prototype.checkPendingElements = function() {
					for (; this.pendingElements.length;) {
						var t = this.pendingElements.pop();
						if (t.checkParenting(), t.data.tt)
							for (var e = 0, r = this.elements.length; e < r;) {
								if (this.elements[e] === t) {
									t.setMatte(this.elements[e - 1].layerId);
									break
								}
								e += 1
							}
					}
				}, SVGRenderer.prototype.renderFrame = function(t) {
					if (this.renderedFrame !== t && !this.destroyed) {
						var e;
						null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
						var r = this.layers.length;
						for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
						if (this.globalData._mdf)
							for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
					}
				}, SVGRenderer.prototype.appendElementInPos = function(t, e) {
					var r = t.getBaseElement();
					if (r) {
						for (var i, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (i = this.elements[a].getBaseElement()), a += 1;
						i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
					}
				}, SVGRenderer.prototype.hide = function() {
					this.layerElement.style.display = "none"
				}, SVGRenderer.prototype.show = function() {
					this.layerElement.style.display = "block"
				}, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
					return new CVShapeElement(t, this.globalData, this)
				}, CanvasRenderer.prototype.createText = function(t) {
					return new CVTextElement(t, this.globalData, this)
				}, CanvasRenderer.prototype.createImage = function(t) {
					return new CVImageElement(t, this.globalData, this)
				}, CanvasRenderer.prototype.createComp = function(t) {
					return new CVCompElement(t, this.globalData, this)
				}, CanvasRenderer.prototype.createSolid = function(t) {
					return new CVSolidElement(t, this.globalData, this)
				}, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
					if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
						if (this.renderConfig.clearCanvas) {
							this.transformMat.cloneFromProps(t);
							var e = this.contextData.cTr.props;
							this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
							var r = this.contextData.cTr.props;
							this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
						} else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
				}, CanvasRenderer.prototype.ctxOpacity = function(t) {
					if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
					this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
				}, CanvasRenderer.prototype.reset = function() {
					this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
				}, CanvasRenderer.prototype.save = function(t) {
					if (this.renderConfig.clearCanvas) {
						t && this.canvasContext.save();
						var e, r = this.contextData.cTr.props;
						this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
						var i = this.contextData.saved[this.contextData.cArrPos];
						for (e = 0; e < 16; e += 1) i[e] = r[e];
						this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
					} else this.canvasContext.save()
				}, CanvasRenderer.prototype.restore = function(t) {
					if (this.renderConfig.clearCanvas) {
						t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
						var e, r = this.contextData.saved[this.contextData.cArrPos],
							i = this.contextData.cTr.props;
						for (e = 0; e < 16; e += 1) i[e] = r[e];
						this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), r = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = r, this.globalData.currentGlobalAlpha !== r && (this.canvasContext.globalAlpha = r, this.globalData.currentGlobalAlpha = r)
					} else this.canvasContext.restore()
				}, CanvasRenderer.prototype.configAnimation = function(t) {
					if (this.animationItem.wrapper) {
						this.animationItem.container = createTag("canvas");
						var e = this.animationItem.container.style;
						e.width = "100%", e.height = "100%";
						var r = "0px 0px 0px";
						e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
					} else this.canvasContext = this.renderConfig.context;
					this.data = t, this.layers = t.layers, this.transformCanvas = {
						w: t.w,
						h: t.h,
						sx: 0,
						sy: 0,
						tx: 0,
						ty: 0
					}, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
				}, CanvasRenderer.prototype.updateContainerSize = function() {
					var t, e, r, i;
					if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
						var a = this.renderConfig.preserveAspectRatio.split(" "),
							s = a[1] || "meet",
							n = a[0] || "xMidYMid",
							o = n.substr(0, 4),
							h = n.substr(4);
						r = t / e, (i = this.transformCanvas.w / this.transformCanvas.h) > r && "meet" === s || i < r && "slice" === s ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (i < r && "meet" === s || i > r && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (i < r && "meet" === s || i > r && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (i > r && "meet" === s || i < r && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (i > r && "meet" === s || i < r && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
					} else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
					this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
				}, CanvasRenderer.prototype.destroy = function() {
					var t;
					for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
					this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
				}, CanvasRenderer.prototype.renderFrame = function(t, e) {
					if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
						var r;
						this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
						var i = this.layers.length;
						for (this.completeLayers || this.checkLayers(t), r = 0; r < i; r += 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
						if (this.globalData._mdf) {
							for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
							!0 !== this.renderConfig.clearCanvas && this.restore()
						}
					}
				}, CanvasRenderer.prototype.buildItem = function(t) {
					var e = this.elements;
					if (!e[t] && 99 !== this.layers[t].ty) {
						var r = this.createItem(this.layers[t], this, this.globalData);
						e[t] = r, r.initExpressions()
					}
				}, CanvasRenderer.prototype.checkPendingElements = function() {
					for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
				}, CanvasRenderer.prototype.hide = function() {
					this.animationItem.container.style.display = "none"
				}, CanvasRenderer.prototype.show = function() {
					this.animationItem.container.style.display = "block"
				}, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
					for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
				}, HybridRenderer.prototype.appendElementInPos = function(t, e) {
					var r = t.getBaseElement();
					if (r) {
						var i = this.layers[e];
						if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
						else if (this.threeDElements) this.addTo3dContainer(r, e);
						else {
							for (var a, s, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (s = this.elements[n], a = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : s.getBaseElement()) || a), n += 1;
							a ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, a) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
						}
					}
				}, HybridRenderer.prototype.createShape = function(t) {
					return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
				}, HybridRenderer.prototype.createText = function(t) {
					return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
				}, HybridRenderer.prototype.createCamera = function(t) {
					return this.camera = new HCameraElement(t, this.globalData, this), this.camera
				}, HybridRenderer.prototype.createImage = function(t) {
					return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
				}, HybridRenderer.prototype.createComp = function(t) {
					return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
				}, HybridRenderer.prototype.createSolid = function(t) {
					return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
				}, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
					for (var e = 0, r = this.threeDElements.length; e < r;) {
						if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
						e += 1
					}
					return null
				}, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
					var r, i, a = createTag("div");
					styleDiv(a);
					var s = createTag("div");
					if (styleDiv(s), "3d" === e) {
						(r = a.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
						var n = "50% 50%";
						r.webkitTransformOrigin = n, r.mozTransformOrigin = n, r.transformOrigin = n;
						var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
						(i = s.style).transform = o, i.webkitTransform = o
					}
					a.appendChild(s);
					var h = {
						container: s,
						perspectiveElem: a,
						startPos: t,
						endPos: t,
						type: e
					};
					return this.threeDElements.push(h), h
				}, HybridRenderer.prototype.build3dContainers = function() {
					var t, e, r = this.layers.length,
						i = "";
					for (t = 0; t < r; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
					for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
				}, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
					for (var r = 0, i = this.threeDElements.length; r < i;) {
						if (e <= this.threeDElements[r].endPos) {
							for (var a, s = this.threeDElements[r].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()), s += 1;
							a ? this.threeDElements[r].container.insertBefore(t, a) : this.threeDElements[r].container.appendChild(t);
							break
						}
						r += 1
					}
				}, HybridRenderer.prototype.configAnimation = function(t) {
					var e = createTag("div"),
						r = this.animationItem.wrapper,
						i = e.style;
					i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
					var a = createNS("svg");
					a.setAttribute("width", "1"), a.setAttribute("height", "1"), styleDiv(a), this.resizerElem.appendChild(a);
					var s = createNS("defs");
					a.appendChild(s), this.data = t, this.setupGlobalData(t, a), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
				}, HybridRenderer.prototype.destroy = function() {
					var t;
					this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
					var e = this.layers ? this.layers.length : 0;
					for (t = 0; t < e; t += 1) this.elements[t].destroy();
					this.elements.length = 0, this.destroyed = !0, this.animationItem = null
				}, HybridRenderer.prototype.updateContainerSize = function() {
					var t, e, r, i, a = this.animationItem.wrapper.offsetWidth,
						s = this.animationItem.wrapper.offsetHeight,
						n = a / s;
					this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = a / this.globalData.compSize.w, e = a / this.globalData.compSize.w, r = 0, i = (s - this.globalData.compSize.h * (a / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, r = (a - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, i = 0);
					var o = this.resizerElem.style;
					o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)", o.transform = o.webkitTransform
				}, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
					this.resizerElem.style.display = "none"
				}, HybridRenderer.prototype.show = function() {
					this.resizerElem.style.display = "block"
				}, HybridRenderer.prototype.initItems = function() {
					if (this.buildAllItems(), this.camera) this.camera.setup();
					else {
						var t, e = this.globalData.compSize.w,
							r = this.globalData.compSize.h,
							i = this.threeDElements.length;
						for (t = 0; t < i; t += 1) {
							var a = this.threeDElements[t].perspectiveElem.style;
							a.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px", a.perspective = a.webkitPerspective
						}
					}
				}, HybridRenderer.prototype.searchExtraCompositions = function(t) {
					var e, r = t.length,
						i = createTag("div");
					for (e = 0; e < r; e += 1)
						if (t[e].xt) {
							var a = this.createComp(t[e], i, this.globalData.comp, null);
							a.initExpressions(), this.globalData.projectInterface.registerComposition(a)
						}
				}, MaskElement.prototype.getMaskProperty = function(t) {
					return this.viewData[t].prop
				}, MaskElement.prototype.renderFrame = function(t) {
					var e, r = this.element.finalTransform.mat,
						i = this.masksProperties.length;
					for (e = 0; e < i; e += 1)
						if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
							var a = this.storedData[e].expan;
							this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), a.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
						}
				}, MaskElement.prototype.getMaskelement = function() {
					return this.maskElement
				}, MaskElement.prototype.createLayerSolidPath = function() {
					var t = "M0,0 ";
					return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
				}, MaskElement.prototype.drawPath = function(t, e, r) {
					var i, a, s = " M" + e.v[0][0] + "," + e.v[0][1];
					for (a = e._length, i = 1; i < a; i += 1) s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
					if (e.c && a > 1 && (s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== s) {
						var n = "";
						r.elem && (e.c && (n = t.inv ? this.solidPath + s : s), r.elem.setAttribute("d", n)), r.lastPath = s
					}
				}, MaskElement.prototype.destroy = function() {
					this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
				}, HierarchyElement.prototype = {
					initHierarchy: function() {
						this.hierarchy = [], this._isParent = !1, this.checkParenting()
					},
					setHierarchy: function(t) {
						this.hierarchy = t
					},
					setAsParent: function() {
						this._isParent = !0
					},
					checkParenting: function() {
						void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
					}
				}, FrameElement.prototype = {
					initFrame: function() {
						this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
					},
					prepareProperties: function(t, e) {
						var r, i = this.dynamicProperties.length;
						for (r = 0; r < i; r += 1)(e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
					},
					addDynamicProperty: function(t) {
						-1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
					}
				}, TransformElement.prototype = {
					initTransform: function() {
						this.finalTransform = {
							mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
								o: 0
							},
							_matMdf: !1,
							_opMdf: !1,
							mat: new Matrix
						}, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
					},
					renderTransform: function() {
						if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
							var t, e = this.finalTransform.mat,
								r = 0,
								i = this.hierarchy.length;
							if (!this.finalTransform._matMdf)
								for (; r < i;) {
									if (this.hierarchy[r].finalTransform.mProp._mdf) {
										this.finalTransform._matMdf = !0;
										break
									}
									r += 1
								}
							if (this.finalTransform._matMdf)
								for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1) t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
						}
					},
					globalToLocal: function(t) {
						var e = [];
						e.push(this.finalTransform);
						for (var r, i = !0, a = this.comp; i;) a.finalTransform ? (a.data.hasMask && e.splice(0, 0, a.finalTransform), a = a.comp) : i = !1;
						var s, n = e.length;
						for (r = 0; r < n; r += 1) s = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - s[0], t[1] - s[1], 0];
						return t
					},
					mHelper: new Matrix
				}, RenderableElement.prototype = {
					initRenderable: function() {
						this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
					},
					addRenderableComponent: function(t) {
						-1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
					},
					removeRenderableComponent: function(t) {
						-1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
					},
					prepareRenderableFrame: function(t) {
						this.checkLayerLimits(t)
					},
					checkTransparency: function() {
						this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
					},
					checkLayerLimits: function(t) {
						this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
					},
					renderRenderable: function() {
						var t, e = this.renderableComponents.length;
						for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
					},
					sourceRectAtTime: function() {
						return {
							top: 0,
							left: 0,
							width: 100,
							height: 100
						}
					},
					getLayerSize: function() {
						return 5 === this.data.ty ? {
							w: this.data.textData.width,
							h: this.data.textData.height
						} : {
							w: this.data.width,
							h: this.data.height
						}
					}
				}, extendPrototype([RenderableElement, createProxyFunction({
					initElement: function(t, e, r) {
						this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
					},
					hide: function() {
						this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
					},
					show: function() {
						this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
					},
					renderFrame: function() {
						this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
					},
					renderInnerContent: function() {},
					prepareFrame: function(t) {
						this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
					},
					destroy: function() {
						this.innerElem = null, this.destroyBaseElement()
					}
				})], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
					this.d = "", this._mdf = !1
				}, SVGShapeData.prototype.setAsAnimated = function() {
					this._isAnimated = !0
				}, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
					this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
						k: 0
					}, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
						k: 0
					}, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
				}, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
					var r = createElementID(),
						i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
					i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
					var a, s, n, o = [];
					for (n = 4 * e.g.p, s = 0; s < n; s += 4) a = createNS("stop"), i.appendChild(a), o.push(a);
					t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r + ")"), this.gf = i, this.cst = o
				}, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
					if (this.g._hasOpacity && !this.g._collapsable) {
						var r, i, a, s = createNS("mask"),
							n = createNS("path");
						s.appendChild(n);
						var o = createElementID(),
							h = createElementID();
						s.setAttribute("id", h);
						var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
						l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
						var p = this.stops;
						for (i = 4 * t.g.p; i < a; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(r), p.push(r);
						n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = l, this.ms = s, this.ost = p, this.maskId = h, e.msElem = n
					}
				}, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
				var SVGElementsRenderer = function() {
					var t = new Matrix,
						e = new Matrix;

					function r(t, e, r) {
						(r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
					}

					function i(r, i, a) {
						var s, n, o, h, l, p, f, c, u, m, d, g = i.styles.length,
							y = i.lvl;
						for (p = 0; p < g; p += 1) {
							if (h = i.sh._mdf || a, i.styles[p].lvl < y) {
								for (c = e.reset(), m = y - i.styles[p].lvl, d = i.transformers.length - 1; !h && m > 0;) h = i.transformers[d].mProps._mdf || h, m -= 1, d -= 1;
								if (h)
									for (m = y - i.styles[p].lvl, d = i.transformers.length - 1; m > 0;) u = i.transformers[d].mProps.v.props, c.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), m -= 1, d -= 1
							} else c = t;
							if (n = (f = i.sh.paths)._length, h) {
								for (o = "", s = 0; s < n; s += 1)(l = f.shapes[s]) && l._length && (o += buildShapeString(l, l._length, l.c, c));
								i.caches[p] = o
							} else o = i.caches[p];
							i.styles[p].d += !0 === r.hd ? "" : o, i.styles[p]._mdf = h || i.styles[p]._mdf
						}
					}

					function a(t, e, r) {
						var i = e.style;
						(e.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v)
					}

					function s(t, e, r) {
						n(t, e, r), o(0, e, r)
					}

					function n(t, e, r) {
						var i, a, s, n, o, h = e.gf,
							l = e.g._hasOpacity,
							p = e.s.v,
							f = e.e.v;
						if (e.o._mdf || r) {
							var c = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
							e.style.pElem.setAttribute(c, e.o.v)
						}
						if (e.s._mdf || r) {
							var u = 1 === t.t ? "x1" : "cx",
								m = "x1" === u ? "y1" : "cy";
							h.setAttribute(u, p[0]), h.setAttribute(m, p[1]), l && !e.g._collapsable && (e.of.setAttribute(u, p[0]), e.of.setAttribute(m, p[1]))
						}
						if (e.g._cmdf || r) {
							i = e.cst;
							var d = e.g.c;
							for (s = i.length, a = 0; a < s; a += 1)(n = i[a]).setAttribute("offset", d[4 * a] + "%"), n.setAttribute("stop-color", "rgb(" + d[4 * a + 1] + "," + d[4 * a + 2] + "," + d[4 * a + 3] + ")")
						}
						if (l && (e.g._omdf || r)) {
							var g = e.g.o;
							for (s = (i = e.g._collapsable ? e.cst : e.ost).length, a = 0; a < s; a += 1) n = i[a], e.g._collapsable || n.setAttribute("offset", g[2 * a] + "%"), n.setAttribute("stop-opacity", g[2 * a + 1])
						}
						if (1 === t.t)(e.e._mdf || r) && (h.setAttribute("x2", f[0]), h.setAttribute("y2", f[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", f[0]), e.of.setAttribute("y2", f[1])));
						else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
							o || (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)));
							var y = Math.atan2(f[1] - p[1], f[0] - p[0]),
								v = e.h.v;
							v >= 1 ? v = .99 : v <= -1 && (v = -.99);
							var b = o * v,
								x = Math.cos(y + e.a.v) * b + p[0],
								E = Math.sin(y + e.a.v) * b + p[1];
							h.setAttribute("fx", x), h.setAttribute("fy", E), l && !e.g._collapsable && (e.of.setAttribute("fx", x), e.of.setAttribute("fy", E))
						}
					}

					function o(t, e, r) {
						var i = e.style,
							a = e.d;
						a && (a._mdf || r) && a.dashStr && (i.pElem.setAttribute("stroke-dasharray", a.dashStr), i.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])), e.c && (e.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
					}
					return {
						createRenderFunction: function(t) {
							switch (t.ty) {
								case "fl":
									return a;
								case "gf":
									return n;
								case "gs":
									return s;
								case "st":
									return o;
								case "sh":
								case "el":
								case "rc":
								case "sr":
									return i;
								case "tr":
									return r;
								default:
									return null
							}
						}
					}
				}();

				function ShapeTransformManager() {
					this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
				}

				function CVShapeData(t, e, r, i) {
					this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
					var a, s = 4;
					"rc" === e.ty ? s = 5 : "el" === e.ty ? s = 6 : "sr" === e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
					var n, o = r.length;
					for (a = 0; a < o; a += 1) r[a].closed || (n = {
						transforms: i.addTransformSequence(r[a].transforms),
						trNodes: []
					}, this.styledShapes.push(n), r[a].elements.push(n))
				}

				function BaseElement() {}

				function NullElement(t, e, r) {
					this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
				}

				function SVGBaseElement() {}

				function IShapeElement() {}

				function ITextElement() {}

				function ICompElement() {}

				function IImageElement(t, e, r) {
					this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = {
						top: 0,
						left: 0,
						width: this.assetData.w,
						height: this.assetData.h
					}
				}

				function ISolidElement(t, e, r) {
					this.initElement(t, e, r)
				}

				function AudioElement(t, e, r) {
					this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
					var i = this.globalData.getAssetsPath(this.assetData);
					this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
						_placeholder: !0
					}
				}

				function FootageElement(t, e, r) {
					this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r)
				}

				function SVGCompElement(t, e, r) {
					this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
						_placeholder: !0
					}
				}

				function SVGTextLottieElement(t, e, r) {
					this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
				}

				function SVGShapeElement(t, e, r) {
					this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
				}

				function SVGTintFilter(t, e) {
					this.filterManager = e;
					var r = createNS("feColorMatrix");
					if (r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r), (r = createNS("feColorMatrix")).setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r.setAttribute("result", "f2"), t.appendChild(r), this.matrixFilter = r, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
						var i, a = createNS("feMerge");
						t.appendChild(a), (i = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), a.appendChild(i), (i = createNS("feMergeNode")).setAttribute("in", "f2"), a.appendChild(i)
					}
				}

				function SVGFillFilter(t, e) {
					this.filterManager = e;
					var r = createNS("feColorMatrix");
					r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(r), this.matrixFilter = r
				}

				function SVGGaussianBlurEffect(t, e) {
					t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
					var r = createNS("feGaussianBlur");
					t.appendChild(r), this.feGaussianBlur = r
				}

				function SVGStrokeEffect(t, e) {
					this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
				}

				function SVGTritoneFilter(t, e) {
					this.filterManager = e;
					var r = createNS("feColorMatrix");
					r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r);
					var i = createNS("feComponentTransfer");
					i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.matrixFilter = i;
					var a = createNS("feFuncR");
					a.setAttribute("type", "table"), i.appendChild(a), this.feFuncR = a;
					var s = createNS("feFuncG");
					s.setAttribute("type", "table"), i.appendChild(s), this.feFuncG = s;
					var n = createNS("feFuncB");
					n.setAttribute("type", "table"), i.appendChild(n), this.feFuncB = n
				}

				function SVGProLevelsFilter(t, e) {
					this.filterManager = e;
					var r = this.filterManager.effectElements,
						i = createNS("feComponentTransfer");
					(r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)), (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)), (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)), (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), i = createNS("feComponentTransfer")), (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.feFuncRComposed = this.createFeFunc("feFuncR", i), this.feFuncGComposed = this.createFeFunc("feFuncG", i), this.feFuncBComposed = this.createFeFunc("feFuncB", i))
				}

				function SVGDropShadowEffect(t, e) {
					var r = e.container.globalData.renderConfig.filterSize;
					t.setAttribute("x", r.x), t.setAttribute("y", r.y), t.setAttribute("width", r.width), t.setAttribute("height", r.height), this.filterManager = e;
					var i = createNS("feGaussianBlur");
					i.setAttribute("in", "SourceAlpha"), i.setAttribute("result", "drop_shadow_1"), i.setAttribute("stdDeviation", "0"), this.feGaussianBlur = i, t.appendChild(i);
					var a = createNS("feOffset");
					a.setAttribute("dx", "25"), a.setAttribute("dy", "0"), a.setAttribute("in", "drop_shadow_1"), a.setAttribute("result", "drop_shadow_2"), this.feOffset = a, t.appendChild(a);
					var s = createNS("feFlood");
					s.setAttribute("flood-color", "#00ff00"), s.setAttribute("flood-opacity", "1"), s.setAttribute("result", "drop_shadow_3"), this.feFlood = s, t.appendChild(s);
					var n = createNS("feComposite");
					n.setAttribute("in", "drop_shadow_3"), n.setAttribute("in2", "drop_shadow_2"), n.setAttribute("operator", "in"), n.setAttribute("result", "drop_shadow_4"), t.appendChild(n);
					var o, h = createNS("feMerge");
					t.appendChild(h), o = createNS("feMergeNode"), h.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = h, this.originalNodeAdded = !1, h.appendChild(o)
				}
				ShapeTransformManager.prototype = {
					addTransformSequence: function(t) {
						var e, r = t.length,
							i = "_";
						for (e = 0; e < r; e += 1) i += t[e].transform.key + "_";
						var a = this.sequences[i];
						return a || (a = {
							transforms: [].concat(t),
							finalTransform: new Matrix,
							_mdf: !1
						}, this.sequences[i] = a, this.sequenceList.push(a)), a
					},
					processSequence: function(t, e) {
						for (var r, i = 0, a = t.transforms.length, s = e; i < a && !e;) {
							if (t.transforms[i].transform.mProps._mdf) {
								s = !0;
								break
							}
							i += 1
						}
						if (s)
							for (t.finalTransform.reset(), i = a - 1; i >= 0; i -= 1) r = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
						t._mdf = s
					},
					processSequences: function(t) {
						var e, r = this.sequenceList.length;
						for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t)
					},
					getNewKey: function() {
						return this.transform_key_count += 1, "_" + this.transform_key_count
					}
				}, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
					checkMasks: function() {
						if (!this.data.hasMask) return !1;
						for (var t = 0, e = this.data.masksProperties.length; t < e;) {
							if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
							t += 1
						}
						return !1
					},
					initExpressions: function() {
						this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
						var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
						this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
					},
					setBlendMode: function() {
						var t = getBlendMode(this.data.bm);
						(this.baseElement || this.layerElement).style["mix-blend-mode"] = t
					},
					initBaseData: function(t, e, r) {
						this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
					},
					getType: function() {
						return this.type
					},
					sourceRectAtTime: function() {}
				}, NullElement.prototype.prepareFrame = function(t) {
					this.prepareProperties(t, !0)
				}, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
					return null
				}, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
					initRendererElement: function() {
						this.layerElement = createNS("g")
					},
					createContainerElements: function() {
						this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
						var t, e, r, i = null;
						if (this.data.td) {
							if (3 == this.data.td || 1 == this.data.td) {
								var a = createNS("mask");
								a.setAttribute("id", this.layerId), a.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), a.appendChild(this.layerElement), i = a, this.globalData.defs.appendChild(a), featureSupport.maskType || 1 != this.data.td || (a.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(this.layerElement), i = r, a.appendChild(r), r.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
							} else if (2 == this.data.td) {
								var s = createNS("mask");
								s.setAttribute("id", this.layerId), s.setAttribute("mask-type", "alpha");
								var n = createNS("g");
								s.appendChild(n), t = createElementID(), e = filtersFactory.createFilter(t);
								var o = createNS("feComponentTransfer");
								o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
								var h = createNS("feFuncA");
								h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), o.appendChild(h), this.globalData.defs.appendChild(e);
								var l = createNS("rect");
								l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), n.appendChild(l), n.appendChild(this.layerElement), i = n, featureSupport.maskType || (s.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), n.appendChild(l), r.appendChild(this.layerElement), i = r, n.appendChild(r)), this.globalData.defs.appendChild(s)
							}
						} else this.data.tt ? (this.matteElement.appendChild(this.layerElement), i = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
						if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
							var p = createNS("clipPath"),
								f = createNS("path");
							f.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
							var c = createElementID();
							if (p.setAttribute("id", c), p.appendChild(f), this.globalData.defs.appendChild(p), this.checkMasks()) {
								var u = createNS("g");
								u.setAttribute("clip-path", "url(" + locationHref + "#" + c + ")"), u.appendChild(this.layerElement), this.transformedElement = u, i ? i.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
							} else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + c + ")")
						}
						0 !== this.data.bm && this.setBlendMode()
					},
					renderElement: function() {
						this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
					},
					destroyBaseElement: function() {
						this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
					},
					getBaseElement: function() {
						return this.data.hd ? null : this.baseElement
					},
					createRenderableComponents: function() {
						this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
					},
					setMatte: function(t) {
						this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
					}
				}, IShapeElement.prototype = {
					addShapeToModifiers: function(t) {
						var e, r = this.shapeModifiers.length;
						for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t)
					},
					isShapeInAnimatedModifiers: function(t) {
						for (var e = this.shapeModifiers.length; 0 < e;)
							if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
						return !1
					},
					renderModifiers: function() {
						if (this.shapeModifiers.length) {
							var t, e = this.shapes.length;
							for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
							for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
						}
					},
					lcEnum: {
						1: "butt",
						2: "round",
						3: "square"
					},
					ljEnum: {
						1: "miter",
						2: "round",
						3: "bevel"
					},
					searchProcessedElement: function(t) {
						for (var e = this.processedElements, r = 0, i = e.length; r < i;) {
							if (e[r].elem === t) return e[r].pos;
							r += 1
						}
						return 0
					},
					addProcessedElement: function(t, e) {
						for (var r = this.processedElements, i = r.length; i;)
							if (r[i -= 1].elem === t) return void(r[i].pos = e);
						r.push(new ProcessedElement(t, e))
					},
					prepareFrame: function(t) {
						this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
					}
				}, ITextElement.prototype.initElement = function(t, e, r) {
					this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
				}, ITextElement.prototype.prepareFrame = function(t) {
					this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
				}, ITextElement.prototype.createPathShape = function(t, e) {
					var r, i, a = e.length,
						s = "";
					for (r = 0; r < a; r += 1) i = e[r].ks.k, s += buildShapeString(i, i.i.length, !0, t);
					return s
				}, ITextElement.prototype.updateDocumentData = function(t, e) {
					this.textProperty.updateDocumentData(t, e)
				}, ITextElement.prototype.canResizeFont = function(t) {
					this.textProperty.canResizeFont(t)
				}, ITextElement.prototype.setMinimumFontSize = function(t) {
					this.textProperty.setMinimumFontSize(t)
				}, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, a) {
					switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
						case 1:
							e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
							break;
						case 2:
							e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
					}
					e.translate(i, a, 0)
				}, ITextElement.prototype.buildColor = function(t) {
					return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
				}, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
					this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
				}, ICompElement.prototype.prepareFrame = function(t) {
					if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
						if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
						else {
							var e = this.tm.v;
							e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
						}
						var r, i = this.elements.length;
						for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
					}
				}, ICompElement.prototype.renderInnerContent = function() {
					var t, e = this.layers.length;
					for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
				}, ICompElement.prototype.setElements = function(t) {
					this.elements = t
				}, ICompElement.prototype.getElements = function() {
					return this.elements
				}, ICompElement.prototype.destroyElements = function() {
					var t, e = this.layers.length;
					for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
				}, ICompElement.prototype.destroy = function() {
					this.destroyElements(), this.destroyBaseElement()
				}, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
					var t = this.globalData.getAssetsPath(this.assetData);
					this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
				}, IImageElement.prototype.sourceRectAtTime = function() {
					return this.sourceRect
				}, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
					var t = createNS("rect");
					t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
				}, AudioElement.prototype.prepareFrame = function(t) {
					if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
					else {
						var e = this.tm.v;
						this._currentTime = e
					}
				}, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
					this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
				}, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
					this.audio.pause(), this._isPlaying = !1
				}, AudioElement.prototype.pause = function() {
					this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
				}, AudioElement.prototype.resume = function() {
					this._canPlay = !0
				}, AudioElement.prototype.setRate = function(t) {
					this.audio.rate(t)
				}, AudioElement.prototype.volume = function(t) {
					this.audio.volume(t)
				}, AudioElement.prototype.getBaseElement = function() {
					return null
				}, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
					return null
				}, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
					this.layerInterface = FootageInterface(this)
				}, FootageElement.prototype.getFootageData = function() {
					return this.footageData
				}, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
					this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
				}, SVGTextLottieElement.prototype.buildTextContents = function(t) {
					for (var e = 0, r = t.length, i = [], a = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(a), a = "") : a += t[e], e += 1;
					return i.push(a), i
				}, SVGTextLottieElement.prototype.buildNewText = function() {
					var t, e, r = this.textProperty.currentData;
					this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
					var i = this.globalData.fontManager.getFontByName(r.f);
					if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
					else {
						this.layerElement.setAttribute("font-family", i.fFamily);
						var a = r.fWeight,
							s = r.fStyle;
						this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", a)
					}
					this.layerElement.setAttribute("aria-label", r.t);
					var n, o = r.l || [],
						h = !!this.globalData.fontManager.chars;
					e = o.length;
					var l, p = this.mHelper,
						f = "",
						c = this.data.singleShape,
						u = 0,
						m = 0,
						d = !0,
						g = .001 * r.tr * r.finalSize;
					if (!c || h || r.sz) {
						var y, v, b = this.textSpans.length;
						for (t = 0; t < e; t += 1) h && c && 0 !== t || (n = b > t ? this.textSpans[t] : createNS(h ? "path" : "text"), b <= t && (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = n, this.layerElement.appendChild(n)), n.style.display = "inherit"), p.reset(), p.scale(r.finalSize / 100, r.finalSize / 100), c && (o[t].n && (u = -g, m += r.yOffset, m += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(r, p, o[t].line, u, m), u += o[t].l || 0, u += g), h ? (l = (y = (v = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && v.data || {}).shapes ? y.shapes[0].it : [], c ? f += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (c && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
						c && n && n.setAttribute("d", f)
					} else {
						var x = this.textContainer,
							E = "start";
						switch (r.j) {
							case 1:
								E = "end";
								break;
							case 2:
								E = "middle";
								break;
							default:
								E = "start"
						}
						x.setAttribute("text-anchor", E), x.setAttribute("letter-spacing", g);
						var P = this.buildTextContents(r.finalText);
						for (e = P.length, m = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t] || createNS("tspan")).textContent = P[t], n.setAttribute("x", 0), n.setAttribute("y", m), n.style.display = "inherit", x.appendChild(n), this.textSpans[t] = n, m += r.finalLineHeight;
						this.layerElement.appendChild(x)
					}
					for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
					this._sizeChanged = !0
				}, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
					if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
						this._sizeChanged = !1;
						var t = this.layerElement.getBBox();
						this.bbox = {
							top: t.y,
							left: t.x,
							width: t.width,
							height: t.height
						}
					}
					return this.bbox
				}, SVGTextLottieElement.prototype.renderInnerContent = function() {
					if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
						var t, e;
						this._sizeChanged = !0;
						var r, i, a = this.textAnimator.renderedLetters,
							s = this.textProperty.currentData.l;
						for (e = s.length, t = 0; t < e; t += 1) s[t].n || (r = a[t], i = this.textSpans[t], r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc))
					}
				}, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
					this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
				}, SVGShapeElement.prototype.filterUniqueShapes = function() {
					var t, e, r, i, a = this.shapes.length,
						s = this.stylesList.length,
						n = [],
						o = !1;
					for (r = 0; r < s; r += 1) {
						for (i = this.stylesList[r], o = !1, n.length = 0, t = 0; t < a; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e), o = e._isAnimated || o);
						n.length > 1 && o && this.setShapesAsAnimated(n)
					}
				}, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
					var e, r = t.length;
					for (e = 0; e < r; e += 1) t[e].setAsAnimated()
				}, SVGShapeElement.prototype.createStyleElement = function(t, e) {
					var r, i = new SVGStyleData(t, e),
						a = i.pElem;
					return "st" === t.ty ? r = new SVGStrokeStyleData(this, t, i) : "fl" === t.ty ? r = new SVGFillStyleData(this, t, i) : "gf" !== t.ty && "gs" !== t.ty || (r = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), a.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")"))), "st" !== t.ty && "gs" !== t.ty || (a.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), a.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), a.setAttribute("fill-opacity", "0"), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r
				}, SVGShapeElement.prototype.createGroupElement = function(t) {
					var e = new ShapeGroupData;
					return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
				}, SVGShapeElement.prototype.createTransformElement = function(t, e) {
					var r = TransformPropertyFactory.getTransformProperty(this, t, this),
						i = new SVGTransformData(r, r.o, e);
					return this.addToAnimatedContents(t, i), i
				}, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
					var i = 4;
					"rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
					var a = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
					return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
				}, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
					for (var r = 0, i = this.animatedContents.length; r < i;) {
						if (this.animatedContents[r].element === e) return;
						r += 1
					}
					this.animatedContents.push({
						fn: SVGElementsRenderer.createRenderFunction(t),
						element: e,
						data: t
					})
				}, SVGShapeElement.prototype.setElementStyles = function(t) {
					var e, r = t.styles,
						i = this.stylesList.length;
					for (e = 0; e < i; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e])
				}, SVGShapeElement.prototype.reloadShapes = function() {
					var t;
					this._isFirstFrame = !0;
					var e = this.itemsData.length;
					for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
					for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
					this.renderModifiers()
				}, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, a, s, n) {
					var o, h, l, p, f, c, u = [].concat(s),
						m = t.length - 1,
						d = [],
						g = [];
					for (o = m; o >= 0; o -= 1) {
						if ((c = this.searchProcessedElement(t[o])) ? e[o] = r[c - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty) c ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], a), t[o]._render && i.appendChild(e[o].style.pElem), d.push(e[o].style);
						else if ("gr" === t[o].ty) {
							if (c)
								for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
							else e[o] = this.createGroupElement(t[o]);
							this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, a + 1, u, n), t[o]._render && i.appendChild(e[o].gr)
						} else "tr" === t[o].ty ? (c || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, u.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (c || (e[o] = this.createShapeElement(t[o], u, a)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty ? (c ? (f = e[o]).closed = !1 : ((f = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = f, this.shapeModifiers.push(f)), g.push(f)) : "rp" === t[o].ty && (c ? (f = e[o]).closed = !0 : (f = ShapeModifiers.getModifier(t[o].ty), e[o] = f, f.init(this, t, o, e), this.shapeModifiers.push(f), n = !1), g.push(f));
						this.addProcessedElement(t[o], o + 1)
					}
					for (m = d.length, o = 0; o < m; o += 1) d[o].closed = !0;
					for (m = g.length, o = 0; o < m; o += 1) g[o].closed = !0
				}, SVGShapeElement.prototype.renderInnerContent = function() {
					var t;
					this.renderModifiers();
					var e = this.stylesList.length;
					for (t = 0; t < e; t += 1) this.stylesList[t].reset();
					for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
				}, SVGShapeElement.prototype.renderShape = function() {
					var t, e, r = this.animatedContents.length;
					for (t = 0; t < r; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
				}, SVGShapeElement.prototype.destroy = function() {
					this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
				}, SVGTintFilter.prototype.renderFrame = function(t) {
					if (t || this.filterManager._mdf) {
						var e = this.filterManager.effectElements[0].p.v,
							r = this.filterManager.effectElements[1].p.v,
							i = this.filterManager.effectElements[2].p.v / 100;
						this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
					}
				}, SVGFillFilter.prototype.renderFrame = function(t) {
					if (t || this.filterManager._mdf) {
						var e = this.filterManager.effectElements[2].p.v,
							r = this.filterManager.effectElements[6].p.v;
						this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
					}
				}, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
					if (t || this.filterManager._mdf) {
						var e = .3 * this.filterManager.effectElements[0].p.v,
							r = this.filterManager.effectElements[1].p.v,
							i = 3 == r ? 0 : e,
							a = 2 == r ? 0 : e;
						this.feGaussianBlur.setAttribute("stdDeviation", i + " " + a);
						var s = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
						this.feGaussianBlur.setAttribute("edgeMode", s)
					}
				}, SVGStrokeEffect.prototype.initialize = function() {
					var t, e, r, i, a = this.elem.layerElement.children || this.elem.layerElement.childNodes;
					for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
						p: t,
						m: r
					});
					if (3 === this.filterManager.effectElements[10].p.v) {
						var s = createNS("mask"),
							n = createElementID();
						s.setAttribute("id", n), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
						var o = createNS("g");
						for (o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"); a[0];) o.appendChild(a[0]);
						this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff")
					} else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
						if (2 === this.filterManager.effectElements[10].p.v)
							for (a = this.elem.layerElement.children || this.elem.layerElement.childNodes; a.length;) this.elem.layerElement.removeChild(a[0]);
						this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
					}
					this.initialized = !0, this.pathMasker = e
				}, SVGStrokeEffect.prototype.renderFrame = function(t) {
					var e;
					this.initialized || this.initialize();
					var r, i, a = this.paths.length;
					for (e = 0; e < a; e += 1)
						if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
							var s;
							if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
								var n = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
									o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
									h = i.getTotalLength();
								s = "0 0 0 " + h * n + " ";
								var l, p = h * (o - n),
									f = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
									c = Math.floor(p / f);
								for (l = 0; l < c; l += 1) s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
								s += "0 " + 10 * h + " 0 0"
							} else s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
							i.setAttribute("stroke-dasharray", s)
						} if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
						var u = this.filterManager.effectElements[3].p.v;
						this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * u[0]) + "," + bmFloor(255 * u[1]) + "," + bmFloor(255 * u[2]) + ")")
					}
				}, SVGTritoneFilter.prototype.renderFrame = function(t) {
					if (t || this.filterManager._mdf) {
						var e = this.filterManager.effectElements[0].p.v,
							r = this.filterManager.effectElements[1].p.v,
							i = this.filterManager.effectElements[2].p.v,
							a = i[0] + " " + r[0] + " " + e[0],
							s = i[1] + " " + r[1] + " " + e[1],
							n = i[2] + " " + r[2] + " " + e[2];
						this.feFuncR.setAttribute("tableValues", a), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", n)
					}
				}, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
					var r = createNS(t);
					return r.setAttribute("type", "table"), e.appendChild(r), r
				}, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, a) {
					for (var s, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
							length: 256
						}), f = 0, c = a - i, u = e - t; o <= 256;) n = (s = o / 256) <= h ? u < 0 ? a : i : s >= l ? u < 0 ? i : a : i + c * Math.pow((s - t) / u, 1 / r), p[f] = n, f += 1, o += 256 / 255;
					return p.join(" ")
				}, SVGProLevelsFilter.prototype.renderFrame = function(t) {
					if (t || this.filterManager._mdf) {
						var e, r = this.filterManager.effectElements;
						this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
					}
				}, SVGDropShadowEffect.prototype.renderFrame = function(t) {
					if (t || this.filterManager._mdf) {
						if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
							var e = this.filterManager.effectElements[0].p.v;
							this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
						}
						if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
							var r = this.filterManager.effectElements[3].p.v,
								i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
								a = r * Math.cos(i),
								s = r * Math.sin(i);
							this.feOffset.setAttribute("dx", a), this.feOffset.setAttribute("dy", s)
						}
					}
				};
				var _svgMatteSymbols = [];

				function SVGMatte3Effect(t, e, r) {
					this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
				}

				function SVGEffects(t) {
					var e, r, i = t.data.ef ? t.data.ef.length : 0,
						a = createElementID(),
						s = filtersFactory.createFilter(a, !0),
						n = 0;
					for (this.filters = [], e = 0; e < i; e += 1) r = null, 20 === t.data.ef[e].ty ? (n += 1, r = new SVGTintFilter(s, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1, r = new SVGFillFilter(s, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? r = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1, r = new SVGTritoneFilter(s, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1, r = new SVGProLevelsFilter(s, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1, r = new SVGDropShadowEffect(s, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? r = new SVGMatte3Effect(s, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (n += 1, r = new SVGGaussianBlurEffect(s, t.effectsManager.effectElements[e])), r && this.filters.push(r);
					n && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + a + ")")), this.filters.length && t.addRenderableComponent(this)
				}

				function CVContextData() {
					var t;
					for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
					this._length = 15
				}

				function CVBaseElement() {}

				function CVImageElement(t, e, r) {
					this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r)
				}

				function CVCompElement(t, e, r) {
					this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
						_placeholder: !0
					}
				}

				function CVMaskElement(t, e) {
					var r;
					this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
					var i = this.masksProperties.length,
						a = !1;
					for (r = 0; r < i; r += 1) "n" !== this.masksProperties[r].mode && (a = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
					this.hasMasks = a, a && this.element.addRenderableComponent(this)
				}

				function CVShapeElement(t, e, r) {
					this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
				}

				function CVSolidElement(t, e, r) {
					this.initElement(t, e, r)
				}

				function CVTextElement(t, e, r) {
					this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
						fill: "rgba(0,0,0,0)",
						stroke: "rgba(0,0,0,0)",
						sWidth: 0,
						fValue: ""
					}, this.initElement(t, e, r)
				}

				function CVEffects() {}

				function HBaseElement() {}

				function HSolidElement(t, e, r) {
					this.initElement(t, e, r)
				}

				function HCompElement(t, e, r) {
					this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
						_placeholder: !0
					}
				}

				function HShapeElement(t, e, r) {
					this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
						x: 999999,
						y: -999999,
						h: 0,
						w: 0
					}
				}

				function HTextElement(t, e, r) {
					this.textSpans = [], this.textPaths = [], this.currentBBox = {
						x: 999999,
						y: -999999,
						h: 0,
						w: 0
					}, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
				}

				function HImageElement(t, e, r) {
					this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
				}

				function HCameraElement(t, e, r) {
					this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
					var i = PropertyFactory.getProp;
					if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
						var a, s = t.ks.or.k.length;
						for (a = 0; a < s; a += 1) t.ks.or.k[a].to = null, t.ks.or.k[a].ti = null
					}
					this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
						mProp: this
					}
				}

				function HEffects() {}
				SVGMatte3Effect.prototype.findSymbol = function(t) {
					for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
						if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
						e += 1
					}
					return null
				}, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
					var r = t.layerElement.parentNode;
					if (r) {
						for (var i, a = r.children, s = 0, n = a.length; s < n && a[s] !== t.layerElement;) s += 1;
						s <= n - 2 && (i = a[s + 1]);
						var o = createNS("use");
						o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o)
					}
				}, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
					if (!this.findSymbol(e)) {
						var r = createElementID(),
							i = createNS("mask");
						i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
						var a = t.globalData.defs;
						a.appendChild(i);
						var s = createNS("symbol");
						s.setAttribute("id", r), this.replaceInParent(e, r), s.appendChild(e.layerElement), a.appendChild(s);
						var n = createNS("use");
						n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = !1, e.show()
					}
					t.setMatte(e.layerId)
				}, SVGMatte3Effect.prototype.initialize = function() {
					for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
					this.initialized = !0
				}, SVGMatte3Effect.prototype.renderFrame = function() {
					this.initialized || this.initialize()
				}, SVGEffects.prototype.renderFrame = function(t) {
					var e, r = this.filters.length;
					for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
				}, CVContextData.prototype.duplicate = function() {
					var t = 2 * this._length,
						e = this.savedOp;
					this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
					var r = 0;
					for (r = this._length; r < t; r += 1) this.saved[r] = createTypedArray("float32", 16);
					this._length = t
				}, CVContextData.prototype.reset = function() {
					this.cArrPos = 0, this.cTr.reset(), this.cO = 1
				}, CVBaseElement.prototype = {
					createElements: function() {},
					initRendererElement: function() {},
					createContainerElements: function() {
						this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
					},
					createContent: function() {},
					setBlendMode: function() {
						var t = this.globalData;
						if (t.blendMode !== this.data.bm) {
							t.blendMode = this.data.bm;
							var e = getBlendMode(this.data.bm);
							t.canvasContext.globalCompositeOperation = e
						}
					},
					createRenderableComponents: function() {
						this.maskManager = new CVMaskElement(this.data, this)
					},
					hideElement: function() {
						this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
					},
					showElement: function() {
						this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
					},
					renderFrame: function() {
						if (!this.hidden && !this.data.hd) {
							this.renderTransform(), this.renderRenderable(), this.setBlendMode();
							var t = 0 === this.data.ty;
							this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
						}
					},
					destroy: function() {
						this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
					},
					mHelper: new Matrix
				}, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
					if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
						var t = createTag("canvas");
						t.width = this.assetData.w, t.height = this.assetData.h;
						var e, r, i = t.getContext("2d"),
							a = this.img.width,
							s = this.img.height,
							n = a / s,
							o = this.assetData.w / this.assetData.h,
							h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
						n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (r = s) * o : r = (e = a) / o, i.drawImage(this.img, (a - e) / 2, (s - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t
					}
				}, CVImageElement.prototype.renderInnerContent = function() {
					this.canvasContext.drawImage(this.img, 0, 0)
				}, CVImageElement.prototype.destroy = function() {
					this.img = null
				}, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
					var t, e = this.canvasContext;
					for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
				}, CVCompElement.prototype.destroy = function() {
					var t;
					for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
					this.layers = null, this.elements = null
				}, CVMaskElement.prototype.renderFrame = function() {
					if (this.hasMasks) {
						var t, e, r, i, a = this.element.finalTransform.mat,
							s = this.element.canvasContext,
							n = this.masksProperties.length;
						for (s.beginPath(), t = 0; t < n; t += 1)
							if ("n" !== this.masksProperties[t].mode) {
								var o;
								this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), i = this.viewData[t].v, e = a.applyToPointArray(i.v[0][0], i.v[0][1], 0), s.moveTo(e[0], e[1]);
								var h = i._length;
								for (o = 1; o < h; o += 1) r = a.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
								r = a.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
							} this.element.globalData.renderer.save(!0), s.clip()
					}
				}, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
					this.element = null
				}, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
					opacity: 1,
					_opMdf: !1
				}, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
					this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
				}, CVShapeElement.prototype.createStyleElement = function(t, e) {
					var r = {
							data: t,
							type: t.ty,
							preTransforms: this.transformsManager.addTransformSequence(e),
							transforms: [],
							elements: [],
							closed: !0 === t.hd
						},
						i = {};
					if ("fl" === t.ty || "st" === t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
							k: 0
						}, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
							k: 0
						}, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
						if (r.lc = this.lcEnum[t.lc] || "round", r.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
							var a = new DashProperty(this, t.d, "canvas", this);
							i.d = a, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
						}
					} else r.r = 2 === t.r ? "evenodd" : "nonzero";
					return this.stylesList.push(r), i.style = r, i
				}, CVShapeElement.prototype.createGroupElement = function() {
					return {
						it: [],
						prevViewData: []
					}
				}, CVShapeElement.prototype.createTransformElement = function(t) {
					return {
						transform: {
							opacity: 1,
							_opMdf: !1,
							key: this.transformsManager.getNewKey(),
							op: PropertyFactory.getProp(this, t.o, 0, .01, this),
							mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
						}
					}
				}, CVShapeElement.prototype.createShapeElement = function(t) {
					var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
					return this.shapes.push(e), this.addShapeToModifiers(e), e
				}, CVShapeElement.prototype.reloadShapes = function() {
					var t;
					this._isFirstFrame = !0;
					var e = this.itemsData.length;
					for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
					for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
					this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
				}, CVShapeElement.prototype.addTransformToStyleList = function(t) {
					var e, r = this.stylesList.length;
					for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
				}, CVShapeElement.prototype.removeTransformFromStyleList = function() {
					var t, e = this.stylesList.length;
					for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
				}, CVShapeElement.prototype.closeStyles = function(t) {
					var e, r = t.length;
					for (e = 0; e < r; e += 1) t[e].closed = !0
				}, CVShapeElement.prototype.searchShapes = function(t, e, r, i, a) {
					var s, n, o, h, l, p, f = t.length - 1,
						c = [],
						u = [],
						m = [].concat(a);
					for (s = f; s >= 0; s -= 1) {
						if ((h = this.searchProcessedElement(t[s])) ? e[s] = r[h - 1] : t[s]._shouldRender = i, "fl" === t[s].ty || "st" === t[s].ty || "gf" === t[s].ty || "gs" === t[s].ty) h ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], m), c.push(e[s].style);
						else if ("gr" === t[s].ty) {
							if (h)
								for (o = e[s].it.length, n = 0; n < o; n += 1) e[s].prevViewData[n] = e[s].it[n];
							else e[s] = this.createGroupElement(t[s]);
							this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, i, m)
						} else "tr" === t[s].ty ? (h || (p = this.createTransformElement(t[s]), e[s] = p), m.push(e[s]), this.addTransformToStyleList(e[s])) : "sh" === t[s].ty || "rc" === t[s].ty || "el" === t[s].ty || "sr" === t[s].ty ? h || (e[s] = this.createShapeElement(t[s])) : "tm" === t[s].ty || "rd" === t[s].ty || "pb" === t[s].ty ? (h ? (l = e[s]).closed = !1 : ((l = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = l, this.shapeModifiers.push(l)), u.push(l)) : "rp" === t[s].ty && (h ? (l = e[s]).closed = !0 : (l = ShapeModifiers.getModifier(t[s].ty), e[s] = l, l.init(this, t, s, e), this.shapeModifiers.push(l), i = !1), u.push(l));
						this.addProcessedElement(t[s], s + 1)
					}
					for (this.removeTransformFromStyleList(), this.closeStyles(c), f = u.length, s = 0; s < f; s += 1) u[s].closed = !0
				}, CVShapeElement.prototype.renderInnerContent = function() {
					this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
				}, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
					(t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
				}, CVShapeElement.prototype.drawLayer = function() {
					var t, e, r, i, a, s, n, o, h, l = this.stylesList.length,
						p = this.globalData.renderer,
						f = this.globalData.canvasContext;
					for (t = 0; t < l; t += 1)
						if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
							for (p.save(), s = h.elements, "st" === o || "gs" === o ? (f.strokeStyle = "st" === o ? h.co : h.grd, f.lineWidth = h.wi, f.lineCap = h.lc, f.lineJoin = h.lj, f.miterLimit = h.ml || 0) : f.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && f.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), r = s.length, e = 0; e < r; e += 1) {
								for ("st" !== o && "gs" !== o || (f.beginPath(), h.da && (f.setLineDash(h.da), f.lineDashOffset = h.do)), a = (n = s[e].trNodes).length, i = 0; i < a; i += 1) "m" === n[i].t ? f.moveTo(n[i].p[0], n[i].p[1]) : "c" === n[i].t ? f.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : f.closePath();
								"st" !== o && "gs" !== o || (f.stroke(), h.da && f.setLineDash(this.dashResetter))
							}
							"st" !== o && "gs" !== o && f.fill(h.r), p.restore()
						}
				}, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
					var a, s;
					for (s = t, a = e.length - 1; a >= 0; a -= 1) "tr" === e[a].ty ? (s = r[a].transform, this.renderShapeTransform(t, s)) : "sh" === e[a].ty || "el" === e[a].ty || "rc" === e[a].ty || "sr" === e[a].ty ? this.renderPath(e[a], r[a]) : "fl" === e[a].ty ? this.renderFill(e[a], r[a], s) : "st" === e[a].ty ? this.renderStroke(e[a], r[a], s) : "gf" === e[a].ty || "gs" === e[a].ty ? this.renderGradientFill(e[a], r[a], s) : "gr" === e[a].ty ? this.renderShape(s, e[a].it, r[a].it) : e[a].ty;
					i && this.drawLayer()
				}, CVShapeElement.prototype.renderStyledShape = function(t, e) {
					if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
						var r, i, a, s = t.trNodes,
							n = e.paths,
							o = n._length;
						s.length = 0;
						var h = t.transforms.finalTransform;
						for (a = 0; a < o; a += 1) {
							var l = n.shapes[a];
							if (l && l.v) {
								for (i = l._length, r = 1; r < i; r += 1) 1 === r && s.push({
									t: "m",
									p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
								}), s.push({
									t: "c",
									pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r])
								});
								1 === i && s.push({
									t: "m",
									p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
								}), l.c && i && (s.push({
									t: "c",
									pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0])
								}), s.push({
									t: "z"
								}))
							}
						}
						t.trNodes = s
					}
				}, CVShapeElement.prototype.renderPath = function(t, e) {
					if (!0 !== t.hd && t._shouldRender) {
						var r, i = e.styledShapes.length;
						for (r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
					}
				}, CVShapeElement.prototype.renderFill = function(t, e, r) {
					var i = e.style;
					(e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity)
				}, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
					var i, a = e.style;
					if (!a.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
						var s, n = this.globalData.canvasContext,
							o = e.s.v,
							h = e.e.v;
						if (1 === t.t) i = n.createLinearGradient(o[0], o[1], h[0], h[1]);
						else {
							var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)),
								p = Math.atan2(h[1] - o[1], h[0] - o[0]),
								f = e.h.v;
							f >= 1 ? f = .99 : f <= -1 && (f = -.99);
							var c = l * f,
								u = Math.cos(p + e.a.v) * c + o[0],
								m = Math.sin(p + e.a.v) * c + o[1];
							i = n.createRadialGradient(u, m, 0, o[0], o[1], l)
						}
						var d = t.g.p,
							g = e.g.c,
							y = 1;
						for (s = 0; s < d; s += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * s + 1]), i.addColorStop(g[4 * s] / 100, "rgba(" + g[4 * s + 1] + "," + g[4 * s + 2] + "," + g[4 * s + 3] + "," + y + ")");
						a.grd = i
					}
					a.coOp = e.o.v * r.opacity
				}, CVShapeElement.prototype.renderStroke = function(t, e, r) {
					var i = e.style,
						a = e.d;
					a && (a._mdf || this._isFirstFrame) && (i.da = a.dashArray, i.do = a.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
				}, CVShapeElement.prototype.destroy = function() {
					this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
				}, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
					var t = this.canvasContext;
					t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
				}, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
					var t = this.textProperty.currentData;
					this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
					var e = !1;
					t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
					var r = !1;
					t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
					var i, a, s, n, o, h, l, p, f, c, u, m, d = this.globalData.fontManager.getFontByName(t.f),
						g = t.l,
						y = this.mHelper;
					this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
					var v = this.data.singleShape,
						b = .001 * t.tr * t.finalSize,
						x = 0,
						E = 0,
						P = !0,
						S = 0;
					for (i = 0; i < a; i += 1) {
						for (n = (s = this.globalData.fontManager.getCharData(t.finalText[i], d.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && s.data || {}, y.reset(), v && g[i].n && (x = -b, E += t.yOffset, E += P ? 1 : 0, P = !1), f = (l = n.shapes ? n.shapes[0].it : []).length, y.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, y, g[i].line, x, E), u = createSizedArray(f), p = 0; p < f; p += 1) {
							for (h = l[p].ks.k.i.length, c = l[p].ks.k, m = [], o = 1; o < h; o += 1) 1 === o && m.push(y.applyToX(c.v[0][0], c.v[0][1], 0), y.applyToY(c.v[0][0], c.v[0][1], 0)), m.push(y.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), y.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), y.applyToX(c.i[o][0], c.i[o][1], 0), y.applyToY(c.i[o][0], c.i[o][1], 0), y.applyToX(c.v[o][0], c.v[o][1], 0), y.applyToY(c.v[o][0], c.v[o][1], 0));
							m.push(y.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), y.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), y.applyToX(c.i[0][0], c.i[0][1], 0), y.applyToY(c.i[0][0], c.i[0][1], 0), y.applyToX(c.v[0][0], c.v[0][1], 0), y.applyToY(c.v[0][0], c.v[0][1], 0)), u[p] = m
						}
						v && (x += g[i].l, x += b), this.textSpans[S] ? this.textSpans[S].elem = u : this.textSpans[S] = {
							elem: u
						}, S += 1
					}
				}, CVTextElement.prototype.renderInnerContent = function() {
					var t, e, r, i, a, s, n = this.canvasContext;
					n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
					var o, h = this.textAnimator.renderedLetters,
						l = this.textProperty.currentData.l;
					e = l.length;
					var p, f, c = null,
						u = null,
						m = null;
					for (t = 0; t < e; t += 1)
						if (!l[t].n) {
							if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
								for (o && o.fc ? c !== o.fc && (c = o.fc, n.fillStyle = o.fc) : c !== this.values.fill && (c = this.values.fill, n.fillStyle = this.values.fill), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
									for (s = (f = p[r]).length, this.globalData.canvasContext.moveTo(f[0], f[1]), a = 2; a < s; a += 6) this.globalData.canvasContext.bezierCurveTo(f[a], f[a + 1], f[a + 2], f[a + 3], f[a + 4], f[a + 5]);
								this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
							}
							if (this.stroke) {
								for (o && o.sw ? m !== o.sw && (m = o.sw, n.lineWidth = o.sw) : m !== this.values.sWidth && (m = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? u !== o.sc && (u = o.sc, n.strokeStyle = o.sc) : u !== this.values.stroke && (u = this.values.stroke, n.strokeStyle = this.values.stroke), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
									for (s = (f = p[r]).length, this.globalData.canvasContext.moveTo(f[0], f[1]), a = 2; a < s; a += 6) this.globalData.canvasContext.bezierCurveTo(f[a], f[a + 1], f[a + 2], f[a + 3], f[a + 4], f[a + 5]);
								this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
							}
							o && this.globalData.renderer.restore()
						}
				}, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
					checkBlendMode: function() {},
					initRendererElement: function() {
						this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
					},
					createContainerElements: function() {
						this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
					},
					renderElement: function() {
						var t = this.transformedElement ? this.transformedElement.style : {};
						if (this.finalTransform._matMdf) {
							var e = this.finalTransform.mat.toCSS();
							t.transform = e, t.webkitTransform = e
						}
						this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
					},
					renderFrame: function() {
						this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
					},
					destroy: function() {
						this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
					},
					createRenderableComponents: function() {
						this.maskManager = new MaskElement(this.data, this, this.globalData)
					},
					addEffects: function() {},
					setMatte: function() {}
				}, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
					var t;
					this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
				}, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
					this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
				}, HCompElement.prototype.addTo3dContainer = function(t, e) {
					for (var r, i = 0; i < e;) this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
					r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t)
				}, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
					var t;
					if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
					else {
						t = createNS("svg");
						var e = this.comp.data ? this.comp.data : this.globalData.compSize;
						t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
					}
					this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
				}, HShapeElement.prototype.getTransformedPoint = function(t, e) {
					var r, i = t.length;
					for (r = 0; r < i; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
					return e
				}, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
					var r, i, a, s, n, o = t.sh.v,
						h = t.transformers,
						l = o._length;
					if (!(l <= 1)) {
						for (r = 0; r < l - 1; r += 1) i = this.getTransformedPoint(h, o.v[r]), a = this.getTransformedPoint(h, o.o[r]), s = this.getTransformedPoint(h, o.i[r + 1]), n = this.getTransformedPoint(h, o.v[r + 1]), this.checkBounds(i, a, s, n, e);
						o.c && (i = this.getTransformedPoint(h, o.v[r]), a = this.getTransformedPoint(h, o.o[r]), s = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(i, a, s, n, e))
					}
				}, HShapeElement.prototype.checkBounds = function(t, e, r, i, a) {
					this.getBoundsOfCurve(t, e, r, i);
					var s = this.shapeBoundingBox;
					a.x = bmMin(s.left, a.x), a.xMax = bmMax(s.right, a.xMax), a.y = bmMin(s.top, a.y), a.yMax = bmMax(s.bottom, a.yMax)
				}, HShapeElement.prototype.shapeBoundingBox = {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}, HShapeElement.prototype.tempBoundingBox = {
					x: 0,
					xMax: 0,
					y: 0,
					yMax: 0,
					width: 0,
					height: 0
				}, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
					for (var a, s, n, o, h, l, p, f = [
							[t[0], i[0]],
							[t[1], i[1]]
						], c = 0; c < 2; ++c) s = 6 * t[c] - 12 * e[c] + 6 * r[c], a = -3 * t[c] + 9 * e[c] - 9 * r[c] + 3 * i[c], n = 3 * e[c] - 3 * t[c], s |= 0, n |= 0, 0 == (a |= 0) && 0 === s || (0 === a ? (o = -n / s) > 0 && o < 1 && f[c].push(this.calculateF(o, t, e, r, i, c)) : (h = s * s - 4 * n * a) >= 0 && ((l = (-s + bmSqrt(h)) / (2 * a)) > 0 && l < 1 && f[c].push(this.calculateF(l, t, e, r, i, c)), (p = (-s - bmSqrt(h)) / (2 * a)) > 0 && p < 1 && f[c].push(this.calculateF(p, t, e, r, i, c))));
					this.shapeBoundingBox.left = bmMin.apply(null, f[0]), this.shapeBoundingBox.top = bmMin.apply(null, f[1]), this.shapeBoundingBox.right = bmMax.apply(null, f[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, f[1])
				}, HShapeElement.prototype.calculateF = function(t, e, r, i, a, s) {
					return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * r[s] + 3 * (1 - t) * bmPow(t, 2) * i[s] + bmPow(t, 3) * a[s]
				}, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
					var r, i = t.length;
					for (r = 0; r < i; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e)
				}, HShapeElement.prototype.currentBoxContains = function(t) {
					return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
				}, HShapeElement.prototype.renderInnerContent = function() {
					if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
						var t = this.tempBoundingBox,
							e = 999999;
						if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
						var r = !1;
						if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
							this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
							var i = this.shapeCont.style,
								a = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
							i.transform = a, i.webkitTransform = a
						}
					}
				}, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
					if (this.isMasked = this.checkMasks(), this.isMasked) {
						this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
						var t = createNS("g");
						this.maskedElement.appendChild(t), this.innerElem = t
					} else this.renderType = "html", this.innerElem = this.layerElement;
					this.checkParenting()
				}, HTextElement.prototype.buildNewText = function() {
					var t = this.textProperty.currentData;
					this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
					var e = this.innerElem.style,
						r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
					e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
					var i, a, s = this.globalData.fontManager.getFontByName(t.f);
					if (!this.globalData.fontManager.chars)
						if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
						else {
							e.fontFamily = s.fFamily;
							var n = t.fWeight,
								o = t.fStyle;
							e.fontStyle = o, e.fontWeight = n
						} var h, l, p, f = t.l;
					a = f.length;
					var c, u = this.mHelper,
						m = "",
						d = 0;
					for (i = 0; i < a; i += 1) {
						if (this.globalData.fontManager.chars ? (this.textPaths[d] ? h = this.textPaths[d] : ((h = createNS("path")).setAttribute("stroke-linecap", "butt"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? p = (l = this.textSpans[d]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (l = this.textSpans[d], h = this.textPaths[d]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
							var g, y = this.globalData.fontManager.getCharData(t.finalText[i], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
							if (g = y ? y.data : null, u.reset(), g && g.shapes && (c = g.shapes[0].it, u.scale(t.finalSize / 100, t.finalSize / 100), m = this.createPathShape(u, c), h.setAttribute("d", m)), this.isMasked) this.innerElem.appendChild(h);
							else {
								if (this.innerElem.appendChild(l), g && g.shapes) {
									document.body.appendChild(p);
									var v = p.getBBox();
									p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
									var b = p.style,
										x = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
									b.transform = x, b.webkitTransform = x, f[i].yOffset = v.y - 1
								} else p.setAttribute("width", 1), p.setAttribute("height", 1);
								l.appendChild(p)
							}
						} else if (h.textContent = f[i].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(h);
						else {
							this.innerElem.appendChild(l);
							var E = h.style,
								P = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
							E.transform = P, E.webkitTransform = P
						}
						this.isMasked ? this.textSpans[d] = h : this.textSpans[d] = l, this.textSpans[d].style.display = "block", this.textPaths[d] = h, d += 1
					}
					for (; d < this.textSpans.length;) this.textSpans[d].style.display = "none", d += 1
				}, HTextElement.prototype.renderInnerContent = function() {
					var t;
					if (this.data.singleShape) {
						if (!this._isFirstFrame && !this.lettersChangedFlag) return;
						if (this.isMasked && this.finalTransform._matMdf) {
							this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
							var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
							t.transform = e, t.webkitTransform = e
						}
					}
					if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
						var r, i, a, s, n, o = 0,
							h = this.textAnimator.renderedLetters,
							l = this.textProperty.currentData.l;
						for (i = l.length, r = 0; r < i; r += 1) l[r].n ? o += 1 : (s = this.textSpans[r], n = this.textPaths[r], a = h[o], o += 1, a._mdf.m && (this.isMasked ? s.setAttribute("transform", a.m) : (s.style.webkitTransform = a.m, s.style.transform = a.m)), s.style.opacity = a.o, a.sw && a._mdf.sw && n.setAttribute("stroke-width", a.sw), a.sc && a._mdf.sc && n.setAttribute("stroke", a.sc), a.fc && a._mdf.fc && (n.setAttribute("fill", a.fc), n.style.color = a.fc));
						if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
							var p = this.innerElem.getBBox();
							if (this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height)), this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
								this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
								var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
								t.transform = f, t.webkitTransform = f
							}
						}
					}
				}, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
					var t = this.globalData.getAssetsPath(this.assetData),
						e = new Image;
					this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
				}, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
					var t, e, r, i, a = this.comp.threeDElements.length;
					for (t = 0; t < a; t += 1)
						if ("3d" === (e = this.comp.threeDElements[t]).type) {
							r = e.perspectiveElem.style, i = e.container.style;
							var s = this.pe.v + "px",
								n = "0px 0px 0px",
								o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
							r.perspective = s, r.webkitPerspective = s, i.transformOrigin = n, i.mozTransformOrigin = n, i.webkitTransformOrigin = n, r.transform = o, r.webkitTransform = o
						}
				}, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
					var t, e, r = this._isFirstFrame;
					if (this.hierarchy)
						for (e = this.hierarchy.length, t = 0; t < e; t += 1) r = this.hierarchy[t].finalTransform.mProp._mdf || r;
					if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
						if (this.mat.reset(), this.hierarchy)
							for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
								var i = this.hierarchy[t].finalTransform.mProp;
								this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
							}
						if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
							var a;
							a = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
							var s = Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)),
								n = [a[0] / s, a[1] / s, a[2] / s],
								o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
								h = Math.atan2(n[1], o),
								l = Math.atan2(n[0], -n[2]);
							this.mat.rotateY(l).rotateX(-h)
						}
						this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
						var p = !this._prevMat.equals(this.mat);
						if ((p || this.pe._mdf) && this.comp.threeDElements) {
							var f, c, u;
							for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
								if ("3d" === (f = this.comp.threeDElements[t]).type) {
									if (p) {
										var m = this.mat.toCSS();
										(u = f.container.style).transform = m, u.webkitTransform = m
									}
									this.pe._mdf && ((c = f.perspectiveElem.style).perspective = this.pe.v + "px", c.webkitPerspective = this.pe.v + "px")
								} this.mat.clone(this._prevMat)
						}
					}
					this._isFirstFrame = !1
				}, HCameraElement.prototype.prepareFrame = function(t) {
					this.prepareProperties(t, !0)
				}, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
					return null
				}, HEffects.prototype.renderFrame = function() {};
				var animationManager = function() {
						var t = {},
							e = [],
							r = 0,
							i = 0,
							a = 0,
							s = !0,
							n = !1;

						function o(t) {
							for (var r = 0, a = t.target; r < i;) e[r].animation === a && (e.splice(r, 1), r -= 1, i -= 1, a.isPaused || p()), r += 1
						}

						function h(t, r) {
							if (!t) return null;
							for (var a = 0; a < i;) {
								if (e[a].elem === t && null !== e[a].elem) return e[a].animation;
								a += 1
							}
							var s = new AnimationItem;
							return f(s, t), s.setData(t, r), s
						}

						function l() {
							a += 1, m()
						}

						function p() {
							a -= 1
						}

						function f(t, r) {
							t.addEventListener("destroy", o), t.addEventListener("_active", l), t.addEventListener("_idle", p), e.push({
								elem: r,
								animation: t
							}), i += 1
						}

						function c(t) {
							var o, h = t - r;
							for (o = 0; o < i; o += 1) e[o].animation.advanceTime(h);
							r = t, a && !n ? window.requestAnimationFrame(c) : s = !0
						}

						function u(t) {
							r = t, window.requestAnimationFrame(c)
						}

						function m() {
							!n && a && s && (window.requestAnimationFrame(u), s = !1)
						}
						return t.registerAnimation = h, t.loadAnimation = function(t) {
							var e = new AnimationItem;
							return f(e, null), e.setParams(t), e
						}, t.setSpeed = function(t, r) {
							var a;
							for (a = 0; a < i; a += 1) e[a].animation.setSpeed(t, r)
						}, t.setDirection = function(t, r) {
							var a;
							for (a = 0; a < i; a += 1) e[a].animation.setDirection(t, r)
						}, t.play = function(t) {
							var r;
							for (r = 0; r < i; r += 1) e[r].animation.play(t)
						}, t.pause = function(t) {
							var r;
							for (r = 0; r < i; r += 1) e[r].animation.pause(t)
						}, t.stop = function(t) {
							var r;
							for (r = 0; r < i; r += 1) e[r].animation.stop(t)
						}, t.togglePause = function(t) {
							var r;
							for (r = 0; r < i; r += 1) e[r].animation.togglePause(t)
						}, t.searchAnimations = function(t, e, r) {
							var i, a = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
								s = a.length;
							for (i = 0; i < s; i += 1) r && a[i].setAttribute("data-bm-type", r), h(a[i], t);
							if (e && 0 === s) {
								r || (r = "svg");
								var n = document.getElementsByTagName("body")[0];
								n.innerText = "";
								var o = createTag("div");
								o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), n.appendChild(o), h(o, t)
							}
						}, t.resize = function() {
							var t;
							for (t = 0; t < i; t += 1) e[t].animation.resize()
						}, t.goToAndStop = function(t, r, a) {
							var s;
							for (s = 0; s < i; s += 1) e[s].animation.goToAndStop(t, r, a)
						}, t.destroy = function(t) {
							var r;
							for (r = i - 1; r >= 0; r -= 1) e[r].animation.destroy(t)
						}, t.freeze = function() {
							n = !0
						}, t.unfreeze = function() {
							n = !1, m()
						}, t.setVolume = function(t, r) {
							var a;
							for (a = 0; a < i; a += 1) e[a].animation.setVolume(t, r)
						}, t.mute = function(t) {
							var r;
							for (r = 0; r < i; r += 1) e[r].animation.mute(t)
						}, t.unmute = function(t) {
							var r;
							for (r = 0; r < i; r += 1) e[r].animation.unmute(t)
						}, t.getRegisteredAnimations = function() {
							var t, r = e.length,
								i = [];
							for (t = 0; t < r; t += 1) i.push(e[t].animation);
							return i
						}, t
					}(),
					AnimationItem = function() {
						this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = []
					};
				extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
					(t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
					var e = "svg";
					switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
						case "canvas":
							this.renderer = new CanvasRenderer(this, t.rendererSettings);
							break;
						case "svg":
							this.renderer = new SVGRenderer(this, t.rendererSettings);
							break;
						default:
							this.renderer = new HybridRenderer(this, t.rendererSettings)
					}
					this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function() {
						this.trigger("data_failed")
					}.bind(this)))
				}, AnimationItem.prototype.setData = function(t, e) {
					e && "object" != typeof e && (e = JSON.parse(e));
					var r = {
							wrapper: t,
							animationData: e
						},
						i = t.attributes;
					r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
					var a = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
					"false" === a ? r.loop = !1 : "true" === a ? r.loop = !0 : "" !== a && (r.loop = parseInt(a, 10));
					var s = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
					r.autoplay = "false" !== s, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r)
				}, AnimationItem.prototype.includeLayers = function(t) {
					t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
					var e, r, i = this.animationData.layers,
						a = i.length,
						s = t.layers,
						n = s.length;
					for (r = 0; r < n; r += 1)
						for (e = 0; e < a;) {
							if (i[e].id === s[r].id) {
								i[e] = s[r];
								break
							}
							e += 1
						}
					if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
						for (a = t.assets.length, e = 0; e < a; e += 1) this.animationData.assets.push(t.assets[e]);
					this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
				}, AnimationItem.prototype.loadNextSegment = function() {
					var t = this.animationData.segments;
					if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
					var e = t.shift();
					this.timeCompleted = e.time * this.frameRate;
					var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
					this.segmentPos += 1, assetLoader.load(r, this.includeLayers.bind(this), function() {
						this.trigger("data_failed")
					}.bind(this))
				}, AnimationItem.prototype.loadSegments = function() {
					this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
				}, AnimationItem.prototype.imagesLoaded = function() {
					this.trigger("loaded_images"), this.checkLoaded()
				}, AnimationItem.prototype.preloadImages = function() {
					this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
				}, AnimationItem.prototype.configAnimation = function(t) {
					if (this.renderer) try {
						this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
					} catch (t) {
						this.triggerConfigError(t)
					}
				}, AnimationItem.prototype.waitForFontsLoaded = function() {
					this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
				}, AnimationItem.prototype.checkLoaded = function() {
					!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages() && (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
						this.trigger("DOMLoaded")
					}.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
				}, AnimationItem.prototype.resize = function() {
					this.renderer.updateContainerSize()
				}, AnimationItem.prototype.setSubframe = function(t) {
					this.isSubframeEnabled = !!t
				}, AnimationItem.prototype.gotoFrame = function() {
					this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
				}, AnimationItem.prototype.renderFrame = function() {
					if (!1 !== this.isLoaded && this.renderer) try {
						this.renderer.renderFrame(this.currentFrame + this.firstFrame)
					} catch (t) {
						this.triggerRenderFrameError(t)
					}
				}, AnimationItem.prototype.play = function(t) {
					t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
				}, AnimationItem.prototype.pause = function(t) {
					t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause())
				}, AnimationItem.prototype.togglePause = function(t) {
					t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
				}, AnimationItem.prototype.stop = function(t) {
					t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
				}, AnimationItem.prototype.getMarkerData = function(t) {
					for (var e, r = 0; r < this.markers.length; r += 1)
						if ((e = this.markers[r]).payload && e.payload.name === t) return e;
					return null
				}, AnimationItem.prototype.goToAndStop = function(t, e, r) {
					if (!r || this.name === r) {
						var i = Number(t);
						if (isNaN(i)) {
							var a = this.getMarkerData(t);
							a && this.goToAndStop(a.time, !0)
						} else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
						this.pause()
					}
				}, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
					if (!r || this.name === r) {
						var i = Number(t);
						if (isNaN(i)) {
							var a = this.getMarkerData(t);
							a && (a.duration ? this.playSegments([a.time, a.time + a.duration], !0) : this.goToAndStop(a.time, !0))
						} else this.goToAndStop(i, e, r);
						this.play()
					}
				}, AnimationItem.prototype.advanceTime = function(t) {
					if (!0 !== this.isPaused && !1 !== this.isLoaded) {
						var e = this.currentRawFrame + t * this.frameModifier,
							r = !1;
						e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
					}
				}, AnimationItem.prototype.adjustSegment = function(t, e) {
					this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
				}, AnimationItem.prototype.setSegment = function(t, e) {
					var r = -1;
					this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0)
				}, AnimationItem.prototype.playSegments = function(t, e) {
					if (e && (this.segments.length = 0), "object" == typeof t[0]) {
						var r, i = t.length;
						for (r = 0; r < i; r += 1) this.segments.push(t[r])
					} else this.segments.push(t);
					this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
				}, AnimationItem.prototype.resetSegments = function(t) {
					this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
				}, AnimationItem.prototype.checkSegments = function(t) {
					return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
				}, AnimationItem.prototype.destroy = function(t) {
					t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
				}, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
					this.currentRawFrame = t, this.gotoFrame()
				}, AnimationItem.prototype.setSpeed = function(t) {
					this.playSpeed = t, this.updaFrameModifier()
				}, AnimationItem.prototype.setDirection = function(t) {
					this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
				}, AnimationItem.prototype.setVolume = function(t, e) {
					e && this.name !== e || this.audioController.setVolume(t)
				}, AnimationItem.prototype.getVolume = function() {
					return this.audioController.getVolume()
				}, AnimationItem.prototype.mute = function(t) {
					t && this.name !== t || this.audioController.mute()
				}, AnimationItem.prototype.unmute = function(t) {
					t && this.name !== t || this.audioController.unmute()
				}, AnimationItem.prototype.updaFrameModifier = function() {
					this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
				}, AnimationItem.prototype.getPath = function() {
					return this.path
				}, AnimationItem.prototype.getAssetsPath = function(t) {
					var e = "";
					if (t.e) e = t.p;
					else if (this.assetsPath) {
						var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r
					} else e = this.path, e += t.u ? t.u : "", e += t.p;
					return e
				}, AnimationItem.prototype.getAssetData = function(t) {
					for (var e = 0, r = this.assets.length; e < r;) {
						if (t === this.assets[e].id) return this.assets[e];
						e += 1
					}
					return null
				}, AnimationItem.prototype.hide = function() {
					this.renderer.hide()
				}, AnimationItem.prototype.show = function() {
					this.renderer.show()
				}, AnimationItem.prototype.getDuration = function(t) {
					return t ? this.totalFrames : this.totalFrames / this.frameRate
				}, AnimationItem.prototype.trigger = function(t) {
					if (this._cbs && this._cbs[t]) switch (t) {
						case "enterFrame":
							this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
							break;
						case "loopComplete":
							this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
							break;
						case "complete":
							this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
							break;
						case "segmentStart":
							this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
							break;
						case "destroy":
							this.triggerEvent(t, new BMDestroyEvent(t, this));
							break;
						default:
							this.triggerEvent(t)
					}
					"enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
				}, AnimationItem.prototype.triggerRenderFrameError = function(t) {
					var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
					this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
				}, AnimationItem.prototype.triggerConfigError = function(t) {
					var e = new BMConfigErrorEvent(t, this.currentFrame);
					this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
				};
				var Expressions = function() {
					var t = {
						initExpressions: function(t) {
							var e = 0,
								r = [];
							t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
								e += 1
							}, t.renderer.globalData.popExpression = function() {
								0 == (e -= 1) && function() {
									var t, e = r.length;
									for (t = 0; t < e; t += 1) r[t].release();
									r.length = 0
								}()
							}, t.renderer.globalData.registerExpressionProperty = function(t) {
								-1 === r.indexOf(t) && r.push(t)
							}
						}
					};
					return t
				}();
				expressionsPlugin = Expressions;
				var ExpressionManager = function() {
						var ob = {},
							Math = BMMath,
							window = null,
							document = null,
							XMLHttpRequest = null,
							fetch = null;

						function $bm_isInstanceOfArray(t) {
							return t.constructor === Array || t.constructor === Float32Array
						}

						function isNumerable(t, e) {
							return "number" === t || "boolean" === t || "string" === t || e instanceof Number
						}

						function $bm_neg(t) {
							var e = typeof t;
							if ("number" === e || "boolean" === e || t instanceof Number) return -t;
							if ($bm_isInstanceOfArray(t)) {
								var r, i = t.length,
									a = [];
								for (r = 0; r < i; r += 1) a[r] = -t[r];
								return a
							}
							return t.propType ? t.v : -t
						}
						var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
							easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
							easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

						function sum(t, e) {
							var r = typeof t,
								i = typeof e;
							if ("string" === r || "string" === i) return t + e;
							if (isNumerable(r, t) && isNumerable(i, e)) return t + e;
							if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] += e, t;
							if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
							if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
								for (var a = 0, s = t.length, n = e.length, o = []; a < s || a < n;)("number" == typeof t[a] || t[a] instanceof Number) && ("number" == typeof e[a] || e[a] instanceof Number) ? o[a] = t[a] + e[a] : o[a] = void 0 === e[a] ? t[a] : t[a] || e[a], a += 1;
								return o
							}
							return 0
						}
						var add = sum;

						function sub(t, e) {
							var r = typeof t,
								i = typeof e;
							if (isNumerable(r, t) && isNumerable(i, e)) return "string" === r && (t = parseInt(t, 10)), "string" === i && (e = parseInt(e, 10)), t - e;
							if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] -= e, t;
							if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
							if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
								for (var a = 0, s = t.length, n = e.length, o = []; a < s || a < n;)("number" == typeof t[a] || t[a] instanceof Number) && ("number" == typeof e[a] || e[a] instanceof Number) ? o[a] = t[a] - e[a] : o[a] = void 0 === e[a] ? t[a] : t[a] || e[a], a += 1;
								return o
							}
							return 0
						}

						function mul(t, e) {
							var r, i, a, s = typeof t,
								n = typeof e;
							if (isNumerable(s, t) && isNumerable(n, e)) return t * e;
							if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
								for (a = t.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t[i] * e;
								return r
							}
							if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
								for (a = e.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t * e[i];
								return r
							}
							return 0
						}

						function div(t, e) {
							var r, i, a, s = typeof t,
								n = typeof e;
							if (isNumerable(s, t) && isNumerable(n, e)) return t / e;
							if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
								for (a = t.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t[i] / e;
								return r
							}
							if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
								for (a = e.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t / e[i];
								return r
							}
							return 0
						}

						function mod(t, e) {
							return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
						}
						var $bm_sum = sum,
							$bm_sub = sub,
							$bm_mul = mul,
							$bm_div = div,
							$bm_mod = mod;

						function clamp(t, e, r) {
							if (e > r) {
								var i = r;
								r = e, e = i
							}
							return Math.min(Math.max(t, e), r)
						}

						function radiansToDegrees(t) {
							return t / degToRads
						}
						var radians_to_degrees = radiansToDegrees;

						function degreesToRadians(t) {
							return t * degToRads
						}
						var degrees_to_radians = radiansToDegrees,
							helperLengthArray = [0, 0, 0, 0, 0, 0];

						function length(t, e) {
							if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
							var r;
							e || (e = helperLengthArray);
							var i = Math.min(t.length, e.length),
								a = 0;
							for (r = 0; r < i; r += 1) a += Math.pow(e[r] - t[r], 2);
							return Math.sqrt(a)
						}

						function normalize(t) {
							return div(t, length(t))
						}

						function rgbToHsl(t) {
							var e, r, i = t[0],
								a = t[1],
								s = t[2],
								n = Math.max(i, a, s),
								o = Math.min(i, a, s),
								h = (n + o) / 2;
							if (n === o) e = 0, r = 0;
							else {
								var l = n - o;
								switch (r = h > .5 ? l / (2 - n - o) : l / (n + o), n) {
									case i:
										e = (a - s) / l + (a < s ? 6 : 0);
										break;
									case a:
										e = (s - i) / l + 2;
										break;
									case s:
										e = (i - a) / l + 4
								}
								e /= 6
							}
							return [e, r, h, t[3]]
						}

						function hue2rgb(t, e, r) {
							return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
						}

						function hslToRgb(t) {
							var e, r, i, a = t[0],
								s = t[1],
								n = t[2];
							if (0 === s) e = n, i = n, r = n;
							else {
								var o = n < .5 ? n * (1 + s) : n + s - n * s,
									h = 2 * n - o;
								e = hue2rgb(h, o, a + 1 / 3), r = hue2rgb(h, o, a), i = hue2rgb(h, o, a - 1 / 3)
							}
							return [e, r, i, t[3]]
						}

						function linear(t, e, r, i, a) {
							if (void 0 !== i && void 0 !== a || (i = e, a = r, e = 0, r = 1), r < e) {
								var s = r;
								r = e, e = s
							}
							if (t <= e) return i;
							if (t >= r) return a;
							var n, o = r === e ? 0 : (t - e) / (r - e);
							if (!i.length) return i + (a - i) * o;
							var h = i.length,
								l = createTypedArray("float32", h);
							for (n = 0; n < h; n += 1) l[n] = i[n] + (a[n] - i[n]) * o;
							return l
						}

						function random(t, e) {
							if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
								var r, i = e.length;
								t || (t = createTypedArray("float32", i));
								var a = createTypedArray("float32", i),
									s = BMMath.random();
								for (r = 0; r < i; r += 1) a[r] = t[r] + s * (e[r] - t[r]);
								return a
							}
							return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
						}

						function createPath(t, e, r, i) {
							var a, s = t.length,
								n = shapePool.newElement();
							n.setPathData(!!i, s);
							var o, h, l = [0, 0];
							for (a = 0; a < s; a += 1) o = e && e[a] ? e[a] : l, h = r && r[a] ? r[a] : l, n.setTripleAt(t[a][0], t[a][1], h[0] + t[a][0], h[1] + t[a][1], o[0] + t[a][0], o[1] + t[a][1], a, !0);
							return n
						}

						function initiateExpression(elem, data, property) {
							var val = data.x,
								needsVelocity = /velocity(?![\w\d])/.test(val),
								_needsRandom = -1 !== val.indexOf("random"),
								elemType = elem.data.ty,
								transform, $bm_transform, content, effect, thisProperty = property;
							thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
								get: function() {
									return thisProperty.v
								}
							}), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
							var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
								outPoint = elem.data.op / elem.comp.globalData.frameRate,
								width = elem.data.sw ? elem.data.sw : 0,
								height = elem.data.sh ? elem.data.sh : 0,
								name = elem.data.nm,
								loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
								numKeys = property.kf ? data.k.length : 0,
								active = !this.data || !0 !== this.data.hd,
								wiggle = function(t, e) {
									var r, i, a = this.pv.length ? this.pv.length : 1,
										s = createTypedArray("float32", a),
										n = Math.floor(5 * time);
									for (r = 0, i = 0; r < n;) {
										for (i = 0; i < a; i += 1) s[i] += -e + 2 * e * BMMath.random();
										r += 1
									}
									var o = 5 * time,
										h = o - Math.floor(o),
										l = createTypedArray("float32", a);
									if (a > 1) {
										for (i = 0; i < a; i += 1) l[i] = this.pv[i] + s[i] + (-e + 2 * e * BMMath.random()) * h;
										return l
									}
									return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * h
								}.bind(this);

							function loopInDuration(t, e) {
								return loopIn(t, e, !0)
							}

							function loopOutDuration(t, e) {
								return loopOut(t, e, !0)
							}
							thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
							var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
								time, velocity, value, text, textIndex, textTotal, selectorValue;

							function lookAt(t, e) {
								var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
									i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
								return [-Math.atan2(r[1], r[2]) / degToRads, i, 0]
							}

							function easeOut(t, e, r, i, a) {
								return applyEase(easeOutBez, t, e, r, i, a)
							}

							function easeIn(t, e, r, i, a) {
								return applyEase(easeInBez, t, e, r, i, a)
							}

							function ease(t, e, r, i, a) {
								return applyEase(easeInOutBez, t, e, r, i, a)
							}

							function applyEase(t, e, r, i, a, s) {
								void 0 === a ? (a = r, s = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
								var n = t(e);
								if ($bm_isInstanceOfArray(a)) {
									var o, h = a.length,
										l = createTypedArray("float32", h);
									for (o = 0; o < h; o += 1) l[o] = (s[o] - a[o]) * n + a[o];
									return l
								}
								return (s - a) * n + a
							}

							function nearestKey(t) {
								var e, r, i, a = data.k.length;
								if (data.k.length && "number" != typeof data.k[0])
									if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t;
									else {
										for (e = 0; e < a - 1; e += 1) {
											if (t === data.k[e].t) {
												r = e + 1, i = data.k[e].t;
												break
											}
											if (t > data.k[e].t && t < data.k[e + 1].t) {
												t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, i = data.k[e + 1].t) : (r = e + 1, i = data.k[e].t);
												break
											}
										} - 1 === r && (r = e + 1, i = data.k[e].t)
									}
								else r = 0, i = 0;
								var s = {};
								return s.index = r, s.time = i / elem.comp.globalData.frameRate, s
							}

							function key(t) {
								var e, r, i;
								if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
								t -= 1, e = {
									time: data.k[t].t / elem.comp.globalData.frameRate,
									value: []
								};
								var a = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
								for (i = a.length, r = 0; r < i; r += 1) e[r] = a[r], e.value[r] = a[r];
								return e
							}

							function framesToTime(t, e) {
								return e || (e = elem.comp.globalData.frameRate), t / e
							}

							function timeToFrames(t, e) {
								return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
							}

							function seedRandom(t) {
								BMMath.seedrandom(randSeed + t)
							}

							function sourceRectAtTime() {
								return elem.sourceRectAtTime()
							}

							function substring(t, e) {
								return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
							}

							function substr(t, e) {
								return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
							}

							function posterizeTime(t) {
								time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
							}
							var index = elem.data.ind,
								hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
								parent, randSeed = Math.floor(1e6 * Math.random()),
								globalData = elem.globalData;

							function executeExpression(t) {
								return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
							}
							return executeExpression
						}
						return ob.initiateExpression = initiateExpression, ob
					}(),
					expressionHelpers = {
						searchExpressions: function(t, e, r) {
							e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)))
						},
						getSpeedAtTime: function(t) {
							var e = this.getValueAtTime(t),
								r = this.getValueAtTime(t + -.01),
								i = 0;
							if (e.length) {
								var a;
								for (a = 0; a < e.length; a += 1) i += Math.pow(r[a] - e[a], 2);
								i = 100 * Math.sqrt(i)
							} else i = 0;
							return i
						},
						getVelocityAtTime: function(t) {
							if (void 0 !== this.vel) return this.vel;
							var e, r, i = -.001,
								a = this.getValueAtTime(t),
								s = this.getValueAtTime(t + i);
							if (a.length)
								for (e = createTypedArray("float32", a.length), r = 0; r < a.length; r += 1) e[r] = (s[r] - a[r]) / i;
							else e = (s - a) / i;
							return e
						},
						getValueAtTime: function(t) {
							return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
						},
						getStaticValueAtTime: function() {
							return this.pv
						},
						setGroupProperty: function(t) {
							this.propertyGroup = t
						}
					};
				! function() {
					function t(t, e, r) {
						if (!this.k || !this.keyframes) return this.pv;
						t = t ? t.toLowerCase() : "";
						var i, a, s, n, o, h = this.comp.renderedFrame,
							l = this.keyframes,
							p = l[l.length - 1].t;
						if (h <= p) return this.pv;
						if (r ? a = p - (i = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = p - (a = l[l.length - 1 - e].t)), "pingpong" === t) {
							if (Math.floor((h - a) / i) % 2 != 0) return this.getValueAtTime((i - (h - a) % i + a) / this.comp.globalData.frameRate, 0)
						} else {
							if ("offset" === t) {
								var f = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
									c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
									u = this.getValueAtTime(((h - a) % i + a) / this.comp.globalData.frameRate, 0),
									m = Math.floor((h - a) / i);
								if (this.pv.length) {
									for (n = (o = new Array(f.length)).length, s = 0; s < n; s += 1) o[s] = (c[s] - f[s]) * m + u[s];
									return o
								}
								return (c - f) * m + u
							}
							if ("continue" === t) {
								var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
									g = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
								if (this.pv.length) {
									for (n = (o = new Array(d.length)).length, s = 0; s < n; s += 1) o[s] = d[s] + (d[s] - g[s]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
									return o
								}
								return d + (h - p) / .001 * (d - g)
							}
						}
						return this.getValueAtTime(((h - a) % i + a) / this.comp.globalData.frameRate, 0)
					}

					function e(t, e, r) {
						if (!this.k) return this.pv;
						t = t ? t.toLowerCase() : "";
						var i, a, s, n, o, h = this.comp.renderedFrame,
							l = this.keyframes,
							p = l[0].t;
						if (h >= p) return this.pv;
						if (r ? a = p + (i = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = (a = l[e].t) - p), "pingpong" === t) {
							if (Math.floor((p - h) / i) % 2 == 0) return this.getValueAtTime(((p - h) % i + p) / this.comp.globalData.frameRate, 0)
						} else {
							if ("offset" === t) {
								var f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
									c = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
									u = this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0),
									m = Math.floor((p - h) / i) + 1;
								if (this.pv.length) {
									for (n = (o = new Array(f.length)).length, s = 0; s < n; s += 1) o[s] = u[s] - (c[s] - f[s]) * m;
									return o
								}
								return u - (c - f) * m
							}
							if ("continue" === t) {
								var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
									g = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
								if (this.pv.length) {
									for (n = (o = new Array(d.length)).length, s = 0; s < n; s += 1) o[s] = d[s] + (d[s] - g[s]) * (p - h) / .001;
									return o
								}
								return d + (d - g) * (p - h) / .001
							}
						}
						return this.getValueAtTime((i - ((p - h) % i + p)) / this.comp.globalData.frameRate, 0)
					}

					function r(t, e) {
						if (!this.k) return this.pv;
						if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
						var r, i, a = this.comp.renderedFrame / this.comp.globalData.frameRate,
							s = a - t,
							n = e > 1 ? (a + t - s) / (e - 1) : 1,
							o = 0,
							h = 0;
						for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
							if (i = this.getValueAtTime(s + o * n), this.pv.length)
								for (h = 0; h < this.pv.length; h += 1) r[h] += i[h];
							else r += i;
							o += 1
						}
						if (this.pv.length)
							for (h = 0; h < this.pv.length; h += 1) r[h] /= e;
						else r /= e;
						return r
					}

					function i(t) {
						this._transformCachingAtTime || (this._transformCachingAtTime = {
							v: new Matrix
						});
						var e = this._transformCachingAtTime.v;
						if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
							var r = this.a.getValueAtTime(t);
							e.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult)
						}
						if (this.appliedTransformations < 2) {
							var i = this.s.getValueAtTime(t);
							e.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult)
						}
						if (this.sk && this.appliedTransformations < 3) {
							var a = this.sk.getValueAtTime(t),
								s = this.sa.getValueAtTime(t);
							e.skewFromAxis(-a * this.sk.mult, s * this.sa.mult)
						}
						if (this.r && this.appliedTransformations < 4) {
							var n = this.r.getValueAtTime(t);
							e.rotate(-n * this.r.mult)
						} else if (!this.r && this.appliedTransformations < 4) {
							var o = this.rz.getValueAtTime(t),
								h = this.ry.getValueAtTime(t),
								l = this.rx.getValueAtTime(t),
								p = this.or.getValueAtTime(t);
							e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
						}
						if (this.data.p && this.data.p.s) {
							var f = this.px.getValueAtTime(t),
								c = this.py.getValueAtTime(t);
							if (this.data.p.z) {
								var u = this.pz.getValueAtTime(t);
								e.translate(f * this.px.mult, c * this.py.mult, -u * this.pz.mult)
							} else e.translate(f * this.px.mult, c * this.py.mult, 0)
						} else {
							var m = this.p.getValueAtTime(t);
							e.translate(m[0] * this.p.mult, m[1] * this.p.mult, -m[2] * this.p.mult)
						}
						return e
					}

					function a() {
						return this.v.clone(new Matrix)
					}
					var s = TransformPropertyFactory.getTransformProperty;
					TransformPropertyFactory.getTransformProperty = function(t, e, r) {
						var n = s(t, e, r);
						return n.dynamicProperties.length ? n.getValueAtTime = i.bind(n) : n.getValueAtTime = a.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n
					};
					var n = PropertyFactory.getProp;
					PropertyFactory.getProp = function(i, a, s, o, h) {
						var l = n(i, a, s, o, h);
						l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = r, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = 1 === a.a ? a.k.length : 0, l.propertyIndex = a.ix;
						var p = 0;
						return 0 !== s && (p = createTypedArray("float32", 1 === a.a ? a.k[0].s.length : a.k.length)), l._cachingAtTime = {
							lastFrame: initialDefaultFrame,
							lastIndex: 0,
							value: p
						}, expressionHelpers.searchExpressions(i, a, l), l.k && h.addDynamicProperty(l), l
					};
					var o = ShapePropertyFactory.getConstructorFunction(),
						h = ShapePropertyFactory.getKeyframedConstructorFunction();

					function l() {}
					l.prototype = {
						vertices: function(t, e) {
							this.k && this.getValue();
							var r, i = this.v;
							void 0 !== e && (i = this.getValueAtTime(e, 0));
							var a = i._length,
								s = i[t],
								n = i.v,
								o = createSizedArray(a);
							for (r = 0; r < a; r += 1) o[r] = "i" === t || "o" === t ? [s[r][0] - n[r][0], s[r][1] - n[r][1]] : [s[r][0], s[r][1]];
							return o
						},
						points: function(t) {
							return this.vertices("v", t)
						},
						inTangents: function(t) {
							return this.vertices("i", t)
						},
						outTangents: function(t) {
							return this.vertices("o", t)
						},
						isClosed: function() {
							return this.v.c
						},
						pointOnPath: function(t, e) {
							var r = this.v;
							void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
							for (var i, a = this._segmentsLength, s = a.lengths, n = a.totalLength * t, o = 0, h = s.length, l = 0; o < h;) {
								if (l + s[o].addedLength > n) {
									var p = o,
										f = r.c && o === h - 1 ? 0 : o + 1,
										c = (n - l) / s[o].addedLength;
									i = bez.getPointInSegment(r.v[p], r.v[f], r.o[p], r.i[f], c, s[o]);
									break
								}
								l += s[o].addedLength, o += 1
							}
							return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), i
						},
						vectorOnPath: function(t, e, r) {
							1 == t ? t = this.v.c : 0 == t && (t = .999);
							var i = this.pointOnPath(t, e),
								a = this.pointOnPath(t + .001, e),
								s = a[0] - i[0],
								n = a[1] - i[1],
								o = Math.sqrt(Math.pow(s, 2) + Math.pow(n, 2));
							return 0 === o ? [0, 0] : "tangent" === r ? [s / o, n / o] : [-n / o, s / o]
						},
						tangentOnPath: function(t, e) {
							return this.vectorOnPath(t, e, "tangent")
						},
						normalOnPath: function(t, e) {
							return this.vectorOnPath(t, e, "normal")
						},
						setGroupProperty: expressionHelpers.setGroupProperty,
						getValueAtTime: expressionHelpers.getStaticValueAtTime
					}, extendPrototype([l], o), extendPrototype([l], h), h.prototype.getValueAtTime = function(t) {
						return this._cachingAtTime || (this._cachingAtTime = {
							shapeValue: shapePool.clone(this.pv),
							lastIndex: 0,
							lastTime: initialDefaultFrame
						}), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
					}, h.prototype.initiateExpression = ExpressionManager.initiateExpression;
					var p = ShapePropertyFactory.getShapeProp;
					ShapePropertyFactory.getShapeProp = function(t, e, r, i, a) {
						var s = p(t, e, r, i, a);
						return s.propertyIndex = e.ix, s.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, s) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, s), s.k && t.addDynamicProperty(s), s
					}
				}(), TextProperty.prototype.getExpressionValue = function(t, e) {
					var r = this.calculateExpression(e);
					if (t.t !== r) {
						var i = {};
						return this.copyData(i, t), i.t = r.toString(), i.__complete = !1, i
					}
					return t
				}, TextProperty.prototype.searchProperty = function() {
					var t = this.searchKeyframes(),
						e = this.searchExpressions();
					return this.kf = t || e, this.kf
				}, TextProperty.prototype.searchExpressions = function() {
					return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
				};
				var ShapePathInterface = function(t, e, r) {
						var i = e.sh;

						function a(t) {
							return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? a.path : null
						}
						var s = propertyGroupFactory(a, r);
						return i.setGroupProperty(PropertyInterface("Path", s)), Object.defineProperties(a, {
							path: {
								get: function() {
									return i.k && i.getValue(), i
								}
							},
							shape: {
								get: function() {
									return i.k && i.getValue(), i
								}
							},
							_name: {
								value: t.nm
							},
							ix: {
								value: t.ix
							},
							propertyIndex: {
								value: t.ix
							},
							mn: {
								value: t.mn
							},
							propertyGroup: {
								value: r
							}
						}), a
					},
					propertyGroupFactory = function(t, e) {
						return function(r) {
							return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1)
						}
					},
					PropertyInterface = function(t, e) {
						var r = {
							_name: t
						};
						return function(t) {
							return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1)
						}
					},
					ShapeExpressionInterface = function() {
						function t(t, n, c) {
							var u, m = [],
								d = t ? t.length : 0;
							for (u = 0; u < d; u += 1) "gr" === t[u].ty ? m.push(e(t[u], n[u], c)) : "fl" === t[u].ty ? m.push(r(t[u], n[u], c)) : "st" === t[u].ty ? m.push(a(t[u], n[u], c)) : "tm" === t[u].ty ? m.push(s(t[u], n[u], c)) : "tr" === t[u].ty || ("el" === t[u].ty ? m.push(o(t[u], n[u], c)) : "sr" === t[u].ty ? m.push(h(t[u], n[u], c)) : "sh" === t[u].ty ? m.push(ShapePathInterface(t[u], n[u], c)) : "rc" === t[u].ty ? m.push(l(t[u], n[u], c)) : "rd" === t[u].ty ? m.push(p(t[u], n[u], c)) : "rp" === t[u].ty ? m.push(f(t[u], n[u], c)) : "gf" === t[u].ty ? m.push(i(t[u], n[u], c)) : m.push((t[u], n[u], function() {
								return null
							})));
							return m
						}

						function e(e, r, i) {
							var a = function(t) {
								switch (t) {
									case "ADBE Vectors Group":
									case "Contents":
									case 2:
										return a.content;
									default:
										return a.transform
								}
							};
							a.propertyGroup = propertyGroupFactory(a, i);
							var s = function(e, r, i) {
									var a, s = function(t) {
										for (var e = 0, r = a.length; e < r;) {
											if (a[e]._name === t || a[e].mn === t || a[e].propertyIndex === t || a[e].ix === t || a[e].ind === t) return a[e];
											e += 1
										}
										return "number" == typeof t ? a[t - 1] : null
									};
									s.propertyGroup = propertyGroupFactory(s, i), a = t(e.it, r.it, s.propertyGroup), s.numProperties = a.length;
									var o = n(e.it[e.it.length - 1], r.it[r.it.length - 1], s.propertyGroup);
									return s.transform = o, s.propertyIndex = e.cix, s._name = e.nm, s
								}(e, r, a.propertyGroup),
								o = n(e.it[e.it.length - 1], r.it[r.it.length - 1], a.propertyGroup);
							return a.content = s, a.transform = o, Object.defineProperty(a, "_name", {
								get: function() {
									return e.nm
								}
							}), a.numProperties = e.np, a.propertyIndex = e.ix, a.nm = e.nm, a.mn = e.mn, a
						}

						function r(t, e, r) {
							function i(t) {
								return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : null
							}
							return Object.defineProperties(i, {
								color: {
									get: ExpressionPropertyInterface(e.c)
								},
								opacity: {
									get: ExpressionPropertyInterface(e.o)
								},
								_name: {
									value: t.nm
								},
								mn: {
									value: t.mn
								}
							}), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), i
						}

						function i(t, e, r) {
							function i(t) {
								return "Start Point" === t || "start point" === t ? i.startPoint : "End Point" === t || "end point" === t ? i.endPoint : "Opacity" === t || "opacity" === t ? i.opacity : null
							}
							return Object.defineProperties(i, {
								startPoint: {
									get: ExpressionPropertyInterface(e.s)
								},
								endPoint: {
									get: ExpressionPropertyInterface(e.e)
								},
								opacity: {
									get: ExpressionPropertyInterface(e.o)
								},
								type: {
									get: function() {
										return "a"
									}
								},
								_name: {
									value: t.nm
								},
								mn: {
									value: t.mn
								}
							}), e.s.setGroupProperty(PropertyInterface("Start Point", r)), e.e.setGroupProperty(PropertyInterface("End Point", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), i
						}

						function a(t, e, r) {
							var i, a = propertyGroupFactory(l, r),
								s = propertyGroupFactory(h, a);

							function n(r) {
								Object.defineProperty(h, t.d[r].nm, {
									get: ExpressionPropertyInterface(e.d.dataProps[r].p)
								})
							}
							var o = t.d ? t.d.length : 0,
								h = {};
							for (i = 0; i < o; i += 1) n(i), e.d.dataProps[i].p.setGroupProperty(s);

							function l(t) {
								return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null
							}
							return Object.defineProperties(l, {
								color: {
									get: ExpressionPropertyInterface(e.c)
								},
								opacity: {
									get: ExpressionPropertyInterface(e.o)
								},
								strokeWidth: {
									get: ExpressionPropertyInterface(e.w)
								},
								dash: {
									get: function() {
										return h
									}
								},
								_name: {
									value: t.nm
								},
								mn: {
									value: t.mn
								}
							}), e.c.setGroupProperty(PropertyInterface("Color", a)), e.o.setGroupProperty(PropertyInterface("Opacity", a)), e.w.setGroupProperty(PropertyInterface("Stroke Width", a)), l
						}

						function s(t, e, r) {
							function i(e) {
								return e === t.e.ix || "End" === e || "end" === e ? i.end : e === t.s.ix ? i.start : e === t.o.ix ? i.offset : null
							}
							var a = propertyGroupFactory(i, r);
							return i.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", a)), e.e.setGroupProperty(PropertyInterface("End", a)), e.o.setGroupProperty(PropertyInterface("Offset", a)), i.propertyIndex = t.ix, i.propertyGroup = r, Object.defineProperties(i, {
								start: {
									get: ExpressionPropertyInterface(e.s)
								},
								end: {
									get: ExpressionPropertyInterface(e.e)
								},
								offset: {
									get: ExpressionPropertyInterface(e.o)
								},
								_name: {
									value: t.nm
								}
							}), i.mn = t.mn, i
						}

						function n(t, e, r) {
							function i(e) {
								return t.a.ix === e || "Anchor Point" === e ? i.anchorPoint : t.o.ix === e || "Opacity" === e ? i.opacity : t.p.ix === e || "Position" === e ? i.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? i.rotation : t.s.ix === e || "Scale" === e ? i.scale : t.sk && t.sk.ix === e || "Skew" === e ? i.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? i.skewAxis : null
							}
							var a = propertyGroupFactory(i, r);
							return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", a)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", a)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", a)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", a)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", a)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", a)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", a))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", a)), Object.defineProperties(i, {
								opacity: {
									get: ExpressionPropertyInterface(e.transform.mProps.o)
								},
								position: {
									get: ExpressionPropertyInterface(e.transform.mProps.p)
								},
								anchorPoint: {
									get: ExpressionPropertyInterface(e.transform.mProps.a)
								},
								scale: {
									get: ExpressionPropertyInterface(e.transform.mProps.s)
								},
								rotation: {
									get: ExpressionPropertyInterface(e.transform.mProps.r)
								},
								skew: {
									get: ExpressionPropertyInterface(e.transform.mProps.sk)
								},
								skewAxis: {
									get: ExpressionPropertyInterface(e.transform.mProps.sa)
								},
								_name: {
									value: t.nm
								}
							}), i.ty = "tr", i.mn = t.mn, i.propertyGroup = r, i
						}

						function o(t, e, r) {
							function i(e) {
								return t.p.ix === e ? i.position : t.s.ix === e ? i.size : null
							}
							var a = propertyGroupFactory(i, r);
							i.propertyIndex = t.ix;
							var s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
							return s.s.setGroupProperty(PropertyInterface("Size", a)), s.p.setGroupProperty(PropertyInterface("Position", a)), Object.defineProperties(i, {
								size: {
									get: ExpressionPropertyInterface(s.s)
								},
								position: {
									get: ExpressionPropertyInterface(s.p)
								},
								_name: {
									value: t.nm
								}
							}), i.mn = t.mn, i
						}

						function h(t, e, r) {
							function i(e) {
								return t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.pt.ix === e ? i.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? i.outerRadius : t.os.ix === e ? i.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? i.innerRoundness : null : i.innerRadius
							}
							var a = propertyGroupFactory(i, r),
								s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
							return i.propertyIndex = t.ix, s.or.setGroupProperty(PropertyInterface("Outer Radius", a)), s.os.setGroupProperty(PropertyInterface("Outer Roundness", a)), s.pt.setGroupProperty(PropertyInterface("Points", a)), s.p.setGroupProperty(PropertyInterface("Position", a)), s.r.setGroupProperty(PropertyInterface("Rotation", a)), t.ir && (s.ir.setGroupProperty(PropertyInterface("Inner Radius", a)), s.is.setGroupProperty(PropertyInterface("Inner Roundness", a))), Object.defineProperties(i, {
								position: {
									get: ExpressionPropertyInterface(s.p)
								},
								rotation: {
									get: ExpressionPropertyInterface(s.r)
								},
								points: {
									get: ExpressionPropertyInterface(s.pt)
								},
								outerRadius: {
									get: ExpressionPropertyInterface(s.or)
								},
								outerRoundness: {
									get: ExpressionPropertyInterface(s.os)
								},
								innerRadius: {
									get: ExpressionPropertyInterface(s.ir)
								},
								innerRoundness: {
									get: ExpressionPropertyInterface(s.is)
								},
								_name: {
									value: t.nm
								}
							}), i.mn = t.mn, i
						}

						function l(t, e, r) {
							function i(e) {
								return t.p.ix === e ? i.position : t.r.ix === e ? i.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? i.size : null
							}
							var a = propertyGroupFactory(i, r),
								s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
							return i.propertyIndex = t.ix, s.p.setGroupProperty(PropertyInterface("Position", a)), s.s.setGroupProperty(PropertyInterface("Size", a)), s.r.setGroupProperty(PropertyInterface("Rotation", a)), Object.defineProperties(i, {
								position: {
									get: ExpressionPropertyInterface(s.p)
								},
								roundness: {
									get: ExpressionPropertyInterface(s.r)
								},
								size: {
									get: ExpressionPropertyInterface(s.s)
								},
								_name: {
									value: t.nm
								}
							}), i.mn = t.mn, i
						}

						function p(t, e, r) {
							function i(e) {
								return t.r.ix === e || "Round Corners 1" === e ? i.radius : null
							}
							var a = propertyGroupFactory(i, r),
								s = e;
							return i.propertyIndex = t.ix, s.rd.setGroupProperty(PropertyInterface("Radius", a)), Object.defineProperties(i, {
								radius: {
									get: ExpressionPropertyInterface(s.rd)
								},
								_name: {
									value: t.nm
								}
							}), i.mn = t.mn, i
						}

						function f(t, e, r) {
							function i(e) {
								return t.c.ix === e || "Copies" === e ? i.copies : t.o.ix === e || "Offset" === e ? i.offset : null
							}
							var a = propertyGroupFactory(i, r),
								s = e;
							return i.propertyIndex = t.ix, s.c.setGroupProperty(PropertyInterface("Copies", a)), s.o.setGroupProperty(PropertyInterface("Offset", a)), Object.defineProperties(i, {
								copies: {
									get: ExpressionPropertyInterface(s.c)
								},
								offset: {
									get: ExpressionPropertyInterface(s.o)
								},
								_name: {
									value: t.nm
								}
							}), i.mn = t.mn, i
						}
						return function(e, r, i) {
							var a;

							function s(t) {
								if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? i : a[t - 1];
								for (var e = 0, r = a.length; e < r;) {
									if (a[e]._name === t) return a[e];
									e += 1
								}
								return null
							}
							return s.propertyGroup = propertyGroupFactory(s, (function() {
								return i
							})), a = t(e, r, s.propertyGroup), s.numProperties = a.length, s._name = "Contents", s
						}
					}(),
					TextExpressionInterface = function(t) {
						var e, r;

						function i(t) {
							return "ADBE Text Document" === t ? i.sourceText : null
						}
						return Object.defineProperty(i, "sourceText", {
							get: function() {
								t.textProperty.getValue();
								var i = t.textProperty.currentData.t;
								return i !== e && (t.textProperty.currentData.t = e, (r = new String(i)).value = i || new String(i)), r
							}
						}), i
					},
					LayerExpressionInterface = function() {
						function t(t) {
							var e = new Matrix;
							return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
						}

						function e(t, e) {
							var r = this.getMatrix(e);
							return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.applyPoint(r, t)
						}

						function r(t, e) {
							var r = this.getMatrix(e);
							return this.applyPoint(r, t)
						}

						function i(t, e) {
							var r = this.getMatrix(e);
							return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.invertPoint(r, t)
						}

						function a(t, e) {
							var r = this.getMatrix(e);
							return this.invertPoint(r, t)
						}

						function s(t, e) {
							if (this._elem.hierarchy && this._elem.hierarchy.length) {
								var r, i = this._elem.hierarchy.length;
								for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
							}
							return t.applyToPointArray(e[0], e[1], e[2] || 0)
						}

						function n(t, e) {
							if (this._elem.hierarchy && this._elem.hierarchy.length) {
								var r, i = this._elem.hierarchy.length;
								for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
							}
							return t.inversePoint(e)
						}

						function o(t) {
							var e = new Matrix;
							if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
								var r, i = this._elem.hierarchy.length;
								for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
								return e.inversePoint(t)
							}
							return e.inversePoint(t)
						}

						function h() {
							return [1, 1, 1, 1]
						}
						return function(l) {
							var p;

							function f(t) {
								switch (t) {
									case "ADBE Root Vectors Group":
									case "Contents":
									case 2:
										return f.shapeInterface;
									case 1:
									case 6:
									case "Transform":
									case "transform":
									case "ADBE Transform Group":
										return p;
									case 4:
									case "ADBE Effect Parade":
									case "effects":
									case "Effects":
										return f.effect;
									case "ADBE Text Properties":
										return f.textInterface;
									default:
										return null
								}
							}
							f.getMatrix = t, f.invertPoint = n, f.applyPoint = s, f.toWorld = r, f.toWorldVec = e, f.fromWorld = a, f.fromWorldVec = i, f.toComp = r, f.fromComp = o, f.sampleImage = h, f.sourceRectAtTime = l.sourceRectAtTime.bind(l), f._elem = l;
							var c = getDescriptor(p = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
							return Object.defineProperties(f, {
								hasParent: {
									get: function() {
										return l.hierarchy.length
									}
								},
								parent: {
									get: function() {
										return l.hierarchy[0].layerInterface
									}
								},
								rotation: getDescriptor(p, "rotation"),
								scale: getDescriptor(p, "scale"),
								position: getDescriptor(p, "position"),
								opacity: getDescriptor(p, "opacity"),
								anchorPoint: c,
								anchor_point: c,
								transform: {
									get: function() {
										return p
									}
								},
								active: {
									get: function() {
										return l.isInRange
									}
								}
							}), f.startTime = l.data.st, f.index = l.data.ind, f.source = l.data.refId, f.height = 0 === l.data.ty ? l.data.h : 100, f.width = 0 === l.data.ty ? l.data.w : 100, f.inPoint = l.data.ip / l.comp.globalData.frameRate, f.outPoint = l.data.op / l.comp.globalData.frameRate, f._name = l.data.nm, f.registerMaskInterface = function(t) {
								f.mask = new MaskManagerInterface(t, l)
							}, f.registerEffectsInterface = function(t) {
								f.effect = t
							}, f
						}
					}(),
					FootageInterface = (dataInterfaceFactory = function(t) {
						function e(t) {
							return "Outline" === t ? e.outlineInterface() : null
						}
						return e._name = "Outline", e.outlineInterface = function(t) {
							var e = "",
								r = t.getFootageData();

							function i(t) {
								if (r[t]) return e = t, "object" == typeof(r = r[t]) ? i : r;
								var a = t.indexOf(e);
								if (-1 !== a) {
									var s = parseInt(t.substr(a + e.length), 10);
									return "object" == typeof(r = r[s]) ? i : r
								}
								return ""
							}
							return function() {
								return e = "", r = t.getFootageData(), i
							}
						}(t), e
					}, function(t) {
						function e(t) {
							return "Data" === t ? e.dataInterface : null
						}
						return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
					}),
					dataInterfaceFactory, CompExpressionInterface = function(t) {
						function e(e) {
							for (var r = 0, i = t.layers.length; r < i;) {
								if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
								r += 1
							}
							return null
						}
						return Object.defineProperty(e, "_name", {
							value: t.data.nm
						}), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
					},
					TransformExpressionInterface = function(t) {
						function e(t) {
							switch (t) {
								case "scale":
								case "Scale":
								case "ADBE Scale":
								case 6:
									return e.scale;
								case "rotation":
								case "Rotation":
								case "ADBE Rotation":
								case "ADBE Rotate Z":
								case 10:
									return e.rotation;
								case "ADBE Rotate X":
									return e.xRotation;
								case "ADBE Rotate Y":
									return e.yRotation;
								case "position":
								case "Position":
								case "ADBE Position":
								case 2:
									return e.position;
								case "ADBE Position_0":
									return e.xPosition;
								case "ADBE Position_1":
									return e.yPosition;
								case "ADBE Position_2":
									return e.zPosition;
								case "anchorPoint":
								case "AnchorPoint":
								case "Anchor Point":
								case "ADBE AnchorPoint":
								case 1:
									return e.anchorPoint;
								case "opacity":
								case "Opacity":
								case 11:
									return e.opacity;
								default:
									return null
							}
						}
						var r, i, a, s;
						return Object.defineProperty(e, "rotation", {
							get: ExpressionPropertyInterface(t.r || t.rz)
						}), Object.defineProperty(e, "zRotation", {
							get: ExpressionPropertyInterface(t.rz || t.r)
						}), Object.defineProperty(e, "xRotation", {
							get: ExpressionPropertyInterface(t.rx)
						}), Object.defineProperty(e, "yRotation", {
							get: ExpressionPropertyInterface(t.ry)
						}), Object.defineProperty(e, "scale", {
							get: ExpressionPropertyInterface(t.s)
						}), t.p ? s = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (a = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
							get: function() {
								return t.p ? s() : [r(), i(), a ? a() : 0]
							}
						}), Object.defineProperty(e, "xPosition", {
							get: ExpressionPropertyInterface(t.px)
						}), Object.defineProperty(e, "yPosition", {
							get: ExpressionPropertyInterface(t.py)
						}), Object.defineProperty(e, "zPosition", {
							get: ExpressionPropertyInterface(t.pz)
						}), Object.defineProperty(e, "anchorPoint", {
							get: ExpressionPropertyInterface(t.a)
						}), Object.defineProperty(e, "opacity", {
							get: ExpressionPropertyInterface(t.o)
						}), Object.defineProperty(e, "skew", {
							get: ExpressionPropertyInterface(t.sk)
						}), Object.defineProperty(e, "skewAxis", {
							get: ExpressionPropertyInterface(t.sa)
						}), Object.defineProperty(e, "orientation", {
							get: ExpressionPropertyInterface(t.or)
						}), e
					},
					ProjectInterface = function() {
						function t(t) {
							this.compositions.push(t)
						}
						return function() {
							function e(t) {
								for (var e = 0, r = this.compositions.length; e < r;) {
									if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
									e += 1
								}
								return null
							}
							return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
						}
					}(),
					EffectsExpressionInterface = function() {
						function t(r, i, a, s) {
							function n(t) {
								for (var e = r.ef, i = 0, a = e.length; i < a;) {
									if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? l[i] : l[i]();
									i += 1
								}
								throw new Error
							}
							var o, h = propertyGroupFactory(n, a),
								l = [],
								p = r.ef.length;
							for (o = 0; o < p; o += 1) 5 === r.ef[o].ty ? l.push(t(r.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, s)) : l.push(e(i.effectElements[o], r.ef[o].ty, s, h));
							return "ADBE Color Control" === r.mn && Object.defineProperty(n, "color", {
								get: function() {
									return l[0]()
								}
							}), Object.defineProperties(n, {
								numProperties: {
									get: function() {
										return r.np
									}
								},
								_name: {
									value: r.nm
								},
								propertyGroup: {
									value: h
								}
							}), n.enabled = 0 !== r.en, n.active = n.enabled, n
						}

						function e(t, e, r, i) {
							var a = ExpressionPropertyInterface(t.p);
							return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", i)),
								function() {
									return 10 === e ? r.comp.compInterface(t.p.v) : a()
								}
						}
						return {
							createEffectsInterface: function(e, r) {
								if (e.effectsManager) {
									var i, a = [],
										s = e.data.ef,
										n = e.effectsManager.effectElements.length;
									for (i = 0; i < n; i += 1) a.push(t(s[i], e.effectsManager.effectElements[i], r, e));
									var o = e.data.ef || [],
										h = function(t) {
											for (i = 0, n = o.length; i < n;) {
												if (t === o[i].nm || t === o[i].mn || t === o[i].ix) return a[i];
												i += 1
											}
											return null
										};
									return Object.defineProperty(h, "numProperties", {
										get: function() {
											return o.length
										}
									}), h
								}
								return null
							}
						}
					}(),
					MaskManagerInterface = function() {
						function t(t, e) {
							this._mask = t, this._data = e
						}
						return Object.defineProperty(t.prototype, "maskPath", {
								get: function() {
									return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
								}
							}), Object.defineProperty(t.prototype, "maskOpacity", {
								get: function() {
									return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
								}
							}),
							function(e) {
								var r, i = createSizedArray(e.viewData.length),
									a = e.viewData.length;
								for (r = 0; r < a; r += 1) i[r] = new t(e.viewData[r], e.masksProperties[r]);
								return function(t) {
									for (r = 0; r < a;) {
										if (e.masksProperties[r].nm === t) return i[r];
										r += 1
									}
									return null
								}
							}
					}(),
					ExpressionPropertyInterface = function() {
						var t = {
								pv: 0,
								v: 0,
								mult: 1
							},
							e = {
								pv: [0, 0, 0],
								v: [0, 0, 0],
								mult: 1
							};

						function r(t, e, r) {
							Object.defineProperty(t, "velocity", {
								get: function() {
									return e.getVelocityAtTime(e.comp.currentFrame)
								}
							}), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(i) {
								if (!t.numKeys) return 0;
								var a = "";
								a = "s" in e.keyframes[i - 1] ? e.keyframes[i - 1].s : "e" in e.keyframes[i - 2] ? e.keyframes[i - 2].e : e.keyframes[i - 2].s;
								var s = "unidimensional" === r ? new Number(a) : Object.assign({}, a);
								return s.time = e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate, s.value = "unidimensional" === r ? a[0] : a, s
							}, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
						}

						function i() {
							return t
						}
						return function(a) {
							return a ? "unidimensional" === a.propType ? function(e) {
								e && "pv" in e || (e = t);
								var i = 1 / e.mult,
									a = e.pv * i,
									s = new Number(a);
								return s.value = a, r(s, e, "unidimensional"),
									function() {
										return e.k && e.getValue(), a = e.v * i, s.value !== a && ((s = new Number(a)).value = a, r(s, e, "unidimensional")), s
									}
							}(a) : function(t) {
								t && "pv" in t || (t = e);
								var i = 1 / t.mult,
									a = t.data && t.data.l || t.pv.length,
									s = createTypedArray("float32", a),
									n = createTypedArray("float32", a);
								return s.value = n, r(s, t, "multidimensional"),
									function() {
										t.k && t.getValue();
										for (var e = 0; e < a; e += 1) n[e] = t.v[e] * i, s[e] = n[e];
										return s
									}
							}(a) : i
						}
					}(),
					propertyGetTextProp;

				function SliderEffect(t, e, r) {
					this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
				}

				function AngleEffect(t, e, r) {
					this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
				}

				function ColorEffect(t, e, r) {
					this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
				}

				function PointEffect(t, e, r) {
					this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
				}

				function LayerIndexEffect(t, e, r) {
					this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
				}

				function MaskIndexEffect(t, e, r) {
					this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
				}

				function CheckboxEffect(t, e, r) {
					this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
				}

				function NoValueEffect() {
					this.p = {}
				}

				function EffectsManager(t, e) {
					var r, i = t.ef || [];
					this.effectElements = [];
					var a, s = i.length;
					for (r = 0; r < s; r += 1) a = new GroupEffect(i[r], e), this.effectElements.push(a)
				}

				function GroupEffect(t, e) {
					this.init(t, e)
				}
				propertyGetTextProp = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function(t, e, r) {
					return 1 === e.t ? new TextExpressionSelectorPropFactory(t, e, r) : propertyGetTextProp(t, e, r)
				}, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
					var r;
					this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
					var i, a = this.data.ef.length,
						s = this.data.ef;
					for (r = 0; r < a; r += 1) {
						switch (i = null, s[r].ty) {
							case 0:
								i = new SliderEffect(s[r], e, this);
								break;
							case 1:
								i = new AngleEffect(s[r], e, this);
								break;
							case 2:
								i = new ColorEffect(s[r], e, this);
								break;
							case 3:
								i = new PointEffect(s[r], e, this);
								break;
							case 4:
							case 7:
								i = new CheckboxEffect(s[r], e, this);
								break;
							case 10:
								i = new LayerIndexEffect(s[r], e, this);
								break;
							case 11:
								i = new MaskIndexEffect(s[r], e, this);
								break;
							case 5:
								i = new EffectsManager(s[r], e, this);
								break;
							default:
								i = new NoValueEffect(s[r], e, this)
						}
						i && this.effectElements.push(i)
					}
				};
				var lottie = {};

				function setLocationHref(t) {
					locationHref = t
				}

				function searchAnimations() {
					!0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
				}

				function setSubframeRendering(t) {
					subframeEnabled = t
				}

				function setIDPrefix(t) {
					idPrefix = t
				}

				function loadAnimation(t) {
					return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
				}

				function setQuality(t) {
					if ("string" == typeof t) switch (t) {
						case "high":
							defaultCurveSegments = 200;
							break;
						default:
						case "medium":
							defaultCurveSegments = 50;
							break;
						case "low":
							defaultCurveSegments = 10
					} else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
					roundValues(!(defaultCurveSegments >= 50))
				}

				function inBrowser() {
					return "undefined" != typeof navigator
				}

				function installPlugin(t, e) {
					"expressions" === t && (expressionsPlugin = e)
				}

				function getFactory(t) {
					switch (t) {
						case "propertyFactory":
							return PropertyFactory;
						case "shapePropertyFactory":
							return ShapePropertyFactory;
						case "matrix":
							return Matrix;
						default:
							return null
					}
				}

				function checkReady() {
					"complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
				}

				function getQueryVariable(t) {
					for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
						var i = e[r].split("=");
						if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
					}
					return null
				}
				lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.setIDPrefix = setIDPrefix, lottie.__getFactory = getFactory, lottie.version = "5.7.9";
				var standalone = "__[STANDALONE]__",
					animationData = "__[ANIMATIONDATA]__",
					renderer = "",
					queryString;
				if (standalone) {
					var scripts = document.getElementsByTagName("script"),
						index = scripts.length - 1,
						myScript = scripts[index] || {
							src: ""
						};
					queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer")
				}
				var readyStateCheckInterval = setInterval(checkReady, 100);
				return lottie
			}, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return factory(root)
			}.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
		}
	}
]);