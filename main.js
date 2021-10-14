! function (e) 
{
    function t(t) 
    {
        for (var a, i, l = t[0], s = t[1], u = t[2], d = 0, p = []; d < l.length; d++) i = l[d], Object.prototype.hasOwnProperty.call(o, i) && o[i] && p.push(o[i][0]), o[i] = 0;
        for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
        for (c && c(t); p.length;) p.shift()();
        return r.push.apply(r, u || []), n()
    }

    function n() 
    {
        for (var e, t = 0; t < r.length; t++) 
        {
            for (var n = r[t], a = !0, l = 1; l < n.length; l++) 
            {
                var s = n[l];
                0 !== o[s] && (a = !1)
            }
            a && (r.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var a = {},
        o = { 0: 0},
        r = [];

    function i(t) 
    {
        if (a[t]) return a[t].exports;
        var n = a[t] = 
        {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = e, i.c = a, i.d = function (e, t, n) 
    {
        i.o(e, t) || Object.defineProperty(e, t, 
            {
            enumerable: !0,
            get: n
        })
    }, 
    i.r = function (e) 
    {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), 
        Object.defineProperty(e, "__esModule", 
        {
            value: !0
        })
    }, 
    i.t = function (e, t) 
    {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", 
        {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) i.d(n, a, function (t) {
                return e[t]
            }.bind(null, a));
        return n
    }, 
    i.n = function (e) 
    {
        var t = e && e.__esModule ? function ()
        {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, 
    i.o = function (e, t) 
    {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, 
    i.p = "/";
    var l = window.webpackJsonp = window.webpackJsonp || [],s = l.push.bind(l);
    l.push = t, l = l.slice();

    for (var u = 0; u < l.length; u++) 
        t(l[u]);

    var c = s;
    r.push([7, 1]), n()
}
({
    13: function (e, t, n) 
    {
        "use strict";
        Object.defineProperty(t, "__esModule", 
        {
            value: !0
        });
        var a = function () 
        {
                function e(e, t) 
                {
                    for (var n = 0; n < t.length; n++) 
                    {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function (t, n, a) 
                {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            } (),
            o = n(0),
            r = s(o),
            i = s(n(14)),
            l = s(n(35));

        function s(e) 
        {
            return e && e.__esModule ? e : { default: e }
        }
        var u = function (e) 
        {
            function t(e) 
            {
                ! function (e, t) 
                {
                    if (!(e instanceof t)) 
                        throw new TypeError("Cannot call a class as a function")
                }
                (this, t);
                var n = function (e, t) 
                {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }
                (this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = 
                {
                        url: "http://213.136.81.165/relay-server/index.html",
                        resourceName: "ls-test",
                        previousHost: "",
                        poster: "https://cdn.discordapp.com/attachments/719998114953691237/895348274146451496/supra_cover.jpg",
                        pausePoster: "https://cdn.discordapp.com/attachments/719998114953691237/895348274146451496/supra_cover.jpg",
                        showPoster: !0,
                        is3DAudioEnabled: !1,
                        pip: !1,
                        playing: !0,
                        controls: !1,
                        volume: 1,
                        muted: !1,
                        played: 0,
                        loaded: 0,
                        duration: 0,
                        playbackRate: 1,
                        loop: !1,
                        screenName: "",
                        tickInterval: 1e4,
                        panningOpts: {
                            panningModel: "HRTF",
                            distanceModel: "exponential",
                            refDistance: 15,
                            maxDistance: 2e3,
                            rolloffFactor: .6,
                            coneInnerAngle: 360,
                            coneOuterAngle: 360,
                            coneOuterGain: .5
                        }
                    }, 
                    n.load = function (e) 
                    {
                        n.setState({ url: e, played: 0, loaded: 0, pip: !1})
                    }, 
                    n.adsSuck = function () 
                    {
                        var e = document.getElementsByTagName("iframe")[0];
                        if (null != e) 
                        {
                            var t = e.contentDocument.getElementsByTagName("head")[0],
                                n = e.contentDocument.createElement("style");

                            t.appendChild(n), 
                            n.setAttribute("type", "text/css"), 
                            n.appendChild(e.contentDocument.createTextNode( "\n        div.ytp-chrome-top.ytp-show-watch-later-title.ytp-share-button-visible.ytp-show-share-title.ytp-show-cards-title {\n            display: none;\n        }\n        a .ytp-watermark.yt-uix-sessionlink {\n            display: none;\n        }\n        "))
                        }
                    }, 
                    n.loadAndPlay = function (e) 
                    {
                        n.load(e), n.setState({playing: !0, muted: !1})
                    }, 
                    n.handleStop = function () 
                    {
                        n.setState({url: null, playing: !1 })
                    }, 
                    n.handleToggleLoop = function () 
                    {
                        n.setState({loop: !n.state.loop })
                    }, 
                    n.handlePlay = function () 
                    {
                        n.setState({
                            playing: !0
                        })
                    },
                    n.getUrl = function () 
                    {
                        return "https://" + n.state.resourceName
                    }, 
                    n.handlePause = function () 
                    {
                        n.setState({
                            playing: !1
                        })
                    }, 
                    n.handleEnded = function () 
                    {
                        n.setState({
                            playing: n.state.loop
                        })
                    },
                    n.handleDuration = function (e) 
                    {
                        n.setState({
                            duration: e
                        })
                    }, 
                    n.handleVolume = function (e) 
                    {
                        var t = parseFloat(e);
                        if (n.state.url && new URL(n.state.url).hostname.includes("twitch")) 
                        {
                            var a = n.player.getInternalPlayer();
                            t > 0 ? a.setMuted(!1) : a.setMuted(!0)
                        }
                        n.setState({ volume: t })
                    }, 
                    n.handleSeek = function (e) 
                    {
                        n.player.seekTo(e, "seconds")
                    }, 
                    n.handleInit = function (e, t, a) 
                    {
                        n.setState({
                            screenName: e,
                            poster: t,
                            resourceName: a,
                        })
                    }, 
                    n.enable3DAudio = function (e) 
                    {
                        n.setState({
                            is3DAudioEnabled: e
                        })
                    }, 
                    n.sendDuiResponse = function (e, t) 
                    {
                        fetch(e, {
                            headers: {
                                "content-type": "application/json; charset=UTF-8"
                            },
                            method: "POST",
                            body: JSON.stringify(t)
                        }).catch((function (e) {
                            return console.log(e)
                        }))
                    },
                    n.getPlayerState = function () 
                    {
                        return {
                            paused: !n.state.playing,
                            currentTime: n.player.getCurrentTime(),
                            duration: n.state.duration,
                            currentSource: n.state.url,
                            ended: n.player.getCurrentTime() === n.player.getDuration(),
                            screenName: n.state.screenName,
                            repeat: n.state.loop
                        }
                    }, 
                    n.handleStart = function () 
                    {
                        var e = new URL(n.state.url),
                            t = n.getSource();
                        n.state.previousHost !== e.host && n.state.is3DAudioEnabled && (n.adsSuck(),
                            n.audio3D.init(n.state.panningOpts, t), n.setState({
                                previousHost: e.host
                            }))
                    }, 
                    n.getSource = function () 
                    {
                        var e = document.getElementsByTagName("iframe")[0];
                        return e ? e.contentDocument.getElementsByTagName("video")[0] : document
                            .getElementsByTagName("video")[0]
                    }, 
                    n.handleStateTick = function () 
                    {
                        var e = n.getUrl() + "/livestreaming.StateTick",
                            t = n.getPlayerState();
                        n.sendDuiResponse(e, t)
                    }, 
                    n.handleGetState = function () 
                    {
                        var e = n.getUrl() + "/livestreaming.GetStateResponse",
                            t = n.getPlayerState();
                        n.sendDuiResponse(e, t)
                    }, 
                    n.handleMute = function (e) 
                    {
                        n.state.playing && null !== n.player && void 0 !== n.player && n.setState({
                            muted: e
                        })
                    }, 
                    n.handleTick = function (e, t) 
                    {
                        n.audio3D.onTick(e, t)
                    }, 
                    n.handleReady = function () 
                    {
                        if (n.state.url && new URL(n.state.url).hostname.includes("twitch")) 
                        {
                            var e = document.getElementsByTagName("iframe")[0];
                            if (null != e) {
                                var t = e.contentDocument.querySelectorAll(
                                    '[data-a-target="player-overlay-mature-accept"]');
                                0 !== t.length && t[0].click();
                                var a = n.player.getInternalPlayer();
                                a.getMuted() && a.setMuted(!1)
                            }
                        }
                    }, 
                    n.handleMessage = function (e) 
                    {

                        switch (e.data.type) 
                        {
                            case "init":
                                n.handleInit(e.data.screenName, e.data.posterUrl, e.data.resourceName);
                                document.getElementById("main").style.backgroundImage="url("+e.data.posterUrl+")";
                                break;
                            case "play":
                                n.loadAndPlay(e.data.src.url);
                                break;
                            case "mute":
                                n.handleMute(e.data.muted);
                                break;
                            case "toggle3DAudio":
                                n.enable3DAudio(e.data.enabled);
                                break;
                            case "tick":
                                n.handleTick(e.data.listenerObj, e.data.pannerObj);
                                break;
                            case "update":
                                e.data.paused ? n.load(e.data.src) : n.loadAndPlay(e.data.src), n.handleSeek(e.data.currentTime),
                                n.setState(
                                    {
                                        loop: e.data.repeat
                                    });
                                break;
                            case "seek":
                                n.handleSeek(e.data.time);
                                break;
                            case "getState":
                                n.handleGetState();
                                break;
                            case "pause":
                                n.handlePause();
                                break;
                            case "stop":
                                n.handleStop();
                                break;
                            case "resume":
                                n.handlePlay();
                                break;
                            case "volume":
                                n.handleVolume(e.data.volume);
                                break;
                            case "toggleRepeat":
                                n.handleToggleLoop()
                                break;
                        }
                    }, 
                    n.ref = function (e) 
                    {
                        n.player = e
                    }, 
                    n.handleMessage = n.handleMessage.bind(n),
                    n.handleStateTick = n.handleStateTick.bind(n),
                    n.audio3D = new l.default, 
                    n
            }
            return function (e, t) 
            {
                if ("function" != typeof t && null !== t) 
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, 
                    {
                        constructor:
                        {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            (t, e), a(t, [{
                key: "componentDidMount",
                value: function () 
                {
                    window.addEventListener("message", this.handleMessage, !1)
                }
            }, 
            {
                key: "componentWillUnmount",
                value: function () 
                {
                    window.removeEventListener("message", this.handleMessage, !1)
                }
            }, 
            {
                key: "render",
                value: function () 
                {
                    var e = this.state,
                        t = e.url,
                        n = e.showPoster,
                        a = e.poster,
                        o = e.playing,
                        l = e.controls,
                        s = e.volume,
                        u = e.muted,
                        c = e.loop,
                        d = e.playbackRate,
                        p = e.pip;


                    var res= r.default.createElement("div", 
                    {
                        style: 
                        {
                            width: "100%",
                            height: "100%",
                        },
                    }, !o && n && r.default.createElement("div", 
                    {
                        id: "posterImg",
                    }, r.default.createElement("img", 
                    {
                        src: a,
                        alt: ""
                    })), r.default.createElement("div", 
                    {
                        className: "player-wrapper"
                    },
                     r.default.createElement(i.default, 
                        {
                        ref: this.ref,
                        className: "react-player",
                        url: t,
                        pip: p,
                        playing: o,
                        controls: l,
                        loop: c,
                        playbackRate: d,
                        volume: s,
                        muted: u,
                        onPlay: this.handlePlay,
                        onReady: this.handleReady,
                        onPause: this.handlePause,
                        onEnded: this.handleEnded,
                        onStart: this.handleStart,
                        onError: function (e) 
                        {
                            if(!JSON.stringify(e).includes("isTrusted"))
                                return console.log("onError", JSON.stringify(e));
                        },
                        onDuration: this.handleDuration,
                        width: "100%",
                        height: "100%",
                        config: {
                            youtube: {
                                playerVars: {
                                    autoplay: !0
                                }
                            },
                            twitch: {
                                options: {
                                    autoplay: !0,
                                    muted: !1,
                                    parent: ["tokyodrift.sytes.net"]
                                }
                            }
                        }
                    })))
                    
                    return res;
                }
            }]), t
        }(o.Component);
        t.default = u
    },
    35: function (e, t, n) 
    {
        "use strict";
        Object.defineProperty(t, "__esModule", 
        {
            value: !0
        });
        var a = function () 
        {
            function e(e, t)
            {
                for (var n = 0; n < t.length; n++) 
                {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, 
                    a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function (t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }();

        function o(e, t, n) 
        {
            return e >= t && e <= n
        }
        var r = function () 
        {
            function e() 
            {
                ! function (e, t)
                 {
                    if (!(e instanceof t)) 
                        throw new TypeError("Cannot call a class as a function")
                }
                (this, e), 
                this.initialized = !1, this.context = new(window.AudioContext || window.webkitAudioContext), 
                this.panner = this.context.createPanner(), 
                this.listener = this.context.listener, this.compressor = this.context.createDynamicsCompressor()
            }
            return a(e, [{
                key: "init",
                value: function (e, t) 
                {
                    this.initialized = !0, 
                    this.panner.panningModel = e
                        .panningModel, 
                        this.panner.distanceModel = e.distanceModel,
                        this.panner.refDistance = e.refDistance,
                         this.panner
                        .maxDistance = e.maxDistance, 
                        this.panner.rolloffFactor = e
                        .rolloffFactor,
                         this.panner.coneInnerAngle = e
                        .coneInnerAngle,
                         this.panner.coneOuterAngle = e
                        .coneOuterAngle,
                         this.panner.coneOuterGain = e
                        .coneOuterGain, 
                        this.source = this.context
                        .createMediaElementSource(t), 
                        this.source.connect(this
                            .panner), 
                            this.panner.connect(this.compressor), 
                            this
                        .compressor.connect(this.context.destination)
                }
            }, 
            {
                key: "onTick",
                value: function (e, t) 
                {
                    if (this.initialized) 
                    {
                        var n = this.context.currentTime,
                            a = Math.floor(4 * t.positionX),
                            r = Math.floor(4 * t.positionY),
                            i = Math.floor(4 * t.positionZ);

                        o(a, -14013e-49, 14013e-49) ? 
                        this.panner.positionX.linearRampToValueAtTime(a, n + .05) : 
                        this.panner.positionX.exponentialRampToValueAtTime(a, n + .05), 

                        o(r, -14013e-49, 14013e-49) ?
                        this.panner.positionY.linearRampToValueAtTime(r, n + .05) : 
                        this.panner.positionY.exponentialRampToValueAtTime(r, n + .05), 

                        o( i, -14013e-49, 14013e-49) ? 
                        this.panner.positionZ.linearRampToValueAtTime(i, n + .05) : 
                        this.panner.positionZ.exponentialRampToValueAtTime(i, n + .05),

                            this.panner.orientationX.setValueAtTime(Math.floor(t.orientationX), n), 
                            this.panner.orientationY.setValueAtTime(Math.floor(t.orientationY), n), 
                            this.panner.orientationZ.setValueAtTime(Math.floor(t.orientationZ), n), 
                            this.listener.forwardX.setValueAtTime(Math.floor(e.forwardX), n), 
                            this.listener.forwardY.setValueAtTime(Math.floor(e.forwardY), n), 
                            this.listener.forwardZ.setValueAtTime(Math.floor(e.forwardZ), n), 
                            this.listener.upX.setValueAtTime(Math.floor(e.upX), n), 
                            this.listener.upY.setValueAtTime(Math.floor(e.upY), n), 
                            this.listener.upZ.setValueAtTime(Math.floor(e.upZ), n)
                    }
                }
            }]), e
        }();
        t.default = r
    },
    36: function (e, t, n) {},
    7: function (e, t, n)
    {
        "use strict";
        var a = i(n(0)),
            o = i(n(9)),
            r = i(n(13));

        function i(e) 
        {
            return e && e.__esModule ? e : {  default: e }
        }
        n(36), 
        o.default.render(a.default.createElement(r.default), document.getElementById("main"))
    }
});