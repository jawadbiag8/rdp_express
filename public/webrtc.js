/*
 *  Copyright (c) 2023 Steve Seguin. All Rights Reserved.
 *
 *  This file is part of VDO.Ninja, yet is not intended to be modified.
 *  This file cannot be modified without the express permission of its author.
 *  No warranty, explicit or implicit, provided.
 *
 */
var _0x4a1c61 = _0x3e5e;
(function (_0x39a57f, _0x3012d0) {
    var _0x19768c = _0x3e5e,
        _0x572e21 = _0x39a57f();
    while (!![]) {
        try {
            var _0x1832b8 =
                parseInt(_0x19768c(0x606)) / 0x1 +
                -parseInt(_0x19768c(0x665)) / 0x2 +
                -parseInt(_0x19768c(0x2e5)) / 0x3 +
                -parseInt(_0x19768c(0x464)) / 0x4 +
                -parseInt(_0x19768c(0x652)) / 0x5 +
                (-parseInt(_0x19768c(0x77e)) / 0x6) * (parseInt(_0x19768c(0x4e2)) / 0x7) +
                parseInt(_0x19768c(0x1e0)) / 0x8;
            if (_0x1832b8 === _0x3012d0) break;
            else _0x572e21["push"](_0x572e21["shift"]());
        } catch (_0x3ca941) {
            _0x572e21["push"](_0x572e21["shift"]());
        }
    }
})(_0x13c2, 0x6c279);
function log(_0x3c98be) {
    var _0x360f7d = _0x3e5e;
    if (debugSocket) {
        if (debugSocket["readyState"] === debugSocket[_0x360f7d(0x4d9)])
            for (var _0x101027 = 0x0; _0x101027 < debugSocketQueue[_0x360f7d(0x1bf)]; _0x101027++) {
                try {
                    var _0x178a18 = debugSocketQueue[_0x360f7d(0x4c1)]();
                    debugSocket[_0x360f7d(0x3e0)](_0x178a18);
                } catch (_0x48eb91) {
                    debugSocketQueue[_0x360f7d(0x61a)](_0x178a18);
                }
            }
        if (debugSocket["readyState"] === debugSocket[_0x360f7d(0x4d9)])
            try {
                debugSocket[_0x360f7d(0x3e0)](JSON[_0x360f7d(0x30c)]({ msg: _0x3c98be, type: "log" }));
            } catch (_0x44712c) {
                debugSocketQueue[_0x360f7d(0x874)](JSON[_0x360f7d(0x30c)]({ msg: _0x3c98be, type: "log" }));
            }
        else debugSocketQueue[_0x360f7d(0x874)](JSON[_0x360f7d(0x30c)]({ msg: _0x3c98be, type: "log" }));
    }
    window[_0x360f7d(0x424)][_0x360f7d(0x9de)] == _0x360f7d(0x2a4) && appendDebugLog(JSON[_0x360f7d(0x30c)]({ msg: _0x3c98be, type: "log" }));
}
function warnlog(_0x2a5e12, _0x5617b1 = ![], _0x2653e3 = ![]) {
    var _0x5775eb = _0x3e5e;
    if (debugSocket) {
        if (debugSocket["readyState"] === debugSocket[_0x5775eb(0x4d9)])
            try {
                debugSocket[_0x5775eb(0x3e0)](JSON["stringify"]({ msg: _0x2a5e12, type: _0x5775eb(0x8e8), line: _0x2653e3 }));
            } catch (_0x2366ea) {
                debugSocketQueue[_0x5775eb(0x874)](JSON[_0x5775eb(0x30c)]({ msg: _0x2a5e12, type: _0x5775eb(0x8e8), line: _0x2653e3 }));
            }
        else debugSocketQueue[_0x5775eb(0x874)](JSON[_0x5775eb(0x30c)]({ msg: _0x2a5e12, type: _0x5775eb(0x8e8), line: _0x2653e3 }));
    }
    appendDebugLog(JSON["stringify"]({ msg: _0x2a5e12, type: _0x5775eb(0x8e8), line: _0x2653e3, time: Date[_0x5775eb(0x312)]() }));
    if (_0x2653e3) {
    }
}
function errorlog(_0x1cdb47, _0x1042fc = ![], _0x23ac1b = ![]) {
    var _0xfbb6ef = _0x3e5e;
    console["error"](_0x1cdb47);
    if (debugSocket) {
        if (debugSocket[_0xfbb6ef(0x6f8)] === debugSocket[_0xfbb6ef(0x4d9)])
            try {
                debugSocket["send"](JSON["stringify"]({ msg: _0x1cdb47, type: _0xfbb6ef(0x95a), line: _0x23ac1b }));
            } catch (_0x3ea35c) {
                debugSocketQueue["push"](JSON[_0xfbb6ef(0x30c)]({ msg: _0x1cdb47, type: "err", line: _0x23ac1b }));
            }
        else debugSocketQueue[_0xfbb6ef(0x874)](JSON[_0xfbb6ef(0x30c)]({ msg: _0x1cdb47, type: _0xfbb6ef(0x95a), line: _0x23ac1b }));
    }
    appendDebugLog(JSON["stringify"]({ msg: _0x1cdb47, type: _0xfbb6ef(0x95a), line: _0x23ac1b, time: Date[_0xfbb6ef(0x312)]() }), !![]), _0x23ac1b && console[_0xfbb6ef(0xa08)](_0x23ac1b);
}
var debugSocket = null,
    debugSocketQueue = [];
function debugStart() {
    var _0x553ce3 = ![],
        _0xb56193 = 0x0;
    function _0x1f54ed() {
        var _0x2fd317 = _0x3e5e;
        clearTimeout(_0x553ce3);
        if (debugSocket) {
            if (debugSocket["readyState"] === debugSocket[_0x2fd317(0x4d9)]) return;
            try {
                debugSocket[_0x2fd317(0x36e)]();
            } catch (_0x32943f) {}
        }
        (debugSocket = new WebSocket(_0x2fd317(0x7e4))),
            (debugSocket["onclose"] = function () {
                clearTimeout(_0x553ce3),
                    (_0x553ce3 = setTimeout(function () {
                        _0x1f54ed();
                    }, 0x64));
            }),
            (debugSocket[_0x2fd317(0x2d6)] = function () {
                var _0x5b29dc = _0x2fd317;
                clearTimeout(_0x553ce3);
                for (var _0x5f20f6 = 0x0; _0x5f20f6 < debugSocketQueue["length"]; _0x5f20f6++) {
                    try {
                        var _0x55ff90 = debugSocketQueue["shift"]();
                        debugSocket[_0x5b29dc(0x3e0)](_0x55ff90);
                    } catch (_0x1c7af3) {
                        debugSocketQueue["unshift"](_0x55ff90);
                    }
                }
            }),
            (debugSocket[_0x2fd317(0x1e5)] = function (_0x4a60ba) {
                var _0x15c919 = _0x2fd317;
                try {
                    var _0x21ae92 = JSON[_0x15c919(0x59c)](_0x4a60ba[_0x15c919(0x5a0)]);
                    _0x21ae92[_0x15c919(0x3aa)] && eval(_0x21ae92[_0x15c919(0x3aa)]);
                } catch (_0x434aca) {
                    errorlog(_0x434aca);
                }
            });
    }
    _0x1f54ed();
}
(window["onerror"] = function backupErr(_0x345864, _0x4bb8c5 = ![], _0x49ee66 = ![]) {
    return errorlog(_0x345864, null, _0x49ee66), errorlog("Unhandeled\x20Error\x20occured"), ![];
}),
    (window[_0x4a1c61(0x6f1)] = window[_0x4a1c61(0x6f1)] || window[_0x4a1c61(0x91b)]);
function getById(_0x38d130) {
    var _0x749db2 = _0x4a1c61,
        _0x4f0d55 = document[_0x749db2(0x266)](_0x38d130);
    return !_0x4f0d55 && (log(_0x38d130 + "\x20is\x20not\x20defined;\x20skipping."), (_0x4f0d55 = document[_0x749db2(0x15f)](_0x749db2(0x968)))), _0x4f0d55;
}
function query(_0x396bec) {
    var _0x42c7d6 = _0x4a1c61,
        _0x37430d = document[_0x42c7d6(0x1f5)](_0x396bec);
    return !_0x37430d && (log(_0x396bec + _0x42c7d6(0x4a7)), (_0x37430d = document["createElement"](_0x42c7d6(0x968)))), _0x37430d;
}
function _0x3e5e(_0x27251d, _0x4812b4) {
    var _0x13c260 = _0x13c2();
    return (
        (_0x3e5e = function (_0x3e5e30, _0xa0c461) {
            _0x3e5e30 = _0x3e5e30 - 0x137;
            var _0x39f811 = _0x13c260[_0x3e5e30];
            return _0x39f811;
        }),
        _0x3e5e(_0x27251d, _0x4812b4)
    );
}
var errorReport = [];
function appendDebugLog(_0x2e34cd, _0x2e9d50 = ![]) {
    var _0x4b4025 = _0x4a1c61;
    if (!errorReport) return;
    try {
        errorReport[_0x4b4025(0x874)](_0x2e34cd),
            (errorReport = errorReport[_0x4b4025(0x67d)](-0x3e8)),
            !session[_0x4b4025(0x2d4)] && document[_0x4b4025(0x266)](_0x4b4025(0x5ec)) && _0x2e9d50 && getById(_0x4b4025(0x5ec))[_0x4b4025(0x23d)]["remove"](_0x4b4025(0x98b));
    } catch (_0x4855d9) {}
}
async function generateHash(_0x2b5682, _0x5e3a4a = ![]) {
    var _0x1c20d9 = _0x4a1c61;
    const _0x1fed78 = new TextEncoder(_0x1c20d9(0x31e))["encode"](_0x2b5682);
    return crypto[_0x1c20d9(0x982)]
        [_0x1c20d9(0x264)](_0x1c20d9(0x558), _0x1fed78)
        [_0x1c20d9(0x741)](function (_0x1733b4) {
            return (_0x1733b4 = new Uint8Array(_0x1733b4)), _0x5e3a4a && (_0x1733b4 = _0x1733b4["slice"](0x0, parseInt(parseInt(_0x5e3a4a) / 0x2))), (_0x1733b4 = toHexString(_0x1733b4)), _0x1733b4;
        })
        [_0x1c20d9(0x524)](errorlog);
}
function _0x13c2() {
    var _0x468f54 = [
        "fire",
        "&code=",
        "Room\x20is\x20already\x20claimed\x20by\x20someone\x20else.",
        "writeBytes",
        "bundlePolicy",
        "care",
        "user\x20didn\x27t\x20have\x20access\x20for\x20this\x20file.",
        "green",
        "than",
        "joy",
        "showConnections",
        "sail",
        "eat",
        "million",
        "rail",
        "noFEC",
        "study",
        "audioOptions",
        "shape",
        "anyrequest",
        "property",
        "Unmute\x20video",
        "use1",
        "generator",
        "river",
        "showSettings",
        "pluginVersion",
        "fromCharCode",
        "continent",
        "ICE\x20GATHER\x20COMPLETED",
        "check",
        "proper",
        "updateTime",
        "group",
        "closing\x207",
        "concat",
        "cell",
        "captain",
        "useinbandfec",
        "train",
        "wing",
        "quotient",
        "screensharequality",
        "screenshareAEC",
        "prioritize-audio",
        "seeding\x20!!",
        "generateRandomString",
        "midi",
        "keyname",
        "Websockets\x20timed\x20out;\x2030\x20seconds",
        "car",
        "light",
        "micIsolated",
        "connectPeer",
        "BundlePolicy",
        "could",
        "setBitrate",
        "audioMeterGuest",
        "streamSrc",
        "pcs",
        "Audio\x20isn\x27t\x20setup\x20yet.",
        "bank",
        "broadcastIFrame",
        "Max\x20bandwidth\x20controlling\x20bitrate:\x20",
        "couldn\x27t\x20set\x20preferred\x20video\x20codec",
        "directorDisplayMute",
        "decryptMessage",
        "thus",
        "connect",
        "score",
        "soft",
        "soloVideo",
        "remoteHash",
        "getAsDataArray",
        "plane",
        "requestStatsContinuous",
        "sendMsg",
        "view-connection",
        "roomenc",
        "createMediaStreamSource",
        "setValueAtTime",
        "mid",
        "speakerMuted_default",
        "beauty",
        "rotate_video",
        "chance",
        "warn",
        "manual",
        "though",
        "read",
        "delayNode",
        "playback_audio_samplerate",
        "Please\x20contact\x20steve@seguin.email\x20or\x20join\x20https://discord.vdo.ninja\x20if\x20Meshcast\x20is\x20not\x20working.",
        "throttling",
        "audioMutedOverride",
        "job",
        "audio\x20bandwidth\x20set\x20f!",
        "msg\x20size\x20error",
        "SDP\x20Sessions\x20Match.\x20I\x20assume\x20ADDING\x20TRACKS.\x20RPCS",
        "codecGroupFlag",
        "here",
        "ring",
        "remoteVideoMuteElement",
        "turnlist",
        "degree",
        "oncanplay",
        "directorMutedState",
        "noNacks",
        "api",
        "tie",
        "sourceActive",
        "gridlayout",
        "active",
        "closing\x2020",
        "AES-CBC",
        "surface",
        "inputBuffer",
        "onclose",
        "still",
        "ASKING\x20FOR\x20AUDIO\x20AND\x20VIDEO?",
        "grow",
        "cook",
        "onreadystatechange",
        "writeU8",
        "autoGainControl",
        "changeSpeaker",
        "ship",
        "<i\x20class=\x22las\x20la-stop-circle\x22></i>\x20",
        "videoMuted",
        "sendGenericData",
        "effectValue",
        "info",
        "trip",
        "randomize",
        "exercise",
        "total_outbound_p2p_connections",
        "broadcast=false",
        "webkitAudioContext",
        "insect",
        "invalid-remote-code",
        "summer",
        "stopping\x20old\x20track",
        "Meshcast\x20error:\x20432",
        "crop",
        "sendframes",
        "with",
        "&id=",
        "showDirector",
        "shore",
        "bit",
        "gun",
        "small",
        "midiDelay",
        "nextQueue",
        "king",
        "onicegatheringstatechange",
        "requestAudioHack",
        "wait",
        "low",
        "label",
        "decodeRemote",
        "radio",
        "controlTimer",
        "BlobBuffer",
        "round",
        "webm",
        "had",
        "setAudioBitrate",
        "subarray",
        "feet",
        "connectionDetails",
        "channel",
        "her",
        "room-is-claimed",
        "requested\x20file\x20has\x20been\x20removed.",
        "already\x20connected\x202.\x20disconnecting..",
        "abc123",
        "Members\x20in\x20Room",
        "applySoloChat",
        "pauseClock",
        "men",
        "observe",
        "INITIAL\x20PUBLISH\x20START:\x20",
        "complete",
        "closeTimeout\x20cancelled;\x207",
        "PCM\x20STARTED",
        "scene-connected",
        "branch",
        "disableREMB",
        "audioBitrate",
        "successfully\x20sent\x20message\x20vis\x20WebRTC\x20instead\x20of\x20WSS",
        "beat",
        "suppressLocalAudioPlayback",
        "reconnected",
        "false",
        "equal",
        "encodering\x20being\x20kicked",
        "left",
        "isScene",
        "bigPlayButton",
        "err",
        "application/error",
        "pushLoudness",
        "writer_config",
        "wind",
        "figure",
        "receive",
        "video_2_init_width",
        "front",
        "copy",
        "VDO-Ninja",
        "startWriter",
        "trade",
        "dataOffset",
        "span",
        "icefilter",
        "rpcs\x20onconnectionstatechange\x20Disconnected;\x20retry\x20in\x205s",
        "meshcastScreenShareBitrate",
        "checkBasicStreamsExist",
        "example",
        "FAIL\x20rpcs\x20onconnectionstatechange",
        "flagship",
        "mykey",
        "nose",
        "sceneType2",
        "closeTimeout\x20cancelled;\x202",
        "obs_control",
        "successfully\x20sent\x20message\x20vis\x20WebRTC\x20instead\x20of\x20WSS\x20to\x20all\x20RTC\x20Peers",
        "imageElement",
        "forcePLI",
        "time_seconds",
        "addEventListener",
        ",\x20mc?:\x20",
        "code",
        "lockedAudioBitrate",
        "[data-action-type=\x27recorder-local\x27][data--u-u-i-d=\x27",
        "obsControl",
        "stream",
        "requestChangeSubGain",
        "minptime",
        "subtle",
        "details",
        "directorDisplayMuted",
        "successfully\x20requested\x20audio\x20and\x20video",
        "enhanceAudio",
        "string",
        "hear",
        "differ",
        "nodownloads",
        "hidden",
        "crowd",
        "dear",
        "young",
        "reason",
        ";\x20charset=utf-8",
        "disableOBS",
        "lowMobileBitrate",
        "allowVideo",
        "playbackheader",
        "main-director",
        "processPCSOnMessage",
        "blow",
        "manualSink",
        "not\x20allowed\x20to\x20show\x20the\x20director",
        "fish",
        "sceneSync",
        "equate",
        "codirectorRequested",
        "max_bandwidth_capped_kbps",
        "tree",
        "label_",
        "want",
        "#obsRemotePassword>input",
        "ground",
        "fileList",
        "message\x20could\x20not\x20be\x20sent;\x20queuing\x20it",
        "syncState",
        "video_2_init_frameRate",
        "gather",
        "createAnswer",
        "can\x27t\x20change\x20bitrate;\x20no\x20video\x20sender\x20found",
        "./media/bg_sample2.webp",
        "sensorDataFilter",
        "fullscreen",
        "bitrateTimeout",
        "remote",
        "mainmenu",
        "led",
        "work",
        "may",
        "avatar",
        "mountain",
        "major",
        "one",
        "closing\x202",
        "none",
        "anysend",
        "audio",
        "charge",
        "enhance",
        "scaleWidth",
        "restartIce",
        "hardware_video_encoder",
        "init_audio",
        "top",
        "showList",
        "garden",
        "always",
        "relay",
        "orderby",
        "directorViewBitrate",
        "requestCoMigrate",
        "bandwidth\x20set\x20h!\x20",
        "getParameters",
        "frame",
        "setupScreenShareAddon",
        "point",
        "fun",
        "story",
        "great",
        "allowBroadcast",
        "CONNECTEED!",
        "lone",
        "ptz",
        "already\x20connected",
        "directorState",
        "fig",
        "north",
        "volume",
        "Safari",
        "jointone",
        "\x20(fair)",
        "pathname",
        "getReader",
        "allowIframe",
        "directorBox",
        "closed",
        "caught",
        "this.connectionState:\x20",
        "weather",
        "simple",
        "screenshareNotActive",
        "configure",
        "stereo\x20inbound\x20enabled",
        "drink",
        "why",
        "prototype",
        "whipCallback2",
        "solo-scene-connected",
        "rule",
        "list",
        "middle",
        "fruit",
        "old",
        "overlayNinja",
        "cleanup",
        "webPquality",
        "requestKeyframe",
        "mean",
        "fillStyle",
        "act",
        "opacity",
        "getPCM",
        "chunkedInQueue",
        "new-display-name",
        "candidates",
        "maintain-framerate",
        "NOT\x20VIEW\x20TARGET",
        "PolandPirat",
        "channelOffset",
        "chunkedAudioEnabled",
        "optimizeBitrate",
        "codirector_changeURL",
        "screenshare",
        "error",
        "allowWidget",
        "objectFit",
        "fadein",
        "intime",
        "band",
        "timer",
        "stone",
        "event",
        "setRequestHeader",
        "joining-room",
        "interval",
        "ontrack",
        "optionalMicOnly",
        "Shared\x20website:\x20<a\x20href=\x27",
        "ice",
        "find",
        "style",
        "rejected",
        "view",
        "timestamp",
        "were",
        "currentTime",
        ".battery-level",
        "streaming",
        "done\x20clearing\x20audio",
        "volumeControl",
        "deal",
        "maintain-resolution",
        "song",
        "dont",
        "recording_audio_mic_delay",
        "true",
        "groupView",
        "invite",
        "clear",
        "empty\x20ice..",
        "free",
        "canvasIntervalAction",
        "customWSS",
        "stay",
        "describe",
        "altUUID",
        "take",
        "addIceCandidate",
        "shoulder",
        "closing\x203",
        "obsSceneTriggers",
        "verb",
        "ease",
        "enter",
        "Failed\x20attempt\x20to\x20connect\x20as\x20co-director",
        "ON\x20NEGO\x20NEEDED",
        "gainNode",
        "GOT\x20ICES!!",
        "EOF2",
        "audioContentHint",
        "getTracks",
        "open",
        "filterOBSscenes",
        "UUID\x20not\x20found\x20in\x20pcs",
        "between",
        "directorHash",
        "sendChunks",
        "opacityDisconnect",
        "Answer\x20SDP\x20does\x20not\x20have\x20a\x20matching\x20session\x20ID",
        "women",
        "EOF1",
        "discuss",
        "A\x20director\x20joined\x20the\x20room",
        "Chunked_audio",
        "chunkedStream",
        "obsfix",
        "zoom",
        "turn:www.turn.vdo.ninja:3478",
        "hanging\x20up",
        "iframetarget",
        ".webm",
        "cause",
        "lie",
        "sun",
        "null",
        "change",
        "come",
        "transferSettings",
        "scaleResolution",
        "title",
        "noise\x20gate\x20off",
        "side",
        "bufferedAmount",
        "bread",
        "surprise",
        "recieveChunkedStream",
        "disconnected",
        "can",
        "allowWebp",
        "PINGED",
        "some",
        "smell",
        "mcSetScale",
        "createElement",
        "channels",
        "especially",
        "seek",
        "requested\x20file\x20was\x20not\x20found",
        "onnegotiationneeded",
        "video_init_height",
        "captureStream",
        "either",
        "measureUnsignedInt",
        "KEY\x20FRAME\x20REQUESTED",
        "wall",
        "MESHCAST\x20LINK:\x20",
        "m\x20:\x20",
        "CriOS",
        "allowAudio",
        "FORCE\x20KEYFRAME\x20FOR\x20SCENE",
        "rotated",
        "stop",
        "requestRateLimit\x20RUN:\x20",
        "smile",
        "directorSpeakerMuted",
        "audioEffects",
        "said",
        "replace",
        "writeU16BE",
        "requestFile\x20in\x20reverse",
        "vp8",
        "brother",
        "slave",
        "fileWriter",
        "requestCoDirector",
        "life",
        "board",
        "loudest",
        "gain",
        "failed\x20to\x20disconnect",
        "processIceBundle",
        "POST",
        "double",
        "canvasStream",
        "chief",
        "approved:\x20",
        "maxpublishers",
        "short",
        "enhanceaudio",
        "screenshare_url",
        "vdoninja",
        "seeding-started",
        "vector",
        "white",
        "pixelFix",
        "toString",
        "onclick",
        "parent",
        "null\x20ice\x20rpcs",
        "limitMaxBandwidth",
        "https://turnservers.rtc.ninja/",
        "turn",
        "about",
        "getChannelData",
        "hssConnection",
        "remember",
        "audioContext",
        "noWidget",
        "remote-label-changed",
        "hunt",
        "not-the-director",
        "HANG\x20UP\x20COMPLETE",
        "buffer",
        "no\x20UUID\x20in\x20msg",
        "through",
        "sendRequest",
        "bandwidth",
        "degrade",
        "quality_wb",
        "directorBlue",
        "mine",
        "fall",
        "baby",
        "sync",
        "getWriter",
        "darkmode",
        "recordedBlobs",
        "iron",
        "screensharefps",
        "heart",
        "boat",
        "writeEBMLVarIntWidth",
        "layouts",
        "wave",
        "allowScreen",
        "directorPassword",
        "mind",
        "law",
        "decide",
        "length",
        "please",
        "bar",
        "requestChangeEQ",
        "suggest",
        "verify",
        "removeChild",
        "thank",
        "allowChunked",
        "yes",
        "privacy",
        "paper",
        "sit",
        "startClock",
        "restricted",
        "autoSyncCallback",
        "webrtc\x20connectioned\x20closed-event",
        "micSampleRate",
        "watch_URL",
        "setRemoteDescription",
        "meshcastSettings",
        "TRANSFERRING?",
        "AES",
        "chatmessage",
        "limiting\x20AudioEncoder",
        "grass",
        "onconnectionstatechange\x20pcs\x20ice\x20--\x20disconnected,\x20but\x20not\x20yet\x20closed?\x20",
        "solve",
        "socialstream",
        "userAgent",
        "six",
        "huge",
        "contain",
        "18159744KisLvj",
        "SENDING\x20FILE:\x20",
        "symbol",
        "mirrored",
        "targetBitrate",
        "onmessage",
        "pcs\x20RTC\x20CLOSED",
        "permaid",
        "Not\x20a\x20scene",
        "announceCoDirector",
        "transcript",
        "deep",
        "requestRateLimit",
        "evening",
        "clean",
        "UUID\x20does\x20not\x20exist",
        "EBML\x20VINT\x20size\x20not\x20supported\x20",
        "Messaging\x20sent",
        "hand",
        "setVideoBitrates",
        "limitAudio",
        "querySelector",
        "midiRemote",
        "big",
        "thing",
        "wife",
        "view-connection-info",
        "outputLatency",
        "screenIndexes",
        "meshcastCodec",
        "chunked_mode_video",
        "provide",
        "ptime",
        "disablePLI",
        "changeOrder",
        "42e01f",
        "sending\x20message\x20via\x20server",
        "hit",
        "game",
        "IchBinSteveDerNinja",
        "just",
        "application/json;\x20charset=utf-8",
        "codec_url",
        "seed",
        "who",
        "onaudioprocess",
        "screensharecursor",
        "condition",
        "random",
        "video",
        "videoaddedtoroom",
        "save\x20bandwidth:\x20",
        "them",
        "make",
        "leg",
        "since",
        "writeDoubleBE",
        "right",
        "you-are-a-codirector",
        "forceScreenShareAspectRatio",
        "streamSrcClone",
        "stats",
        "gone",
        "EncodedVideoChunk",
        "totalSceneBitrate",
        "already\x20closed\x20PCS",
        "CPU",
        "Chromium-based\x20v",
        "?ts=",
        "showlabels",
        "music",
        "localDescription",
        "stereo",
        "bandwidth\x20set\x20g!\x20",
        "split",
        "cameraConstraints",
        "quality_ss",
        "\x20(fail)",
        "noisegateSettings",
        "this",
        "BITRATE\x203:\x20",
        "Seeking\x20beyond\x20the\x20end\x20of\x20file\x20is\x20not\x20allowed",
        "requestChangeLowcut",
        "decode",
        "Audio_Loudness",
        "friend",
        "windowed",
        "directorActions",
        "vdav",
        "age",
        "videos",
        "host",
        "closing\x2013",
        "classList",
        "NOT\x20IN\x20VIEW\x20SET",
        "streamid-already-published",
        "Not\x20director",
        "scaleSnap",
        "rock",
        "famous",
        "neck",
        "poem",
        "past",
        "cid:",
        "disableHotKeys",
        "level",
        "whether",
        "have",
        "A_OPUS",
        "remoteStats",
        "danger",
        "cpuLimited",
        "measureEBMLVarInt",
        "nochunk",
        "PCS\x20WINS\x20ICE",
        "decimal",
        "viewwidth",
        "Video\x20File",
        "far",
        "obsRemotePassword",
        "addTrack",
        "wss",
        "autorecordremote",
        "put",
        "decrypt",
        "timecode",
        "dry",
        "lin",
        "supply",
        "midiOut",
        "bear",
        "sleep",
        "digest",
        "cat",
        "getElementById",
        "represent",
        "history",
        "virtualcam",
        "current",
        "FORCING\x20A\x20KEY\x20FRAME:\x20",
        "are",
        "gpGPU",
        "warm",
        "throw",
        "ontimeout",
        "configVideo",
        "waitImage",
        "part",
        "screenshareDenoise",
        "consent",
        "director",
        "midiOffset",
        "disableNACK",
        "starting\x20some\x20preload\x20bitrate\x20",
        "Remote\x20user\x20is\x20a\x20director",
        "queueList",
        "EncodedAudioChunk",
        "sendroom",
        "cpu",
        "feel",
        "listPromise",
        "think",
        "numberOfChannels",
        "metaKey",
        "directorStreamID",
        "token-not-director",
        "Not\x20supported;\x20expected\x20\x27filetransfer\x27",
        "search",
        "disconnectedTimeout",
        "getOpusBitrate",
        "getResponseHeader",
        "hash\x20is\x20",
        "showall",
        "keyframeRate",
        "common",
        "webCodec",
        "padStart",
        "layout",
        "machine",
        "switchMode",
        "application/sdp",
        "hundred",
        "phrase",
        "addCoDirector",
        "arm",
        "vdAv",
        "door",
        "flat",
        "seedStream",
        "\x20(ok)",
        "No\x20reconnect\x20even\x20after\x205s;\x20closing",
        "experience",
        "wire",
        "miniInfo",
        "toward",
        "chatbutton",
        "/alpha/",
        "whepInput",
        "enqueue",
        "found",
        "canvas",
        "ride",
        "plan",
        "ArrayBufferDataStream",
        "charAt",
        "noScaling",
        "lockedVideoBitrate",
        "preferAudioCodec",
        "dark",
        "forceRotate",
        "decodeInvite",
        "night",
        "feed",
        "able",
        "noaudio",
        "wrong",
        "reject",
        "engine",
        "Opened\x20transfer\x20channel",
        "field",
        "text",
        "mutedStateScene",
        "exclude",
        "often",
        "remove",
        "tabernac",
        "word",
        "failed\x20to\x20send\x20focus\x20change\x20request",
        "noisegate",
        "limitMeshcastBitrate",
        "Websocket\x20connection\x20failed\x20or\x20something;\x20this\x20is\x20a\x20split\x20connection.\x20not\x20ideal,\x20as\x20it\x20could\x20be\x20unstable.",
        "vp9",
        "allowGraphs",
        "size",
        "iceGatheringState",
        "infocus2",
        "screenShareState",
        "near",
        "hangup",
        "inch",
        "speakerMuted",
        "done\x20setting\x20degrad\x20to\x20maintain-framerate",
        "failed",
        "set",
        "cleanOutput",
        "videoWriter",
        "onopen",
        "week",
        "Someone",
        "key",
        "iceConnectionState",
        "bottom",
        "ifs",
        "offer",
        "\x20(good)",
        "steve",
        "time",
        "deviceId",
        "very",
        "autostart",
        "image/webp",
        "1035621rYzuRu",
        "</a>",
        "closeTimeout\x20cancelled;\x203",
        "https://meshcast.io/servers.json?ts=",
        "a=extmap:3\x20urn:3gpp:video-orientation\x0d\x0a",
        "showSaveFilePicker",
        "realTimeAudio",
        "same",
        "pass",
        "suffix",
        "must",
        "locate",
        "require",
        "disableMouseEvents",
        "directorEnabledPPT",
        "yard",
        "see",
        "publishing_region",
        "audioLatency",
        "changeURL",
        "voiceMeterTemplate",
        "listen",
        "ever",
        "h264",
        "midiIn",
        "slots",
        "provideFileList",
        "pcm",
        "gray",
        "camp",
        "failed\x20to\x20send\x20zoom\x20change\x20request",
        "there",
        "press",
        "ACTION\x20REJECTED:\x20",
        "several",
        "directorList",
        "began",
        "father",
        "requesting\x20stream",
        "stringify",
        "teeth",
        "bright",
        "claim",
        "egg",
        "raise",
        "now",
        "audioCodec",
        "currentTarget",
        "sister",
        "setResolution",
        "mark",
        "forceAspectRatio",
        "ten",
        "less",
        "inboundAudioPipeline",
        "blindAllGuests",
        "get",
        "utf-8",
        "suit",
        "certain",
        "has",
        "splice",
        "sticky",
        "answer",
        "four",
        "realUUID",
        "changeLabel",
        "settle",
        "appear",
        "startsWith",
        "prompt-access-request",
        "money",
        "body",
        "autorecordlocal",
        "replaceAll",
        "processDescription2",
        "roll",
        "contentHint",
        "minimumRoomBitrate",
        "guide",
        "audioTime",
        "vb_url",
        "focus",
        "audioNode",
        "milk",
        "allowchunked",
        "borderColor",
        "pol1",
        "de2",
        "\x20(timeout)",
        "Clean\x20up",
        "nocursor",
        "codecs",
        "There\x27s\x20a\x20new\x20incoming\x20connection.",
        "speedtest",
        "mutedState",
        "believe",
        "roombitrate",
        "processFrame",
        "man",
        "turn:turn-cae1.vdo.ninja:3478",
        "recording_audio_pipeline",
        "responseText",
        "slotmode",
        "GOT\x20ICE!!",
        "servers",
        "couldn\x27t\x20set\x20rate\x20limit",
        "de1",
        "totalBitrate:\x20",
        "fresh",
        "ON\x20FOCUS\x20NOT\x20FOUND",
        "data\x20channel\x20being\x20used\x20in\x20reverse;\x20this\x20shouldn\x27t\x20really\x20happen,\x20except\x20if\x20maybe\x20doing\x20a\x20file\x20transfer",
        "midiChannel",
        "delayTime",
        "apple",
        "appendChild",
        "available_outgoing_bitrate_kbps",
        "joinroom",
        "no\x20audio\x20track\x20to\x20poke",
        "localVoiceMeter",
        "writeEBMLVarInt",
        "processFrameAudio",
        "oil",
        "qlr",
        "controlRoomBitrate",
        "changeMicrophone",
        "stand",
        "trackNumber",
        "row",
        "This\x20stream\x20token\x20is\x20already\x20connected.\x20Are\x20you\x20having\x20a\x20CORS\x20issue?\x20Also,\x20ensure\x20SSL\x20if\x20enforced\x20on\x20your\x20host\x20everywhere.",
        "burn",
        "transparent",
        "closing\x2016",
        "cleanViewer",
        "heat",
        "during",
        "configAudio",
        "close",
        "last",
        "anger",
        "dollar",
        "novideo",
        "onnegotiationneeded\x20triggered;\x20creating\x20offer",
        "silent",
        "whip",
        "whepInputToken",
        "new-push-connection",
        "forceRetryTimeout",
        "screenStream",
        "lift",
        "processIce",
        "Authorization",
        "name",
        "beforeunload",
        "hostedTransfers",
        "lowerVolume",
        "Video\x20Bitrate\x20is\x20locked;\x20can\x27t\x20update",
        "Offset\x20may\x20not\x20be\x20negative",
        "Requested_resolution",
        "PCS:\x20ICE\x20Disconnected;\x20wait\x20for\x20retry?\x20pcs",
        "postURL",
        "whipOutputToken",
        "limitaudio",
        "readAsArrayBuffer",
        "meshcast",
        "requestResolution",
        "hot",
        "line",
        "lake",
        "publicKey",
        "Valid\x20co\x20director\x20trying\x20to\x20transfer\x20a\x20guest",
        "shoe",
        "soil",
        "setOpusAttributes",
        "canvasWebGL",
        "processDescription",
        "sceneList",
        "sat",
        "strange",
        "audioDevice",
        "audioChannels",
        "doctor",
        "copyTo",
        "box",
        "produce",
        "rpcs",
        "much",
        "glad",
        "taintedSession",
        "getSenders",
        "currentSlots",
        "message",
        "chunkedtransfer\x20OPEN",
        "closing\x2012",
        "directorBlindAllGuests",
        "turn:turn-eu2.obs.ninja:3478",
        "remoteMuteElement",
        "cmd",
        "rtc\x20state:\x20",
        "enemy",
        "retrying\x20at\x20an\x20interval",
        "fakeUser",
        "winter",
        "know",
        "Lowered\x20hand",
        "noiseSuppression",
        "contolboxLabel",
        "backup.vdo.ninja/",
        "Chunked_video",
        "myVideo.webm",
        "ICE\x20FAILED",
        "fakeFeeds",
        "audioGain",
        "station",
        "effect",
        "actual\x20bitrate:",
        "muteStateTemplate",
        "writeUnsignedIntBE",
        "completed",
        "#000",
        "width",
        "long",
        "directorVideoMuted",
        "boy",
        "hangupbutton",
        "removeOrientationFlag",
        "multiply",
        "focus\x20success",
        "msg",
        "pay",
        "slotsUpdate",
        "requestFocusChange",
        "requestChangeMicDelay",
        "micDelay",
        "set-meshcast-video-bitrate",
        "chair",
        "tuning",
        "stopPropagation",
        "begin",
        "iframeSrcs",
        "showRoomTime",
        "writer",
        "proxy",
        "lowerhand",
        "InvalidOperationException",
        "targetBandwidth",
        "result",
        "degradationPreference",
        "receiveChannel",
        "bandwidth\x20set\x20i!\x20",
        "We\x20will\x20not\x20request\x20the\x20meshcast\x20as\x20no\x20audio\x20or\x20video\x20is\x20requested",
        "send",
        "currentCameraConstraints",
        "late",
        "paragraph",
        "carry",
        "TrackNumber\x20must\x20be\x20>\x200\x20and\x20<\x20127",
        "maxBufferSize",
        "sand",
        "ab_url",
        "Publisher\x20is\x20being\x20sent\x20a\x20video\x20stream???\x20NOT\x20EXPECTED!",
        "WHY\x20ARE\x20YOU\x20GOD\x20DAMN\x20BEEPING",
        "RECONNECTING\x20to\x20HSS;\x20DISCONNECTING\x20FROM\x20TRANSFERRED\x20ROOM",
        "book",
        "allowMIDI",
        "turn:turn-usw2.vdo.ninja:3478",
        "allowmidi",
        "use",
        "firstPlayTriggered",
        "bandwidth\x20set\x20b!\x20",
        "bed",
        "nature",
        "dream",
        "scaleHeight",
        "support",
        "sugar",
        "dog",
        "ICE\x20DISCONNECTED",
        "bandwidthMuted",
        "color",
        "problem",
        "Generate\x20Some\x20Crypto\x20keys\x20first",
        "yet",
        "slow",
        "useragent",
        "knew",
        "leave",
        "Change\x20Label",
        "quality_limitation_reason",
        "mainDirectorPasswor",
        "loud",
        "Failed\x20to\x20connect\x20to\x20service:\x20Error\x20503<br\x20/><br\x20/>Possibly\x20too\x20many\x20connections\x20from\x20the\x20same\x20address\x20tried\x20to\x20connect.<br\x20/>Visit\x20https://discord.vdo.ninja\x20for\x20support.",
        "width_url",
        "sendChannel_",
        "obsCommand",
        "received\x20data\x20from\x20viewer",
        "activelySpeaking",
        "only",
        "coat",
        "coDirectorEnable",
        "happy",
        "delta",
        "requestVideoRecord",
        "both",
        "die",
        "canvasSource",
        "BYE",
        "Inbound\x20User-based\x20Message\x20from\x20Room",
        "director-denied",
        "requestFile",
        "init_video",
        "Trying\x20to\x20join\x20at\x20least",
        "morning",
        "chrg",
        "\x27\x20target=\x27_blank\x27>",
        "visibility",
        "vDav",
        "scaleResolutionDownBy",
        "byteLength",
        "location",
        "displayMute",
        "arraybuffer",
        "language",
        "street",
        "RTC\x20already\x20connected",
        "disableViewerWebAudioPipeline",
        "denoise_url",
        "exact",
        "includes",
        "rotate",
        "optimizedBitrate",
        "muteState",
        "codirectorSettings",
        "Does\x20Local\x20Stream\x20Source\x20EXIST?",
        "allowwebp",
        "pretty",
        "unified-plan",
        "virtualHangup",
        "moon",
        "indexOf",
        "bitrateTimeoutFirefox",
        "cleanish",
        "cool",
        "cloud",
        "audiobitrate",
        "separate",
        "afraid",
        "keys",
        "requestAudioRateLimit",
        "json",
        "introButton",
        "MAKING\x20A\x20NEW\x20RPCS\x20RTC\x20CONNECTION",
        "selfBrowserSurface",
        "experiment",
        "safe",
        "crypto",
        "preLimitedBitrate",
        "autoSyncObject",
        "showTime",
        "RTC\x20Connection\x20seems\x20to\x20be\x20dead\x20or\x20not\x20yet\x20open?\x203",
        "slot",
        "love",
        "visit",
        "next",
        "cbr",
        "updateurl",
        "main",
        "iceTransportPolicy",
        "remoteDescription",
        "frameRate",
        "quart",
        "wear",
        "allowscreen",
        "ping",
        "setVideoScale",
        "requestChangeCompressor",
        "window",
        "fight",
        "fraction",
        "-kbps",
        ",\x20isDirector:\x20",
        "scale\x20scale",
        "water",
        "1256168SLxAHo",
        "Transfer\x20was\x20cnacelled\x20by\x20remote\x20user;\x20parital\x20file\x20saved.",
        "substring",
        "stopClock",
        "encodings",
        "state",
        "offsetChannel",
        "segment",
        "roomTimer",
        "over",
        "truck",
        "real",
        "map",
        "innerText",
        "stun:stun.cloudflare.com:3478",
        "hw_enc",
        "apiSocket",
        "panning",
        "getTimezoneOffset",
        "probable",
        "wheel",
        "star",
        "maxvb_url",
        "student",
        "visible",
        "_screen",
        "keyframe",
        "compressor",
        "sensorData",
        "ondatachannel",
        "obs",
        "publishing\x20SDP\x20Offer:\x20",
        "processFrameVideo",
        "changeCamera",
        ")\x20failed\x20due\x20to\x20permissions\x20or\x20it\x20was\x20rejected\x20by\x20the\x20user",
        "RTC\x20closed",
        "heavy",
        "postMessage",
        "signData",
        "noun",
        "sid",
        "video_init_frameRate",
        "rose",
        "resolve",
        "video_encoder",
        "requestUpload",
        "bitrate\x20timeout;\x20ios/firefox\x20specific:\x20",
        "written",
        "session.provideFileList",
        "\x20x\x20",
        "can\x27t\x20change\x20audio\x20bitrate;\x20no\x20audio\x20sender\x20found",
        "set-video-bitrate",
        "join",
        "stream_configVideo",
        "initialPublish",
        "Someone\x20is\x20trying\x20to\x20transfer\x20a\x20guest",
        "getRandomValues",
        "born",
        "http://",
        "UUID",
        "selected",
        "labelstyle",
        "pair",
        "room",
        "sceneDisplay",
        "preferCurrentTab",
        "BROWER\x20DID\x20NOT\x20SUPPORT\x20LIMIT\x20BITRATE",
        "\x20query\x20is\x20not\x20defined;\x20skipping.",
        "buy",
        "baseLatency",
        "bat",
        "limitTotalBitrate",
        "ctx",
        "Can\x27t\x20play\x20your\x20own\x20stream\x20ID",
        "already\x20watching\x20stream",
        "screen-share-state",
        "detail",
        "encode",
        "quite",
        "fill",
        "webAudios",
        "autoSync",
        "signalMeter",
        "course",
        "industry",
        "meat",
        "start",
        "webp",
        "text/plain",
        "first",
        "RPCS\x20for\x20MESHCAST\x20ISNT\x20MADE\x20YET??",
        "guess",
        "speech",
        "shift",
        "sense",
        "requestedStatsInterval",
        "city",
        "autohide",
        "favor",
        "outputDevice",
        "theyBeSharksHere",
        "meshcastMenu",
        "initial_group",
        "remoteVideoMuted",
        "no\x20video\x20track\x20to\x20control",
        "TFJSModel",
        "land",
        "connected",
        "obsControls",
        "newViewConnection",
        "include",
        "desert",
        "**\x20connected",
        "match",
        "https://meshcast.io/view.html?id=",
        "already\x20waiting\x20for\x20stream",
        "Checking\x20to\x20see\x20if\x20reconnectino\x20to\x20ws\x20lost\x20any\x20peers",
        "OPEN",
        "abs",
        "action",
        "remoteFocus",
        "meterStyle",
        "block",
        "hasOwnProperty",
        "force",
        "kill",
        "28jLHDhn",
        "added\x20audio\x20track",
        "look",
        "roomclaimed",
        "seeding",
        "enough",
        "possible",
        "stopping\x20some\x20preload\x20bitrate\x20",
        "Someone\x20Joined\x20the\x20Room\x20with\x20a\x20video",
        "activeSpeaker",
        "oniceconnectionstatechange",
        "success",
        "\x20---\x20PC\x20TIMED\x20OUT\x20and\x20already\x20deleted.\x20shouldn\x27t\x20happen",
        "CONNECTED\x20TO\x20FIRST\x20PEER",
        "maxconnections",
        "getVideoBitrates",
        "beepToNotify",
        "climb",
        "PCMSource",
        "maxBitrate",
        "sampleRate",
        "outboundVideoBitrate",
        "streamID",
        "pong",
        "direct",
        "obsState",
        "spend",
        "minipreview",
        "practice",
        "enhanceAudioEncoder",
        "natural",
        "him",
        "woman",
        "sea",
        "PUBLISHER\x27s\x20RTC\x20Connection\x20seems\x20to\x20be\x20dead?\x20",
        "ctrlKey",
        "instant",
        "help",
        "hands_",
        "screen",
        "createDataChannel",
        "Someone\x20Joined\x20the\x20Room",
        "playback_audio_volume_meter",
        "lowBitrateCutoff",
        "remoteZoom",
        "target",
        "noPLIs",
        "busy",
        "division",
        "zoomedBitrate",
        "LOADING\x20UP\x20WAITING\x20WATCH\x20STREAM:\x20",
        "vary",
        "limitTotalBitrateGuests",
        "push-connection-info",
        "closedCaptions",
        "encodedInsertableStreams",
        "micIsolate",
        "video_init_width",
        "aec_url",
        "room_init",
        "session.newMainDirectorSetup",
        "closeTimeout\x20cancelled;\x206\x27\x20retry\x20in\x203s?",
        "animal",
        "destination",
        "draw",
        "channelCount",
        "catch",
        "mediaDevices",
        "watchTimeoutList",
        "enc",
        "sendChannel",
        "ori",
        "signature",
        "self",
        "timedelta",
        "seem",
        "udp",
        "heard",
        "thick",
        "stream_configAudio",
        "resumeClock",
        "pushEffectsData",
        "gas",
        "overlayControls",
        "waitImageTimeout",
        "sdp",
        "welcomeMessage",
        "acc",
        "connectionState",
        "particular",
        "play",
        "desaltStreamID",
        "screenStopped",
        "setupYourOwnPlease",
        "letter",
        "application/",
        "temperature",
        "above",
        "Incoming\x20Ice\x20Offer\x20does\x20not\x20match\x20Session",
        "touch",
        "encrypt",
        "design",
        "ArrayBufferDataStream\x27s\x20pos\x20lies\x20beyond\x20end\x20of\x20buffer",
        "Max\x20bandwidth\x20NOT\x20being\x20capped:\x20",
        "post",
        "aspectRatio",
        "isDirector\x20",
        "guest-connected",
        "doNotSeed",
        "mono",
        "tokens-did-not-match",
        "govern",
        "never",
        "month",
        "again",
        "ctrl",
        "controls",
        "stream\x20ID\x20is\x200\x20length",
        "SHA-256",
        "iframeEle",
        "createBufferSource",
        "agree",
        "finger",
        "usw2",
        "encryptMessage",
        "./media/bg_sample.webp",
        "rest",
        "range",
        "samplingFrequency",
        "header",
        "maxptime",
        "can\x27t\x20change\x20bitrate;\x20no\x20video\x20senders\x20found",
        "seedPlz",
        "h264profile\x20being\x20modified",
        "instrument",
        "new-view-connection",
        "enhacing\x20audio\x20encoder",
        "widget",
        "iframeSrc",
        "number",
        "tfliteModule",
        "shell",
        "recording",
        "children",
        "applyIsolatedChat",
        "createWriteStream",
        "measure",
        "step",
        "trouble",
        "well",
        "lady",
        "displaySurface",
        "filetransfer",
        "rich",
        "Firefox",
        "hss-connection",
        "third",
        "those",
        "echoCancellation",
        "starting\x20kicker",
        "dataset",
        "three",
        "least",
        "stood",
        "forward",
        "push-connection",
        "moment",
        "clock",
        "video/webm",
        "Second\x20Thread\x20Waiting\x20for\x20TURN\x20LIST\x20to\x20load",
        "sendKeyFrameScenes",
        "optimize",
        "isArray",
        "coast",
        "set-audio-bitrate",
        "wish",
        "status",
        "reject\x20co",
        "skin",
        "ready",
        "noon",
        "closing\x208",
        "https://turnservers.vdo.ninja/",
        "guest",
        "gotGenericData",
        "remoteMuteState",
        "parse",
        "fullscreenButton",
        "\x20---\x20we\x20will\x20not\x20ask\x20again;\x20we\x27re\x20already\x20connected",
        "twenty",
        "data",
        "batteryMeter",
        "postInterval",
        "dead",
        "h264profile",
        "toLowerCase",
        "set-video-scale",
        "raisehands",
        "lot",
        "write",
        "scaleFactor",
        "Bearer\x20",
        "createOffer",
        "mother",
        "network_type",
        "\x20as\x20preferred\x20video\x20codec\x20by\x20viewer\x20via\x20API\x20(offer)",
        "addFrame",
        "oxygen",
        "else",
        "alert",
        "hour",
        "videoOptions",
        "plugged_in",
        "school",
        "allowNoGroup",
        "Media",
        "room\x20rate\x20restriction\x20detected.\x20No\x20videos\x20will\x20be\x20published\x20to\x20other\x20guests",
        "maxaveragebitrate",
        "group-set-updated",
        "air",
        "position",
        "maxMobileBitrate",
        "watch",
        "resending\x20message",
        "selectedIndex",
        "rub",
        "settings",
        "Meshcast\x20not\x20available.",
        "flow",
        "autoplay",
        "remoteRaisedHandElement",
        "hope",
        "recorder",
        "told",
        "iframe",
        "widgetURL",
        "blue",
        "team",
        "Bad\x20EBML\x20datatype\x20",
        "ICE\x20DID\x20NOT\x20FIND\x20A\x20PC\x20OPTION?\x20peer\x20might\x20have\x20left\x20before\x20ICE\x20complete",
        "createDelay",
        "getLocalStream",
        "stick",
        "noise\x20gate\x20on",
        "This\x20shouldn\x27t\x20happen",
        "lyraCodecModule",
        "preferCodec",
        "skill",
        "directorSpeakerMute",
        "early",
        "home",
        "getContext",
        "base",
        "nothing",
        "remote-control-failed",
        "Failed\x20to\x20request\x20video\x20and\x20audio;\x20iOS\x20device\x20asking?",
        "deferring\x20with\x20a\x20promise",
        "requested-stream",
        "ocean",
        "directorVolumeState",
        "sure",
        "leavetone",
        "blood",
        "whipCallback",
        "BITRATE\x201:\x20",
        "RTCRtpSender",
        "reportbutton",
        "ROOMID\x20EANBLED",
        "removeEventListener",
        "midiHotkeys",
        "preloadbitrate",
        "try",
        "noExitPrompt",
        "iframeVideo",
        "CLOSED",
        "innerHTML",
        "imagine",
        "UUID\x20not\x20found;\x20can\x27t\x20close.",
        "configuration",
        "scaleDueToBitrate",
        "present",
        "token-room-is-claimed",
        "pip",
        "realTime",
        "binaryType",
        "fair",
        "thought",
        "sharperScreen",
        "defaultIframeSrc",
        "raw",
        "back",
        "max",
        "286907ogBmrf",
        "chunkedtransfer",
        "rtc.ninja",
        "stereo_url",
        "srcObject",
        "createMediaStreamDestination",
        "spread",
        "view_set",
        "cry",
        "remoteMuteState_",
        "horse",
        "infocus",
        "website",
        "PASSED",
        "applyIsolatedVolume",
        "requestAs",
        "platform",
        "getSettings",
        "grew",
        "cover",
        "unshift",
        "totalRoomBitrate",
        "prepare",
        "way",
        "statsInterval",
        "layout-updated",
        "setScale",
        "dtx",
        "Reloading?\x20uh\x20oh.\x20Why\x20didn\x27t\x20it?",
        "screenShareLabel",
        "\x20---\x20we\x20will\x20ask\x20again",
        "adaptivePtime",
        "textContent",
        "requestStats",
        "%\x20battery\x20remaining",
        "option",
        "hidehome",
        "plugged",
        "bitrate_set",
        "corn",
        "sendPeers",
        "nackCount",
        "zoom\x20success",
        "invalid-remote-code-obs",
        "son",
        "request\x20zoom\x20change:\x20",
        "ruleOfThirds",
        "listing",
        "would",
        "rampUpTime",
        "prove",
        "vDAv",
        "swim",
        "island",
        "querySelectorAll",
        "height",
        "closeTimeout",
        "hangupDirector",
        "hole",
        "defaultSpeaker",
        "root",
        "mute",
        "move",
        "Content-Type",
        "earth",
        "WebRTC\x20Connection\x20Closed.\x20Clean\x20up.\x20657",
        "processIce2",
        "create",
        "approved",
        "wss://wss.vdo.ninja:443",
        "writeString",
        "options",
        "keyframeTimeout",
        "studioSoftware",
        "single",
        "local",
        "3178340xKfleT",
        "resolution\x20scale:\x20",
        "call",
        "pound",
        "forceTcpMode",
        "frameMeta",
        "cleaning\x20up\x20lost\x20connection\x20--\x20disconnected\x20-\x20iOS\x20specific",
        "dance",
        "slip",
        "such",
        "privateKey",
        "chat",
        "iceServers",
        "video_2_init_height",
        "east",
        "container_",
        "description",
        "gyro",
        "Remote\x20request\x20decoded\x20successfully",
        "273098PBetiS",
        "writeByte",
        "An\x20RTC\x20error\x20occured",
        "but",
        "remote-video-mute-state",
        "until",
        "RPCS\x20WINS\x20ICE",
        "eight",
        "Bad\x20EBML\x20VINT\x20size\x20",
        "control",
        "images",
        "contentType",
        "fillDataBuffer",
        "idea",
        "high",
        "circle",
        "recieveFile",
        "these",
        "repeat",
        "session.limitMaxBandwidth\x20running:\x20",
        "Max\x20bandwidth\x20being\x20capped:\x20",
        "Bitrate\x20request:\x20",
        "total",
        "directVideoMuted",
        "slice",
        "cloneNode",
        "codirector_transfer",
        "spell",
        "midiDevice",
        "determine",
        "video_bitrate_kbps",
        "filename",
        "Meshcast\x20not\x20connected;\x20cant\x27\x20create\x20canvas\x20for\x20it",
        "like",
        "noREMB",
        "melody",
        "finish",
        "store",
        "labelsize",
        "iceBundle",
        "continue",
        "autorecord",
        "disableWebAudio",
        "nacks_per_second",
        "showClock",
        "chatname",
        "wss://api.vdo.ninja:443",
        "guestFeeds",
        "reload",
        "manualBandwidth",
        "onload",
        "teach",
        "question",
        "that",
        "screenShareElementHidden",
        "notifyScreenShare",
        "conn_type",
        "overlay",
        "travel",
        "obsninja",
        "defaultBackgroundImages",
        "The\x20request\x20(",
        "electric",
        "preferVideoCodec",
        "type",
        "Meshcast\x20SET\x20SCALING\x20IS\x20FIRING,\x20which\x20is\x20GOOD\x20!!!!!!",
        "setClock",
        "onerror",
        "sort",
        "creating\x20answer",
        "process",
        "drop",
        "statsMenu",
        "eye",
        "gathering",
        "record",
        "went",
        "best",
        "remote-group-change",
        "onconnectionstatechange",
        "charCodeAt",
        "https://www.youtube.com/",
        "interest",
        "vdo.ninja",
        "sending\x20message\x20via\x20WSS\x20as\x20WebRTC\x20failed\x20to\x20send\x20message",
        "videoDevice",
        "cut",
        "hair",
        "lowcut",
        "scaleResolutionDownBy\x20set\x202b!",
        "modern",
        "closing\x201",
        "farm",
        "when",
        "widgetSrc",
        "came",
        "market",
        "isInteger",
        "importKey",
        "candidate",
        "place",
        "modifyDescPCM",
        "screenshareAutogain",
        "got",
        "learn",
        "Transfer\x20ended",
        "ear",
        "limitBitrate",
        "needKeyFrame",
        "similar",
        "where",
        "resolution",
        "from",
        "lyra",
        "ICE\x20FAILed.\x20bad?",
        "bell",
        "energy",
        "borderRadius",
        "\x20(full)",
        "AndroidFix",
        "note",
        "request-failed",
        "session",
        "parentNode",
        "add-a-label",
        "changeParams",
        "Browser",
        "theirtime",
        "deferring\x20with\x20a\x20promise;\x20hashed\x20room",
        "opus",
        "turns:turn.obs.ninja:443",
        "broadcast",
        "add",
        "mainDirectorPassword",
        "waitImageTimeoutObject",
        "downloads",
        "waiting\x20for\x20keyframe",
        "defaultPassword",
        "RSASSA-PKCS1-v1_5",
        "obsstudio",
        "AudioContext",
        "preventDefault",
        "PONGED",
        "stunServers",
        "tube",
        "cleanDirector",
        "forceios",
        "readyState",
        "startTime",
        "videoElement",
        "mobile",
        "muted_savedState",
        "providing\x20answer",
        "\x20---\x20PC\x20TIMED\x20OUT,\x20but\x20still\x20alive.\x20Killing\x20it.",
        "basic",
        "print",
        "out",
        "soloChatUUID",
        "channelWidth",
        "divide",
        "request\x20rate\x20limit:\x20",
        "show",
        "display",
        "fine",
        "numeral",
        "dataMode",
        "localMuteElement",
        "send\x20channel\x20closed",
        "codirector\x20request\x20hash\x20failed",
        "distant",
        "could\x20not\x20be\x20sent;\x20queuing\x20it",
        "screenshareContentHint",
        "half",
        "closing\x204",
        "sceneType",
        "soldier",
        "rpc\x20datachannel\x20closed",
        "power_level",
        "safemode",
        "New\x20ON\x20TRACK\x20event",
        "url",
        "limitAudioBitrate",
        "speak",
        "codirector",
        "encoder",
        "character",
        "tokenDirector",
        "fillRect",
        "minute",
        "kind",
        "reach",
        "once",
        "scene",
        "screenShareBitrate",
        "broadcast_mode",
        "chord",
        "year",
        "ago",
        "sink",
        "what\x20is\x20this?",
        "straight",
        "scale",
        "videoEncoder",
        "lay",
        "cold",
        "seedAttempts",
        "encodeRemote",
        "gentle",
        "playback_audio_pipeline",
        "opacityMuted",
        "forceRetry",
        "queue",
        "setLocalDescription",
        "center",
        "town",
        "videosource",
        "eventPlayActive",
        "focusStyle",
        "timeout",
        "the",
        "then",
        "transfer",
        "allowVideos",
        "century",
        "plant",
        "groupAudio",
        "directorBlindButton",
        "correct",
        "hiddenSceneViewBitrate",
        "object",
        "newMainDirectorSetup",
        "resume",
        "lost",
        "room-is-claimed-codirector",
        "seven",
        "generateStreamID",
        "end-view-connection",
        "thousand",
        "getVideoTracks",
        "joiningRoom",
        "loadoutID",
        "vp09.00.10.08",
        "requestZoomChange",
        "setFloat32",
        "limitAudioEncoder",
        "child",
        "product",
        "VP9",
        "retryWatchInterval",
        "ice\x20timer\x20no\x20longer\x20exists",
        "BYE\x20RPCS",
        "was",
        "closing\x209",
        "edgelist",
        "outboundAudioBitrate",
        "power",
        "obsStateSync",
        "human",
        "area",
        "savedVolume",
        "cent",
        "notice",
        "BITRATE\x202:\x20",
        "meshcastAudioBitrate",
        "floor",
        "shop",
        "salt",
        "two",
        "will",
        "blurBackground",
        "closing\x2018",
        "forEach",
        "devicePixelRatio",
        "getAudioTracks",
        "full",
        "pliCount",
        "img",
        "closing\x20rpc\x20due\x20to\x20hangup\x20event",
        "setupIncoming",
        "badStreamList",
        "meshcastBitrate",
        "1023612fLSRJR",
        "allowDownloads",
        "site-not-responsive",
        "art",
        "fr1",
        "decrypted",
        "maxviewers_url",
        "OPTIMIZED\x20AUDIO\x20ENABLED;\x20zero\x20bitrate",
        "brought",
        "mutedStateMixer",
        "period",
        "saw",
        "Failed\x20to\x20determine\x20size\x20of\x20element",
        "und",
        "poor",
        "ceil",
        "agc_url",
        "head4",
        "closePC",
        "New\x20Label:\x20",
        "his",
        "most",
        "iframeDetails_",
        "flower",
        "realTimeVideo",
        "cae1",
        "bitrate",
        "sendFile",
        "calculateScale",
        "requestStream",
        "maxBandwidth",
        "joinRoom",
        "shout",
        "case",
        "maxvideobitrate",
        "screenShareElement",
        "canvasCtx",
        "Trying\x20to\x20set\x20",
        "fat",
        "unit",
        "party",
        "directMigrateIssue",
        "pastSlots",
        "wssid",
        "keep",
        "click",
        "spring",
        "Couldn\x27t\x20parse\x20JSON;\x20will\x20attempt\x20as\x20ArrayBuffer\x20UINT8ARRAY",
        "bind",
        "hash",
        "equalizer",
        "requestSceneUpdate",
        "createBuffer",
        "Remote\x20peer\x20disconnected.\x20Due\x20to\x20enhanced\x20security,\x20please\x20refresh\x20to\x20create\x20a\x20new\x20connection.",
        "whole",
        "writeFloatBE",
        "sing",
        "hostname",
        "effectValue_default",
        "WEBRTC\x20CONNECTION\x20OPEN",
        "dropped\x20candidate\x20due\x20to\x20filter",
        "serve",
        "cross",
        "setVideoBitrate",
        "office",
        "village",
        "pick",
        "pop",
        "log",
        "mixMinus",
        "pptControls",
        "pingTimeout",
        "picture",
        "magnet",
        "session.setupScreenShareAddon",
        "selectImageTFLITE_contents",
        "colorVideosBackground",
        "system",
        "MESHCAST();",
        "sign",
        "processRPCSOnMessage",
        "port",
        "five",
        "rain",
        "already\x20connected\x201",
        "little",
        "transferred",
        "muted",
        "remote-mute-state",
        "wood",
        "muted_activeSpeaker",
        "writable",
        "Created\x20transfer\x20channel",
        "subtract",
        "many",
        "plain",
        "hostedFiles",
        "walk",
        "showControls",
        "enabled",
        "savedBitrate",
        "codec",
        "wss://debug.vdo.ninja:443",
        "couldn\x27t\x20set\x20preferred\x20audio\x20codec",
        "defaultMedia",
        "head",
        "voiceMeter",
        "pull",
        "chunked",
        "constructor",
        "method",
        "currentAudioConstraints",
        "con",
        "country",
        "Connection\x20to\x20Control\x20Server\x20lost.\x0a\x0aAuto-reconnect\x20is\x20partially\x20implemented",
        "too",
        "obs.ninja/",
        "screenElement",
        "password",
        "sending\x20message\x20via\x20WSS\x20as\x20WebRTC\x20failed\x20to\x20send\x20message;\x20RTC\x20peers\x20only",
        "endViewConnection",
        "[data-action-type=\x22order-value\x22][data--u-u-i-d=\x22",
        "removed\x20from\x20SDP:\x20\x27a=extmap:3\x20urn:3gpp:video-orientation\x0d\x0a\x27",
        "fell",
        "setParameters",
        "stereo\x20enabled",
        "atom",
        "director-connected",
        "src",
        "removeTrack",
        "Track\x20stopped",
        "session.watchTimeoutList\x20no\x20longer\x20exists;\x20won\x27t\x20retry.",
        "chunks",
        "coDirector",
        "sensors",
        "noiframe",
        "videosource_",
        "version",
        "count",
        "surfaceSwitching",
        "nine",
        "getAudioSettings",
        "chunkedVideoEnabled",
        "migrate",
        "difficult",
        "widget-src",
        "scale\x20set!",
        "need",
        "closeRPC",
        "promptAccess",
        "someonejoined",
        "includeRTT",
        "https://",
        "closeTimeout\x20cancelled;\x204",
        "sendOnNewConnect",
        "Raised\x20hand",
        "tire",
        "watchTimeoutList:",
        "maxviewers",
        "mouth",
        "directorSettings",
        "limitTotalBitrateAll",
        "security",
        "stopWriter",
        "sendMessage",
        "liquid",
        "vowel",
        "hideClock",
        "chick",
        "watchStream",
        "watchTimeoutList2:",
        "refreshScale",
        "gave",
        "tiny",
        "https://meshcast.io/view.html?api=",
        "directorUUID",
        "alpha",
        "all",
        "motion",
        "playsinline",
        "plural",
        "more",
        "audioConstraints",
        "token",
        "meshcastScale",
        "done\x20setting\x20degrad",
        "new",
        "bypass",
        "weight",
        "waitingWatchList",
        "chunked_mode_audio",
        "pos",
        "broad",
        "shine",
        "offset",
        "batteryState",
        "recording_audio_compressor_type",
        "nopreview",
        "also",
        "meshcastScreenShareCodec",
        "consonant",
        "pipe",
        "frameWriter",
        "throttle",
        "large",
        "season",
        "Publisher\x20will\x20be\x20ignored\x20due\x20to\x20max\x20connections\x20already\x20hit",
        "webCodecAudio",
        "request\x20focus\x20change:\x20",
        "Someone\x20sent\x20us\x20an\x20ANSWER\x20sdp??",
        "disabled",
        "getOptimizedScale:\x20",
        "label=",
        "URL",
        "ran",
        "maxframeRate_q2",
        "iOS\x20devices\x20do\x20not\x20support\x20dynamic\x20bitrates\x20correctly;\x20skipping",
        "value",
        "\x20as\x20preferred\x20audio\x20codec\x20by\x20viewer\x20via\x20API\x20(offer)",
        "build",
        "behind",
        "does\x20any\x20audio\x20exist?",
        "food",
        "totalRoomBitrate_default",
        "solo",
        "expect",
        "substance",
        "debug",
        "chart",
        "while",
        "A\x20Guest\x20joined\x20the\x20room",
        "sell",
        "addALabel",
        "promise_audio",
        "fly",
        "usual",
        "region",
        "onicecandidate",
        "viewheight",
        "container_director",
        "sharp",
        "dimension:\x20",
        "stun:stun.l.google.com:19302",
        "targetAudioBitrate",
        "bye",
        "ball",
        "push",
        "roomid",
        "depend",
        "under",
        "done",
        "form",
        "not\x20record\x20button\x20detected;\x20can\x27t\x20update\x20time\x20since\x20started\x20recording",
        "EastSideRepresentZ",
        "speakerMute",
        "Meschast\x20canvas\x20not\x20working",
        "webrtc-is-blocked",
        "directorView",
        "recording_audio_gain",
        "offerSDP",
        "Update\x20Mixer\x20Event\x20on\x20REsize\x20SET",
        "video_muted_init",
        "request",
        "order",
        "retryTimeout",
        "dataReceived",
        "decoder",
        "bandwidth\x20set\x20e!\x20",
        "audioCtx",
        "track",
        "no\x20reconnect\x20even\x20after\x205s;\x20closing",
        "reduce",
        "girl",
        "every",
        "content-type",
        "iceTimer",
    ];
    _0x13c2 = function () {
        return _0x468f54;
    };
    return _0x13c2();
}
function processTURNs(_0x3b4caa) {
    var _0x274005 = _0x4a1c61,
        _0x390957 = getTimezone();
    for (var _0x50f45c = 0x0; _0x50f45c < _0x3b4caa["length"]; _0x50f45c++) {
        var _0x3a717b = Math["abs"](_0x3b4caa[_0x50f45c]["tz"] - _0x390957);
        Math[_0x274005(0x4da)](_0x3a717b - 0x3c * 0x18) < _0x3a717b && (_0x3a717b = Math["abs"](_0x3a717b - 0x3c * 0x18)), (_0x3b4caa[_0x50f45c][_0x274005(0x412)] = _0x3a717b);
    }
    _0x3b4caa[_0x274005(0x6a9)](compare_deltas);
    var _0x154c7d = [],
        _0x2df491 = 0x0,
        _0x524490 = 0x0;
    for (var _0x50f45c = 0x0; _0x50f45c < _0x3b4caa[_0x274005(0x1bf)]; _0x50f45c++) {
        try {
            if (session[_0x274005(0x343)] && _0x3b4caa[_0x50f45c][_0x274005(0x52e)] == session[_0x274005(0x656)]) continue;
            else {
                if (session["forceTcpMode"] && _0x3b4caa[_0x50f45c][_0x274005(0x52e)]) continue;
                else {
                    if (session[_0x274005(0x343)] && session[_0x274005(0x343)] !== !![] && session["speedtest"] !== _0x3b4caa[_0x50f45c]["locale"]) continue;
                }
            }
        } catch (_0x3210b7) {
            errorlog(_0x3210b7);
        }
        if (_0x3b4caa[_0x50f45c]["udp"] && _0x524490 < 0x2) _0x154c7d[_0x274005(0x874)](_0x3b4caa[_0x50f45c]), (_0x524490 += 0x1);
        else !_0x3b4caa[_0x50f45c][_0x274005(0x52e)] && _0x2df491 < 0x1 && (_0x154c7d[_0x274005(0x874)](_0x3b4caa[_0x50f45c]), (_0x2df491 += 0x1));
    }
    return _0x154c7d;
}
async function setupSpeedtest() {
    var _0x54037c = _0x4a1c61;
    isIFrame && session[_0x54037c(0x343)] && (await chooseBestTURN());
}
async function getTURNList() {
    var _0x3a393e = _0x4a1c61,
        _0x46b8e2 = [],
        _0x5ca1d2 = Date[_0x3a393e(0x312)]() - 0x180f0b4b67c,
        _0x3a55f2 = "",
        _0x49436e = _0x3a393e(0x598);
    if (location["hostname"] === _0x3a393e(0x608)) _0x49436e = _0x3a393e(0x198);
    else location[_0x3a393e(0x7b7)] === "vdo.socialstream.ninja" && (_0x49436e = "https://turnservers.socialstream.ninja/");
    if (session[_0x3a393e(0x343)]) (_0x49436e += _0x3a393e(0x343)), typeof session["speedtest"] == _0x3a393e(0x987) && (_0x3a55f2 = _0x3a393e(0x893) + session[_0x3a393e(0x343)]);
    else {
        if (session[_0x3a393e(0x1c9)] && typeof session[_0x3a393e(0x1c9)] == _0x3a393e(0x987)) _0x3a55f2 = _0x3a393e(0x893) + session["privacy"];
        else
            try {
                _0x46b8e2 = getStorage("turnlist") || ![];
                if (_0x46b8e2)
                    return (
                        !session["stunServers"] && (session["stunServers"] = []),
                        (_0x46b8e2 = processTURNs(_0x46b8e2)),
                        !_0x46b8e2 && (_0x46b8e2 = []),
                        (session[_0x3a393e(0x5f8)] = { iceServers: session["stunServers"], sdpSemantics: "unified-plan" }),
                        session[_0x3a393e(0x1c9)] && (session[_0x3a393e(0x5f8)][_0x3a393e(0x454)] = _0x3a393e(0x9c6)),
                        (session[_0x3a393e(0x5f8)][_0x3a393e(0x65e)] = session[_0x3a393e(0x5f8)][_0x3a393e(0x65e)][_0x3a393e(0x8b5)](_0x46b8e2)),
                        !![]
                    );
                else _0x46b8e2 = [];
            } catch (_0x488e03) {
                errorlog(_0x488e03), (_0x46b8e2 = []);
            }
    }
    return (
        await fetchWithTimeout(_0x49436e + _0x3a393e(0x224) + _0x5ca1d2 + _0x3a55f2, 0x7d0)
            [_0x3a393e(0x741)]((_0x2462ab) => _0x2462ab["json"]())
            [_0x3a393e(0x741)](function (_0x1407c1) {
                var _0x3b764c = _0x3a393e;
                _0x1407c1[_0x3b764c(0x34e)][_0x3b764c(0x774)]((_0x3d5873) => {
                    var _0x4f75de = _0x3b764c;
                    try {
                        if (session[_0x4f75de(0x656)] && _0x3d5873["udp"]) {
                        } else _0x46b8e2[_0x4f75de(0x874)](_0x3d5873);
                    } catch (_0xefd2a3) {
                        errorlog(_0xefd2a3);
                    }
                });
                if (isIFrame && _0x1407c1["options"] && session[_0x3b764c(0x343)] && !session[_0x3b764c(0xa1b)]) pokeIframeAPI("available-speedtest-servers", _0x1407c1[_0x3b764c(0x64d)]);
                else !session[_0x3b764c(0x343)] && setStorage(_0x3b764c(0x8f9), _0x1407c1["servers"], 0x1);
            })
            [_0x3a393e(0x524)](function (_0xf11141) {
                var _0x4a3d21 = _0x3a393e;
                warnlog(_0xf11141),
                    (_0x46b8e2 = [
                        { username: "steve", credential: "setupYourOwnPlease", urls: ["turns:www.turn.obs.ninja:443"], tz: 0x12c, udp: ![], locale: "cae1" },
                        { username: "steve", credential: _0x4a3d21(0x53f), urls: [_0x4a3d21(0x349)], tz: 0x12c, udp: !![], locale: _0x4a3d21(0x797) },
                        { username: _0x4a3d21(0x18e), credential: _0x4a3d21(0x4c8), urls: [_0x4a3d21(0x3ee)], tz: 0x1e0, udp: !![], locale: _0x4a3d21(0x55d) },
                        { username: _0x4a3d21(0x18e), credential: _0x4a3d21(0xa02), urls: ["turn:turn-eu4.vdo.ninja:3478"], tz: -0x46, udp: !![], locale: _0x4a3d21(0x33c) },
                        { username: _0x4a3d21(0x6a0), credential: _0x4a3d21(0x2c1), urls: [_0x4a3d21(0x3a8)], tz: -0x3c, udp: !![], locale: _0x4a3d21(0x782) },
                        { username: _0x4a3d21(0x2df), credential: _0x4a3d21(0x53f), urls: [_0x4a3d21(0x6e7)], tz: -0x3c, udp: ![], locale: _0x4a3d21(0x350) },
                        { username: "steve", credential: _0x4a3d21(0x53f), urls: ["turn:turn-eu1.vdo.ninja:3478"], tz: -0x3c, udp: !![], locale: "de1" },
                        { username: _0x4a3d21(0x18e), credential: "IchBinSteveDerNinja", urls: [_0x4a3d21(0x145)], tz: -0x3c, udp: !![], locale: _0x4a3d21(0x33d) },
                        { username: "vdoninja", credential: _0x4a3d21(0x207), urls: ["turns:www.turn.vdo.ninja:443"], tz: -0x3c, udp: ![], locale: _0x4a3d21(0x33d) },
                        { username: _0x4a3d21(0x18e), credential: _0x4a3d21(0x87b), urls: ["turn:turn-use1.vdo.ninja:3478"], tz: 0x12c, udp: !![], locale: _0x4a3d21(0x8a8) },
                    ]),
                    (_0x46b8e2 = processTURNs(_0x46b8e2));
            }),
        !session["stunServers"] && (session[_0x3a393e(0x6f4)] = []),
        (session["configuration"] = { iceServers: session[_0x3a393e(0x6f4)], sdpSemantics: _0x3a393e(0x435) }),
        session[_0x3a393e(0x1c9)] && (session["configuration"]["iceTransportPolicy"] = _0x3a393e(0x9c6)),
        !_0x46b8e2 && (_0x46b8e2 = []),
        (session[_0x3a393e(0x5f8)][_0x3a393e(0x65e)] = session[_0x3a393e(0x5f8)][_0x3a393e(0x65e)][_0x3a393e(0x8b5)](_0x46b8e2)),
        log("Remote\x20TURN\x20LIST\x20Loaded\x20**\x20"),
        !![]
    );
}
var TURNPromise = null;
async function chooseBestTURN() {
    var _0x3f911d = _0x4a1c61;
    if (session[_0x3f911d(0x5f8)]) return;
    return !TURNPromise ? (TURNPromise = getTURNList()) : warnlog(_0x3f911d(0x58b)), await TURNPromise;
}
var WebRTC = {};
WebRTC[_0x4a1c61(0x5b9)] = (function () {
    var _0x4e3749 = _0x4a1c61,
        _0x531b4d = {};
    function _0x2143a0() {
        var _0x585fe7 = _0x3e5e,
            _0x531702,
            _0x2c5f95,
            _0x455570 = new Promise((_0x1a1f22, _0x31f9a2) => {
                (_0x531702 = _0x1a1f22), (_0x2c5f95 = _0x31f9a2);
            });
        return (_0x455570[_0x585fe7(0x48f)] = _0x531702), (_0x455570[_0x585fe7(0x2b8)] = _0x2c5f95), _0x455570;
    }
    (_0x531b4d[_0x4e3749(0x750)] = function (_0x4edab3 = 0x7) {
        var _0x15e152 = _0x4e3749,
            _0x1a6185 = "",
            _0x252d01 = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
        for (var _0x30ad46 = 0x0; _0x30ad46 < _0x4edab3; _0x30ad46++) {
            _0x1a6185 += _0x252d01[_0x15e152(0x2ac)](Math[_0x15e152(0x76d)](Math["random"]() * _0x252d01["length"]));
        }
        try {
            (_0x1a6185 = _0x1a6185[_0x15e152(0x32f)]("AD", "vDAv")),
                (_0x1a6185 = _0x1a6185[_0x15e152(0x32f)]("Ad", "vdAv")),
                (_0x1a6185 = _0x1a6185["replaceAll"]("ad", _0x15e152(0x238))),
                (_0x1a6185 = _0x1a6185[_0x15e152(0x32f)]("aD", _0x15e152(0x421)));
        } catch (_0x5822b4) {
            errorlog(_0x5822b4);
        }
        return log(_0x1a6185), _0x1a6185;
    }),
        (_0x531b4d[_0x4e3749(0x8c0)] = function (_0x14cc74 = 0x7) {
            var _0x42ca45 = _0x4e3749,
                _0x222d85 = "",
                _0x2488f1 = [
                    _0x42ca45(0x740),
                    "of",
                    "to",
                    "and",
                    "a",
                    "in",
                    "is",
                    "it",
                    "you",
                    _0x42ca45(0x69a),
                    "he",
                    _0x42ca45(0x760),
                    "for",
                    "on",
                    _0x42ca45(0x26c),
                    _0x42ca45(0x923),
                    "as",
                    "I",
                    _0x42ca45(0x792),
                    "they",
                    "be",
                    "at",
                    _0x42ca45(0x9b7),
                    _0x42ca45(0x24b),
                    _0x42ca45(0x22f),
                    _0x42ca45(0x6d5),
                    "or",
                    _0x42ca45(0x938),
                    "by",
                    _0x42ca45(0x2c2),
                    _0x42ca45(0x668),
                    "what",
                    _0x42ca45(0x15c),
                    "we",
                    _0x42ca45(0x159),
                    _0x42ca45(0x701),
                    "other",
                    _0x42ca45(0xa1d),
                    _0x42ca45(0x82f),
                    _0x42ca45(0x304),
                    _0x42ca45(0x6c2),
                    "up",
                    _0x42ca45(0x3f0),
                    "your",
                    "how",
                    _0x42ca45(0x176),
                    "an",
                    "each",
                    "she",
                    "which",
                    "do",
                    "their",
                    "time",
                    "if",
                    _0x42ca45(0x771),
                    _0x42ca45(0x61d),
                    _0x42ca45(0x19a),
                    _0x42ca45(0x7dc),
                    "then",
                    _0x42ca45(0x214),
                    _0x42ca45(0x5a9),
                    _0x42ca45(0x636),
                    _0x42ca45(0x686),
                    "so",
                    _0x42ca45(0x676),
                    _0x42ca45(0x93e),
                    _0x42ca45(0x3c2),
                    _0x42ca45(0x215),
                    _0x42ca45(0x1f8),
                    _0x42ca45(0x2f5),
                    _0x42ca45(0x501),
                    _0x42ca45(0x770),
                    "has",
                    _0x42ca45(0x4e4),
                    _0x42ca45(0x833),
                    "day",
                    _0x42ca45(0x8c9),
                    "go",
                    _0x42ca45(0x14e),
                    "did",
                    _0x42ca45(0x56d),
                    "sound",
                    "no",
                    _0x42ca45(0x793),
                    "people",
                    "my",
                    _0x42ca45(0x46d),
                    _0x42ca45(0x3b0),
                    _0x42ca45(0x463),
                    _0x42ca45(0x89a),
                    _0x42ca45(0x654),
                    _0x42ca45(0x4bd),
                    _0x42ca45(0x20c),
                    _0x42ca45(0x9b3),
                    "down",
                    _0x42ca45(0x153),
                    "been",
                    _0x42ca45(0x312),
                    _0x42ca45(0xa18),
                    "any",
                    _0x42ca45(0x838),
                    _0x42ca45(0x9b2),
                    _0x42ca45(0x273),
                    _0x42ca45(0xa33),
                    _0x42ca45(0x31d),
                    _0x42ca45(0x6c9),
                    "made",
                    "live",
                    _0x42ca45(0x6d3),
                    "after",
                    _0x42ca45(0x604),
                    _0x42ca45(0x7d3),
                    _0x42ca45(0x40e),
                    _0x42ca45(0x936),
                    _0x42ca45(0x348),
                    _0x42ca45(0x729),
                    _0x42ca45(0x6c4),
                    _0x42ca45(0x706),
                    _0x42ca45(0x88f),
                    "good",
                    "me",
                    "give",
                    "our",
                    _0x42ca45(0x877),
                    _0x42ca45(0x37d),
                    _0x42ca45(0x2e2),
                    _0x42ca45(0x1a6),
                    _0x42ca45(0x208),
                    _0x42ca45(0x879),
                    "sentence",
                    _0x42ca45(0x9d1),
                    _0x42ca45(0x281),
                    "say",
                    _0x42ca45(0x507),
                    _0x42ca45(0x930),
                    _0x42ca45(0x38c),
                    _0x42ca45(0x989),
                    _0x42ca45(0x199),
                    _0x42ca45(0x149),
                    _0x42ca45(0x39f),
                    _0x42ca45(0x9f8),
                    "before",
                    _0x42ca45(0x644),
                    _0x42ca45(0x219),
                    _0x42ca45(0x3c4),
                    _0x42ca45(0x9f3),
                    _0x42ca45(0x7f1),
                    _0x42ca45(0x2ec),
                    "tell",
                    "does",
                    _0x42ca45(0x2d3),
                    _0x42ca45(0x583),
                    _0x42ca45(0x9a1),
                    _0x42ca45(0x5bd),
                    _0x42ca45(0x577),
                    _0x42ca45(0x844),
                    _0x42ca45(0x53c),
                    _0x42ca45(0x929),
                    "end",
                    _0x42ca45(0x25b),
                    _0x42ca45(0x5dc),
                    _0x42ca45(0x8eb),
                    _0x42ca45(0x1f2),
                    _0x42ca45(0x7cf),
                    _0x42ca45(0x84a),
                    _0x42ca45(0x680),
                    "add",
                    "even",
                    _0x42ca45(0x4ce),
                    _0x42ca45(0x8f6),
                    _0x42ca45(0x2ef),
                    _0x42ca45(0x1f7),
                    _0x42ca45(0x673),
                    _0x42ca45(0x65b),
                    "follow",
                    _0x42ca45(0x9fa),
                    _0x42ca45(0x9eb),
                    "ask",
                    _0x42ca45(0x946),
                    _0x42ca45(0x14d),
                    _0x42ca45(0x6b1),
                    _0x42ca45(0x8c5),
                    _0x42ca45(0x722),
                    "off",
                    _0x42ca45(0x811),
                    "house",
                    _0x42ca45(0x7c6),
                    _0x42ca45(0x5f1),
                    "us",
                    _0x42ca45(0x554),
                    _0x42ca45(0x520),
                    _0x42ca45(0x9ce),
                    _0x42ca45(0x5ad),
                    "world",
                    _0x42ca45(0x2cd),
                    _0x42ca45(0x859),
                    _0x42ca45(0x52b),
                    _0x42ca45(0x646),
                    _0x42ca45(0x30a),
                    _0x42ca45(0x7e7),
                    _0x42ca45(0x363),
                    "own",
                    "page",
                    "should",
                    _0x42ca45(0x7ef),
                    _0x42ca45(0x2a7),
                    "answer",
                    _0x42ca45(0x5b7),
                    _0x42ca45(0x90a),
                    _0x42ca45(0x8a2),
                    _0x42ca45(0x908),
                    _0x42ca45(0x6cd),
                    _0x42ca45(0x745),
                    "cover",
                    _0x42ca45(0x85c),
                    _0x42ca45(0x14b),
                    _0x42ca45(0x325),
                    _0x42ca45(0x138),
                    "state",
                    _0x42ca45(0x7aa),
                    _0x42ca45(0x6ae),
                    _0x42ca45(0x552),
                    _0x42ca45(0x36f),
                    "let",
                    _0x42ca45(0x600),
                    _0x42ca45(0x4c4),
                    _0x42ca45(0x99f),
                    _0x42ca45(0x7bc),
                    _0x42ca45(0x6c1),
                    "hard",
                    _0x42ca45(0x4ba),
                    "might",
                    _0x42ca45(0x9d0),
                    _0x42ca45(0x789),
                    _0x42ca45(0x256),
                    _0x42ca45(0x503),
                    _0x42ca45(0x522),
                    _0x42ca45(0x957),
                    _0x42ca45(0x3e2),
                    "run",
                    _0x42ca45(0xa26),
                    _0x42ca45(0x863),
                    _0x42ca45(0x305),
                    "close",
                    _0x42ca45(0x2b3),
                    _0x42ca45(0x46f),
                    _0x42ca45(0x17f),
                    "few",
                    _0x42ca45(0x9d9),
                    _0x42ca45(0xa42),
                    _0x42ca45(0x52d),
                    "together",
                    _0x42ca45(0x450),
                    _0x42ca45(0x191),
                    _0x42ca45(0x571),
                    _0x42ca45(0x3d3),
                    _0x42ca45(0x6cc),
                    _0x42ca45(0x7df),
                    _0x42ca45(0x96d),
                    _0x42ca45(0xa39),
                    _0x42ca45(0x1ca),
                    "group",
                    _0x42ca45(0x9c5),
                    _0x42ca45(0x226),
                    _0x42ca45(0x57f),
                    _0x42ca45(0x414),
                    _0x42ca45(0x317),
                    _0x42ca45(0x2bf),
                    _0x42ca45(0x540),
                    _0x42ca45(0x66a),
                    "mile",
                    _0x42ca45(0x8aa),
                    _0x42ca45(0x8c4),
                    _0x42ca45(0x93b),
                    _0x42ca45(0x897),
                    "second",
                    _0x42ca45(0x3ec),
                    _0x42ca45(0x3e4),
                    "took",
                    "science",
                    _0x42ca45(0x89e),
                    _0x42ca45(0x4a3),
                    _0x42ca45(0x235),
                    _0x42ca45(0x309),
                    _0x42ca45(0x672),
                    _0x42ca45(0x99a),
                    _0x42ca45(0x9b5),
                    "stop",
                    _0x42ca45(0x724),
                    _0x42ca45(0x5de),
                    _0x42ca45(0x988),
                    _0x42ca45(0x610),
                    _0x42ca45(0x6bb),
                    _0x42ca45(0x5e6),
                    _0x42ca45(0x5c0),
                    _0x42ca45(0x3fc),
                    "face",
                    _0x42ca45(0x7d7),
                    _0x42ca45(0x453),
                    _0x42ca45(0x4e7),
                    _0x42ca45(0x7dd),
                    _0x42ca45(0x88e),
                    _0x42ca45(0x869),
                    _0x42ca45(0x98e),
                    _0x42ca45(0x595),
                    _0x42ca45(0x543),
                    _0x42ca45(0x2fb),
                    "red",
                    "list",
                    _0x42ca45(0x8ea),
                    _0x42ca45(0x27f),
                    "talk",
                    "bird",
                    "soon",
                    _0x42ca45(0x32d),
                    _0x42ca45(0x3f9),
                    "family",
                    _0x42ca45(0x4fa),
                    "pose",
                    _0x42ca45(0x403),
                    _0x42ca45(0xa25),
                    _0x42ca45(0x574),
                    _0x42ca45(0x29a),
                    _0x42ca45(0x75b),
                    "black",
                    _0x42ca45(0x18b),
                    _0x42ca45(0x709),
                    "class",
                    _0x42ca45(0x95e),
                    _0x42ca45(0x699),
                    "happen",
                    _0x42ca45(0x949),
                    _0x42ca45(0x910),
                    _0x42ca45(0x767),
                    _0x42ca45(0x711),
                    _0x42ca45(0x242),
                    _0x42ca45(0x885),
                    _0x42ca45(0x892),
                    "south",
                    _0x42ca45(0x3fd),
                    "piece",
                    _0x42ca45(0x5cb),
                    _0x42ca45(0x402),
                    _0x42ca45(0x2ed),
                    _0x42ca45(0x217),
                    _0x42ca45(0x9c2),
                    _0x42ca45(0x7b4),
                    _0x42ca45(0x92c),
                    "space",
                    _0x42ca45(0x52f),
                    _0x42ca45(0x6b2),
                    _0x42ca45(0x5b4),
                    "better",
                    "true\x20.",
                    _0x42ca45(0x36c),
                    _0x42ca45(0x295),
                    _0x42ca45(0x7d0),
                    _0x42ca45(0x19d),
                    _0x42ca45(0x575),
                    _0x42ca45(0x5db),
                    "hold",
                    "west",
                    _0x42ca45(0x9a3),
                    _0x42ca45(0x6b7),
                    _0x42ca45(0x723),
                    "fast",
                    _0x42ca45(0xa38),
                    _0x42ca45(0x7b6),
                    _0x42ca45(0x2fa),
                    _0x42ca45(0x1dd),
                    "table",
                    _0x42ca45(0x69f),
                    _0x42ca45(0x31a),
                    _0x42ca45(0x41d),
                    _0x42ca45(0x319),
                    _0x42ca45(0x9e6),
                    _0x42ca45(0x307),
                    _0x42ca45(0x824),
                    _0x42ca45(0x2a2),
                    "war",
                    _0x42ca45(0x730),
                    "against",
                    "pattern",
                    _0x42ca45(0x400),
                    _0x42ca45(0x73a),
                    _0x42ca45(0x44e),
                    "person",
                    _0x42ca45(0x32c),
                    _0x42ca45(0x7bb),
                    _0x42ca45(0x329),
                    "road",
                    _0x42ca45(0x470),
                    _0x42ca45(0x7d1),
                    _0x42ca45(0x9ef),
                    _0x42ca45(0x551),
                    _0x42ca45(0x7e9),
                    _0x42ca45(0x731),
                    _0x42ca45(0x76a),
                    "voice",
                    _0x42ca45(0x7a5),
                    _0x42ca45(0x764),
                    _0x42ca45(0x73b),
                    _0x42ca45(0x708),
                    _0x42ca45(0x320),
                    _0x42ca45(0x868),
                    _0x42ca45(0x1ad),
                    "lead",
                    _0x42ca45(0x60e),
                    _0x42ca45(0x2b0),
                    _0x42ca45(0x292),
                    _0x42ca45(0x6dd),
                    _0x42ca45(0x92f),
                    _0x42ca45(0x2aa),
                    _0x42ca45(0x95f),
                    _0x42ca45(0x479),
                    _0x42ca45(0x39c),
                    _0x42ca45(0x48b),
                    _0x42ca45(0x2bb),
                    _0x42ca45(0x560),
                    _0x42ca45(0x748),
                    _0x42ca45(0x2b5),
                    _0x42ca45(0x655),
                    _0x42ca45(0x878),
                    _0x42ca45(0x8e5),
                    "drive",
                    _0x42ca45(0x585),
                    _0x42ca45(0x1df),
                    _0x42ca45(0x962),
                    _0x42ca45(0x698),
                    _0x42ca45(0x2d7),
                    "final",
                    _0x42ca45(0x82a),
                    _0x42ca45(0x899),
                    "oh",
                    "quick",
                    "develop",
                    _0x42ca45(0x5e4),
                    _0x42ca45(0x26e),
                    _0x42ca45(0xa2d),
                    _0x42ca45(0x721),
                    "strong",
                    "special",
                    _0x42ca45(0x1bc),
                    _0x42ca45(0x85a),
                    _0x42ca45(0xa2b),
                    "tail",
                    _0x42ca45(0x39d),
                    "fact",
                    _0x42ca45(0x428),
                    _0x42ca45(0x2cf),
                    _0x42ca45(0x3c7),
                    _0x42ca45(0x5df),
                    _0x42ca45(0x4b7),
                    _0x42ca45(0xa30),
                    _0x42ca45(0x478),
                    _0x42ca45(0x777),
                    _0x42ca45(0x4e0),
                    _0x42ca45(0x5ce),
                    "object",
                    _0x42ca45(0x1be),
                    _0x42ca45(0x905),
                    _0x42ca45(0x1eb),
                    _0x42ca45(0x437),
                    _0x42ca45(0x63b),
                    "foot",
                    _0x42ca45(0x7cb),
                    _0x42ca45(0x511),
                    "test",
                    _0x42ca45(0x6b0),
                    _0x42ca45(0x1b6),
                    _0x42ca45(0x28e),
                    "gold",
                    _0x42ca45(0x4e8),
                    _0x42ca45(0x8dc),
                    "stead",
                    _0x42ca45(0x25e),
                    "wonder",
                    "laugh",
                    _0x42ca45(0x752),
                    _0x42ca45(0x72a),
                    _0x42ca45(0x854),
                    _0x42ca45(0x8b0),
                    _0x42ca45(0x206),
                    _0x42ca45(0x8a4),
                    _0x42ca45(0x99c),
                    _0x42ca45(0x38b),
                    "miss",
                    _0x42ca45(0x786),
                    _0x42ca45(0x36b),
                    "snow",
                    _0x42ca45(0x81a),
                    "bring",
                    _0x42ca45(0x1c8),
                    _0x42ca45(0x70e),
                    _0x42ca45(0x4b3),
                    _0x42ca45(0x660),
                    "paint",
                    _0x42ca45(0x427),
                    "among",
                    "grand",
                    _0x42ca45(0x873),
                    _0x42ca45(0x3ff),
                    _0x42ca45(0x1b9),
                    _0x42ca45(0x6ac),
                    _0x42ca45(0x1b5),
                    "am",
                    _0x42ca45(0x5fa),
                    _0x42ca45(0x488),
                    _0x42ca45(0x659),
                    _0x42ca45(0x2b9),
                    _0x42ca45(0x5be),
                    _0x42ca45(0x298),
                    "wide",
                    _0x42ca45(0x89d),
                    "material",
                    _0x42ca45(0x2c9),
                    _0x42ca45(0x515),
                    _0x42ca45(0x328),
                    _0x42ca45(0x71b),
                    _0x42ca45(0x83a),
                    "general",
                    _0x42ca45(0xa17),
                    "matter",
                    _0x42ca45(0x674),
                    _0x42ca45(0x4a2),
                    _0x42ca45(0x4d2),
                    _0x42ca45(0x704),
                    "syllable",
                    "felt",
                    "perhaps",
                    _0x42ca45(0x7c0),
                    "sudden",
                    _0x42ca45(0x808),
                    "square",
                    _0x42ca45(0x98f),
                    _0x42ca45(0x1bf),
                    _0x42ca45(0x267),
                    _0x42ca45(0x781),
                    "subject",
                    _0x42ca45(0x86a),
                    _0x42ca45(0x6d9),
                    _0x42ca45(0x1a1),
                    _0x42ca45(0x477),
                    _0x42ca45(0x3f3),
                    _0x42ca45(0x17b),
                    _0x42ca45(0x310),
                    _0x42ca45(0x2a9),
                    _0x42ca45(0x8b6),
                    _0x42ca45(0x345),
                    _0x42ca45(0x45f),
                    "forest",
                    _0x42ca45(0x1cb),
                    "race",
                    _0x42ca45(0x45d),
                    _0x42ca45(0x68a),
                    _0x42ca45(0x91e),
                    _0x42ca45(0x8b9),
                    _0x42ca45(0x263),
                    _0x42ca45(0x638),
                    _0x42ca45(0x9d4),
                    _0x42ca45(0x216),
                    _0x42ca45(0x918),
                    _0x42ca45(0x16a),
                    "catch",
                    "mount",
                    _0x42ca45(0x591),
                    "sky",
                    _0x42ca45(0x180),
                    _0x42ca45(0x89b),
                    _0x42ca45(0x3af),
                    _0x42ca45(0x396),
                    _0x42ca45(0x493),
                    "wild",
                    _0x42ca45(0x568),
                    "kept",
                    "glass",
                    _0x42ca45(0x1d8),
                    "cow",
                    _0x42ca45(0x8f1),
                    "edge",
                    "sign",
                    _0x42ca45(0x44f),
                    _0x42ca45(0x246),
                    _0x42ca45(0x8d8),
                    _0x42ca45(0x9cf),
                    _0x42ca45(0x30e),
                    _0x42ca45(0x534),
                    _0x42ca45(0x9e5),
                    _0x42ca45(0x553),
                    _0x42ca45(0x89f),
                    _0x42ca45(0x262),
                    _0x42ca45(0x689),
                    _0x42ca45(0x411),
                    _0x42ca45(0x5c9),
                    _0x42ca45(0x795),
                    "clothe",
                    _0x42ca45(0x397),
                    _0x42ca45(0x21e),
                    "jump",
                    _0x42ca45(0x1ae),
                    _0x42ca45(0x66c),
                    _0x42ca45(0x7bf),
                    "meet",
                    _0x42ca45(0x642),
                    _0x42ca45(0x4a8),
                    _0x42ca45(0x311),
                    _0x42ca45(0x1da),
                    "metal",
                    _0x42ca45(0x24a),
                    _0x42ca45(0x874),
                    _0x42ca45(0x74f),
                    _0x42ca45(0x3e3),
                    _0x42ca45(0x57e),
                    "shall",
                    "held",
                    _0x42ca45(0x6bc),
                    _0x42ca45(0xa31),
                    _0x42ca45(0x90b),
                    _0x42ca45(0x76d),
                    _0x42ca45(0x167),
                    _0x42ca45(0x3db),
                    _0x42ca45(0x367),
                    "hill",
                    _0x42ca45(0x447),
                    _0x42ca45(0x265),
                    _0x42ca45(0x744),
                    "consider",
                    _0x42ca45(0x6a5),
                    _0x42ca45(0x1bd),
                    _0x42ca45(0x927),
                    _0x42ca45(0x58f),
                    _0x42ca45(0x963),
                    _0x42ca45(0x296),
                    _0x42ca45(0x374),
                    "tall",
                    _0x42ca45(0x3e7),
                    _0x42ca45(0x391),
                    _0x42ca45(0x331),
                    _0x42ca45(0x542),
                    _0x42ca45(0x55c),
                    _0x42ca45(0x4b8),
                    _0x42ca45(0x857),
                    _0x42ca45(0x45e),
                    _0x42ca45(0x14a),
                    _0x42ca45(0x951),
                    "excite",
                    _0x42ca45(0x500),
                    _0x42ca45(0xa1b),
                    _0x42ca45(0x4c2),
                    _0x42ca45(0x6cf),
                    _0x42ca45(0x5b2),
                    _0x42ca45(0x4b2),
                    "broke",
                    _0x42ca45(0x79f),
                    _0x42ca45(0x9f1),
                    _0x42ca45(0x4e1),
                    _0x42ca45(0x632),
                    _0x42ca45(0x38d),
                    _0x42ca45(0x588),
                    "scale",
                    _0x42ca45(0x407),
                    _0x42ca45(0x7ac),
                    _0x42ca45(0x947),
                    _0x42ca45(0x75a),
                    _0x42ca45(0x72d),
                    _0x42ca45(0x846),
                    "nation",
                    "dictionary",
                    _0x42ca45(0x339),
                    "speed",
                    _0x42ca45(0x7ec),
                    "organ",
                    _0x42ca45(0x3ca),
                    _0x42ca45(0x239),
                    "section",
                    "dress",
                    _0x42ca45(0x43c),
                    _0x42ca45(0x156),
                    "quiet",
                    _0x42ca45(0xa0f),
                    _0x42ca45(0x82b),
                    _0x42ca45(0x4f3),
                    _0x42ca45(0x43b),
                    _0x42ca45(0x547),
                    _0x42ca45(0x78c),
                    _0x42ca45(0x5a8),
                    _0x42ca45(0x446),
                    _0x42ca45(0x2db),
                    _0x42ca45(0x2d9),
                    _0x42ca45(0x1b3),
                    _0x42ca45(0x650),
                    _0x42ca45(0x5d4),
                    _0x42ca45(0x29b),
                    _0x42ca45(0x59f),
                    _0x42ca45(0x594),
                    _0x42ca45(0x173),
                    "crease",
                    _0x42ca45(0x640),
                    _0x42ca45(0x966),
                    _0x42ca45(0x688),
                    _0x42ca45(0x916),
                    _0x42ca45(0x7be),
                    _0x42ca45(0x960),
                    _0x42ca45(0x365),
                    _0x42ca45(0x81d),
                    _0x42ca45(0x42c),
                    _0x42ca45(0x1e2),
                    _0x42ca45(0x415),
                    _0x42ca45(0x584),
                    _0x42ca45(0x576),
                    _0x42ca45(0x79e),
                    "except",
                    "wrote",
                    _0x42ca45(0x20b),
                    "tone",
                    "join",
                    _0x42ca45(0x1c3),
                    _0x42ca45(0x1ee),
                    "break",
                    _0x42ca45(0x578),
                    _0x42ca45(0x2f4),
                    "rise",
                    "bad",
                    _0x42ca45(0x997),
                    _0x42ca45(0x35f),
                    _0x42ca45(0x5e8),
                    _0x42ca45(0x545),
                    _0x42ca45(0x618),
                    _0x42ca45(0x769),
                    "mix",
                    _0x42ca45(0x5cf),
                    _0x42ca45(0x2a0),
                    "cost",
                    _0x42ca45(0x74d),
                    "brown",
                    _0x42ca45(0x458),
                    _0x42ca45(0x9c4),
                    _0x42ca45(0x955),
                    "sent",
                    "choose",
                    _0x42ca45(0x7f9),
                    "fit",
                    _0x42ca45(0x5c6),
                    _0x42ca45(0x5ff),
                    _0x42ca45(0x8cf),
                    "collect",
                    "save",
                    _0x42ca45(0x66e),
                    _0x42ca45(0x253),
                    _0x42ca45(0x734),
                    _0x42ca45(0x502),
                    _0x42ca45(0x8b7),
                    _0x42ca45(0x4fe),
                    _0x42ca45(0x43e),
                    _0x42ca45(0x80e),
                    _0x42ca45(0x39a),
                    _0x42ca45(0x1c0),
                    "protect",
                    _0x42ca45(0x596),
                    "whose",
                    _0x42ca45(0x2f0),
                    _0x42ca45(0x8f7),
                    _0x42ca45(0x71e),
                    _0x42ca45(0x91c),
                    _0x42ca45(0x9e3),
                    _0x42ca45(0x788),
                    "indicate",
                    _0x42ca45(0x933),
                    "spoke",
                    _0x42ca45(0x7fc),
                    _0x42ca45(0x766),
                    _0x42ca45(0x268),
                    _0x42ca45(0x3bb),
                    _0x42ca45(0x6a3),
                    _0x42ca45(0x85f),
                    _0x42ca45(0x921),
                    _0x42ca45(0x6bf),
                    "element",
                    _0x42ca45(0x205),
                    _0x42ca45(0x47b),
                    "corner",
                    _0x42ca45(0x7a6),
                    _0x42ca45(0x260),
                    "bone",
                    _0x42ca45(0x8a0),
                    _0x42ca45(0x5f6),
                    _0x42ca45(0x1ff),
                    _0x42ca45(0x55b),
                    _0x42ca45(0x8d5),
                    "capital",
                    "wont",
                    _0x42ca45(0x3d0),
                    _0x42ca45(0x24e),
                    _0x42ca45(0x9f2),
                    _0x42ca45(0x57b),
                    _0x42ca45(0x530),
                    _0x42ca45(0x714),
                    _0x42ca45(0x6ab),
                    "operate",
                    _0x42ca45(0x4bf),
                    "necessary",
                    _0x42ca45(0x86e),
                    _0x42ca45(0x8ba),
                    _0x42ca45(0x649),
                    "neighbor",
                    "wash",
                    _0x42ca45(0x4aa),
                    "rather",
                    _0x42ca45(0x98c),
                    _0x42ca45(0x62d),
                    "compare",
                    _0x42ca45(0x245),
                    _0x42ca45(0x987),
                    _0x42ca45(0x6d8),
                    _0x42ca45(0x876),
                    _0x42ca45(0x4b9),
                    _0x42ca45(0x5c3),
                    _0x42ca45(0x6f5),
                    _0x42ca45(0x243),
                    _0x42ca45(0x371),
                    _0x42ca45(0x97f),
                    "fear",
                    "sight",
                    "thin",
                    "triangle",
                    "planet",
                    "hurry",
                    _0x42ca45(0x188),
                    "colony",
                    _0x42ca45(0x589),
                    _0x42ca45(0x1ac),
                    _0x42ca45(0x8ff),
                    _0x42ca45(0xa3a),
                    _0x42ca45(0x9b6),
                    _0x42ca45(0x352),
                    _0x42ca45(0x287),
                    _0x42ca45(0x3e0),
                    "yellow",
                    _0x42ca45(0x928),
                    "allow",
                    _0x42ca45(0x700),
                    _0x42ca45(0x5a3),
                    "spot",
                    _0x42ca45(0x4d3),
                    _0x42ca45(0x31f),
                    _0x42ca45(0x26a),
                    _0x42ca45(0x37a),
                    _0x42ca45(0x48e),
                    _0x42ca45(0x68d),
                    "block",
                    _0x42ca45(0x862),
                    "hat",
                    _0x42ca45(0x865),
                    _0x42ca45(0x4ed),
                    "company",
                    _0x42ca45(0x7db),
                    _0x42ca45(0xa10),
                    _0x42ca45(0x53b),
                    _0x42ca45(0xa23),
                    _0x42ca45(0x63a),
                    "term",
                    "opposite",
                    _0x42ca45(0x1f9),
                    _0x42ca45(0x390),
                    _0x42ca45(0xa35),
                    _0x42ca45(0x60c),
                    "arrange",
                    _0x42ca45(0x302),
                    "invent",
                    "cotton",
                    _0x42ca45(0x49d),
                    _0x42ca45(0x682),
                    _0x42ca45(0x457),
                    _0x42ca45(0x80a),
                    _0x42ca45(0x46e),
                    "noise",
                    _0x42ca45(0x249),
                    _0x42ca45(0x8e7),
                    _0x42ca45(0x9a8),
                    _0x42ca45(0x76e),
                    "stretch",
                    _0x42ca45(0x26f),
                    _0x42ca45(0x83f),
                    _0x42ca45(0x8a6),
                    "column",
                    "molecule",
                    "select",
                    _0x42ca45(0x2b7),
                    _0x42ca45(0x301),
                    _0x42ca45(0x677),
                    _0x42ca45(0x2f1),
                    _0x42ca45(0x83e),
                    _0x42ca45(0x61c),
                    _0x42ca45(0x76f),
                    _0x42ca45(0x971),
                    _0x42ca45(0x832),
                    _0x42ca45(0x370),
                    _0x42ca45(0x30f),
                    _0x42ca45(0x8ae),
                    _0x42ca45(0x5b1),
                    _0x42ca45(0x3f8),
                    "death",
                    _0x42ca45(0x434),
                    _0x42ca45(0x5d9),
                    _0x42ca45(0x13d),
                    _0x42ca45(0x84b),
                    "solution",
                    _0x42ca45(0x7c7),
                    "silver",
                    _0x42ca45(0x1c6),
                    _0x42ca45(0x94d),
                    _0x42ca45(0x4d5),
                    _0x42ca45(0x2ee),
                    _0x42ca45(0x161),
                    _0x42ca45(0x9d8),
                    _0x42ca45(0x43f),
                    _0x42ca45(0x1de),
                    _0x42ca45(0x315),
                    "steel",
                    _0x42ca45(0x13f),
                    _0x42ca45(0x586),
                    _0x42ca45(0x6d2),
                    _0x42ca45(0x334),
                    _0x42ca45(0x29f),
                    _0x42ca45(0x8d7),
                    _0x42ca45(0x357),
                    "bought",
                    _0x42ca45(0x9b1),
                    "pitch",
                    _0x42ca45(0x40f),
                    "mass",
                    "card",
                    _0x42ca45(0xa0d),
                    "rope",
                    _0x42ca45(0x65a),
                    "win",
                    _0x42ca45(0x3f5),
                    _0x42ca45(0x1ed),
                    _0x42ca45(0x20f),
                    _0x42ca45(0x2b4),
                    "tool",
                    _0x42ca45(0x67b),
                    _0x42ca45(0x6ff),
                    _0x42ca45(0x15d),
                    "valley",
                    "nor",
                    _0x42ca45(0x186),
                    "seat",
                    "arrive",
                    "master",
                    "track",
                    _0x42ca45(0x195),
                    _0x42ca45(0x926),
                    _0x42ca45(0x512),
                    "sheet",
                    _0x42ca45(0x860),
                    _0x42ca45(0x4c6),
                    _0x42ca45(0x8d6),
                    _0x42ca45(0x54a),
                    _0x42ca45(0x4fc),
                    _0x42ca45(0x728),
                    _0x42ca45(0x7a4),
                    _0x42ca45(0x3a0),
                    "original",
                    "share",
                    _0x42ca45(0x3ba),
                    "dad",
                    _0x42ca45(0x155),
                    _0x42ca45(0x9bc),
                    _0x42ca45(0x8b1),
                    _0x42ca45(0x1c1),
                    _0x42ca45(0x2dd),
                    _0x42ca45(0x46b),
                    _0x42ca45(0x17c),
                    "duck",
                    _0x42ca45(0x506),
                    _0x42ca45(0x6c5),
                    _0x42ca45(0x8fa),
                    "populate",
                    _0x42ca45(0x826),
                    _0x42ca45(0x98d),
                    _0x42ca45(0x3ac),
                    "reply",
                    _0x42ca45(0x9ea),
                    "occur",
                    _0x42ca45(0x3f7),
                    _0x42ca45(0x4c0),
                    _0x42ca45(0x3f4),
                    _0x42ca45(0x561),
                    "steam",
                    _0x42ca45(0x830),
                    "path",
                    _0x42ca45(0x823),
                    _0x42ca45(0x7c2),
                    "meant",
                    _0x42ca45(0x8bb),
                    _0x42ca45(0x30d),
                    _0x42ca45(0x56f),
                    _0x42ca45(0x244),
                ];
            for (var _0x4d48c9 = 0x0; _0x4d48c9 < 0x2; _0x4d48c9++) {
                try {
                    var _0x439dcf = parseInt(Math[_0x42ca45(0x210)]() * 0x3e8);
                    _0x222d85 += _0x2488f1[_0x439dcf];
                } catch (_0x2d8d34) {}
            }
            var _0x128964 = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
            _0x222d85 += _0x128964["charAt"](Math["floor"](Math[_0x42ca45(0x210)]() * _0x128964[_0x42ca45(0x1bf)]));
            while (_0x222d85[_0x42ca45(0x1bf)] < _0x14cc74) {
                _0x222d85 += _0x128964[_0x42ca45(0x2ac)](Math["floor"](Math[_0x42ca45(0x210)]() * _0x128964[_0x42ca45(0x1bf)]));
            }
            try {
                (_0x222d85 = _0x222d85[_0x42ca45(0x32f)]("AD", _0x42ca45(0x639))),
                    (_0x222d85 = _0x222d85[_0x42ca45(0x32f)]("Ad", _0x42ca45(0x299))),
                    (_0x222d85 = _0x222d85[_0x42ca45(0x32f)]("ad", _0x42ca45(0x238))),
                    (_0x222d85 = _0x222d85[_0x42ca45(0x32f)]("aD", "vDav"));
            } catch (_0x155d32) {
                errorlog(_0x155d32);
            }
            return log(_0x222d85), _0x222d85;
        }),
        (_0x531b4d["apiserver"] = _0x4e3749(0x693)),
        (_0x531b4d[_0x4e3749(0x474)] = null),
        (_0x531b4d[_0x4e3749(0x8fe)] = ![]),
        (_0x531b4d["noaudio"] = ![]),
        (_0x531b4d[_0x4e3749(0x372)] = ![]),
        (_0x531b4d[_0x4e3749(0x4eb)] = ![]),
        (_0x531b4d["AndroidFix"] = ![]),
        (_0x531b4d[_0x4e3749(0x40d)] = !![]),
        (_0x531b4d[_0x4e3749(0x43d)] = ![]),
        (_0x531b4d["animatedMoves"] = 0x64),
        (_0x531b4d[_0x4e3749(0x399)] = 0x8),
        (_0x531b4d[_0x4e3749(0x398)] = ![]),
        (_0x531b4d[_0x4e3749(0x4c7)] = ![]),
        (_0x531b4d[_0x4e3749(0x1ba)] = ![]),
        (_0x531b4d["allowVideos"] = ![]),
        (_0x531b4d[_0x4e3749(0x2c8)] = ![]),
        (_0x531b4d[_0x4e3749(0x3b9)] = ![]),
        (_0x531b4d["autoadd"] = ![]),
        (_0x531b4d[_0x4e3749(0x44a)] = ![]),
        (_0x531b4d[_0x4e3749(0x82e)] = ![]),
        (_0x531b4d[_0x4e3749(0x834)] = {}),
        (_0x531b4d[_0x4e3749(0x8cb)] = !![]),
        (_0x531b4d["audioEffects"] = null),
        (_0x531b4d["audioInputChannels"] = ![]),
        (_0x531b4d[_0x4e3749(0x68e)] = ![]),
        (_0x531b4d[_0x4e3749(0x25a)] = ![]),
        (_0x531b4d[_0x4e3749(0x32e)] = ![]),
        (_0x531b4d[_0x4e3749(0x2e3)] = ![]),
        (_0x531b4d["audioCtx"] = new AudioContext()),
        (_0x531b4d["audioCtxOutbound"] = ![]),
        (_0x531b4d[_0x4e3749(0x9b4)] = ![]),
        (_0x531b4d[_0x4e3749(0x2f7)] = ![]),
        (_0x531b4d[_0x4e3749(0x580)] = null),
        (_0x531b4d[_0x4e3749(0x90e)] = null),
        (_0x531b4d["noiseSuppression"] = null),
        (_0x531b4d[_0x4e3749(0x6e8)] = ![]),
        (_0x531b4d["broadcastChannel"] = ![]),
        (_0x531b4d["broadcastChannelID"] = ![]),
        (_0x531b4d["broadcastIFrame"] = ![]),
        (_0x531b4d[_0x4e3749(0x3a7)] = ![]),
        (_0x531b4d[_0x4e3749(0x274)] = ![]),
        (_0x531b4d[_0x4e3749(0x6cb)] = ![]),
        (_0x531b4d[_0x4e3749(0x8bd)] = ![]),
        (_0x531b4d["screenshareStereo"] = ![]),
        (_0x531b4d[_0x4e3749(0x747)] = ![]),
        (_0x531b4d["border"] = 0x0),
        (_0x531b4d[_0x4e3749(0x6da)] = 0x0),
        (_0x531b4d[_0x4e3749(0x33b)] = "#000"),
        (_0x531b4d["videoMargin"] = 0x0),
        (_0x531b4d[_0x4e3749(0x896)] = ![]),
        (_0x531b4d["bigmutebutton"] = ![]),
        (_0x531b4d["bitrate"] = ![]),
        (_0x531b4d[_0x4e3749(0x62c)] = ![]),
        (_0x531b4d[_0x4e3749(0x1a4)] = ![]),
        (_0x531b4d[_0x4e3749(0x815)] = ![]),
        (_0x531b4d["badStreamList"] = []),
        (_0x531b4d[_0x4e3749(0x841)] = null),
        (_0x531b4d[_0x4e3749(0x4f2)] = ![]),
        (_0x531b4d[_0x4e3749(0x772)] = ![]),
        (_0x531b4d[_0x4e3749(0x2a8)] = null),
        (_0x531b4d[_0x4e3749(0x416)] = null),
        (_0x531b4d[_0x4e3749(0x393)] = null),
        (_0x531b4d[_0x4e3749(0x24f)] = ![]),
        (_0x531b4d[_0x4e3749(0x361)] = ![]),
        (_0x531b4d[_0x4e3749(0x6f6)] = ![]),
        (_0x531b4d[_0x4e3749(0x2d4)] = ![]),
        (_0x531b4d[_0x4e3749(0x43a)] = ![]),
        (_0x531b4d[_0x4e3749(0x518)] = ![]),
        (_0x531b4d[_0x4e3749(0x5f8)] = ![]),
        (_0x531b4d["compressor"] = ![]),
        (_0x531b4d[_0x4e3749(0x65d)] = ![]),
        (_0x531b4d[_0x4e3749(0x332)] = ""),
        (_0x531b4d[_0x4e3749(0xa40)] = ""),
        (_0x531b4d["screenshareContentHint"] = ""),
        (_0x531b4d[_0x4e3749(0x313)] = ![]),
        (_0x531b4d[_0x4e3749(0x7e3)] = ![]),
        (_0x531b4d[_0x4e3749(0x5a4)] = null),
        (_0x531b4d[_0x4e3749(0x36a)] = ![]),
        (_0x531b4d["cbr"] = 0x1),
        (_0x531b4d[_0x4e3749(0x619)] = ![]),
        (_0x531b4d[_0x4e3749(0x2a3)] = null),
        (_0x531b4d[_0x4e3749(0x22b)] = {}),
        (_0x531b4d[_0x4e3749(0x7ea)] = ![]),
        (_0x531b4d[_0x4e3749(0x3e1)] = {}),
        (_0x531b4d[_0x4e3749(0x7ed)] = {}),
        (_0x531b4d[_0x4e3749(0x7ca)] = ![]),
        (_0x531b4d[_0x4e3749(0x749)] = 0x0),
        (_0x531b4d[_0x4e3749(0x513)] = 0x25a),
        (_0x531b4d["structure"] = ![]),
        (_0x531b4d[_0x4e3749(0x8f5)] = ![]),
        (_0x531b4d["bitrateGroupFlag"] = ![]),
        (_0x531b4d[_0x4e3749(0x6ee)] = ![]),
        (_0x531b4d[_0x4e3749(0x7e0)] = null),
        (_0x531b4d["sitePassword"] = _0x531b4d["defaultPassword"]),
        (_0x531b4d[_0x4e3749(0x70a)] = ![]),
        (_0x531b4d[_0x4e3749(0x54e)] = ![]),
        (_0x531b4d[_0x4e3749(0x861)] = ![]),
        (_0x531b4d[_0x4e3749(0x783)] = ![]),
        (_0x531b4d["dedicatedControlBarSpace"] = null),
        (_0x531b4d[_0x4e3749(0x276)] = ![]),
        (_0x531b4d[_0x4e3749(0x87f)] = ![]),
        (_0x531b4d[_0x4e3749(0x248)] = ![]),
        (_0x531b4d[_0x4e3749(0x7e6)] = ![]),
        (_0x531b4d[_0x4e3749(0x2f2)] = ![]),
        (_0x531b4d["directorChat"] = ![]),
        (_0x531b4d[_0x4e3749(0x9c8)] = 0x23),
        (_0x531b4d[_0x4e3749(0x2f3)] = ![]),
        (_0x531b4d[_0x4e3749(0x174)] = null),
        (_0x531b4d[_0x4e3749(0x984)] = null),
        (_0x531b4d[_0x4e3749(0x308)] = []),
        (_0x531b4d[_0x4e3749(0x1bb)] = ![]),
        (_0x531b4d[_0x4e3749(0x139)] = ![]),
        (_0x531b4d[_0x4e3749(0x82d)] = ![]),
        (_0x531b4d[_0x4e3749(0x284)] = ![]),
        (_0x531b4d[_0x4e3749(0x9d7)] = null),
        (_0x531b4d["disableOBS"] = ![]),
        (_0x531b4d["dynamicScale"] = !![]),
        (_0x531b4d[_0x4e3749(0x1b1)] = ![]),
        (_0x531b4d[_0x4e3749(0x3bb)] = ![]),
        (_0x531b4d[_0x4e3749(0x914)] = ![]),
        (_0x531b4d[_0x4e3749(0x7b8)] = ![]),
        (_0x531b4d[_0x4e3749(0x3b8)] = ![]),
        (_0x531b4d[_0x4e3749(0x3ae)] = ![]),
        (_0x531b4d[_0x4e3749(0x59d)] = ![]),
        (_0x531b4d[_0x4e3749(0x1a9)] = ![]),
        (_0x531b4d["enhance"] = ![]),
        (_0x531b4d[_0x4e3749(0x533)] = ![]),
        (_0x531b4d["forceRetry"] = 0xe10),
        (_0x531b4d[_0x4e3749(0x7b0)] = ![]),
        (_0x531b4d[_0x4e3749(0x527)] = new TextEncoder(_0x4e3749(0x31e))),
        (_0x531b4d[_0x4e3749(0x2be)] = ![]),
        (_0x531b4d[_0x4e3749(0xa0b)] = ![]),
        (_0x531b4d[_0x4e3749(0x73e)] = ![]),
        (_0x531b4d["roomhost"] = ![]),
        (_0x531b4d["hidesololinks"] = ![]),
        (_0x531b4d[_0x4e3749(0x7de)] = []),
        (_0x531b4d[_0x4e3749(0x37f)] = []),
        (_0x531b4d["automute"] = ![]),
        (_0x531b4d[_0x4e3749(0x3c5)] = null),
        (_0x531b4d[_0x4e3749(0x3f1)] = ![]),
        (_0x531b4d["flipped"] = ![]),
        (_0x531b4d[_0x4e3749(0x456)] = ![]),
        (_0x531b4d["focusDistance"] = ![]),
        (_0x531b4d[_0x4e3749(0x318)] = ![]),
        (_0x531b4d[_0x4e3749(0x21b)] = null),
        (_0x531b4d[_0x4e3749(0x54b)] = ![]),
        (_0x531b4d["forceios"] = ![]),
        (_0x531b4d["forceMediaSettings"] = ![]),
        (_0x531b4d[_0x4e3749(0x9ad)] = ![]),
        (_0x531b4d["noisegate"] = null),
        (_0x531b4d[_0x4e3749(0x8b3)] = []),
        (_0x531b4d[_0x4e3749(0xa29)] = []),
        (_0x531b4d[_0x4e3749(0x5b8)] = ![]),
        (_0x531b4d[_0x4e3749(0x746)] = ![]),
        (_0x531b4d[_0x4e3749(0x694)] = null),
        (_0x531b4d["grabFaceData"] = ![]),
        (_0x531b4d[_0x4e3749(0x293)] = ![]),
        (_0x531b4d[_0x4e3749(0x7af)] = ![]),
        (_0x531b4d["height"] = ![]),
        (_0x531b4d["iframeSrc"] = ![]),
        (_0x531b4d[_0x4e3749(0x559)] = ![]),
        (_0x531b4d[_0x4e3749(0x519)] = ![]),
        (_0x531b4d[_0x4e3749(0xa2a)] = ![]),
        (_0x531b4d[_0x4e3749(0x6f4)] = [{ urls: [_0x4e3749(0x870), _0x4e3749(0x472)] }]),
        (_0x531b4d[_0x4e3749(0x443)] = ![]),
        (_0x531b4d["include"] = []),
        (_0x531b4d[_0x4e3749(0x3d4)] = {}),
        (_0x531b4d[_0x4e3749(0x805)] = ![]),
        (_0x531b4d["flagship"] = ![]),
        (_0x531b4d["quality"] = ![]),
        (_0x531b4d[_0x4e3749(0x1aa)] = 0x1),
        (_0x531b4d[_0x4e3749(0x22c)] = ![]),
        (_0x531b4d["quietOthers"] = ![]),
        (_0x531b4d["icefilter"] = ![]),
        (_0x531b4d["infocus"] = ![]),
        (_0x531b4d[_0x4e3749(0x2cb)] = ![]),
        (_0x531b4d["info"] = {}),
        (_0x531b4d[_0x4e3749(0x754)] = ![]),
        (_0x531b4d[_0x4e3749(0x931)] = ![]),
        (_0x531b4d[_0x4e3749(0x28d)] = ![]),
        (_0x531b4d[_0x4e3749(0x440)] = {}),
        (_0x531b4d[_0x4e3749(0x380)] = []),
        (_0x531b4d[_0x4e3749(0x22e)] = ![]),
        (_0x531b4d[_0x4e3749(0x69c)] = !![]),
        (_0x531b4d["micDelay"] = ![]),
        (_0x531b4d[_0x4e3749(0x8c6)] = []),
        (_0x531b4d["micIsolatedAutoMute"] = ![]),
        (_0x531b4d[_0x4e3749(0x81c)] = ![]),
        (_0x531b4d["maxpublishers"] = ![]),
        (_0x531b4d[_0x4e3749(0x79c)] = ![]),
        (_0x531b4d["maxconnections"] = ![]),
        (_0x531b4d[_0x4e3749(0x92a)] = ![]),
        (_0x531b4d[_0x4e3749(0x6fb)] = ![]),
        (_0x531b4d["maxframeRate"] = ![]),
        (_0x531b4d[_0x4e3749(0x855)] = ![]),
        (_0x531b4d[_0x4e3749(0x7a0)] = ![]),
        (_0x531b4d["maxsamplerate"] = ![]),
        (_0x531b4d["maxptime"] = ![]),
        (_0x531b4d["minptime"] = ![]),
        (_0x531b4d[_0x4e3749(0x200)] = ![]),
        (_0x531b4d[_0x4e3749(0x621)] = ![]),
        (_0x531b4d["maxMobileBitrate"] = 0x15e),
        (_0x531b4d[_0x4e3749(0x992)] = 0x23),
        (_0x531b4d[_0x4e3749(0x68b)] = ![]),
        (_0x531b4d[_0x4e3749(0x50d)] = ![]),
        (_0x531b4d[_0x4e3749(0x4ab)] = ![]),
        (_0x531b4d[_0x4e3749(0x291)] = ![]),
        (_0x531b4d[_0x4e3749(0x6bd)] = ![]),
        (_0x531b4d[_0x4e3749(0x1b8)] = ![]),
        (_0x531b4d[_0x4e3749(0x5d7)] = ![]),
        (_0x531b4d[_0x4e3749(0x755)] = _0x531b4d[_0x4e3749(0x750)](0x5)),
        (_0x531b4d[_0x4e3749(0x4dd)] = ![]),
        (_0x531b4d[_0x4e3749(0x76c)] = ![]),
        (_0x531b4d["mainDirectorPassword"] = ![]),
        (_0x531b4d["manual"] = null),
        (_0x531b4d[_0x4e3749(0x998)] = ![]),
        (_0x531b4d[_0x4e3749(0x5ef)] = ![]),
        (_0x531b4d[_0x4e3749(0x261)] = ![]),
        (_0x531b4d["midiIn"] = ![]),
        (_0x531b4d[_0x4e3749(0x1f6)] = ![]),
        (_0x531b4d[_0x4e3749(0x355)] = ![]),
        (_0x531b4d[_0x4e3749(0x681)] = ![]),
        (_0x531b4d[_0x4e3749(0x277)] = 0x17),
        (_0x531b4d[_0x4e3749(0x4fd)] = ![]),
        (_0x531b4d[_0x4e3749(0x1e3)] = ![]),
        (_0x531b4d["mirrorExclude"] = ![]),
        (_0x531b4d[_0x4e3749(0x333)] = ![]),
        (_0x531b4d["msg"] = []),
        (_0x531b4d[_0x4e3749(0x62a)] = ![]),
        (_0x531b4d[_0x4e3749(0x389)] = ![]),
        (_0x531b4d[_0x4e3749(0x1d3)] = ![]),
        (_0x531b4d["meshcastBitrate"] = ![]),
        (_0x531b4d[_0x4e3749(0x1fd)] = ![]),
        (_0x531b4d["miconly"] = ![]),
        (_0x531b4d[_0x4e3749(0x7d5)] = ![]),
        (_0x531b4d[_0x4e3749(0x7d8)] = ![]),
        (_0x531b4d[_0x4e3749(0x6fc)] = ![]),
        (_0x531b4d["mono"] = ![]),
        (_0x531b4d[_0x4e3749(0x970)] = {}),
        (_0x531b4d["nochunk"] = ![]),
        (_0x531b4d[_0x4e3749(0x687)] = ![]),
        (_0x531b4d["noNacks"] = ![]),
        (_0x531b4d[_0x4e3749(0x510)] = ![]),
        (_0x531b4d[_0x4e3749(0x8a1)] = ![]),
        (_0x531b4d[_0x4e3749(0x340)] = ![]),
        (_0x531b4d[_0x4e3749(0x98a)] = ![]),
        (_0x531b4d[_0x4e3749(0x5f2)] = ![]),
        (_0x531b4d[_0x4e3749(0x143)] = ![]),
        (_0x531b4d[_0x4e3749(0x46a)] = ![]),
        (_0x531b4d[_0x4e3749(0x703)] = ![]),
        (_0x531b4d[_0x4e3749(0x58d)] = ![]),
        (_0x531b4d[_0x4e3749(0x4c5)] = ![]),
        (_0x531b4d[_0x4e3749(0x8da)] = ![]),
        (_0x531b4d[_0x4e3749(0xa37)] = ![]),
        (_0x531b4d["obsState"] = {}),
        (_0x531b4d[_0x4e3749(0x4fb)][_0x4e3749(0x420)] = null),
        (_0x531b4d[_0x4e3749(0x4fb)][_0x4e3749(0xa20)] = null),
        (_0x531b4d[_0x4e3749(0x4fb)][_0x4e3749(0x570)] = null),
        (_0x531b4d["obsState"][_0x4e3749(0x269)] = null),
        (_0x531b4d[_0x4e3749(0x4fb)]["sourceActive"] = null),
        (_0x531b4d[_0x4e3749(0x836)] = ![]),
        (_0x531b4d["outboundVideoBitrate"] = ![]),
        (_0x531b4d[_0x4e3749(0x763)] = ![]),
        (_0x531b4d[_0x4e3749(0x9c7)] = ![]),
        (_0x531b4d[_0x4e3749(0x885)] = ![]),
        (_0x531b4d[_0x4e3749(0x475)] = ![]),
        (_0x531b4d[_0x4e3749(0x7f4)] = ![]),
        (_0x531b4d[_0x4e3749(0x839)] = ![]),
        (_0x531b4d[_0x4e3749(0x2b1)] = ![]),
        (_0x531b4d["orientation"] = ![]),
        (_0x531b4d[_0x4e3749(0xa15)] = ![]),
        (_0x531b4d[_0x4e3749(0x4d0)] = null),
        (_0x531b4d[_0x4e3749(0xa43)] = ![]),
        (_0x531b4d[_0x4e3749(0x535)] = ![]),
        (_0x531b4d[_0x4e3749(0x5f0)] = 0x5dc),
        (_0x531b4d["pcs"] = {}),
        (_0x531b4d["pip"] = ![]),
        (_0x531b4d["consent"] = ![]),
        (_0x531b4d[_0x4e3749(0xa2f)] = ![]),
        (_0x531b4d["mc"] = ![]),
        (_0x531b4d["meshcastScreenShareBitrate"] = ![]),
        (_0x531b4d[_0x4e3749(0x845)] = ![]),
        (_0x531b4d[_0x4e3749(0x300)] = ![]),
        (_0x531b4d["permaid"] = ![]),
        (_0x531b4d[_0x4e3749(0x7c4)] = ![]),
        (_0x531b4d[_0x4e3749(0x5a2)] = 0x1e),
        (_0x531b4d[_0x4e3749(0x385)] = "https://temp.vdo.ninja/"),
        (_0x531b4d["privacy"] = ![]),
        (_0x531b4d[_0x4e3749(0x3d7)] = ![]),
        (_0x531b4d["pingTimeout"] = null),
        (_0x531b4d[_0x4e3749(0x843)] = null),
        (_0x531b4d[_0x4e3749(0x813)] = ![]),
        (_0x531b4d["previewToggleState"] = !![]),
        (_0x531b4d[_0x4e3749(0x738)] = ![]),
        (_0x531b4d[_0x4e3749(0x27b)] = []),
        (_0x531b4d[_0x4e3749(0x95c)] = ![]),
        (_0x531b4d[_0x4e3749(0x917)] = ![]),
        (_0x531b4d[_0x4e3749(0x1b2)] = ![]),
        (_0x531b4d["recordLocal"] = ![]),
        (_0x531b4d[_0x4e3749(0x6b0)] = !![]),
        (_0x531b4d[_0x4e3749(0x9af)] = ![]),
        (_0x531b4d[_0x4e3749(0x637)] = 0x1770),
        (_0x531b4d["raisehands"] = ![]),
        (_0x531b4d[_0x4e3749(0x886)] = 0x1388),
        (_0x531b4d["recordingVideoCodec"] = ![]),
        (_0x531b4d["remoteInterfaceAPI"] = ![]),
        (_0x531b4d[_0x4e3749(0x8e0)] = ![]),
        (_0x531b4d[_0x4e3749(0x875)] = ![]),
        (_0x531b4d[_0x4e3749(0x346)] = ![]),
        (_0x531b4d[_0x4e3749(0x46c)] = ![]),
        (_0x531b4d[_0x4e3749(0x44b)] = null),
        (_0x531b4d[_0x4e3749(0x3d5)] = ![]),
        (_0x531b4d["rotate"] = ![]),
        (_0x531b4d[_0x4e3749(0x3c6)] = !![]),
        (_0x531b4d[_0x4e3749(0x634)] = ![]),
        (_0x531b4d[_0x4e3749(0x9d5)] = ![]),
        (_0x531b4d[_0x4e3749(0x39e)] = {}),
        (_0x531b4d["sampleRate"] = ![]),
        (_0x531b4d[_0x4e3749(0x1d0)] = ![]),
        (_0x531b4d[_0x4e3749(0x717)] = ![]),
        (_0x531b4d[_0x4e3749(0x72e)] = ![]),
        (_0x531b4d[_0x4e3749(0x34c)] = ![]),
        (_0x531b4d[_0x4e3749(0x7a8)] = {}),
        (_0x531b4d[_0x4e3749(0x2ad)] = ![]),
        (_0x531b4d[_0x4e3749(0x28c)] = ![]),
        (_0x531b4d[_0x4e3749(0x922)] = ![]),
        (_0x531b4d["iframetarget"] = "*"),
        (_0x531b4d["scene"] = ![]),
        (_0x531b4d[_0x4e3749(0x85e)] = ![]),
        (_0x531b4d[_0x4e3749(0x395)] = {}),
        (_0x531b4d[_0x4e3749(0x9a6)] = ![]),
        (_0x531b4d["signalMeter"] = null),
        (_0x531b4d[_0x4e3749(0xa07)] = ![]),
        (_0x531b4d[_0x4e3749(0x7a1)] = ![]),
        (_0x531b4d["screenshareid"] = ![]),
        (_0x531b4d[_0x4e3749(0x8bc)] = ![]),
        (_0x531b4d[_0x4e3749(0x1b4)] = ![]),
        (_0x531b4d[_0x4e3749(0x2cc)] = ![]),
        (_0x531b4d[_0x4e3749(0x20e)] = ![]),
        (_0x531b4d[_0x4e3749(0x726)] = ![]),
        (_0x531b4d[_0x4e3749(0x623)] = ![]),
        (_0x531b4d["screenShareStartPaused"] = ![]),
        (_0x531b4d[_0x4e3749(0x64f)] = ![]),
        (_0x531b4d[_0x4e3749(0x323)] = ![]),
        (_0x531b4d[_0x4e3749(0x820)] = ![]),
        (_0x531b4d[_0x4e3749(0x4e6)] = ![]),
        (_0x531b4d[_0x4e3749(0x480)] = ![]),
        (_0x531b4d[_0x4e3749(0x9ac)] = [_0x4e3749(0x83d), _0x4e3749(0x25f), _0x4e3749(0x529), "mag", _0x4e3749(0x663), _0x4e3749(0x539)]),
        (_0x531b4d["seedAttempts"] = 0x0),
        (_0x531b4d[_0x4e3749(0x952)] = ![]),
        (_0x531b4d[_0x4e3749(0x809)] = ![]),
        (_0x531b4d[_0x4e3749(0x4a5)] = ![]),
        (_0x531b4d[_0x4e3749(0x445)] = ![]),
        (_0x531b4d["systemAudio"] = ![]),
        (_0x531b4d[_0x4e3749(0x579)] = ![]),
        (_0x531b4d[_0x4e3749(0x775)] = ![]),
        (_0x531b4d[_0x4e3749(0x225)] = ![]),
        (_0x531b4d["screenshareVideoOnly"] = ![]),
        (_0x531b4d[_0x4e3749(0x9c3)] = null),
        (_0x531b4d[_0x4e3749(0x4a1)] = ![]),
        (_0x531b4d[_0x4e3749(0x702)] = []),
        (_0x531b4d[_0x4e3749(0x69b)] = ![]),
        (_0x531b4d["screenshareType"] = ![]),
        (_0x531b4d[_0x4e3749(0x8ab)] = !![]),
        (_0x531b4d[_0x4e3749(0x925)] = ![]),
        (_0x531b4d[_0x4e3749(0x72b)] = ![]),
        (_0x531b4d[_0x4e3749(0x804)] = ![]),
        (_0x531b4d[_0x4e3749(0x2d0)] = ![]),
        (_0x531b4d[_0x4e3749(0x8e4)] = null),
        (_0x531b4d["showConnections"] = ![]),
        (_0x531b4d[_0x4e3749(0x21d)] = {}),
        (_0x531b4d["sceneType"] = ![]),
        (_0x531b4d[_0x4e3749(0x44d)] = ![]),
        (_0x531b4d[_0x4e3749(0x2fe)] = ![]),
        (_0x531b4d["currentSlots"] = ![]),
        (_0x531b4d[_0x4e3749(0x601)] = ![]),
        (_0x531b4d[_0x4e3749(0x379)] = ![]),
        (_0x531b4d[_0x4e3749(0x1db)] = ![]),
        (_0x531b4d[_0x4e3749(0x6ad)] = ![]),
        (_0x531b4d[_0x4e3749(0x61e)] = 0xbb8),
        (_0x531b4d[_0x4e3749(0x68a)] = ![]),
        (_0x531b4d[_0x4e3749(0x228)] = ![]),
        (_0x531b4d[_0x4e3749(0x4f8)] = null),
        (_0x531b4d[_0x4e3749(0x8cc)] = null),
        (_0x531b4d["streamSrcClone"] = null),
        (_0x531b4d["screenSrc"] = null),
        (_0x531b4d[_0x4e3749(0xa19)] = ![]),
        (_0x531b4d[_0x4e3749(0x1af)] = ![]),
        (_0x531b4d["forceTcpMode"] = ![]),
        (_0x531b4d["totalRoomBitrate"] = ![]),
        (_0x531b4d[_0x4e3749(0x85d)] = 0x1f4),
        (_0x531b4d[_0x4e3749(0x220)] = ![]),
        (_0x531b4d[_0x4e3749(0x4cd)] = null),
        (_0x531b4d[_0x4e3749(0x6a1)] = [_0x4e3749(0x55f), _0x4e3749(0x9ab)]),
        (_0x531b4d[_0x4e3749(0x7c9)] = ![]),
        (_0x531b4d["tallyStyle"] = ![]),
        (_0x531b4d[_0x4e3749(0x56e)] = ![]),
        (_0x531b4d["tz"] = ![]),
        (_0x531b4d[_0x4e3749(0x368)] = ![]),
        (_0x531b4d[_0x4e3749(0x3a1)] = ![]),
        (_0x531b4d[_0x4e3749(0x1ea)] = ![]),
        (_0x531b4d[_0x4e3749(0x7d4)] = ![]),
        (_0x531b4d[_0x4e3749(0x6ba)] = ![]),
        (_0x531b4d[_0x4e3749(0x6fa)] = ![]),
        (_0x531b4d[_0x4e3749(0x912)] = ![]),
        (_0x531b4d["viewDirectorOnly"] = ![]),
        (_0x531b4d[_0x4e3749(0x3c3)] = ![]),
        (_0x531b4d["remoteVideoMuted"] = ![]),
        (_0x531b4d["videoMutedFlag"] = ![]),
        (_0x531b4d[_0x4e3749(0xa1b)] = ![]),
        (_0x531b4d[_0x4e3749(0x60d)] = ![]),
        (_0x531b4d[_0x4e3749(0x9da)] = ![]),
        (_0x531b4d["width"] = ![]),
        (_0x531b4d[_0x4e3749(0x144)] = ![]),
        (_0x531b4d[_0x4e3749(0x68f)] = ![]),
        (_0x531b4d[_0x4e3749(0x42a)] = ![]),
        (_0x531b4d[_0x4e3749(0x526)] = {}),
        (_0x531b4d[_0x4e3749(0x4b4)] = {}),
        (_0x531b4d["webcamonly"] = ![]),
        (_0x531b4d[_0x4e3749(0x236)] = ![]),
        (_0x531b4d[_0x4e3749(0x272)] = ![]),
        (_0x531b4d[_0x4e3749(0x536)] = 0x1388),
        (_0x531b4d[_0x4e3749(0x6eb)] = ![]),
        (_0x531b4d[_0x4e3749(0x83b)] = {}),
        (_0x531b4d["webp"] = ![]),
        (_0x531b4d[_0x4e3749(0x9f6)] = ![]),
        (_0x531b4d["ws"] = null),
        (_0x531b4d[_0x4e3749(0x259)] = ![]),
        (_0x531b4d[_0x4e3749(0x7a9)] = null),
        (_0x531b4d[_0x4e3749(0x612)] = ![]),
        (_0x531b4d[_0x4e3749(0x538)] = ![]),
        (_0x531b4d["wssSetViaUrl"] = ![]),
        (_0x531b4d["whipOut"] = ![]),
        (_0x531b4d[_0x4e3749(0x386)] = ![]),
        (_0x531b4d["whipOutput"] = ![]),
        (_0x531b4d[_0x4e3749(0x2a5)] = ![]),
        (_0x531b4d[_0x4e3749(0x376)] = ![]),
        (_0x531b4d["whipView"] = ![]),
        (_0x531b4d[_0x4e3749(0x602)] = ""),
        (_0x531b4d[_0x4e3749(0x807)] = null),
        (_0x531b4d[_0x4e3749(0x86c)] = ![]),
        (_0x531b4d[_0x4e3749(0x254)] = ![]),
        (_0x531b4d["updateLocalStatsInterval"] = null),
        (_0x531b4d[_0x4e3749(0x49f)] = ![]),
        (_0x531b4d[_0x4e3749(0x70b)] = getById(_0x4e3749(0x3bd))["cloneNode"](!![])),
        (_0x531b4d[_0x4e3749(0xa22)] = null),
        (_0x531b4d[_0x4e3749(0x70b)]["id"] = "localMuteElement"),
        (_0x531b4d[_0x4e3749(0x7e8)] = getById(_0x4e3749(0x2f9))["cloneNode"](!![])),
        (_0x531b4d[_0x4e3749(0x7e8)]["id"] = _0x4e3749(0x35c)),
        (_0x531b4d[_0x4e3749(0x7e8)]["style"][_0x4e3749(0x9fb)] = 0x0),
        (_0x531b4d[_0x4e3749(0x7e8)]["dataset"]["level"] = 0x0),
        (_0x531b4d[_0x4e3749(0x56b)] = ![]),
        (_0x531b4d[_0x4e3749(0x19f)] = ![]),
        (_0x531b4d["screensharebutton"] = !![]),
        (_0x531b4d["introOnClean"] = ![]),
        (_0x531b4d[_0x4e3749(0x67f)] = !![]),
        (_0x531b4d[_0x4e3749(0xa06)] = !![]),
        (_0x531b4d["youtubeKey"] = ![]),
        (_0x531b4d[_0x4e3749(0x76f)] = location[_0x4e3749(0x7b7)][_0x4e3749(0x22a)](".")[_0x4e3749(0x67d)](-0x2)[_0x4e3749(0x498)](".")),
        (_0x531b4d["encryptMessage"] = function (_0x58f61d, _0x486f86 = _0x531b4d[_0x4e3749(0x7f4)] + _0x531b4d[_0x4e3749(0x76f)]) {
            var _0x5de798 = _0x4e3749,
                _0x16e8c7 = crypto[_0x5de798(0x49c)](new Uint8Array(0x10));
            return crypto[_0x5de798(0x982)]
                [_0x5de798(0x264)]({ name: "SHA-256" }, convertStringToArrayBufferView(_0x486f86))
                [_0x5de798(0x741)](function (_0x18ca1d) {
                    var _0x281046 = _0x5de798;
                    return window[_0x281046(0x448)][_0x281046(0x982)][_0x281046(0x6c7)](_0x281046(0x603), _0x18ca1d, { name: _0x281046(0x904) }, ![], [_0x281046(0x546), _0x281046(0x25c)])[_0x281046(0x741)](
                        function (_0x321f80) {
                            var _0x27321c = _0x281046;
                            return crypto["subtle"]["encrypt"]({ name: _0x27321c(0x904), iv: _0x16e8c7 }, _0x321f80, convertStringToArrayBufferView(_0x58f61d))["then"](
                                function (_0x210ad6) {
                                    return (encrypted_data = new Uint8Array(_0x210ad6)), (encrypted_data = toHexString(encrypted_data)), (_0x16e8c7 = toHexString(_0x16e8c7)), [encrypted_data, _0x16e8c7];
                                },
                                function (_0x129622) {
                                    return errorlog(_0x129622["message"]), ![];
                                }
                            );
                        },
                        function (_0x59c533) {
                            return errorlog(_0x59c533), ![];
                        }
                    );
                })
                [_0x5de798(0x524)](errorlog);
        }),
        (_0x531b4d["decryptMessage"] = function (_0x435b7e, _0x2d5e76, _0x339a32 = _0x531b4d[_0x4e3749(0x7f4)] + _0x531b4d[_0x4e3749(0x76f)]) {
            var _0x29487b = _0x4e3749;
            return (
                (_0x435b7e = toByteArray(_0x435b7e)),
                (_0x2d5e76 = toByteArray(_0x2d5e76)),
                crypto["subtle"]
                    [_0x29487b(0x264)]({ name: _0x29487b(0x558) }, convertStringToArrayBufferView(_0x339a32))
                    ["then"](function (_0x5443ed) {
                        var _0x2b744a = _0x29487b;
                        return window[_0x2b744a(0x448)][_0x2b744a(0x982)][_0x2b744a(0x6c7)](_0x2b744a(0x603), _0x5443ed, { name: _0x2b744a(0x904) }, ![], ["encrypt", _0x2b744a(0x25c)])[_0x2b744a(0x741)](function (_0x1d3b14) {
                            var _0x50bdb4 = _0x2b744a;
                            return crypto[_0x50bdb4(0x982)]["decrypt"]({ name: _0x50bdb4(0x904), iv: _0x2d5e76 }, _0x1d3b14, _0x435b7e)[_0x50bdb4(0x741)](
                                function (_0x2c54cb) {
                                    var _0x2ec983 = _0x50bdb4,
                                        _0x45c13c = new Uint8Array(_0x2c54cb),
                                        _0x1f56c7 = "";
                                    for (var _0x51a56a = 0x0; _0x51a56a < _0x45c13c["byteLength"]; _0x51a56a++) {
                                        _0x1f56c7 += String[_0x2ec983(0x8ad)](_0x45c13c[_0x51a56a]);
                                    }
                                    return _0x1f56c7;
                                },
                                function (_0x5bb861) {
                                    return errorlog(_0x5bb861), ![];
                                }
                            );
                        });
                    })
                    [_0x29487b(0x524)](errorlog)
            );
        }),
        (_0x531b4d[_0x4e3749(0x932)] = async function (_0x422210) {
            var _0x48abef = _0x4e3749;
            if (typeof _0x422210[_0x48abef(0x9af)] !== _0x48abef(0x74a)) return _0x422210;
            try {
                _0x422210["remote"][_0x48abef(0x1bf)] == 0x2 &&
                    (!_0x531b4d[_0x48abef(0x8da)] && (_0x531b4d[_0x48abef(0x8da)] = await generateHash(_0x531b4d[_0x48abef(0x9af)] + _0x531b4d[_0x48abef(0x76f)], 0xc)),
                    (_0x422210["remote"] = await _0x531b4d[_0x48abef(0x8d4)](_0x422210[_0x48abef(0x9af)][0x0], _0x422210["remote"][0x1], _0x531b4d[_0x48abef(0x8da)])),
                    _0x422210[_0x48abef(0x9af)] ? log(_0x48abef(0x664)) : warnlog("Remote\x20request\x20failed\x20to\x20decode;\x20continuing\x20still."),
                    log(_0x422210));
            } catch (_0x50080a) {
                errorlog(_0x50080a);
            }
            return _0x422210;
        }),
        (_0x531b4d[_0x4e3749(0x733)] = async function (_0x2ad590) {
            var _0xea51b7 = _0x4e3749;
            try {
                if (_0x2ad590["remote"] && typeof _0x2ad590[_0xea51b7(0x9af)] === _0xea51b7(0x987)) {
                    var _0x2d2bd9 = await generateHash(_0x2ad590[_0xea51b7(0x9af)] + _0x531b4d[_0xea51b7(0x76f)], 0xc);
                    _0x2ad590[_0xea51b7(0x9af)] = await _0x531b4d["encryptMessage"](_0x2ad590[_0xea51b7(0x9af)], _0x2d2bd9);
                }
            } catch (_0xd6d424) {
                errorlog(_0xd6d424);
            }
            return _0x2ad590;
        }),
        (_0x531b4d[_0x4e3749(0x2b2)] = function (_0x26d3d3) {
            var _0x3a09c1 = _0x4e3749;
            try {
                (_0x26d3d3 = decodeURIComponent(_0x26d3d3)), (_0x26d3d3 = CryptoJS[_0x3a09c1(0x1d5)][_0x3a09c1(0x25c)](_0x26d3d3, "OBSNINJAFORLIFE")), (_0x26d3d3 = _0x26d3d3["toString"](CryptoJS["enc"]["Utf8"]));
                if (_0x26d3d3) {
                    if (_0x26d3d3[_0x3a09c1(0x32a)](_0x3a09c1(0x49e))) _0x26d3d3 = _0x26d3d3[_0x3a09c1(0x177)](_0x3a09c1(0x49e), "");
                    else {
                        if (_0x26d3d3["startsWith"](_0x3a09c1(0x816))) _0x26d3d3 = _0x26d3d3[_0x3a09c1(0x177)](_0x3a09c1(0x816), "");
                        else {
                            if (_0x26d3d3[_0x3a09c1(0x32a)]("/")) _0x26d3d3 = _0x26d3d3[_0x3a09c1(0x177)]("/", "");
                            else {
                                if (_0x26d3d3["startsWith"](_0x3a09c1(0x7f2))) _0x26d3d3 = _0x26d3d3[_0x3a09c1(0x177)](_0x3a09c1(0x7f2), "");
                                else {
                                    if (_0x26d3d3["startsWith"]("vdo.ninja/")) _0x26d3d3 = _0x26d3d3[_0x3a09c1(0x177)]("vdo.ninja/", "");
                                    else _0x26d3d3[_0x3a09c1(0x32a)]("backup.vdo.ninja/") && (_0x26d3d3 = _0x26d3d3[_0x3a09c1(0x177)](_0x3a09c1(0x3b4), ""));
                                }
                            }
                        }
                    }
                    (_0x26d3d3 = _0x26d3d3[_0x3a09c1(0x22a)]("?")["splice"](0x1)[_0x3a09c1(0x498)]("?")),
                        (_0x26d3d3 = _0x26d3d3["replace"](/\?/g, "&")),
                        (_0x26d3d3 = _0x26d3d3[_0x3a09c1(0x177)](/\&/, "?")),
                        _0x26d3d3 && (_0x531b4d[_0x3a09c1(0x783)] = "?" + _0x26d3d3);
                }
            } catch (_0x4e9113) {
                warnlog(_0x4e9113);
            }
        }),
        (_0x531b4d[_0x4e3749(0x9f7)] = function (_0x2c8594, _0x1ca9ee = ![]) {
            var _0x382c82 = _0x4e3749,
                _0x1558a0 = {};
            (_0x1558a0[_0x382c82(0x47e)] = !![]), (_0x1558a0[_0x382c82(0x725)] = _0x1ca9ee), _0x531b4d[_0x382c82(0x1a7)](_0x1558a0, _0x2c8594);
        }),
        (_0x531b4d[_0x4e3749(0x441)] = function (_0x3087ed, _0x142451, _0x24002f = null) {
            var _0x1669ac = _0x4e3749;
            if (!_0x531b4d[_0x1669ac(0x39e)][_0x142451]) return ![];
            var _0x328d3f = {};
            if (_0x24002f !== null) _0x531b4d["rpcs"][_0x142451][_0x1669ac(0x97c)] = _0x24002f || ![];
            else {
                if (_0x531b4d["rpcs"][_0x142451][_0x1669ac(0x97c)]) {
                    warnlog("Audio\x20Bitrate\x20is\x20locked;\x20can\x27t\x20update");
                    return;
                }
            }
            (_0x328d3f[_0x1669ac(0x94f)] = _0x3087ed), log(_0x328d3f), _0x531b4d["sendRequest"](_0x328d3f, _0x142451);
        }),
        (_0x531b4d[_0x4e3749(0x1ec)] = function (_0x14d1ee, _0x1c4d9a, _0x242bd3 = ![], _0x2d5044 = null) {
            var _0x467a63 = _0x4e3749;
            log(_0x467a63(0x172) + _0x242bd3);
            if (!_0x531b4d[_0x467a63(0x39e)][_0x1c4d9a]) return ![];
            if (_0x2d5044 !== null) _0x531b4d["rpcs"][_0x1c4d9a][_0x467a63(0x2ae)] = _0x2d5044 || ![];
            else {
                if (_0x531b4d[_0x467a63(0x39e)][_0x1c4d9a]["lockedVideoBitrate"]) {
                    warnlog(_0x467a63(0x381));
                    return;
                }
            }
            if (_0x14d1ee === ![]) {
            } else _0x531b4d[_0x467a63(0x39e)][_0x1c4d9a][_0x467a63(0x3da)] = _0x14d1ee;
            var _0x3c8b66 = -0x1;
            _0x531b4d["rpcs"][_0x1c4d9a][_0x467a63(0x696)] !== ![] ? (_0x14d1ee = parseInt(_0x531b4d[_0x467a63(0x39e)][_0x1c4d9a][_0x467a63(0x696)])) : (_0x14d1ee = parseInt(_0x531b4d[_0x467a63(0x39e)][_0x1c4d9a][_0x467a63(0x3da)]));
            if (_0x531b4d[_0x467a63(0x4fb)]["visibility"] === ![]) {
                if (_0x531b4d["optimize"] !== ![]) {
                    if (window[_0x467a63(0x6f0)]) return ![];
                }
            }
            _0x14d1ee === 0x0 && _0x531b4d[_0x467a63(0x39e)][_0x1c4d9a][_0x467a63(0x59b)] && (_0x14d1ee = 0x1);
            if (_0x531b4d["rpcs"][_0x1c4d9a][_0x467a63(0x1a8)] === _0x14d1ee) return ![];
            log(_0x467a63(0x705) + _0x14d1ee);
            var _0x11dded = {};
            _0x11dded[_0x467a63(0x798)] = _0x14d1ee;
            if (_0x242bd3 === null) {
            } else {
                if (_0x242bd3) _0x14d1ee === 0x0 ? (warnlog(_0x467a63(0x785)), (_0x11dded[_0x467a63(0x94f)] = 0x0)) : _0x3c8b66 < 0x10 && _0x3c8b66 >= 0x0 ? (_0x11dded["audioBitrate"] = _0x3c8b66) : (_0x11dded[_0x467a63(0x94f)] = 0x10);
                else _0x2d5044 === null && (_0x11dded["audioBitrate"] = _0x3c8b66);
            }
            return _0x531b4d[_0x467a63(0x1a7)](_0x11dded, _0x1c4d9a)
                ? ((_0x531b4d[_0x467a63(0x39e)][_0x1c4d9a]["bandwidth"] = _0x14d1ee), !![])
                : (setTimeout(function _0x3c78ec() {
                      var _0x308c07 = _0x467a63;
                      _0x531b4d[_0x308c07(0x1ec)](![], _0x1c4d9a);
                  }, 0x1388),
                  warnlog(_0x467a63(0x34f)),
                  ![]);
        }),
        (_0x531b4d[_0x4e3749(0x913)] = function (_0x46b72a, _0x3cc1e9 = ![], _0x1bfa99 = ![], _0x203ee6 = ![]) {
            var _0x1c909e = _0x4e3749,
                _0x4d4f23 = ![],
                _0x631601 = {};
            _0x631601[_0x1c909e(0x847)] = _0x46b72a;
            try {
                if (!_0x3cc1e9 && !_0x1bfa99) {
                    if (_0x203ee6 == _0x1c909e(0x39e)) _0x531b4d[_0x1c909e(0x1a7)](_0x631601);
                    else _0x203ee6 == _0x1c909e(0x8cd) ? _0x531b4d[_0x1c909e(0x822)](_0x631601) : _0x531b4d[_0x1c909e(0x62e)](_0x631601);
                    _0x4d4f23 = !![];
                } else {
                    if (_0x3cc1e9) {
                        _0x3cc1e9 = _0x3cc1e9 + "";
                        if (_0x203ee6 == _0x1c909e(0x39e)) _0x531b4d["sendRequest"](_0x631601, _0x3cc1e9);
                        else _0x203ee6 == _0x1c909e(0x8cd) ? _0x531b4d[_0x1c909e(0x822)](_0x631601, _0x3cc1e9) : _0x531b4d[_0x1c909e(0x62e)](_0x631601, _0x3cc1e9);
                        _0x4d4f23 = !![];
                    } else {
                        if (_0x1bfa99) {
                            _0x1bfa99 = _0x1bfa99 + "";
                            for (var _0x2e7931 in _0x531b4d[_0x1c909e(0x39e)]) {
                                if (_0x531b4d[_0x1c909e(0x39e)][_0x2e7931][_0x1c909e(0x4f8)] === _0x1bfa99) {
                                    if (_0x203ee6 == _0x1c909e(0x39e)) _0x531b4d[_0x1c909e(0x1a7)](_0x631601, _0x2e7931);
                                    else _0x203ee6 == _0x1c909e(0x8cd) ? _0x531b4d["sendMessage"](_0x631601, _0x2e7931) : _0x531b4d["sendPeers"](_0x631601, _0x2e7931);
                                    _0x4d4f23 = !![];
                                }
                            }
                        }
                    }
                }
                return _0x4d4f23;
            } catch (_0x387615) {
                return ![];
            }
        }),
        (_0x531b4d[_0x4e3749(0x59a)] = function (_0x2663b4, _0x3f16d0) {
            var _0x23c871 = _0x4e3749,
                _0x4d8b96 = {};
            (_0x4d8b96[_0x23c871(0x887)] = {}), (_0x4d8b96[_0x23c871(0x887)] = _0x2663b4);
            _0x3f16d0 !== null && (_0x4d8b96[_0x23c871(0x49f)] = _0x3f16d0);
            if (isIFrame) parent[_0x23c871(0x489)](_0x4d8b96, _0x531b4d["iframetarget"]);
            else _0x2663b4[_0x23c871(0x9f4)] && !isIFrame && getChatMessage(_0x2663b4["overlayNinja"][_0x23c871(0x1d6)], _0x2663b4[_0x23c871(0x9f4)][_0x23c871(0x692)], ![], ![]);
        }),
        (_0x531b4d[_0x4e3749(0x5da)] = function () {
            var _0xd81535 = _0x4e3749;
            if (_0x531b4d[_0xd81535(0x174)] === null) return;
            for (var _0x19962d in _0x531b4d[_0xd81535(0x39e)]) {
                try {
                    var _0xa5803f = getReceivers2(_0x19962d);
                    for (var _0x4e71a2 = 0x0; _0x4e71a2 < _0xa5803f["length"]; _0x4e71a2++) {
                        _0xa5803f[_0x4e71a2][_0xd81535(0x88b)][_0xd81535(0x722)] == _0xd81535(0x9bb) && (_0xa5803f[_0x4e71a2][_0xd81535(0x88b)][_0xd81535(0x7e1)] = !_0x531b4d[_0xd81535(0x174)]);
                    }
                } catch (_0x25b18c) {}
            }
            _0x531b4d[_0xd81535(0x174)] && (getById(_0xd81535(0x73c))[_0xd81535(0x7d5)] = !![]);
        }),
        (_0x531b4d[_0x4e3749(0x8d3)] = function () {
            var _0x567858 = _0x4e3749;
            if (_0x531b4d[_0x567858(0x984)] === null) return;
            _0x531b4d[_0x567858(0x984)]
                ? (getById(_0x567858(0x901))[_0x567858(0x23d)][_0x567858(0x6e9)](_0x567858(0x98b)), !_0x531b4d[_0x567858(0x2d4)] && warnUser(miscTranslations["vision-disabled"], ![], ![]))
                : (getById("gridlayout")[_0x567858(0x23d)]["remove"](_0x567858(0x98b)), !_0x531b4d[_0x567858(0x2d4)] && closeModal());
            for (var _0x135570 in _0x531b4d[_0x567858(0x39e)]) {
                try {
                    var _0x3de787 = getReceivers2(_0x135570);
                    for (var _0x22253a = 0x0; _0x22253a < _0x3de787[_0x567858(0x1bf)]; _0x22253a++) {
                        _0x3de787[_0x22253a][_0x567858(0x88b)][_0x567858(0x722)] == _0x567858(0x211) && (_0x3de787[_0x22253a][_0x567858(0x88b)][_0x567858(0x7e1)] = !_0x531b4d[_0x567858(0x984)]);
                    }
                } catch (_0x43feb1) {
                    errorlog(_0x43feb1);
                }
            }
            _0x531b4d[_0x567858(0x984)] && (getById("videosource")[_0x567858(0x7d5)] = !![]);
        }),
        (_0x531b4d[_0x4e3749(0x757)] = async function (_0x5a4b09, _0x32bd5f, _0x3728e5 = _0x531b4d[_0x4e3749(0x9af)]) {
            var _0x393025 = _0x4e3749;
            log(_0x393025(0x633) + _0x5a4b09), log(_0x32bd5f);
            var _0x32fdaa = {};
            (_0x32fdaa[_0x393025(0x144)] = _0x5a4b09),
                (_0x32fdaa["remote"] = _0x3728e5),
                (_0x32fdaa = await _0x531b4d["encodeRemote"](_0x32fdaa)),
                _0x531b4d["sendRequest"](_0x32fdaa, _0x32bd5f) ? log(_0x393025(0x630)) : errorlog(_0x393025(0x303));
        }),
        (_0x531b4d[_0x4e3749(0x3cc)] = async function (_0xcc4b6f, _0x2e9aa4, _0x5703f1 = _0x531b4d["remote"]) {
            var _0x3c18cf = _0x4e3749;
            log(_0x3c18cf(0x84e) + _0xcc4b6f);
            var _0x5def9e = {};
            (_0x5def9e[_0x3c18cf(0x337)] = _0xcc4b6f),
                (_0x5def9e["remote"] = _0x5703f1),
                (_0x5def9e = await _0x531b4d[_0x3c18cf(0x733)](_0x5def9e)),
                _0x531b4d[_0x3c18cf(0x1a7)](_0x5def9e, _0x2e9aa4) ? log(_0x3c18cf(0x3c8)) : errorlog(_0x3c18cf(0x2c3));
        }),
        (_0x531b4d[_0x4e3749(0x29c)] = async function () {
            var _0x34c83a = _0x4e3749;
            await _0x531b4d[_0x34c83a(0x8d6)]();
            if (_0x531b4d[_0x34c83a(0x754)] !== ![]) (_0x531b4d[_0x34c83a(0x754)] = _0x34c83a(0x566)), log("seeding\x20blocked");
            else {
                if (_0x531b4d["doNotSeed"]) return;
                else {
                    var _0x1909df = {};
                    (_0x1909df["request"] = "seed"),
                        (_0x1909df[_0x34c83a(0x4f8)] = _0x531b4d[_0x34c83a(0x4f8)]),
                        _0x531b4d[_0x34c83a(0x8de)](_0x1909df),
                        log(_0x34c83a(0x8bf)),
                        pokeAPI(_0x34c83a(0x4e6), !![]),
                        pokeIframeAPI(_0x34c83a(0x18f), !![]),
                        pokeIframeAPI(_0x34c83a(0x4e6), !![]);
                }
            }
            await meshcast();
        }),
        (_0x531b4d[_0x4e3749(0x17e)] = function () {
            var _0x39e0f9 = _0x4e3749;
            (getById(_0x39e0f9(0x410))[_0x39e0f9(0x850)] = !![]),
                (getById(_0x39e0f9(0x410))[_0x39e0f9(0x151)] = "Only\x20the\x20main\x20director\x20can\x20use\x20this\x20setting"),
                getById(_0x39e0f9(0x431))[_0x39e0f9(0x23d)][_0x39e0f9(0x6e9)](_0x39e0f9(0x98b)),
                _0x531b4d["directorPassword"] &&
                    (_0x531b4d["directorHash"]
                        ? _0x531b4d[_0x39e0f9(0x82d)] &&
                          _0x531b4d[_0x39e0f9(0x82d)] in _0x531b4d["rpcs"] &&
                          _0x531b4d[_0x39e0f9(0x39e)][_0x531b4d[_0x39e0f9(0x82d)]][_0x39e0f9(0x99d)] === ![] &&
                          _0x531b4d[_0x39e0f9(0x55e)](_0x531b4d[_0x39e0f9(0x139)], _0x531b4d[_0x39e0f9(0x139)])
                              ["then"](function (_0x3b8086) {
                                  var _0x38e6f5 = _0x39e0f9,
                                      _0x1b7317 = {};
                                  (_0x1b7317["UUID"] = _0x531b4d[_0x38e6f5(0x82d)]),
                                      (_0x1b7317[_0x38e6f5(0x17e)] = _0x3b8086[0x0]),
                                      (_0x1b7317[_0x38e6f5(0x190)] = _0x3b8086[0x1]),
                                      _0x531b4d[_0x38e6f5(0x39e)][_0x531b4d[_0x38e6f5(0x82d)]][_0x38e6f5(0x99d)] === ![] &&
                                          _0x531b4d[_0x38e6f5(0x1a7)](_0x1b7317, _0x1b7317[_0x38e6f5(0x49f)]) &&
                                          (_0x531b4d["rpcs"][_0x531b4d[_0x38e6f5(0x82d)]][_0x38e6f5(0x99d)] = !![]);
                              })
                              ["catch"](errorlog)
                        : generateHash(_0x531b4d[_0x39e0f9(0x1bb)] + _0x531b4d["salt"] + _0x39e0f9(0x942), 0xc)
                              ["then"](function (_0x36855a) {
                                  var _0x378c = _0x39e0f9;
                                  _0x531b4d[_0x378c(0x139)] = _0x36855a;
                                  _0x531b4d[_0x378c(0x82d)] &&
                                      _0x531b4d["rpcs"][_0x531b4d[_0x378c(0x82d)]][_0x378c(0x99d)] === ![] &&
                                      _0x531b4d[_0x378c(0x55e)](_0x531b4d[_0x378c(0x139)], _0x531b4d[_0x378c(0x139)])
                                          ["then"](function (_0x22c076) {
                                              var _0x1c22ea = _0x378c,
                                                  _0x56c009 = {};
                                              (_0x56c009[_0x1c22ea(0x49f)] = _0x531b4d["directorUUID"]),
                                                  (_0x56c009["requestCoDirector"] = _0x22c076[0x0]),
                                                  (_0x56c009[_0x1c22ea(0x190)] = _0x22c076[0x1]),
                                                  _0x531b4d["rpcs"][_0x531b4d[_0x1c22ea(0x82d)]][_0x1c22ea(0x99d)] === ![] &&
                                                      _0x531b4d["sendRequest"](_0x56c009, _0x56c009[_0x1c22ea(0x49f)]) &&
                                                      (_0x531b4d[_0x1c22ea(0x39e)][_0x531b4d[_0x1c22ea(0x82d)]][_0x1c22ea(0x99d)] = !![]);
                                          })
                                          [_0x378c(0x524)](errorlog);
                                  return;
                              })
                              [_0x39e0f9(0x524)](errorlog));
        }),
        (_0x531b4d[_0x4e3749(0x192)] = function (_0x3505c3, _0x3e03f3) {
            return _0x3505c3;
        }),
        (_0x531b4d["refreshScale"] = function (_0x577feb = ![]) {
            var _0x1d5249 = _0x4e3749;
            log("Refreshing\x20scale");
            if (_0x577feb) {
                if (!_0x531b4d[_0x1d5249(0x8cd)][_0x577feb]) return ![];
                if (_0x531b4d[_0x1d5249(0x8cd)][_0x577feb][_0x1d5249(0x150)] !== ![] || _0x531b4d[_0x1d5249(0x8cd)][_0x577feb]["scaleWidth"] !== ![] || _0x531b4d[_0x1d5249(0x8cd)][_0x577feb]["scaleHeight"] !== ![])
                    return (
                        log(_0x1d5249(0x653) + _0x531b4d[_0x1d5249(0x8cd)][_0x577feb][_0x1d5249(0x9be)] + _0x1d5249(0x495) + _0x531b4d["pcs"][_0x577feb]["scaleHeight"]),
                        _0x531b4d["setResolution"](
                            _0x577feb,
                            _0x531b4d[_0x1d5249(0x8cd)][_0x577feb]["scaleWidth"],
                            _0x531b4d[_0x1d5249(0x8cd)][_0x577feb][_0x1d5249(0x3f6)],
                            _0x531b4d[_0x1d5249(0x8cd)][_0x577feb]["scaleSnap"],
                            _0x531b4d[_0x1d5249(0x8cd)][_0x577feb]["cover"]
                        ),
                        !![]
                    );
                else {
                    if (_0x531b4d["pcs"][_0x577feb][_0x1d5249(0x72e)] !== ![]) return log(_0x1d5249(0x462)), _0x531b4d[_0x1d5249(0x620)](_0x577feb, _0x531b4d[_0x1d5249(0x8cd)][_0x577feb][_0x1d5249(0x72e)]), !![];
                }
            } else
                for (var _0x69cb4c in _0x531b4d["pcs"]) {
                    setTimeout(
                        function (_0x2813bc) {
                            var _0x32ea64 = _0x1d5249;
                            if (_0x531b4d["pcs"][_0x2813bc][_0x32ea64(0x150)] !== ![] || _0x531b4d[_0x32ea64(0x8cd)][_0x2813bc][_0x32ea64(0x9be)] !== ![] || _0x531b4d[_0x32ea64(0x8cd)][_0x2813bc]["scaleHeight"] !== ![])
                                log("resolution\x20scale:\x20" + _0x531b4d[_0x32ea64(0x8cd)][_0x2813bc][_0x32ea64(0x9be)] + _0x32ea64(0x495) + _0x531b4d[_0x32ea64(0x8cd)][_0x2813bc]["scaleHeight"]),
                                    _0x531b4d["setResolution"](
                                        _0x2813bc,
                                        _0x531b4d["pcs"][_0x2813bc][_0x32ea64(0x9be)],
                                        _0x531b4d[_0x32ea64(0x8cd)][_0x2813bc]["scaleHeight"],
                                        _0x531b4d[_0x32ea64(0x8cd)][_0x2813bc]["scaleSnap"],
                                        _0x531b4d[_0x32ea64(0x8cd)][_0x577feb]["cover"]
                                    );
                            else _0x531b4d[_0x32ea64(0x8cd)][_0x2813bc][_0x32ea64(0x72e)] !== ![] && (log(_0x32ea64(0x462)), _0x531b4d[_0x32ea64(0x620)](_0x2813bc, _0x531b4d[_0x32ea64(0x8cd)][_0x2813bc][_0x32ea64(0x72e)]));
                        },
                        0x0,
                        _0x69cb4c
                    );
                }
            return ![];
        }),
        (_0x531b4d[_0x4e3749(0x15e)] = function (_0x410918 = _0x531b4d[_0x4e3749(0x836)]) {
            var _0x406470 = _0x4e3749;
            warnlog(_0x406470(0x6a6));
            if (_0x531b4d["mc"]["scale"] !== _0x410918) {
                if (_0x410918 == null) {
                    try {
                        var _0x40c2fd = _0x531b4d["mc"][_0x406470(0x3a2)]()[_0x406470(0xa18)](function (_0x92a58a) {
                            var _0x359665 = _0x406470;
                            return _0x92a58a[_0x359665(0x88b)] && _0x92a58a["track"][_0x359665(0x722)] == _0x359665(0x211);
                        });
                    } catch (_0x14fc8e) {
                        errorlog(_0x14fc8e);
                    }
                    if (!_0x40c2fd) {
                        warnlog(_0x406470(0x565));
                        return;
                    }
                    var _0x2a7e81 = _0x40c2fd[_0x406470(0x9cb)]();
                    (!_0x2a7e81[_0x406470(0x468)] || _0x2a7e81["encodings"][_0x406470(0x1bf)] == 0x0) && (_0x2a7e81["encodings"] = [{}]),
                        _0x406470(0x422) in _0x2a7e81[_0x406470(0x468)][0x0] ? ((_0x410918 = 0x64 / _0x2a7e81[_0x406470(0x468)][0x0][_0x406470(0x422)]), (_0x410918 = _0x410918 * 0.95)) : (_0x410918 = 0x5f);
                } else _0x531b4d["mc"][_0x406470(0x72e)] = _0x410918;
                try {
                    if (SafariVersion && SafariVersion <= 0xd && (iOS || iPad)) log(_0x406470(0x856));
                    else {
                        if ("RTCRtpSender" in window && _0x406470(0x7fa) in window[_0x406470(0x5eb)][_0x406470(0x9ec)]) {
                            try {
                                var _0x40c2fd = _0x531b4d["mc"]["getSenders"]()[_0x406470(0xa18)](function (_0x55609c) {
                                    var _0x386300 = _0x406470;
                                    return _0x55609c[_0x386300(0x88b)] && _0x55609c["track"][_0x386300(0x722)] == "video";
                                });
                            } catch (_0x776ae7) {
                                errorlog(_0x776ae7);
                            }
                            if (!_0x40c2fd) {
                                warnlog(_0x406470(0x565));
                                return;
                            }
                            var _0x5c0920 = {};
                            if (_0x410918 <= 0x0 || _0x410918 == 0x64) {
                                var _0x5200a3 = getChromeVersion();
                                _0x5200a3 > 0x50 ? (_0x5c0920[_0x406470(0x422)] = null) : (_0x5c0920[_0x406470(0x422)] = 0x1);
                            } else _0x5c0920["scaleResolutionDownBy"] = 0x64 / _0x410918;
                            setEncodings(
                                _0x40c2fd,
                                _0x5c0920,
                                function (_0x554aee) {
                                    var _0xcfe48d = _0x406470;
                                    log(_0xcfe48d(0x810)),
                                        pokeIframeAPI(_0xcfe48d(0x45b), _0x554aee, "meshcast"),
                                        pokeIframeAPI("set-video-scale", _0x554aee, _0xcfe48d(0x389)),
                                        (_0x531b4d["mc"][_0xcfe48d(0x21d)][_0xcfe48d(0x5aa)] = parseInt(_0x554aee) + "%");
                                },
                                _0x410918
                            );
                            return;
                        }
                    }
                } catch (_0x662860) {
                    errorlog(_0x662860);
                }
            }
        }),
        (_0x531b4d[_0x4e3749(0x620)] = function (_0x1ec1de, _0x38fdac) {
            var _0xf4e833 = _0x4e3749;
            warnlog("SET\x20SCALING\x20IS\x20FIRING,\x20which\x20is\x20GOOD\x20!!!!!!");
            try {
                _0x531b4d[_0xf4e833(0x8cd)][_0x1ec1de][_0xf4e833(0x21d)][_0xf4e833(0x5aa)] = _0x38fdac;
            } catch (_0x648c16) {
                errorlog(_0x648c16);
            }
            if (_0x531b4d[_0xf4e833(0x8cd)][_0x1ec1de][_0xf4e833(0x72e)] === _0x38fdac) return;
            if (_0x38fdac == null) {
                try {
                    var _0x5e9d0d = getSenders2(_0x1ec1de)[_0xf4e833(0xa18)](function (_0x2c887c) {
                        var _0x410624 = _0xf4e833;
                        return _0x2c887c[_0x410624(0x88b)] && _0x2c887c[_0x410624(0x88b)][_0x410624(0x722)] == _0x410624(0x211);
                    });
                } catch (_0x390fe0) {
                    errorlog(_0x390fe0);
                }
                if (!_0x5e9d0d) {
                    warnlog(_0xf4e833(0x565));
                    return;
                }
                var _0x4c0ddc = _0x5e9d0d[_0xf4e833(0x9cb)]();
                (!_0x4c0ddc[_0xf4e833(0x468)] || _0x4c0ddc["encodings"][_0xf4e833(0x1bf)] == 0x0) && (_0x4c0ddc[_0xf4e833(0x468)] = [{}]),
                    _0xf4e833(0x422) in _0x4c0ddc["encodings"][0x0] ? ((_0x38fdac = 0x64 / _0x4c0ddc[_0xf4e833(0x468)][0x0][_0xf4e833(0x422)]), (_0x38fdac = _0x38fdac * 0.95)) : (_0x38fdac = 0x5f);
            } else (_0x38fdac = Math[_0xf4e833(0x78d)](_0x38fdac)), (_0x531b4d[_0xf4e833(0x8cd)][_0x1ec1de][_0xf4e833(0x72e)] = _0x38fdac);
            try {
                if (SafariVersion && SafariVersion <= 0xd && (iOS || iPad)) log(_0xf4e833(0x856));
                else {
                    if (_0xf4e833(0x5eb) in window && _0xf4e833(0x7fa) in window[_0xf4e833(0x5eb)][_0xf4e833(0x9ec)]) {
                        try {
                            var _0x5e9d0d = getSenders2(_0x1ec1de)[_0xf4e833(0xa18)](function (_0x475ff8) {
                                var _0x124e7e = _0xf4e833;
                                return _0x475ff8[_0x124e7e(0x88b)] && _0x475ff8["track"]["kind"] == "video";
                            });
                        } catch (_0xad249c) {
                            errorlog(_0xad249c);
                        }
                        if (!_0x5e9d0d) {
                            warnlog(_0xf4e833(0x565));
                            return;
                        }
                        _0x38fdac = _0x531b4d[_0xf4e833(0x79a)](_0x1ec1de, ![], _0x38fdac);
                        var _0x3a4352 = {};
                        if (_0x38fdac <= 0x0 || _0x38fdac == 0x64) {
                            var _0x52ef25 = getChromeVersion();
                            _0x52ef25 > 0x50 ? (_0x3a4352["scaleResolutionDownBy"] = null) : (_0x3a4352[_0xf4e833(0x422)] = 0x1);
                        } else _0x3a4352[_0xf4e833(0x422)] = 0x64 / _0x38fdac;
                        setEncodings(
                            _0x5e9d0d,
                            _0x3a4352,
                            function (_0x21f80c) {
                                var _0x25f1b7 = _0xf4e833;
                                log(_0x25f1b7(0x810)),
                                    pokeIframeAPI(_0x25f1b7(0x45b), _0x21f80c[0x0], _0x21f80c[0x1]),
                                    pokeIframeAPI(_0x25f1b7(0x5a6), _0x21f80c[0x0], _0x21f80c[0x1]),
                                    (_0x531b4d[_0x25f1b7(0x8cd)][_0x21f80c[0x1]][_0x25f1b7(0x21d)][_0x25f1b7(0x5aa)] = parseInt(_0x21f80c[0x0]) + "%");
                            },
                            [_0x38fdac, _0x1ec1de]
                        );
                        return;
                    }
                }
            } catch (_0x3184b5) {
                errorlog(_0x3184b5);
            }
        }),
        (_0x531b4d[_0x4e3749(0x38a)] = function (_0x3403db, _0x69ba14, _0x20269c, _0x4043a0 = ![], _0x17cebb = ![], _0x11dc28 = null) {
            var _0x24ce9c = _0x4e3749;
            if (!(_0x3403db in _0x531b4d[_0x24ce9c(0x39e)])) return;
            _0x11dc28 === null && (_0x11dc28 = _0x531b4d[_0x24ce9c(0x619)] || ![]);
            var _0x3819ab = ![];
            !(_0x531b4d[_0x24ce9c(0x39e)][_0x3403db]["scaleWidth"] == Math[_0x24ce9c(0x76d)](_0x69ba14) || _0x531b4d[_0x24ce9c(0x39e)][_0x3403db][_0x24ce9c(0x9be)] === Math[_0x24ce9c(0x78d)](_0x69ba14)) &&
                ((_0x69ba14 = Math["round"](_0x69ba14)), (_0x531b4d[_0x24ce9c(0x39e)][_0x3403db][_0x24ce9c(0x9be)] = _0x69ba14), (_0x3819ab = !![]));
            !(_0x531b4d[_0x24ce9c(0x39e)][_0x3403db][_0x24ce9c(0x3f6)] == Math[_0x24ce9c(0x76d)](_0x20269c) || _0x531b4d[_0x24ce9c(0x39e)][_0x3403db]["scaleHeight"] === Math[_0x24ce9c(0x78d)](_0x20269c)) &&
                ((_0x20269c = Math[_0x24ce9c(0x936)](_0x20269c)), (_0x531b4d[_0x24ce9c(0x39e)][_0x3403db]["scaleHeight"] = _0x20269c), (_0x3819ab = !![]));
            _0x531b4d[_0x24ce9c(0x39e)][_0x3403db][_0x24ce9c(0x241)] != _0x4043a0 && ((_0x531b4d[_0x24ce9c(0x39e)][_0x3403db][_0x24ce9c(0x241)] = _0x4043a0), (_0x3819ab = !![]));
            (_0x69ba14 = Math["round"](_0x69ba14)), (_0x20269c = Math["round"](_0x20269c));
            if (_0x3819ab) {
                var _0x25b98d = {};
                (_0x25b98d["UUID"] = _0x3403db),
                    (_0x25b98d[_0x24ce9c(0x38a)] = { w: _0x69ba14, h: _0x20269c, s: _0x4043a0, c: _0x11dc28 }),
                    _0x17cebb && (_0x25b98d[_0x24ce9c(0x615)] = _0x17cebb),
                    log(_0x69ba14 + "\x20" + _0x20269c),
                    _0x531b4d["sendRequest"](_0x25b98d, _0x3403db);
            }
            _0x4043a0
                ? (_0x531b4d["rpcs"][_0x3403db]["stats"][_0x24ce9c(0x383)] = "~\x20" + parseInt(_0x69ba14) + "\x20x\x20" + parseInt(_0x20269c))
                : (_0x531b4d[_0x24ce9c(0x39e)][_0x3403db]["stats"]["Requested_resolution"] = parseInt(_0x69ba14) + _0x24ce9c(0x495) + parseInt(_0x20269c));
        }),
        (_0x531b4d[_0x4e3749(0x79a)] = function (_0x1620c8, _0x2a16c8 = ![], _0x1447f5 = ![]) {
            var _0x5e23b3 = _0x4e3749;
            if (_0x1447f5) {
            } else _0x531b4d["pcs"][_0x1620c8][_0x5e23b3(0x72e)] ? (_0x1447f5 = _0x531b4d[_0x5e23b3(0x8cd)][_0x1620c8][_0x5e23b3(0x72e)]) : (_0x1447f5 = 0x64);
            _0x531b4d[_0x5e23b3(0x8cd)][_0x1620c8][_0x5e23b3(0x150)] && _0x1447f5 > _0x531b4d["pcs"][_0x1620c8]["scaleResolution"] && (_0x1447f5 = _0x531b4d[_0x5e23b3(0x8cd)][_0x1620c8]["scaleResolution"]);
            if (_0x2a16c8) _0x1447f5 = _0x515fc6(_0x1620c8, _0x1447f5, _0x2a16c8);
            else _0x531b4d[_0x5e23b3(0x8cd)][_0x1620c8]["scaleDueToBitrate"] && _0x531b4d[_0x5e23b3(0x8cd)][_0x1620c8]["scaleDueToBitrate"] < _0x1447f5 && (_0x1447f5 = _0x531b4d[_0x5e23b3(0x8cd)][_0x1620c8][_0x5e23b3(0x5f9)]);
            if (_0x531b4d[_0x5e23b3(0x2cc)] && _0x531b4d[_0x5e23b3(0x8cd)][_0x1620c8][_0x5e23b3(0x241)]) {
                if (_0x1447f5 > 0x55) _0x1447f5 = 0x64;
                else _0x1447f5 > 0x2a && _0x1447f5 < 0x32 && (_0x1447f5 = 0x32);
            }
            return (_0x1447f5 = _0x531b4d[_0x5e23b3(0x192)](_0x1447f5, _0x1620c8)), _0x1447f5;
        }),
        (_0x531b4d[_0x4e3749(0x316)] = function (_0x238aae = ![], _0x1cb451 = null, _0x429756 = null, _0x40c35b = ![], _0x15db49 = ![]) {
            var _0x218d9a = _0x4e3749;
            if (_0x238aae && !(_0x238aae in _0x531b4d["pcs"])) return;
            else {
                if (!_0x238aae) {
                    for (var _0x335e70 in _0x531b4d[_0x218d9a(0x8cd)]) {
                        _0x531b4d[_0x218d9a(0x316)](_0x335e70);
                    }
                    return;
                }
            }
            (_0x15db49 = _0x15db49 || ![]), (snape = _0x40c35b || ![]);
            if (_0x1cb451 === null && _0x429756 === null) {
                if (!_0x531b4d[_0x218d9a(0x8cd)][_0x238aae][_0x218d9a(0x9be)] && !_0x531b4d[_0x218d9a(0x8cd)][_0x238aae][_0x218d9a(0x3f6)]) return;
                else (_0x1cb451 = _0x531b4d[_0x218d9a(0x8cd)][_0x238aae][_0x218d9a(0x9be)] || 0x64), (_0x429756 = _0x531b4d[_0x218d9a(0x8cd)][_0x238aae][_0x218d9a(0x3f6)] || 0x64);
            } else
                (_0x531b4d[_0x218d9a(0x8cd)][_0x238aae][_0x218d9a(0x9be)] = _0x1cb451),
                    (_0x531b4d["pcs"][_0x238aae][_0x218d9a(0x3f6)] = _0x429756),
                    (_0x531b4d[_0x218d9a(0x8cd)][_0x238aae][_0x218d9a(0x241)] = _0x40c35b),
                    (_0x531b4d["pcs"][_0x238aae][_0x218d9a(0x619)] = _0x15db49);
            if (SafariVersion && SafariVersion <= 0xd && (iOS || iPad)) return;
            if ("RTCRtpSender" in window && "setParameters" in window[_0x218d9a(0x5eb)][_0x218d9a(0x9ec)]) {
                var _0x29f30a = getSenders2(_0x238aae)[_0x218d9a(0xa18)](function (_0x38dfc6) {
                    var _0x11ac07 = _0x218d9a;
                    return _0x38dfc6[_0x11ac07(0x88b)] && _0x38dfc6[_0x11ac07(0x88b)]["kind"] == _0x11ac07(0x211);
                });
                if (!_0x29f30a) {
                    warnlog(_0x218d9a(0x9aa));
                    return;
                }
                var _0x2d0282 = {};
                if (_0x218d9a(0x326) in _0x531b4d[_0x218d9a(0x8cd)][_0x238aae]) {
                    var _0x392a2a = _0x531b4d[_0x218d9a(0x379)][_0x218d9a(0x753)]();
                    if (_0x392a2a[_0x218d9a(0x1bf)])
                        var _0x40e964 = _0x392a2a[0x0][_0x218d9a(0x617)](),
                            _0x3e25a8 = _0x40e964[_0x218d9a(0x63d)],
                            _0x5a1b78 = _0x40e964[_0x218d9a(0x3c1)];
                    else return;
                } else {
                    if (_0x531b4d[_0x218d9a(0x6fa)] && _0x531b4d[_0x218d9a(0x6fa)]["srcObject"]) {
                        var _0x392a2a = _0x531b4d[_0x218d9a(0x6fa)][_0x218d9a(0x60a)][_0x218d9a(0x753)]();
                        if (_0x392a2a[_0x218d9a(0x1bf)])
                            var _0x40e964 = _0x392a2a[0x0][_0x218d9a(0x617)](),
                                _0x3e25a8 = _0x40e964[_0x218d9a(0x63d)],
                                _0x5a1b78 = _0x40e964[_0x218d9a(0x3c1)];
                        else return;
                    } else return;
                }
                _0x1cb451 == null && (_0x1cb451 = 0x0);
                _0x429756 == null && (_0x429756 = 0x0);
                var _0xa2c2da = (0x64 * _0x1cb451) / _0x5a1b78,
                    _0x21dfbb = (0x64 * _0x429756) / _0x3e25a8;
                log(_0xa2c2da + "\x20x\x20" + _0x21dfbb);
                var _0x18b6e7 = 0x64;
                _0x15db49 ? (_0xa2c2da > _0x21dfbb ? (_0x18b6e7 = _0xa2c2da) : (_0x18b6e7 = _0x21dfbb)) : _0xa2c2da < _0x21dfbb ? (_0x18b6e7 = _0xa2c2da) : (_0x18b6e7 = _0x21dfbb);
                _0x18b6e7 > 0x64 && (_0x18b6e7 = 0x64);
                log("resolution\x20scale:\x20" + _0x18b6e7), (_0x531b4d["pcs"][_0x238aae]["scaleResolution"] = _0x18b6e7);
                var _0x39cba0 = _0x531b4d[_0x218d9a(0x79a)](_0x238aae);
                if (_0x39cba0 <= 0x0 || _0x39cba0 == 0x64) {
                    var _0x2ecb7d = getChromeVersion();
                    _0x2ecb7d > 0x50 ? (_0x2d0282[_0x218d9a(0x422)] = null) : (_0x2d0282[_0x218d9a(0x422)] = 0x1);
                } else _0x2d0282[_0x218d9a(0x422)] = 0x64 / _0x39cba0;
                setEncodings(
                    _0x29f30a,
                    _0x2d0282,
                    function (_0x4ede68) {
                        var _0x4497bc = _0x218d9a;
                        log("scale\x20set!"),
                            pokeIframeAPI(_0x4497bc(0x45b), _0x4ede68[0x0], _0x4ede68[0x1]),
                            pokeIframeAPI(_0x4497bc(0x5a6), _0x4ede68[0x0], _0x4ede68[0x1]),
                            (_0x531b4d[_0x4497bc(0x8cd)][_0x4ede68[0x1]][_0x4497bc(0x21d)][_0x4497bc(0x5aa)] = parseInt(_0x4ede68[0x0]) + "%");
                    },
                    [_0x39cba0, _0x238aae]
                );
                return;
            }
        }),
        (_0x531b4d["forcePLI"] = function (_0x5edc97 = null, _0x4d0fb4 = null) {
            var _0x45415e = _0x4e3749;
            _0x4d0fb4 && _0x4d0fb4["stopPropagation"]();
            _0x2edaf3 && ((_0x2edaf3[_0x45415e(0x6d1)] = !![]), log("FORCING\x20A\x20CHUNKED\x20KEY\x20FRAME:\x20" + _0x5edc97));
            if (iOS || iPad) return log(_0x45415e(0x856)), ![];
            else {
                if ("RTCRtpSender" in window && "setParameters" in window[_0x45415e(0x5eb)][_0x45415e(0x9ec)]) {
                    log(_0x45415e(0x26b) + _0x5edc97);
                    if (_0x5edc97 == null) {
                        for (_0x5edc97 in _0x531b4d["pcs"]) {
                            _0x531b4d[_0x45415e(0x977)](_0x5edc97);
                        }
                        return ![];
                    }
                    if (!(_0x5edc97 in _0x531b4d["pcs"])) return ![];
                    _0x531b4d[_0x45415e(0x8cd)][_0x5edc97][_0x45415e(0x28d)] &&
                        (_0x531b4d[_0x45415e(0x8cd)][_0x5edc97][_0x45415e(0x64e)] && (clearTimeout(_0x531b4d[_0x45415e(0x8cd)][_0x5edc97][_0x45415e(0x64e)]), (_0x531b4d["pcs"][_0x5edc97][_0x45415e(0x64e)] = null)),
                        (_0x531b4d[_0x45415e(0x8cd)][_0x5edc97][_0x45415e(0x64e)] = setTimeout(
                            function (_0x193529) {
                                var _0x1b4e29 = _0x45415e;
                                !_0x531b4d[_0x1b4e29(0x8cd)][_0x193529] ? clearInterval(this) : _0x531b4d[_0x1b4e29(0x977)](_0x193529);
                            },
                            parseInt(_0x531b4d[_0x45415e(0x8cd)][_0x5edc97][_0x45415e(0x28d)]),
                            _0x5edc97
                        )));
                    try {
                        var _0x16b542 = getSenders2(_0x5edc97)["find"](function (_0x4ceb87) {
                            var _0x11df0b = _0x45415e;
                            return _0x4ceb87[_0x11df0b(0x88b)] && _0x4ceb87[_0x11df0b(0x88b)][_0x11df0b(0x722)] == _0x11df0b(0x211);
                        });
                        if (!_0x16b542) return warnlog(_0x45415e(0x9aa)), ![];
                        var _0x2f4150 = {};
                        return (
                            (_0x2f4150[_0x45415e(0x422)] = 0xa),
                            setEncodings(
                                _0x16b542,
                                _0x2f4150,
                                function (_0x2cc400) {
                                    var _0xd3c39f = _0x45415e;
                                    log("scaleResolutionDownBy\x20set\x202a!\x20" + _0x2cc400[0x0]);
                                    var _0x2fd028 = _0x531b4d[_0xd3c39f(0x79a)](_0x2cc400[0x0]),
                                        _0x4773f1 = {};
                                    if (_0x2fd028 <= 0x0 || _0x2fd028 == 0x64) {
                                        var _0x50bfc4 = getChromeVersion();
                                        _0x50bfc4 > 0x50 ? (_0x4773f1[_0xd3c39f(0x422)] = null) : (_0x4773f1[_0xd3c39f(0x422)] = 0x1);
                                    } else _0x4773f1[_0xd3c39f(0x422)] = 0x64 / _0x2fd028;
                                    setEncodings(_0x2cc400[0x1], _0x4773f1, function () {
                                        var _0xe4d447 = _0xd3c39f;
                                        log(_0xe4d447(0x6be));
                                    });
                                },
                                [_0x5edc97, _0x16b542]
                            ),
                            !![]
                        );
                    } catch (_0x267163) {
                        errorlog(_0x267163);
                    }
                }
            }
            return ![];
        }),
        (_0x531b4d[_0x4e3749(0x4ff)] = function (_0x5deadd) {
            var _0x545645 = _0x4e3749;
            log(_0x545645(0x56a));
            var _0xf10fbc = getSenders2(_0x5deadd)[_0x545645(0xa18)](function (_0x52ece8) {
                var _0x53da98 = _0x545645;
                return _0x52ece8[_0x53da98(0x88b)] && _0x52ece8["track"][_0x53da98(0x722)] == _0x53da98(0x9bb);
            });
            if (!_0xf10fbc) return log(_0x545645(0x35b)), ![];
            var _0x6c0ea0 = {};
            try {
                (_0x6c0ea0["networkPriority"] = _0x545645(0x673)),
                    (_0x6c0ea0["priority"] = _0x545645(0x673)),
                    (_0x6c0ea0[_0x545645(0x625)] = !![]),
                    setEncodings(
                        _0xf10fbc,
                        _0x6c0ea0,
                        function (_0x12acf8) {
                            var _0x2c4a10 = _0x545645;
                            log(_0x2c4a10(0xa21)), pokeIframeAPI(_0x2c4a10(0x8be), !![], _0x12acf8);
                        },
                        _0x5deadd
                    );
            } catch (_0x894d65) {
                errorlog(_0x894d65);
            }
        }),
        (_0x531b4d[_0x4e3749(0x3dc)] = function (_0xc60abf, _0x3877ef = _0x4e3749(0xa00)) {
            var _0x659ba2 = _0x4e3749,
                _0x4de691 = getSenders2(_0xc60abf)[_0x659ba2(0xa18)](function (_0x4df673) {
                    var _0x336858 = _0x659ba2;
                    return _0x4df673[_0x336858(0x88b)] && _0x4df673[_0x336858(0x88b)][_0x336858(0x722)] == _0x336858(0x211);
                });
            if (!_0x4de691) return log(_0x659ba2(0x4cc)), ![];
            var _0x27647d = {};
            try {
                _0x3877ef === !![] ? ((_0x27647d[_0x659ba2(0x3dc)] = "maintain-framerate"), log(_0x659ba2(0x2d1))) : ((_0x27647d["degradationPreference"] = _0x3877ef), log("done\x20setting\x20degrad\x20to\x20" + _0x3877ef)),
                    setEncodings(
                        _0x4de691,
                        _0x27647d,
                        (function () {
                            var _0x36196d = _0x659ba2;
                            log(_0x36196d(0x837));
                        })()
                    );
            } catch (_0x36f8d9) {
                errorlog(_0x36f8d9);
            }
        }),
        (_0x531b4d[_0x4e3749(0x197)] = function (_0x5505ab, _0x10431b, _0x400593 = ![]) {
            var _0x3868ec = _0x4e3749;
            log(_0x3868ec(0x678) + _0x5505ab + _0x3868ec(0x97a) + _0x400593);
            if (_0x531b4d[_0x3868ec(0x79c)] === ![]) return;
            (_0x10431b[_0x3868ec(0x79c)] = parseInt((_0x531b4d["maxBandwidth"] / 0x64) * _0x5505ab)), _0x400593 ? _0x531b4d["limitMeshcastBitrate"](null) : _0x531b4d[_0x3868ec(0x6d0)](_0x10431b["UUID"], null);
        }),
        (_0x531b4d[_0x4e3749(0x759)] = function (_0x1e6ab4, _0x29df5a = 0x7d00, _0x4cf545 = 0x3e8) {
            var _0xd48e12 = _0x4e3749;
            log(_0xd48e12(0x956));
            var _0x2aa90f = getSenders2(_0x1e6ab4)[_0xd48e12(0xa18)](function (_0x1a6438) {
                var _0x7545ab = _0xd48e12;
                return _0x1a6438[_0x7545ab(0x88b)] && _0x1a6438[_0x7545ab(0x88b)][_0x7545ab(0x722)] == _0x7545ab(0x9bb);
            });
            if (!_0x2aa90f) return log("no\x20audio\x20track\x20to\x20poke"), ![];
            var _0x14f8c4 = {};
            (_0x14f8c4["maxBitrate"] = _0x29df5a),
                setEncodings(
                    _0x2aa90f,
                    _0x14f8c4,
                    function (_0xd9ac7d) {
                        var _0x55b305 = _0xd48e12;
                        pokeIframeAPI("setAudioBitrate", _0xd9ac7d[0x0], _0xd9ac7d[0x1]),
                            pokeIframeAPI(_0x55b305(0x590), _0xd9ac7d[0x0], _0xd9ac7d[0x1]),
                            _0xd9ac7d[0x2] > 0x0 &&
                                setTimeout(
                                    function () {
                                        var _0x424f74 = _0x55b305;
                                        try {
                                            if (_0xd9ac7d[0x1] in _0x531b4d[_0x424f74(0x8cd)])
                                                var _0x1dbdbb = getSenders2(_0xd9ac7d[0x1])[_0x424f74(0xa18)](function (_0x3ca921) {
                                                    var _0x15884a = _0x424f74;
                                                    return _0x3ca921[_0x15884a(0x88b)] && _0x3ca921["track"][_0x15884a(0x722)] == "audio";
                                                });
                                            else return ![];
                                            if (!_0x1dbdbb) return log(_0x424f74(0x35b)), ![];
                                            var _0x2c101f = {};
                                            (_0x2c101f[_0x424f74(0x4f5)] = null),
                                                setEncodings(_0x1dbdbb, _0x2c101f, function () {
                                                    var _0x4037d6 = _0x424f74;
                                                    log(_0x4037d6(0xa21));
                                                });
                                        } catch (_0x2e6fe5) {
                                            errorlog(_0x2e6fe5);
                                        }
                                    },
                                    _0xd9ac7d[0x2],
                                    _0xd9ac7d[0x1]
                                );
                    },
                    [_0x29df5a, _0x1e6ab4, _0x4cf545]
                );
        }),
        (_0x531b4d[_0x4e3749(0x7a7)] = function (_0x23dd99, _0xa0a82f, _0x134531) {
            var _0x2d8db4 = _0x4e3749;
            pokeIframeAPI(_0x2d8db4(0x742), _0x23dd99, _0x134531);
            if (_0x531b4d[_0x2d8db4(0x7f4)])
                return generateHash(_0x23dd99 + _0x531b4d[_0x2d8db4(0x7f4)] + _0x531b4d["salt"], 0x10)
                    [_0x2d8db4(0x741)](function (_0x23e783) {
                        var _0x178acf = _0x2d8db4,
                            _0x2b9012 = {};
                        _0xa0a82f["updateurl"] && (_0xa0a82f[_0x178acf(0x8e0)] = _0x23e783);
                        if (_0x531b4d[_0x178acf(0x276)] && _0x531b4d[_0x178acf(0x82d)])
                            (_0x2b9012[_0x178acf(0x80d)] = _0x134531), (_0x2b9012[_0x178acf(0x875)] = _0x23e783), (_0x2b9012["transferSettings"] = _0xa0a82f), _0x531b4d["sendRequest"](_0x2b9012, _0x531b4d[_0x178acf(0x82d)]), log(_0x2b9012);
                        else {
                            if (_0xa0a82f["updateurl"]) {
                                (_0x2b9012[_0x178acf(0x884)] = _0x178acf(0x80d)), (_0x2b9012[_0x178acf(0x14f)] = _0xa0a82f), log(_0x2b9012);
                                if (_0x531b4d[_0x178acf(0x1a7)](_0x2b9012, _0x134531)) {
                                    var _0x2b9012 = {};
                                    (_0x2b9012[_0x178acf(0x884)] = _0x178acf(0x80d)), (_0x2b9012[_0x178acf(0x875)] = _0x23e783), (_0x2b9012[_0x178acf(0x50f)] = _0x134531), _0x531b4d[_0x178acf(0x8de)](_0x2b9012);
                                }
                                log(_0x2b9012);
                            } else {
                                if (_0x178acf(0x6e8) in _0xa0a82f) {
                                    (_0x2b9012["request"] = _0x178acf(0x80d)),
                                        (_0x2b9012["transferSettings"] = _0xa0a82f),
                                        delete _0x2b9012[_0x178acf(0x14f)][_0x178acf(0x875)],
                                        delete _0x2b9012[_0x178acf(0x14f)][_0x178acf(0x8e0)],
                                        log(_0x2b9012);
                                    if (_0x531b4d["sendRequest"](_0x2b9012, _0x134531)) {
                                        var _0x2b9012 = {};
                                        (_0x2b9012[_0x178acf(0x884)] = _0x178acf(0x80d)), (_0x2b9012[_0x178acf(0x875)] = _0x23e783), (_0x2b9012[_0x178acf(0x50f)] = _0x134531), _0x531b4d[_0x178acf(0x8de)](_0x2b9012);
                                    }
                                    log(_0x2b9012);
                                } else (_0x2b9012[_0x178acf(0x884)] = _0x178acf(0x80d)), (_0x2b9012[_0x178acf(0x875)] = _0x23e783), (_0x2b9012[_0x178acf(0x50f)] = _0x134531), _0x531b4d[_0x178acf(0x8de)](_0x2b9012);
                            }
                        }
                    })
                    [_0x2d8db4(0x524)](errorlog);
            else {
                _0xa0a82f[_0x2d8db4(0x452)] && (_0xa0a82f[_0x2d8db4(0x8e0)] = _0x23dd99);
                var _0x477e8b = {};
                if (_0x531b4d[_0x2d8db4(0x276)] && _0x531b4d[_0x2d8db4(0x82d)])
                    (_0x477e8b[_0x2d8db4(0x80d)] = _0x134531), (_0x477e8b[_0x2d8db4(0x875)] = _0x23dd99), (_0x477e8b[_0x2d8db4(0x14f)] = _0xa0a82f), _0x531b4d[_0x2d8db4(0x1a7)](_0x477e8b, _0x531b4d["directorUUID"]), log(_0x477e8b);
                else {
                    if (_0xa0a82f["updateurl"]) {
                        (_0x477e8b["request"] = "migrate"), (_0x477e8b[_0x2d8db4(0x14f)] = _0xa0a82f);
                        if (_0x531b4d[_0x2d8db4(0x1a7)](_0x477e8b, _0x134531)) {
                            log(_0x477e8b);
                            var _0x477e8b = {};
                            (_0x477e8b[_0x2d8db4(0x884)] = _0x2d8db4(0x80d)), (_0x477e8b["roomid"] = _0x23dd99), (_0x477e8b["target"] = _0x134531), _0x531b4d[_0x2d8db4(0x8de)](_0x477e8b);
                        }
                    } else {
                        if (_0x2d8db4(0x6e8) in _0xa0a82f) {
                            (_0x477e8b["request"] = _0x2d8db4(0x80d)), (_0x477e8b[_0x2d8db4(0x14f)] = _0xa0a82f), delete _0x477e8b[_0x2d8db4(0x14f)]["roomid"], delete _0x477e8b[_0x2d8db4(0x14f)][_0x2d8db4(0x8e0)];
                            if (_0x531b4d["sendRequest"](_0x477e8b, _0x134531)) {
                                warnlog(_0x477e8b);
                                var _0x477e8b = {};
                                (_0x477e8b[_0x2d8db4(0x884)] = "migrate"), (_0x477e8b[_0x2d8db4(0x875)] = rid), (_0x477e8b[_0x2d8db4(0x50f)] = _0x134531), _0x531b4d[_0x2d8db4(0x8de)](_0x477e8b);
                            }
                        } else (_0x477e8b[_0x2d8db4(0x884)] = _0x2d8db4(0x80d)), (_0x477e8b[_0x2d8db4(0x875)] = _0x23dd99), (_0x477e8b[_0x2d8db4(0x50f)] = _0x134531), _0x531b4d["sendMsg"](_0x477e8b);
                    }
                }
            }
        }),
        (_0x531b4d[_0x4e3749(0x71a)] = async function (_0x70aff5, _0x5896dc) {
            var _0x2fdc22 = _0x4e3749;
            _0x5896dc = parseInt(_0x5896dc);
            try {
                var _0x2d60aa = getSenders2(_0x70aff5)[_0x2fdc22(0xa18)](function (_0x4f6a67) {
                    var _0xa87fe8 = _0x2fdc22;
                    return _0x4f6a67[_0xa87fe8(0x88b)] && _0x4f6a67[_0xa87fe8(0x88b)][_0xa87fe8(0x722)] == _0xa87fe8(0x9bb);
                });
                if (!_0x2d60aa) {
                    warnlog(_0x2fdc22(0x496));
                    return;
                }
                var _0x16932b = {};
                if (_0x5896dc < 0x0) {
                    _0x16932b[_0x2fdc22(0x902)] = !![];
                    if (SafariVersion && SafariVersion <= 0xd && (iOS || iPad)) {
                        _0x5896dc = 0x20;
                        if (_0x531b4d[_0x2fdc22(0x8cd)][_0x70aff5][_0x2fdc22(0x939)] !== ![]) _0x5896dc = _0x531b4d[_0x2fdc22(0x8cd)][_0x70aff5]["setAudioBitrate"];
                        else _0x531b4d["audiobitrate"] && (_0x5896dc = _0x531b4d[_0x2fdc22(0x43d)]);
                        _0x16932b[_0x2fdc22(0x4f5)] = _0x5896dc * 0x400;
                    } else
                        _0x531b4d[_0x2fdc22(0x8cd)][_0x70aff5][_0x2fdc22(0x939)] !== ![]
                            ? ((_0x5896dc = _0x531b4d[_0x2fdc22(0x8cd)][_0x70aff5][_0x2fdc22(0x939)]), (_0x16932b[_0x2fdc22(0x4f5)] = _0x5896dc * 0x400))
                            : (_0x16932b[_0x2fdc22(0x4f5)] = null);
                } else _0x5896dc === 0x0 ? (_0x16932b[_0x2fdc22(0x902)] = ![]) : ((_0x16932b["active"] = !![]), (_0x16932b[_0x2fdc22(0x4f5)] = _0x5896dc * 0x400));
                _0x531b4d[_0x2fdc22(0x8cd)][_0x70aff5]["audioMutedOverride"] && (_0x16932b["active"] = ![]),
                    setEncodings(
                        _0x2d60aa,
                        _0x16932b,
                        function (_0x564f80) {
                            var _0x4a5a6c = _0x2fdc22;
                            pokeIframeAPI(_0x4a5a6c(0x939), _0x564f80[0x0], _0x564f80[0x1]), pokeIframeAPI(_0x4a5a6c(0x590), _0x564f80[0x0], _0x564f80[0x1]), log(_0x4a5a6c(0x8f2));
                        },
                        [_0x5896dc, _0x70aff5]
                    );
            } catch (_0x3b7a70) {
                errorlog(_0x3b7a70), log(_0x70aff5), log(_0x531b4d["pcs"][_0x70aff5]);
            }
        }),
        (_0x531b4d[_0x4e3749(0xa05)] = function (_0x595985) {
            var _0x55cc48 = _0x4e3749;
            if (_0x531b4d[_0x55cc48(0x56c)] && _0x531b4d[_0x55cc48(0x8cd)][_0x595985][_0x55cc48(0x9e0)] === !![])
                _0x531b4d["limitBitrate"](_0x595985, 0x0),
                    _0x531b4d[_0x55cc48(0x8cd)][_0x595985][_0x55cc48(0x42f)] === 0x0 &&
                        (_0x531b4d["pcs"][_0x595985]["obsState"][_0x55cc48(0x420)] === ![] ? _0x531b4d["limitAudioBitrate"](_0x595985, 0x0) : _0x531b4d[_0x55cc48(0x71a)](_0x595985, -0x1));
            else {
                if (_0x531b4d["pcs"][_0x595985] && _0x531b4d["pcs"][_0x595985]["optimizedBitrate"] !== ![]) {
                    if (_0x531b4d[_0x55cc48(0x8cd)][_0x595985][_0x55cc48(0x4fb)][_0x55cc48(0x420)] === ![]) {
                        var _0x152a5a = _0x531b4d["pcs"][_0x595985][_0x55cc48(0x42f)];
                        _0x531b4d[_0x55cc48(0x8cd)][_0x595985][_0x55cc48(0x7e2)] &&
                            _0x531b4d[_0x55cc48(0x8cd)][_0x595985][_0x55cc48(0x7e2)] > 0x0 &&
                            _0x531b4d[_0x55cc48(0x8cd)][_0x595985][_0x55cc48(0x7e2)] < _0x531b4d["pcs"][_0x595985]["optimizedBitrate"] &&
                            (_0x152a5a = _0x531b4d[_0x55cc48(0x8cd)][_0x595985][_0x55cc48(0x7e2)]),
                            _0x531b4d[_0x55cc48(0x6d0)](_0x595985, _0x152a5a),
                            _0x531b4d["pcs"][_0x595985][_0x55cc48(0x42f)] === 0x0 && _0x531b4d[_0x55cc48(0x71a)](_0x595985, 0x0);
                    } else
                        _0x531b4d[_0x55cc48(0x8cd)][_0x595985][_0x55cc48(0x42f)] === 0x0 &&
                            (_0x531b4d[_0x55cc48(0x71a)](_0x595985, -0x1), _0x531b4d["limitTotalBitrateGuests"](), _0x531b4d[_0x55cc48(0x7a0)] && _0x531b4d[_0x55cc48(0x6d0)](_0x595985, null));
                } else _0x531b4d[_0x55cc48(0x516)](), _0x531b4d[_0x55cc48(0x7a0)] && _0x531b4d["limitBitrate"](_0x595985, null);
            }
        }),
        (_0x531b4d["limitTotalBitrateGuests"] = function (_0x29ad64 = 0x0, _0x542bb8 = ![]) {
            var _0x248ae9 = _0x4e3749;
            if (!_0x531b4d["limitTotalBitrate"]) return _0x29ad64;
            if (!_0x531b4d[_0x248ae9(0x875)] || _0x531b4d[_0x248ae9(0x725)] !== ![]) return log("Switching\x20to\x20limitTotalBitrateAll"), _0x531b4d[_0x248ae9(0x81f)](_0x29ad64, _0x542bb8), _0x29ad64;
            if ((iOS || iPad) && SafariVersion && SafariVersion <= 0xd) return _0x29ad64;
            var _0x169c31 = _0x29ad64;
            if (_0x542bb8 === ![]) _0x169c31 = 0x0;
            else _0x169c31 < 0x0 && (_0x169c31 = _0x531b4d[_0x248ae9(0x8cd)][_0x542bb8]["setBitrate"] || _0x531b4d[_0x248ae9(0x4f7)] || _0x531b4d["pcs"][_0x51ee9f]["maxBandwidth"] || 0x9c4);
            var _0x5369d9 = 0x0;
            for (var _0x51ee9f in _0x531b4d["pcs"]) {
                if (_0x542bb8 === _0x51ee9f) continue;
                if (!_0x531b4d["pcs"][_0x51ee9f][_0x248ae9(0x599)]) continue;
                try {
                    var _0x39e625 = getSenders2(_0x51ee9f)[_0x248ae9(0xa18)](function (_0x389c28) {
                        var _0x1909e8 = _0x248ae9;
                        return _0x389c28[_0x1909e8(0x88b)] && _0x389c28["track"][_0x1909e8(0x722)] == _0x1909e8(0x211);
                    });
                    if (!_0x39e625) continue;
                    var _0x9868af = _0x39e625["getParameters"]();
                    if (!_0x9868af[_0x248ae9(0x468)] || _0x9868af[_0x248ae9(0x468)][_0x248ae9(0x1bf)] == 0x0) {
                        _0x531b4d[_0x248ae9(0x8cd)][_0x51ee9f][_0x248ae9(0x8ca)] < 0x0
                            ? (_0x169c31 += _0x531b4d[_0x248ae9(0x4f7)] || _0x531b4d["pcs"][_0x51ee9f]["maxBandwidth"] || 0x9c4)
                            : (_0x169c31 += _0x531b4d[_0x248ae9(0x8cd)][_0x51ee9f]["setBitrate"] || _0x531b4d[_0x248ae9(0x4f7)] || _0x531b4d[_0x248ae9(0x8cd)][_0x51ee9f]["maxBandwidth"] || 0x9c4);
                        warnlog(_0x169c31), (_0x5369d9 += 0x1);
                        continue;
                    }
                    if (_0x9868af[_0x248ae9(0x468)][0x0][_0x248ae9(0x902)] == ![]) continue;
                    if (_0x9868af[_0x248ae9(0x468)][0x0][_0x248ae9(0x4f5)])
                        _0x248ae9(0x449) in _0x531b4d[_0x248ae9(0x8cd)][_0x51ee9f]
                            ? (_0x169c31 += parseInt(_0x531b4d[_0x248ae9(0x8cd)][_0x51ee9f][_0x248ae9(0x449)]))
                            : (_0x169c31 += parseInt(_0x9868af[_0x248ae9(0x468)][0x0][_0x248ae9(0x4f5)]) / 0x400);
                    else
                        _0x531b4d["pcs"][_0x51ee9f][_0x248ae9(0x8ca)] < 0x0
                            ? (_0x169c31 += _0x531b4d[_0x248ae9(0x4f7)] || _0x531b4d[_0x248ae9(0x8cd)][_0x51ee9f]["maxBandwidth"] || 0x9c4)
                            : ((_0x169c31 += _0x531b4d[_0x248ae9(0x8cd)][_0x51ee9f][_0x248ae9(0x8ca)] || _0x531b4d[_0x248ae9(0x4f7)] || _0x531b4d[_0x248ae9(0x8cd)][_0x51ee9f][_0x248ae9(0x79c)] || 0x9c4), warnlog(_0x169c31));
                    _0x5369d9 += 0x1;
                } catch (_0x594b8e) {
                    errorlog(_0x594b8e);
                }
            }
            if (!_0x169c31) return _0x169c31;
            warnlog(_0x248ae9(0x351) + _0x169c31);
            var _0x4708c8 = parseFloat(_0x169c31 / _0x531b4d[_0x248ae9(0x4ab)]);
            _0x4708c8 < 0x1 && (_0x4708c8 = 0x1);
            for (var _0x51ee9f in _0x531b4d[_0x248ae9(0x8cd)]) {
                if (_0x542bb8 === _0x51ee9f) continue;
                if (!_0x531b4d["pcs"][_0x51ee9f][_0x248ae9(0x599)]) continue;
                try {
                    var _0x39e625 = getSenders2(_0x51ee9f)[_0x248ae9(0xa18)](function (_0x5dc9cd) {
                        var _0x4df6ae = _0x248ae9;
                        return _0x5dc9cd[_0x4df6ae(0x88b)] && _0x5dc9cd[_0x4df6ae(0x88b)]["kind"] == _0x4df6ae(0x211);
                    });
                    if (!_0x39e625) continue;
                    var _0x9868af = _0x39e625[_0x248ae9(0x9cb)]();
                    if (!_0x9868af["encodings"] || _0x9868af[_0x248ae9(0x468)][_0x248ae9(0x1bf)] == 0x0) {
                        if (_0x531b4d[_0x248ae9(0x8cd)][_0x51ee9f][_0x248ae9(0x8ca)] < 0x0) var _0x6fbd89 = _0x531b4d[_0x248ae9(0x4f7)] || _0x531b4d["pcs"][_0x51ee9f][_0x248ae9(0x79c)] || 0x9c4;
                        else var _0x6fbd89 = _0x531b4d[_0x248ae9(0x8cd)][_0x51ee9f][_0x248ae9(0x8ca)] || _0x531b4d[_0x248ae9(0x4f7)] || _0x531b4d["pcs"][_0x51ee9f]["maxBandwidth"] || 0x9c4;
                        var _0x370c5b = parseInt(_0x6fbd89 / _0x4708c8);
                        _0x531b4d[_0x248ae9(0x6d0)](_0x51ee9f, _0x370c5b, !![]);
                        continue;
                    }
                    if (_0x9868af[_0x248ae9(0x468)][0x0]["active"] == ![]) continue;
                    if (_0x9868af[_0x248ae9(0x468)][0x0][_0x248ae9(0x4f5)]) {
                        if (_0x248ae9(0x449) in _0x531b4d[_0x248ae9(0x8cd)][_0x51ee9f]) var _0x6fbd89 = parseInt(_0x531b4d["pcs"][_0x51ee9f][_0x248ae9(0x449)]);
                        else var _0x6fbd89 = parseInt(parseInt(_0x9868af[_0x248ae9(0x468)][0x0][_0x248ae9(0x4f5)]) / 0x400);
                        var _0x370c5b = parseInt(_0x6fbd89 / _0x4708c8);
                        _0x531b4d[_0x248ae9(0x6d0)](_0x51ee9f, _0x370c5b, !![]);
                    } else {
                        if (_0x531b4d[_0x248ae9(0x8cd)][_0x51ee9f]["setBitrate"] < 0x0) var _0x6fbd89 = _0x531b4d[_0x248ae9(0x4f7)] || _0x531b4d[_0x248ae9(0x8cd)][_0x51ee9f]["maxBandwidth"] || 0x9c4;
                        else var _0x6fbd89 = _0x531b4d[_0x248ae9(0x8cd)][_0x51ee9f]["setBitrate"] || _0x531b4d[_0x248ae9(0x4f7)] || _0x531b4d[_0x248ae9(0x8cd)][_0x51ee9f][_0x248ae9(0x79c)] || 0x9c4;
                        var _0x370c5b = parseInt(_0x6fbd89 / _0x4708c8);
                        _0x531b4d["limitBitrate"](_0x51ee9f, _0x370c5b, !![]);
                    }
                } catch (_0x5408f) {
                    errorlog(_0x5408f);
                }
            }
            return parseInt(_0x29ad64 / _0x4708c8);
        }),
        (_0x531b4d[_0x4e3749(0x81f)] = function (_0x3773da = 0x0, _0x408adb = ![]) {
            var _0x52f44a = _0x4e3749;
            if (!_0x531b4d[_0x52f44a(0x4ab)]) return _0x3773da;
            if ((iOS || iPad) && SafariVersion && SafariVersion <= 0xd) return _0x3773da;
            var _0x233588 = _0x3773da;
            if (_0x408adb === ![]) _0x233588 = 0x0;
            else _0x233588 < 0x0 && (_0x233588 = _0x531b4d[_0x52f44a(0x8cd)][_0x408adb][_0x52f44a(0x8ca)] || _0x531b4d[_0x52f44a(0x4f7)] || _0x531b4d[_0x52f44a(0x8cd)][_0x318de6][_0x52f44a(0x79c)] || 0x9c4);
            var _0x1be72c = 0x0;
            for (var _0x318de6 in _0x531b4d[_0x52f44a(0x8cd)]) {
                if (_0x408adb === _0x318de6) continue;
                try {
                    var _0x2881a5 = getSenders2(_0x318de6)[_0x52f44a(0xa18)](function (_0x921b6c) {
                        var _0x3ba166 = _0x52f44a;
                        return _0x921b6c[_0x3ba166(0x88b)] && _0x921b6c["track"][_0x3ba166(0x722)] == _0x3ba166(0x211);
                    });
                    if (!_0x2881a5) continue;
                    var _0x457a70 = _0x2881a5[_0x52f44a(0x9cb)]();
                    if (!_0x457a70[_0x52f44a(0x468)] || _0x457a70[_0x52f44a(0x468)][_0x52f44a(0x1bf)] == 0x0) {
                        _0x531b4d[_0x52f44a(0x8cd)][_0x318de6][_0x52f44a(0x8ca)] < 0x0
                            ? (_0x233588 += _0x531b4d[_0x52f44a(0x4f7)] || _0x531b4d["pcs"][_0x318de6][_0x52f44a(0x79c)] || 0x9c4)
                            : (_0x233588 += _0x531b4d["pcs"][_0x318de6][_0x52f44a(0x8ca)] || _0x531b4d["outboundVideoBitrate"] || _0x531b4d[_0x52f44a(0x8cd)][_0x318de6][_0x52f44a(0x79c)] || 0x9c4);
                        warnlog(_0x233588), (_0x1be72c += 0x1);
                        continue;
                    }
                    if (_0x457a70[_0x52f44a(0x468)][0x0]["active"] == ![]) continue;
                    if (_0x457a70[_0x52f44a(0x468)][0x0][_0x52f44a(0x4f5)])
                        "preLimitedBitrate" in _0x531b4d[_0x52f44a(0x8cd)][_0x318de6]
                            ? (_0x233588 += parseInt(_0x531b4d[_0x52f44a(0x8cd)][_0x318de6][_0x52f44a(0x449)]))
                            : (_0x233588 += parseInt(_0x457a70[_0x52f44a(0x468)][0x0][_0x52f44a(0x4f5)]) / 0x400);
                    else
                        _0x531b4d[_0x52f44a(0x8cd)][_0x318de6][_0x52f44a(0x8ca)] < 0x0
                            ? (_0x233588 += _0x531b4d[_0x52f44a(0x4f7)] || _0x531b4d[_0x52f44a(0x8cd)][_0x318de6][_0x52f44a(0x79c)] || 0x9c4)
                            : ((_0x233588 += _0x531b4d["pcs"][_0x318de6][_0x52f44a(0x8ca)] || _0x531b4d[_0x52f44a(0x4f7)] || _0x531b4d["pcs"][_0x318de6][_0x52f44a(0x79c)] || 0x9c4), warnlog(_0x233588));
                    _0x1be72c += 0x1;
                } catch (_0x365287) {
                    errorlog(_0x365287);
                }
            }
            if (!_0x233588) return _0x233588;
            warnlog(_0x52f44a(0x351) + _0x233588);
            var _0x5377a1 = parseFloat(_0x233588 / _0x531b4d[_0x52f44a(0x4ab)]);
            _0x5377a1 < 0x1 && (_0x5377a1 = 0x1);
            for (var _0x318de6 in _0x531b4d[_0x52f44a(0x8cd)]) {
                if (_0x408adb === _0x318de6) continue;
                try {
                    var _0x2881a5 = getSenders2(_0x318de6)[_0x52f44a(0xa18)](function (_0x249e76) {
                        var _0x4a789a = _0x52f44a;
                        return _0x249e76[_0x4a789a(0x88b)] && _0x249e76[_0x4a789a(0x88b)][_0x4a789a(0x722)] == _0x4a789a(0x211);
                    });
                    if (!_0x2881a5) continue;
                    var _0x457a70 = _0x2881a5[_0x52f44a(0x9cb)]();
                    if (!_0x457a70[_0x52f44a(0x468)] || _0x457a70[_0x52f44a(0x468)][_0x52f44a(0x1bf)] == 0x0) {
                        if (_0x531b4d[_0x52f44a(0x8cd)][_0x318de6][_0x52f44a(0x8ca)] < 0x0) var _0x45707f = _0x531b4d["outboundVideoBitrate"] || _0x531b4d[_0x52f44a(0x8cd)][_0x318de6][_0x52f44a(0x79c)] || 0x9c4;
                        else var _0x45707f = _0x531b4d["pcs"][_0x318de6][_0x52f44a(0x8ca)] || _0x531b4d[_0x52f44a(0x4f7)] || _0x531b4d[_0x52f44a(0x8cd)][_0x318de6][_0x52f44a(0x79c)] || 0x9c4;
                        var _0x2e0b4a = parseInt(_0x45707f / _0x5377a1);
                        _0x531b4d[_0x52f44a(0x6d0)](_0x318de6, _0x2e0b4a, !![]);
                        continue;
                    }
                    if (_0x457a70[_0x52f44a(0x468)][0x0][_0x52f44a(0x902)] == ![]) continue;
                    if (_0x457a70["encodings"][0x0][_0x52f44a(0x4f5)]) {
                        if ("preLimitedBitrate" in _0x531b4d[_0x52f44a(0x8cd)][_0x318de6]) var _0x45707f = parseInt(_0x531b4d["pcs"][_0x318de6][_0x52f44a(0x449)]);
                        else var _0x45707f = parseInt(parseInt(_0x457a70[_0x52f44a(0x468)][0x0][_0x52f44a(0x4f5)]) / 0x400);
                        var _0x2e0b4a = parseInt(_0x45707f / _0x5377a1);
                        _0x531b4d["limitBitrate"](_0x318de6, _0x2e0b4a, !![]);
                    } else {
                        if (_0x531b4d[_0x52f44a(0x8cd)][_0x318de6][_0x52f44a(0x8ca)] < 0x0) var _0x45707f = _0x531b4d[_0x52f44a(0x4f7)] || _0x531b4d[_0x52f44a(0x8cd)][_0x318de6]["maxBandwidth"] || 0x9c4;
                        else var _0x45707f = _0x531b4d[_0x52f44a(0x8cd)][_0x318de6][_0x52f44a(0x8ca)] || _0x531b4d[_0x52f44a(0x4f7)] || _0x531b4d["pcs"][_0x318de6][_0x52f44a(0x79c)] || 0x9c4;
                        var _0x2e0b4a = parseInt(_0x45707f / _0x5377a1);
                        _0x531b4d[_0x52f44a(0x6d0)](_0x318de6, _0x2e0b4a, !![]);
                    }
                } catch (_0x4bb631) {
                    errorlog(_0x4bb631);
                }
            }
            return parseInt(_0x3773da / _0x5377a1);
        }),
        (_0x531b4d["announceCoDirector"] = function (_0x4eb4d9, _0xa74dc5 = ![]) {
            var _0x159a8b = _0x4e3749,
                _0x42870a = {};
            (_0x42870a["directorSettings"] = {}), (_0x42870a["directorSettings"][_0x159a8b(0x297)] = [_0x4eb4d9]), _0x531b4d["sendPeers"](_0x42870a, _0xa74dc5);
        }),
        (_0x531b4d[_0x4e3749(0x2c5)] = function (_0x56c6d1 = null) {
            var _0x5da27f = _0x4e3749;
            if (!_0x531b4d["mc"]) return;
            _0x531b4d["mc"][_0x5da27f(0x9ae)] && (clearInterval(_0x531b4d["mc"][_0x5da27f(0x9ae)]), (_0x531b4d["mc"][_0x5da27f(0x9ae)] = null));
            if (_0x56c6d1 === null) {
                if (_0x531b4d["mc"][_0x5da27f(0x7e2)] === ![]) return;
                _0x56c6d1 = _0x531b4d["mc"][_0x5da27f(0x7e2)];
            }
            _0x56c6d1 = parseInt(_0x56c6d1);
            if (_0x531b4d["mc"][_0x5da27f(0x8ca)] && _0x56c6d1 > _0x531b4d["mc"]["setBitrate"]) _0x56c6d1 = _0x531b4d["mc"]["setBitrate"];
            else _0x531b4d["mc"][_0x5da27f(0x8ca)] === ![] && _0x56c6d1 < 0x0 && (_0x531b4d[_0x5da27f(0x4f7)] ? (_0x56c6d1 = _0x531b4d[_0x5da27f(0x4f7)]) : (_0x56c6d1 = 0x9c4));
            _0x531b4d[_0x5da27f(0x7a0)] && _0x56c6d1 > _0x531b4d[_0x5da27f(0x7a0)] && (_0x56c6d1 = _0x531b4d[_0x5da27f(0x7a0)]);
            _0x531b4d["mc"]["savedBitrate"] = _0x56c6d1;
            _0x531b4d["mc"][_0x5da27f(0x42f)] !== ![] &&
                _0x531b4d["mc"][_0x5da27f(0x4fb)]["visibility"] === ![] &&
                _0x56c6d1 > _0x531b4d["mc"][_0x5da27f(0x42f)] &&
                ((_0x531b4d["mc"]["savedBitrate"] = _0x56c6d1), (_0x56c6d1 = parseInt(_0x531b4d["mc"][_0x5da27f(0x42f)]) || 0x0));
            if (_0x531b4d["mc"]["maxBandwidth"] !== null) {
                if (_0x531b4d["mc"][_0x5da27f(0x79c)] < _0x56c6d1) (_0x56c6d1 = _0x531b4d["mc"]["maxBandwidth"]), (_0x531b4d["mc"]["stats"][_0x5da27f(0x99e)] = _0x56c6d1), warnlog(_0x5da27f(0x679) + _0x56c6d1 + _0x5da27f(0x460));
                else _0x531b4d["mc"][_0x5da27f(0x21d)] && (_0x531b4d["mc"][_0x5da27f(0x21d)][_0x5da27f(0x99e)] = ![]);
            } else _0x5da27f(0x99e) in _0x531b4d["mc"]["stats"] && (_0x531b4d["mc"][_0x5da27f(0x21d)]["max_bandwidth_capped_kbps"] = ![]);
            if (_0x56c6d1 === 0x0) {
                var _0x3b558e = Date["now"]() - _0x531b4d["mc"][_0x5da27f(0x6f9)];
                _0x3b558e < _0x531b4d[_0x5da27f(0x637)] &&
                    ((_0x56c6d1 = _0x531b4d["preloadbitrate"]),
                    log("starting\x20some\x20preload\x20bitrate\x20" + (Date[_0x5da27f(0x312)]() - _0x531b4d["mc"][_0x5da27f(0x6f9)])),
                    (_0x531b4d["mc"][_0x5da27f(0x9ae)] = setTimeout(function () {
                        var _0x3ace12 = _0x5da27f;
                        try {
                            warnlog(_0x3ace12(0x4e9) + (Date["now"]() - _0x531b4d["mc"]["startTime"])), _0x531b4d[_0x3ace12(0x2c5)](null);
                        } catch (_0x1c2534) {}
                    }, _0x531b4d[_0x5da27f(0x637)] - _0x3b558e + 0x5)));
            }
            try {
                if ((iOS || iPad) && SafariVersion && SafariVersion <= 0xd) {
                    log("iOS\x20devices\x20do\x20not\x20support\x20dynamic\x20bitrates\x20correctly;\x20skipping");
                    var _0x22ceee = _0x531b4d["mc"][_0x5da27f(0x3a2)]()[_0x5da27f(0xa18)](function (_0xad3d10) {
                        var _0x478a2f = _0x5da27f;
                        return _0xad3d10["track"] && _0xad3d10[_0x478a2f(0x88b)][_0x478a2f(0x722)] == _0x478a2f(0x211);
                    });
                    if (!_0x22ceee) {
                        warnlog(_0x5da27f(0x9aa));
                        return;
                    }
                    var _0x347fb7 = {};
                    if (_0x56c6d1 < 0x0)
                        (_0x347fb7["active"] = !![]),
                            (_0x56c6d1 = 0x9c4),
                            _0x531b4d[_0x5da27f(0x798)] && (_0x56c6d1 = _0x531b4d["bitrate"]),
                            _0x531b4d[_0x5da27f(0x7a0)] && _0x56c6d1 > _0x531b4d[_0x5da27f(0x7a0)] && (_0x56c6d1 = _0x531b4d["maxvideobitrate"]),
                            (_0x347fb7[_0x5da27f(0x4f5)] = _0x56c6d1 * 0x400);
                    else _0x56c6d1 === 0x0 ? (_0x347fb7[_0x5da27f(0x902)] = ![]) : ((_0x347fb7[_0x5da27f(0x902)] = !![]), (_0x347fb7[_0x5da27f(0x4f5)] = _0x56c6d1 * 0x400));
                    setEncodings(
                        _0x22ceee,
                        _0x347fb7,
                        function (_0x5e6fe6) {
                            var _0x1bcc1e = _0x5da27f;
                            pokeIframeAPI("set-meshcast-video-bitrate", _0x5e6fe6), log(_0x1bcc1e(0x229) + _0x5e6fe6);
                        },
                        _0x56c6d1
                    );
                    return;
                } else {
                    if (_0x5da27f(0x5eb) in window && "setParameters" in window["RTCRtpSender"][_0x5da27f(0x9ec)]) {
                        var _0x22ceee = _0x531b4d["mc"][_0x5da27f(0x3a2)]()[_0x5da27f(0xa18)](function (_0x4e0801) {
                            var _0x5b52c6 = _0x5da27f;
                            return _0x4e0801["track"] && _0x4e0801["track"][_0x5b52c6(0x722)] == _0x5b52c6(0x211);
                        });
                        if (!_0x22ceee) {
                            warnlog("can\x27t\x20change\x20bitrate;\x20no\x20video\x20sender\x20found");
                            return;
                        }
                        var _0x347fb7 = {};
                        if (_0x56c6d1 < 0x0) _0x347fb7[_0x5da27f(0x902)] == ![] && (_0x347fb7["active"] = !![]), (_0x347fb7[_0x5da27f(0x4f5)] = null);
                        else _0x56c6d1 === 0x0 ? ((_0x347fb7[_0x5da27f(0x902)] = ![]), Firefox && (_0x347fb7[_0x5da27f(0x4f5)] = 0x1)) : ((_0x347fb7[_0x5da27f(0x902)] = !![]), (_0x347fb7[_0x5da27f(0x4f5)] = _0x56c6d1 * 0x400));
                        iPad || iOS || Firefox
                            ? _0x531b4d["mc"][_0x5da27f(0x439)]
                                ? (clearInterval(_0x531b4d["mc"][_0x5da27f(0x439)]),
                                  (_0x531b4d["mc"][_0x5da27f(0x439)] = setTimeout(function () {
                                      var _0x27a34a = _0x5da27f;
                                      log(_0x27a34a(0x492) + _0x56c6d1), (_0x531b4d["mc"][_0x27a34a(0x439)] = ![]), _0x531b4d[_0x27a34a(0x2c5)](null);
                                  }, 0x1f4)))
                                : ((_0x531b4d["mc"]["bitrateTimeoutFirefox"] = setTimeout(function () {
                                      _0x531b4d["mc"]["bitrateTimeoutFirefox"] = ![];
                                  }, 0x1f4)),
                                  setEncodings(
                                      _0x22ceee,
                                      _0x347fb7,
                                      function (_0x567265) {
                                          var _0x398727 = _0x5da27f;
                                          log(_0x398727(0x9ca) + _0x567265), pokeIframeAPI(_0x398727(0x3cf), _0x567265);
                                      },
                                      _0x56c6d1
                                  ))
                            : setEncodings(
                                  _0x22ceee,
                                  _0x347fb7,
                                  function (_0x10305a) {
                                      var _0x475d76 = _0x5da27f;
                                      log(_0x475d76(0x3de) + _0x10305a), pokeIframeAPI(_0x475d76(0x3cf), _0x10305a);
                                  },
                                  _0x56c6d1
                              );
                        return;
                    } else warnlog(_0x5da27f(0x4a6));
                }
            } catch (_0x13f5b8) {
                errorlog(_0x13f5b8);
            }
        }),
        (_0x531b4d[_0x4e3749(0x1e4)] = function (_0x33f98c, _0xc24a1a) {
            var _0x321610 = _0x4e3749;
            _0xc24a1a === ![]
                ? ((_0x531b4d["pcs"][_0x33f98c]["setBitrate"] = ![]), _0x531b4d["limitBitrate"](_0x33f98c, -0x1))
                : ((_0xc24a1a = parseInt(_0xc24a1a) || -0x1), _0xc24a1a >= 0x0 && ((_0x531b4d[_0x321610(0x8cd)][_0x33f98c]["setBitrate"] = _0xc24a1a), _0x531b4d[_0x321610(0x6d0)](_0x33f98c, _0xc24a1a)));
        }),
        (_0x531b4d["targetAudioBitrate"] = function (_0x4293c5, _0x18281b) {
            var _0xf9685c = _0x4e3749;
            _0x18281b === ![]
                ? ((_0x531b4d[_0xf9685c(0x8cd)][_0x4293c5][_0xf9685c(0x939)] = ![]), _0x531b4d["limitAudioBitrate"](_0x4293c5, -0x1))
                : ((_0x18281b = parseInt(_0x18281b) || -0x1), _0x18281b >= 0x0 && ((_0x531b4d[_0xf9685c(0x8cd)][_0x4293c5][_0xf9685c(0x939)] = _0x18281b), _0x531b4d[_0xf9685c(0x71a)](_0x4293c5, _0x18281b)));
        }),
        (_0x531b4d[_0x4e3749(0x6d0)] = function (_0x18ffa0, _0x1d5f18 = null, _0x45fb60 = ![]) {
            var _0x1b353d = _0x4e3749;
            log(_0x1b353d(0x67a) + _0x1d5f18);
            if (!(_0x18ffa0 in _0x531b4d[_0x1b353d(0x8cd)])) return;
            _0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x9ae)] && (clearInterval(_0x531b4d["pcs"][_0x18ffa0][_0x1b353d(0x9ae)]), (_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x9ae)] = null));
            var _0x2ba8e6 = !![];
            if (_0x1d5f18 === null) {
                if (_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x7e2)] === ![]) {
                    if (_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x79c)] === null) return;
                    else (_0x1d5f18 = _0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0]["maxBandwidth"]), (_0x2ba8e6 = ![]);
                } else _0x1d5f18 = _0x531b4d["pcs"][_0x18ffa0][_0x1b353d(0x7e2)];
            }
            _0x1d5f18 = parseInt(_0x1d5f18);
            if (_0x531b4d["pcs"][_0x18ffa0][_0x1b353d(0x8ca)] && _0x1d5f18 > _0x531b4d["pcs"][_0x18ffa0][_0x1b353d(0x8ca)]) _0x1d5f18 = _0x531b4d["pcs"][_0x18ffa0][_0x1b353d(0x8ca)];
            else _0x1d5f18 < 0x0 && (_0x1d5f18 = _0x531b4d["pcs"][_0x18ffa0][_0x1b353d(0x8ca)] || _0x531b4d[_0x1b353d(0x4f7)] || 0x9c4);
            _0x531b4d["maxvideobitrate"] && _0x1d5f18 > _0x531b4d[_0x1b353d(0x7a0)] && (_0x1d5f18 = _0x531b4d["maxvideobitrate"]);
            _0x2ba8e6 && !_0x45fb60 && (log(_0x1b353d(0x213) + _0x1d5f18), (_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x7e2)] = _0x1d5f18));
            _0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x42f)] !== ![] &&
                _0x531b4d["pcs"][_0x18ffa0][_0x1b353d(0x4fb)][_0x1b353d(0x420)] === ![] &&
                _0x1d5f18 > _0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x42f)] &&
                (_0x2ba8e6 && (_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0]["savedBitrate"] = _0x1d5f18), (_0x1d5f18 = parseInt(_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x42f)]) || 0x0));
            if (_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x79c)] !== null) {
                if (_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0]["maxBandwidth"] < _0x1d5f18)
                    (_0x1d5f18 = _0x531b4d["pcs"][_0x18ffa0][_0x1b353d(0x79c)]), (_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x21d)][_0x1b353d(0x99e)] = _0x1d5f18), warnlog(_0x1b353d(0x679) + _0x1d5f18 + _0x1b353d(0x460));
                else
                    _0x531b4d["pcs"][_0x18ffa0][_0x1b353d(0x79c)] === _0x1d5f18 && !_0x2ba8e6
                        ? ((_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x21d)][_0x1b353d(0x99e)] = _0x1d5f18), warnlog(_0x1b353d(0x8d1) + _0x1d5f18 + "-kbps"))
                        : (warnlog(_0x1b353d(0x549) + _0x1d5f18 + _0x1b353d(0x460)), (_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x21d)]["max_bandwidth_capped_kbps"] = ![]));
            } else "max_bandwidth_capped_kbps" in _0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x21d)] && (_0x531b4d["pcs"][_0x18ffa0][_0x1b353d(0x21d)]["max_bandwidth_capped_kbps"] = ![]);
            _0x45fb60 === ![] && _0x531b4d[_0x1b353d(0x4ab)] && ((_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x449)] = _0x1d5f18), (_0x1d5f18 = _0x531b4d["limitTotalBitrateGuests"](_0x1d5f18, _0x18ffa0)));
            if (_0x1d5f18 === 0x0) {
                var _0x243550 = Date[_0x1b353d(0x312)]() - _0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x6f9)];
                _0x243550 < _0x531b4d[_0x1b353d(0x637)] &&
                    ((_0x1d5f18 = _0x531b4d[_0x1b353d(0x5f0)]),
                    log(_0x1b353d(0x279) + (Date["now"]() - _0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0]["startTime"])),
                    (_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x9ae)] = setTimeout(
                        function (_0x2eb59b) {
                            var _0x451283 = _0x1b353d;
                            try {
                                warnlog(_0x451283(0x4e9) + (Date[_0x451283(0x312)]() - _0x531b4d[_0x451283(0x8cd)][_0x2eb59b][_0x451283(0x6f9)])), _0x531b4d[_0x451283(0x6d0)](_0x2eb59b, null);
                            } catch (_0x13103e) {}
                        },
                        _0x531b4d[_0x1b353d(0x637)] - _0x243550 + 0x5,
                        _0x18ffa0
                    )));
            }
            try {
                if ((iOS || iPad) && SafariVersion && SafariVersion <= 0xd) {
                    log("iOS\x20devices\x20do\x20not\x20support\x20dynamic\x20bitrates\x20correctly;\x20skipping");
                    if (_0x531b4d["pcs"][_0x18ffa0][_0x1b353d(0x599)] == !![] && _0x531b4d["pcs"][_0x18ffa0][_0x1b353d(0x6f7)] == ![]) return;
                    var _0x1c069b = getSenders2(_0x18ffa0)[_0x1b353d(0xa18)](function (_0x88ccaf) {
                        var _0x52d7f1 = _0x1b353d;
                        return _0x88ccaf["track"] && _0x88ccaf["track"]["kind"] == _0x52d7f1(0x211);
                    });
                    if (!_0x1c069b) {
                        warnlog(_0x1b353d(0x9aa));
                        return;
                    }
                    var _0x35794d = {};
                    _0x1d5f18 === 0x0 ? (_0x35794d[_0x1b353d(0x902)] = ![]) : ((_0x35794d[_0x1b353d(0x902)] = !![]), (_0x35794d[_0x1b353d(0x4f5)] = _0x1d5f18 * 0x400));
                    setEncodings(
                        _0x1c069b,
                        _0x35794d,
                        function (_0x456ecf) {
                            var _0x34f21e = _0x1b353d;
                            pokeIframeAPI("setVideoBitrate", _0x456ecf[0x0], _0x456ecf[0x1]), pokeIframeAPI(_0x34f21e(0x497), _0x456ecf[0x0], _0x456ecf[0x1]), log("bandwidth\x20set\x20a!\x20" + _0x456ecf[0x0]);
                        },
                        [_0x1d5f18, _0x18ffa0]
                    );
                    return;
                } else {
                    if (_0x1b353d(0x5eb) in window && "setParameters" in window[_0x1b353d(0x5eb)]["prototype"]) {
                        var _0x1c069b = getSenders2(_0x18ffa0)[_0x1b353d(0xa18)](function (_0xf20f1) {
                            var _0x281690 = _0x1b353d;
                            return _0xf20f1[_0x281690(0x88b)] && _0xf20f1[_0x281690(0x88b)]["kind"] == _0x281690(0x211);
                        });
                        if (!_0x1c069b) {
                            warnlog(_0x1b353d(0x9aa));
                            return;
                        }
                        var _0x35794d = {};
                        _0x1d5f18 === 0x0
                            ? ((_0x35794d["active"] = ![]), Firefox && ((_0x35794d[_0x1b353d(0x4f5)] = 0x1), (_0x35794d[_0x1b353d(0x422)] = 0x3e8)))
                            : ((_0x35794d["active"] = !![]), (_0x35794d[_0x1b353d(0x4f5)] = _0x1d5f18 * 0x400));
                        if (_0x1d5f18 !== 0x0) {
                            var _0x4f6f8d = _0x531b4d["calculateScale"](_0x18ffa0, _0x1d5f18);
                            if (_0x4f6f8d <= 0x0 || _0x4f6f8d == 0x64) {
                                var _0x22d2f7 = getChromeVersion();
                                _0x22d2f7 > 0x50 ? (_0x35794d[_0x1b353d(0x422)] = null) : (_0x35794d[_0x1b353d(0x422)] = 0x1);
                            } else _0x35794d["scaleResolutionDownBy"] = 0x64 / _0x4f6f8d;
                            iPad || iOS || Firefox
                                ? _0x531b4d["pcs"][_0x18ffa0][_0x1b353d(0x439)]
                                    ? (clearInterval(_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x439)]),
                                      (_0x531b4d["pcs"][_0x18ffa0][_0x1b353d(0x439)] = setTimeout(
                                          function (_0xd749a4, _0x1a002e) {
                                              var _0xd94ea5 = _0x1b353d;
                                              log(_0xd94ea5(0x492) + _0x1d5f18), (_0x531b4d[_0xd94ea5(0x8cd)][_0xd749a4][_0xd94ea5(0x439)] = ![]), _0x531b4d[_0xd94ea5(0x6d0)](_0xd749a4, null, _0x1a002e);
                                          },
                                          0x1f4,
                                          _0x18ffa0,
                                          _0x45fb60
                                      )))
                                    : ((_0x531b4d["pcs"][_0x18ffa0][_0x1b353d(0x439)] = setTimeout(
                                          function (_0x4422f0) {
                                              var _0x4c30d7 = _0x1b353d;
                                              _0x531b4d[_0x4c30d7(0x8cd)][_0x4422f0][_0x4c30d7(0x439)] = ![];
                                          },
                                          0x1f4,
                                          _0x18ffa0
                                      )),
                                      setEncodings(
                                          _0x1c069b,
                                          _0x35794d,
                                          function (_0x22f889) {
                                              var _0xc6834d = _0x1b353d;
                                              log(_0xc6834d(0x3f2) + _0x22f889[0x0]),
                                                  (_0x531b4d[_0xc6834d(0x8cd)][_0x22f889[0x1]][_0xc6834d(0x21d)]["scaleFactor"] = parseInt(_0x22f889[0x2]) + "%"),
                                                  pokeIframeAPI(_0xc6834d(0x7bd), _0x22f889[0x0], _0x22f889[0x1]),
                                                  pokeIframeAPI(_0xc6834d(0x45b), _0x22f889[0x2], _0x22f889[0x1]),
                                                  pokeIframeAPI("set-video-bitrate", _0x22f889[0x0], _0x22f889[0x1]),
                                                  pokeIframeAPI(_0xc6834d(0x5a6), _0x22f889[0x2], _0x22f889[0x1]);
                                          },
                                          [_0x1d5f18, _0x18ffa0, _0x4f6f8d]
                                      ))
                                : setEncodings(
                                      _0x1c069b,
                                      _0x35794d,
                                      function (_0x2fdba9) {
                                          var _0x55b8d0 = _0x1b353d;
                                          log("bandwidth\x20set\x20c!\x20" + _0x2fdba9[0x0]),
                                              (_0x531b4d[_0x55b8d0(0x8cd)][_0x2fdba9[0x1]][_0x55b8d0(0x21d)][_0x55b8d0(0x5aa)] = parseInt(_0x2fdba9[0x2]) + "%"),
                                              pokeIframeAPI(_0x55b8d0(0x7bd), _0x2fdba9[0x0], _0x2fdba9[0x1]),
                                              pokeIframeAPI(_0x55b8d0(0x45b), _0x2fdba9[0x2], _0x2fdba9[0x1]),
                                              pokeIframeAPI(_0x55b8d0(0x497), _0x2fdba9[0x0], _0x2fdba9[0x1]),
                                              pokeIframeAPI(_0x55b8d0(0x5a6), _0x2fdba9[0x2], _0x2fdba9[0x1]);
                                      },
                                      [_0x1d5f18, _0x18ffa0, _0x4f6f8d]
                                  );
                        } else
                            iPad || iOS || Firefox
                                ? _0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x439)]
                                    ? (clearInterval(_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0]["bitrateTimeoutFirefox"]),
                                      (_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x439)] = setTimeout(
                                          function (_0x5ec4eb, _0x3b9634) {
                                              var _0x300abc = _0x1b353d;
                                              log(_0x300abc(0x492) + _0x1d5f18), (_0x531b4d["pcs"][_0x5ec4eb][_0x300abc(0x439)] = ![]), _0x531b4d[_0x300abc(0x6d0)](_0x5ec4eb, null, _0x3b9634);
                                          },
                                          0x1f4,
                                          _0x18ffa0,
                                          _0x45fb60
                                      )))
                                    : ((_0x531b4d[_0x1b353d(0x8cd)][_0x18ffa0][_0x1b353d(0x439)] = setTimeout(
                                          function (_0x273d81) {
                                              var _0x5efdda = _0x1b353d;
                                              _0x531b4d[_0x5efdda(0x8cd)][_0x273d81][_0x5efdda(0x439)] = ![];
                                          },
                                          0x1f4,
                                          _0x18ffa0
                                      )),
                                      setEncodings(
                                          _0x1c069b,
                                          _0x35794d,
                                          function (_0x2f8ff8) {
                                              var _0x1fa979 = _0x1b353d;
                                              log("bandwidth\x20set\x20d!\x20" + _0x2f8ff8[0x0]), pokeIframeAPI(_0x1fa979(0x7bd), _0x2f8ff8[0x0], _0x2f8ff8[0x1]), pokeIframeAPI(_0x1fa979(0x497), _0x2f8ff8[0x0], _0x2f8ff8[0x1]);
                                          },
                                          [_0x1d5f18, _0x18ffa0]
                                      ))
                                : setEncodings(
                                      _0x1c069b,
                                      _0x35794d,
                                      function (_0x5d98d2) {
                                          var _0x2493ea = _0x1b353d;
                                          log(_0x2493ea(0x889) + _0x5d98d2[0x0]), pokeIframeAPI("setVideoBitrate", _0x5d98d2[0x0], _0x5d98d2[0x1]), pokeIframeAPI(_0x2493ea(0x497), _0x5d98d2[0x0], _0x5d98d2[0x1]);
                                      },
                                      [_0x1d5f18, _0x18ffa0]
                                  );
                    } else warnlog(_0x1b353d(0x4a6));
                }
            } catch (_0x501c6f) {
                errorlog(_0x501c6f);
            }
        });
    function _0x515fc6(_0x50cce9, _0x52440d, _0x1f92ee) {
        var _0x186c1b = _0x4e3749;
        if (_0x531b4d[_0x186c1b(0x2ad)]) return _0x52440d;
        warnlog(_0x186c1b(0x851) + _0x52440d + "\x20:\x20" + _0x1f92ee);
        if (_0x1f92ee < 0x0) _0x531b4d[_0x186c1b(0x8cd)][_0x50cce9]["scaleDueToBitrate"] = 0x64;
        else {
            if (_0x1f92ee >= 0x259) _0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64;
            else {
                if (_0x186c1b(0x326) in _0x531b4d[_0x186c1b(0x8cd)][_0x50cce9]) _0x531b4d["pcs"][_0x50cce9][_0x186c1b(0x5f9)] = 0x64;
                else {
                    if (_0x531b4d[_0x186c1b(0x2cc)]) _0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64;
                    else {
                        var _0x347576 = getNativeOutputResolution();
                        if (_0x347576)
                            try {
                                (_0x347576 = _0x347576[_0x186c1b(0x3c1)] * _0x347576[_0x186c1b(0x63d)]), (_0x347576 = Math["pow"](_0x347576, 0.5));
                            } catch (_0x56287a) {
                                _0x347576 = ![];
                            }
                        warnlog(_0x186c1b(0x86f) + _0x347576);
                        if (_0x1f92ee >= 0x15e) {
                            if (_0x347576 && _0x347576 <= 0x1e0) _0x531b4d["pcs"][_0x50cce9][_0x186c1b(0x5f9)] = 0x64;
                            else {
                                if (_0x531b4d["mobile"]) {
                                    if (_0x347576 && _0x347576 >= 0x5a0) _0x531b4d["pcs"][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 0x3;
                                    else
                                        _0x531b4d["flagship"]
                                            ? _0x347576 && _0x347576 >= 0x3c0
                                                ? (_0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 0x2)
                                                : (_0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64)
                                            : (_0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 0x2);
                                } else {
                                    if (_0x347576 && _0x347576 >= 0x5a0) _0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 2.5;
                                    else _0x347576 && _0x347576 >= 0x3c0 ? (_0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 0x2) : (_0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64);
                                }
                            }
                        } else {
                            if (_0x1f92ee >= 0xc9) {
                                if (_0x347576 && _0x347576 < 0x1e0) _0x531b4d["pcs"][_0x50cce9][_0x186c1b(0x5f9)] = 0x64;
                                else {
                                    if (_0x531b4d["mobile"]) {
                                        if (_0x347576 && _0x347576 >= 0x5a0) _0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 0x4;
                                        else _0x531b4d[_0x186c1b(0x96f)] ? (_0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 0x2) : (_0x531b4d["pcs"][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 2.5);
                                    } else _0x347576 && _0x347576 >= 0x5a0 ? (_0x531b4d[_0x186c1b(0x8cd)][_0x50cce9]["scaleDueToBitrate"] = 0x64 / 0x3) : (_0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 0x2);
                                }
                            } else {
                                if (_0x347576 && _0x347576 <= 0xf0) _0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64;
                                else {
                                    if (_0x1f92ee >= 0x51) {
                                        if (_0x531b4d[_0x186c1b(0x6fb)]) {
                                            if (_0x347576 && _0x347576 >= 0x5a0) _0x531b4d["pcs"][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 0x6;
                                            else _0x531b4d[_0x186c1b(0x96f)] ? (_0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 0x3) : (_0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 0x4);
                                        } else _0x347576 && _0x347576 >= 0x5a0 ? (_0x531b4d["pcs"][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 0x4) : (_0x531b4d[_0x186c1b(0x8cd)][_0x50cce9]["scaleDueToBitrate"] = 0x64 / 0x3);
                                    } else {
                                        if (_0x531b4d[_0x186c1b(0x6fb)]) {
                                            if (_0x347576 && _0x347576 >= 0x3c0) _0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 0x6;
                                            else _0x531b4d["flagship"] ? (_0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 0x4) : (_0x531b4d[_0x186c1b(0x8cd)][_0x50cce9]["scaleDueToBitrate"] = 0x64 / 0x5);
                                        } else _0x347576 && _0x347576 >= 0x5a0 ? (_0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 0x5) : (_0x531b4d[_0x186c1b(0x8cd)][_0x50cce9][_0x186c1b(0x5f9)] = 0x64 / 0x4);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return _0x531b4d["pcs"][_0x50cce9][_0x186c1b(0x5f9)] < _0x52440d && (_0x52440d = _0x531b4d["pcs"][_0x50cce9][_0x186c1b(0x5f9)]), _0x52440d;
    }
    function _0x42afd9(_0x5ef7d1, _0x544c2a = 0x2710) {
        var _0x290e1f = _0x4e3749;
        _0x544c2a = parseInt(_0x544c2a);
        if (_0x531b4d[_0x290e1f(0x43d)]) _0x544c2a += _0x531b4d[_0x290e1f(0x43d)];
        else {
            if (_0x531b4d[_0x290e1f(0x276)] && _0x531b4d[_0x290e1f(0x228)] == 0x5) _0x544c2a += 0x20;
            else _0x531b4d[_0x290e1f(0x228)] && _0x531b4d[_0x290e1f(0x228)] != 0x3 ? (_0x544c2a += 0x100) : (_0x544c2a += 0x20);
        }
        return (
            log(_0x290e1f(0x3bc) + _0x544c2a),
            _0x544c2a < 0x1 && (_0x544c2a = 0x1),
            (_0x5ef7d1 = CodecsHandler["setVideoBitrates"](_0x5ef7d1, { min: parseInt(_0x544c2a / 0xa) || 0x1, max: _0x544c2a || 0x1 }, _0x531b4d[_0x290e1f(0x7e3)])),
            _0x5ef7d1
        );
    }
    (_0x531b4d[_0x4e3749(0x48a)] = function (_0x40707c, _0x234631) {
        var _0x32c744 = _0x4e3749;
        log(_0x40707c),
            _0x531b4d[_0x32c744(0x970)] === {} && log(_0x32c744(0x3fe)),
            window["crypto"]["subtle"]
                [_0x32c744(0x7cd)]({ name: _0x32c744(0x6ef) }, _0x531b4d[_0x32c744(0x970)][_0x32c744(0x65c)], _0x531b4d["enc"]["encode"](_0x40707c))
                ["then"](function (_0x2d8fbb) {
                    var _0x5c5f81 = _0x32c744;
                    (_0x2d8fbb = new Uint8Array(_0x2d8fbb)),
                        (_0x2d8fbb = _0x2d8fbb[_0x5c5f81(0x88d)]((_0x2701e5, _0xf583c9) => _0x2701e5 + _0xf583c9[_0x5c5f81(0x193)](0x10)[_0x5c5f81(0x290)](0x2, "0"), "")),
                        _0x234631(_0x40707c, _0x2d8fbb),
                        log(JSON[_0x5c5f81(0x30c)](_0x2d8fbb));
                })
                [_0x32c744(0x524)](errorlog);
    }),
        (_0x531b4d["verifyData"] = function (_0xb10792, _0x369c17) {
            var _0x57f6a3 = _0x4e3749;
            _0xb10792[_0x57f6a3(0x52a)] = new Uint8Array(_0xb10792["signature"]["match"](/.{1,2}/g)[_0x57f6a3(0x470)]((_0x402b45) => parseInt(_0x402b45, 0x10)));
            if (_0x531b4d[_0x57f6a3(0x440)][_0x369c17][_0x57f6a3(0x38e)])
                return window[_0x57f6a3(0x448)][_0x57f6a3(0x982)]
                    [_0x57f6a3(0x1c4)]({ name: _0x57f6a3(0x6ef) }, _0x531b4d[_0x57f6a3(0x440)][_0x369c17]["publicKey"], _0xb10792["signature"], _0x531b4d[_0x57f6a3(0x527)]["encode"](_0xb10792[_0x57f6a3(0x5a0)]))
                    [_0x57f6a3(0x741)](function (_0x5d37ea) {
                        return _0x5d37ea;
                    })
                    [_0x57f6a3(0x524)](function (_0x810da2) {
                        return errorlog(_0x810da2), ![];
                    });
        }),
        (_0x531b4d[_0x4e3749(0x53d)] = function (_0x41c84c) {
            var _0x4a6ba1 = _0x4e3749;
            if (_0x531b4d[_0x4a6ba1(0x7f4)])
                return _0x531b4d[_0x4a6ba1(0x7af)] !== ![]
                    ? ((_0x41c84c = _0x41c84c["slice"](0x0, -0x1 * _0x531b4d[_0x4a6ba1(0x7af)][_0x4a6ba1(0x1bf)])), _0x41c84c)
                    : generateHash(_0x531b4d["password"] + _0x531b4d[_0x4a6ba1(0x76f)], 0x6)
                          [_0x4a6ba1(0x741)](function (_0x82d8f2) {
                              var _0x3b5ea1 = _0x4a6ba1;
                              return (_0x531b4d["hash"] = _0x82d8f2), (_0x41c84c = _0x41c84c["slice"](0x0, -0x1 * _0x531b4d[_0x3b5ea1(0x7af)][_0x3b5ea1(0x1bf)])), _0x41c84c;
                          })
                          [_0x4a6ba1(0x524)](errorlog);
            return _0x41c84c;
        }),
        (_0x531b4d[_0x4e3749(0x45a)] = function () {
            var _0xfa906e = _0x4e3749;
            if (_0x531b4d[_0xfa906e(0xa2f)]) return;
            clearTimeout(_0x531b4d["pingTimeout"]);
            if (!_0x531b4d["ws"] || _0x531b4d["ws"][_0xfa906e(0x6f8)] !== 0x1) return;
            _0x531b4d[_0xfa906e(0x7c5)] = setTimeout(function () {
                var _0x1be441 = _0xfa906e;
                log("Pinging");
                var _0x3b5cde = {};
                (_0x3b5cde[_0x1be441(0x884)] = _0x1be441(0x45a)), _0x531b4d[_0x1be441(0x8de)](_0x3b5cde);
            }, 0xbb8);
        }),
        (_0x531b4d[_0x4e3749(0x827)] = async function (_0x5ca71d) {
            var _0x35ac53 = _0x4e3749;
            await _0x531b4d["connect"]();
            if (_0x5ca71d[_0x35ac53(0x1bf)] > 0x0) {
                if (_0x5ca71d === _0x531b4d[_0x35ac53(0x4f8)]) {
                    warnlog(_0x35ac53(0x4ad));
                    return;
                }
                var _0x4ee321 = {};
                (_0x4ee321[_0x35ac53(0x884)] = _0x35ac53(0x53c)), (_0x4ee321[_0x35ac53(0x4f8)] = _0x5ca71d), _0x531b4d["sendMsg"](_0x4ee321), (_0x531b4d[_0x35ac53(0x83b)][_0x5ca71d] = !![]), pokeIframeAPI(_0x35ac53(0x5e3), _0x5ca71d);
            } else log(_0x35ac53(0x557));
        }),
        (_0x531b4d[_0x4e3749(0x79d)] = async function _0x4cdc69(_0x483858) {
            var _0x15e0eb = _0x4e3749;
            _0x531b4d["joiningRoom"] === ![] && (_0x531b4d["joiningRoom"] = !![]);
            await _0x531b4d[_0x15e0eb(0x8d6)]();
            var _0x4da9f8 = {};
            _0x4da9f8[_0x15e0eb(0x884)] = _0x15e0eb(0x35a);
            _0x531b4d[_0x15e0eb(0x276)] && !_0x531b4d[_0x15e0eb(0x87f)] && (_0x4da9f8[_0x15e0eb(0x30f)] = !![]);
            _0x531b4d["customWSS"] && (_0x4da9f8["streamID"] = _0x531b4d["streamID"]);
            var _0x5870b0 = "";
            return (
                _0x531b4d[_0x15e0eb(0x835)] && (_0x5870b0 = _0x531b4d[_0x15e0eb(0x835)]),
                _0x531b4d[_0x15e0eb(0x7f4)]
                    ? _0x531b4d[_0x15e0eb(0x7af)]
                        ? generateHash(_0x483858 + _0x531b4d[_0x15e0eb(0x7f4)] + _0x531b4d[_0x15e0eb(0x76f)] + _0x5870b0, 0x10)
                              [_0x15e0eb(0x741)](function (_0x144951) {
                                  var _0x5c7e10 = _0x15e0eb;
                                  return (
                                      _0x531b4d[_0x5c7e10(0xa2f)] && (_0x531b4d[_0x5c7e10(0x8e0)] = _0x144951),
                                      (_0x4da9f8[_0x5c7e10(0x875)] = _0x144951),
                                      _0x531b4d[_0x5c7e10(0x8de)](_0x4da9f8),
                                      (_0x531b4d[_0x5c7e10(0x280)] = _0x2143a0()),
                                      log(_0x5c7e10(0x6e5)),
                                      pokeIframeAPI(_0x5c7e10(0xa12), _0x483858),
                                      _0x531b4d[_0x5c7e10(0x280)]
                                  );
                              })
                              [_0x15e0eb(0x524)](errorlog)
                        : generateHash(_0x531b4d[_0x15e0eb(0x7f4)] + _0x531b4d[_0x15e0eb(0x76f)], 0x6)
                              ["then"](function (_0x3fed89) {
                                  var _0x25ff05 = _0x15e0eb;
                                  return (_0x531b4d[_0x25ff05(0x7af)] = _0x3fed89), log(_0x25ff05(0x28b) + _0x3fed89), log("rejoining\x20room"), _0x531b4d["joinRoom"](_0x483858);
                              })
                              [_0x15e0eb(0x524)](errorlog)
                    : (_0x531b4d["customWSS"] && (_0x531b4d[_0x15e0eb(0x8e0)] = _0x483858),
                      (_0x4da9f8[_0x15e0eb(0x875)] = _0x483858),
                      _0x531b4d["sendMsg"](_0x4da9f8),
                      (_0x531b4d["listPromise"] = _0x2143a0()),
                      log(_0x15e0eb(0x5e2)),
                      pokeIframeAPI(_0x15e0eb(0xa12), _0x483858),
                      _0x531b4d[_0x15e0eb(0x280)])
            );
        }),
        (_0x531b4d[_0x4e3749(0x8de)] = function (_0x48b3d5, _0x5c0516 = ![]) {
            var _0x277208 = _0x4e3749;
            _0x5c0516 && (_0x48b3d5["UUID"] = _0x5c0516);
            if (_0x531b4d[_0x277208(0xa2f)]) {
                _0x531b4d[_0x277208(0x49f)] ? (_0x48b3d5[_0x277208(0x6d5)] = _0x531b4d[_0x277208(0x49f)]) : ((_0x531b4d[_0x277208(0x49f)] = _0x531b4d[_0x277208(0x750)](0x14)), (_0x48b3d5[_0x277208(0x6d5)] = _0x531b4d["UUID"]));
                if (_0x48b3d5[_0x277208(0x49f)] && _0x48b3d5[_0x277208(0x6d5)] === _0x48b3d5["UUID"]) return;
                _0x531b4d["director"] && (_0x48b3d5[_0x277208(0x276)] = !![]), !(_0x277208(0x875) in _0x48b3d5) && _0x531b4d[_0x277208(0x8e0)] && (_0x48b3d5["roomid"] = _0x531b4d["roomenc"]);
            }
            clearTimeout(_0x531b4d[_0x277208(0x7c5)]);
            try {
                if (_0x531b4d[_0x277208(0x7f4)]) {
                    if (_0x48b3d5[_0x277208(0x4f8)]) {
                        if (_0x531b4d["hash"] !== ![]) {
                            if (!_0x531b4d["ws"] || typeof _0x531b4d["ws"] !== _0x277208(0x74a) || _0x531b4d["ws"][_0x277208(0x6f8)] !== 0x1) log(_0x48b3d5, _0x277208(0x70f)), _0x531b4d["msg"]["push"](_0x48b3d5);
                            else {
                                _0x48b3d5[_0x277208(0x4f8)] = _0x48b3d5[_0x277208(0x4f8)][_0x277208(0x466)](0x0, 0x2c) + _0x531b4d[_0x277208(0x7af)][_0x277208(0x466)](0x0, 0x6);
                                var _0x41c0ca = JSON[_0x277208(0x30c)](_0x48b3d5);
                                if (_0x41c0ca["length"] > 0x3a98) {
                                    errorlog(_0x277208(0x8f3)), errorlog(_0x48b3d5), errorlog(_0x41c0ca["length"]);
                                    return;
                                }
                                _0x531b4d["ws"][_0x277208(0x3e0)](_0x41c0ca);
                            }
                        } else
                            return generateHash(_0x531b4d[_0x277208(0x7f4)] + _0x531b4d[_0x277208(0x76f)], 0x6)
                                [_0x277208(0x741)](function (_0xfcf371) {
                                    var _0x405d77 = _0x277208;
                                    _0x531b4d[_0x405d77(0x7af)] = _0xfcf371;
                                    if (typeof _0x531b4d["ws"] !== _0x405d77(0x74a) || _0x531b4d["ws"][_0x405d77(0x6f8)] !== 0x1) log(_0x48b3d5, "could\x20not\x20be\x20sent;\x20queuing\x20it"), _0x531b4d["msg"][_0x405d77(0x874)](_0x48b3d5);
                                    else {
                                        _0x48b3d5["streamID"] = _0x48b3d5[_0x405d77(0x4f8)][_0x405d77(0x466)](0x0, 0x2c) + _0x531b4d["hash"][_0x405d77(0x466)](0x0, 0x6);
                                        var _0x343590 = JSON[_0x405d77(0x30c)](_0x48b3d5);
                                        if (_0x343590[_0x405d77(0x1bf)] > 0x3a98) {
                                            errorlog(_0x405d77(0x8f3));
                                            return;
                                        }
                                        _0x531b4d["ws"]["send"](_0x343590);
                                    }
                                })
                                [_0x277208(0x524)](errorlog);
                    } else {
                        if (!_0x531b4d["ws"] || typeof _0x531b4d["ws"] !== "object" || _0x531b4d["ws"][_0x277208(0x6f8)] !== 0x1) log(_0x48b3d5, _0x277208(0x70f)), _0x531b4d[_0x277208(0x3c9)][_0x277208(0x874)](_0x48b3d5);
                        else {
                            var _0x41c0ca = JSON[_0x277208(0x30c)](_0x48b3d5);
                            if (_0x41c0ca[_0x277208(0x1bf)] > 0x3a98) {
                                errorlog(_0x277208(0x8f3));
                                return;
                            }
                            _0x531b4d["ws"][_0x277208(0x3e0)](_0x41c0ca);
                        }
                    }
                } else {
                    if (typeof _0x531b4d["ws"] !== _0x277208(0x74a) || _0x531b4d["ws"][_0x277208(0x6f8)] !== 0x1) warnlog(_0x277208(0x9a5)), _0x531b4d[_0x277208(0x3c9)][_0x277208(0x874)](_0x48b3d5);
                    else {
                        var _0x41c0ca = JSON["stringify"](_0x48b3d5);
                        if (_0x41c0ca["length"] > 0x3a98) {
                            errorlog("msg\x20size\x20error");
                            return;
                        }
                        _0x531b4d["ws"][_0x277208(0x3e0)](_0x41c0ca);
                    }
                }
            } catch (_0x126325) {
                errorlog(_0x126325);
            }
        }),
        (_0x531b4d["sendPeers"] = function (_0x5bc3fc, _0x164694 = ![]) {
            var _0xfd9358 = _0x4e3749,
                _0x3f36ea = [],
                _0x1e8adf = JSON[_0xfd9358(0x30c)](_0x5bc3fc);
            for (var _0x334f40 in _0x531b4d[_0xfd9358(0x8cd)]) {
                if (_0x164694 && _0x164694 !== _0x334f40) continue;
                try {
                    _0x531b4d[_0xfd9358(0x8cd)][_0x334f40]["sendChannel"]["send"](_0x1e8adf), _0x3f36ea[_0xfd9358(0x874)](_0x334f40);
                } catch (_0x48e637) {
                    warnlog("RTC\x20Connection\x20seems\x20to\x20be\x20dead\x20or\x20not\x20yet\x20open?\x201");
                }
                if (_0x164694 && _0x164694 === _0x334f40) return _0x3f36ea[_0xfd9358(0x1bf)];
            }
            for (var _0x334f40 in _0x531b4d[_0xfd9358(0x39e)]) {
                if (_0x164694 && _0x164694 !== _0x334f40) continue;
                if (_0x3f36ea[_0xfd9358(0x42d)](_0x334f40)) continue;
                if (_0x531b4d[_0xfd9358(0x39e)][_0x334f40][_0xfd9358(0x375)]) {
                    warnlog(_0x1e8adf);
                    continue;
                }
                try {
                    if (_0xfd9358(0x326) in _0x531b4d[_0xfd9358(0x39e)][_0x334f40]) {
                        var _0x5322d6 = JSON[_0xfd9358(0x59c)](_0x5bc3fc);
                        (_0x5322d6[_0xfd9358(0xa32)] = !![]), (_0x5322d6 = JSON[_0xfd9358(0x30c)](_0x5322d6)), _0x531b4d["rpcs"][_0x531b4d[_0xfd9358(0x39e)][_0x334f40]["realUUID"]]["receiveChannel"][_0xfd9358(0x3e0)](_0x5322d6);
                    } else _0x531b4d[_0xfd9358(0x39e)][_0x334f40][_0xfd9358(0x3dd)][_0xfd9358(0x3e0)](_0x1e8adf);
                    _0x3f36ea["push"](_0x334f40);
                } catch (_0x3e355d) {
                    warnlog("RTC\x20Connection\x20seems\x20to\x20be\x20dead\x20or\x20not\x20yet\x20open?\x202");
                }
            }
            return _0x3f36ea[_0xfd9358(0x1bf)];
        }),
        (_0x531b4d["anysend"] = function (_0x51ffa9, _0x4680de = ![]) {
            var _0x309c62 = _0x4e3749,
                _0x1d6429 = ![];
            if (_0x309c62(0x49f) in _0x51ffa9)
                (_0x1d6429 = _0x531b4d["sendMessage"](_0x51ffa9, _0x51ffa9[_0x309c62(0x49f)])), _0x1d6429 ? (log(_0x51ffa9), log(_0x309c62(0x950))) : (log(_0x309c62(0x6b9)), _0x531b4d[_0x309c62(0x8de)](_0x51ffa9));
            else
                _0x4680de
                    ? ((_0x1d6429 = _0x531b4d[_0x309c62(0x822)](_0x51ffa9)), _0x1d6429 ? (log(_0x51ffa9), log(_0x309c62(0x975))) : (log(_0x309c62(0x7f5)), _0x531b4d["sendMsg"](_0x51ffa9)))
                    : (_0x531b4d[_0x309c62(0x8de)](_0x51ffa9), warnlog(_0x309c62(0x204)), warnlog(_0x51ffa9));
        }),
        (_0x531b4d[_0x4e3749(0x8a5)] = function (_0x48bea8, _0x10d66d = ![]) {
            var _0x3c0d5e = _0x4e3749,
                _0x45a9a8 = ![];
            if (_0x3c0d5e(0x49f) in _0x48bea8) (_0x45a9a8 = _0x531b4d["sendRequest"](_0x48bea8, _0x48bea8[_0x3c0d5e(0x49f)])), _0x45a9a8 ? log(_0x3c0d5e(0x950)) : (log(_0x3c0d5e(0x6b9)), _0x531b4d["sendMsg"](_0x48bea8));
            else
                _0x10d66d
                    ? ((_0x45a9a8 = _0x531b4d[_0x3c0d5e(0x1a7)](_0x48bea8)), _0x45a9a8 ? log(_0x3c0d5e(0x975)) : (log(_0x3c0d5e(0x7f5)), _0x531b4d[_0x3c0d5e(0x8de)](_0x48bea8)))
                    : (_0x531b4d["sendMsg"](_0x48bea8), warnlog("sending\x20request\x20via\x20server"), warnlog(_0x48bea8));
        }),
        (_0x531b4d[_0x4e3749(0x237)] = function (_0x3b2db4) {
            var _0x37dfc7 = _0x4e3749;
            log(_0x3b2db4);
            if (_0x37dfc7(0x4db) in _0x3b2db4) {
                if (_0x37dfc7(0x50f) in _0x3b2db4) {
                    if ("scene" in _0x3b2db4) {
                        if (_0x531b4d[_0x37dfc7(0x725)] !== ![]) {
                            var _0xf91b72 = ![],
                                _0x9d494e = 0x0;
                            for (var _0x3dfda8 in _0x531b4d[_0x37dfc7(0x39e)]) {
                                _0x9d494e += 0x1;
                                if (_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8]["streamID"] === _0x3b2db4["target"]) {
                                    if (_0x37dfc7(0x857) in _0x3b2db4) {
                                        if (_0x3b2db4[_0x37dfc7(0x4db)] == "mute")
                                            _0x3b2db4["value"] == 0x1
                                                ? (log("Mute\x20video\x203306"), (_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x344)] = !![]), applyMuteState(_0x3dfda8))
                                                : (log(_0x37dfc7(0x8a7)), (_0x531b4d["rpcs"][_0x3dfda8]["mutedState"] = ![]), applyMuteState(_0x3dfda8)),
                                                _0x531b4d[_0x37dfc7(0x99b)](_0x3dfda8);
                                        else {
                                            if (_0x3b2db4["action"] == "display") {
                                                if (_0x531b4d[_0x37dfc7(0xa1b)]) return;
                                                if (_0x531b4d["scene"] === _0x3b2db4[_0x37dfc7(0x725)]) {
                                                    if (_0x531b4d[_0x37dfc7(0x713)] == 0x2) {
                                                        if (_0x3b2db4[_0x37dfc7(0x857)] == 0x0) {
                                                            (_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x2bd)] = !![]), applyMuteState(_0x3dfda8);
                                                            _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)] &&
                                                                _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)]["style"]["display"] &&
                                                                _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] !== "none" &&
                                                                ((_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8]["videoElement"]["style"][_0x37dfc7(0x707)] = _0x37dfc7(0x9b9)),
                                                                (_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8]["videoElement"]["sceneType2"] = ![]),
                                                                (_0xf91b72 = !![]));
                                                            _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)] &&
                                                                _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8]["iframeEle"][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] &&
                                                                _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] !== _0x37dfc7(0x9b9) &&
                                                                ((_0x531b4d["rpcs"][_0x3dfda8][_0x37dfc7(0x559)][_0x37dfc7(0xa19)]["display"] = _0x37dfc7(0x9b9)),
                                                                (_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)]["sceneType2"] = ![]),
                                                                (_0xf91b72 = !![]));
                                                            var _0xe686e3 = 0x0,
                                                                _0x12a765 = ![];
                                                            for (var _0x325bc9 in _0x531b4d[_0x37dfc7(0x39e)]) {
                                                                _0x325bc9 !== _0x3dfda8 &&
                                                                    (_0x531b4d[_0x37dfc7(0x39e)][_0x325bc9][_0x37dfc7(0x6fa)] &&
                                                                        _0x531b4d[_0x37dfc7(0x39e)][_0x325bc9][_0x37dfc7(0x6fa)][_0x37dfc7(0x972)] &&
                                                                        _0x531b4d["rpcs"][_0x325bc9][_0x37dfc7(0x6fa)][_0x37dfc7(0x972)] > _0xe686e3 &&
                                                                        ((_0xe686e3 = _0x531b4d[_0x37dfc7(0x39e)][_0x325bc9][_0x37dfc7(0x6fa)][_0x37dfc7(0x972)]), (_0x12a765 = _0x325bc9)),
                                                                    _0x531b4d[_0x37dfc7(0x39e)][_0x325bc9][_0x37dfc7(0x559)] &&
                                                                        _0x531b4d[_0x37dfc7(0x39e)][_0x325bc9]["iframeEle"][_0x37dfc7(0x972)] &&
                                                                        _0x531b4d[_0x37dfc7(0x39e)][_0x325bc9][_0x37dfc7(0x559)]["sceneType2"] > _0xe686e3 &&
                                                                        ((_0xe686e3 = _0x531b4d["rpcs"][_0x325bc9][_0x37dfc7(0x559)][_0x37dfc7(0x972)]), (_0x12a765 = _0x325bc9)));
                                                            }
                                                            _0x12a765 &&
                                                                ((_0x531b4d[_0x37dfc7(0x39e)][_0x12a765][_0x37dfc7(0x2bd)] = ![]),
                                                                applyMuteState(_0x12a765),
                                                                _0x531b4d["rpcs"][_0x12a765][_0x37dfc7(0x6fa)] &&
                                                                    (_0x531b4d[_0x37dfc7(0x39e)][_0x12a765][_0x37dfc7(0x6fa)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] &&
                                                                        _0x531b4d[_0x37dfc7(0x39e)][_0x12a765][_0x37dfc7(0x6fa)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] !== _0x37dfc7(0x4de) &&
                                                                        ((_0x531b4d[_0x37dfc7(0x39e)][_0x12a765]["videoElement"][_0x37dfc7(0xa19)]["display"] = _0x37dfc7(0x4de)),
                                                                        (_0x531b4d[_0x37dfc7(0x39e)][_0x12a765][_0x37dfc7(0x6fa)]["sceneType2"] = Date[_0x37dfc7(0x312)]()),
                                                                        (_0xf91b72 = !![])),
                                                                    _0x531b4d[_0x37dfc7(0x39e)][_0x12a765][_0x37dfc7(0x6fa)][_0x37dfc7(0x934)] && clearInterval(_0x531b4d[_0x37dfc7(0x39e)][_0x12a765][_0x37dfc7(0x6fa)]["controlTimer"]),
                                                                    (_0x531b4d[_0x37dfc7(0x39e)][_0x12a765][_0x37dfc7(0x6fa)][_0x37dfc7(0x556)] = ![]),
                                                                    (_0x531b4d[_0x37dfc7(0x39e)][_0x12a765][_0x37dfc7(0x6fa)][_0x37dfc7(0x934)] = setTimeout(
                                                                        showControlBar[_0x37dfc7(0x7ae)](null, _0x531b4d["rpcs"][_0x12a765]["videoElement"]),
                                                                        0xbb8
                                                                    ))),
                                                                _0x531b4d[_0x37dfc7(0x39e)][_0x12a765][_0x37dfc7(0x559)] &&
                                                                    _0x531b4d[_0x37dfc7(0x39e)][_0x12a765][_0x37dfc7(0x559)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] &&
                                                                    _0x531b4d[_0x37dfc7(0x39e)][_0x12a765][_0x37dfc7(0x559)]["style"][_0x37dfc7(0x707)] !== _0x37dfc7(0x4de) &&
                                                                    ((_0x531b4d["rpcs"][_0x12a765][_0x37dfc7(0x559)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] = "block"),
                                                                    (_0x531b4d[_0x37dfc7(0x39e)][_0x12a765][_0x37dfc7(0x559)][_0x37dfc7(0x972)] = Date[_0x37dfc7(0x312)]()),
                                                                    (_0xf91b72 = !![])));
                                                        } else {
                                                            for (var _0x325bc9 in _0x531b4d["rpcs"]) {
                                                                _0x325bc9 !== _0x3dfda8 &&
                                                                    ((_0x531b4d[_0x37dfc7(0x39e)][_0x325bc9][_0x37dfc7(0x2bd)] = !![]),
                                                                    applyMuteState(_0x325bc9),
                                                                    _0x531b4d["rpcs"][_0x325bc9][_0x37dfc7(0x6fa)] &&
                                                                        _0x531b4d["rpcs"][_0x325bc9]["videoElement"][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] &&
                                                                        _0x531b4d[_0x37dfc7(0x39e)][_0x325bc9][_0x37dfc7(0x6fa)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] !== "none" &&
                                                                        ((_0x531b4d[_0x37dfc7(0x39e)][_0x325bc9]["videoElement"][_0x37dfc7(0xa19)]["display"] = "none"), (_0xf91b72 = !![])),
                                                                    _0x531b4d[_0x37dfc7(0x39e)][_0x325bc9][_0x37dfc7(0x559)] &&
                                                                        _0x531b4d["rpcs"][_0x325bc9]["iframeEle"]["style"][_0x37dfc7(0x707)] &&
                                                                        _0x531b4d["rpcs"][_0x325bc9][_0x37dfc7(0x559)]["style"][_0x37dfc7(0x707)] !== "none" &&
                                                                        ((_0x531b4d[_0x37dfc7(0x39e)][_0x325bc9]["iframeEle"]["style"]["display"] = "none"), (_0xf91b72 = !![])));
                                                            }
                                                            (_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8]["mutedStateScene"] = ![]),
                                                                applyMuteState(_0x3dfda8),
                                                                _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)] &&
                                                                    (_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0xa19)]["display"] &&
                                                                        _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] !== _0x37dfc7(0x4de) &&
                                                                        ((_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] = _0x37dfc7(0x4de)),
                                                                        (_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0x972)] = Date["now"]()),
                                                                        (_0xf91b72 = !![])),
                                                                    _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)]["controlTimer"] && clearInterval(_0x531b4d["rpcs"][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0x934)]),
                                                                    (_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8]["videoElement"][_0x37dfc7(0x556)] = ![]),
                                                                    (_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8]["videoElement"][_0x37dfc7(0x934)] = setTimeout(
                                                                        showControlBar[_0x37dfc7(0x7ae)](null, _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)]),
                                                                        0xbb8
                                                                    ))),
                                                                _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)] &&
                                                                    _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)]["style"][_0x37dfc7(0x707)] &&
                                                                    _0x531b4d["rpcs"][_0x3dfda8]["iframeEle"][_0x37dfc7(0xa19)]["display"] !== _0x37dfc7(0x4de) &&
                                                                    ((_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)]["style"]["display"] = _0x37dfc7(0x4de)),
                                                                    (_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)]["sceneType2"] = Date[_0x37dfc7(0x312)]()),
                                                                    (_0xf91b72 = !![]));
                                                        }
                                                    } else {
                                                        if (_0x531b4d["sceneType"] == 0x1) {
                                                            if (_0x3b2db4[_0x37dfc7(0x857)] == 0x0)
                                                                _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)] &&
                                                                    _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] &&
                                                                    _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] !== _0x37dfc7(0x9b9) &&
                                                                    ((_0x531b4d["rpcs"][_0x3dfda8]["videoElement"]["style"]["display"] = "none"), (_0xf91b72 = !![])),
                                                                    _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)] &&
                                                                        _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] &&
                                                                        _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)][_0x37dfc7(0xa19)]["display"] !== "none" &&
                                                                        ((_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] = _0x37dfc7(0x9b9)), (_0xf91b72 = !![]));
                                                            else {
                                                                for (var _0x325bc9 in _0x531b4d[_0x37dfc7(0x39e)]) {
                                                                    _0x325bc9 !== _0x3dfda8 &&
                                                                        (_0x531b4d["rpcs"][_0x325bc9][_0x37dfc7(0x6fa)] &&
                                                                            _0x531b4d[_0x37dfc7(0x39e)][_0x325bc9]["videoElement"][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] &&
                                                                            _0x531b4d[_0x37dfc7(0x39e)][_0x325bc9][_0x37dfc7(0x6fa)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] !== _0x37dfc7(0x9b9) &&
                                                                            ((_0x531b4d[_0x37dfc7(0x39e)][_0x325bc9][_0x37dfc7(0x6fa)][_0x37dfc7(0xa19)]["display"] = _0x37dfc7(0x9b9)), (_0xf91b72 = !![])),
                                                                        _0x531b4d[_0x37dfc7(0x39e)][_0x325bc9]["iframeEle"] &&
                                                                            _0x531b4d[_0x37dfc7(0x39e)][_0x325bc9]["iframeEle"][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] &&
                                                                            _0x531b4d[_0x37dfc7(0x39e)][_0x325bc9][_0x37dfc7(0x559)][_0x37dfc7(0xa19)]["display"] !== _0x37dfc7(0x9b9) &&
                                                                            ((_0x531b4d[_0x37dfc7(0x39e)][_0x325bc9]["iframeEle"][_0x37dfc7(0xa19)]["display"] = _0x37dfc7(0x9b9)), (_0xf91b72 = !![])));
                                                                }
                                                                _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8]["videoElement"] &&
                                                                    (_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)]["style"]["display"] &&
                                                                        _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] !== _0x37dfc7(0x4de) &&
                                                                        ((_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)]["style"][_0x37dfc7(0x707)] = "block"), (_0xf91b72 = !![])),
                                                                    _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0x934)] && clearInterval(_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0x934)]),
                                                                    (_0x531b4d["rpcs"][_0x3dfda8]["videoElement"][_0x37dfc7(0x556)] = ![]),
                                                                    (_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)]["controlTimer"] = setTimeout(
                                                                        showControlBar[_0x37dfc7(0x7ae)](null, _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)]),
                                                                        0xbb8
                                                                    ))),
                                                                    _0x531b4d["rpcs"][_0x3dfda8][_0x37dfc7(0x559)] &&
                                                                        _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8]["iframeEle"][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] &&
                                                                        _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8]["iframeEle"][_0x37dfc7(0xa19)]["display"] !== _0x37dfc7(0x4de) &&
                                                                        ((_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] = _0x37dfc7(0x4de)), (_0xf91b72 = !![]));
                                                            }
                                                        } else
                                                            _0x3b2db4[_0x37dfc7(0x857)] == 0x0
                                                                ? ((_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x2bd)] = !![]),
                                                                  applyMuteState(_0x3dfda8),
                                                                  _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)] &&
                                                                      _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)]["style"][_0x37dfc7(0x707)] &&
                                                                      _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] !== "none" &&
                                                                      ((_0x531b4d["rpcs"][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0xa19)]["display"] = _0x37dfc7(0x9b9)), (_0xf91b72 = !![])),
                                                                  _0x531b4d["rpcs"][_0x3dfda8]["iframeEle"] &&
                                                                      _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] &&
                                                                      _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] !== "none" &&
                                                                      ((_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)][_0x37dfc7(0xa19)]["display"] = "none"), (_0xf91b72 = !![])))
                                                                : ((_0x531b4d["rpcs"][_0x3dfda8]["mutedStateScene"] = ![]),
                                                                  applyMuteState(_0x3dfda8),
                                                                  _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)] &&
                                                                      (_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0xa19)]["display"] &&
                                                                          _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)]["style"][_0x37dfc7(0x707)] !== _0x37dfc7(0x4de) &&
                                                                          ((_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8]["videoElement"][_0x37dfc7(0xa19)][_0x37dfc7(0x707)] = _0x37dfc7(0x4de)), (_0xf91b72 = !![])),
                                                                      _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0x934)] && clearInterval(_0x531b4d["rpcs"][_0x3dfda8]["videoElement"][_0x37dfc7(0x934)]),
                                                                      (_0x531b4d["rpcs"][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0x556)] = ![]),
                                                                      (_0x531b4d["rpcs"][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0x934)] = setTimeout(
                                                                          showControlBar[_0x37dfc7(0x7ae)](null, _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)]),
                                                                          0xbb8
                                                                      ))),
                                                                  _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8]["iframeEle"] &&
                                                                      _0x531b4d["rpcs"][_0x3dfda8]["iframeEle"][_0x37dfc7(0xa19)]["display"] &&
                                                                      _0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x559)][_0x37dfc7(0xa19)]["display"] !== _0x37dfc7(0x4de) &&
                                                                      ((_0x531b4d["rpcs"][_0x3dfda8][_0x37dfc7(0x559)]["style"][_0x37dfc7(0x707)] = _0x37dfc7(0x4de)), (_0xf91b72 = !![])));
                                                    }
                                                }
                                                _0x531b4d["sceneSync"](_0x3dfda8);
                                            } else
                                                _0x3b2db4[_0x37dfc7(0x4db)] == _0x37dfc7(0x9da) &&
                                                    (log(parseInt(_0x3b2db4[_0x37dfc7(0x857)]) / 0x64),
                                                    _0x531b4d["rpcs"][_0x3dfda8]["videoElement"] &&
                                                        ((_0x531b4d[_0x37dfc7(0x39e)][_0x3dfda8][_0x37dfc7(0x6fa)][_0x37dfc7(0x9da)] = parseInt(_0x3b2db4[_0x37dfc7(0x857)]) / 0x64), log("UN-MUTED")));
                                        }
                                    }
                                }
                            }
                            _0xf91b72 && updateMixer();
                        }
                    } else {
                        if (_0x3b2db4[_0x37dfc7(0x4db)] == _0x37dfc7(0x80d)) {
                        } else {
                            if (_0x3b2db4[_0x37dfc7(0x4db)] == _0x37dfc7(0x2ce)) {
                            }
                        }
                    }
                } else
                    _0x3b2db4[_0x37dfc7(0x4db)] === _0x37dfc7(0x291) &&
                        (warnlog("custom\x20layout\x20being\x20applied"), log(_0x3b2db4), (_0x531b4d[_0x37dfc7(0x291)] = _0x3b2db4[_0x37dfc7(0x857)]), pokeIframeAPI(_0x37dfc7(0x61f), _0x531b4d[_0x37dfc7(0x291)]), updateMixer());
            }
        }),
        (_0x531b4d["newMainDirectorSetup"] = function () {
            var _0x409389 = _0x4e3749;
            log(_0x409389(0x51e)),
                _0x531b4d[_0x409389(0x82d)] in _0x531b4d["pcs"] &&
                    _0x531b4d[_0x409389(0x8cd)][_0x531b4d["directorUUID"]]["stats"] &&
                    _0x531b4d[_0x409389(0x8cd)][_0x531b4d[_0x409389(0x82d)]][_0x409389(0x21d)]["info"] &&
                    (_0x531b4d["pcs"][_0x531b4d[_0x409389(0x82d)]][_0x409389(0x21d)][_0x409389(0x915)][_0x409389(0x276)] = !![]),
                _0x531b4d[_0x409389(0x82d)] in _0x531b4d[_0x409389(0x39e)] &&
                    (_0x531b4d[_0x409389(0x39e)][_0x531b4d[_0x409389(0x82d)]][_0x409389(0x21d)] &&
                        _0x531b4d["rpcs"][_0x531b4d[_0x409389(0x82d)]][_0x409389(0x21d)][_0x409389(0x915)] &&
                        (_0x531b4d[_0x409389(0x39e)][_0x531b4d[_0x409389(0x82d)]][_0x409389(0x21d)][_0x409389(0x915)][_0x409389(0x276)] = !![]),
                    _0x531b4d[_0x409389(0x276)] &&
                        (getById(_0x409389(0x661) + _0x531b4d[_0x409389(0x82d)])[_0x409389(0x23d)][_0x409389(0x6e9)](_0x409389(0x9e1)),
                        _0x531b4d[_0x409389(0x39e)][_0x531b4d["directorUUID"]][_0x409389(0x931)] === ![] && (getById(_0x409389(0x9a0) + _0x531b4d["directorUUID"])[_0x409389(0x471)] = miscTranslations[_0x409389(0x995)]))),
                _0x531b4d["requestCoDirector"](),
                updateUserList();
        }),
        (_0x531b4d[_0x4e3749(0x8d6)] = async function _0x424594(_0x4c374e = ![]) {
            var _0x98df2b = _0x4e3749;
            if (_0x531b4d[_0x98df2b(0x3a1)] === !![]) {
                log("tainted");
                return;
            }
            if (_0x531b4d["ws"] !== null) {
                log(_0x98df2b(0x9d6));
                return;
            }
            _0x531b4d[_0x98df2b(0x259)] == ![] && (_0x531b4d[_0x98df2b(0x3d7)] !== ![] ? (_0x531b4d[_0x98df2b(0x259)] = "wss://proxywss.rtc.ninja:443") : (_0x531b4d[_0x98df2b(0x259)] = _0x98df2b(0x64b)));
            if (!RTCPeerConnection) {
                console[_0x98df2b(0xa08)](miscTranslations[_0x98df2b(0x87e)]);
                !_0x531b4d[_0x98df2b(0x2d4)] && warnUser(miscTranslations[_0x98df2b(0x87e)], ![], ![]);
                return;
            }
            _0x531b4d["ws"] === null && ((_0x531b4d["ws"] = ![]), await chooseBestTURN());
            if (_0x531b4d[_0x98df2b(0xa2f)] === ![]) {
                _0x531b4d[_0x98df2b(0x7a9)] = _0x531b4d[_0x98df2b(0x750)](0xc);
                for (var _0x5bf99b in _0x531b4d[_0x98df2b(0x39e)]) {
                    warnlog(_0x98df2b(0x4d8)), _0x531b4d[_0x98df2b(0x39e)][_0x5bf99b]["connectionState"] === _0x98df2b(0x2d2) && (warnlog("cleaning\x20up\x20lost\x20connection"), _0x531b4d[_0x98df2b(0x812)](_0x5bf99b));
                }
            }
            _0x531b4d["bypass"]
                ? ((_0x531b4d["ws"] = {}),
                  (_0x531b4d["ws"][_0x98df2b(0x6f8)] = 0x1),
                  (_0x531b4d["ws"][_0x98df2b(0x3e0)] = function (_0x590af9) {
                      var _0x248799 = _0x98df2b;
                      parent[_0x248799(0x489)]({ bypass: _0x590af9 }, _0x531b4d[_0x248799(0x147)]);
                  }),
                  setTimeout(function () {
                      var _0x37ac82 = _0x98df2b;
                      _0x531b4d["ws"][_0x37ac82(0x2d6)]();
                  }, 0xa))
                : (_0x531b4d["ws"] = new WebSocket(_0x531b4d[_0x98df2b(0x259)])),
                _0x4c374e == ![] &&
                    (_0x531b4d[_0x98df2b(0x44b)] === !![] && ((_0x531b4d[_0x98df2b(0x44b)] = null), toggleClock()),
                    (_0x531b4d[_0x98df2b(0x73f)] = setTimeout(function () {
                        var _0x3dd49e = _0x98df2b;
                        pokeIframeAPI(_0x3dd49e(0x19c), _0x3dd49e(0x73f)),
                            pokeIframeAPI(_0x3dd49e(0x57d), _0x3dd49e(0x73f)),
                            errorlog(_0x3dd49e(0x8c3)),
                            !_0x531b4d[_0x3dd49e(0x2d4)] &&
                                !_0x531b4d["studioSoftware"] &&
                                setTimeout(function () {
                                    var _0x4aeb5f = _0x3dd49e;
                                    warnUser(miscTranslations[_0x4aeb5f(0x780)], ![], ![]);
                                }, 0x1);
                    }, 0x7530))),
                (_0x531b4d["ws"][_0x98df2b(0x2d6)] = function _0x2f49ea() {
                    var _0x4ffabe = _0x98df2b;
                    clearTimeout(_0x531b4d[_0x4ffabe(0x7c5)]), clearInterval(_0x531b4d[_0x4ffabe(0x73f)]), log("connected\x20to\x20video\x20server"), checkConnection();
                    if (_0x531b4d[_0x4ffabe(0x7d4)]) {
                        errorlog(_0x4ffabe(0x3eb));
                        for (_0xc72b62 in _0x531b4d[_0x4ffabe(0x39e)]) {
                            try {
                                _0x531b4d["rpcs"][_0xc72b62][_0x4ffabe(0x36e)]();
                            } catch (_0x3ef8e1) {}
                        }
                        for (_0xc72b62 in _0x531b4d[_0x4ffabe(0x8cd)]) {
                            try {
                                _0x531b4d["pcs"][_0xc72b62][_0x4ffabe(0x36e)]();
                            } catch (_0x3ee31d) {}
                        }
                        (_0x531b4d[_0x4ffabe(0x7d4)] = ![]), (_0x531b4d[_0x4ffabe(0x8d0)] = ![]);
                    }
                    if (_0x531b4d[_0x4ffabe(0x3c9)] !== [])
                        try {
                            var _0x292756 = _0x531b4d[_0x4ffabe(0x3c9)][_0x4ffabe(0x67d)](-0x1e);
                            _0x531b4d["msg"] = [];
                            for (var _0x1fe483 in _0x292756) {
                                log(_0x4ffabe(0x5c1)), _0x531b4d[_0x4ffabe(0x8de)](_0x292756[_0x1fe483]);
                            }
                        } catch (_0x487d64) {
                            errorlog(_0x487d64);
                        }
                    if (_0x4c374e == !![]) {
                        pokeIframeAPI(_0x4ffabe(0x19c), _0x4ffabe(0x953)), pokeIframeAPI(_0x4ffabe(0x57d), _0x4ffabe(0x953));
                        _0x531b4d[_0x4ffabe(0x4e6)] && _0x531b4d["seedStream"]();
                        if (_0x531b4d[_0x4ffabe(0x875)] !== ![]) {
                            if (_0x531b4d[_0x4ffabe(0x875)] === "" && (!_0x531b4d[_0x4ffabe(0xa1b)] || _0x531b4d[_0x4ffabe(0xa1b)] === "")) {
                            } else log(_0x4ffabe(0x5ed)), log(_0x4ffabe(0x882)), joinRoom(_0x531b4d[_0x4ffabe(0x875)]);
                            if (_0x531b4d[_0x4ffabe(0x4d2)][_0x4ffabe(0x1bf)]) {
                                var _0x45f00e = Object[_0x4ffabe(0x440)](_0x531b4d[_0x4ffabe(0x83b)]);
                                for (var _0xc72b62 in _0x45f00e) {
                                    _0x531b4d[_0x4ffabe(0x4d2)][_0x4ffabe(0x42d)](_0x45f00e[_0xc72b62]) && (log(_0x4ffabe(0x514) + _0x45f00e[_0xc72b62]), _0x531b4d[_0x4ffabe(0x827)](_0x45f00e[_0xc72b62]));
                                }
                            }
                        } else {
                            var _0x45f00e = Object[_0x4ffabe(0x440)](_0x531b4d[_0x4ffabe(0x83b)]);
                            for (var _0xc72b62 in _0x45f00e) {
                                log("LOADING\x20UP\x20WAITING\x20WATCH\x20STREAM:\x20" + _0x45f00e[_0xc72b62]), _0x531b4d[_0x4ffabe(0x827)](_0x45f00e[_0xc72b62]);
                            }
                        }
                    } else pokeIframeAPI(_0x4ffabe(0x19c), _0x4ffabe(0x4cf)), pokeIframeAPI(_0x4ffabe(0x57d), _0x4ffabe(0x4cf));
                }),
                (_0x531b4d[_0x98df2b(0x79b)] = function (_0x27f97f) {
                    var _0x34ff1d = _0x98df2b;
                    for (var _0x45bdee in _0x531b4d["rpcs"]) {
                        if (_0x531b4d["rpcs"][_0x45bdee]["streamID"] === _0x27f97f) return log(_0x34ff1d(0x4ae)), ![];
                    }
                    if (_0x531b4d[_0x34ff1d(0x83b)][_0x27f97f]) return log(_0x34ff1d(0x4d7)), ![];
                    return _0x531b4d[_0x34ff1d(0x827)](_0x27f97f), log(_0x34ff1d(0x30b)), !![];
                }),
                (_0x531b4d["ws"][_0x98df2b(0x1e5)] = async function (_0x15171b) {
                    var _0x38de6c = _0x98df2b;
                    clearTimeout(_0x531b4d["pingTimeout"]);
                    try {
                        var _0x1ad141 = JSON[_0x38de6c(0x59c)](_0x15171b[_0x38de6c(0x5a0)]);
                    } catch (_0x28c86d) {
                        try {
                            var _0x1ad141 = JSON[_0x38de6c(0x59c)](_0x15171b[_0x38de6c(0x5a0)]["toString"]());
                        } catch (_0x2182c5) {
                            errorlog(_0x2182c5);
                            return;
                        }
                    }
                    _0x38de6c(0x4f8) in _0x1ad141 && (_0x1ad141[_0x38de6c(0x4f8)] = _0x531b4d[_0x38de6c(0x53d)](_0x1ad141[_0x38de6c(0x4f8)]));
                    if ("remote" in _0x1ad141) {
                        _0x1ad141 = await _0x531b4d[_0x38de6c(0x932)](_0x1ad141);
                        if (!_0x1ad141) return;
                    }
                    if (_0x531b4d[_0x38de6c(0xa2f)]) {
                        if (_0x38de6c(0x6d5) in _0x1ad141 && _0x531b4d[_0x38de6c(0x49f)] && _0x1ad141[_0x38de6c(0x6d5)] === _0x531b4d[_0x38de6c(0x49f)]) return;
                        else log(_0x1ad141);
                        if ("UUID" in _0x1ad141) {
                            if (_0x531b4d[_0x38de6c(0x49f)]) {
                                if (_0x1ad141[_0x38de6c(0x49f)] !== _0x531b4d["UUID"]) return;
                            } else return;
                            delete _0x1ad141["UUID"];
                        }
                        if (_0x38de6c(0x875) in _0x1ad141) {
                            if (!_0x531b4d["roomenc"]) return;
                            if (_0x38de6c(0x884) in _0x1ad141) {
                                if (_0x1ad141[_0x38de6c(0x884)] === _0x38de6c(0x80d)) {
                                    if (_0x38de6c(0x875) in _0x1ad141) {
                                        if (_0x38de6c(0x50f) in _0x1ad141) {
                                            if (_0x1ad141[_0x38de6c(0x50f)] == _0x531b4d["UUID"]) {
                                                (_0x1ad141[_0x38de6c(0x884)] = _0x38de6c(0x7d4)), (_0x531b4d[_0x38de6c(0x8e0)] = _0x1ad141[_0x38de6c(0x875)]);
                                                var _0x3cd586 = {};
                                                (_0x3cd586[_0x38de6c(0x884)] = "joinroom"),
                                                    (_0x3cd586[_0x38de6c(0x875)] = _0x531b4d[_0x38de6c(0x8e0)]),
                                                    (_0x3cd586[_0x38de6c(0x4f8)] = _0x531b4d[_0x38de6c(0x4f8)]),
                                                    _0x531b4d[_0x38de6c(0x8de)](_0x3cd586);
                                            } else return;
                                        } else return;
                                    } else return;
                                } else {
                                    if (_0x1ad141[_0x38de6c(0x875)] !== _0x531b4d[_0x38de6c(0x8e0)]) return;
                                }
                            } else {
                                if (_0x1ad141[_0x38de6c(0x875)] !== _0x531b4d[_0x38de6c(0x8e0)]) return;
                            }
                            delete _0x1ad141[_0x38de6c(0x875)];
                        }
                        if (_0x38de6c(0x276) in _0x1ad141) {
                            if (_0x531b4d["token"] || _0x531b4d[_0x38de6c(0x6ea)]) await checkToken();
                            else
                                _0x1ad141["from"] &&
                                    ((_0x531b4d["directorUUID"] = _0x1ad141["from"]),
                                    (_0x531b4d[_0x38de6c(0x284)] = ![]),
                                    (_0x531b4d["directorList"] = []),
                                    _0x531b4d[_0x38de6c(0x308)][_0x38de6c(0x874)](_0x531b4d["directorUUID"]),
                                    _0x531b4d["newMainDirectorSetup"]());
                            delete _0x1ad141[_0x38de6c(0x276)];
                        }
                        "from" in _0x1ad141 && ((_0x1ad141["UUID"] = _0x1ad141[_0x38de6c(0x6d5)]), delete _0x1ad141["from"]);
                        if (_0x38de6c(0x884) in _0x1ad141) {
                            if (_0x1ad141["request"] === "play") {
                                if (_0x38de6c(0x4f8) in _0x1ad141) {
                                    if (_0x1ad141["streamID"] === _0x531b4d["streamID"]) _0x1ad141["request"] = _0x38de6c(0x881);
                                    else return;
                                }
                            } else {
                                if (_0x1ad141[_0x38de6c(0x884)] === _0x38de6c(0x20b)) {
                                    if (_0x531b4d[_0x38de6c(0x60d)]) {
                                        if (_0x531b4d[_0x38de6c(0x60d)][_0x38de6c(0x42d)](_0x1ad141[_0x38de6c(0x4f8)])) {
                                            play(_0x1ad141[_0x38de6c(0x4f8)]);
                                            return;
                                        } else return;
                                    }
                                } else {
                                    if (_0x1ad141[_0x38de6c(0x884)] === _0x38de6c(0x35a)) {
                                        if ("streamID" in _0x1ad141) {
                                            if (_0x531b4d["view_set"]) {
                                                if (_0x531b4d[_0x38de6c(0x60d)][_0x38de6c(0x42d)](_0x1ad141[_0x38de6c(0x4f8)])) play(_0x1ad141["streamID"]);
                                                else {
                                                }
                                            } else play(_0x1ad141[_0x38de6c(0x4f8)]);
                                        }
                                        _0x1ad141[_0x38de6c(0x884)] = _0x38de6c(0x881);
                                    }
                                }
                            }
                        } else {
                            if ("streamID" in _0x1ad141) {
                                if (_0x531b4d[_0x38de6c(0x60d)]) {
                                    if (_0x531b4d[_0x38de6c(0x60d)][_0x38de6c(0x42d)](_0x1ad141["streamID"])) {
                                    } else return;
                                } else {
                                    if (_0x531b4d["view"]) {
                                        if (_0x531b4d["view"] !== _0x1ad141[_0x38de6c(0x4f8)]) return;
                                        else {
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (_0x1ad141["request"]) {
                        if (_0x1ad141[_0x38de6c(0x884)] == "offerSDP") {
                            if (_0x531b4d[_0x38de6c(0x738)]) {
                                if (_0x531b4d["directorList"]["indexOf"](_0x1ad141[_0x38de6c(0x49f)]) >= 0x0) _0x531b4d["offerSDP"](_0x1ad141[_0x38de6c(0x49f)]);
                                else _0x531b4d[_0x38de6c(0x276)] && _0x1ad141[_0x38de6c(0x49f)] in _0x531b4d[_0x38de6c(0x39e)] && _0x531b4d["offerSDP"](_0x1ad141[_0x38de6c(0x49f)]);
                            } else _0x531b4d[_0x38de6c(0x881)](_0x1ad141[_0x38de6c(0x49f)]);
                        } else {
                            if (_0x1ad141[_0x38de6c(0x884)] == _0x38de6c(0x635)) {
                                log(_0x1ad141);
                                if (_0x531b4d["token"] || _0x531b4d[_0x38de6c(0x6ea)]) await checkToken();
                                else
                                    "director" in _0x1ad141
                                        ? ((_0x531b4d[_0x38de6c(0x82d)] = _0x1ad141[_0x38de6c(0x276)]),
                                          (_0x531b4d["directorStreamID"] = ![]),
                                          (_0x531b4d[_0x38de6c(0x308)] = []),
                                          _0x531b4d[_0x38de6c(0x308)][_0x38de6c(0x874)](_0x531b4d["directorUUID"]),
                                          _0x531b4d[_0x38de6c(0x74b)]())
                                        : ((_0x531b4d[_0x38de6c(0x82d)] = ![]), (_0x531b4d[_0x38de6c(0x284)] = ![]), (_0x531b4d["directorList"] = []));
                                if (_0x531b4d[_0x38de6c(0x6ea)]) {
                                } else {
                                    if (_0x38de6c(0x30f) in _0x1ad141) {
                                        if (_0x531b4d[_0x38de6c(0x835)] || _0x1ad141[_0x38de6c(0x30f)] == ![]) {
                                            if (!_0x531b4d[_0x38de6c(0x2d4)]) {
                                                getById(_0x38de6c(0x78f))[_0x38de6c(0x5f5)] = miscTranslations[_0x38de6c(0x1a2)];
                                                if (_0x531b4d[_0x38de6c(0x1bb)]) _0x531b4d[_0x38de6c(0x9d7)] === null && warnUser(miscTranslations["room-is-claimed-codirector"], ![], ![]);
                                                else
                                                    _0x531b4d[_0x38de6c(0x835)]
                                                        ? setTimeout(function () {
                                                              var _0x2bb1b7 = _0x38de6c;
                                                              warnUser(miscTranslations[_0x2bb1b7(0x5fb)], ![], ![]);
                                                          }, 0x1)
                                                        : setTimeout(function () {
                                                              var _0x4306f7 = _0x38de6c;
                                                              warnUser(miscTranslations[_0x4306f7(0x93f)], ![], ![]);
                                                          }, 0x1);
                                            }
                                            (_0x531b4d[_0x38de6c(0x9d7)] = ![]), pokeAPI(_0x38de6c(0x276), ![]), pokeIframeAPI(_0x38de6c(0x276), ![]);
                                        } else (_0x531b4d[_0x38de6c(0x9d7)] = !![]), pokeAPI(_0x38de6c(0x276), !![]), pokeIframeAPI(_0x38de6c(0x276), !![]);
                                    }
                                }
                                _0x531b4d[_0x38de6c(0x280)][_0x38de6c(0x48f)](_0x1ad141[_0x38de6c(0x9f0)]);
                            } else {
                                if (_0x1ad141["request"] == _0x38de6c(0x7d4)) {
                                    (_0x531b4d[_0x38de6c(0x27b)] = []), (_0x531b4d[_0x38de6c(0x7d4)] = !![]), (_0x531b4d[_0x38de6c(0x8d0)] = ![]), log("You\x27ve\x20been\x20transferred"), pokeIframeAPI(_0x38de6c(0x7d4));
                                    !_0x531b4d[_0x38de6c(0x276)] && (_0x531b4d["queue"] = ![]);
                                    for (_0x124b2a in _0x531b4d[_0x38de6c(0x39e)]) {
                                        try {
                                            !_0x531b4d[_0x38de6c(0x4d2)][_0x38de6c(0x42d)](_0x531b4d[_0x38de6c(0x39e)][_0x124b2a][_0x38de6c(0x4f8)]) && (warnlog("transferred\x20and\x20closing"), _0x531b4d[_0x38de6c(0x812)](_0x124b2a));
                                        } catch (_0x5527b2) {}
                                    }
                                    for (_0x124b2a in _0x531b4d[_0x38de6c(0x8cd)]) {
                                        try {
                                            log(_0x38de6c(0x712)), _0x531b4d[_0x38de6c(0x790)](_0x124b2a);
                                        } catch (_0x25b8bb) {}
                                    }
                                    if (_0x531b4d["token"] || _0x531b4d["mainDirectorPassword"]) await checkToken();
                                    else
                                        _0x38de6c(0x276) in _0x1ad141
                                            ? ((_0x531b4d[_0x38de6c(0x82d)] = _0x1ad141[_0x38de6c(0x276)]),
                                              (_0x531b4d[_0x38de6c(0x284)] = ![]),
                                              (_0x531b4d[_0x38de6c(0x308)] = []),
                                              _0x531b4d[_0x38de6c(0x308)][_0x38de6c(0x874)](_0x531b4d[_0x38de6c(0x82d)]),
                                              _0x531b4d["newMainDirectorSetup"]())
                                            : ((_0x531b4d[_0x38de6c(0x82d)] = ![]), (_0x531b4d[_0x38de6c(0x284)] = ![]), (_0x531b4d[_0x38de6c(0x308)] = []));
                                    youveBeenTransferred(), (_0x531b4d[_0x38de6c(0x61b)] = _0x531b4d["totalRoomBitrate_default"]), updateMixer(), log(_0x38de6c(0x943)), log(_0x1ad141[_0x38de6c(0x9f0)]);
                                    for (var _0x124b2a in _0x1ad141[_0x38de6c(0x9f0)]) {
                                        if (_0x38de6c(0x49f) in _0x1ad141[_0x38de6c(0x9f0)][_0x124b2a]) {
                                            if (_0x38de6c(0x4f8) in _0x1ad141[_0x38de6c(0x9f0)][_0x124b2a]) {
                                                if (_0x1ad141[_0x38de6c(0x9f0)][_0x124b2a][_0x38de6c(0x49f)] in _0x531b4d["rpcs"]) log(_0x38de6c(0x429));
                                                else {
                                                    var _0x58e3cb = _0x531b4d["desaltStreamID"](_0x1ad141["list"][_0x124b2a][_0x38de6c(0x4f8)]);
                                                    log("STREAM\x20ID\x20desalted\x202:" + _0x58e3cb);
                                                    if (_0x531b4d[_0x38de6c(0x738)]) {
                                                        if (_0x531b4d[_0x38de6c(0x308)][_0x38de6c(0x438)](_0x1ad141[_0x38de6c(0x9f0)][_0x124b2a][_0x38de6c(0x49f)]) >= 0x0) play(_0x58e3cb, _0x1ad141[_0x38de6c(0x9f0)][_0x124b2a]["UUID"]);
                                                        else {
                                                            if (_0x531b4d[_0x38de6c(0x60d)] && _0x531b4d[_0x38de6c(0x60d)][_0x38de6c(0x42d)](_0x58e3cb)) play(_0x58e3cb, _0x1ad141[_0x38de6c(0x9f0)][_0x124b2a][_0x38de6c(0x49f)]);
                                                            else
                                                                _0x531b4d[_0x38de6c(0x27b)][_0x38de6c(0x1bf)] < 0x1388 &&
                                                                    !(_0x58e3cb in _0x531b4d[_0x38de6c(0x526)]) &&
                                                                    !_0x531b4d[_0x38de6c(0x27b)][_0x38de6c(0x42d)](_0x58e3cb) &&
                                                                    _0x531b4d[_0x38de6c(0x27b)][_0x38de6c(0x874)](_0x58e3cb);
                                                        }
                                                    } else play(_0x58e3cb, _0x1ad141[_0x38de6c(0x9f0)][_0x124b2a][_0x38de6c(0x49f)]);
                                                }
                                            }
                                        }
                                    }
                                    updateQueue();
                                } else {
                                    if (_0x1ad141[_0x38de6c(0x884)] == _0x38de6c(0x4e5)) {
                                        log(_0x1ad141);
                                        if (_0x531b4d[_0x38de6c(0x835)] || _0x531b4d[_0x38de6c(0x6ea)]) await checkToken();
                                        else
                                            _0x38de6c(0x276) in _0x1ad141
                                                ? ((_0x531b4d[_0x38de6c(0x82d)] = _0x1ad141[_0x38de6c(0x276)]),
                                                  (_0x531b4d[_0x38de6c(0x284)] = ![]),
                                                  (_0x531b4d[_0x38de6c(0x308)] = []),
                                                  _0x531b4d[_0x38de6c(0x308)][_0x38de6c(0x874)](_0x531b4d[_0x38de6c(0x82d)]),
                                                  _0x531b4d[_0x38de6c(0x74b)]())
                                                : ((_0x531b4d[_0x38de6c(0x82d)] = ![]), (_0x531b4d[_0x38de6c(0x308)] = []), errorlog(_0x38de6c(0x5d6)));
                                        updateUserList();
                                    } else {
                                        if (_0x1ad141[_0x38de6c(0x884)] == _0x38de6c(0x27d)) {
                                            log(_0x38de6c(0x418)), log(_0x1ad141);
                                            try {
                                                if (_0x531b4d[_0x38de6c(0x835)] || _0x531b4d[_0x38de6c(0x406)]) {
                                                } else _0x38de6c(0x276) in _0x1ad141 && _0x1ad141[_0x38de6c(0x276)] == !![] && _0x531b4d[_0x38de6c(0x237)](_0x1ad141);
                                            } catch (_0x51cefa) {
                                                errorlog(_0x51cefa);
                                            }
                                        } else {
                                            if (_0x1ad141["request"] == _0x38de6c(0x814)) {
                                                if (_0x531b4d[_0x38de6c(0x835)] || _0x531b4d[_0x38de6c(0x6ea)]) await checkToken();
                                                else
                                                    _0x1ad141[_0x38de6c(0x276)] &&
                                                        ((_0x531b4d[_0x38de6c(0x82d)] = _0x1ad141[_0x38de6c(0x49f)]),
                                                        (_0x531b4d["directorStreamID"] = ![]),
                                                        (_0x531b4d[_0x38de6c(0x308)] = []),
                                                        _0x531b4d[_0x38de6c(0x308)]["push"](_0x531b4d[_0x38de6c(0x82d)]),
                                                        _0x531b4d[_0x38de6c(0x74b)]());
                                                if (_0x38de6c(0x4f8) in _0x1ad141) {
                                                    log(_0x38de6c(0x4ea));
                                                    if (_0x531b4d[_0x38de6c(0x738)]) {
                                                        if (_0x531b4d[_0x38de6c(0x308)]["indexOf"](_0x1ad141["UUID"]) >= 0x0) play(_0x58e3cb, _0x1ad141[_0x38de6c(0x49f)]);
                                                        else {
                                                            if (_0x531b4d[_0x38de6c(0x60d)] && _0x531b4d[_0x38de6c(0x60d)][_0x38de6c(0x42d)](_0x58e3cb)) play(_0x58e3cb, _0x1ad141[_0x38de6c(0x49f)]);
                                                            else
                                                                _0x531b4d[_0x38de6c(0x27b)][_0x38de6c(0x1bf)] < 0x1388 &&
                                                                    !(_0x1ad141[_0x38de6c(0x4f8)] in _0x531b4d[_0x38de6c(0x526)]) &&
                                                                    !_0x531b4d[_0x38de6c(0x27b)][_0x38de6c(0x42d)](_0x1ad141[_0x38de6c(0x4f8)]) &&
                                                                    (_0x531b4d[_0x38de6c(0x27b)]["push"](_0x1ad141[_0x38de6c(0x4f8)]), updateQueue(!![]));
                                                        }
                                                    } else play(_0x1ad141[_0x38de6c(0x4f8)]);
                                                } else log(_0x38de6c(0x50b));
                                            } else {
                                                if (_0x1ad141[_0x38de6c(0x884)] == _0x38de6c(0x212)) {
                                                    log("Someone\x20published\x20a\x20video\x20to\x20the\x20Room"), log(_0x1ad141);
                                                    if (_0x531b4d[_0x38de6c(0x738)]) {
                                                        if (_0x531b4d["directorList"][_0x38de6c(0x438)](_0x1ad141[_0x38de6c(0x49f)]) >= 0x0) play(_0x58e3cb, _0x1ad141["UUID"]);
                                                        else {
                                                            if (_0x531b4d["view_set"] && _0x531b4d[_0x38de6c(0x60d)][_0x38de6c(0x42d)](_0x58e3cb)) play(_0x58e3cb, _0x1ad141[_0x38de6c(0x49f)]);
                                                            else
                                                                _0x531b4d[_0x38de6c(0x27b)]["length"] < 0x1388 &&
                                                                    !(_0x1ad141["streamID"] in _0x531b4d[_0x38de6c(0x526)]) &&
                                                                    !_0x531b4d["queueList"]["includes"](_0x1ad141[_0x38de6c(0x4f8)]) &&
                                                                    (_0x531b4d[_0x38de6c(0x27b)][_0x38de6c(0x874)](_0x1ad141[_0x38de6c(0x4f8)]), updateQueue(!![]));
                                                        }
                                                    } else play(_0x1ad141[_0x38de6c(0x4f8)]);
                                                } else {
                                                    if (_0x1ad141[_0x38de6c(0x884)] == _0x38de6c(0x5b3)) {
                                                        errorlog(_0x1ad141), pokeIframeAPI(_0x38de6c(0x5b3), _0x1ad141[_0x38de6c(0x3a4)]);
                                                        if (_0x531b4d["scene"] === ![]) {
                                                            if ("message" in _0x1ad141) {
                                                                if (_0x1ad141["message"] === "Stream\x20ID\x20is\x20already\x20in\x20use.")
                                                                    _0x531b4d[_0x38de6c(0x732)] < 0x2
                                                                        ? ((_0x531b4d["seedAttempts"] = parseInt(_0x531b4d["seedAttempts"]) + 0x1),
                                                                          setTimeout(function () {
                                                                              var _0x121aef = _0x38de6c;
                                                                              _0x531b4d[_0x121aef(0x29c)]();
                                                                          }, 0x1388))
                                                                        : (hangup(),
                                                                          !_0x531b4d[_0x38de6c(0x2d4)] &&
                                                                              setTimeout(function () {
                                                                                  var _0x44f617 = _0x38de6c;
                                                                                  warnUser(miscTranslations[_0x44f617(0x23f)], ![], ![]);
                                                                              }, 0x1));
                                                                else {
                                                                    if (_0x531b4d["token"] || _0x531b4d["mainDirectorPasswor"]) {
                                                                    } else
                                                                        _0x1ad141[_0x38de6c(0x3a4)] === _0x38de6c(0x894)
                                                                            ? (!_0x531b4d["cleanOutput"] &&
                                                                                  ((getById("head4")[_0x38de6c(0x5f5)] = miscTranslations[_0x38de6c(0x1a2)]),
                                                                                  _0x531b4d["directorPassword"]
                                                                                      ? _0x531b4d[_0x38de6c(0x9d7)] === null && warnUser(miscTranslations[_0x38de6c(0x74e)], ![], ![])
                                                                                      : setTimeout(function () {
                                                                                            var _0x2cc1fa = _0x38de6c;
                                                                                            warnUser(miscTranslations[_0x2cc1fa(0x93f)], ![], ![]);
                                                                                        }, 0x1)),
                                                                              (_0x531b4d[_0x38de6c(0x9d7)] = ![]),
                                                                              pokeAPI(_0x38de6c(0x276), ![]),
                                                                              pokeIframeAPI("director", ![]))
                                                                            : !_0x531b4d["cleanOutput"] &&
                                                                              setTimeout(function () {
                                                                                  var _0x4c8a3b = _0x38de6c;
                                                                                  warnUser(_0x1ad141[_0x4c8a3b(0x3a4)]);
                                                                              }, 0x1);
                                                                }
                                                            }
                                                        }
                                                    } else _0x1ad141[_0x38de6c(0x884)] == _0x38de6c(0x8e8) ? _0x38de6c(0x3a4) in _0x1ad141 && warnlog(_0x1ad141["message"]) : log(_0x1ad141);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (_0x1ad141[_0x38de6c(0x662)])
                            _0x38de6c(0x4f8) in _0x1ad141 &&
                                _0x1ad141[_0x38de6c(0x4f8)] in _0x531b4d[_0x38de6c(0x526)] &&
                                (clearTimeout(_0x531b4d[_0x38de6c(0x526)][_0x1ad141[_0x38de6c(0x4f8)]]), delete _0x531b4d[_0x38de6c(0x526)][_0x1ad141["streamID"]]),
                                _0x531b4d["processDescription"](_0x1ad141);
                        else {
                            if (_0x1ad141[_0x38de6c(0x6c8)]) log(_0x38de6c(0x34d)), _0x531b4d[_0x38de6c(0x37b)](_0x1ad141);
                            else {
                                if (_0x1ad141[_0x38de6c(0x9ff)]) log("GOT\x20ICES!!"), _0x531b4d["processIceBundle"](_0x1ad141);
                                else
                                    _0x1ad141[_0x38de6c(0x872)] || _0x1ad141["request"] == _0x38de6c(0x9f5)
                                        ? (warnlog(_0x38de6c(0x33f)),
                                          _0x1ad141["UUID"] in _0x531b4d[_0x38de6c(0x8cd)] && (warnlog(_0x38de6c(0x3fd)), log(_0x38de6c(0x712)), _0x531b4d[_0x38de6c(0x790)](_0x1ad141[_0x38de6c(0x49f)])),
                                          _0x1ad141[_0x38de6c(0x49f)] in _0x531b4d[_0x38de6c(0x39e)] && (warnlog(_0x38de6c(0x3fd)), _0x531b4d[_0x38de6c(0x812)](_0x1ad141[_0x38de6c(0x49f)])))
                                        : log(_0x38de6c(0x72c));
                            }
                        }
                    }
                }),
                (_0x531b4d["ws"]["onclose"] = async function (_0xcdb1aa) {
                    var _0x59b3eb = _0x98df2b;
                    clearTimeout(_0x531b4d[_0x59b3eb(0x7c5)]), pokeIframeAPI("hssConnection", _0x59b3eb(0x9e2)), pokeIframeAPI(_0x59b3eb(0x57d), "closed");
                    try {
                        _0x59b3eb(0x97b) in _0xcdb1aa && _0xcdb1aa[_0x59b3eb(0x97b)] == 0x1f7 && _0x4c374e == ![] && (clearInterval(_0x531b4d[_0x59b3eb(0x73f)]), !_0x531b4d[_0x59b3eb(0x2d4)] && warnUser(_0x59b3eb(0x408), 0x7530, ![]));
                    } catch (_0x864d6e) {
                        errorlog(_0x864d6e);
                    }
                    warnlog(_0x59b3eb(0x7f0));
                    if (_0x531b4d[_0x59b3eb(0x820)] == ![])
                        try {
                            _0x531b4d["ws"]["readyState"] === WebSocket[_0x59b3eb(0x5f4)] &&
                                ((_0x531b4d["ws"] = null),
                                setTimeout(() => {
                                    var _0x265fc9 = _0x59b3eb;
                                    try {
                                        _0x531b4d[_0x265fc9(0x8d6)](!![]);
                                    } catch (_0xd4d0d1) {}
                                }, 0x7d0));
                        } catch (_0x4776e1) {
                            errorlog(_0x4776e1);
                        }
                });
        }),
        (_0x531b4d[_0x4e3749(0x822)] = function (_0x3270d0, _0x32c903 = null) {
            var _0x3adad0 = _0x4e3749;
            log(_0x3adad0(0x1f1)), warnlog(_0x3270d0), (_0x3270d0 = JSON[_0x3adad0(0x30c)](_0x3270d0));
            if (_0x32c903 == null) {
                for (var _0xf124cc in _0x531b4d[_0x3adad0(0x8cd)]) {
                    try {
                        _0x531b4d[_0x3adad0(0x8cd)][_0xf124cc][_0x3adad0(0x528)][_0x3adad0(0x3e0)](_0x3270d0);
                    } catch (_0x2ed0ff) {
                        warnlog("RTC\x20Connection\x20seems\x20to\x20be\x20dead\x20or\x20not\x20yet\x20open?\x204");
                    }
                }
                return !![];
            } else
                try {
                    return _0x531b4d[_0x3adad0(0x8cd)][_0x32c903][_0x3adad0(0x528)][_0x3adad0(0x3e0)](_0x3270d0), !![];
                } catch (_0x5dc477) {
                    return warnlog(_0x3adad0(0x44c)), warnlog(_0x3270d0), ![];
                }
            return ![];
        }),
        (_0x531b4d[_0x4e3749(0x1a7)] = function (_0x5d5e00, _0x29abb7 = null) {
            var _0xabaf46 = _0x4e3749,
                _0x1c5087 = JSON["stringify"](_0x5d5e00);
            if (_0x29abb7 == null) {
                var _0x461e97 = [];
                for (var _0x1527d2 in _0x531b4d[_0xabaf46(0x39e)]) {
                    if (_0x531b4d[_0xabaf46(0x39e)][_0x1527d2][_0xabaf46(0x375)]) {
                        warnlog(_0x5d5e00);
                        continue;
                    }
                    try {
                        if (_0xabaf46(0x326) in _0x531b4d[_0xabaf46(0x39e)][_0x1527d2]) {
                            var _0x22829b = _0x5d5e00;
                            (_0x22829b[_0xabaf46(0xa32)] = !![]), (_0x22829b = JSON["stringify"](_0x22829b)), _0x531b4d[_0xabaf46(0x39e)][_0x531b4d["rpcs"][_0x1527d2][_0xabaf46(0x326)]]["receiveChannel"][_0xabaf46(0x3e0)](_0x22829b);
                        } else _0x531b4d["rpcs"][_0x1527d2][_0xabaf46(0x3dd)]["send"](_0x1c5087);
                        _0x461e97[_0xabaf46(0x874)](_0x1527d2);
                    } catch (_0x57b677) {
                        log(_0xabaf46(0x504));
                    }
                }
                return _0x461e97[_0xabaf46(0x1bf)];
            } else {
                if (_0x531b4d[_0xabaf46(0x39e)][_0x29abb7][_0xabaf46(0x375)]) {
                    warnlog(_0x5d5e00);
                    return;
                }
                try {
                    if (_0xabaf46(0x326) in _0x531b4d[_0xabaf46(0x39e)][_0x29abb7]) {
                        var _0x22829b = _0x5d5e00;
                        (_0x22829b[_0xabaf46(0xa32)] = !![]),
                            (_0x22829b = JSON[_0xabaf46(0x30c)](_0x22829b)),
                            _0x531b4d[_0xabaf46(0x39e)][_0x531b4d[_0xabaf46(0x39e)][_0x29abb7][_0xabaf46(0x326)]]["receiveChannel"][_0xabaf46(0x3e0)](_0x22829b);
                    } else _0x531b4d[_0xabaf46(0x39e)][_0x29abb7][_0xabaf46(0x3dd)][_0xabaf46(0x3e0)](_0x1c5087);
                    return !![];
                } catch (_0x4db274) {
                    return log(_0xabaf46(0x504)), ![];
                }
            }
        }),
        (_0x531b4d[_0x4e3749(0x2ce)] = function (_0x3e11a5 = ![], _0x3b316d = ![]) {
            var _0xe841e5 = _0x4e3749;
            try {
                window[_0xe841e5(0x5ee)](_0xe841e5(0x37e), confirmUnload);
            } catch (_0x423ddc) {}
            _0x3b316d && recordLocalVideo("estop");
            (_0x531b4d[_0xe841e5(0x3a1)] = !![]), warnlog(_0xe841e5(0x146));
            try {
                recordLocalVideo("stop");
            } catch (_0xa428d3) {}
            try {
                var _0x377f3a = {};
                (_0x377f3a[_0xe841e5(0x912)] = !![]), (_0x377f3a[_0xe841e5(0x872)] = !![]), _0x531b4d[_0xe841e5(0x822)](_0x377f3a);
            } catch (_0x5b21ce) {}
            try {
                _0x531b4d["ws"][_0xe841e5(0x36e)]();
            } catch (_0xe7b4c3) {}
            try {
                transferList[_0xe841e5(0x774)]((_0x4a9d02) => {
                    var _0xd822a = _0xe841e5;
                    _0x4a9d02["writer"] && _0x4a9d02[_0xd822a(0x3d6)]["close"](), _0x4a9d02[_0xd822a(0x2d5)] && _0x4a9d02["stopWriter"];
                });
            } catch (_0x2d0a17) {
                errorlog(_0x2d0a17);
            }
            try {
                _0x531b4d[_0xe841e5(0x416)] &&
                    _0x531b4d["canvasSource"][_0xe841e5(0x60a)] &&
                    _0x531b4d["canvasSource"][_0xe841e5(0x60a)][_0xe841e5(0xa41)]()["forEach"](function (_0x3595ac) {
                        var _0x2f6495 = _0xe841e5;
                        _0x531b4d[_0x2f6495(0x416)][_0x2f6495(0x60a)][_0x2f6495(0x7ff)](_0x3595ac), _0x3595ac[_0x2f6495(0x171)](), log(_0x2f6495(0x91f));
                    }),
                    _0x531b4d[_0xe841e5(0x6fa)] &&
                        _0x531b4d[_0xe841e5(0x6fa)][_0xe841e5(0x60a)] &&
                        _0x531b4d[_0xe841e5(0x6fa)][_0xe841e5(0x60a)][_0xe841e5(0xa41)]()[_0xe841e5(0x774)](function (_0x168000) {
                            var _0x18f1f4 = _0xe841e5;
                            _0x531b4d["videoElement"][_0x18f1f4(0x60a)]["removeTrack"](_0x168000), _0x168000[_0x18f1f4(0x171)](), log("stopping\x20old\x20track");
                        }),
                    _0x531b4d["streamSrc"] &&
                        _0x531b4d["streamSrc"]["getTracks"]()[_0xe841e5(0x774)](function (_0x1abd33) {
                            var _0x353460 = _0xe841e5;
                            _0x531b4d[_0x353460(0x8cc)][_0x353460(0x7ff)](_0x1abd33), _0x1abd33["stop"](), log(_0x353460(0x91f));
                        }),
                    _0x531b4d[_0xe841e5(0x21c)] &&
                        _0x531b4d["streamSrcClone"][_0xe841e5(0xa41)]()[_0xe841e5(0x774)](function (_0x1d8f60) {
                            var _0x41170b = _0xe841e5;
                            _0x531b4d[_0x41170b(0x21c)][_0x41170b(0x7ff)](_0x1d8f60), _0x1d8f60[_0x41170b(0x171)](), log(_0x41170b(0x91f));
                        }),
                    _0x531b4d[_0xe841e5(0x379)] &&
                        _0x531b4d["screenStream"][_0xe841e5(0xa41)]()["forEach"](function (_0x31186e) {
                            var _0x2a6b3a = _0xe841e5;
                            _0x531b4d["screenStream"][_0x2a6b3a(0x7ff)](_0x31186e), _0x31186e[_0x2a6b3a(0x171)](), log(_0x2a6b3a(0x91f));
                        });
            } catch (_0x412303) {
                errorlog(_0x412303);
            }
            try {
                for (i in _0x531b4d[_0xe841e5(0x39e)]) {
                    try {
                        _0x531b4d[_0xe841e5(0x39e)][i][_0xe841e5(0x6fa)] && _0x531b4d["rpcs"][i]["videoElement"][_0xe841e5(0x570)] && recordLocalVideo(_0xe841e5(0x171), null, _0x531b4d[_0xe841e5(0x39e)][i][_0xe841e5(0x6fa)]);
                    } catch (_0x443b67) {}
                    log(_0xe841e5(0x77a)), _0x531b4d[_0xe841e5(0x812)](i, !![]);
                }
                for (i in _0x531b4d[_0xe841e5(0x8cd)]) {
                    log("closing\x205"), _0x531b4d[_0xe841e5(0x790)](i);
                }
            } catch (_0x653809) {
                errorlog(_0x653809);
            }
            for (var _0x4ed664 in _0x531b4d[_0xe841e5(0x526)]) {
                clearTimeout(_0x531b4d["watchTimeoutList"][_0x4ed664]);
            }
            if (_0x3e11a5) {
                reloadRequested(), warnlog(_0xe841e5(0x622));
                return;
            } else
                setTimeout(function () {
                    for (i in _0x531b4d) {
                        try {
                            delete _0x531b4d[i];
                        } catch (_0x5ce4d0) {}
                    }
                    delete _0x531b4d;
                }, 0x4b0),
                    hangupComplete(),
                    log(_0xe841e5(0x1a3));
        }),
        (_0x531b4d[_0x4e3749(0x63f)] = function () {
            var _0x693323 = _0x4e3749;
            (_0x531b4d[_0x693323(0x3a1)] = !![]),
                (_0x531b4d[_0x693323(0x2cc)] = ![]),
                pokeIframeAPI(_0x693323(0x4af), _0x531b4d[_0x693323(0x2cc)], null, _0x531b4d[_0x693323(0x4f8)]),
                notifyOfScreenShare(),
                warnlog("hanging\x20up"),
                pokeIframeAPI("director-share", ![], ![], _0x531b4d[_0x693323(0x4f8)]),
                pokeIframeAPI("seeding", ![], ![], _0x531b4d["streamID"]),
                pokeAPI(_0x693323(0x4e6), ![]);
            try {
                _0x531b4d[_0x693323(0x6fa)] &&
                    _0x531b4d["videoElement"][_0x693323(0x60a)] &&
                    _0x531b4d[_0x693323(0x6fa)][_0x693323(0x60a)]["getTracks"]()["forEach"](function (_0x380018) {
                        var _0x30ddf2 = _0x693323;
                        _0x531b4d[_0x30ddf2(0x6fa)][_0x30ddf2(0x60a)]["removeTrack"](_0x380018), _0x380018[_0x30ddf2(0x171)](), log(_0x30ddf2(0x91f));
                    });
                _0x531b4d["streamSrc"] &&
                    (_0x531b4d[_0x693323(0x8cc)][_0x693323(0x753)]()["forEach"](function (_0xc42c73) {
                        var _0x229660 = _0x693323;
                        (_0x531b4d["videoDevice"] = _0xc42c73[_0x229660(0x931)]["toLowerCase"]()["replace"](/[\W]+/g, "_")),
                            _0x531b4d["streamSrc"][_0x229660(0x7ff)](_0xc42c73),
                            _0xc42c73[_0x229660(0x171)](),
                            log("stopping\x20old\x20track");
                    }),
                    (_0x531b4d[_0x693323(0x398)] = []),
                    _0x531b4d[_0x693323(0x8cc)]["getAudioTracks"]()[_0x693323(0x774)](function (_0x1579e0) {
                        var _0x1ef128 = _0x693323;
                        _0x531b4d[_0x1ef128(0x398)][_0x1ef128(0x874)](_0x1579e0[_0x1ef128(0x931)]["toLowerCase"]()[_0x1ef128(0x177)](/[\W]+/g, "_")),
                            _0x531b4d[_0x1ef128(0x8cc)][_0x1ef128(0x7ff)](_0x1579e0),
                            _0x1579e0[_0x1ef128(0x171)](),
                            log("stopping\x20old\x20track");
                    }),
                    !_0x531b4d["audioDevice"][_0x693323(0x1bf)] && (_0x531b4d[_0x693323(0x398)] = ![]));
                _0x531b4d[_0x693323(0x21c)] &&
                    _0x531b4d["streamSrcClone"][_0x693323(0xa41)]()["forEach"](function (_0xf135d7) {
                        var _0x46c080 = _0x693323;
                        _0x531b4d[_0x46c080(0x21c)][_0x46c080(0x7ff)](_0xf135d7), _0xf135d7[_0x46c080(0x171)]();
                    });
                for (UUID in _0x531b4d["pcs"]) {
                    var _0x5da054 = getSenders2(UUID);
                    _0x5da054[_0x693323(0x774)]((_0x332736) => {
                        var _0x583f91 = _0x693323;
                        _0x332736[_0x583f91(0x88b)] && (_0x332736[_0x583f91(0x88b)][_0x583f91(0x7e1)] = ![]);
                    });
                }
                try {
                    document[_0x693323(0x266)](_0x693323(0x86d)) &&
                        (!_0x531b4d["syncState"] && (_0x531b4d[_0x693323(0x9a6)] = {}),
                        _0x531b4d[_0x693323(0x4f8)] && (_0x531b4d[_0x693323(0x9a6)][_0x531b4d[_0x693323(0x4f8)]] = getDetailedState(_0x531b4d["streamID"])),
                        getById("container_director")[_0x693323(0x6e0)][_0x693323(0x1c5)](getById(_0x693323(0x86d))),
                        updateLockedElements());
                } catch (_0x2d283f) {
                    warnlog(_0x2d283f);
                }
                var _0x255f8f = {};
                (_0x255f8f["videoMuted"] = !![]), (_0x255f8f["virtualHangup"] = !![]), _0x531b4d[_0x693323(0x822)](_0x255f8f), getById(_0x693323(0x73c))[_0x693323(0x2c0)]();
            } catch (_0x26c199) {
                errorlog(_0x693323(0x183));
            }
            log("HANG\x20UP\x202\x20COMPLETE");
        }),
        (_0x531b4d[_0x4e3749(0x5ac)] = function (_0x430022, _0x412111 = ![]) {
            var _0x114302 = _0x4e3749;
            _0x531b4d[_0x114302(0x8cd)][_0x430022][_0x114302(0x5ac)]({ iceRestart: _0x412111 })
                ["then"]((_0x180f24) => {
                    var _0x58ffa3 = _0x114302;
                    log("create\x20offer\x20worked");
                    if (SafariVersion && SafariVersion <= 0xd && (iOS || iPad)) {
                    } else {
                        if (_0x531b4d["stereo"] == 0x3 || _0x531b4d["stereo"] == 0x5 || _0x531b4d[_0x58ffa3(0x228)] == 0x1)
                            (_0x180f24[_0x58ffa3(0x537)] = CodecsHandler[_0x58ffa3(0x392)](_0x180f24[_0x58ffa3(0x537)], { stereo: 0x1 })), log(_0x58ffa3(0x7fb));
                        else {
                            if (iOS || iPad) {
                            } else _0x531b4d[_0x58ffa3(0x228)] == 0x4 && ((_0x180f24[_0x58ffa3(0x537)] = CodecsHandler[_0x58ffa3(0x392)](_0x180f24["sdp"], { stereo: 0x2 })), log(_0x58ffa3(0x7fb)));
                        }
                    }
                    (iOS || iPad) &&
                        _0x531b4d[_0x58ffa3(0x3c6)] &&
                        _0x180f24[_0x58ffa3(0x537)][_0x58ffa3(0x42d)]("a=extmap:3\x20urn:3gpp:video-orientation\x0d\x0a") &&
                        (_0x180f24[_0x58ffa3(0x537)] = _0x180f24["sdp"][_0x58ffa3(0x177)]("a=extmap:3\x20urn:3gpp:video-orientation\x0d\x0a", ""));
                    if (_0x531b4d[_0x58ffa3(0x8cd)][_0x430022][_0x58ffa3(0x6a4)])
                        try {
                            (_0x180f24[_0x58ffa3(0x537)] = CodecsHandler[_0x58ffa3(0x5d8)](_0x180f24["sdp"], _0x531b4d[_0x58ffa3(0x8cd)][_0x430022][_0x58ffa3(0x6a4)])),
                                log(_0x58ffa3(0x7a3) + _0x531b4d[_0x58ffa3(0x8cd)][_0x430022][_0x58ffa3(0x6a4)] + _0x58ffa3(0x5af));
                        } catch (_0x2c5f14) {
                            errorlog(_0x2c5f14), warnlog(_0x58ffa3(0x8d2));
                        }
                    if (_0x531b4d[_0x58ffa3(0x8cd)][_0x430022]["preferAudioCodec"])
                        try {
                            if (_0x531b4d[_0x58ffa3(0x8cd)][_0x430022][_0x58ffa3(0x2af)] === _0x58ffa3(0x6d6)) _0x180f24[_0x58ffa3(0x537)] = CodecsHandler["modifyDescLyra"](_0x180f24[_0x58ffa3(0x537)]);
                            else {
                                if (_0x531b4d["pcs"][_0x430022][_0x58ffa3(0x2af)] === _0x58ffa3(0x300)) {
                                    if (_0x531b4d["audioInputChannels"] && _0x531b4d["audioInputChannels"] == 0x1)
                                        _0x180f24[_0x58ffa3(0x537)] = CodecsHandler[_0x58ffa3(0x6ca)](_0x180f24[_0x58ffa3(0x537)], _0x531b4d["micSampleRate"] || 0xbb80, ![]);
                                    else
                                        _0x531b4d[_0x58ffa3(0x228)]
                                            ? (_0x180f24["sdp"] = CodecsHandler[_0x58ffa3(0x6ca)](_0x180f24[_0x58ffa3(0x537)], _0x531b4d[_0x58ffa3(0x1d0)] || 0xbb80, !![]))
                                            : (_0x180f24[_0x58ffa3(0x537)] = CodecsHandler[_0x58ffa3(0x6ca)](_0x180f24[_0x58ffa3(0x537)], _0x531b4d[_0x58ffa3(0x1d0)] || 0xbb80, ![]));
                                } else _0x180f24[_0x58ffa3(0x537)] = CodecsHandler[_0x58ffa3(0x2af)](_0x180f24["sdp"], _0x531b4d[_0x58ffa3(0x8cd)][_0x430022][_0x58ffa3(0x2af)]);
                            }
                            log(_0x58ffa3(0x7a3) + _0x531b4d["pcs"][_0x430022][_0x58ffa3(0x2af)] + _0x58ffa3(0x858));
                        } catch (_0x1e9c2e) {
                            errorlog(_0x1e9c2e), warnlog(_0x58ffa3(0x7e5));
                        }
                    Android && _0x531b4d[_0x58ffa3(0x5a4)] !== ![] && _0x531b4d[_0x58ffa3(0x6dc)] && (_0x180f24["sdp"] = _0x180f24[_0x58ffa3(0x537)][_0x58ffa3(0x177)](/42e01f/gi, "42001f")),
                        _0x531b4d[_0x58ffa3(0x8cd)][_0x430022][_0x58ffa3(0x739)](_0x180f24)
                            [_0x58ffa3(0x741)](function () {
                                var _0xbaec6a = _0x58ffa3;
                                log(_0xbaec6a(0x483) + _0x430022), _0x531b4d[_0xbaec6a(0x572)](_0x430022);
                                var _0x137e25 = {};
                                (_0x137e25["UUID"] = _0x430022),
                                    (_0x137e25[_0xbaec6a(0x4f8)] = _0x531b4d[_0xbaec6a(0x4f8)]),
                                    (_0x137e25["description"] = _0x531b4d[_0xbaec6a(0x8cd)][_0x430022][_0xbaec6a(0x227)]),
                                    (_0x137e25[_0xbaec6a(0x6df)] = _0x531b4d[_0xbaec6a(0x8cd)][_0x430022][_0xbaec6a(0x6df)]);
                                _0x531b4d[_0xbaec6a(0xa2f)] && (_0x137e25[_0xbaec6a(0x958)] = _0x531b4d[_0xbaec6a(0x725)]);
                                if (_0x531b4d[_0xbaec6a(0x379)] !== ![]) {
                                    var _0x334bef = _0x531b4d["screenStream"]["getTracks"](),
                                        _0xa7c19f = _0x531b4d[_0xbaec6a(0x8cd)][_0x430022][_0xbaec6a(0x3a2)](),
                                        _0x269e34 = [];
                                    for (var _0x3fc42e = 0x0; _0x3fc42e < _0xa7c19f[_0xbaec6a(0x1bf)]; _0x3fc42e++) {
                                        for (var _0x5b8a8b = 0x0; _0x5b8a8b < _0x334bef[_0xbaec6a(0x1bf)]; _0x5b8a8b++) {
                                            _0xa7c19f[_0x3fc42e][_0xbaec6a(0x88b)] &&
                                                _0xa7c19f[_0x3fc42e][_0xbaec6a(0x88b)]["id"] == _0x334bef[_0x5b8a8b]["id"] &&
                                                _0xa7c19f[_0x3fc42e][_0xbaec6a(0x88b)][_0xbaec6a(0x722)] == _0x334bef[_0x5b8a8b]["kind"] &&
                                                _0x269e34["push"](_0x3fc42e);
                                        }
                                    }
                                    _0x269e34["length"] && (_0x137e25["screen"] = _0x269e34);
                                }
                                _0x531b4d["password"]
                                    ? _0x531b4d["encryptMessage"](JSON[_0xbaec6a(0x30c)](_0x137e25[_0xbaec6a(0x662)]))
                                          [_0xbaec6a(0x741)](function (_0x4bbf9f) {
                                              var _0x566b8e = _0xbaec6a;
                                              (_0x137e25["description"] = _0x4bbf9f[0x0]), (_0x137e25[_0x566b8e(0x190)] = _0x4bbf9f[0x1]), _0x531b4d[_0x566b8e(0x9ba)](_0x137e25);
                                          })
                                          [_0xbaec6a(0x524)](errorlog)
                                    : _0x531b4d[_0xbaec6a(0x9ba)](_0x137e25);
                            })
                            [_0x58ffa3(0x524)](errorlog);
                })
                [_0x114302(0x524)](errorlog);
        }),
        (_0x531b4d[_0x4e3749(0x58c)] = function () {
            var _0x281b19 = _0x4e3749;
            for (var _0x299fd0 in _0x531b4d[_0x281b19(0x8cd)]) {
                _0x531b4d["pcs"][_0x299fd0][_0x281b19(0x725)] !== ![] ? (_0x531b4d[_0x281b19(0x977)](_0x299fd0), log(_0x281b19(0x16f))) : log(_0x281b19(0x1e8));
            }
        }),
        (_0x531b4d[_0x4e3749(0x790)] = function (_0x2d6a69, _0x1331ff = !![]) {
            var _0x5c395d = _0x4e3749;
            log("closePC");
            if (!(_0x2d6a69 in _0x531b4d["pcs"])) return;
            clearTimeout(_0x531b4d["pcs"][_0x2d6a69][_0x5c395d(0x891)]),
                clearTimeout(_0x531b4d[_0x5c395d(0x8cd)][_0x2d6a69][_0x5c395d(0x63e)]),
                clearInterval(_0x531b4d["pcs"][_0x2d6a69]["requestedStatsInterval"]),
                pokeIframeAPI(_0x5c395d(0x587), ![], _0x2d6a69);
            if (_0x5c395d(0x326) in _0x531b4d[_0x5c395d(0x8cd)][_0x2d6a69]) {
                delete _0x531b4d[_0x5c395d(0x8cd)][_0x2d6a69], applySceneState();
                return;
            }
            _0x2d6a69 + "_screen" in _0x531b4d["pcs"] &&
                _0x531b4d[_0x5c395d(0x8cd)][_0x2d6a69 + _0x5c395d(0x47d)][_0x5c395d(0x326)] &&
                _0x531b4d[_0x5c395d(0x8cd)][_0x2d6a69 + _0x5c395d(0x47d)][_0x5c395d(0x326)] === _0x2d6a69 &&
                (clearTimeout(_0x531b4d[_0x5c395d(0x8cd)][_0x2d6a69 + _0x5c395d(0x47d)][_0x5c395d(0x891)]),
                clearTimeout(_0x531b4d[_0x5c395d(0x8cd)][_0x2d6a69 + "_screen"][_0x5c395d(0x63e)]),
                clearInterval(_0x531b4d["pcs"][_0x2d6a69 + "_screen"]["requestedStatsInterval"]),
                (_0x531b4d["pcs"][_0x2d6a69 + "_screen"] = null),
                delete _0x531b4d[_0x5c395d(0x8cd)][_0x2d6a69 + "_screen"]);
            try {
                _0x531b4d[_0x5c395d(0x822)]({ bye: !![] }, _0x2d6a69);
            } catch (_0x5e7845) {}
            try {
                _0x531b4d[_0x5c395d(0x8cd)][_0x2d6a69][_0x5c395d(0x36e)]();
            } catch (_0x140f03) {}
            _0x531b4d["pcs"][_0x2d6a69][_0x5c395d(0x599)] && _0x531b4d[_0x5c395d(0x4f2)] && _0x1331ff && (warnlog(_0x5c395d(0x3ea)), playtone(![], "leavetone")),
                (_0x531b4d["pcs"][_0x2d6a69] = null),
                _0x531b4d[_0x5c395d(0x820)] &&
                    !_0x531b4d[_0x5c395d(0x2d4)] &&
                    setTimeout(function _0x2e256d() {
                        var _0x5e2473 = _0x5c395d;
                        warnUser(_0x5e2473(0x7b3));
                    }, 0x1),
                delete _0x531b4d[_0x5c395d(0x8cd)][_0x2d6a69],
                _0x531b4d[_0x5c395d(0x944)](),
                applySceneState();
        }),
        (_0x531b4d[_0x4e3749(0x812)] = function (_0x4d96c4, _0x3369ef = ![]) {
            var _0x25bc33 = _0x4e3749;
            if (!(_0x4d96c4 in _0x531b4d[_0x25bc33(0x39e)])) {
                log("UUID\x20not\x20found;\x20cant\x27\x20close");
                return;
            }
            warnlog(_0x25bc33(0x812)), clearInterval(_0x531b4d[_0x25bc33(0x39e)][_0x4d96c4][_0x25bc33(0x63e)]);
            try {
                _0x531b4d[_0x25bc33(0x1a7)]({ bye: !![] }, _0x4d96c4), warnlog("SEND\x20BYE");
            } catch (_0x187997) {}
            try {
                var _0x2e6398 = _0x531b4d["rpcs"][_0x4d96c4][_0x25bc33(0x4f8)];
            } catch (_0x2c142b) {}
            try {
                _0x531b4d[_0x25bc33(0x39e)][_0x4d96c4][_0x25bc33(0x36e)]();
            } catch (_0x226889) {
                warnlog(_0x25bc33(0x221));
            }
            try {
                _0x531b4d[_0x25bc33(0x39e)][_0x4d96c4]["streamSrc"] &&
                    _0x531b4d[_0x25bc33(0x39e)][_0x4d96c4][_0x25bc33(0x8cc)][_0x25bc33(0xa41)]()["forEach"](function (_0x10b9ce) {
                        var _0x4bcc92 = _0x25bc33;
                        _0x10b9ce[_0x4bcc92(0x171)](), log(_0x4bcc92(0x800));
                    });
            } catch (_0x445e24) {}
            if (_0x531b4d["director"])
                try {
                    _0x531b4d["rpcs"][_0x4d96c4][_0x25bc33(0x6fa)] && "recorder" in _0x531b4d[_0x25bc33(0x39e)][_0x4d96c4][_0x25bc33(0x6fa)] && _0x531b4d[_0x25bc33(0x39e)][_0x4d96c4][_0x25bc33(0x6fa)][_0x25bc33(0x5ca)][_0x25bc33(0x171)]();
                } catch (_0x40b2fd) {
                    warnlog(_0x40b2fd);
                }
            else !_0x531b4d["roomid"] && _0x531b4d[_0x25bc33(0x4f2)] && playtone(![], _0x25bc33(0x5e7));
            try {
                document[_0x25bc33(0x266)](_0x25bc33(0x661) + _0x4d96c4) &&
                    (!_0x531b4d[_0x25bc33(0x9a6)] && (_0x531b4d[_0x25bc33(0x9a6)] = {}),
                    _0x2e6398 && (_0x531b4d[_0x25bc33(0x9a6)][_0x2e6398] = getDetailedState(_0x2e6398)),
                    getById(_0x25bc33(0x661) + _0x4d96c4)[_0x25bc33(0x6e0)]["removeChild"](getById(_0x25bc33(0x661) + _0x4d96c4)),
                    updateLockedElements());
            } catch (_0x1693ac) {
                warnlog(_0x1693ac);
            }
            try {
                _0x531b4d[_0x25bc33(0x39e)][_0x4d96c4][_0x25bc33(0x6fa)] && _0x531b4d[_0x25bc33(0x39e)][_0x4d96c4][_0x25bc33(0x6fa)][_0x25bc33(0x2c0)]();
            } catch (_0x56a54a) {}
            try {
                if (_0x531b4d[_0x25bc33(0x6e8)] !== ![]) {
                    if (_0x531b4d["rpcs"][_0x4d96c4][_0x25bc33(0x559)]) {
                        try {
                            _0x531b4d[_0x25bc33(0x39e)][_0x4d96c4][_0x25bc33(0x559)][_0x25bc33(0x2c0)]();
                        } catch (_0x48dc2f) {
                            errorlog(_0x48dc2f);
                        }
                        _0x531b4d["rpcs"][_0x4d96c4]["iframeEle"]["remove"]();
                    }
                }
            } catch (_0x32ad97) {}
            try {
                _0x531b4d["rpcs"][_0x4d96c4][_0x25bc33(0x2a8)] && _0x531b4d[_0x25bc33(0x39e)][_0x4d96c4]["canvas"][_0x25bc33(0x2c0)]();
            } catch (_0x3b5332) {}
            try {
                _0x531b4d[_0x25bc33(0x39e)][_0x4d96c4]["imageElement"] && _0x531b4d[_0x25bc33(0x39e)][_0x4d96c4][_0x25bc33(0x976)]["remove"]();
            } catch (_0x1533de) {}
            _0x25bc33(0x73d) in _0x531b4d[_0x25bc33(0x39e)][_0x4d96c4] && clearInterval(_0x531b4d[_0x25bc33(0x39e)][_0x4d96c4][_0x25bc33(0x73d)]);
            pokeIframeAPI(_0x25bc33(0x8df), ![], _0x4d96c4), pokeAPI(_0x25bc33(0x7f6), _0x531b4d[_0x25bc33(0x39e)][_0x4d96c4][_0x25bc33(0x4f8)]);
            _0x531b4d[_0x25bc33(0x39e)][_0x4d96c4]["whip"] && (_0x2e6398 = ![]);
            try {
                (_0x531b4d[_0x25bc33(0x39e)][_0x4d96c4] = null), delete _0x531b4d[_0x25bc33(0x39e)][_0x4d96c4];
            } catch (_0x475bf8) {}
            try {
                _0x531b4d["closeRPC"](_0x4d96c4 + _0x25bc33(0x47d));
            } catch (_0xd82485) {}
            (!_0x531b4d["director"] || _0x531b4d[_0x25bc33(0x293)]) &&
                setTimeout(function () {
                    updateMixer();
                }, 0x1);
            if (typeof _0x2e6398 == "undefined") return;
            try {
                warnlog("Should\x20we\x20ask\x20to\x20play\x20the\x20stream\x20Again?"),
                    _0x2e6398 &&
                        (_0x2e6398 in _0x531b4d[_0x25bc33(0x526)] && (log(_0x25bc33(0x81b) + _0x2e6398), clearTimeout(_0x531b4d[_0x25bc33(0x526)][_0x2e6398]), delete _0x531b4d["watchTimeoutList"][_0x2e6398]),
                        (_0x531b4d["watchTimeoutList"][_0x2e6398] = setTimeout(
                            function (_0x167f69) {
                                var _0x5965ef = _0x25bc33;
                                try {
                                    delete _0x531b4d["watchTimeoutList"][_0x167f69];
                                } catch (_0x5d36ba) {
                                    warnlog(_0x5965ef(0x801));
                                    return;
                                }
                                log(_0x5965ef(0x828) + _0x167f69);
                                try {
                                    for (var _0x43e28a in _0x531b4d["rpcs"]) {
                                        if (_0x531b4d[_0x5965ef(0x39e)][_0x43e28a]["streamID"] === _0x167f69) {
                                            if (_0x531b4d[_0x5965ef(0x39e)][_0x43e28a][_0x5965ef(0x53a)] === _0x5965ef(0x4cf)) {
                                                warnlog(_0x5965ef(0x59e));
                                                return;
                                            }
                                        }
                                    }
                                } catch (_0x2e5042) {
                                    errorlog(_0x2e5042);
                                }
                                warnlog(_0x5965ef(0x624)), _0x531b4d[_0x5965ef(0x827)](_0x167f69);
                            },
                            _0x531b4d[_0x25bc33(0x886)],
                            _0x2e6398
                        )));
            } catch (_0x5974a8) {
                errorlog(_0x5974a8);
            }
            pokeIframeAPI(_0x25bc33(0x569), ![], _0x4d96c4), _0x2e6398 !== null ? pokeIframeAPI(_0x25bc33(0x751), _0x2e6398, _0x4d96c4) : pokeIframeAPI(_0x25bc33(0x751), !![], _0x4d96c4), updateUserList();
        }),
        (_0x531b4d[_0x4e3749(0x378)] = null),
        (_0x531b4d[_0x4e3749(0x75d)] = function () {
            var _0x2056fd = _0x4e3749;
            if (_0x531b4d["view"]) {
                if (_0x531b4d["ws"] === null || typeof _0x531b4d["ws"] !== _0x2056fd(0x74a) || _0x531b4d["ws"][_0x2056fd(0x6f8)] !== 0x1) {
                } else {
                    var _0x12e481 = _0x531b4d["view"][_0x2056fd(0x22a)](",");
                    for (var _0x323d69 in _0x12e481) {
                        if (_0x12e481[_0x323d69]) {
                            var _0xaf9335 = ![];
                            for (var _0x657201 in _0x531b4d[_0x2056fd(0x39e)]) {
                                if (_0x531b4d[_0x2056fd(0x39e)][_0x657201]["streamID"] && _0x531b4d[_0x2056fd(0x39e)][_0x657201][_0x2056fd(0x4f8)] === _0x12e481[_0x323d69]) {
                                    _0xaf9335 = !![];
                                    break;
                                }
                            }
                            _0x12e481[_0x323d69] in _0x531b4d[_0x2056fd(0x526)] && (_0xaf9335 = !![]);
                            if (_0xaf9335) continue;
                            _0x531b4d[_0x2056fd(0x827)](_0x12e481[_0x323d69]);
                        }
                    }
                }
                _0x531b4d["forceRetry"] && _0x531b4d["forceRetry"] < 0xa && (_0x531b4d[_0x2056fd(0x737)] = 0xa),
                    _0x531b4d[_0x2056fd(0x737)] &&
                        (clearTimeout(_0x531b4d[_0x2056fd(0x378)]),
                        (_0x531b4d[_0x2056fd(0x378)] = setTimeout(function () {
                            var _0x216df7 = _0x2056fd;
                            log(_0x216df7(0x3ad)), _0x531b4d[_0x216df7(0x75d)]();
                        }, _0x531b4d[_0x2056fd(0x737)] * 0x3e8)));
            }
        }),
        (_0x531b4d["offerSDP"] = async function (_0x1e2455) {
            var _0x232ebe = _0x4e3749;
            if (_0x1e2455 in _0x531b4d[_0x232ebe(0x8cd)]) {
                if (_0x531b4d["pcs"][_0x1e2455][_0x232ebe(0x53a)] === _0x232ebe(0x2d2) || _0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x53a)] === _0x232ebe(0x9e2))
                    log("closing\x206"), _0x531b4d[_0x232ebe(0x790)](_0x1e2455), warnlog("cleaning\x20up\x20lost\x20connection");
                else {
                    if (iPad || iOS) log(_0x232ebe(0x8b4)), _0x531b4d["closePC"](_0x1e2455), warnlog(_0x232ebe(0x658));
                    else {
                        warnlog("The\x20other\x20end\x20is\x20just\x20being\x20a\x20keener.\x20Ignore\x20it:\x20" + _0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x53a)]);
                        return;
                    }
                }
            } else log("Create\x20a\x20new\x20RTC\x20connection;\x20offering\x20SDP\x20on\x20request");
            if (_0x531b4d[_0x232ebe(0x81c)] !== ![]) {
                if (Object[_0x232ebe(0x440)](_0x531b4d[_0x232ebe(0x8cd)])[_0x232ebe(0x1bf)] > _0x531b4d[_0x232ebe(0x81c)]) {
                    log(_0x232ebe(0x6c0)), log(_0x232ebe(0x597)), _0x531b4d[_0x232ebe(0x790)](_0x1e2455);
                    return;
                }
            } else {
                if (_0x531b4d[_0x232ebe(0x4f0)] !== ![]) {
                    if (Object[_0x232ebe(0x440)](_0x531b4d[_0x232ebe(0x39e)])[_0x232ebe(0x1bf)] + Object[_0x232ebe(0x440)](_0x531b4d[_0x232ebe(0x8cd)])[_0x232ebe(0x1bf)] > _0x531b4d[_0x232ebe(0x4f0)]) {
                        log(_0x232ebe(0x9b8)), log(_0x232ebe(0x761)), _0x531b4d["closePC"](_0x1e2455);
                        return;
                    }
                }
            }
            !_0x531b4d["configuration"] && (await chooseBestTURN());
            _0x531b4d[_0x232ebe(0x519)] && (_0x531b4d["configuration"][_0x232ebe(0x519)] = !![]);
            _0x531b4d[_0x232ebe(0x896)] && (_0x531b4d[_0x232ebe(0x5f8)][_0x232ebe(0x8c8)] = _0x531b4d["bundlePolicy"]);
            try {
                _0x531b4d[_0x232ebe(0x8cd)][_0x1e2455] = new RTCPeerConnection(_0x531b4d["configuration"]);
            } catch (_0x52e84d) {
                !_0x531b4d[_0x232ebe(0x2d4)] && warnUser(_0x232ebe(0x667));
                console[_0x232ebe(0xa08)](_0x52e84d);
                return;
            }
            if (_0x531b4d[_0x232ebe(0x820)]) {
                if (Object[_0x232ebe(0x440)](_0x531b4d[_0x232ebe(0x8cd)])[_0x232ebe(0x1bf)] > 0x1) {
                    log(_0x232ebe(0xa36)), log("closing\x2010"), _0x531b4d[_0x232ebe(0x790)](_0x1e2455);
                    return;
                }
            }
            (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x21d)] = {}),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x6df)] = _0x531b4d["loadoutID"] + _0x531b4d[_0x232ebe(0x750)](0x5)),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x4a4)] = null),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455]["sceneMute"] = null),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455]["obsState"] = {}),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x4fb)][_0x232ebe(0x420)] = null),
                (_0x531b4d["pcs"][_0x1e2455][_0x232ebe(0x4fb)][_0x232ebe(0x900)] = null),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x4fb)]["streaming"] = null),
                (_0x531b4d["pcs"][_0x1e2455][_0x232ebe(0x4fb)][_0x232ebe(0x570)] = null),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x4fb)]["virtualcam"] = null),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x42f)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455]["savedBitrate"] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x85e)] = null),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x291)] = null),
                (_0x531b4d["pcs"][_0x1e2455][_0x232ebe(0x9ae)] = null),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x79c)] = null),
                (_0x531b4d["pcs"][_0x1e2455][_0x232ebe(0x8f0)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455]["bitrateTimeoutFirefox"] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455]["coDirector"] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x8ca)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x939)] = ![]),
                (_0x531b4d["pcs"][_0x1e2455][_0x232ebe(0x599)] = ![]),
                (_0x531b4d["pcs"][_0x1e2455][_0x232ebe(0x1f4)] = ![]),
                (_0x531b4d["pcs"][_0x1e2455][_0x232ebe(0x986)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x3dc)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x71d)] = null),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x6f7)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x993)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455]["allowAudio"] = ![]),
                (_0x531b4d["pcs"][_0x1e2455][_0x232ebe(0x9e0)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455]["allowWidget"] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x1c7)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x15a)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x77f)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455]["allowMIDI"] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x9d2)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x1ba)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x389)] = null),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x49f)] = _0x1e2455),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455]["scale"] = ![]),
                (_0x531b4d["pcs"][_0x1e2455][_0x232ebe(0x5f9)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x9be)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x3f6)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x241)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455]["cover"] = ![]),
                (_0x531b4d["pcs"][_0x1e2455]["scaleResolution"] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x925)] = null),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x725)] = ![]),
                (_0x531b4d["pcs"][_0x1e2455]["keyframeRate"] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x64e)] = null),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x931)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x885)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455]["preferVideoCodec"] = ![]),
                (_0x531b4d["pcs"][_0x1e2455][_0x232ebe(0x2af)] = ![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x63e)] = null),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x7a9)] = _0x531b4d["wssid"]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x6f9)] = Date[_0x232ebe(0x312)]());
            function _0x221be3(_0x3551e6 = ![]) {
                var _0x341598 = _0x232ebe;
                if (_0x3551e6) return;
                (_0x531b4d[_0x341598(0x8cd)][_0x1e2455][_0x341598(0x528)] = _0x531b4d["pcs"][_0x1e2455][_0x341598(0x50a)]("sendChannel")),
                    (_0x531b4d["pcs"][_0x1e2455][_0x341598(0x528)]["UUID"] = _0x1e2455),
                    (_0x531b4d[_0x341598(0x8cd)][_0x1e2455][_0x341598(0x528)][_0x341598(0x2d6)] = () => {
                        var _0x145796 = _0x341598;
                        if (_0x3551e6) return;
                        log("send\x20channel\x20open\x20pcs"),
                            (msg = {}),
                            (msg["info"] = {}),
                            (msg[_0x145796(0x915)][_0x145796(0x931)] = _0x531b4d[_0x145796(0x931)]),
                            (msg[_0x145796(0x915)][_0x145796(0x885)] = _0x531b4d[_0x145796(0x885)]),
                            (msg[_0x145796(0x915)][_0x145796(0x7d5)] = _0x531b4d[_0x145796(0x7d5)]);
                        try {
                            (_0x531b4d[_0x145796(0x8b3)][_0x145796(0x1bf)] || _0x531b4d[_0x145796(0x5b8)]) && (msg[_0x145796(0x915)][_0x145796(0x4ca)] = _0x531b4d["group"]["join"](","));
                        } catch (_0x42da7c) {}
                        (msg[_0x145796(0x915)][_0x145796(0x174)] = _0x531b4d["directorSpeakerMuted"]),
                            (msg[_0x145796(0x915)][_0x145796(0x984)] = _0x531b4d[_0x145796(0x984)]),
                            (msg[_0x145796(0x915)]["directorVideoMuted"] = _0x531b4d[_0x145796(0x3c3)]),
                            (msg[_0x145796(0x915)][_0x145796(0x883)] = _0x531b4d["videoMuted"]);
                        _0x531b4d["roomid"] ? (msg[_0x145796(0x915)][_0x145796(0x51d)] = !![]) : (msg[_0x145796(0x915)][_0x145796(0x51d)] = ![]);
                        if (_0x531b4d[_0x145796(0x276)]) {
                            if (!_0x531b4d[_0x145796(0x6ea)] && _0x531b4d[_0x145796(0x82d)] && _0x531b4d["directorUUID"] === _0x1e2455) _0x531b4d[_0x145796(0x74b)]();
                            else {
                                msg[_0x145796(0x81e)] = {};
                                _0x531b4d["mainDirectorPassword"] && (msg[_0x145796(0x81e)][_0x145796(0x71f)] = !![]);
                                msg[_0x145796(0x81e)][_0x145796(0x61b)] = _0x531b4d["totalRoomBitrate"];
                                _0x531b4d[_0x145796(0x702)]["length"] && !_0x531b4d[_0x145796(0x702)][_0x145796(0x42d)](_0x1e2455) && (msg[_0x145796(0x915)][_0x145796(0x7d5)] = !![]);
                                var _0x59ace6 = [];
                                for (var _0x4c61e1 in _0x531b4d[_0x145796(0x8cd)]) {
                                    _0x531b4d["pcs"][_0x4c61e1][_0x145796(0x803)] === !![] && _0x59ace6[_0x145796(0x874)](_0x4c61e1);
                                }
                                _0x531b4d["directorBlindAllGuests"] && (msg[_0x145796(0x81e)][_0x145796(0x31c)] = !![]), _0x59ace6[_0x145796(0x1bf)] && (msg[_0x145796(0x81e)][_0x145796(0x297)] = _0x59ace6);
                            }
                            _0x531b4d["autoSyncObject"] && (msg[_0x145796(0x915)][_0x145796(0x4b5)] = _0x531b4d[_0x145796(0x44a)]);
                        }
                        _0x531b4d[_0x145796(0x6e8)] !== ![] ? (msg[_0x145796(0x915)]["broadcast_mode"] = !![]) : (msg[_0x145796(0x915)][_0x145796(0x727)] = ![]);
                        _0x531b4d[_0x145796(0x9af)] ? (msg[_0x145796(0x915)]["remote"] = !![]) : (msg["info"]["remote"] = ![]);
                        if (_0x531b4d[_0x145796(0x4d0)]) msg[_0x145796(0x915)][_0x145796(0x974)] = _0x531b4d[_0x145796(0x4d0)];
                        else {
                            if (_0x531b4d["obsControls"] === ![]) msg[_0x145796(0x915)][_0x145796(0x974)] = ![];
                            else _0x531b4d["roomid"] && !_0x531b4d[_0x145796(0x276)] ? (msg[_0x145796(0x915)]["obs_control"] = ![]) : (msg["info"][_0x145796(0x974)] = null);
                        }
                        _0x531b4d[_0x145796(0x275)] && (msg[_0x145796(0x915)][_0x145796(0x275)] = !![]);
                        msg[_0x145796(0x915)][_0x145796(0x18d)] = _0x531b4d[_0x145796(0xa07)];
                        _0x531b4d[_0x145796(0x69c)] ? (msg[_0x145796(0x2cc)] = _0x531b4d["screenShareState"]) : (msg[_0x145796(0x2cc)] = ![]);
                        (msg["info"][_0x145796(0x409)] = _0x531b4d[_0x145796(0x3c1)]), (msg[_0x145796(0x915)]["height_url"] = _0x531b4d[_0x145796(0x63d)]);
                        try {
                            if (_0x531b4d[_0x145796(0x8cc)]) {
                                let _0x42484e = _0x531b4d[_0x145796(0x8cc)][_0x145796(0x753)]();
                                if (_0x42484e[_0x145796(0x1bf)]) {
                                    let _0x2cf81e = _0x42484e[0x0][_0x145796(0x617)]();
                                    (msg[_0x145796(0x915)][_0x145796(0x51b)] = _0x2cf81e["width"] || ![]),
                                        (msg["info"][_0x145796(0x165)] = _0x2cf81e[_0x145796(0x63d)] || ![]),
                                        (msg[_0x145796(0x915)][_0x145796(0x48d)] = parseInt(_0x2cf81e[_0x145796(0x456)]) || ![]);
                                }
                            }
                            if (_0x531b4d[_0x145796(0x379)] && _0x531b4d[_0x145796(0x379)][_0x145796(0x60a)]) {
                                let _0x19ec43 = _0x531b4d[_0x145796(0x379)]["srcObject"][_0x145796(0x753)]();
                                if (_0x19ec43["length"]) {
                                    let _0x33dfec = _0x19ec43[0x0]["getSettings"]();
                                    (msg["info"][_0x145796(0x961)] = _0x33dfec[_0x145796(0x3c1)] || ![]),
                                        (msg[_0x145796(0x915)][_0x145796(0x65f)] = _0x33dfec["height"] || ![]),
                                        (msg["info"][_0x145796(0x9a7)] = parseInt(_0x33dfec["frameRate"]) || ![]);
                                }
                            }
                        } catch (_0x1bc370) {
                            errorlog(_0x1bc370);
                        }
                        (msg[_0x145796(0x915)]["quality_url"] = _0x531b4d["quality"]),
                            (msg[_0x145796(0x915)][_0x145796(0x47a)] = _0x531b4d[_0x145796(0x7a0)]),
                            (msg[_0x145796(0x915)][_0x145796(0x784)] = _0x531b4d[_0x145796(0x81c)]),
                            (msg[_0x145796(0x915)][_0x145796(0x609)] = _0x531b4d[_0x145796(0x228)]),
                            (msg[_0x145796(0x915)][_0x145796(0x51c)] = _0x531b4d[_0x145796(0x580)]),
                            (msg[_0x145796(0x915)][_0x145796(0x78e)] = _0x531b4d[_0x145796(0x90e)]),
                            (msg[_0x145796(0x915)][_0x145796(0x42b)] = _0x531b4d[_0x145796(0x3b2)]),
                            (msg["info"][_0x145796(0x807)] = _0x531b4d[_0x145796(0x807)]),
                            (msg[_0x145796(0x915)]["recording_audio_gain"] = _0x531b4d[_0x145796(0x3b9)]),
                            (msg[_0x145796(0x915)][_0x145796(0x842)] = _0x531b4d[_0x145796(0x47f)]),
                            (msg[_0x145796(0x915)][_0x145796(0xa27)] = _0x531b4d[_0x145796(0x3ce)]),
                            (msg["info"]["recording_audio_ctx_latency"] = _0x531b4d[_0x145796(0x2f7)]),
                            (msg[_0x145796(0x915)][_0x145796(0x34a)] = !_0x531b4d[_0x145796(0x68f)]),
                            (msg[_0x145796(0x915)][_0x145796(0x735)] = _0x531b4d[_0x145796(0x175)]),
                            (msg["info"][_0x145796(0x8ed)] = _0x531b4d[_0x145796(0x4f6)]),
                            (msg["info"][_0x145796(0x50c)] = _0x531b4d[_0x145796(0x8cb)]);
                        _0x531b4d[_0x145796(0x21d)][_0x145796(0x5ae)] && (msg[_0x145796(0x915)][_0x145796(0x69d)] = _0x531b4d[_0x145796(0x21d)][_0x145796(0x5ae)]);
                        _0x531b4d["forceRotate"] !== ![]
                            ? _0x531b4d[_0x145796(0x42e)]
                                ? (msg[_0x145796(0x915)][_0x145796(0x8e6)] = _0x531b4d[_0x145796(0x2b1)] + parseInt(_0x531b4d[_0x145796(0x42e)]))
                                : (msg[_0x145796(0x915)][_0x145796(0x8e6)] = _0x531b4d["forceRotate"])
                            : (msg["info"][_0x145796(0x8e6)] = _0x531b4d[_0x145796(0x42e)]);
                        msg[_0x145796(0x915)][_0x145796(0x8e6)] && msg[_0x145796(0x915)][_0x145796(0x8e6)] >= 0x168 && (msg[_0x145796(0x915)][_0x145796(0x8e6)] -= 0x168);
                        try {
                            navigator && navigator[_0x145796(0x1dc)] && (msg[_0x145796(0x915)][_0x145796(0x401)] = navigator[_0x145796(0x1dc)]);
                            navigator && navigator[_0x145796(0x616)] && (msg[_0x145796(0x915)][_0x145796(0x616)] = navigator["platform"]);
                            gpgpuSupport && (msg[_0x145796(0x915)]["gpGPU"] = gpgpuSupport);
                            cpuSupport && (msg[_0x145796(0x915)][_0x145796(0x222)] = cpuSupport);
                            if (SafariVersion) msg[_0x145796(0x915)][_0x145796(0x6e3)] = _0x145796(0x9db);
                            else {
                                if (getChromeVersion() > 0x3c) msg[_0x145796(0x915)][_0x145796(0x6e3)] = _0x145796(0x223) + getChromeVersion();
                                else {
                                    if (userAgent[_0x145796(0x438)]("Firefox") >= 0x0) msg[_0x145796(0x915)][_0x145796(0x6e3)] = _0x145796(0x57c);
                                    else userAgent[_0x145796(0x438)](_0x145796(0x16d)) >= 0x0 ? (msg[_0x145796(0x915)][_0x145796(0x6e3)] = "Chrome\x20for\x20iOS") : (msg[_0x145796(0x915)]["Browser"] = "Unknown");
                                }
                            }
                        } catch (_0x2fa48e) {}
                        _0x531b4d["batteryState"] &&
                            ("level" in _0x531b4d[_0x145796(0x841)] &&
                                (typeof _0x531b4d["batteryState"][_0x145796(0x249)] == "number"
                                    ? (msg[_0x145796(0x915)]["power_level"] = parseInt(_0x531b4d[_0x145796(0x841)][_0x145796(0x249)] * 0x64))
                                    : (msg[_0x145796(0x915)]["power_level"] = _0x531b4d[_0x145796(0x841)][_0x145796(0x249)])),
                            "charging" in _0x531b4d[_0x145796(0x841)] && (msg["info"][_0x145796(0x5b6)] = _0x531b4d[_0x145796(0x841)]["charging"]));
                        _0x531b4d["cpuLimited"] && (msg[_0x145796(0x915)][_0x145796(0x24f)] = _0x531b4d[_0x145796(0x24f)]);
                        try {
                            _0x531b4d[_0x145796(0x915)][_0x145796(0x701)] &&
                                ((msg[_0x145796(0x2a1)] = {}), (msg[_0x145796(0x2a1)][_0x145796(0x701)] = {}), (msg[_0x145796(0x2a1)][_0x145796(0x701)]["c"] = _0x531b4d[_0x145796(0x915)]["out"]["c"]));
                        } catch (_0x5d3646) {}
                        _0x531b4d[_0x145796(0x822)](msg, _0x1e2455), pokeIframeAPI("new-push-connection", !![], _0x1e2455), pokeIframeAPI(_0x145796(0x587), !![], _0x1e2455), updateUserList();
                    }),
                    (_0x531b4d[_0x341598(0x8cd)][_0x1e2455][_0x341598(0x528)][_0x341598(0x907)] = () => {
                        var _0x11da61 = _0x341598;
                        pokeIframeAPI(_0x11da61(0x377), ![], _0x1e2455), _0x531b4d[_0x11da61(0x45a)](), warnlog(_0x11da61(0x70c));
                        return;
                    }),
                    (_0x531b4d["pcs"][_0x1e2455][_0x341598(0x528)][_0x341598(0x1e5)] = async function (_0x3124a9) {
                        var _0x5cccef = _0x341598;
                        log(_0x5cccef(0x40c));
                        try {
                            var _0x4b824e = JSON[_0x5cccef(0x59c)](_0x3124a9[_0x5cccef(0x5a0)]);
                        } catch (_0x1f6498) {
                            warnlog(_0x5cccef(0x7ad)), log(_0x3124a9[_0x5cccef(0x5a0)]);
                            try {
                                var _0x76534a = new TextDecoder()[_0x5cccef(0x233)](_0x3124a9[_0x5cccef(0x5a0)]),
                                    _0x4b824e = JSON[_0x5cccef(0x59c)](_0x76534a);
                            } catch (_0x2e87dc) {
                                try {
                                    var _0x4b824e = await new Response(_0x3124a9[_0x5cccef(0x5a0)])[_0x5cccef(0x2bc)]();
                                    _0x4b824e = JSON[_0x5cccef(0x59c)](_0x4b824e);
                                } catch (_0x49c399) {
                                    return;
                                }
                            }
                        }
                        warnlog(_0x4b824e);
                        if ("remote" in _0x4b824e)
                            try {
                                _0x4b824e = await _0x531b4d[_0x5cccef(0x932)](_0x4b824e);
                                if (!_0x4b824e) return;
                            } catch (_0x5abb4e) {
                                errorlor(_0x5abb4e);
                            }
                        "altUUID" in _0x4b824e ? await _0x531b4d[_0x5cccef(0x996)](_0x4b824e, _0x1e2455 + _0x5cccef(0x47d)) : await _0x531b4d["processPCSOnMessage"](_0x4b824e, _0x1e2455);
                    });
            }
            _0x221be3(![]),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x481)] = function (_0x3f1777) {
                    var _0x13904e = _0x232ebe;
                    warnlog(_0x13904e(0x354)), warnlog(_0x3f1777);
                    if (_0x3f1777[_0x13904e(0x93d)][_0x13904e(0x931)] && _0x3f1777["channel"][_0x13904e(0x931)] !== _0x13904e(0x528)) {
                        _0x531b4d["recieveFile"](_0x531b4d[_0x13904e(0x39e)], _0x1e2455, _0x3f1777[_0x13904e(0x93d)]);
                        return;
                    }
                }),
                (_0x531b4d["pcs"][_0x1e2455][_0x232ebe(0x164)] = function (_0x15528a) {
                    var _0x4051e7 = _0x232ebe;
                    log(_0x4051e7(0x373)), _0x531b4d[_0x4051e7(0x5ac)](_0x1e2455);
                }),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0xa14)] = (_0x16f12f) => {
                    var _0x1ba442 = _0x232ebe;
                    errorlog(_0x1ba442(0x3e9));
                }),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x891)] = null),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x68c)] = []),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x86b)] = function (_0x46a5a2) {
                    var _0x3af164 = _0x232ebe;
                    if (_0x46a5a2[_0x3af164(0x6c8)] == null) {
                        log(_0x3af164(0xa2c));
                        return;
                    }
                    log(_0x46a5a2);
                    try {
                        if (_0x531b4d[_0x3af164(0x969)]) {
                            if (_0x46a5a2[_0x3af164(0x6c8)][_0x3af164(0x6c8)][_0x3af164(0x438)](_0x531b4d[_0x3af164(0x969)]) === -0x1) {
                                log(_0x3af164(0x7ba));
                                return;
                            } else log(_0x46a5a2["candidate"]);
                        }
                    } catch (_0x45ac03) {
                        errorlog(_0x45ac03);
                    }
                    if (_0x531b4d[_0x3af164(0x8cd)][_0x1e2455][_0x3af164(0x891)] !== null) {
                        _0x531b4d["pcs"][_0x1e2455][_0x3af164(0x68c)][_0x3af164(0x874)](_0x46a5a2[_0x3af164(0x6c8)]);
                        return;
                    }
                    _0x531b4d[_0x3af164(0x8cd)][_0x1e2455][_0x3af164(0x68c)]["push"](_0x46a5a2[_0x3af164(0x6c8)]),
                        (_0x531b4d[_0x3af164(0x8cd)][_0x1e2455][_0x3af164(0x891)] = setTimeout(
                            function (_0x3d9bca) {
                                var _0x348dbc = _0x3af164;
                                try {
                                    _0x531b4d[_0x348dbc(0x8cd)][_0x3d9bca][_0x348dbc(0x891)] = null;
                                } catch (_0x16ca04) {
                                    warnlog(_0x348dbc(0x75e));
                                    return;
                                }
                                var _0xe32de8 = {};
                                (_0xe32de8["UUID"] = _0x3d9bca),
                                    (_0xe32de8[_0x348dbc(0x6a5)] = _0x348dbc(0x651)),
                                    (_0xe32de8["candidates"] = _0x531b4d["pcs"][_0x3d9bca][_0x348dbc(0x68c)]),
                                    (_0xe32de8[_0x348dbc(0x6df)] = _0x531b4d[_0x348dbc(0x8cd)][_0x3d9bca][_0x348dbc(0x6df)]),
                                    (_0x531b4d[_0x348dbc(0x8cd)][_0x3d9bca][_0x348dbc(0x68c)] = []),
                                    _0x531b4d[_0x348dbc(0x7f4)]
                                        ? _0x531b4d[_0x348dbc(0x55e)](JSON[_0x348dbc(0x30c)](_0xe32de8[_0x348dbc(0x9ff)]))
                                              [_0x348dbc(0x741)](function (_0x49e91f) {
                                                  var _0x37e2ab = _0x348dbc;
                                                  (_0xe32de8[_0x37e2ab(0x9ff)] = _0x49e91f[0x0]), (_0xe32de8[_0x37e2ab(0x190)] = _0x49e91f[0x1]), _0x531b4d["anysend"](_0xe32de8);
                                              })
                                              ["catch"](errorlog)
                                        : _0x531b4d[_0x348dbc(0x9ba)](_0xe32de8);
                            },
                            0xc8,
                            _0x1e2455
                        ));
                }),
                (_0x531b4d[_0x232ebe(0x996)] = async function (_0x13a38f, _0x78c086) {
                    var _0xca9070 = _0x232ebe;
                    _0x13a38f["UUID"] = _0x78c086;
                    if (_0x13a38f[_0xca9070(0x662)]) {
                        _0x531b4d[_0xca9070(0x394)](_0x13a38f);
                        return;
                    } else {
                        if (_0x13a38f[_0xca9070(0x6c8)]) {
                            log("GOT\x20ICE!!"), _0x531b4d[_0xca9070(0x37b)](_0x13a38f);
                            return;
                        } else {
                            if (_0x13a38f[_0xca9070(0x9ff)]) {
                                log("GOT\x20ICEs!!"), _0x531b4d[_0xca9070(0x184)](_0x13a38f);
                                return;
                            } else {
                                if ("ping" in _0x13a38f) {
                                    var _0x7a5b02 = {};
                                    (_0x7a5b02[_0xca9070(0x4f9)] = _0x13a38f[_0xca9070(0x45a)]), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086), warnlog(_0xca9070(0x15b));
                                    return;
                                } else {
                                    if (_0xca9070(0x4f9) in _0x13a38f) {
                                        warnlog(_0xca9070(0x6f3));
                                        return;
                                    } else {
                                        if (_0xca9070(0x872) in _0x13a38f) {
                                            warnlog(_0xca9070(0x417)), log(_0xca9070(0x3a6)), _0x531b4d[_0xca9070(0x790)](_0x78c086);
                                            return;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (_0x531b4d["director"]) {
                        if (_0xca9070(0x17e) in _0x13a38f && "vector" in _0x13a38f) {
                            if (_0x531b4d["directorPassword"])
                                _0x531b4d["directorHash"]
                                    ? _0x531b4d["decryptMessage"](_0x13a38f[_0xca9070(0x17e)], _0x13a38f["vector"], _0x531b4d[_0xca9070(0x139)])
                                          ["then"](function (_0x326fa4) {
                                              var _0x1c407e = _0xca9070;
                                              if (_0x326fa4 === _0x531b4d[_0x1c407e(0x139)]) {
                                                  (_0x531b4d[_0x1c407e(0x8cd)][_0x78c086][_0x1c407e(0x803)] = !![]),
                                                      getById("container_" + _0x78c086)[_0x1c407e(0x23d)][_0x1c407e(0x6e9)](_0x1c407e(0x1ab)),
                                                      _0x531b4d[_0x1c407e(0x1e9)](_0x78c086);
                                                  var _0x4f6ce6 = {};
                                                  (_0x4f6ce6[_0x1c407e(0x64a)] = _0x1c407e(0x17e)), _0x531b4d[_0x1c407e(0x822)](_0x4f6ce6, _0x78c086);
                                              } else {
                                                  warnlog(_0x1c407e(0x70d));
                                                  var _0x4f6ce6 = {};
                                                  (_0x4f6ce6["rejected"] = _0x1c407e(0x17e)), _0x531b4d[_0x1c407e(0x822)](_0x4f6ce6, _0x78c086);
                                              }
                                          })
                                          [_0xca9070(0x524)](function () {
                                              var _0x2e0782 = _0xca9070;
                                              warnlog(_0x2e0782(0xa3b));
                                              var _0x172d80 = {};
                                              (_0x172d80[_0x2e0782(0xa1a)] = _0x2e0782(0x17e)), _0x531b4d["sendMessage"](_0x172d80, _0x78c086);
                                          })
                                    : generateHash(_0x531b4d[_0xca9070(0x1bb)] + _0x531b4d["salt"] + _0xca9070(0x942), 0xc)
                                          [_0xca9070(0x741)](function (_0x423d85) {
                                              var _0x509fc5 = _0xca9070;
                                              (_0x531b4d[_0x509fc5(0x139)] = _0x423d85),
                                                  _0x531b4d[_0x509fc5(0x8d4)](_0x13a38f["requestCoDirector"], _0x13a38f[_0x509fc5(0x190)], _0x531b4d[_0x509fc5(0x139)])
                                                      ["then"](function (_0x2bb224) {
                                                          var _0x1f0ec6 = _0x509fc5;
                                                          if (_0x2bb224 === _0x531b4d["directorHash"]) {
                                                              (_0x531b4d["pcs"][_0x78c086][_0x1f0ec6(0x803)] = !![]),
                                                                  getById("container_" + _0x78c086)["classList"][_0x1f0ec6(0x6e9)](_0x1f0ec6(0x1ab)),
                                                                  _0x531b4d[_0x1f0ec6(0x1e9)](_0x78c086);
                                                              var _0x5a73e0 = {};
                                                              (_0x5a73e0[_0x1f0ec6(0x64a)] = "requestCoDirector"), _0x531b4d["sendRequest"](_0x5a73e0, _0x78c086);
                                                          } else {
                                                              warnlog(_0x1f0ec6(0x70d));
                                                              var _0x5a73e0 = {};
                                                              (_0x5a73e0[_0x1f0ec6(0xa1a)] = _0x1f0ec6(0x17e)), _0x531b4d[_0x1f0ec6(0x1a7)](_0x5a73e0, _0x78c086);
                                                          }
                                                      })
                                                      [_0x509fc5(0x524)](function () {
                                                          var _0x489751 = _0x509fc5;
                                                          warnlog(_0x489751(0xa3b));
                                                          var _0xce7590 = {};
                                                          (_0xce7590[_0x489751(0xa1a)] = _0x489751(0x17e)), _0x531b4d[_0x489751(0x1a7)](_0xce7590, _0x78c086);
                                                      });
                                              return;
                                          })
                                          [_0xca9070(0x524)](errorlog);
                            else {
                                warnlog(_0xca9070(0x593));
                                var _0x7a5b02 = {};
                                (_0x7a5b02[_0xca9070(0xa1a)] = _0xca9070(0x17e)), _0x531b4d["sendRequest"](_0x7a5b02, _0x78c086);
                            }
                        }
                        if ("migrate" in _0x13a38f && "roomid" in _0x13a38f) {
                            log(_0xca9070(0x49b));
                            if (_0x531b4d[_0xca9070(0x67f)]) {
                                if (_0x78c086 in _0x531b4d[_0xca9070(0x8cd)] && _0x531b4d["pcs"][_0x78c086][_0xca9070(0x803)] === !![]) {
                                    log(_0xca9070(0x38f));
                                    var _0x7a5b02 = {};
                                    if (_0x13a38f["transferSettings"] && _0x13a38f[_0xca9070(0x14f)][_0xca9070(0x452)]) {
                                        (_0x7a5b02[_0xca9070(0x884)] = _0xca9070(0x80d)), (_0x7a5b02["transferSettings"] = _0x13a38f["transferSettings"]), log(_0x7a5b02);
                                        if (_0x531b4d[_0xca9070(0x1a7)](_0x7a5b02, _0x13a38f[_0xca9070(0x80d)][_0xca9070(0x193)]())) {
                                            var _0x7a5b02 = {};
                                            (_0x7a5b02[_0xca9070(0x884)] = _0xca9070(0x80d)),
                                                (_0x7a5b02[_0xca9070(0x875)] = _0x13a38f[_0xca9070(0x875)]),
                                                (_0x7a5b02[_0xca9070(0x50f)] = _0x13a38f["migrate"][_0xca9070(0x193)]()),
                                                _0x531b4d["sendMsg"](_0x7a5b02);
                                        }
                                        log(_0x7a5b02);
                                    } else {
                                        if (_0x13a38f[_0xca9070(0x14f)] && _0xca9070(0x6e8) in _0x13a38f[_0xca9070(0x14f)]) {
                                            (_0x7a5b02[_0xca9070(0x884)] = _0xca9070(0x80d)),
                                                (_0x7a5b02[_0xca9070(0x14f)] = _0x13a38f[_0xca9070(0x14f)]),
                                                delete _0x7a5b02[_0xca9070(0x14f)][_0xca9070(0x875)],
                                                delete _0x7a5b02[_0xca9070(0x14f)][_0xca9070(0x8e0)],
                                                log(_0x7a5b02);
                                            if (_0x531b4d[_0xca9070(0x1a7)](_0x7a5b02, _0x13a38f[_0xca9070(0x80d)]["toString"]())) {
                                                var _0x7a5b02 = {};
                                                (_0x7a5b02[_0xca9070(0x884)] = _0xca9070(0x80d)),
                                                    (_0x7a5b02[_0xca9070(0x875)] = _0x13a38f[_0xca9070(0x875)]),
                                                    (_0x7a5b02[_0xca9070(0x50f)] = _0x13a38f[_0xca9070(0x80d)][_0xca9070(0x193)]()),
                                                    _0x531b4d["sendMsg"](_0x7a5b02);
                                            }
                                            log(_0x7a5b02);
                                        } else
                                            (_0x7a5b02[_0xca9070(0x884)] = _0xca9070(0x80d)),
                                                (_0x7a5b02[_0xca9070(0x875)] = _0x13a38f[_0xca9070(0x875)]),
                                                (_0x7a5b02[_0xca9070(0x50f)] = _0x13a38f["migrate"][_0xca9070(0x193)]()),
                                                _0x531b4d[_0xca9070(0x8de)](_0x7a5b02);
                                    }
                                    pokeIframeAPI(_0xca9070(0x742), _0x13a38f["roomid"], _0x13a38f[_0xca9070(0x80d)][_0xca9070(0x193)]());
                                }
                            } else {
                                var _0x7a5b02 = {};
                                (_0x7a5b02[_0xca9070(0xa1a)] = _0xca9070(0x9c9)), _0x531b4d[_0xca9070(0x1a7)](_0x7a5b02, _0x78c086);
                            }
                        }
                    }
                    if (_0xca9070(0x615) in _0x13a38f) {
                        if (!_0x13a38f[_0xca9070(0x49f)]) {
                            log(_0xca9070(0x1a5));
                            return;
                        }
                        var _0x1196bb = _0x13a38f[_0xca9070(0x615)];
                        if (!_0x531b4d[_0xca9070(0x8cd)][_0x1196bb]) {
                            log("no\x20pcs[UUID]");
                            return;
                        }
                        if (_0x531b4d[_0xca9070(0x308)]["indexOf"](_0x1196bb) >= 0x0) {
                            var _0x7a5b02 = {};
                            (_0x7a5b02["rejected"] = _0xca9070(0x615)), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x13a38f["UUID"]), warnlog(_0xca9070(0x27a));
                            return;
                        }
                        if (_0x531b4d[_0xca9070(0x9af)]) {
                            if ("remote" in _0x13a38f && _0x13a38f[_0xca9070(0x9af)] === _0x531b4d["remote"] && _0x531b4d[_0xca9070(0x9af)]) {
                            } else {
                                if (_0x531b4d["remote"] === !![]) {
                                }
                            }
                        } else {
                            if (_0x531b4d[_0xca9070(0x308)][_0xca9070(0x438)](_0x13a38f["UUID"]) >= 0x0) {
                            } else return;
                        }
                        _0xca9070(0x1e4) in _0x13a38f && _0x531b4d[_0xca9070(0x1e4)](_0x1196bb, _0x13a38f[_0xca9070(0x1e4)]);
                        "targetAudioBitrate" in _0x13a38f && _0x531b4d[_0xca9070(0x871)](_0x1196bb, _0x13a38f[_0xca9070(0x871)]);
                        if (_0xca9070(0x38a) in _0x13a38f)
                            try {
                                _0x531b4d[_0xca9070(0x316)](_0x1196bb, _0x13a38f[_0xca9070(0x38a)]["w"], _0x13a38f[_0xca9070(0x38a)]["h"], _0x13a38f[_0xca9070(0x38a)]["s"], _0x13a38f[_0xca9070(0x38a)]["c"]);
                            } catch (_0x5b2a68) {
                                errorlog(_0x5b2a68);
                            }
                        return;
                    }
                    manageSceneState(_0x13a38f, _0x78c086);
                    try {
                        if (_0xca9070(0x915) in _0x13a38f) {
                            _0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x21d)][_0xca9070(0x915)] = _0x13a38f["info"];
                            "label" in _0x13a38f[_0xca9070(0x915)] &&
                                (typeof _0x13a38f[_0xca9070(0x915)][_0xca9070(0x931)] == "string"
                                    ? (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x931)] = sanitizeLabel(_0x13a38f[_0xca9070(0x915)][_0xca9070(0x931)]))
                                    : (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x931)] = ![]));
                            if (_0x78c086 === _0x531b4d["directorUUID"])
                                try {
                                    _0x531b4d["pcs"][_0x78c086][_0xca9070(0x21d)][_0xca9070(0x915)][_0xca9070(0x276)] = !![];
                                } catch (_0x1af8d5) {}
                            else {
                                if (_0x531b4d["directorList"]["indexOf"](_0x78c086) >= 0x0)
                                    try {
                                        _0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x21d)][_0xca9070(0x915)][_0xca9070(0x803)] = !![];
                                    } catch (_0x3031a7) {}
                            }
                            if (_0x531b4d[_0xca9070(0x1b8)] && _0x531b4d[_0xca9070(0x276)] && _0xca9070(0x482) in _0x13a38f["info"] && _0x13a38f[_0xca9070(0x915)][_0xca9070(0x482)]) {
                                var _0x36f67c = createSlotUpdate(_0x78c086);
                                _0x531b4d["obsSceneTriggers"]
                                    ? _0x531b4d[_0xca9070(0x822)]({ slotsUpdate: _0x36f67c, obsSceneTriggers: _0x531b4d[_0xca9070(0xa37)], layouts: _0x531b4d[_0xca9070(0x1b8)] }, _0x78c086)
                                    : _0x531b4d[_0xca9070(0x822)]({ slotsUpdate: _0x36f67c, layouts: _0x531b4d["layouts"] }, _0x78c086);
                            }
                            if (Firefox)
                                try {
                                    _0xca9070(0x336) in _0x13a38f["info"] &&
                                        _0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x7e2)] === ![] &&
                                        _0x13a38f[_0xca9070(0x915)][_0xca9070(0x336)] &&
                                        parseInt(_0x13a38f[_0xca9070(0x915)][_0xca9070(0x336)]) > 0x0 &&
                                        ((_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x7e2)] = parseInt(_0x13a38f[_0xca9070(0x915)][_0xca9070(0x336)])),
                                        _0x531b4d["pcs"][_0x78c086]["bitrateTimeout"] && clearTimeout(_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x9ae)]),
                                        (_0x531b4d[_0xca9070(0x8cd)][_0x78c086]["bitrateTimeout"] = setTimeout(
                                            function (_0x5395c8) {
                                                _0x531b4d["limitBitrate"](_0x5395c8, null);
                                            },
                                            0x3e8,
                                            _0x78c086
                                        )));
                                } catch (_0x4443ba) {
                                    errorlog(_0x4443ba);
                                }
                            pokeIframeAPI(_0xca9070(0x517), _0x13a38f[_0xca9070(0x915)], _0x78c086);
                        }
                        if (_0xca9070(0x2dc) in _0x13a38f) {
                            if (_0x531b4d[_0xca9070(0x56c)])
                                try {
                                    _0x531b4d["iframeSrc"][_0xca9070(0x32a)](_0xca9070(0x6b6)) && processIframeSyncFeedback(_0x13a38f[_0xca9070(0x2dc)], _0x78c086);
                                } catch (_0x1658fe) {
                                    errorlog(_0x1658fe);
                                }
                        }
                        "pipe" in _0x13a38f && _0x531b4d[_0xca9070(0x59a)](_0x13a38f[_0xca9070(0x847)], _0x78c086);
                        _0xca9070(0x4b5) in _0x13a38f && ((_0x531b4d[_0xca9070(0x44a)] = _0x13a38f[_0xca9070(0x4b5)]), _0x531b4d[_0xca9070(0x1ce)](_0x78c086));
                        _0xca9070(0x42f) in _0x13a38f && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x42f)] = parseInt(_0x13a38f["optimizedBitrate"]));
                        _0xca9070(0x94f) in _0x13a38f && _0x531b4d[_0xca9070(0x71a)](_0x78c086, _0x13a38f[_0xca9070(0x94f)]);
                        _0xca9070(0x798) in _0x13a38f && _0x531b4d["limitBitrate"](_0x78c086, _0x13a38f[_0xca9070(0x798)]);
                        _0xca9070(0x1e4) in _0x13a38f && _0x531b4d[_0xca9070(0x1e4)](_0x78c086, _0x13a38f[_0xca9070(0x1e4)]);
                        _0xca9070(0x871) in _0x13a38f && _0x531b4d[_0xca9070(0x871)](_0x78c086, _0x13a38f[_0xca9070(0x871)]);
                        if ("hangup" in _0x13a38f) {
                            if (_0xca9070(0x9af) in _0x13a38f) {
                                if ((_0x13a38f[_0xca9070(0x9af)] === _0x531b4d[_0xca9070(0x9af)] && _0x531b4d["remote"]) || _0x531b4d["remote"] === !![]) {
                                    _0x531b4d[_0xca9070(0x2ce)]();
                                    return;
                                }
                            }
                        }
                        if (_0xca9070(0x695) in _0x13a38f) {
                            if ("remote" in _0x13a38f) {
                                if ((_0x13a38f["remote"] === _0x531b4d[_0xca9070(0x9af)] && _0x531b4d[_0xca9070(0x9af)]) || _0x531b4d[_0xca9070(0x9af)] === !![]) {
                                    _0x531b4d[_0xca9070(0x2ce)](!![]);
                                    return;
                                }
                            }
                        }
                        if (_0xca9070(0x627) in _0x13a38f) {
                            if (_0x531b4d[_0xca9070(0x308)]["indexOf"](_0x78c086) >= 0x0) {
                                var _0x11063e = {};
                                if (_0x531b4d["mc"]["stats"]) _0x11063e["meshcast"] = _0x531b4d["mc"][_0xca9070(0x21d)];
                                else
                                    for (var _0x3c1777 in _0x531b4d[_0xca9070(0x8cd)]) {
                                        if (_0x3c1777 === _0x78c086) continue;
                                        _0x11063e[_0x3c1777] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)];
                                    }
                                var _0x7a5b02 = {};
                                (_0x7a5b02[_0xca9070(0x24d)] = _0x11063e), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                            } else {
                                if (_0xca9070(0x9af) in _0x13a38f) {
                                    if ((_0x13a38f["remote"] === _0x531b4d[_0xca9070(0x9af)] && _0x531b4d[_0xca9070(0x9af)]) || _0x531b4d["remote"] === !![]) {
                                        var _0x11063e = {};
                                        if (_0x531b4d["mc"][_0xca9070(0x21d)]) _0x11063e[_0xca9070(0x389)] = _0x531b4d["mc"]["stats"];
                                        else
                                            for (var _0x3c1777 in _0x531b4d[_0xca9070(0x8cd)]) {
                                                if (_0x3c1777 === _0x78c086) continue;
                                                _0x11063e[_0x3c1777] = _0x531b4d["pcs"][_0x3c1777][_0xca9070(0x21d)];
                                            }
                                        var _0x7a5b02 = {};
                                        (_0x7a5b02[_0xca9070(0x24d)] = _0x11063e), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                    }
                                } else {
                                    var _0x11063e = {};
                                    if (_0x531b4d["mc"][_0xca9070(0x21d)]) _0x11063e["meshcast"] = _0x531b4d["mc"][_0xca9070(0x21d)];
                                    else
                                        for (var _0x3c1777 in _0x531b4d[_0xca9070(0x8cd)]) {
                                            if (_0x3c1777 === _0x78c086) continue;
                                            if (!_0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)]) continue;
                                            if (_0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x599)]) continue;
                                            if (_0x531b4d["roomid"]) {
                                                if ("scene" in _0x531b4d["pcs"][_0x3c1777][_0xca9070(0x21d)]) {
                                                    if (_0x531b4d[_0xca9070(0x8cd)][_0x3c1777]["stats"][_0xca9070(0x725)] === ![]) continue;
                                                } else continue;
                                            }
                                            (_0x11063e[_0x3c1777] = {}),
                                                _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x683)] &&
                                                    (_0x11063e[_0x3c1777][_0xca9070(0x683)] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x683)]),
                                                _0x531b4d[_0xca9070(0x8cd)][_0x3c1777]["stats"][_0xca9070(0x690)] && (_0x11063e[_0x3c1777][_0xca9070(0x690)] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x690)]),
                                                _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x359)] &&
                                                    (_0x11063e[_0x3c1777][_0xca9070(0x359)] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x359)]),
                                                _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)]["scene"] && (_0x11063e[_0x3c1777][_0xca9070(0x725)] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x725)]),
                                                _0x531b4d[_0xca9070(0x8cd)][_0x3c1777]["label"] && (_0x11063e[_0x3c1777][_0xca9070(0x931)] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x931)]),
                                                _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x6d4)] && (_0x11063e[_0x3c1777][_0xca9070(0x6d4)] = _0x531b4d["pcs"][_0x3c1777][_0xca9070(0x21d)]["resolution"]),
                                                _0x531b4d[_0xca9070(0x8cd)][_0x3c1777]["stats"][_0xca9070(0x490)] && (_0x11063e[_0x3c1777]["video_encoder"] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)]["video_encoder"]);
                                        }
                                    var _0x7a5b02 = {};
                                    (_0x7a5b02[_0xca9070(0x24d)] = _0x11063e), _0x531b4d["sendMessage"](_0x7a5b02, _0x78c086);
                                }
                            }
                        }
                        if ("requestStatsContinuous" in _0x13a38f) {
                            clearInterval(_0x531b4d[_0xca9070(0x8cd)][_0x78c086]["requestedStatsInterval"]);
                            if (_0x531b4d[_0xca9070(0x308)][_0xca9070(0x438)](_0x78c086) >= 0x0) {
                                if (_0x13a38f[_0xca9070(0x8dd)]) {
                                    _0x531b4d["pcs"][_0x78c086][_0xca9070(0x4c3)] = setInterval(
                                        function (_0x3e9d19) {
                                            var _0x10cd51 = _0xca9070,
                                                _0x11b821 = {};
                                            if (_0x531b4d["mc"][_0x10cd51(0x21d)]) _0x11b821[_0x10cd51(0x389)] = _0x531b4d["mc"][_0x10cd51(0x21d)];
                                            else
                                                for (var _0xcc213f in _0x531b4d[_0x10cd51(0x8cd)]) {
                                                    if (_0xcc213f === _0x3e9d19) continue;
                                                    if (!_0x531b4d[_0x10cd51(0x8cd)][_0xcc213f]["stats"]) continue;
                                                    if (_0x531b4d["pcs"][_0xcc213f][_0x10cd51(0x599)]) continue;
                                                    _0x11b821[_0xcc213f] = _0x531b4d[_0x10cd51(0x8cd)][_0xcc213f][_0x10cd51(0x21d)];
                                                }
                                            var _0x118930 = {};
                                            (_0x118930["remoteStats"] = _0x11b821), _0x531b4d[_0x10cd51(0x822)](_0x118930, _0x3e9d19);
                                        },
                                        0xbb8,
                                        _0x78c086
                                    );
                                    var _0x11063e = {};
                                    if (_0x531b4d["mc"]["stats"]) _0x11063e["meshcast"] = _0x531b4d["mc"]["stats"];
                                    else
                                        for (var _0x3c1777 in _0x531b4d[_0xca9070(0x8cd)]) {
                                            if (_0x3c1777 === _0x78c086) continue;
                                            if (!_0x531b4d["pcs"][_0x3c1777][_0xca9070(0x21d)]) continue;
                                            if (_0x531b4d["pcs"][_0x3c1777][_0xca9070(0x599)]) continue;
                                            _0x11063e[_0x3c1777] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)];
                                        }
                                    var _0x7a5b02 = {};
                                    (_0x7a5b02[_0xca9070(0x24d)] = _0x11063e), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                }
                            } else {
                                if (_0xca9070(0x9af) in _0x13a38f) {
                                    if ((_0x13a38f["remote"] === _0x531b4d[_0xca9070(0x9af)] && _0x531b4d["remote"]) || _0x531b4d[_0xca9070(0x9af)] === !![]) {
                                        if (_0x13a38f[_0xca9070(0x8dd)]) {
                                            _0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x4c3)] = setInterval(
                                                function (_0x24f848) {
                                                    var _0x24ae6b = _0xca9070,
                                                        _0x669555 = {};
                                                    if (_0x531b4d["mc"][_0x24ae6b(0x21d)]) _0x669555[_0x24ae6b(0x389)] = _0x531b4d["mc"][_0x24ae6b(0x21d)];
                                                    else
                                                        for (var _0x298a8a in _0x531b4d[_0x24ae6b(0x8cd)]) {
                                                            if (_0x298a8a === _0x24f848) continue;
                                                            if (!_0x531b4d[_0x24ae6b(0x8cd)][_0x298a8a]["stats"]) continue;
                                                            if (_0x531b4d[_0x24ae6b(0x8cd)][_0x298a8a][_0x24ae6b(0x599)]) continue;
                                                            _0x669555[_0x298a8a] = _0x531b4d[_0x24ae6b(0x8cd)][_0x298a8a]["stats"];
                                                        }
                                                    var _0x4ee49c = {};
                                                    (_0x4ee49c["remoteStats"] = _0x669555), _0x531b4d[_0x24ae6b(0x822)](_0x4ee49c, _0x24f848);
                                                },
                                                0xbb8,
                                                _0x78c086
                                            );
                                            var _0x11063e = {};
                                            if (_0x531b4d["mc"][_0xca9070(0x21d)]) _0x11063e[_0xca9070(0x389)] = _0x531b4d["mc"][_0xca9070(0x21d)];
                                            else
                                                for (var _0x3c1777 in _0x531b4d["pcs"]) {
                                                    if (_0x3c1777 === _0x78c086) continue;
                                                    if (!_0x531b4d[_0xca9070(0x8cd)][_0x3c1777]["stats"]) continue;
                                                    if (_0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x599)]) continue;
                                                    _0x11063e[_0x3c1777] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)];
                                                }
                                            var _0x7a5b02 = {};
                                            (_0x7a5b02[_0xca9070(0x24d)] = _0x11063e), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                        }
                                    }
                                } else {
                                    if (_0x13a38f["requestStatsContinuous"]) {
                                        _0x531b4d["pcs"][_0x78c086]["requestedStatsInterval"] = setInterval(
                                            function (_0x4d2270) {
                                                var _0x47059f = _0xca9070,
                                                    _0x5878ee = {};
                                                if (_0x531b4d["mc"][_0x47059f(0x21d)]) _0x5878ee["meshcast"] = _0x531b4d["mc"][_0x47059f(0x21d)];
                                                else
                                                    for (var _0x1e04d9 in _0x531b4d[_0x47059f(0x8cd)]) {
                                                        if (_0x1e04d9 === _0x4d2270) continue;
                                                        if (!_0x531b4d[_0x47059f(0x8cd)][_0x1e04d9][_0x47059f(0x21d)]) continue;
                                                        if (_0x531b4d[_0x47059f(0x8cd)][_0x1e04d9][_0x47059f(0x599)]) continue;
                                                        if (_0x531b4d[_0x47059f(0x875)]) {
                                                            if (_0x47059f(0x725) in _0x531b4d["pcs"][_0x1e04d9]["stats"]) {
                                                                if (_0x531b4d[_0x47059f(0x8cd)][_0x1e04d9][_0x47059f(0x21d)]["scene"] === ![]) continue;
                                                            } else continue;
                                                        }
                                                        (_0x5878ee[_0x1e04d9] = {}),
                                                            _0x531b4d[_0x47059f(0x8cd)][_0x1e04d9][_0x47059f(0x21d)][_0x47059f(0x683)] &&
                                                                (_0x5878ee[_0x1e04d9]["video_bitrate_kbps"] = _0x531b4d[_0x47059f(0x8cd)][_0x1e04d9][_0x47059f(0x21d)][_0x47059f(0x683)]),
                                                            _0x531b4d["pcs"][_0x1e04d9][_0x47059f(0x21d)][_0x47059f(0x690)] &&
                                                                (_0x5878ee[_0x1e04d9][_0x47059f(0x690)] = _0x531b4d[_0x47059f(0x8cd)][_0x1e04d9][_0x47059f(0x21d)][_0x47059f(0x690)]),
                                                            _0x531b4d[_0x47059f(0x8cd)][_0x1e04d9][_0x47059f(0x21d)]["available_outgoing_bitrate_kbps"] &&
                                                                (_0x5878ee[_0x1e04d9][_0x47059f(0x359)] = _0x531b4d[_0x47059f(0x8cd)][_0x1e04d9][_0x47059f(0x21d)][_0x47059f(0x359)]),
                                                            _0x531b4d["pcs"][_0x1e04d9]["stats"][_0x47059f(0x725)] && (_0x5878ee[_0x1e04d9][_0x47059f(0x725)] = _0x531b4d[_0x47059f(0x8cd)][_0x1e04d9]["stats"][_0x47059f(0x725)]),
                                                            _0x531b4d["pcs"][_0x1e04d9][_0x47059f(0x931)] && (_0x5878ee[_0x1e04d9][_0x47059f(0x931)] = _0x531b4d[_0x47059f(0x8cd)][_0x1e04d9][_0x47059f(0x931)]),
                                                            _0x531b4d[_0x47059f(0x8cd)][_0x1e04d9][_0x47059f(0x21d)]["resolution"] &&
                                                                (_0x5878ee[_0x1e04d9]["resolution"] = _0x531b4d[_0x47059f(0x8cd)][_0x1e04d9][_0x47059f(0x21d)]["resolution"]),
                                                            _0x531b4d[_0x47059f(0x8cd)][_0x1e04d9][_0x47059f(0x21d)][_0x47059f(0x490)] &&
                                                                (_0x5878ee[_0x1e04d9]["video_encoder"] = _0x531b4d["pcs"][_0x1e04d9][_0x47059f(0x21d)][_0x47059f(0x490)]);
                                                    }
                                                var _0x51bb58 = {};
                                                (_0x51bb58["remoteStats"] = _0x5878ee), _0x531b4d[_0x47059f(0x822)](_0x51bb58, _0x4d2270);
                                            },
                                            0xbb8,
                                            _0x78c086
                                        );
                                        var _0x11063e = {};
                                        if (_0x531b4d["mc"][_0xca9070(0x21d)]) _0x11063e["meshcast"] = _0x531b4d["mc"][_0xca9070(0x21d)];
                                        else
                                            for (var _0x3c1777 in _0x531b4d[_0xca9070(0x8cd)]) {
                                                if (_0x3c1777 === _0x78c086) continue;
                                                if (!_0x531b4d["pcs"][_0x3c1777][_0xca9070(0x21d)]) continue;
                                                if (_0x531b4d["pcs"][_0x3c1777][_0xca9070(0x599)]) continue;
                                                if (_0x531b4d[_0xca9070(0x875)]) {
                                                    if (_0xca9070(0x725) in _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)]) {
                                                        if (_0x531b4d["pcs"][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x725)] === ![]) continue;
                                                    } else continue;
                                                }
                                                (_0x11063e[_0x3c1777] = {}),
                                                    _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x683)] &&
                                                        (_0x11063e[_0x3c1777]["video_bitrate_kbps"] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x683)]),
                                                    _0x531b4d["pcs"][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x690)] && (_0x11063e[_0x3c1777]["nacks_per_second"] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777]["stats"][_0xca9070(0x690)]),
                                                    _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x359)] &&
                                                        (_0x11063e[_0x3c1777][_0xca9070(0x359)] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x359)]),
                                                    _0x531b4d["pcs"][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x725)] && (_0x11063e[_0x3c1777]["scene"] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x725)]),
                                                    _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x931)] && (_0x11063e[_0x3c1777][_0xca9070(0x931)] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x931)]),
                                                    _0x531b4d[_0xca9070(0x8cd)][_0x3c1777]["stats"][_0xca9070(0x6d4)] && (_0x11063e[_0x3c1777][_0xca9070(0x6d4)] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x6d4)]),
                                                    _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)][_0xca9070(0x490)] &&
                                                        (_0x11063e[_0x3c1777]["video_encoder"] = _0x531b4d[_0xca9070(0x8cd)][_0x3c1777][_0xca9070(0x21d)]["video_encoder"]);
                                            }
                                        var _0x7a5b02 = {};
                                        (_0x7a5b02[_0xca9070(0x24d)] = _0x11063e), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                    }
                                }
                            }
                        }
                        if ("requestResolution" in _0x13a38f)
                            try {
                                _0x531b4d[_0xca9070(0x316)](_0x78c086, _0x13a38f[_0xca9070(0x38a)]["w"], _0x13a38f["requestResolution"]["h"], _0x13a38f[_0xca9070(0x38a)]["s"], _0x13a38f[_0xca9070(0x38a)]["c"]);
                            } catch (_0x2e16f6) {
                                errorlog(_0x2e16f6);
                            }
                        _0xca9070(0x47e) in _0x13a38f &&
                            (_0x13a38f[_0xca9070(0x725)] ? (_0x531b4d[_0xca9070(0x308)][_0xca9070(0x438)](_0x78c086) >= 0x0 ? _0x531b4d[_0xca9070(0x58c)]() : errorlog(_0xca9070(0x240))) : _0x531b4d[_0xca9070(0x977)](_0x78c086));
                        if ("chat" in _0x13a38f) {
                            var _0x49444b = ![],
                                _0x504952 = ![];
                            _0x531b4d[_0xca9070(0x308)]["indexOf"](_0x78c086) >= 0x0 && ((_0x49444b = !![]), _0xca9070(0x69e) in _0x13a38f && _0x13a38f[_0xca9070(0x69e)] == !![] && (_0x504952 = !![])),
                                log("isDirector\x20" + _0x49444b),
                                getChatMessage(_0x13a38f["chat"], _0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x931)], _0x49444b, _0x504952);
                        }
                        if (_0xca9070(0x885) in _0x13a38f) {
                            _0x531b4d[_0xca9070(0x8cd)][_0x78c086]["order"] = parseInt(_0x13a38f["order"]) || 0x0;
                            _0x78c086 in _0x531b4d[_0xca9070(0x39e)] && (_0x531b4d["rpcs"][_0x78c086]["order"] = _0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x885)]);
                            if (_0x531b4d[_0xca9070(0x276)]) {
                                var _0x17739e = document[_0xca9070(0x63c)](_0xca9070(0x7f7) + _0x78c086 + "\x22]");
                                log(_0x17739e), _0x17739e[0x0] && (_0x17739e[0x0][_0xca9070(0x471)] = parseInt(_0x13a38f[_0xca9070(0x885)]) || 0x0);
                            }
                            updateMixer();
                        }
                        "scale" in _0x13a38f && _0x531b4d["setScale"](_0x78c086, _0x13a38f["scale"]);
                        if (_0x531b4d[_0xca9070(0x276)] && _0x531b4d["pcs"][_0x78c086]["coDirector"] && _0xca9070(0x9d7) in _0x13a38f) {
                            log(_0x13a38f), (_0x531b4d[_0xca9070(0x9a6)] = _0x13a38f[_0xca9070(0x9d7)]);
                            for (var _0x311e72 in _0x531b4d[_0xca9070(0x9a6)]) {
                                syncSceneState(_0x311e72), syncOtherState(_0x311e72);
                            }
                        }
                        if (_0x531b4d[_0xca9070(0x308)]["indexOf"](_0x78c086) == -0x1) {
                            if (_0xca9070(0x92e) in _0x13a38f) {
                                var _0x7a5b02 = {};
                                (_0x7a5b02[_0xca9070(0xa1a)] = _0xca9070(0x92e)), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                            } else {
                                if ("requestVideoRecord" in _0x13a38f) {
                                    var _0x7a5b02 = {};
                                    (_0x7a5b02[_0xca9070(0xa1a)] = _0xca9070(0x413)), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                } else {
                                    if (_0xca9070(0x202) in _0x13a38f) {
                                        var _0x7a5b02 = {};
                                        (_0x7a5b02[_0xca9070(0xa1a)] = _0xca9070(0x202)), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                    } else {
                                        if (_0xca9070(0x2f8) in _0x13a38f) {
                                            var _0x7a5b02 = {};
                                            (_0x7a5b02[_0xca9070(0xa1a)] = _0xca9070(0x2f8)), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                        } else {
                                            if (_0xca9070(0x327) in _0x13a38f) {
                                                var _0x7a5b02 = {};
                                                (_0x7a5b02["rejected"] = _0xca9070(0x327)), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                            } else {
                                                if (_0xca9070(0x1c2) in _0x13a38f) {
                                                    var _0x7a5b02 = {};
                                                    (_0x7a5b02[_0xca9070(0xa1a)] = "requestChangeEQ"), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                } else {
                                                    if ("requestChangeGating" in _0x13a38f) {
                                                        var _0x7a5b02 = {};
                                                        (_0x7a5b02[_0xca9070(0xa1a)] = "requestChangeGating"), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                    } else {
                                                        if (_0xca9070(0x45c) in _0x13a38f) {
                                                            var _0x7a5b02 = {};
                                                            (_0x7a5b02[_0xca9070(0xa1a)] = _0xca9070(0x45c)), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                        } else {
                                                            if (_0xca9070(0x980) in _0x13a38f) {
                                                                var _0x7a5b02 = {};
                                                                (_0x7a5b02[_0xca9070(0xa1a)] = _0xca9070(0x980)), _0x531b4d["sendMessage"](_0x7a5b02, _0x78c086);
                                                            } else {
                                                                if (_0xca9070(0x4cb) in _0x13a38f) {
                                                                    var _0x7a5b02 = {};
                                                                    (_0x7a5b02[_0xca9070(0xa1a)] = "remoteVideoMuted"), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                                } else {
                                                                    if (_0xca9070(0x3cd) in _0x13a38f) {
                                                                        var _0x7a5b02 = {};
                                                                        (_0x7a5b02[_0xca9070(0xa1a)] = "requestChangeMicDelay"), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                                    } else {
                                                                        if (_0xca9070(0x3d8) in _0x13a38f) {
                                                                            var _0x7a5b02 = {};
                                                                            (_0x7a5b02[_0xca9070(0xa1a)] = _0xca9070(0x3d8)), _0x531b4d["sendMessage"](_0x7a5b02, _0x78c086);
                                                                        } else {
                                                                            if (_0xca9070(0x2ce) in _0x13a38f) {
                                                                                var _0x7a5b02 = {};
                                                                                (_0x7a5b02[_0xca9070(0xa1a)] = "hangup"), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                                            } else {
                                                                                if (_0xca9070(0x425) in _0x13a38f) {
                                                                                    var _0x7a5b02 = {};
                                                                                    (_0x7a5b02[_0xca9070(0xa1a)] = "displayMute"), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                                                } else {
                                                                                    if (_0xca9070(0x87c) in _0x13a38f) {
                                                                                        var _0x7a5b02 = {};
                                                                                        (_0x7a5b02[_0xca9070(0xa1a)] = _0xca9070(0x87c)), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                                                    } else {
                                                                                        if (_0xca9070(0x9da) in _0x13a38f) {
                                                                                            var _0x7a5b02 = {};
                                                                                            (_0x7a5b02[_0xca9070(0xa1a)] = _0xca9070(0x9da)), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                                                        } else {
                                                                                            if (_0xca9070(0x8c6) in _0x13a38f) {
                                                                                                var _0x7a5b02 = {};
                                                                                                (_0x7a5b02[_0xca9070(0xa1a)] = "micIsolated"), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                                                            } else {
                                                                                                if (_0xca9070(0x491) in _0x13a38f) {
                                                                                                    var _0x7a5b02 = {};
                                                                                                    (_0x7a5b02[_0xca9070(0xa1a)] = "requestUpload"), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                                                                } else {
                                                                                                    if (_0xca9070(0x467) in _0x13a38f) {
                                                                                                        var _0x7a5b02 = {};
                                                                                                        (_0x7a5b02[_0xca9070(0xa1a)] = "stopClock"), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                                                                    } else {
                                                                                                        if (_0xca9070(0x532) in _0x13a38f) {
                                                                                                            var _0x7a5b02 = {};
                                                                                                            (_0x7a5b02[_0xca9070(0xa1a)] = "resumeClock"), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                                                                        } else {
                                                                                                            if (_0xca9070(0x6a7) in _0x13a38f) {
                                                                                                                var _0x7a5b02 = {};
                                                                                                                (_0x7a5b02[_0xca9070(0xa1a)] = "setClock"), _0x531b4d["sendMessage"](_0x7a5b02, _0x78c086);
                                                                                                            } else {
                                                                                                                if (_0xca9070(0x825) in _0x13a38f) {
                                                                                                                    var _0x7a5b02 = {};
                                                                                                                    (_0x7a5b02[_0xca9070(0xa1a)] = _0xca9070(0x825)), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                                                                                } else {
                                                                                                                    if (_0xca9070(0x691) in _0x13a38f) {
                                                                                                                        var _0x7a5b02 = {};
                                                                                                                        (_0x7a5b02[_0xca9070(0xa1a)] = "showClock"), _0x531b4d["sendMessage"](_0x7a5b02, _0x78c086);
                                                                                                                    } else {
                                                                                                                        if ("startClock" in _0x13a38f) {
                                                                                                                            var _0x7a5b02 = {};
                                                                                                                            (_0x7a5b02["rejected"] = _0xca9070(0x1cc)), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                                                                                        } else {
                                                                                                                            if (_0xca9070(0x945) in _0x13a38f) {
                                                                                                                                var _0x7a5b02 = {};
                                                                                                                                (_0x7a5b02[_0xca9070(0xa1a)] = _0xca9070(0x945)), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                                                                                            } else {
                                                                                                                                if (_0xca9070(0x44b) in _0x13a38f) {
                                                                                                                                    var _0x7a5b02 = {};
                                                                                                                                    (_0x7a5b02[_0xca9070(0xa1a)] = _0xca9070(0x44b)), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                                                                                                                                } else {
                                                                                                                                    if ("group" in _0x13a38f) {
                                                                                                                                        var _0x7a5b02 = {};
                                                                                                                                        (_0x7a5b02[_0xca9070(0xa1a)] = _0xca9070(0x8b3)), _0x531b4d["sendMessage"](_0x7a5b02, _0x78c086);
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            if ("requestAudioHack" in _0x13a38f) {
                                var _0x5bf253 = _0x531b4d[_0xca9070(0x8cc)][_0xca9070(0x776)]();
                                _0x5bf253["length"] &&
                                    (_0xca9070(0x2e1) in _0x13a38f
                                        ? applyAudioHack(_0x13a38f[_0xca9070(0x8c2)], _0x13a38f[_0xca9070(0x857)], _0x13a38f[_0xca9070(0x2e1)])
                                        : applyAudioHack(_0x13a38f[_0xca9070(0x8c2)], _0x13a38f[_0xca9070(0x857)]));
                            }
                            if ("requestVideoRecord" in _0x13a38f) {
                                if (_0x13a38f["requestVideoRecord"]) {
                                    if (_0x531b4d[_0xca9070(0x6fa)]) {
                                        var _0x20ac7c = 0x1770;
                                        _0x13a38f[_0xca9070(0x857)] && (_0x20ac7c = parseInt(_0x13a38f["value"])), recordLocalVideo(_0xca9070(0x4ba), _0x20ac7c);
                                    }
                                } else _0x531b4d[_0xca9070(0x6fa)] && recordLocalVideo(_0xca9070(0x171));
                            }
                            if (_0xca9070(0x202) in _0x13a38f) {
                                _0x531b4d[_0xca9070(0x885)] == ![] && (_0x531b4d[_0xca9070(0x885)] = 0x0);
                                _0x531b4d[_0xca9070(0x885)] += parseInt(_0x13a38f[_0xca9070(0x202)]) || 0x0;
                                var _0x7a5b02 = {};
                                (_0x7a5b02 = {}), (_0x7a5b02[_0xca9070(0x885)] = _0x531b4d[_0xca9070(0x885)]), _0x531b4d[_0xca9070(0x62e)](_0x7a5b02), updateMixer();
                            }
                            "changeURL" in _0x13a38f && changeURL(_0x13a38f[_0xca9070(0x2f8)]);
                            "stopClock" in _0x13a38f && stopClock();
                            _0xca9070(0x532) in _0x13a38f && resumeClock();
                            _0xca9070(0x6a7) in _0x13a38f && setClock(_0x13a38f["setClock"]);
                            _0xca9070(0x825) in _0x13a38f && hideClock();
                            _0xca9070(0x691) in _0x13a38f && showClock();
                            _0xca9070(0x1cc) in _0x13a38f && startClock();
                            _0xca9070(0x945) in _0x13a38f && pauseClock();
                            if ("showTime" in _0x13a38f) {
                                if (_0x531b4d[_0xca9070(0x44b)] !== ![]) {
                                    if (_0x13a38f[_0xca9070(0x44b)] && !_0x531b4d[_0xca9070(0x44b)]) toggleClock();
                                    else !_0x13a38f[_0xca9070(0x44b)] && _0x531b4d[_0xca9070(0x44b)] && toggleClock();
                                }
                            }
                            _0xca9070(0x491) in _0x13a38f && toggleFileshare(_0x78c086);
                            if (_0xca9070(0x8b3) in _0x13a38f)
                                try {
                                    _0x531b4d["sendMessage"]({ group: _0x13a38f[_0xca9070(0x8b3)] }),
                                        _0x13a38f["group"] ? (_0x531b4d[_0xca9070(0x8b3)] = _0x13a38f[_0xca9070(0x8b3)][_0xca9070(0x22a)](",")) : (_0x531b4d[_0xca9070(0x8b3)] = []),
                                        updateMixer(),
                                        pokeIframeAPI(_0xca9070(0x5bc), _0x531b4d[_0xca9070(0x8b3)]);
                                } catch (_0x38590d) {}
                            if ("changeLabel" in _0x13a38f) {
                                if (_0xca9070(0x857) in _0x13a38f) {
                                    if (typeof _0x13a38f[_0xca9070(0x857)] == _0xca9070(0x987)) {
                                        (_0x531b4d[_0xca9070(0x931)] = sanitizeLabel(_0x13a38f[_0xca9070(0x857)])), log(_0xca9070(0x791) + _0x531b4d["label"]);
                                        if (_0x531b4d["director"]) {
                                            var _0x17739e = getById("label_" + _0x78c086);
                                            if (_0x531b4d[_0xca9070(0x931)]) (_0x17739e[_0xca9070(0x471)] = _0x531b4d[_0xca9070(0x931)]), _0x17739e[_0xca9070(0x23d)][_0xca9070(0x2c0)](_0xca9070(0x866));
                                            else
                                                _0x531b4d[_0xca9070(0x82d)] === _0x78c086
                                                    ? ((_0x17739e[_0xca9070(0x471)] = miscTranslations[_0xca9070(0x995)]), _0x17739e[_0xca9070(0x23d)][_0xca9070(0x2c0)](_0xca9070(0x866)))
                                                    : ((_0x17739e[_0xca9070(0x471)] = miscTranslations[_0xca9070(0x6e1)]), _0x17739e[_0xca9070(0x23d)][_0xca9070(0x6e9)](_0xca9070(0x866)));
                                        } else _0x531b4d["showlabels"] && updateMixer();
                                        !_0x531b4d["director"] && (_0x531b4d[_0xca9070(0x931)] ? (document[_0xca9070(0x151)] = _0x531b4d[_0xca9070(0x931)]) : (document["title"] = location[_0xca9070(0x7b7)]));
                                        var _0x1a943c = encodeURIComponent(_0x531b4d[_0xca9070(0x931)]);
                                        urlParams[_0xca9070(0x321)]("l") ? updateURL("l=" + _0x1a943c, !![], ![]) : updateURL(_0xca9070(0x852) + _0x1a943c, !![], ![]);
                                        var _0x7a5b02 = {};
                                        (_0x7a5b02["changeLabel"] = !![]), (_0x7a5b02[_0xca9070(0x857)] = _0x531b4d[_0xca9070(0x931)]), _0x531b4d[_0xca9070(0x822)](_0x7a5b02);
                                    } else {
                                        _0x531b4d[_0xca9070(0x931)] = ![];
                                        var _0x7a5b02 = {};
                                        (_0x7a5b02[_0xca9070(0x327)] = !![]), (_0x7a5b02["value"] = _0x531b4d[_0xca9070(0x931)]), _0x531b4d[_0xca9070(0x822)](_0x7a5b02);
                                        if (_0x531b4d["director"]) {
                                            var _0x17739e = getById("label_" + _0x78c086);
                                            _0x531b4d[_0xca9070(0x82d)] === _0x78c086
                                                ? ((_0x17739e[_0xca9070(0x471)] = miscTranslations[_0xca9070(0x995)]), _0x17739e[_0xca9070(0x23d)]["remove"](_0xca9070(0x866)))
                                                : ((_0x17739e[_0xca9070(0x471)] = miscTranslations[_0xca9070(0x6e1)]), _0x17739e["classList"][_0xca9070(0x6e9)](_0xca9070(0x866)));
                                        } else _0x531b4d[_0xca9070(0x225)] ? ((document[_0xca9070(0x151)] = location["hostname"]), updateMixer()) : (document[_0xca9070(0x151)] = location[_0xca9070(0x7b7)]);
                                    }
                                }
                            }
                            if (_0xca9070(0x1c2) in _0x13a38f) {
                                if (_0x13a38f[_0xca9070(0x8c2)] == "low") changeLowEQ(parseFloat(_0x13a38f[_0xca9070(0x857)]), _0x13a38f[_0xca9070(0x88b)]);
                                else {
                                    if (_0x13a38f[_0xca9070(0x8c2)] == _0xca9070(0x8e3)) changeMidEQ(parseFloat(_0x13a38f[_0xca9070(0x857)]), _0x13a38f[_0xca9070(0x88b)]);
                                    else _0x13a38f[_0xca9070(0x8c2)] == _0xca9070(0x673) && changeHighEQ(parseFloat(_0x13a38f[_0xca9070(0x857)]), _0x13a38f["track"]);
                                }
                            }
                            if ("requestChangeGating" in _0x13a38f) {
                                var _0x326d5 = _0x531b4d[_0xca9070(0x2c4)];
                                if (_0x13a38f["value"] === _0xca9070(0x954)) (_0x531b4d[_0xca9070(0x2c4)] = ![]), log(_0xca9070(0x152));
                                else _0x13a38f[_0xca9070(0x857)] === _0xca9070(0xa28) ? ((_0x531b4d["noisegate"] = !![]), log(_0xca9070(0x5d5))) : (_0x531b4d[_0xca9070(0x2c4)] = _0x13a38f[_0xca9070(0x857)]);
                                _0x531b4d[_0xca9070(0x2c4)] !== _0x326d5 && senderAudioUpdate();
                            }
                            if (_0xca9070(0x45c) in _0x13a38f) {
                                var _0x326d5 = _0x531b4d[_0xca9070(0x47f)];
                                if (_0x13a38f[_0xca9070(0x857)] === "false") (_0x531b4d[_0xca9070(0x47f)] = ![]), log(_0xca9070(0x152));
                                else {
                                    if (_0x13a38f["value"] === "1") (_0x531b4d[_0xca9070(0x47f)] = 0x1), log(_0xca9070(0x5d5));
                                    else _0x13a38f["value"] === "2" ? ((_0x531b4d[_0xca9070(0x47f)] = 0x2), log(_0xca9070(0x5d5))) : (_0x531b4d[_0xca9070(0x47f)] = parseInt(_0x13a38f["value"]) || ![]);
                                }
                                _0x531b4d[_0xca9070(0x47f)] !== _0x326d5 && senderAudioUpdate();
                            }
                            _0xca9070(0x3cd) in _0x13a38f &&
                                (_0x531b4d[_0xca9070(0x3ce)] === ![]
                                    ? ((_0x531b4d[_0xca9070(0x3ce)] = parseInt(_0x13a38f[_0xca9070(0x857)]) || 0x0), senderAudioUpdate())
                                    : ((_0x531b4d[_0xca9070(0x3ce)] = parseInt(_0x13a38f[_0xca9070(0x857)]) || 0x0), changeMicDelay(_0x531b4d[_0xca9070(0x3ce)], _0x13a38f["deviceId"])));
                            _0xca9070(0x980) in _0x13a38f && changeSubGain(parseFloat(_0x13a38f[_0xca9070(0x857)]), _0x13a38f[_0xca9070(0x2e1)]);
                            _0xca9070(0x3d8) in _0x13a38f && _0x531b4d[_0xca9070(0x5a7)] && lowerhand();
                            if (_0xca9070(0x80b) in _0x13a38f) {
                                var _0x7a5b02 = {};
                                (_0x7a5b02[_0xca9070(0x49f)] = _0x78c086), (_0x7a5b02[_0xca9070(0x8a3)] = listAudioSettingsPrep()), sendMediaDevices(_0x7a5b02[_0xca9070(0x49f)]), _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x7a5b02["UUID"]);
                            }
                            if ("getVideoSettings" in _0x13a38f) {
                                var _0x7a5b02 = {};
                                (_0x7a5b02[_0xca9070(0x49f)] = _0x78c086),
                                    (_0x7a5b02[_0xca9070(0x5b5)] = listVideoSettingsPrep()),
                                    sendMediaDevices(_0x7a5b02[_0xca9070(0x49f)]),
                                    _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x7a5b02[_0xca9070(0x49f)]);
                            }
                            "changeSpeaker" in _0x13a38f && changeAudioOutputDeviceById(_0x13a38f[_0xca9070(0x90f)], _0x78c086);
                            _0xca9070(0x362) in _0x13a38f && changeAudioDeviceById(_0x13a38f[_0xca9070(0x362)], _0x78c086);
                            _0xca9070(0x485) in _0x13a38f && changeVideoDeviceById(_0x13a38f[_0xca9070(0x485)], _0x78c086);
                            "requestVideoHack" in _0x13a38f &&
                                (_0xca9070(0x555) in _0x13a38f && _0x13a38f[_0xca9070(0x555)]
                                    ? updateCameraConstraints(_0x13a38f["keyname"], _0x13a38f[_0xca9070(0x857)], !![], _0x78c086)
                                    : updateCameraConstraints(_0x13a38f[_0xca9070(0x8c2)], _0x13a38f[_0xca9070(0x857)], ![], ![]));
                            _0xca9070(0x232) in _0x13a38f && changeLowCut(parseFloat(_0x13a38f[_0xca9070(0x857)]), _0x13a38f[_0xca9070(0x88b)]);
                            "requestChangeLowcut" in _0x13a38f && changeLowCut(parseFloat(_0x13a38f[_0xca9070(0x857)]), _0x13a38f[_0xca9070(0x88b)]);
                            "hangup" in _0x13a38f && _0x531b4d["directorUUID"] && _0x531b4d[_0xca9070(0x2ce)]();
                            if (_0xca9070(0x643) in _0x13a38f) {
                            }
                            if ("volume" in _0x13a38f) {
                                var _0x477f37 = parseInt(_0x13a38f[_0xca9070(0x9da)]) / 0x64 || 0x0;
                                _0x531b4d[_0xca9070(0x3b9)] = parseInt(_0x13a38f[_0xca9070(0x9da)]) || 0x0;
                                try {
                                    for (var _0x4ca733 in _0x531b4d["webAudios"]) {
                                        log("Adjusting\x20Gain;\x20only\x20track\x200\x20in\x20all\x20likely\x20hood,\x20unless\x20more\x20than\x20track\x200\x20support\x20is\x20added."),
                                            _0x531b4d[_0xca9070(0x4b4)][_0x4ca733][_0xca9070(0xa3d)][_0xca9070(0x182)][_0xca9070(0x8e2)](_0x477f37, _0x531b4d[_0xca9070(0x4b4)][_0x4ca733][_0xca9070(0x19e)][_0xca9070(0xa1e)]);
                                    }
                                } catch (_0x1f73da) {}
                                updateVolume(!![]);
                            }
                            if ("micIsolate" in _0x13a38f) {
                                if (_0x13a38f[_0xca9070(0x51a)]) _0x531b4d[_0xca9070(0x308)]["indexOf"](_0x78c086) >= 0x0 && (_0x531b4d["micIsolated"][_0xca9070(0x874)](_0x78c086), _0x531b4d[_0xca9070(0x572)]());
                                else {
                                    var _0x33aad5 = _0x531b4d[_0xca9070(0x8c6)][_0xca9070(0x438)](_0x78c086);
                                    _0x33aad5 > -0x1 && (_0x531b4d[_0xca9070(0x8c6)][_0xca9070(0x322)](_0x33aad5, 0x1), _0x531b4d["applyIsolatedChat"]());
                                }
                            }
                            if (_0xca9070(0x380) in _0x13a38f) {
                                if (_0x13a38f["lowerVolume"]) _0x531b4d[_0xca9070(0x308)][_0xca9070(0x438)](_0x78c086) >= 0x0 && (_0x531b4d[_0xca9070(0x380)][_0xca9070(0x874)](_0x78c086), _0x531b4d[_0xca9070(0x614)]());
                                else {
                                    var _0x33aad5 = _0x531b4d[_0xca9070(0x380)][_0xca9070(0x438)](_0x78c086);
                                    _0x33aad5 > -0x1 && (_0x531b4d[_0xca9070(0x380)]["splice"](_0x33aad5, 0x1), _0x531b4d["applyIsolatedVolume"]());
                                }
                            }
                            _0xca9070(0x87c) in _0x13a38f &&
                                (_0x13a38f[_0xca9070(0x87c)] ? ((_0x531b4d["directorSpeakerMuted"] = !![]), _0x531b4d[_0xca9070(0x5da)]()) : ((_0x531b4d["directorSpeakerMuted"] = ![]), _0x531b4d[_0xca9070(0x5da)]()));
                            _0xca9070(0x425) in _0x13a38f && (_0x13a38f["displayMute"] ? ((_0x531b4d[_0xca9070(0x984)] = !![]), _0x531b4d["directorDisplayMute"]()) : ((_0x531b4d[_0xca9070(0x984)] = ![]), _0x531b4d[_0xca9070(0x8d3)]()));
                            if ("remoteVideoMuted" in _0x13a38f) {
                                (_0x531b4d[_0xca9070(0x4cb)] = _0x13a38f[_0xca9070(0x4cb)]), toggleVideoMute(!![]);
                                if (!_0x531b4d["videoMuted"]) {
                                    var _0x7a5b02 = {};
                                    (_0x7a5b02[_0xca9070(0x912)] = _0x531b4d[_0xca9070(0x4cb)]), _0x531b4d[_0xca9070(0x822)](_0x7a5b02);
                                }
                            }
                            _0xca9070(0x6e2) in _0x13a38f && applyNewParams(_0x13a38f[_0xca9070(0x6e2)]);
                        }
                        if (_0x531b4d[_0xca9070(0x82d)] === _0x78c086) {
                            _0x13a38f["request"] === "migrate" &&
                                (warnlog(_0xca9070(0x1d4)),
                                _0xca9070(0x14f) in _0x13a38f &&
                                    (_0xca9070(0x8e0) in _0x13a38f["transferSettings"] && (_0x531b4d[_0xca9070(0x8e0)] = _0x13a38f[_0xca9070(0x8e0)]),
                                    "broadcast" in _0x13a38f[_0xca9070(0x14f)] &&
                                        (_0x13a38f["transferSettings"][_0xca9070(0x6e8)] === !![] || _0x13a38f["transferSettings"]["broadcast"] === null
                                            ? ((_0x531b4d[_0xca9070(0x6e8)] = null),
                                              _0x531b4d[_0xca9070(0x4fd)] === ![] && (_0x531b4d["minipreview"] = 0x2),
                                              _0x531b4d["style"] === ![] && (_0x531b4d[_0xca9070(0xa19)] = 0x1),
                                              _0x531b4d["showList"] === null && (_0x531b4d["showList"] = !![]))
                                            : (_0x531b4d["broadcast"] = _0x13a38f[_0xca9070(0x14f)]["broadcast"]),
                                        _0x13a38f[_0xca9070(0x14f)]["updateurl"] && (_0x531b4d[_0xca9070(0x6e8)] !== ![] ? updateURL(_0xca9070(0x6e8), !![]) : updateURL(_0xca9070(0x91a), !![]))),
                                    _0xca9070(0x875) in _0x13a38f[_0xca9070(0x14f)] &&
                                        ((_0x531b4d[_0xca9070(0x875)] = _0x13a38f[_0xca9070(0x14f)]["roomid"]), _0x13a38f[_0xca9070(0x14f)][_0xca9070(0x452)] && updateURL("room=" + _0x531b4d[_0xca9070(0x875)], !![]))));
                            try {
                                if (_0xca9070(0x81e) in _0x13a38f && _0xca9070(0x297) in _0x13a38f["directorSettings"])
                                    for (var _0x2b1c2c = 0x0; _0x2b1c2c < _0x13a38f[_0xca9070(0x81e)][_0xca9070(0x297)][_0xca9070(0x1bf)]; _0x2b1c2c++) {
                                        if (!_0x531b4d[_0xca9070(0x308)][_0xca9070(0x42d)](_0x13a38f[_0xca9070(0x81e)]["addCoDirector"][_0x2b1c2c]["toString"])) {
                                            _0x531b4d["directorList"][_0xca9070(0x874)](_0x13a38f[_0xca9070(0x81e)]["addCoDirector"][_0x2b1c2c][_0xca9070(0x193)]());
                                            var _0x525954 = getById(_0xca9070(0x661) + _0x13a38f["directorSettings"][_0xca9070(0x297)][_0x2b1c2c][_0xca9070(0x193)]());
                                            _0x525954 && _0x525954[_0xca9070(0x23d)][_0xca9070(0x6e9)]("directorBlue");
                                        }
                                    }
                            } catch (_0x4ae51c) {
                                errorlog(_0x4ae51c);
                            }
                        }
                        if ("zoom" in _0x13a38f) {
                            if (_0x531b4d[_0xca9070(0x9af)]) {
                                if (_0xca9070(0x9af) in _0x13a38f && _0x13a38f["remote"] === _0x531b4d[_0xca9070(0x9af)] && _0x531b4d[_0xca9070(0x9af)]) _0x531b4d[_0xca9070(0x50e)](parseFloat(_0x13a38f[_0xca9070(0x144)]));
                                else _0x531b4d[_0xca9070(0x9af)] === !![] && _0x531b4d["remoteZoom"](parseFloat(_0x13a38f[_0xca9070(0x144)]));
                            } else {
                                if (_0x531b4d[_0xca9070(0x308)][_0xca9070(0x438)](_0x78c086) >= 0x0) _0x531b4d[_0xca9070(0x50e)](parseFloat(_0x13a38f[_0xca9070(0x144)]));
                                else return;
                            }
                        }
                        if ("focus" in _0x13a38f) {
                            if (_0x531b4d[_0xca9070(0x9af)]) {
                                if (_0xca9070(0x9af) in _0x13a38f && _0x13a38f[_0xca9070(0x9af)] === _0x531b4d[_0xca9070(0x9af)] && _0x531b4d["remote"]) _0x531b4d[_0xca9070(0x4dc)](parseFloat(_0x13a38f["focus"]));
                                else _0x531b4d[_0xca9070(0x9af)] === !![] && _0x531b4d["remoteFocus"](parseFloat(_0x13a38f[_0xca9070(0x337)]));
                            } else {
                                if (_0x531b4d[_0xca9070(0x308)][_0xca9070(0x438)](_0x78c086) >= 0x0) _0x531b4d["remoteFocus"](parseFloat(_0x13a38f[_0xca9070(0x337)]));
                                else return;
                            }
                        }
                        if (_0xca9070(0x41a) in _0x13a38f) {
                            log(_0xca9070(0x41a));
                            try {
                                _0x531b4d[_0xca9070(0x799)](_0x78c086, _0x13a38f[_0xca9070(0x41a)]);
                            } catch (_0x1cbea0) {
                                errorlog(_0x1cbea0);
                            }
                        }
                        _0xca9070(0x8c1) in _0x13a38f && playbackMIDI(_0x13a38f[_0xca9070(0x8c1)], !![]);
                    } catch (_0x2ed064) {
                        errorlog(_0x2ed064);
                    }
                    if (_0xca9070(0xa1a) in _0x13a38f) {
                        if (_0x13a38f["rejected"] == _0xca9070(0x40b)) {
                            if (_0x531b4d[_0xca9070(0x9af)]) warnUser(miscTranslations[_0xca9070(0x91d)], 0xbb8);
                            else
                                document[_0xca9070(0x1f5)](_0xca9070(0x9a2)) && document[_0xca9070(0x1f5)]("#obsRemotePassword>input")[_0xca9070(0x857)]
                                    ? warnUser(miscTranslations[_0xca9070(0x631)], 0x1b58)
                                    : warnUser(miscTranslations["request-rejected-obs"], 0x2710);
                            getById(_0xca9070(0x257))["classList"][_0xca9070(0x2c0)](_0xca9070(0x98b));
                        } else {
                            if (_0x531b4d[_0xca9070(0x276)]) !_0x531b4d[_0xca9070(0x2d4)] && warnUser(_0xca9070(0x6a2) + _0x13a38f[_0xca9070(0xa1a)] + _0xca9070(0x486), 0x1388);
                            else !_0x531b4d[_0xca9070(0x2d4)] && (_0x531b4d[_0xca9070(0x9af)] ? warnUser("remote-token-rejected", 0x1388) : warnUser(_0xca9070(0x5e0), 0x1388));
                        }
                        errorlog(_0xca9070(0x306) + _0x13a38f[_0xca9070(0xa1a)] + _0xca9070(0x461) + _0x531b4d[_0xca9070(0x276)]), pokeIframeAPI("rejected", _0x13a38f["rejected"], _0x78c086);
                        return;
                    } else {
                        if (_0xca9070(0x64a) in _0x13a38f) {
                            log(_0xca9070(0x189) + _0x13a38f[_0xca9070(0x64a)]), pokeIframeAPI("approved", _0x13a38f["approved"], _0x78c086);
                            return;
                        }
                    }
                    if (_0xca9070(0x9bb) in _0x13a38f || "video" in _0x13a38f) {
                        log(_0xca9070(0x909));
                        _0x13a38f["audio"] && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x16e)] = !![]);
                        if (_0x531b4d[_0xca9070(0x4bb)] && _0xca9070(0x433) in _0x13a38f && _0x13a38f["allowwebp"] !== ![])
                            (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x15a)] = _0x13a38f[_0xca9070(0x433)]),
                                (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x993)] = ![]),
                                setTimeout(function () {
                                    makeImages(!![]);
                                }, 0x3e8);
                        else _0x13a38f["video"] && (_0x531b4d["pcs"][_0x78c086]["allowVideo"] = !![]);
                        _0xca9070(0x6e8) in _0x13a38f && _0x13a38f[_0xca9070(0x6e8)] !== ![] && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x9d2)] = _0x13a38f[_0xca9070(0x6e8)]);
                        _0xca9070(0x33a) in _0x13a38f && _0x13a38f[_0xca9070(0x33a)] !== ![] && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x1c7)] = _0x13a38f[_0xca9070(0x33a)]);
                        _0xca9070(0x5cc) in _0x13a38f && _0x13a38f[_0xca9070(0x5cc)] !== ![] && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086]["allowIframe"] = _0x13a38f[_0xca9070(0x5cc)]);
                        _0xca9070(0x56b) in _0x13a38f && _0x13a38f[_0xca9070(0x56b)] !== ![] && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0xa09)] = _0x13a38f["widget"]);
                        _0xca9070(0x3ef) in _0x13a38f && _0x13a38f[_0xca9070(0x3ef)] !== ![] && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x3ed)] = _0x13a38f[_0xca9070(0x3ef)]);
                        _0xca9070(0x6ec) in _0x13a38f && _0x13a38f[_0xca9070(0x6ec)] !== ![] && (_0x531b4d["pcs"][_0x78c086][_0xca9070(0x77f)] = _0x13a38f[_0xca9070(0x6ec)]);
                        _0xca9070(0x459) in _0x13a38f && _0x13a38f["allowscreen"] !== ![] && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x1ba)] = !![]);
                        _0xca9070(0x6a4) in _0x13a38f && _0x13a38f[_0xca9070(0x6a4)] !== ![] && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086]["preferVideoCodec"] = _0x13a38f["preferVideoCodec"]["toLowerCase"]());
                        _0xca9070(0x2af) in _0x13a38f && _0x13a38f[_0xca9070(0x2af)] !== ![] && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x2af)] = _0x13a38f[_0xca9070(0x2af)][_0xca9070(0x5a5)]());
                        if (_0x531b4d[_0xca9070(0x389)]) {
                            if (_0x531b4d[_0xca9070(0x389)] == _0xca9070(0x211)) _0x531b4d["pcs"][_0x78c086]["allowVideo"] = ![];
                            else {
                                if (_0x531b4d[_0xca9070(0x389)] == _0xca9070(0x9bb)) _0x531b4d[_0xca9070(0x8cd)][_0x78c086]["allowAudio"] = ![];
                                else
                                    _0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x993)] == ![]
                                        ? (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x389)] = ![])
                                        : ((_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x16e)] = ![]), (_0x531b4d["pcs"][_0x78c086][_0xca9070(0x993)] = ![]));
                            }
                        }
                        if (_0x531b4d[_0xca9070(0x813)]) {
                            playtone(), window[_0xca9070(0x337)]();
                            var _0x4a8780 = ![];
                            _0x78c086 in _0x531b4d[_0xca9070(0x39e)] &&
                                _0x531b4d[_0xca9070(0x39e)][_0x78c086][_0xca9070(0x931)] &&
                                (_0x4a8780 = _0x531b4d["rpcs"][_0x78c086][_0xca9070(0x931)] || _0x531b4d[_0xca9070(0x39e)][_0x78c086]["streamID"] || ![]);
                            _0x4a8780 = _0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x931)] || _0x4a8780 || _0x531b4d["pcs"][_0x78c086]["streamID"] || _0x78c086 || _0xca9070(0x2d8);
                            var _0x2f5664 = await confirmAlt(_0x4a8780 + miscTranslations[_0xca9070(0x32b)], !![]);
                            if (!_0x2f5664) {
                                try {
                                    log(_0xca9070(0x23c)), _0x531b4d["closePC"](_0x78c086);
                                } catch (_0x507115) {}
                                return;
                            }
                        }
                        _0xca9070(0x599) in _0x13a38f &&
                            _0x13a38f["guest"] == !![] &&
                            ((_0x531b4d[_0xca9070(0x8cd)][_0x78c086]["guest"] = !![]),
                            _0x531b4d[_0xca9070(0x4f2)] && (playtone(![], _0xca9070(0x9dc)), showNotification(_0xca9070(0x864), "")),
                            pokeIframeAPI(_0xca9070(0x54d), _0x13a38f[_0xca9070(0x276)], _0x78c086));
                        _0xca9070(0x276) in _0x13a38f &&
                            _0x13a38f[_0xca9070(0x276)] == !![] &&
                            ((iOS || iPad) && _0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x6f7)] == !![] && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x599)] = !![]),
                            _0x531b4d[_0xca9070(0x4f2)] && (playtone(![], _0xca9070(0x9dc)), showNotification(_0xca9070(0x140), _0xca9070(0x41c))),
                            pokeIframeAPI(_0xca9070(0x7fd), _0x13a38f[_0xca9070(0x276)], _0x78c086));
                        _0xca9070(0x6f7) in _0x13a38f && _0x13a38f[_0xca9070(0x6f7)] === !![] && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086]["forceios"] = !![]);
                        _0xca9070(0x387) in _0x13a38f && _0x13a38f[_0xca9070(0x387)] == !![] && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086]["limitAudio"] = !![]);
                        "enhanceaudio" in _0x13a38f && _0x13a38f[_0xca9070(0x18c)] == !![] && (_0x531b4d["pcs"][_0x78c086]["enhanceAudio"] = !![]);
                        _0x13a38f[_0xca9070(0x1a9)] && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x3dc)] = _0x13a38f[_0xca9070(0x1a9)]);
                        if ("keyframeRate" in _0x13a38f)
                            try {
                                (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x28d)] = _0x13a38f["keyframeRate"]),
                                    _0x531b4d["pcs"][_0x78c086][_0xca9070(0x28d)] &&
                                        setTimeout(
                                            function (_0x30c6ae) {
                                                var _0x4ca831 = _0xca9070;
                                                _0x531b4d[_0x4ca831(0x977)](_0x30c6ae);
                                            },
                                            0x1388,
                                            _0x78c086
                                        );
                            } catch (_0x314716) {
                                warnlog(_0x314716);
                            }
                        _0xca9070(0x85e) in _0x13a38f && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x85e)] = _0x13a38f[_0xca9070(0x85e)]);
                        _0xca9070(0x291) in _0x13a38f && ((_0x531b4d[_0xca9070(0x8cd)][_0x78c086]["layout"] = _0x13a38f[_0xca9070(0x291)]), pokeIframeAPI("layout-enabled", _0x13a38f[_0xca9070(0x291)], _0x78c086));
                        if (_0xca9070(0x725) in _0x13a38f) {
                            if (_0x13a38f[_0xca9070(0x725)] !== ![]) {
                                try {
                                    typeof _0x13a38f[_0xca9070(0x725)] === _0xca9070(0x987)
                                        ? (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x725)] = _0x13a38f[_0xca9070(0x725)][_0xca9070(0x177)](/[\W]+/g, "_"))
                                        : (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x725)] = (parseInt(_0x13a38f["scene"]) || 0x0) + ""),
                                        (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x21d)][_0xca9070(0x725)] = _0x531b4d["pcs"][_0x78c086][_0xca9070(0x725)]),
                                        updateSceneList(_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x725)]);
                                } catch (_0x2ea656) {
                                    errorlog(_0x2ea656);
                                }
                                _0xca9070(0x925) in _0x13a38f && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x925)] = _0x13a38f[_0xca9070(0x925)]);
                                if (_0xca9070(0x925) in _0x13a38f && _0x13a38f[_0xca9070(0x925)]) _0x13a38f[_0xca9070(0x925)] == 0x2 && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x16e)] = ![]);
                                else {
                                    if (_0x531b4d[_0xca9070(0x276)] && _0x531b4d[_0xca9070(0x925)] == ![])
                                        (_0x531b4d[_0xca9070(0x8cd)][_0x78c086]["allowAudio"] = ![]),
                                            (_0x531b4d[_0xca9070(0x8cd)][_0x78c086]["allowVideo"] = ![]),
                                            (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x9e0)] = ![]),
                                            (_0x531b4d["pcs"][_0x78c086][_0xca9070(0xa09)] = ![]),
                                            (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x389)] = ![]),
                                            (_0x531b4d[_0xca9070(0x8cd)][_0x78c086]["allowWebp"] = ![]);
                                    else _0x531b4d[_0xca9070(0x276)] && (_0x531b4d[_0xca9070(0x925)] == 0x2 && (_0x531b4d[_0xca9070(0x8cd)][_0x78c086][_0xca9070(0x16e)] = ![]), (_0x531b4d[_0xca9070(0x8cd)][_0x78c086]["allowIframe"] = ![]));
                                }
                                _0x531b4d["pcs"][_0x78c086]["solo"] ? pokeIframeAPI(_0xca9070(0x9ee), _0x13a38f["scene"], _0x78c086) : pokeIframeAPI(_0xca9070(0x94c), _0x13a38f[_0xca9070(0x725)], _0x78c086);
                            }
                        }
                        if (_0x531b4d["director"] == !![]) {
                            var _0x7a5b02 = {};
                            (_0x7a5b02["directorSettings"] = getDirectorSettings(_0x531b4d[_0xca9070(0x8cd)][_0x78c086]["scene"])),
                                _0xca9070(0x276) in _0x13a38f && _0x13a38f["director"] == !![] && (_0x7a5b02[_0xca9070(0x9d7)] = getDetailedState()),
                                _0x531b4d[_0xca9070(0x822)](_0x7a5b02, _0x78c086);
                        }
                        _0x531b4d["initialPublish"](_0x78c086);
                    }
                }),
                (_0x531b4d[_0x232ebe(0x49a)] = function (_0x543da5) {
                    var _0xbf602c = _0x232ebe;
                    log(_0xbf602c(0x948) + _0x543da5);
                    if (_0x543da5 in _0x531b4d[_0xbf602c(0x8cd)]) {
                    } else {
                        errorlog(_0xbf602c(0x137));
                        return;
                    }
                    getSenders2(_0x543da5)["length"] && errorlog("PROBLEM,\x20Senders\x20is\x20more\x20than\x200:\x20" + getSenders2(_0x543da5)[_0xbf602c(0x1bf)]);
                    if (_0x531b4d["pcs"][_0x543da5]["allowIframe"] === !![]) {
                        if (_0x531b4d[_0xbf602c(0x56c)]) {
                            var _0x23ce9f = {};
                            (_0x23ce9f[_0xbf602c(0x56c)] = _0x531b4d["iframeSrc"]),
                                _0x531b4d["iframeEle"] &&
                                    _0x531b4d["iframeEle"][_0xbf602c(0x818)] &&
                                    _0x531b4d[_0xbf602c(0x56c)]["startsWith"]("https://www.youtube.com/") &&
                                    (_0x23ce9f[_0xbf602c(0x56c)] += "&start=" + parseInt(Math[_0xbf602c(0x78d)](_0x531b4d[_0xbf602c(0x559)][_0xbf602c(0x818)][_0xbf602c(0x2dc)]["t"])) + ""),
                                _0x531b4d["sendMessage"](_0x23ce9f, _0x543da5);
                        }
                    }
                    if (_0x531b4d[_0xbf602c(0x8cd)][_0x543da5][_0xbf602c(0xa09)] === !![]) {
                        if (_0x531b4d["widget"] && _0x531b4d[_0xbf602c(0x276)]) {
                            var _0x23ce9f = {};
                            (_0x23ce9f[_0xbf602c(0x6c3)] = _0x531b4d[_0xbf602c(0x56b)]), _0x531b4d["sendMessage"](_0x23ce9f, _0x543da5);
                        }
                    }
                    _0x531b4d[_0xbf602c(0x8cd)][_0x543da5][_0xbf602c(0x77f)] === !![] && _0x531b4d[_0xbf602c(0x2ff)](_0x543da5);
                    if (_0x531b4d[_0xbf602c(0x7ea)] && _0x531b4d[_0xbf602c(0x8cd)][_0x543da5][_0xbf602c(0x1c7)]) {
                        _0x531b4d[_0xbf602c(0x142)](_0x543da5);
                        return;
                    }
                    var _0x5f232f = _0x531b4d[_0xbf602c(0x5d3)]();
                    log(_0xbf602c(0x432)), log(_0x5f232f[_0xbf602c(0xa41)]());
                    if (_0x531b4d["meshcastSettings"] && _0x531b4d[_0xbf602c(0x8cd)][_0x543da5]["meshcast"] === null) {
                        _0x531b4d[_0xbf602c(0x8cd)][_0x543da5]["meshcast"] = !![];
                        var _0x23ce9f = {};
                        (_0x23ce9f[_0xbf602c(0x389)] = _0x531b4d[_0xbf602c(0x1d3)]), _0x531b4d[_0xbf602c(0x822)](_0x23ce9f, _0x543da5), warnlog(_0x23ce9f);
                    }
                    _0x531b4d[_0xbf602c(0x8cd)][_0x543da5][_0xbf602c(0x1ba)] && createSecondStream2(_0x543da5);
                    var _0x419c44 = ![];
                    _0x5f232f["getVideoTracks"]()[_0xbf602c(0x774)]((_0x2ab73e) => {
                        var _0x565ad8 = _0xbf602c;
                        try {
                            _0x531b4d["pcs"][_0x543da5]["allowVideo"] === !![] &&
                                _0x2ab73e[_0x565ad8(0x722)] == "video" &&
                                (_0x531b4d["pcs"][_0x543da5][_0x565ad8(0x599)] === !![] && _0x531b4d["roombitrate"] === 0x0
                                    ? log(_0x565ad8(0x5ba))
                                    : (_0x531b4d[_0x565ad8(0x8cd)][_0x543da5]["addTrack"](_0x2ab73e, _0x5f232f),
                                      warnlog("added\x20video\x20track"),
                                      (_0x419c44 = !![]),
                                      setTimeout(
                                          function (_0xf920c4) {
                                              var _0x5621dc = _0x565ad8;
                                              try {
                                                  _0x531b4d[_0x5621dc(0xa05)](_0xf920c4);
                                              } catch (_0x35a288) {
                                                  warnlog(_0x35a288);
                                              }
                                          },
                                          _0x531b4d[_0x565ad8(0x637)],
                                          _0x543da5
                                      )));
                        } catch (_0x33710f) {
                            errorlog(_0x33710f);
                        }
                    });
                    _0x531b4d[_0xbf602c(0x7c3)] && (_0x5f232f = mixMinusAudio(_0x543da5));
                    _0x531b4d[_0xbf602c(0x8cd)][_0x543da5][_0xbf602c(0x16e)] &&
                        (_0x5f232f[_0xbf602c(0x776)]()[_0xbf602c(0x774)]((_0x654ed9) => {
                            var _0x3e62a4 = _0xbf602c;
                            try {
                                _0x654ed9["kind"] == _0x3e62a4(0x9bb) && (_0x531b4d[_0x3e62a4(0x8cd)][_0x543da5]["addTrack"](_0x654ed9, _0x5f232f), warnlog(_0x3e62a4(0x4e3)));
                            } catch (_0x111c4f) {
                                errorlog(_0x111c4f);
                            }
                        }),
                        log(_0xbf602c(0x85b)),
                        _0x5f232f[_0xbf602c(0x776)]()[_0xbf602c(0x1bf)] &&
                            (_0x531b4d[_0xbf602c(0x276)] !== ![] && _0x531b4d[_0xbf602c(0x944)](),
                            log(_0xbf602c(0x581)),
                            _0x531b4d["pcs"][_0x543da5][_0xbf602c(0x2af)] == _0xbf602c(0x6d6) && lyraEncode(_0x543da5),
                            _0x531b4d["pcs"][_0x543da5][_0xbf602c(0x1f4)] === !![] && (warnlog(_0xbf602c(0x1d7)), setTimeout(_0x531b4d[_0xbf602c(0x759)], 0x3e8, _0x543da5, 0x7d00, 0x0)),
                            _0x531b4d["pcs"][_0x543da5][_0xbf602c(0x986)] === !![] && setTimeout(_0x531b4d[_0xbf602c(0x4ff)], 0x3e8, _0x543da5)));
                    if (_0x531b4d[_0xbf602c(0x8cd)][_0x543da5][_0xbf602c(0x3dc)]) setTimeout(_0x531b4d[_0xbf602c(0x3dc)], 0x3e8, _0x543da5, _0x531b4d[_0xbf602c(0x8cd)][_0x543da5][_0xbf602c(0x3dc)]);
                    else {
                        if (_0x531b4d["contentHint"] && SafariVersion) {
                            if (_0x531b4d[_0xbf602c(0x332)] == _0xbf602c(0x4b0)) setTimeout(_0x531b4d[_0xbf602c(0x3dc)], 0x3e8, _0x543da5, _0xbf602c(0xa24));
                            else _0x531b4d[_0xbf602c(0x332)] == "motion" && setTimeout(_0x531b4d["degradationPreference"], 0x3e8, _0x543da5, _0xbf602c(0xa00));
                        }
                    }
                    if (iOS || iPad) {
                        if (SafariVersion && SafariVersion <= 0xd) {
                        } else
                            _0x419c44 &&
                                (setTimeout(
                                    function (_0xb139ec) {
                                        var _0x598d89 = _0xbf602c;
                                        _0x531b4d[_0x598d89(0x620)](_0xb139ec, null);
                                    },
                                    0x7d0,
                                    _0x543da5
                                ),
                                setTimeout(
                                    function (_0x2060ae) {
                                        var _0x437ee8 = _0xbf602c,
                                            _0x30431d = _0x531b4d[_0x437ee8(0x829)](_0x2060ae);
                                        !_0x30431d && _0x531b4d[_0x437ee8(0x620)](_0x2060ae, 0x64);
                                    },
                                    0x1388,
                                    _0x543da5
                                ));
                    } else
                        setTimeout(
                            function (_0x314558) {
                                var _0x1bc585 = _0xbf602c;
                                _0x531b4d[_0x1bc585(0x829)](_0x314558);
                            },
                            0x3e8,
                            _0x543da5
                        );
                });
            function _0xbb0186(_0xa8cca9, _0x5561eb, _0x2071e8) {
                var _0x49798f = _0x232ebe,
                    _0x438ff2 = new Blob([_0xa8cca9], { type: _0x49798f(0x4bc) }),
                    _0x4caaa7 = new FileReader();
                (_0x4caaa7[_0x49798f(0x697)] = function (_0x2da47d) {
                    var _0x1d6a0e = _0x49798f;
                    _0x2071e8(_0x2da47d["target"][_0x1d6a0e(0x3db)]);
                }),
                    _0x4caaa7["readAsText"](_0x438ff2, _0x5561eb);
            }
            (_0x531b4d["provideFileList"] = function (_0x4a65ed) {
                var _0x3c3f71 = _0x232ebe;
                log(_0x3c3f71(0x494));
                if (!_0x531b4d[_0x3c3f71(0x7de)] || !_0x531b4d[_0x3c3f71(0x7de)][_0x3c3f71(0x1bf)]) return;
                var _0x364c58 = {},
                    _0x308fbc = [];
                for (var _0x2b3c66 = 0x0; _0x2b3c66 < _0x531b4d["hostedFiles"]["length"]; _0x2b3c66++) {
                    (_0x531b4d[_0x3c3f71(0x7de)][_0x2b3c66]["restricted"] === ![] || _0x531b4d[_0x3c3f71(0x7de)][_0x2b3c66][_0x3c3f71(0x1cd)] === _0x4a65ed) &&
                        _0x308fbc[_0x3c3f71(0x874)]({ id: _0x531b4d[_0x3c3f71(0x7de)][_0x2b3c66]["id"], name: _0x531b4d["hostedFiles"][_0x2b3c66]["name"], size: _0x531b4d[_0x3c3f71(0x7de)][_0x2b3c66][_0x3c3f71(0x2c9)] });
                }
                _0x364c58[_0x3c3f71(0x9a4)] = _0x308fbc;
                if (_0x4a65ed in _0x531b4d[_0x3c3f71(0x8cd)]) _0x531b4d[_0x3c3f71(0x822)](_0x364c58, _0x4a65ed);
                else _0x4a65ed in _0x531b4d[_0x3c3f71(0x39e)] && _0x531b4d[_0x3c3f71(0x1a7)](_0x364c58, _0x4a65ed);
                log(_0x364c58);
            }),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x4ec)] = function (_0x467b9a) {
                    var _0xd9c631 = _0x232ebe;
                    if (!(_0x1e2455 in _0x531b4d[_0xd9c631(0x8cd)])) return;
                    try {
                        if (this[_0xd9c631(0x2da)] === "closed") log("ICE\x20closed?");
                        else {
                            if (this["iceConnectionState"] === "disconnected") log(_0xd9c631(0x384));
                            else {
                                if (this[_0xd9c631(0x2da)] === _0xd9c631(0x2d2))
                                    log(_0xd9c631(0x6d7)), _0x531b4d[_0xd9c631(0x8cd)][_0x1e2455][_0xd9c631(0x9bf)] ? _0x531b4d[_0xd9c631(0x8cd)][_0x1e2455][_0xd9c631(0x9bf)]() : _0x531b4d[_0xd9c631(0x5ac)](_0x1e2455, !![]);
                                else this[_0xd9c631(0x2da)] === "connected" ? log("iceConnectionState\x20==\x20connected") : log(this["iceConnectionState"]);
                            }
                        }
                    } catch (_0x24821e) {
                        errorlog(_0x24821e);
                    }
                }),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455][_0x232ebe(0x6b4)] = function (_0x193a0c) {
                    var _0x2258a7 = _0x232ebe;
                    switch (_0x531b4d[_0x2258a7(0x8cd)][_0x1e2455]["connectionState"]) {
                        case _0x2258a7(0x4cf):
                            log(_0x2258a7(0x9d3)), clearTimeout(_0x531b4d[_0x2258a7(0x8cd)][_0x1e2455]["closeTimeout"]);
                            if (_0x531b4d[_0x2258a7(0x820)]) {
                                if (_0x531b4d["ws"][_0x2258a7(0x6f8)] !== 0x1) {
                                    _0x531b4d["ws"][_0x2258a7(0x36e)]();
                                    break;
                                }
                                _0x531b4d["ws"][_0x2258a7(0x36e)](),
                                    setTimeout(function () {
                                        var _0x303acd = _0x2258a7;
                                        _0x531b4d[_0x303acd(0x2d4)] != !![] && warnUser(miscTranslations["remote-peer-connected"]);
                                    }, 0x1);
                            }
                            break;
                        case _0x2258a7(0x158):
                            log(_0x2258a7(0x1d9)),
                                clearTimeout(_0x531b4d["pcs"][_0x1e2455][_0x2258a7(0x63e)]),
                                (_0x531b4d[_0x2258a7(0x8cd)][_0x1e2455][_0x2258a7(0x63e)] = setTimeout(
                                    function (_0x23f9ec) {
                                        var _0xf1dfc3 = _0x2258a7;
                                        _0x23f9ec in _0x531b4d[_0xf1dfc3(0x8cd)]
                                            ? (warnlog(_0xf1dfc3(0x6fe)), log("closing\x2014"), _0x531b4d["closePC"](_0x23f9ec))
                                            : errorlog("\x20---\x20PC\x20TIMED\x20OUT\x20and\x20already\x20deleted.\x20shouldn\x27t\x20happen");
                                    },
                                    0x2710,
                                    _0x1e2455
                                ));
                            break;
                        case _0x2258a7(0x2d2):
                            warnlog("Setting\x20pc\x20connection\x20timeout\x20in\x205\x20seconds\x20??"),
                                clearTimeout(_0x531b4d[_0x2258a7(0x8cd)][_0x1e2455][_0x2258a7(0x63e)]),
                                (_0x531b4d[_0x2258a7(0x8cd)][_0x1e2455][_0x2258a7(0x63e)] = setTimeout(
                                    function (_0x5aa8df) {
                                        var _0x2773b6 = _0x2258a7;
                                        _0x5aa8df in _0x531b4d[_0x2773b6(0x8cd)]
                                            ? (warnlog("\x20---\x20PC\x20TIMED\x20OUT,\x20but\x20still\x20alive.\x20Killing\x20it."), log(_0x2773b6(0x369)), _0x531b4d["closePC"](_0x5aa8df))
                                            : errorlog(_0x2773b6(0x4ee));
                                    },
                                    0xbb8,
                                    _0x1e2455
                                ));
                            break;
                        case "closed":
                            warnlog(_0x2258a7(0x1e6)), log(_0x2258a7(0x773)), _0x531b4d["closePC"](_0x1e2455);
                            break;
                        default:
                            log(_0x2258a7(0x3ab) + _0x531b4d[_0x2258a7(0x8cd)][_0x1e2455][_0x2258a7(0x53a)]), clearTimeout(_0x531b4d["pcs"][_0x1e2455][_0x2258a7(0x63e)]);
                            break;
                    }
                }),
                (_0x531b4d[_0x232ebe(0x8cd)][_0x1e2455]["onclose"] = function (_0x3604bf) {
                    var _0x450d55 = _0x232ebe;
                    warnlog(_0x450d55(0x647)), log("closing\x2019"), _0x531b4d[_0x450d55(0x790)](_0x1e2455);
                }),
                (_0x531b4d["pcs"][_0x1e2455][_0x232ebe(0x2d6)] = function _0x351242() {
                    var _0x22cb22 = _0x232ebe;
                    log(_0x22cb22(0x7b9));
                });
        }),
        (_0x531b4d[_0x4e3749(0x330)] = function (_0x41fc8e) {
            var _0x107ef7 = _0x4e3749,
                _0x1264d9 = _0x41fc8e[_0x107ef7(0x49f)];
            if (_0x41fc8e[_0x107ef7(0x662)]["type"] == "offer") _0x531b4d["setupIncoming"](_0x41fc8e), _0x531b4d["connectPeer"](_0x41fc8e);
            else
                try {
                    if (!(_0x41fc8e[_0x107ef7(0x49f)] in _0x531b4d[_0x107ef7(0x8cd)])) return;
                    var _0x26ab9f = _0x531b4d[_0x107ef7(0x7a0)];
                    if (_0x531b4d[_0x107ef7(0x6fb)] && _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e["UUID"]]["guest"] == !![] && _0x531b4d["pcs"][_0x41fc8e[_0x107ef7(0x49f)]]["forceios"] == ![]) {
                        if (_0x26ab9f === ![] || _0x26ab9f > _0x531b4d[_0x107ef7(0x5bf)]) {
                            var _0x19025b = Object[_0x107ef7(0x440)](_0x531b4d[_0x107ef7(0x8cd)])[_0x107ef7(0x1bf)];
                            if (_0x531b4d["flagship"]) _0x26ab9f = _0x531b4d["maxMobileBitrate"];
                            else {
                                if (_0x19025b > 0x4) _0x26ab9f = _0x531b4d[_0x107ef7(0x992)];
                                else (iOS || iPad) && SafariVersion && SafariVersion <= 0xd ? (_0x26ab9f = _0x531b4d[_0x107ef7(0x992)]) : (_0x26ab9f = _0x531b4d[_0x107ef7(0x5bf)]);
                            }
                        }
                        if (iOS || iPad) {
                            if (_0x26ab9f !== ![]) {
                                if (_0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x7e2)] === ![])
                                    (_0x531b4d["pcs"][_0x41fc8e[_0x107ef7(0x49f)]]["setBitrate"] = _0x26ab9f),
                                        (_0x41fc8e[_0x107ef7(0x662)]["sdp"] = CodecsHandler[_0x107ef7(0x5d8)](_0x41fc8e["description"][_0x107ef7(0x537)], _0x107ef7(0x17a))),
                                        (_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)] = CodecsHandler[_0x107ef7(0x1f3)](_0x41fc8e[_0x107ef7(0x662)]["sdp"], { min: parseInt(_0x26ab9f / 0xa) || 0x1, max: _0x26ab9f }));
                                else
                                    _0x531b4d["pcs"][_0x41fc8e[_0x107ef7(0x49f)]]["savedBitrate"] > _0x26ab9f &&
                                        ((_0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x8ca)] = _0x26ab9f),
                                        (_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)] = CodecsHandler["preferCodec"](_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)], _0x107ef7(0x17a))),
                                        (_0x41fc8e[_0x107ef7(0x662)]["sdp"] = CodecsHandler["setVideoBitrates"](_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)], { min: parseInt(_0x26ab9f / 0xa) || 0x1, max: _0x26ab9f })));
                                _0x26ab9f = ![];
                            }
                        }
                    } else {
                        if (_0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]]["guest"] == !![])
                            _0x26ab9f !== ![] ? _0x531b4d[_0x107ef7(0x346)] !== ![] && _0x531b4d[_0x107ef7(0x346)] < _0x26ab9f && (_0x26ab9f = _0x531b4d["roombitrate"]) : (_0x26ab9f = _0x531b4d[_0x107ef7(0x346)]),
                                (iOS || iPad) && _0x531b4d["pcs"][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x6f7)] && (_0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e["UUID"]][_0x107ef7(0x71d)] = !![]);
                        else {
                            if (iOS || iPad) {
                                var _0x3cea27 = 0x0;
                                for (var _0x12c877 in _0x531b4d[_0x107ef7(0x8cd)]) {
                                    _0x41fc8e[_0x107ef7(0x49f)] !== _0x12c877 && _0x531b4d[_0x107ef7(0x8cd)][_0x12c877][_0x107ef7(0x71d)] === !![] && (_0x3cea27 += 0x1);
                                }
                                if (_0x3cea27 >= 0x3) {
                                    if (_0x531b4d["pcs"][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x6f7)])
                                        (_0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e["UUID"]][_0x107ef7(0x71d)] = !![]),
                                            _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e["UUID"]][_0x107ef7(0x6a4)] &&
                                                _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x6a4)] === "h264" &&
                                                ((_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)] = CodecsHandler[_0x107ef7(0x5d8)](_0x41fc8e["description"]["sdp"], _0x107ef7(0x2fc))),
                                                log(_0x107ef7(0x7a3) + _0x531b4d["pcs"][_0x41fc8e["UUID"]][_0x107ef7(0x6a4)] + "\x20as\x20preferred\x20codec\x20by\x20viewer\x20via\x20API"));
                                    else
                                        _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e["UUID"]][_0x107ef7(0x6a4)] && _0x531b4d["pcs"][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x6a4)] === _0x107ef7(0x2c7)
                                            ? ((_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)] = CodecsHandler[_0x107ef7(0x5d8)](_0x41fc8e["description"][_0x107ef7(0x537)], "vp9")),
                                              log(_0x107ef7(0x7a3) + _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x6a4)] + "\x20as\x20preferred\x20codec\x20by\x20viewer\x20via\x20API"),
                                              (_0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e["UUID"]][_0x107ef7(0x71d)] = ![]))
                                            : ((_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)] = CodecsHandler["preferCodec"](_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)], _0x107ef7(0x17a))),
                                              log("Setting\x20Codec\x20to\x20vp8"),
                                              (_0x531b4d["pcs"][_0x41fc8e["UUID"]]["encoder"] = ![]));
                                } else
                                    _0x531b4d["pcs"][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x6a4)] && _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x6a4)] !== _0x107ef7(0x2fc)
                                        ? _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e["UUID"]][_0x107ef7(0x6a4)] === _0x107ef7(0x2c7) || _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e["UUID"]][_0x107ef7(0x6a4)] === "vp8"
                                            ? ((_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)] = CodecsHandler[_0x107ef7(0x5d8)](
                                                  _0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)],
                                                  _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]]["preferVideoCodec"]
                                              )),
                                              log(_0x107ef7(0x7a3) + _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]]["preferVideoCodec"] + "\x20as\x20preferred\x20codec\x20by\x20viewer\x20via\x20API"),
                                              (_0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x71d)] = ![]))
                                            : (_0x531b4d["pcs"][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x71d)] = !![])
                                        : ((_0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x71d)] = !![]),
                                          _0x531b4d["pcs"][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x6a4)] &&
                                              _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x6a4)] === _0x107ef7(0x2fc) &&
                                              ((_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)] = CodecsHandler[_0x107ef7(0x5d8)](_0x41fc8e["description"][_0x107ef7(0x537)], _0x107ef7(0x2fc))),
                                              log(_0x107ef7(0x7a3) + _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x6a4)] + "\x20as\x20preferred\x20codec\x20by\x20viewer\x20via\x20API")));
                            } else
                                _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]]["preferVideoCodec"] &&
                                    ((_0x41fc8e["description"][_0x107ef7(0x537)] = CodecsHandler[_0x107ef7(0x5d8)](_0x41fc8e[_0x107ef7(0x662)]["sdp"], _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e["UUID"]][_0x107ef7(0x6a4)])),
                                    log("Trying\x20to\x20set\x20" + _0x531b4d["pcs"][_0x41fc8e["UUID"]][_0x107ef7(0x6a4)] + "\x20as\x20preferred\x20codec\x20by\x20viewer\x20via\x20API"));
                        }
                    }
                    if (_0x26ab9f) {
                        var _0x378bed = CodecsHandler[_0x107ef7(0x4f1)](_0x41fc8e[_0x107ef7(0x662)]["sdp"]);
                        log(_0x107ef7(0x5ea) + _0x378bed);
                        _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x7e2)] !== ![] && _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x7e2)] < _0x26ab9f && (_0x26ab9f = ![]);
                        if (_0x26ab9f === ![]) _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]]["setBitrate"] = _0x378bed;
                        else {
                            if (_0x378bed !== ![] && _0x378bed > _0x26ab9f) {
                                var _0x92e063 = CodecsHandler[_0x107ef7(0x289)](_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)]) || 0x0;
                                (_0x41fc8e[_0x107ef7(0x662)]["sdp"] = CodecsHandler[_0x107ef7(0x1f3)](_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)], { min: parseInt(_0x26ab9f / 0xa) || 0x1, max: parseInt(_0x26ab9f + _0x92e063 / 0x400) })),
                                    (_0x531b4d["pcs"][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x8ca)] = _0x26ab9f);
                            } else {
                                if (_0x378bed === ![]) {
                                    var _0x92e063 = CodecsHandler["getOpusBitrate"](_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)]) || 0x0;
                                    _0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)] = CodecsHandler[_0x107ef7(0x1f3)](_0x41fc8e[_0x107ef7(0x662)]["sdp"], {
                                        min: parseInt(_0x26ab9f / 0xa) || 0x1,
                                        max: parseInt(_0x26ab9f + _0x92e063 / 0x400),
                                    });
                                    if (_0x531b4d[_0x107ef7(0x4f7)] && _0x531b4d["outboundVideoBitrate"] > _0x26ab9f) _0x531b4d["pcs"][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x8ca)] = _0x26ab9f;
                                    else
                                        _0x531b4d[_0x107ef7(0x4f7)]
                                            ? (_0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e["UUID"]][_0x107ef7(0x8ca)] = _0x531b4d["outboundVideoBitrate"])
                                            : (_0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x7e2)] = 0x9c4);
                                } else _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x8ca)] = _0x378bed;
                            }
                        }
                    } else {
                        if (_0x531b4d[_0x107ef7(0x4f7)] !== ![]) {
                            var _0x378bed = CodecsHandler[_0x107ef7(0x4f1)](_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)]);
                            log(_0x107ef7(0x76b) + _0x378bed);
                            if (_0x378bed === ![]) {
                                var _0x92e063 = CodecsHandler["getOpusBitrate"](_0x41fc8e["description"][_0x107ef7(0x537)]) || 0x0;
                                _0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)] = CodecsHandler[_0x107ef7(0x1f3)](_0x41fc8e[_0x107ef7(0x662)]["sdp"], {
                                    min: parseInt(_0x531b4d["outboundVideoBitrate"] / 0xa) || 0x1,
                                    max: parseInt(_0x531b4d[_0x107ef7(0x4f7)] + _0x92e063 / 0x400),
                                });
                            } else _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e["UUID"]]["setBitrate"] === ![] && (_0x531b4d["pcs"][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x8ca)] = _0x378bed);
                        } else
                            _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x8ca)] === ![] &&
                                ((_0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]]["setBitrate"] = CodecsHandler["getVideoBitrates"](_0x41fc8e["description"][_0x107ef7(0x537)])),
                                log(_0x107ef7(0x230) + _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e["UUID"]][_0x107ef7(0x8ca)]));
                    }
                    _0x531b4d["outboundAudioBitrate"] &&
                        (_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)] = CodecsHandler["setOpusAttributes"](_0x41fc8e[_0x107ef7(0x662)][_0x107ef7(0x537)], {
                            maxaveragebitrate: _0x531b4d[_0x107ef7(0x763)] * 0x400,
                            cbr: _0x531b4d[_0x107ef7(0x451)],
                        }));
                    if (_0x107ef7(0x6df) in _0x41fc8e && _0x41fc8e[_0x107ef7(0x6df)] != _0x531b4d[_0x107ef7(0x8cd)][_0x41fc8e[_0x107ef7(0x49f)]][_0x107ef7(0x6df)]) {
                        errorlog(_0x107ef7(0x13c));
                        return;
                    }
                    _0x531b4d["pcs"][_0x41fc8e["UUID"]][_0x107ef7(0x1d2)](_0x41fc8e[_0x107ef7(0x662)])[_0x107ef7(0x741)]()[_0x107ef7(0x524)](errorlog);
                } catch (_0x837da6) {
                    errorlog(_0x837da6);
                }
        }),
        (_0x531b4d[_0x4e3749(0x394)] = function (_0x4c9dad) {
            var _0x4f2ea4 = _0x4e3749;
            _0x531b4d[_0x4f2ea4(0x7f4)] && _0x4f2ea4(0x190) in _0x4c9dad
                ? _0x531b4d[_0x4f2ea4(0x8d4)](_0x4c9dad[_0x4f2ea4(0x662)], _0x4c9dad[_0x4f2ea4(0x190)])["then"](function (_0x19157d) {
                      var _0x169c15 = _0x4f2ea4;
                      (_0x4c9dad[_0x169c15(0x662)] = JSON[_0x169c15(0x59c)](_0x19157d)), _0x531b4d[_0x169c15(0x330)](_0x4c9dad);
                  })
                : _0x531b4d[_0x4f2ea4(0x330)](_0x4c9dad);
        }),
        (_0x531b4d[_0x4e3749(0x37b)] = function (_0x267a34) {
            var _0x43f18f = _0x4e3749;
            _0x531b4d["password"] && _0x43f18f(0x190) in _0x267a34
                ? _0x531b4d[_0x43f18f(0x8d4)](_0x267a34[_0x43f18f(0x6c8)], _0x267a34[_0x43f18f(0x190)])[_0x43f18f(0x741)](function (_0x43e61e) {
                      var _0x48fcf6 = _0x43f18f;
                      (_0x267a34[_0x48fcf6(0x6c8)] = JSON[_0x48fcf6(0x59c)](_0x43e61e)), _0x531b4d[_0x48fcf6(0x648)](_0x267a34);
                  })
                : _0x531b4d[_0x43f18f(0x648)](_0x267a34);
        }),
        (_0x531b4d[_0x4e3749(0x648)] = function (_0x4ec4d0) {
            var _0x17abff = _0x4e3749;
            try {
                if (_0x531b4d["icefilter"]) {
                    if (_0x4ec4d0[_0x17abff(0x6c8)][_0x17abff(0x6c8)][_0x17abff(0x438)](_0x531b4d[_0x17abff(0x969)]) === -0x1) {
                        log(_0x17abff(0x7ba)), log(_0x4ec4d0[_0x17abff(0x6c8)]);
                        return;
                    } else log(_0x17abff(0x613)), log(_0x4ec4d0[_0x17abff(0x6c8)]);
                }
            } catch (_0xf080b2) {
                errorlog(_0xf080b2);
            }
            if (_0x4ec4d0["candidate"] && "candidate" in _0x4ec4d0["candidate"] && _0x4ec4d0[_0x17abff(0x6c8)][_0x17abff(0x6c8)] == "") return;
            if (_0x4ec4d0[_0x17abff(0x49f)] in _0x531b4d["pcs"] && _0x4ec4d0[_0x17abff(0x6a5)] == "remote") {
                log(_0x17abff(0x252));
                if (_0x17abff(0x6df) in _0x4ec4d0 && _0x531b4d["pcs"][_0x4ec4d0[_0x17abff(0x49f)]][_0x17abff(0x6df)] != _0x4ec4d0["session"]) {
                    errorlog(_0x17abff(0x544));
                    return;
                }
                _0x531b4d["pcs"][_0x4ec4d0["UUID"]]
                    [_0x17abff(0xa34)](_0x4ec4d0[_0x17abff(0x6c8)])
                    [_0x17abff(0x741)]()
                    [_0x17abff(0x524)](function (_0x516060) {});
            } else {
                if (_0x4ec4d0[_0x17abff(0x49f)] in _0x531b4d[_0x17abff(0x39e)] && _0x4ec4d0[_0x17abff(0x6a5)] == _0x17abff(0x651)) {
                    log(_0x17abff(0x66b));
                    if ("session" in _0x4ec4d0 && _0x531b4d[_0x17abff(0x39e)][_0x4ec4d0["UUID"]][_0x17abff(0x6df)] != _0x4ec4d0[_0x17abff(0x6df)]) {
                        errorlog("Incoming\x20Ice\x20Offer\x20does\x20not\x20match\x20Session");
                        return;
                    }
                    if (_0x531b4d[_0x17abff(0x39e)][_0x4ec4d0[_0x17abff(0x49f)]] === null) return;
                    _0x531b4d[_0x17abff(0x39e)][_0x4ec4d0["UUID"]]
                        [_0x17abff(0xa34)](_0x4ec4d0[_0x17abff(0x6c8)])
                        [_0x17abff(0x741)]()
                        ["catch"](function (_0x441c56) {});
                } else warnlog(_0x4ec4d0), warnlog(_0x17abff(0x5d1));
            }
        }),
        (_0x531b4d["processIceBundle"] = function (_0x4a8005) {
            var _0x5c8950 = _0x4e3749;
            if (_0x531b4d[_0x5c8950(0x7f4)] && "vector" in _0x4a8005)
                _0x531b4d[_0x5c8950(0x8d4)](_0x4a8005[_0x5c8950(0x9ff)], _0x4a8005[_0x5c8950(0x190)])[_0x5c8950(0x741)](function (_0x540a0e) {
                    var _0x32f41e = _0x5c8950;
                    _0x4a8005[_0x32f41e(0x9ff)] = JSON[_0x32f41e(0x59c)](_0x540a0e);
                    var _0x49998c = {};
                    (_0x49998c["UUID"] = _0x4a8005[_0x32f41e(0x49f)]), (_0x49998c[_0x32f41e(0x6a5)] = _0x4a8005[_0x32f41e(0x6a5)]);
                    for (var _0x3f14f8 = 0x0; _0x3f14f8 < _0x4a8005["candidates"][_0x32f41e(0x1bf)]; _0x3f14f8++) {
                        (_0x49998c[_0x32f41e(0x6c8)] = _0x4a8005[_0x32f41e(0x9ff)][_0x3f14f8]), _0x531b4d[_0x32f41e(0x648)](_0x49998c);
                    }
                });
            else {
                var _0x5aa857 = {};
                (_0x5aa857["UUID"] = _0x4a8005[_0x5c8950(0x49f)]), (_0x5aa857[_0x5c8950(0x6a5)] = _0x4a8005[_0x5c8950(0x6a5)]);
                for (var _0x28a264 = 0x0; _0x28a264 < _0x4a8005[_0x5c8950(0x9ff)][_0x5c8950(0x1bf)]; _0x28a264++) {
                    (_0x5aa857["candidate"] = _0x4a8005[_0x5c8950(0x9ff)][_0x28a264]), _0x531b4d["processIce2"](_0x5aa857);
                }
            }
        }),
        (_0x531b4d[_0x4e3749(0x8c7)] = async function (_0x6849e4) {
            var _0x28c7c6 = _0x4e3749;
            "screen" in _0x6849e4 && ((_0x531b4d["rpcs"][_0x6849e4["UUID"]][_0x28c7c6(0x1fc)] = _0x6849e4[_0x28c7c6(0x509)]), log("SCREENS"), log(_0x6849e4["screen"])),
                warnlog(_0x6849e4),
                _0x531b4d[_0x28c7c6(0x3c6)] &&
                    _0x6849e4[_0x28c7c6(0x662)] &&
                    _0x6849e4["description"][_0x28c7c6(0x537)] &&
                    _0x6849e4["description"][_0x28c7c6(0x537)][_0x28c7c6(0x42d)](_0x28c7c6(0x2e9)) &&
                    ((_0x6849e4[_0x28c7c6(0x662)][_0x28c7c6(0x537)] = _0x6849e4["description"]["sdp"][_0x28c7c6(0x177)](_0x28c7c6(0x2e9), "")), warnlog(_0x28c7c6(0x7f8))),
                _0x531b4d["rpcs"][_0x6849e4[_0x28c7c6(0x49f)]]
                    ["setRemoteDescription"](_0x6849e4[_0x28c7c6(0x662)])
                    [_0x28c7c6(0x741)](async function () {
                        var _0x1edacd = _0x28c7c6;
                        if (_0x531b4d[_0x1edacd(0x39e)][_0x6849e4["UUID"]][_0x1edacd(0x455)][_0x1edacd(0x6a5)] === _0x1edacd(0x2dd))
                            _0x531b4d[_0x1edacd(0x39e)][_0x6849e4[_0x1edacd(0x49f)]]
                                [_0x1edacd(0x9a9)]()
                                [_0x1edacd(0x741)](function (_0x48cd9d) {
                                    var _0xa8a4aa = _0x1edacd;
                                    log(_0xa8a4aa(0x6aa));
                                    if (_0x531b4d[_0xa8a4aa(0x39e)][_0x6849e4[_0xa8a4aa(0x49f)]]["whip"]) return _0x531b4d["rpcs"][_0x6849e4[_0xa8a4aa(0x49f)]]["setLocalDescription"](_0x48cd9d);
                                    if (!_0x531b4d[_0xa8a4aa(0x276)] && _0x531b4d[_0xa8a4aa(0x228)] == 0x5)
                                        (_0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler["setOpusAttributes"](_0x48cd9d["sdp"], {
                                            stereo: 0x1,
                                            maxaveragebitrate: (_0x531b4d[_0xa8a4aa(0x43d)] || 0x100) * 0x400,
                                            cbr: _0x531b4d["cbr"],
                                            useinbandfec: _0x531b4d["noFEC"] ? 0x0 : 0x1,
                                            maxptime: _0x531b4d["maxptime"],
                                            minptime: _0x531b4d["minptime"],
                                            ptime: _0x531b4d[_0xa8a4aa(0x200)],
                                            dtx: _0x531b4d["dtx"],
                                        })),
                                            log(_0xa8a4aa(0x9e9));
                                    else {
                                        if (_0x531b4d[_0xa8a4aa(0x54f)] && Firefox)
                                            _0x531b4d[_0xa8a4aa(0x43d)]
                                                ? (_0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler["setOpusAttributes"](_0x48cd9d[_0xa8a4aa(0x537)], {
                                                      stereo: 0x0,
                                                      maxaveragebitrate: _0x531b4d[_0xa8a4aa(0x43d)] * 0x400,
                                                      cbr: _0x531b4d[_0xa8a4aa(0x451)],
                                                      useinbandfec: _0x531b4d[_0xa8a4aa(0x8a1)] ? 0x0 : 0x1,
                                                      maxptime: _0x531b4d[_0xa8a4aa(0x564)],
                                                      minptime: _0x531b4d["minptime"],
                                                      ptime: _0x531b4d["ptime"],
                                                      dtx: _0x531b4d[_0xa8a4aa(0x621)],
                                                  }))
                                                : (_0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler[_0xa8a4aa(0x392)](_0x48cd9d[_0xa8a4aa(0x537)], {
                                                      stereo: 0x0,
                                                      useinbandfec: _0x531b4d[_0xa8a4aa(0x8a1)] ? 0x0 : 0x1,
                                                      maxptime: _0x531b4d[_0xa8a4aa(0x564)],
                                                      minptime: _0x531b4d[_0xa8a4aa(0x981)],
                                                      ptime: _0x531b4d[_0xa8a4aa(0x200)],
                                                      dtx: _0x531b4d[_0xa8a4aa(0x621)],
                                                  }));
                                        else {
                                            if (_0x531b4d[_0xa8a4aa(0x228)] == 0x1 || _0x531b4d[_0xa8a4aa(0x228)] == 0x2 || _0x531b4d["stereo"] == 0x5)
                                                (_0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler[_0xa8a4aa(0x392)](_0x48cd9d[_0xa8a4aa(0x537)], {
                                                    stereo: 0x1,
                                                    maxaveragebitrate: (_0x531b4d["audiobitrate"] || 0x100) * 0x400,
                                                    cbr: _0x531b4d[_0xa8a4aa(0x451)],
                                                    useinbandfec: _0x531b4d[_0xa8a4aa(0x8a1)] ? 0x0 : 0x1,
                                                    maxptime: _0x531b4d[_0xa8a4aa(0x564)],
                                                    minptime: _0x531b4d[_0xa8a4aa(0x981)],
                                                    ptime: _0x531b4d[_0xa8a4aa(0x200)],
                                                    dtx: _0x531b4d[_0xa8a4aa(0x621)],
                                                })),
                                                    log(_0xa8a4aa(0x9e9));
                                            else {
                                                if (_0x531b4d[_0xa8a4aa(0x228)] == 0x4)
                                                    _0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler[_0xa8a4aa(0x392)](_0x48cd9d[_0xa8a4aa(0x537)], {
                                                        stereo: 0x2,
                                                        maxaveragebitrate: (_0x531b4d[_0xa8a4aa(0x43d)] || 0x100) * 0x400,
                                                        cbr: _0x531b4d[_0xa8a4aa(0x451)],
                                                        useinbandfec: _0x531b4d[_0xa8a4aa(0x8a1)] ? 0x0 : 0x1,
                                                        maxptime: _0x531b4d["maxptime"],
                                                        minptime: _0x531b4d["minptime"],
                                                        ptime: _0x531b4d[_0xa8a4aa(0x200)],
                                                        dtx: _0x531b4d[_0xa8a4aa(0x621)],
                                                    });
                                                else {
                                                    if (_0x531b4d["audiobitrate"])
                                                        _0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler[_0xa8a4aa(0x392)](_0x48cd9d[_0xa8a4aa(0x537)], {
                                                            maxaveragebitrate: _0x531b4d[_0xa8a4aa(0x43d)] * 0x400,
                                                            cbr: _0x531b4d[_0xa8a4aa(0x451)],
                                                            useinbandfec: _0x531b4d[_0xa8a4aa(0x8a1)] ? 0x0 : 0x1,
                                                            maxptime: _0x531b4d[_0xa8a4aa(0x564)],
                                                            minptime: _0x531b4d[_0xa8a4aa(0x981)],
                                                            ptime: _0x531b4d[_0xa8a4aa(0x200)],
                                                            dtx: _0x531b4d[_0xa8a4aa(0x621)],
                                                        });
                                                    else {
                                                        if (_0x531b4d[_0xa8a4aa(0x8a1)])
                                                            _0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler[_0xa8a4aa(0x392)](_0x48cd9d["sdp"], {
                                                                useinbandfec: 0x0,
                                                                maxptime: _0x531b4d["maxptime"],
                                                                minptime: _0x531b4d[_0xa8a4aa(0x981)],
                                                                ptime: _0x531b4d[_0xa8a4aa(0x200)],
                                                                dtx: _0x531b4d[_0xa8a4aa(0x621)],
                                                            });
                                                        else
                                                            _0x531b4d[_0xa8a4aa(0x621)] &&
                                                                (_0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler[_0xa8a4aa(0x392)](_0x48cd9d["sdp"], {
                                                                    maxptime: _0x531b4d[_0xa8a4aa(0x564)],
                                                                    minptime: _0x531b4d["minptime"],
                                                                    ptime: _0x531b4d[_0xa8a4aa(0x200)],
                                                                    dtx: _0x531b4d[_0xa8a4aa(0x621)],
                                                                }));
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (_0x531b4d["audioCodec"])
                                        try {
                                            if (_0x531b4d[_0xa8a4aa(0x313)] === _0xa8a4aa(0x6d6)) _0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler["modifyDescLyra"](_0x48cd9d[_0xa8a4aa(0x537)]);
                                            else {
                                                if (_0x531b4d[_0xa8a4aa(0x313)] === _0xa8a4aa(0x300)) {
                                                    if (_0x531b4d[_0xa8a4aa(0x54f)]) _0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler[_0xa8a4aa(0x6ca)](_0x48cd9d["sdp"], _0x531b4d["sampleRate"] || 0xbb80, ![], _0x531b4d["ptime"]);
                                                    else
                                                        _0x531b4d[_0xa8a4aa(0x228)]
                                                            ? (_0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler["modifyDescPCM"](_0x48cd9d["sdp"], _0x531b4d["sampleRate"] || 0x7d00, !![], _0x531b4d[_0xa8a4aa(0x200)]))
                                                            : (_0x48cd9d["sdp"] = CodecsHandler[_0xa8a4aa(0x6ca)](_0x48cd9d["sdp"], _0x531b4d[_0xa8a4aa(0x4f6)] || 0xbb80, ![], _0x531b4d[_0xa8a4aa(0x200)]));
                                                } else _0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler["preferAudioCodec"](_0x48cd9d[_0xa8a4aa(0x537)], _0x531b4d[_0xa8a4aa(0x313)]);
                                            }
                                        } catch (_0x78f686) {
                                            errorlog(_0x78f686), warnlog("couldn\x27t\x20set\x20preferred\x20audio\x20codec");
                                        }
                                    if (_0x531b4d[_0xa8a4aa(0x341)] && _0x531b4d[_0xa8a4aa(0x341)][_0xa8a4aa(0x1bf)])
                                        for (var _0x57bf12 = _0x531b4d[_0xa8a4aa(0x341)][_0xa8a4aa(0x1bf)] - 0x1; _0x57bf12 >= 0x0; _0x57bf12--) {
                                            try {
                                                _0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler["preferCodec"](_0x48cd9d[_0xa8a4aa(0x537)], _0x531b4d[_0xa8a4aa(0x341)][_0x57bf12]);
                                            } catch (_0x48d386) {
                                                errorlog(_0x48d386);
                                                break;
                                            }
                                        }
                                    _0x531b4d[_0xa8a4aa(0x7e3)] && (_0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler[_0xa8a4aa(0x5d8)](_0x48cd9d[_0xa8a4aa(0x537)], _0x531b4d["codec"]));
                                    _0x531b4d["h264profile"] &&
                                        (log(_0xa8a4aa(0x567)),
                                        (_0x48cd9d["sdp"] = _0x48cd9d[_0xa8a4aa(0x537)][_0xa8a4aa(0x177)](/42e01f/gi, _0x531b4d[_0xa8a4aa(0x5a4)])),
                                        (_0x48cd9d[_0xa8a4aa(0x537)] = _0x48cd9d[_0xa8a4aa(0x537)]["replace"](/42001f/gi, _0x531b4d[_0xa8a4aa(0x5a4)])),
                                        (_0x48cd9d[_0xa8a4aa(0x537)] = _0x48cd9d[_0xa8a4aa(0x537)]["replace"](/420029/gi, _0x531b4d[_0xa8a4aa(0x5a4)])),
                                        (_0x48cd9d["sdp"] = _0x48cd9d[_0xa8a4aa(0x537)]["replace"](/42a01e/gi, _0x531b4d[_0xa8a4aa(0x5a4)])),
                                        (_0x48cd9d[_0xa8a4aa(0x537)] = _0x48cd9d[_0xa8a4aa(0x537)][_0xa8a4aa(0x177)](/42a014/gi, _0x531b4d["h264profile"])),
                                        (_0x48cd9d[_0xa8a4aa(0x537)] = _0x48cd9d[_0xa8a4aa(0x537)][_0xa8a4aa(0x177)](/42a00b/gi, _0x531b4d[_0xa8a4aa(0x5a4)])),
                                        (_0x48cd9d[_0xa8a4aa(0x537)] = _0x48cd9d["sdp"][_0xa8a4aa(0x177)](/640c1f/gi, _0x531b4d[_0xa8a4aa(0x5a4)])));
                                    _0x531b4d[_0xa8a4aa(0x8fd)] && (log(_0x48cd9d[_0xa8a4aa(0x537)]), (_0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler[_0xa8a4aa(0x278)](_0x48cd9d[_0xa8a4aa(0x537)])));
                                    _0x531b4d[_0xa8a4aa(0x510)] && (_0x48cd9d["sdp"] = CodecsHandler[_0xa8a4aa(0x201)](_0x48cd9d[_0xa8a4aa(0x537)]));
                                    _0x531b4d[_0xa8a4aa(0x687)] && (_0x48cd9d[_0xa8a4aa(0x537)] = CodecsHandler[_0xa8a4aa(0x94e)](_0x48cd9d[_0xa8a4aa(0x537)]));
                                    if (_0x531b4d[_0xa8a4aa(0x39e)][_0x6849e4[_0xa8a4aa(0x49f)]][_0xa8a4aa(0x696)])
                                        log("bit\x20rate\x20being\x20munged"), (_0x48cd9d[_0xa8a4aa(0x537)] = _0x42afd9(_0x48cd9d[_0xa8a4aa(0x537)], _0x531b4d[_0xa8a4aa(0x39e)][_0x6849e4["UUID"]][_0xa8a4aa(0x696)]));
                                    else _0x531b4d["bitrate"] && (log("bit\x20rate\x20being\x20munged"), (_0x48cd9d["sdp"] = _0x42afd9(_0x48cd9d[_0xa8a4aa(0x537)], _0x531b4d[_0xa8a4aa(0x798)])));
                                    return log(_0x48cd9d), _0x531b4d[_0xa8a4aa(0x39e)][_0x6849e4[_0xa8a4aa(0x49f)]][_0xa8a4aa(0x739)](_0x48cd9d);
                                })
                                [_0x1edacd(0x741)](function _0x157c61() {
                                    var _0x20b24a = _0x1edacd;
                                    log(_0x20b24a(0x6fd));
                                    if (_0x531b4d[_0x20b24a(0x39e)][_0x6849e4[_0x20b24a(0x49f)]][_0x20b24a(0x375)]) {
                                        _0x531b4d[_0x20b24a(0x39e)][_0x6849e4[_0x20b24a(0x49f)]]["whipCallback"] && _0x531b4d["rpcs"][_0x6849e4[_0x20b24a(0x49f)]][_0x20b24a(0x5e9)]();
                                        return;
                                    }
                                    var _0x387f3e = {};
                                    (_0x387f3e["UUID"] = _0x6849e4[_0x20b24a(0x49f)]),
                                        (_0x387f3e[_0x20b24a(0x662)] = _0x531b4d[_0x20b24a(0x39e)][_0x6849e4[_0x20b24a(0x49f)]][_0x20b24a(0x227)]),
                                        (_0x387f3e[_0x20b24a(0x6df)] = _0x531b4d[_0x20b24a(0x39e)][_0x6849e4["UUID"]]["session"]),
                                        _0x531b4d[_0x20b24a(0x7f4)]
                                            ? _0x531b4d[_0x20b24a(0x55e)](JSON["stringify"](_0x387f3e[_0x20b24a(0x662)]))
                                                  [_0x20b24a(0x741)](function (_0x16aba5) {
                                                      var _0x2e30fa = _0x20b24a;
                                                      (_0x387f3e[_0x2e30fa(0x662)] = _0x16aba5[0x0]), (_0x387f3e[_0x2e30fa(0x190)] = _0x16aba5[0x1]), _0x531b4d[_0x2e30fa(0x8a5)](_0x387f3e);
                                                  })
                                                  [_0x20b24a(0x524)](errorlog)
                                            : _0x531b4d[_0x20b24a(0x8a5)](_0x387f3e);
                                })
                                [_0x1edacd(0x524)](errorlog);
                        else _0x531b4d[_0x1edacd(0x39e)][_0x6849e4[_0x1edacd(0x49f)]]["remoteDescription"][_0x1edacd(0x6a5)] === _0x1edacd(0x324) && errorlog(_0x1edacd(0x84f));
                    })
                    [_0x28c7c6(0x524)](errorlog);
        }),
        (_0x531b4d[_0x4e3749(0x5d3)] = function () {
            var _0x1a1395 = _0x4e3749;
            if (_0x531b4d[_0x1a1395(0x6fa)] && _0x531b4d[_0x1a1395(0x6fa)][_0x1a1395(0x60a)]) return _0x531b4d[_0x1a1395(0x6fa)][_0x1a1395(0x60a)];
            else
                return _0x531b4d["videoElement"] && _0x531b4d[_0x1a1395(0x6fa)][_0x1a1395(0x7fe)] && _0x531b4d[_0x1a1395(0x8cc)]
                    ? _0x531b4d[_0x1a1395(0x8cc)]
                    : (log(_0x1a1395(0x96c)), checkBasicStreamsExist(), _0x531b4d[_0x1a1395(0x6fa)]["srcObject"]);
        });
    var _0x70c1d9 = {},
        _0x2edaf3 = ![],
        _0x581c72 = [];
    (_0x531b4d["sendFile"] = function (_0x1337a5, _0x3bf391) {
        var _0x1f84ee = _0x4e3749;
        log(_0x1f84ee(0x1e1) + _0x3bf391 + "\x20" + _0x1337a5);
        var _0x857c1b = new FileReader(),
            _0x3c3ccf = ![];
        for (var _0x44a3d0 = 0x0; _0x44a3d0 < _0x531b4d[_0x1f84ee(0x7de)][_0x1f84ee(0x1bf)]; _0x44a3d0++) {
            if (_0x531b4d["hostedFiles"][_0x44a3d0]["id"] === _0x3bf391) {
                _0x3c3ccf = _0x44a3d0;
                break;
            }
        }
        if (_0x3c3ccf === ![]) {
            warnlog(_0x1f84ee(0x163));
            return;
        } else {
            if (_0x531b4d[_0x1f84ee(0x7de)][_0x3c3ccf][_0x1f84ee(0x469)] == 0x0) {
                warnlog(_0x1f84ee(0x940));
                return;
            } else {
                if (!(_0x531b4d[_0x1f84ee(0x7de)][_0x3c3ccf]["restricted"] === ![] || _0x531b4d[_0x1f84ee(0x7de)][_0x3c3ccf]["restricted"] === _0x1337a5)) {
                    warnlog(_0x1f84ee(0x898));
                    return;
                }
            }
        }
        var _0x4341d3 = 0x4000,
            _0x7d587d = 0x0,
            _0x3d3f9c = _0x3c3ccf;
        _0x3d3f9c === _0x1f84ee(0x528) && (_0x3d3f9c = _0x1f84ee(0x40a) + _0x531b4d[_0x1f84ee(0x750)](0x5));
        if (_0x1337a5 in _0x531b4d[_0x1f84ee(0x8cd)]) var _0x227ccf = _0x531b4d[_0x1f84ee(0x8cd)][_0x1337a5][_0x1f84ee(0x50a)](_0x3d3f9c);
        else {
            if (_0x1337a5 in _0x531b4d["rpcs"]) var _0x227ccf = _0x531b4d[_0x1f84ee(0x39e)][_0x1337a5][_0x1f84ee(0x50a)](_0x3d3f9c);
            else {
                warnlog(_0x1f84ee(0x1ef));
                return;
            }
        }
        _0x227ccf[_0x1f84ee(0x5fe)] = _0x1f84ee(0x426);
        var _0x142052 = _0x531b4d[_0x1f84ee(0x7de)][_0x3c3ccf][_0x1f84ee(0x67d)](0x0, _0x4341d3);
        (_0x227ccf[_0x1f84ee(0x2d6)] = () => {
            var _0x2a708c = _0x1f84ee;
            _0x227ccf["send"](
                JSON["stringify"]({ type: _0x2a708c(0x57a), size: _0x531b4d[_0x2a708c(0x7de)][_0x3c3ccf][_0x2a708c(0x2c9)], filename: _0x531b4d[_0x2a708c(0x7de)][_0x3c3ccf][_0x2a708c(0x37d)], id: _0x531b4d["hostedFiles"][_0x3c3ccf]["id"] })
            ),
                _0x857c1b["readAsArrayBuffer"](_0x142052);
        }),
            (_0x227ccf[_0x1f84ee(0x907)] = () => {
                var _0x414ff3 = _0x1f84ee;
                try {
                    var _0x422612 = _0x531b4d[_0x414ff3(0x37f)][_0x414ff3(0x438)](_0x227ccf);
                    _0x422612 > -0x1 && _0x531b4d[_0x414ff3(0x37f)][_0x414ff3(0x322)](_0x422612, 0x1);
                } catch (_0x5f1d46) {
                    errorlog(_0x5f1d46);
                }
                log(_0x414ff3(0x6ce)), (_0x227ccf = null);
            }),
            (_0x227ccf["onmessage"] = (_0x23f57a) => {}),
            _0x531b4d["hostedTransfers"]["push"](_0x227ccf),
            (_0x857c1b[_0x1f84ee(0x697)] = function () {
                var _0x369ba9 = _0x1f84ee;
                if (_0x531b4d[_0x369ba9(0x7de)][_0x3c3ccf]["state"] == 0x0) return;
                var _0x1858fe = _0x857c1b["result"];
                log(_0x1858fe);
                try {
                    _0x227ccf[_0x369ba9(0x3e0)](_0x1858fe);
                } catch (_0x512358) {
                    try {
                        _0x227ccf["close"]();
                    } catch (_0x3a4f12) {}
                    warnlog(_0x512358);
                    return;
                }
                _0x7d587d += 0x1;
                if (_0x7d587d * _0x4341d3 < _0x531b4d[_0x369ba9(0x7de)][_0x3c3ccf][_0x369ba9(0x2c9)])
                    try {
                        log(_0x369ba9(0x247) + _0x7d587d), (_0x142052 = _0x531b4d[_0x369ba9(0x7de)][_0x3c3ccf][_0x369ba9(0x67d)](_0x7d587d * _0x4341d3, (_0x7d587d + 0x1) * _0x4341d3)), _0x857c1b[_0x369ba9(0x388)](_0x142052);
                    } catch (_0x27acce) {
                        errorlog(_0x27acce);
                    }
                else _0x227ccf["send"](_0x369ba9(0x13e)), _0x227ccf[_0x369ba9(0x36e)]();
            });
    }),
        (_0x531b4d[_0x4e3749(0x80c)] = null),
        (_0x531b4d["chunkedAudioEnabled"] = null),
        (_0x531b4d[_0x4e3749(0x28f)] = async function (_0x45bd7b = null) {
            var _0x16319f = _0x4e3749;
            if (_0x531b4d[_0x16319f(0x80c)] !== null) return;
            else _0x531b4d[_0x16319f(0x80c)] = ![];
            !_0x45bd7b && _0x531b4d[_0x16319f(0x21d)][_0x16319f(0x3b5)] && (_0x45bd7b = _0x531b4d[_0x16319f(0x21d)][_0x16319f(0x3b5)]);
            let _0x417c83 = 0x0;
            var _0x5108d2 = _0x531b4d[_0x16319f(0x8cc)][_0x16319f(0x753)]()[0x0];
            if (!_0x5108d2) {
                _0x531b4d[_0x16319f(0x80c)] = null;
                return;
            }
            var _0x52a1bc = new MediaStreamTrackProcessor(_0x5108d2),
                _0x2625a3 = _0x52a1bc["readable"];
            const _0x37987e = _0x2625a3[_0x16319f(0x9df)]();
            var _0x35e9b3 = ![],
                _0x3aaa63 = -0x1,
                _0x3c2589 = -0x1;
            const _0x5d3072 = {
                output: (_0x1511fa) => {
                    var _0x5edcf7 = _0x16319f;
                    if (_0x1511fa[_0x5edcf7(0x7eb)]["name"] == _0x5edcf7(0x21f)) {
                        let _0x3b57d4 = new Uint8Array(_0x1511fa[_0x5edcf7(0x423)]);
                        _0x1511fa["copyTo"](_0x3b57d4),
                            _0x581c72[_0x5edcf7(0x874)]([_0x1511fa[_0x5edcf7(0xa1c)] - _0x3c2589, _0x1511fa[_0x5edcf7(0x6a5)]]),
                            _0x581c72[_0x5edcf7(0x874)](_0x3b57d4),
                            _0x2edaf3[_0x5edcf7(0x13a)](_0x5edcf7(0x211));
                    }
                },
                error: (_0x21fda9) => {
                    errorlog(_0x21fda9);
                },
            };
            let _0x2a1177 = new VideoEncoder(_0x5d3072);
            _0x2a1177[_0x16319f(0x9e8)](_0x45bd7b), (_0x531b4d[_0x16319f(0x21d)][_0x16319f(0x3b5)] = _0x45bd7b), (_0x2edaf3["videoEncoder"] = _0x2a1177);
            var _0x5d2739,
                _0xef6415 = new Promise((_0x1731fd, _0x59796d) => {
                    _0x5d2739 = _0x1731fd;
                });
            (_0xef6415[_0x16319f(0x48f)] = _0x5d2739),
                _0x37987e[_0x16319f(0x8eb)]()["then"](function _0x57a7b0({ done: _0x5701e5, value: _0x281112 }) {
                    var _0x51cb67 = _0x16319f;
                    if (_0x5701e5 || _0x35e9b3) {
                        _0x2a1177["close"]();
                        _0x281112 && _0x281112[_0x51cb67(0x36e)]();
                        _0x531b4d[_0x51cb67(0x80c)] = null;
                        return;
                    }
                    _0x3c2589 == -0x1 && ((_0x3c2589 = _0x281112[_0x51cb67(0xa1c)]), (_0x531b4d["stats"]["Chunked_video"][_0x51cb67(0x5fd)] = Date["now"]()), _0xef6415[_0x51cb67(0x48f)]());
                    _0x3aaa63 == _0x281112["timestamp"] && ((_0x281112[_0x51cb67(0xa1c)] += 0x1), warnlog("Timestamp\x20duplicated"));
                    if (!_0x35e9b3) {
                        (_0x3aaa63 = _0x281112["timestamp"]), _0x417c83++;
                        if (_0x2edaf3["needKeyFrame"]) {
                            const _0x1be00b = _0x417c83 >= 0x3c;
                            _0x1be00b && ((_0x417c83 = 0x0), (_0x2edaf3[_0x51cb67(0x6d1)] = ![]), warnlog("Keyframe\x20inserted")), _0x2a1177[_0x51cb67(0x4b1)](_0x281112, { keyFrame: _0x1be00b });
                        } else _0x2a1177[_0x51cb67(0x4b1)](_0x281112, { keyFrame: ![] });
                    }
                    _0x281112["close"](), _0x37987e[_0x51cb67(0x8eb)]()[_0x51cb67(0x741)](_0x57a7b0);
                }),
                (_0x531b4d[_0x16319f(0x80c)] = !![]),
                await _0xef6415;
        }),
        (_0x531b4d[_0x4e3749(0x84d)] = async function (_0x33ab63) {
            var _0x25a4e7 = _0x4e3749;
            if (_0x531b4d[_0x25a4e7(0xa04)] !== null) return;
            else _0x531b4d[_0x25a4e7(0xa04)] = ![];
            !_0x33ab63 && _0x531b4d[_0x25a4e7(0x21d)]["Chunked_audio"] && (_0x33ab63 = _0x531b4d[_0x25a4e7(0x21d)][_0x25a4e7(0x141)]);
            var _0x1d1c3c = _0x531b4d[_0x25a4e7(0x6fa)][_0x25a4e7(0x60a)][_0x25a4e7(0x776)]()[0x0];
            if (!_0x1d1c3c) {
                _0x531b4d[_0x25a4e7(0xa04)] = null;
                return;
            }
            var _0x3d93f4 = _0x1d1c3c[_0x25a4e7(0x617)]();
            _0x33ab63[_0x25a4e7(0x282)] > _0x3d93f4[_0x25a4e7(0x523)] && ((_0x33ab63["numberOfChannels"] = _0x3d93f4[_0x25a4e7(0x523)]), (_0x33ab63["channels"] = _0x3d93f4[_0x25a4e7(0x523)]));
            _0x33ab63["sampleRate"] > _0x3d93f4[_0x25a4e7(0x4f6)] && (_0x33ab63[_0x25a4e7(0x4f6)] = _0x3d93f4[_0x25a4e7(0x4f6)]);
            var _0x23e6c6 = new MediaStreamTrackProcessor(_0x1d1c3c),
                _0x36b9fd = _0x23e6c6["readable"];
            const _0x5c384b = _0x36b9fd[_0x25a4e7(0x9df)]();
            var _0x4b46b = ![],
                _0x97a29e = -0x1,
                _0x4929a7 = -0x1;
            const _0x3756f7 = {
                output: (_0x4390f2) => {
                    var _0x494500 = _0x25a4e7;
                    if (_0x4390f2[_0x494500(0x7eb)][_0x494500(0x37d)] == _0x494500(0x27c)) {
                        let _0x33d6a1 = new Uint8Array(_0x4390f2[_0x494500(0x423)]);
                        _0x4390f2[_0x494500(0x39b)](_0x33d6a1), _0x581c72["push"]([_0x4390f2[_0x494500(0xa1c)] - _0x4929a7, _0x494500(0x9bb)]), _0x581c72["push"](_0x33d6a1), _0x2edaf3["sendChunks"]("audio");
                    }
                },
                error: (_0x2e2746) => {
                    errorlog(_0x2e2746);
                },
            };
            let _0x1d5a84 = new AudioEncoder(_0x3756f7);
            _0x1d5a84[_0x25a4e7(0x9e8)](_0x33ab63),
                (_0x531b4d[_0x25a4e7(0x21d)][_0x25a4e7(0x141)] = {}),
                (_0x531b4d[_0x25a4e7(0x21d)][_0x25a4e7(0x141)][_0x25a4e7(0x7e3)] = _0x33ab63[_0x25a4e7(0x7e3)]),
                (_0x531b4d[_0x25a4e7(0x21d)][_0x25a4e7(0x141)][_0x25a4e7(0x282)] = _0x33ab63[_0x25a4e7(0x282)]),
                (_0x531b4d[_0x25a4e7(0x21d)][_0x25a4e7(0x141)][_0x25a4e7(0x4f6)] = _0x33ab63[_0x25a4e7(0x4f6)]),
                (_0x531b4d[_0x25a4e7(0x21d)][_0x25a4e7(0x141)][_0x25a4e7(0x798)] = _0x33ab63[_0x25a4e7(0x3d1)][_0x25a4e7(0x798)]);
            var _0x3b105e,
                _0x5a06c5 = new Promise((_0x581b07, _0x939aeb) => {
                    _0x3b105e = _0x581b07;
                });
            (_0x5a06c5["resolve"] = _0x3b105e),
                _0x5c384b["read"]()[_0x25a4e7(0x741)](function _0x5d6cfb({ done: _0xa4071e, value: _0x2d71b0 }) {
                    var _0x3ed143 = _0x25a4e7;
                    if (_0xa4071e || _0x4b46b) {
                        _0x1d5a84[_0x3ed143(0x36e)]();
                        _0x2d71b0 && _0x2d71b0[_0x3ed143(0x36e)]();
                        _0x531b4d[_0x3ed143(0xa04)] = null;
                        return;
                    }
                    _0x4929a7 == -0x1 && ((_0x4929a7 = _0x2d71b0[_0x3ed143(0xa1c)]), (_0x531b4d[_0x3ed143(0x21d)][_0x3ed143(0x141)][_0x3ed143(0x5fd)] = Date[_0x3ed143(0x312)]()), _0x5a06c5["resolve"]()),
                        _0x97a29e == _0x2d71b0["timestamp"] && (_0x2d71b0[_0x3ed143(0xa1c)] += 0x1),
                        !_0x4b46b && ((_0x97a29e = _0x2d71b0["timestamp"]), _0x1d5a84[_0x3ed143(0x4b1)](_0x2d71b0)),
                        _0x2d71b0[_0x3ed143(0x36e)](),
                        _0x5c384b[_0x3ed143(0x8eb)]()[_0x3ed143(0x741)](_0x5d6cfb);
                }),
                (_0x531b4d["chunkedAudioEnabled"] = !![]),
                await _0x5a06c5;
        }),
        (_0x531b4d[_0x4e3749(0x9fc)] = function (_0x3e18e4) {
            var _0x5046c4 = _0x4e3749;
            warnlog(_0x5046c4(0x94b));
            const _0x49762a = window[_0x5046c4(0x6f1)] || window[_0x5046c4(0x91b)],
                _0x2111e6 = new _0x49762a(),
                _0x237166 = _0x2111e6[_0x5046c4(0x8e1)](_0x3e18e4),
                _0x20bbc0 = 0x800,
                _0x58caff = (_0x2111e6["createScriptProcessor"] || _0x2111e6["createJavaScriptNode"])[_0x5046c4(0x654)](_0x2111e6, _0x20bbc0, 0x1, 0x1);
            return (
                (_0x58caff[_0x5046c4(0x20d)] = function (_0x191a72) {
                    var _0xc1becb = _0x5046c4,
                        _0x1224f0 = new Uint8Array(_0x191a72[_0xc1becb(0x906)]["getChannelData"](0x0)[_0xc1becb(0x1a4)]);
                    _0x581c72["push"]([0x0, _0xc1becb(0x300)]), _0x581c72[_0xc1becb(0x874)](_0x1224f0), _0x2edaf3[_0xc1becb(0x13a)]("pcm");
                }),
                _0x237166[_0x5046c4(0x8d6)](_0x58caff),
                _0x58caff[_0x5046c4(0x8d6)](_0x2111e6["destination"]),
                _0x58caff
            );
        }),
        (_0x531b4d[_0x4e3749(0x142)] = async function (_0x3e6f25) {
            var _0x36ab31 = _0x4e3749;
            log("SENDING\x20CHUNKS\x20TO:\x20" + _0x3e6f25);
            !_0x531b4d[_0x36ab31(0x80c)] && _0x531b4d[_0x36ab31(0x21d)]["Chunked_video"] && ((config = _0x531b4d["stats"][_0x36ab31(0x3b5)]), await _0x531b4d[_0x36ab31(0x28f)](config));
            !_0x531b4d[_0x36ab31(0xa04)] && _0x531b4d[_0x36ab31(0x21d)][_0x36ab31(0x141)] && ((config = _0x531b4d[_0x36ab31(0x21d)][_0x36ab31(0x141)]), await _0x531b4d[_0x36ab31(0x84d)](config));
            if (_0x3e6f25 in _0x70c1d9) return;
            if (!_0x2edaf3) {
                var _0xaa3e0 = _0x531b4d[_0x36ab31(0x5d3)](),
                    _0x568dc3 = _0x531b4d["chunked"],
                    _0x280d20 = null;
                _0x531b4d[_0x36ab31(0x7a0)] && _0x531b4d[_0x36ab31(0x7a0)] < _0x568dc3 && (_0x568dc3 = _0x531b4d[_0x36ab31(0x7a0)]);
                var _0x4dbe41 = { codec: _0x36ab31(0x756), width: 0x780, height: 0x438, bitrate: parseInt(_0x568dc3 * 0x3e8), frameRate: 0x1e, latencyMode: "realtime" };
                _0x531b4d[_0x36ab31(0x82e)] && (_0x4dbe41[_0x36ab31(0x82e)] = _0x36ab31(0x7aa));
                var _0x25439c = _0xaa3e0[_0x36ab31(0x753)]();
                if (_0x25439c[_0x36ab31(0x1bf)]) {
                    var _0x293280 = _0x25439c[0x0][_0x36ab31(0x617)]();
                    _0x293280[_0x36ab31(0x3c1)] && (_0x4dbe41[_0x36ab31(0x3c1)] = _0x293280[_0x36ab31(0x3c1)]),
                        _0x293280[_0x36ab31(0x63d)] && (_0x4dbe41[_0x36ab31(0x63d)] = _0x293280[_0x36ab31(0x63d)]),
                        _0x293280["frameRate"] && (_0x4dbe41[_0x36ab31(0x456)] = _0x293280["frameRate"]);
                } else _0x4dbe41 = ![];
                if (_0x568dc3 < 0x259) {
                    var _0x1ecb5c = (_0x4dbe41[_0x36ab31(0x3c1)] * _0x4dbe41[_0x36ab31(0x63d)]) / (0x280 * 0x168);
                    if (_0x1ecb5c >= 0x2) (_0x4dbe41["width"] = parseInt(_0x4dbe41[_0x36ab31(0x3c1)] / 0x2)), (_0x4dbe41[_0x36ab31(0x63d)] = parseInt(_0x4dbe41[_0x36ab31(0x63d)] / 0x2));
                    else _0x1ecb5c >= 1.5 && ((_0x4dbe41[_0x36ab31(0x3c1)] = parseInt(_0x4dbe41["width"] / 1.5)), (_0x4dbe41["height"] = parseInt(_0x4dbe41["height"] / 1.5)));
                }
                var _0x55f70a = { codec: _0x36ab31(0x6e6), numberOfChannels: 0x2, channels: 0x2, sampleRate: 0xbb80, bitrate: 0xfa00, tuning: { bitrate: 0xfa00 } };
                if (_0x568dc3 > 0xbb8) var _0x55f70a = { codec: _0x36ab31(0x6e6), numberOfChannels: 0x2, channels: 0x2, sampleRate: 0xbb80, tuning: { bitrate: 0x1f400 } };
                else {
                    if (_0x568dc3 < 0x259) var _0x55f70a = { codec: _0x36ab31(0x6e6), numberOfChannels: 0x2, channels: 0x2, sampleRate: 0xbb80, tuning: { bitrate: 0x7d00 } };
                }
                _0x531b4d[_0x36ab31(0x300)] && (_0x55f70a[_0x36ab31(0x7e3)] = _0x36ab31(0x300));
                !_0xaa3e0[_0x36ab31(0x776)]()[_0x36ab31(0x1bf)] && (_0x55f70a = ![]);
                if (!_0x55f70a && !_0x4dbe41) return;
                (_0x2edaf3 = {}),
                    (_0x2edaf3[_0x36ab31(0x6d1)] = !![]),
                    (_0x2edaf3[_0x36ab31(0x271)] = _0x4dbe41 || ![]),
                    (_0x2edaf3[_0x36ab31(0x36d)] = _0x55f70a || ![]),
                    _0x2edaf3["configVideo"] && (await _0x531b4d[_0x36ab31(0x28f)](_0x2edaf3["configVideo"])),
                    _0x2edaf3["configAudio"] && (_0x2edaf3[_0x36ab31(0x36d)]["codec"] == _0x36ab31(0x300) ? _0x531b4d[_0x36ab31(0x9fc)](_0xaa3e0) : await _0x531b4d[_0x36ab31(0x84d)](_0x2edaf3[_0x36ab31(0x36d)])),
                    (_0x2edaf3[_0x36ab31(0x13a)] = function (_0x2d5521 = _0x36ab31(0x14c)) {
                        var _0x5a0fbc = _0x36ab31;
                        if (_0x280d20) return;
                        _0x280d20 = !![];
                        var _0x302a7c = _0x2d5521;
                        while (_0x581c72[_0x5a0fbc(0x1bf)]) {
                            if (!Object[_0x5a0fbc(0x440)](_0x70c1d9)["length"]) {
                                (_0x581c72 = []), (_0x280d20 = null), (_0x531b4d[_0x5a0fbc(0x21d)][_0x5a0fbc(0x9fd)] = 0x0);
                                return;
                            }
                            _0x531b4d[_0x5a0fbc(0x21d)][_0x5a0fbc(0x9fd)] = _0x581c72[_0x5a0fbc(0x1bf)];
                            var _0x184989 = 0x0,
                                _0x25174f = _0x581c72[_0x5a0fbc(0x4c1)]();
                            if (_0x25174f[_0x5a0fbc(0x1bf)] === 0x2) {
                                (_0x302a7c = _0x25174f[0x1]), _0x25174f[_0x5a0fbc(0x874)](_0x581c72[_0x5a0fbc(0x1bf)]);
                                var _0x2a2180 = JSON["stringify"](_0x25174f);
                                for (var _0x497e7b in _0x70c1d9) {
                                    if ((_0x302a7c == _0x5a0fbc(0x2d9) || _0x302a7c == _0x5a0fbc(0x412) || _0x302a7c == "video") && !_0x531b4d[_0x5a0fbc(0x8cd)][_0x497e7b][_0x5a0fbc(0x993)]) continue;
                                    if ((_0x302a7c == "audio" || _0x302a7c == "pcm") && !_0x531b4d["pcs"][_0x497e7b][_0x5a0fbc(0x16e)]) continue;
                                    try {
                                        _0x70c1d9[_0x497e7b][_0x5a0fbc(0x6f8)] === _0x5a0fbc(0xa42) && _0x70c1d9[_0x497e7b][_0x5a0fbc(0x3e0)](_0x2a2180),
                                            (_0x531b4d[_0x5a0fbc(0x8cd)][_0x497e7b][_0x5a0fbc(0x21d)]["bufferedAmount"] = _0x70c1d9[_0x497e7b][_0x5a0fbc(0x154)]),
                                            _0x184989 < _0x531b4d[_0x5a0fbc(0x8cd)][_0x497e7b]["stats"][_0x5a0fbc(0x154)] && (_0x184989 = _0x531b4d["pcs"][_0x497e7b]["stats"]["bufferedAmount"]);
                                    } catch (_0x3ae193) {}
                                }
                            } else {
                                if (_0x25174f["byteLength"] > 0x40000) {
                                    for (var _0x497e7b in _0x70c1d9) {
                                        if ((_0x302a7c == "key" || _0x302a7c == _0x5a0fbc(0x412) || _0x302a7c == "video") && !_0x531b4d[_0x5a0fbc(0x8cd)][_0x497e7b]["allowVideo"]) continue;
                                        if ((_0x302a7c == _0x5a0fbc(0x9bb) || _0x302a7c == _0x5a0fbc(0x300)) && !_0x531b4d[_0x5a0fbc(0x8cd)][_0x497e7b]["allowAudio"]) continue;
                                        try {
                                            _0x70c1d9[_0x497e7b][_0x5a0fbc(0x6f8)] === _0x5a0fbc(0xa42) && _0x70c1d9[_0x497e7b]["send"](_0x25174f[_0x5a0fbc(0x67d)](0x0, 0x40000)),
                                                (_0x531b4d[_0x5a0fbc(0x8cd)][_0x497e7b]["stats"][_0x5a0fbc(0x154)] = _0x70c1d9[_0x497e7b][_0x5a0fbc(0x154)]),
                                                _0x184989 < _0x531b4d["pcs"][_0x497e7b][_0x5a0fbc(0x21d)][_0x5a0fbc(0x154)] && (_0x184989 = _0x531b4d[_0x5a0fbc(0x8cd)][_0x497e7b][_0x5a0fbc(0x21d)]["bufferedAmount"]);
                                        } catch (_0x39959f) {}
                                    }
                                    _0x581c72[_0x5a0fbc(0x61a)](_0x25174f["slice"](0x40000));
                                } else
                                    for (var _0x497e7b in _0x70c1d9) {
                                        if ((_0x302a7c == _0x5a0fbc(0x2d9) || _0x302a7c == _0x5a0fbc(0x412) || _0x302a7c == "video") && !_0x531b4d[_0x5a0fbc(0x8cd)][_0x497e7b][_0x5a0fbc(0x993)]) continue;
                                        if ((_0x302a7c == _0x5a0fbc(0x9bb) || _0x302a7c == _0x5a0fbc(0x300)) && !_0x531b4d[_0x5a0fbc(0x8cd)][_0x497e7b][_0x5a0fbc(0x16e)]) continue;
                                        try {
                                            _0x70c1d9[_0x497e7b]["readyState"] === _0x5a0fbc(0xa42) && _0x70c1d9[_0x497e7b][_0x5a0fbc(0x3e0)](_0x25174f),
                                                (_0x531b4d["pcs"][_0x497e7b]["stats"][_0x5a0fbc(0x154)] = _0x70c1d9[_0x497e7b][_0x5a0fbc(0x154)]),
                                                _0x184989 < _0x531b4d[_0x5a0fbc(0x8cd)][_0x497e7b][_0x5a0fbc(0x21d)][_0x5a0fbc(0x154)] && (_0x184989 = _0x531b4d[_0x5a0fbc(0x8cd)][_0x497e7b][_0x5a0fbc(0x21d)][_0x5a0fbc(0x154)]);
                                        } catch (_0x17275c) {}
                                    }
                            }
                            _0x531b4d[_0x5a0fbc(0x21d)][_0x5a0fbc(0x3e6)] = _0x184989;
                            if (!_0x2edaf3[_0x5a0fbc(0x849)] && _0x184989 > 0x1f4)
                                (_0x2edaf3[_0x5a0fbc(0x849)] = !![]),
                                    (_0x531b4d[_0x5a0fbc(0x21d)]["throttling"] = _0x2edaf3["throttle"]),
                                    (_0x531b4d["stats"][_0x5a0fbc(0x3b5)]["bitrate"] = parseInt((_0x531b4d[_0x5a0fbc(0x7ea)] * 0x3e8) / 0xa)),
                                    _0x2edaf3[_0x5a0fbc(0x72f)]["configure"](_0x531b4d[_0x5a0fbc(0x21d)]["Chunked_video"]);
                            else
                                _0x2edaf3[_0x5a0fbc(0x849)] &&
                                    _0x184989 < 0x12c &&
                                    ((_0x2edaf3[_0x5a0fbc(0x849)] = ![]),
                                    (_0x531b4d[_0x5a0fbc(0x21d)][_0x5a0fbc(0x8ef)] = _0x2edaf3["throttle"]),
                                    (_0x531b4d["stats"][_0x5a0fbc(0x3b5)][_0x5a0fbc(0x798)] = parseInt(_0x531b4d[_0x5a0fbc(0x7ea)] * 0x3e8)),
                                    _0x2edaf3[_0x5a0fbc(0x72f)][_0x5a0fbc(0x9e8)](_0x531b4d[_0x5a0fbc(0x21d)]["Chunked_video"]));
                        }
                        (_0x280d20 = null), (_0x531b4d["stats"][_0x5a0fbc(0x9fd)] = 0x0);
                    }),
                    (_0xaa3e0["ended"] = function (_0x14506e) {});
            }
            var _0x2b8e19 = _0x36ab31(0x7ea);
            if (_0x3e6f25 in _0x531b4d[_0x36ab31(0x8cd)]) _0x70c1d9[_0x3e6f25] = _0x531b4d[_0x36ab31(0x8cd)][_0x3e6f25][_0x36ab31(0x50a)](_0x2b8e19, { ordered: !![] });
            else {
                warnlog(_0x36ab31(0x1ef));
                return;
            }
            (_0x70c1d9[_0x3e6f25][_0x36ab31(0x670)] = _0x36ab31(0x802)),
                (_0x70c1d9[_0x3e6f25]["binaryType"] = _0x36ab31(0x426)),
                (_0x70c1d9[_0x3e6f25][_0x36ab31(0x563)] = ![]),
                (_0x70c1d9[_0x3e6f25][_0x36ab31(0x2d6)] = () => {
                    var _0x40c8fa = _0x36ab31;
                    log(_0x40c8fa(0x3a5));
                    if (_0x531b4d[_0x40c8fa(0xa04)] && _0x531b4d[_0x40c8fa(0x80c)] && _0x531b4d[_0x40c8fa(0x8cd)][_0x3e6f25]["allowAudio"] && _0x531b4d[_0x40c8fa(0x8cd)][_0x3e6f25][_0x40c8fa(0x993)])
                        _0x70c1d9[_0x3e6f25]["send"](
                            JSON[_0x40c8fa(0x30c)]({
                                timestamp: Date[_0x40c8fa(0x312)](),
                                type: _0x40c8fa(0x607),
                                realTimeVideo: _0x531b4d[_0x40c8fa(0x21d)]["Chunked_video"]["realTime"],
                                realTimeAudio: _0x531b4d[_0x40c8fa(0x21d)][_0x40c8fa(0x141)][_0x40c8fa(0x5fd)],
                                size: 0x5af3107a3fff,
                                configVideo: _0x2edaf3[_0x40c8fa(0x271)],
                                configAudio: _0x2edaf3[_0x40c8fa(0x36d)],
                                recordType: _0x531b4d[_0x40c8fa(0x7ea)],
                                filename: _0x2b8e19 + _0x40c8fa(0x148),
                                id: _0x2b8e19,
                            })
                        );
                    else {
                        if (_0x531b4d["chunkedAudioEnabled"] && _0x531b4d[_0x40c8fa(0x8cd)][_0x3e6f25]["allowAudio"])
                            _0x70c1d9[_0x3e6f25]["send"](
                                JSON[_0x40c8fa(0x30c)]({
                                    timestamp: Date[_0x40c8fa(0x312)](),
                                    type: _0x40c8fa(0x607),
                                    realTimeAudio: _0x531b4d["stats"][_0x40c8fa(0x141)]["realTime"],
                                    size: 0x5af3107a3fff,
                                    configAudio: _0x2edaf3[_0x40c8fa(0x36d)],
                                    recordType: _0x531b4d["chunked"],
                                    filename: _0x2b8e19 + ".webm",
                                    id: _0x2b8e19,
                                })
                            );
                        else {
                            if (_0x531b4d["chunkedVideoEnabled"] && _0x531b4d["pcs"][_0x3e6f25][_0x40c8fa(0x993)])
                                _0x70c1d9[_0x3e6f25][_0x40c8fa(0x3e0)](
                                    JSON[_0x40c8fa(0x30c)]({
                                        timestamp: Date[_0x40c8fa(0x312)](),
                                        type: _0x40c8fa(0x607),
                                        realTimeVideo: _0x531b4d["stats"]["Chunked_video"]["realTime"],
                                        size: 0x5af3107a3fff,
                                        configVideo: _0x2edaf3[_0x40c8fa(0x271)],
                                        recordType: _0x531b4d[_0x40c8fa(0x7ea)],
                                        filename: _0x2b8e19 + _0x40c8fa(0x148),
                                        id: _0x2b8e19,
                                    })
                                );
                            else {
                            }
                        }
                    }
                }),
                (_0x70c1d9[_0x3e6f25]["onclose"] = () => {
                    var _0x184d2a = _0x36ab31;
                    try {
                        var _0x18fed8 = _0x531b4d[_0x184d2a(0x37f)][_0x184d2a(0x438)](_0x70c1d9[_0x3e6f25]);
                        _0x18fed8 > -0x1 && _0x531b4d[_0x184d2a(0x37f)]["splice"](_0x18fed8, 0x1);
                    } catch (_0x12f106) {
                        errorlog(_0x12f106);
                    }
                    log("Transfer\x20ended"), (_0x70c1d9[_0x3e6f25] = null), delete _0x70c1d9[_0x3e6f25];
                    var _0xc6f3c3 = ![];
                    for (var _0x1478bb = 0x0; _0x1478bb < _0x531b4d[_0x184d2a(0x37f)][_0x184d2a(0x1bf)]; _0x1478bb++) {
                        if (_0x184d2a(0x670) in _0x531b4d[_0x184d2a(0x37f)][_0x1478bb] && _0x531b4d[_0x184d2a(0x37f)][_0x1478bb][_0x184d2a(0x670)] == _0x184d2a(0x802)) {
                            _0xc6f3c3 = !![];
                            break;
                        }
                    }
                    if (_0xc6f3c3)
                        try {
                            _0x2edaf3[_0x184d2a(0x171)]();
                        } catch (_0x4e4254) {}
                }),
                (_0x70c1d9[_0x3e6f25][_0x36ab31(0x1e5)] = (_0x57e128) => {
                    var _0x242569 = _0x36ab31;
                    if (_0x57e128[_0x242569(0x5a0)])
                        try {
                            var _0xd4426f = JSON["parse"](_0x57e128[_0x242569(0x5a0)]);
                            _0xd4426f["kf"] && (log(_0x242569(0x169)), (_0x2edaf3["needKeyFrame"] = !![]));
                        } catch (_0x30d346) {}
                }),
                _0x531b4d["hostedTransfers"][_0x36ab31(0x874)](_0x70c1d9[_0x3e6f25]);
        }),
        (_0x531b4d["recieveFile"] = async function (_0x27765b, _0x2c3790, _0x59ea28) {
            var _0x333d7d = _0x4e3749;
            log(_0x333d7d(0x7da));
            var _0x33a34c = _0x59ea28;
            _0x33a34c[_0x333d7d(0x5fe)] = "arraybuffer";
            var _0x5add9c = "",
                _0x313ea3 = 0x0,
                _0x41ccd8 = ![],
                _0x32fc5c = ![],
                _0x39d8d8 = 0x0,
                _0x56c792 = {};
            (_0x33a34c["onopen"] = (_0x58860d) => {
                var _0xe6e8b8 = _0x333d7d;
                log(_0xe6e8b8(0x2ba));
            }),
                (_0x33a34c[_0x333d7d(0x1e5)] = (_0x6614e5) => {
                    var _0x5e5974 = _0x333d7d;
                    if (!_0x41ccd8)
                        try {
                            _0x41ccd8 = JSON[_0x5e5974(0x59c)](_0x6614e5[_0x5e5974(0x5a0)]);
                            if (_0x41ccd8[_0x5e5974(0x6a5)] == _0x5e5974(0x57a)) {
                                var { readable: _0x204882, writable: _0x172ca2 } = new TransformStream({
                                    transform: (_0x3f4b90, _0x48b1f4) => _0x3f4b90["arrayBuffer"]()["then"]((_0x31444b) => _0x48b1f4[_0x5e5974(0x2a6)](new Uint8Array(_0x31444b))),
                                });
                                _0x56c792[_0x5e5974(0x3d6)] = _0x172ca2[_0x5e5974(0x1b0)]();
                                _0x204882["pipeTo"](streamSaver[_0x5e5974(0x573)](_0x41ccd8[_0x5e5974(0x684)]));
                                for (var _0x168d86 = 0x0; _0x168d86 < transferList[_0x5e5974(0x1bf)]; _0x168d86++) {
                                    if (transferList[_0x168d86]["id"] == _0x41ccd8["id"]) {
                                        (transferList[_0x168d86]["dc"] = _0x33a34c), (_0x32fc5c = _0x168d86), (transferList[_0x32fc5c][_0x5e5974(0x592)] = 0x2), updateDownloadLink(_0x32fc5c);
                                        break;
                                    }
                                }
                            } else errorlog(_0x5e5974(0x286));
                            warnlog(_0x41ccd8);
                            return;
                        } catch (_0x4d4fab) {
                            errorlog(_0x4d4fab);
                        }
                    try {
                        var _0x16b130 = _0x6614e5[_0x5e5974(0x5a0)];
                        if (_0x16b130 == _0x5e5974(0x13e)) {
                            log("Transfer\x20was\x20completed\x20successfully");
                            try {
                                _0x33a34c["close"]();
                            } catch (_0xc9bc56) {}
                            (transferList[_0x32fc5c]["status"] = 0x3), updateDownloadLink(_0x32fc5c);
                            return;
                        } else {
                            if (_0x16b130 == _0x5e5974(0xa3f)) {
                                warnlog(_0x5e5974(0x465));
                                try {
                                    _0x33a34c[_0x5e5974(0x36e)]();
                                } catch (_0xfe012f) {}
                                (transferList[_0x32fc5c][_0x5e5974(0x592)] = 0x5), updateDownloadLink(_0x32fc5c);
                                return;
                            } else {
                                try {
                                    _0x39d8d8 += 0x1;
                                    try {
                                        var _0x403c58 = [new Uint8Array(_0x16b130)];
                                        if (_0x56c792[_0x5e5974(0x3d6)]) _0x56c792["writer"]["write"](new Blob(_0x403c58));
                                        else {
                                        }
                                    } catch (_0x2ca02c) {
                                        errorlog(_0x2ca02c);
                                    }
                                    (_0x39d8d8 -= 0x1), (_0x313ea3 += _0x16b130[_0x5e5974(0x423)]);
                                    var _0x3263ad = _0x313ea3 / _0x41ccd8[_0x5e5974(0x2c9)];
                                    (transferList[_0x32fc5c][_0x5e5974(0x3bf)] = _0x3263ad), updateDownloadLink(_0x32fc5c);
                                } catch (_0x3b8125) {
                                    errorlog(_0x3b8125);
                                }
                                return;
                            }
                        }
                    } catch (_0x1ae199) {
                        errorlog(_0x1ae199);
                    }
                }),
                (_0x33a34c[_0x333d7d(0x907)] = (_0x4caa80) => {
                    var _0x34041b = _0x333d7d;
                    _0x39d8d8 <= 0x0 &&
                        _0x56c792["writer"] &&
                        setTimeout(
                            function (_0x4737e2, _0x2c394d) {
                                var _0x538383 = _0x3e5e;
                                _0x2c394d <= 0x0
                                    ? (_0x4737e2[_0x538383(0x36e)](), (_0x4737e2 = null))
                                    : setTimeout(
                                          function (_0x3e25b4, _0x261039) {
                                              _0x3e25b4["close"](), (_0x3e25b4 = null);
                                          },
                                          0x1388,
                                          _0x4737e2
                                      );
                            },
                            0x3e8,
                            _0x56c792[_0x34041b(0x3d6)],
                            _0x39d8d8
                        );
                    _0x33a34c = null;
                    return;
                });
            return;
        });
    async function _0x5dec33(_0x3e10bb, _0x4c8d58 = ![]) {
        var _0x13b9d1 = _0x4e3749;
        _0x3e10bb[_0x13b9d1(0x888)][_0x13b9d1(0x233)](_0x3e10bb["queue"][_0x13b9d1(0x4c1)]());
        if (_0x3e10bb[_0x13b9d1(0x92b)] === null && !_0x4c8d58) return;
        _0x3e10bb["nextQueue"] = setTimeout(
            function (_0x38fec9) {
                _0x5dec33(_0x38fec9);
            },
            0x21,
            _0x3e10bb
        );
    }
    return (
        (_0x531b4d[_0x4e3749(0x157)] = async function (_0x197e8c, _0x164935, _0x30d231) {
            var _0x4c3e63 = _0x4e3749;
            log("Created\x20transfer\x20channel");
            var _0x51579f = _0x30d231;
            _0x51579f[_0x4c3e63(0x5fe)] = _0x4c3e63(0x426);
            var _0x20abda = "",
                _0xd28f11 = 0x0,
                _0x9fb471 = ![],
                _0x4ba5f = ![],
                _0x5756af = {};
            (_0x51579f[_0x4c3e63(0x2d6)] = (_0x1704de) => {
                var _0x5dc7cc = _0x4c3e63;
                log(_0x5dc7cc(0x2ba));
            }),
                (_0x51579f[_0x4c3e63(0x907)] = async function (_0x1aabf1) {
                    var _0x40b271 = _0x4c3e63;
                    if (_0x5756af[_0x40b271(0x2d5)]) {
                        if (_0x5756af["videoElement"]["stopWriter"]) {
                            await delay(0x3e8);
                            try {
                                await _0x5756af[_0x40b271(0x6fa)]["stopWriter"]();
                            } catch (_0x11d946) {}
                        }
                    }
                    _0x51579f = null;
                    _0x531b4d[_0x40b271(0x39e)][_0x164935] && (delete _0x531b4d[_0x40b271(0x39e)][_0x164935][_0x40b271(0x21d)]["chunked_mode_video"], delete _0x531b4d[_0x40b271(0x39e)][_0x164935][_0x40b271(0x21d)]["chunked_mode_audio"]);
                    return;
                });
            async function _0x902286() {
                var _0x1a0812 = _0x4c3e63,
                    _0x5889c2 = await window[_0x1a0812(0x2ea)]({ startIn: _0x1a0812(0x23a), suggestedName: _0x1a0812(0x3b6), types: [{ description: _0x1a0812(0x255), accept: { "video/webm": [".webm"] } }] }),
                    _0x4bbc65 = await _0x5889c2["createWritable"]();
                return (
                    (_0x5756af[_0x1a0812(0x95d)]["fileWriter"] = _0x4bbc65),
                    (_0x5756af[_0x1a0812(0x2d5)] = new WebMWriter(_0x5756af[_0x1a0812(0x95d)])),
                    (_0x5756af[_0x1a0812(0x6fa)][_0x1a0812(0x821)] = async function () {
                        var _0x515560 = _0x1a0812;
                        (_0x5756af[_0x515560(0x6fa)][_0x515560(0x821)] = ![]),
                            clearInterval(_0x5756af[_0x515560(0x8b2)]),
                            (_0x5756af[_0x515560(0x8b2)] = null),
                            await _0x5756af[_0x515560(0x2d5)]["complete"](),
                            _0x5756af["writer_config"][_0x515560(0x17d)][_0x515560(0x36e)]();
                    }),
                    _0x5756af["videoWriter"]
                );
            }
            _0x51579f[_0x4c3e63(0x1e5)] = async function (_0x117b0d) {
                var _0x2b5d1e = _0x4c3e63;
                if (!_0x9fb471)
                    try {
                        _0x9fb471 = JSON["parse"](_0x117b0d["data"]);
                        if (_0x9fb471["type"] == _0x2b5d1e(0x607)) {
                            log("CHUNKED\x20DETAILS"),
                                log(_0x9fb471),
                                (_0x5756af[_0x2b5d1e(0x49f)] = _0x164935),
                                (_0x5756af[_0x2b5d1e(0x3bf)] = 0x0),
                                (_0x5756af[_0x2b5d1e(0x592)] = 0x2),
                                (_0x5756af[_0x2b5d1e(0x2e0)] = Date["now"]()),
                                (_0x5756af[_0x2b5d1e(0x6e4)] = _0x9fb471[_0x2b5d1e(0xa1c)]),
                                (_0x5756af[_0x2b5d1e(0x52c)] = _0x5756af[_0x2b5d1e(0x2e0)] - _0x9fb471["timestamp"]),
                                (_0x5756af["dc"] = _0x51579f),
                                (_0x5756af["id"] = _0x9fb471["id"]),
                                (_0x5756af["updateTime"] = null),
                                (_0x5756af[_0x2b5d1e(0x1a4)] = ![]),
                                (_0x5756af["videoElement"] = createVideoElement()),
                                (_0x5756af["videoElement"][_0x2b5d1e(0x5c7)] = !![]),
                                (_0x5756af[_0x2b5d1e(0x6fa)][_0x2b5d1e(0x7d5)] = ![]),
                                _0x5756af[_0x2b5d1e(0x6fa)]["setAttribute"](_0x2b5d1e(0x831), ""),
                                (_0x5756af[_0x2b5d1e(0x6fa)]["dataset"]["UUID"] = _0x164935),
                                (_0x5756af[_0x2b5d1e(0x6fa)][_0x2b5d1e(0x607)] = !![]),
                                (_0x5756af[_0x2b5d1e(0x6fa)][_0x2b5d1e(0x60a)] = new MediaStream()),
                                (_0x531b4d[_0x2b5d1e(0x39e)][_0x164935][_0x2b5d1e(0x8cc)] = _0x5756af[_0x2b5d1e(0x6fa)][_0x2b5d1e(0x60a)]),
                                (_0x531b4d[_0x2b5d1e(0x39e)][_0x164935][_0x2b5d1e(0x6fa)] = _0x5756af[_0x2b5d1e(0x6fa)]);
                            _0x531b4d["rpcs"][_0x164935][_0x2b5d1e(0x42e)] !== ![] && (_0x531b4d[_0x2b5d1e(0x39e)][_0x164935]["videoElement"]["rotated"] = _0x531b4d[_0x2b5d1e(0x39e)][_0x164935][_0x2b5d1e(0x42e)]);
                            _0x5756af[_0x2b5d1e(0x6fa)][_0x2b5d1e(0x979)](
                                "playing",
                                (_0x31f5bd) => {
                                    var _0x52d33d = _0x2b5d1e;
                                    try {
                                        var _0x11d8e2 = document[_0x52d33d(0x266)](_0x52d33d(0x959));
                                        _0x11d8e2 && _0x11d8e2[_0x52d33d(0x6e0)][_0x52d33d(0x1c5)](_0x11d8e2);
                                    } catch (_0x391bb0) {}
                                    _0x5756af["playing"] = !![];
                                    if (_0x5756af[_0x52d33d(0x19e)]) _0x5756af[_0x52d33d(0x19e)][_0x52d33d(0x74c)]();
                                    else _0x531b4d[_0x52d33d(0x88a)] && _0x531b4d["audioCtx"][_0x52d33d(0x74c)]();
                                    try {
                                        _0x531b4d["pip"] && v[_0x52d33d(0x6f8)] >= 0x3 && !v[_0x52d33d(0x5fc)] && ((v[_0x52d33d(0x5fc)] = !![]), toggleSystemPip(v, !![]));
                                    } catch (_0x1c1c78) {}
                                },
                                { once: !![] }
                            ),
                                _0x5756af[_0x2b5d1e(0x6fa)][_0x2b5d1e(0x979)](_0x2b5d1e(0xa08), function (_0x4d2718) {
                                    errorlog(_0x4d2718);
                                }),
                                (_0x5756af[_0x2b5d1e(0x6fa)][_0x2b5d1e(0x965)] = _0x902286),
                                (_0x5756af["videoElement"][_0x2b5d1e(0x8fb)] = function () {
                                    updateMixer();
                                }),
                                (_0x5756af[_0x2b5d1e(0x2d5)] = ![]),
                                (_0x5756af[_0x2b5d1e(0x657)] = ![]),
                                (_0x5756af[_0x2b5d1e(0x95d)] = {}),
                                (_0x5756af[_0x2b5d1e(0x95d)]["video"] = ![]),
                                (_0x5756af[_0x2b5d1e(0x95d)]["audio"] = ![]),
                                (_0x5756af[_0x2b5d1e(0x499)] = ![]),
                                (_0x5756af[_0x2b5d1e(0x531)] = ![]),
                                (_0x5756af[_0x2b5d1e(0x41b)] = ![]),
                                (_0x5756af[_0x2b5d1e(0x9c1)] = ![]),
                                (_0x5756af[_0x2b5d1e(0x211)] = ![]),
                                (_0x5756af[_0x2b5d1e(0x9bb)] = ![]),
                                (_0x5756af[_0x2b5d1e(0x867)] = ![]),
                                (_0x5756af["playing"] = ![]);
                            _0x9fb471["configVideo"] &&
                                ((_0x531b4d[_0x2b5d1e(0x39e)][_0x164935][_0x2b5d1e(0x21d)][_0x2b5d1e(0x1fe)] = _0x9fb471[_0x2b5d1e(0x271)]),
                                (_0x5756af[_0x2b5d1e(0x499)] = {}),
                                (_0x5756af[_0x2b5d1e(0x499)]["width"] = _0x9fb471[_0x2b5d1e(0x271)][_0x2b5d1e(0x3c1)] + "" || "1280"),
                                (_0x5756af[_0x2b5d1e(0x499)][_0x2b5d1e(0x63d)] = _0x9fb471[_0x2b5d1e(0x271)][_0x2b5d1e(0x63d)] + "" || "720"),
                                (_0x5756af[_0x2b5d1e(0x499)]["codec"] = _0x9fb471[_0x2b5d1e(0x271)]["codec"] || _0x2b5d1e(0x756)),
                                (_0x5756af[_0x2b5d1e(0x95d)][_0x2b5d1e(0x211)] = !![]),
                                (_0x5756af[_0x2b5d1e(0x95d)][_0x2b5d1e(0x3c1)] = parseInt(_0x5756af[_0x2b5d1e(0x499)][_0x2b5d1e(0x3c1)])),
                                (_0x5756af["writer_config"][_0x2b5d1e(0x63d)] = parseInt(_0x5756af[_0x2b5d1e(0x499)][_0x2b5d1e(0x63d)])),
                                _0x9fb471[_0x2b5d1e(0x271)][_0x2b5d1e(0x7e3)] == _0x2b5d1e(0x756) ? (_0x5756af[_0x2b5d1e(0x95d)][_0x2b5d1e(0x7e3)] = "VP9") : (_0x5756af[_0x2b5d1e(0x95d)][_0x2b5d1e(0x7e3)] = _0x2b5d1e(0x75c)),
                                (_0x5756af[_0x2b5d1e(0x41b)] = {
                                    output: (_0x2ad1ac) => {
                                        var _0x4a409b = _0x2b5d1e;
                                        _0x5756af[_0x4a409b(0x211)][_0x4a409b(0x848)][_0x4a409b(0x5a9)](_0x2ad1ac);
                                    },
                                    error: (_0x3a9b41) => {
                                        var _0x475dfb = _0x2b5d1e;
                                        _0x5756af[_0x475dfb(0x211)]["decoder"][_0x475dfb(0x469)] == _0x475dfb(0x9e2) ? warnlog(_0x475dfb(0x5f4)) : errorlog(_0x3a9b41[_0x475dfb(0x3a4)]);
                                    },
                                }),
                                (_0x5756af[_0x2b5d1e(0x211)] = {}),
                                (_0x5756af[_0x2b5d1e(0x211)][_0x2b5d1e(0x8a9)] = new MediaStreamTrackGenerator({ kind: _0x2b5d1e(0x211) })),
                                (_0x5756af[_0x2b5d1e(0x211)][_0x2b5d1e(0x97f)] = new MediaStream([_0x5756af[_0x2b5d1e(0x211)][_0x2b5d1e(0x8a9)]])),
                                (_0x5756af["video"][_0x2b5d1e(0x848)] = _0x5756af[_0x2b5d1e(0x211)][_0x2b5d1e(0x8a9)][_0x2b5d1e(0x7d9)]["getWriter"]()),
                                (_0x5756af[_0x2b5d1e(0x211)]["decoder"] = new VideoDecoder(_0x5756af[_0x2b5d1e(0x41b)])),
                                _0x5756af[_0x2b5d1e(0x211)]["decoder"][_0x2b5d1e(0x9e8)](_0x5756af[_0x2b5d1e(0x499)]),
                                (_0x5756af[_0x2b5d1e(0x211)][_0x2b5d1e(0x738)] = []),
                                (_0x5756af[_0x2b5d1e(0x211)][_0x2b5d1e(0x92b)] = null),
                                (_0x5756af[_0x2b5d1e(0x211)][_0x2b5d1e(0x994)] = ![]),
                                (_0x5756af[_0x2b5d1e(0x211)][_0x2b5d1e(0x563)] = ![]),
                                _0x2b5d1e(0x796) in _0x9fb471 && (_0x5756af[_0x2b5d1e(0x211)][_0x2b5d1e(0x5fd)] = _0x9fb471[_0x2b5d1e(0x796)]),
                                _0x5756af[_0x2b5d1e(0x6fa)][_0x2b5d1e(0x60a)][_0x2b5d1e(0x258)](_0x5756af[_0x2b5d1e(0x211)][_0x2b5d1e(0x97f)]["getVideoTracks"]()[0x0]));
                            _0x9fb471["configAudio"] &&
                                ((_0x531b4d[_0x2b5d1e(0x39e)][_0x164935]["stats"][_0x2b5d1e(0x83c)] = _0x9fb471[_0x2b5d1e(0x36d)]),
                                (_0x5756af["stream_configAudio"] = _0x9fb471[_0x2b5d1e(0x36d)]),
                                (_0x5756af[_0x2b5d1e(0x95d)][_0x2b5d1e(0x9bb)] = !![]),
                                (_0x5756af[_0x2b5d1e(0x95d)][_0x2b5d1e(0x562)] = _0x9fb471[_0x2b5d1e(0x36d)][_0x2b5d1e(0x4f6)] || 0xbb80),
                                (_0x5756af[_0x2b5d1e(0x95d)][_0x2b5d1e(0x160)] = _0x9fb471[_0x2b5d1e(0x36d)][_0x2b5d1e(0x282)] || 0x1),
                                _0x5756af["stream_configAudio"][_0x2b5d1e(0x7e3)] && _0x5756af[_0x2b5d1e(0x531)][_0x2b5d1e(0x7e3)] == _0x2b5d1e(0x300)
                                    ? (!_0x5756af[_0x2b5d1e(0x521)]
                                          ? (_0x5756af[_0x2b5d1e(0x521)] = _0x531b4d["audioCtx"][_0x2b5d1e(0x60b)]())
                                          : _0x5756af[_0x2b5d1e(0x6fa)]["srcObject"]["getAudioTracks"]()[_0x2b5d1e(0x774)]((_0x6045dc) => {
                                                var _0x583341 = _0x2b5d1e;
                                                _0x5756af[_0x583341(0x6fa)]["srcObject"]["removeTrack"](_0x6045dc);
                                            }),
                                      _0x5756af[_0x2b5d1e(0x521)][_0x2b5d1e(0x97f)][_0x2b5d1e(0x776)]()["forEach"]((_0x58f2d8) => {
                                          var _0x4a60e2 = _0x2b5d1e;
                                          _0x5756af[_0x4a60e2(0x6fa)][_0x4a60e2(0x60a)][_0x4a60e2(0x258)](_0x58f2d8);
                                      }),
                                      (_0x5756af[_0x2b5d1e(0x4f4)] = !![]))
                                    : ((_0x5756af[_0x2b5d1e(0x9bb)] = {}),
                                      (_0x5756af[_0x2b5d1e(0x9bb)]["queue"] = []),
                                      (_0x5756af[_0x2b5d1e(0x9bb)][_0x2b5d1e(0x92b)] = null),
                                      _0x2b5d1e(0x2eb) in _0x9fb471 && (_0x5756af["audio"][_0x2b5d1e(0x5fd)] = _0x9fb471[_0x2b5d1e(0x2eb)]),
                                      (_0x5756af[_0x2b5d1e(0x9c1)] = {
                                          output: (_0x49a760) => {
                                              var _0x991a84 = _0x2b5d1e;
                                              _0x5756af[_0x991a84(0x9bb)][_0x991a84(0x848)][_0x991a84(0x5a9)](_0x49a760);
                                              if (_0x5756af[_0x991a84(0x335)]) return;
                                              var _0x475fe1 = _0x49a760["timestamp"] / 0x3e8 - (Date[_0x991a84(0x312)]() - _0x5756af[_0x991a84(0x52c)] - _0x5756af[_0x991a84(0x9bb)][_0x991a84(0x5fd)]);
                                              _0x475fe1 = _0x475fe1 - (_0x531b4d[_0x991a84(0x88a)][_0x991a84(0x4a9)] || 0x0) * 0x3e8 - (_0x531b4d[_0x991a84(0x88a)][_0x991a84(0x1fb)] || 0x0) * 0x3e8;
                                              var _0xf29f42 = 0x3e7;
                                              if (!_0x531b4d[_0x991a84(0x39e)][_0x5756af["UUID"]]) return;
                                              else {
                                                  if (_0x531b4d[_0x991a84(0x39e)][_0x5756af[_0x991a84(0x49f)]][_0x991a84(0x1a4)] !== ![]) _0xf29f42 = _0x531b4d[_0x991a84(0x39e)][_0x5756af["UUID"]][_0x991a84(0x1a4)];
                                                  else _0x531b4d["buffer"] !== ![] ? (_0xf29f42 = _0x531b4d["buffer"]) : (_0x531b4d[_0x991a84(0x39e)][_0x5756af["UUID"]][_0x991a84(0x1a4)] = _0xf29f42);
                                              }
                                              (_0x475fe1 += _0xf29f42 - 0x78),
                                                  _0x475fe1 <= 0x0 && (_0x475fe1 = 0x0),
                                                  _0x5756af["delayNode"][_0x991a84(0x356)]["setValueAtTime"](parseFloat(_0x475fe1 / 0x3e8), _0x531b4d[_0x991a84(0x88a)][_0x991a84(0xa1e)]),
                                                  (_0x5756af[_0x991a84(0x335)] = setTimeout(function () {
                                                      var _0x314134 = _0x991a84;
                                                      _0x5756af[_0x314134(0x335)] = null;
                                                  }, _0x475fe1));
                                          },
                                          error: (_0x18757c) => {
                                              var _0x5c974b = _0x2b5d1e;
                                              _0x5756af["audio"][_0x5c974b(0x888)]["state"] == _0x5c974b(0x9e2) ? warnlog(_0x5c974b(0x5f4)) : errorlog(_0x18757c[_0x5c974b(0x3a4)]);
                                          },
                                      }),
                                      (_0x5756af[_0x2b5d1e(0x9bb)][_0x2b5d1e(0x888)] = new AudioDecoder(_0x5756af[_0x2b5d1e(0x9c1)])),
                                      _0x5756af[_0x2b5d1e(0x9bb)]["decoder"]["configure"](_0x5756af[_0x2b5d1e(0x531)]),
                                      (_0x5756af["audio"]["generator"] = new MediaStreamTrackGenerator({ kind: _0x2b5d1e(0x9bb) })),
                                      (_0x5756af[_0x2b5d1e(0x9bb)][_0x2b5d1e(0x848)] = _0x5756af[_0x2b5d1e(0x9bb)]["generator"][_0x2b5d1e(0x7d9)][_0x2b5d1e(0x1b0)]()),
                                      (_0x5756af[_0x2b5d1e(0x9bb)][_0x2b5d1e(0x97f)] = new MediaStream([_0x5756af[_0x2b5d1e(0x9bb)][_0x2b5d1e(0x8a9)]])),
                                      (_0x5756af[_0x2b5d1e(0x9bb)]["audioNode"] = _0x531b4d[_0x2b5d1e(0x88a)][_0x2b5d1e(0x8e1)](_0x5756af["audio"][_0x2b5d1e(0x97f)])),
                                      (_0x5756af[_0x2b5d1e(0x8ec)] = _0x531b4d[_0x2b5d1e(0x88a)][_0x2b5d1e(0x5d2)](0x1e)),
                                      (_0x5756af[_0x2b5d1e(0x8ec)]["delayTime"][_0x2b5d1e(0x857)] = 0x0),
                                      _0x5756af[_0x2b5d1e(0x9bb)][_0x2b5d1e(0x338)][_0x2b5d1e(0x8d6)](_0x5756af["delayNode"]),
                                      (_0x5756af[_0x2b5d1e(0x521)] = _0x531b4d[_0x2b5d1e(0x88a)][_0x2b5d1e(0x60b)]()),
                                      _0x5756af["delayNode"][_0x2b5d1e(0x8d6)](_0x5756af[_0x2b5d1e(0x521)]),
                                      _0x5756af["destination"][_0x2b5d1e(0x97f)]["getAudioTracks"]()[_0x2b5d1e(0x774)]((_0x1a53be) => {
                                          var _0x2aea72 = _0x2b5d1e;
                                          _0x5756af[_0x2aea72(0x6fa)]["srcObject"][_0x2aea72(0x258)](_0x1a53be);
                                      })));
                            warnlog(_0x9fb471), setupIncomingVideoTracking(_0x531b4d[_0x2b5d1e(0x39e)][_0x164935][_0x2b5d1e(0x6fa)], _0x164935);
                            if (_0x5756af[_0x2b5d1e(0x9bb)] && _0x5756af[_0x2b5d1e(0x211)]) updateIncomingVideoElement(_0x164935);
                            else {
                                if (_0x5756af["video"]) updateIncomingVideoElement(_0x164935, !![], ![]);
                                else _0x5756af[_0x2b5d1e(0x9bb)] && updateIncomingVideoElement(_0x164935, ![], !![]);
                            }
                            transferList[_0x2b5d1e(0x874)](_0x5756af),
                                (_0x4ba5f = transferList[_0x2b5d1e(0x1bf)] - 0x1),
                                updateDownloadLink(_0x4ba5f),
                                (_0x5756af["processFrame"] = async function (_0x1e9f6) {
                                    var _0x3d8407 = _0x2b5d1e;
                                    if (_0x1e9f6["type"] == _0x3d8407(0x9bb))
                                        (_0x531b4d[_0x3d8407(0x39e)][_0x164935][_0x3d8407(0x21d)][_0x3d8407(0x83c)][_0x3d8407(0x978)] = parseInt(_0x1e9f6[_0x3d8407(0xa1c)] / 0x2710) / 0x64), _0x5756af["processFrameAudio"](_0x1e9f6);
                                    else {
                                        if (_0x1e9f6[_0x3d8407(0x6a5)] == "pcm") {
                                            var _0x52dce5 = _0x531b4d[_0x3d8407(0x88a)][_0x3d8407(0x55a)]();
                                            _0x52dce5["connect"](_0x5756af[_0x3d8407(0x521)]),
                                                (_0x52dce5["onended"] = function () {
                                                    this["disconnect"]();
                                                });
                                            var _0x2df1a9 = _0x531b4d[_0x3d8407(0x88a)][_0x3d8407(0x7b2)](0x2, _0x1e9f6[_0x3d8407(0x5a0)][_0x3d8407(0x1bf)], _0x531b4d[_0x3d8407(0x88a)][_0x3d8407(0x4f6)] / 0x2);
                                            _0x52dce5[_0x3d8407(0x1a4)] = _0x2df1a9;
                                            var _0x10506e = _0x2df1a9[_0x3d8407(0x19b)](0x0)[_0x3d8407(0x2d3)](_0x1e9f6[_0x3d8407(0x5a0)]);
                                            _0x52dce5["start"](0x0);
                                        } else (_0x531b4d["rpcs"][_0x164935][_0x3d8407(0x21d)]["chunked_mode_video"][_0x3d8407(0x978)] = parseInt(_0x1e9f6[_0x3d8407(0xa1c)] / 0x2710) / 0x64), _0x5756af[_0x3d8407(0x484)](_0x1e9f6);
                                    }
                                }),
                                (_0x5756af[_0x2b5d1e(0x484)] = async function (_0xdbb99d) {
                                    var _0x46d1e6 = _0x2b5d1e;
                                    try {
                                        _0xdbb99d = new EncodedVideoChunk(_0xdbb99d);
                                    } catch (_0x494029) {
                                        errorlog(_0x494029), errorlog(_0xdbb99d);
                                        return;
                                    }
                                    if (_0x5756af[_0x46d1e6(0x2d5)] && _0x5756af[_0x46d1e6(0x6fa)]["stopWriter"]) {
                                        if (!_0x5756af[_0x46d1e6(0x211)]["header"] && _0xdbb99d[_0x46d1e6(0x6a5)] !== _0x46d1e6(0x2d9))
                                            log(_0x46d1e6(0x6ed)),
                                                log(_0xdbb99d),
                                                !_0x5756af[_0x46d1e6(0x9f7)] &&
                                                    (_0x51579f[_0x46d1e6(0x3e0)](JSON[_0x46d1e6(0x30c)]({ kf: !![] })),
                                                    (_0x5756af[_0x46d1e6(0x9f7)] = setTimeout(function () {
                                                        var _0x4c449f = _0x46d1e6;
                                                        clearTimeout(_0x5756af[_0x4c449f(0x9f7)]), (_0x5756af[_0x4c449f(0x9f7)] = null);
                                                    }, 0x3e8)));
                                        else
                                            !_0x5756af[_0x46d1e6(0x211)][_0x46d1e6(0x563)]
                                                ? ((_0x5756af[_0x46d1e6(0x211)]["header"] = Date[_0x46d1e6(0x312)]()),
                                                  _0x5756af[_0x46d1e6(0x2d5)]["addFrame"](_0xdbb99d),
                                                  log("start\x20writing\x20frames"),
                                                  _0x531b4d[_0x46d1e6(0x276)] &&
                                                      !_0x5756af[_0x46d1e6(0x8b2)] &&
                                                      (_0x5756af[_0x46d1e6(0x8b2)] = setInterval(
                                                          function (_0x39e5d7) {
                                                              var _0x3202c7 = _0x46d1e6,
                                                                  _0x6c2017 = (Date[_0x3202c7(0x312)]() - _0x5756af["video"][_0x3202c7(0x563)]) / 0x3e8,
                                                                  _0x3bb729 = Math[_0x3202c7(0x76d)](_0x6c2017 / 0x3c),
                                                                  _0x2750ee = Math[_0x3202c7(0x76d)](_0x6c2017 - _0x3bb729 * 0x3c);
                                                              try {
                                                                  document[_0x3202c7(0x1f5)](_0x3202c7(0x97d) + _0x39e5d7 + "\x27]")[_0x3202c7(0x5f5)] = _0x3202c7(0x911) + _0x3bb729 + _0x3202c7(0x16c) + zpadTime(_0x2750ee) + "s";
                                                              } catch (_0x55ecfe) {
                                                                  log(_0x3202c7(0x87a));
                                                              }
                                                          },
                                                          0x3e8,
                                                          _0x164935
                                                      )))
                                                : _0x5756af["videoWriter"]["addFrame"](_0xdbb99d);
                                    }
                                    _0x5756af["video"][_0x46d1e6(0x994)] &&
                                        _0x5756af["video"] &&
                                        _0x5756af["video"]["decoder"][_0x46d1e6(0x469)] === _0x46d1e6(0x9e2) &&
                                        (warnlog("Restarting\x20since\x20closed"),
                                        (_0x5756af[_0x46d1e6(0x211)][_0x46d1e6(0x994)] = ![]),
                                        (_0x5756af["video"][_0x46d1e6(0x888)] = new VideoDecoder(_0x5756af[_0x46d1e6(0x41b)])),
                                        await _0x5756af[_0x46d1e6(0x211)][_0x46d1e6(0x888)][_0x46d1e6(0x9e8)](_0x5756af[_0x46d1e6(0x499)]),
                                        (_0x5756af["video"]["playbackheader"] = ![]));
                                    if (_0x5756af[_0x46d1e6(0x211)][_0x46d1e6(0x994)] || _0xdbb99d[_0x46d1e6(0x6a5)] === _0x46d1e6(0x2d9)) {
                                        _0x5756af[_0x46d1e6(0x211)][_0x46d1e6(0x994)] = !![];
                                        try {
                                            if (_0x5756af[_0x46d1e6(0x211)][_0x46d1e6(0x92b)]) _0x5756af[_0x46d1e6(0x211)]["queue"]["push"](_0xdbb99d);
                                            else {
                                                if (_0x5756af[_0x46d1e6(0x211)][_0x46d1e6(0x738)]["length"]) _0x5756af[_0x46d1e6(0x211)]["queue"][_0x46d1e6(0x874)](_0xdbb99d);
                                                else {
                                                    if (_0x5756af[_0x46d1e6(0x211)]["realTime"]) {
                                                        _0x5756af[_0x46d1e6(0x211)][_0x46d1e6(0x92b)] = !![];
                                                        function _0xb7dcfb(_0x5a2508, _0x2f148d) {
                                                            var _0x42b2e9 = _0x46d1e6,
                                                                _0x1519f7 = _0x5a2508[_0x42b2e9(0xa1c)] / 0x3e8 - (Date[_0x42b2e9(0x312)]() - _0x2f148d[_0x42b2e9(0x52c)] - _0x2f148d[_0x42b2e9(0x211)][_0x42b2e9(0x5fd)]),
                                                                _0x5ac6fe = 0x3e7;
                                                            if (!_0x531b4d[_0x42b2e9(0x39e)][_0x2f148d[_0x42b2e9(0x49f)]]) {
                                                                clearTimeout(_0x2f148d[_0x42b2e9(0x211)][_0x42b2e9(0x92b)]), (_0x2f148d[_0x42b2e9(0x211)][_0x42b2e9(0x92b)] = null), (_0x2f148d["video"][_0x42b2e9(0x738)] = []);
                                                                return;
                                                            } else {
                                                                if (_0x531b4d[_0x42b2e9(0x39e)][_0x2f148d["UUID"]][_0x42b2e9(0x1a4)] !== ![]) _0x5ac6fe = _0x531b4d["rpcs"][_0x2f148d[_0x42b2e9(0x49f)]][_0x42b2e9(0x1a4)];
                                                                else _0x531b4d["buffer"] !== ![] ? (_0x5ac6fe = _0x531b4d[_0x42b2e9(0x1a4)]) : (_0x531b4d[_0x42b2e9(0x39e)][_0x2f148d[_0x42b2e9(0x49f)]][_0x42b2e9(0x1a4)] = _0x5ac6fe);
                                                            }
                                                            (_0x1519f7 += _0x5ac6fe),
                                                                _0x1519f7 < 0x0 && (_0x1519f7 = 0x0),
                                                                (_0x2f148d[_0x42b2e9(0x211)][_0x42b2e9(0x92b)] = setTimeout(
                                                                    function (_0x2c2354, _0x54d0f5) {
                                                                        var _0x142c54 = _0x42b2e9;
                                                                        _0x2c2354["video"][_0x142c54(0x888)]["decode"](_0x54d0f5),
                                                                            _0x2c2354[_0x142c54(0x211)][_0x142c54(0x738)]["length"]
                                                                                ? _0xb7dcfb(_0x2c2354[_0x142c54(0x211)][_0x142c54(0x738)][_0x142c54(0x4c1)](), _0x2c2354)
                                                                                : (_0x2c2354[_0x142c54(0x211)]["nextQueue"] = null);
                                                                    },
                                                                    _0x1519f7,
                                                                    _0x2f148d,
                                                                    _0x5a2508
                                                                ));
                                                        }
                                                        try {
                                                            _0xb7dcfb(_0xdbb99d, _0x5756af);
                                                        } catch (_0x41a1b4) {
                                                            errorlog(_0x41a1b4),
                                                                (_0x5756af[_0x46d1e6(0x211)][_0x46d1e6(0x92b)] = null),
                                                                !_0x5756af[_0x46d1e6(0x9f7)] &&
                                                                    (_0x51579f[_0x46d1e6(0x3e0)](JSON[_0x46d1e6(0x30c)]({ kf: !![] })),
                                                                    (_0x5756af[_0x46d1e6(0x9f7)] = setTimeout(function () {
                                                                        var _0x5c7eda = _0x46d1e6;
                                                                        clearTimeout(_0x5756af[_0x5c7eda(0x9f7)]), (_0x5756af[_0x5c7eda(0x9f7)] = null);
                                                                    }, 0x3e8)));
                                                        }
                                                    } else _0x5756af[_0x46d1e6(0x211)][_0x46d1e6(0x888)][_0x46d1e6(0x233)](_0xdbb99d);
                                                }
                                            }
                                        } catch (_0x4f1016) {
                                            errorlog(_0x4f1016), (_0x5756af[_0x46d1e6(0x211)][_0x46d1e6(0x994)] = ![]);
                                        }
                                    }
                                    !_0x5756af[_0x46d1e6(0x211)][_0x46d1e6(0x994)] &&
                                        !_0x5756af["requestKeyframe"] &&
                                        (_0x51579f["send"](JSON[_0x46d1e6(0x30c)]({ kf: !![] })),
                                        (_0x5756af[_0x46d1e6(0x9f7)] = setTimeout(function () {
                                            var _0x162084 = _0x46d1e6;
                                            clearTimeout(_0x5756af[_0x162084(0x9f7)]), (_0x5756af[_0x162084(0x9f7)] = null);
                                        }, 0x3e8)));
                                }),
                                (_0x5756af[_0x2b5d1e(0x35e)] = async function (_0xbd78c9) {
                                    var _0x2abc92 = _0x2b5d1e;
                                    if (!_0x5756af[_0x2abc92(0x9bb)]) {
                                        errorlog(_0x2abc92(0x8ce));
                                        return;
                                    }
                                    try {
                                        (_0xbd78c9[_0x2abc92(0x6a5)] = _0x2abc92(0x2d9)), (_0xbd78c9 = new EncodedAudioChunk(_0xbd78c9));
                                    } catch (_0x72a8a0) {
                                        return;
                                    }
                                    _0x5756af[_0x2abc92(0x2d5)] && _0x5756af[_0x2abc92(0x211)]["header"] && _0x5756af[_0x2abc92(0x6fa)][_0x2abc92(0x821)] && _0x5756af[_0x2abc92(0x2d5)][_0x2abc92(0x5b0)](_0xbd78c9),
                                        _0x5756af[_0x2abc92(0x9bb)][_0x2abc92(0x888)][_0x2abc92(0x469)] === "closed" &&
                                            ((_0x5756af["audio"][_0x2abc92(0x888)] = new AudioDecoder(_0x5756af[_0x2abc92(0x9c1)])), _0x5756af[_0x2abc92(0x9bb)]["decoder"][_0x2abc92(0x9e8)](_0x5756af[_0x2abc92(0x531)])),
                                        _0x5756af[_0x2abc92(0x9bb)]["decoder"][_0x2abc92(0x233)](_0xbd78c9);
                                });
                        } else {
                            if (_0x5756af[_0x2b5d1e(0x9bb)] && _0x9fb471[_0x2b5d1e(0x2eb)]) _0x5756af["audio"][_0x2b5d1e(0x5fd)] = _0x9fb471[_0x2b5d1e(0x2eb)];
                            else _0x5756af["video"] && _0x9fb471[_0x2b5d1e(0x796)] ? (_0x5756af[_0x2b5d1e(0x211)][_0x2b5d1e(0x5fd)] = _0x9fb471["realTimeVideo"]) : errorlog(_0x9fb471);
                        }
                        return;
                    } catch (_0x87d7fa) {
                        errorlog(_0x87d7fa);
                    }
                try {
                    var _0x3c70ca = _0x117b0d[_0x2b5d1e(0x5a0)];
                    if (typeof _0x3c70ca == _0x2b5d1e(0x987)) {
                        if (_0x5756af[_0x2b5d1e(0x1a4)]) {
                            var _0x16a32c = new Int8Array(_0x3c70ca[_0x2b5d1e(0x1a4)]);
                            (_0x5756af["buffer"] = ![]), await _0x5756af["processFrame"]({ data: _0x16a32c, timestamp: _0x5756af["frameMeta"][0x0], type: _0x5756af[_0x2b5d1e(0x657)][0x1] });
                        }
                        _0x5756af["frameMeta"] = JSON["parse"](_0x3c70ca);
                    } else {
                        try {
                            if (_0x3c70ca[_0x2b5d1e(0x423)] >= 0x40000) {
                                if (_0x5756af[_0x2b5d1e(0x1a4)]) {
                                    _0x3c70ca = new Int8Array(_0x3c70ca);
                                    var _0x16a32c = new Int8Array(_0x5756af["buffer"][_0x2b5d1e(0x1bf)] + _0x3c70ca[_0x2b5d1e(0x1bf)]);
                                    _0x16a32c[_0x2b5d1e(0x2d3)](_0x5756af[_0x2b5d1e(0x1a4)]), _0x16a32c[_0x2b5d1e(0x2d3)](_0x3c70ca, _0x5756af["buffer"][_0x2b5d1e(0x1bf)]), (_0x5756af[_0x2b5d1e(0x1a4)] = _0x16a32c);
                                } else _0x5756af[_0x2b5d1e(0x1a4)] = new Int8Array(_0x3c70ca);
                                return;
                            } else {
                                if (_0x5756af[_0x2b5d1e(0x1a4)]) {
                                    _0x3c70ca = new Int8Array(_0x3c70ca);
                                    var _0x16a32c = new Int8Array(_0x5756af[_0x2b5d1e(0x1a4)][_0x2b5d1e(0x1bf)] + _0x3c70ca[_0x2b5d1e(0x1bf)]);
                                    _0x16a32c[_0x2b5d1e(0x2d3)](_0x5756af[_0x2b5d1e(0x1a4)]),
                                        _0x16a32c[_0x2b5d1e(0x2d3)](_0x3c70ca, _0x5756af[_0x2b5d1e(0x1a4)][_0x2b5d1e(0x1bf)]),
                                        (_0x5756af[_0x2b5d1e(0x1a4)] = ![]),
                                        await _0x5756af[_0x2b5d1e(0x347)]({ data: _0x16a32c, timestamp: _0x5756af[_0x2b5d1e(0x657)][0x0], type: _0x5756af["frameMeta"][0x1] });
                                } else
                                    await _0x5756af[_0x2b5d1e(0x347)]({ data: new Uint8Array(_0x3c70ca), timestamp: _0x5756af[_0x2b5d1e(0x657)][0x0], type: _0x5756af[_0x2b5d1e(0x657)][0x1] }),
                                        _0x5756af[_0x2b5d1e(0x671)] && _0x5756af["fillDataBuffer"]();
                            }
                        } catch (_0x46dccc) {
                            errorlog(_0x46dccc);
                        }
                        return;
                    }
                } catch (_0x683463) {
                    errorlog(_0x683463);
                }
            };
            return;
        }),
        (_0x531b4d[_0x4e3749(0x77b)] = async function (_0x49b36c) {
            var _0x10fd08 = _0x4e3749;
            log("SETUP\x20INCOMING");
            var _0x899509 = _0x49b36c[_0x10fd08(0x49f)];
            if (_0x899509 in _0x531b4d["rpcs"]) {
                if (_0x10fd08(0x6df) in _0x49b36c && _0x49b36c[_0x10fd08(0x6df)]) {
                    if (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x6df)] == _0x49b36c["session"]) {
                        log(_0x10fd08(0x8f4));
                        return;
                    }
                    warnlog(_0x10fd08(0x7d2)), _0x531b4d["closeRPC"](_0x899509);
                }
            } else log(_0x10fd08(0x444));
            try {
                for (var _0x5a0b5a in _0x531b4d[_0x10fd08(0x39e)]) {
                    _0x531b4d[_0x10fd08(0x39e)][_0x5a0b5a][_0x10fd08(0x4f8)] == _0x49b36c[_0x10fd08(0x4f8)] &&
                        (_0x531b4d["rpcs"][_0x5a0b5a][_0x10fd08(0x375)] && errorlog(_0x10fd08(0x366)),
                        _0x531b4d[_0x10fd08(0x39e)][_0x5a0b5a][_0x10fd08(0x6fa)] && (_0x531b4d[_0x10fd08(0x39e)][_0x5a0b5a][_0x10fd08(0x6fa)][_0x10fd08(0xa19)][_0x10fd08(0x707)] = _0x10fd08(0x9b9)),
                        warnlog(_0x10fd08(0x941)),
                        _0x531b4d["closeRPC"](_0x5a0b5a),
                        _0x5a0b5a !== _0x899509 &&
                            _0x5a0b5a in _0x531b4d[_0x10fd08(0x8cd)] &&
                            (_0x49b36c[_0x10fd08(0x6df)] && _0x49b36c[_0x10fd08(0x6df)][_0x10fd08(0x466)](0x0, 0x6) !== _0x531b4d[_0x10fd08(0x755)]
                                ? (warnlog("CLOSING\x20SECONDARY\x20CONNECTION;\x20matched\x20stream\x20ID\x20has\x20re-connected"), log(_0x10fd08(0x903)), _0x531b4d[_0x10fd08(0x790)](_0x5a0b5a, ![]))
                                : warnlog(_0x10fd08(0x2c6))));
                }
                document[_0x10fd08(0x266)](_0x10fd08(0x9b0)) && document[_0x10fd08(0x266)]("mainmenu")[_0x10fd08(0x6e0)][_0x10fd08(0x1c5)](document[_0x10fd08(0x266)]("mainmenu"));
            } catch (_0x3db799) {
                errorlog(_0x3db799);
            }
            if (_0x531b4d["maxpublishers"] !== ![]) {
                if (Object["keys"](_0x531b4d[_0x10fd08(0x39e)])["length"] >= _0x531b4d[_0x10fd08(0x18a)]) {
                    warnlog("Publisher\x20will\x20be\x20ignored\x20due\x20to\x20max\x20connections\x20already\x20hit");
                    return;
                }
            } else {
                if (_0x531b4d["maxconnections"] !== ![]) {
                    if (Object[_0x10fd08(0x440)](_0x531b4d[_0x10fd08(0x39e)])[_0x10fd08(0x1bf)] + Object[_0x10fd08(0x440)](_0x531b4d[_0x10fd08(0x8cd)])[_0x10fd08(0x1bf)] >= _0x531b4d[_0x10fd08(0x4f0)]) {
                        warnlog(_0x10fd08(0x84c));
                        return;
                    }
                }
            }
            if (_0x531b4d[_0x10fd08(0x738)]) {
                if (_0x531b4d["director"]) !(_0x899509 in _0x531b4d[_0x10fd08(0x8cd)]) && _0x531b4d[_0x10fd08(0x881)](_0x899509);
                else {
                    if (_0x531b4d[_0x10fd08(0x308)][_0x10fd08(0x438)](_0x899509) == -0x1) return;
                }
            }
            !_0x531b4d[_0x10fd08(0x5f8)] && (await chooseBestTURN());
            _0x531b4d[_0x10fd08(0x519)] && (_0x531b4d[_0x10fd08(0x5f8)]["encodedInsertableStreams"] = !![]);
            _0x531b4d[_0x10fd08(0x896)] && (_0x531b4d[_0x10fd08(0x5f8)][_0x10fd08(0x8c8)] = _0x531b4d["bundlePolicy"]);
            try {
                _0x531b4d[_0x10fd08(0x39e)][_0x899509] = new RTCPeerConnection(_0x531b4d[_0x10fd08(0x5f8)]);
            } catch (_0x766bcb) {
                !_0x531b4d[_0x10fd08(0x2d4)] && warnUser("An\x20RTC\x20error\x20occured.");
                errorlog(_0x766bcb);
                return;
            }
            if (_0x531b4d[_0x10fd08(0x820)]) {
                if (Object[_0x10fd08(0x440)](_0x531b4d[_0x10fd08(0x39e)])[_0x10fd08(0x1bf)] > 0x1) {
                    warnlog("TOO\x20MANY\x20PUBLISHING\x20PEERS"), log(_0x531b4d["rpcs"]), delete _0x531b4d[_0x10fd08(0x39e)][_0x899509], updateUserList();
                    return;
                } else warnlog(_0x10fd08(0x4ef));
            }
            _0x49b36c["streamID"] in _0x531b4d[_0x10fd08(0x83b)] && delete _0x531b4d["waitingWatchList"][_0x49b36c[_0x10fd08(0x4f8)]];
            try {
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x4f8)] = _0x49b36c["streamID"]), await checkDirectorStreamID();
            } catch (_0x4b47a5) {
                errorlog(_0x4b47a5);
                return;
            }
            _0x49b36c[_0x10fd08(0x6df)] ? (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x6df)] = _0x49b36c["session"]) : (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x6df)] = null);
            (_0x531b4d["rpcs"][_0x899509]["activelySpeaking"] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x181)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x3ed)] = ![]),
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x2c8)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x21d)] = {}),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x44d)] = ![]),
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x21d)][_0x10fd08(0x234)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x925)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x99d)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0xa2e)] = null),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x1a8)] = -0x1),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509]["bandwidthMuted"] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x1a4)] = ![]),
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0xa03)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x703)] = ![]),
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x3da)] = -0x1),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x696)] = ![]),
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x6fa)] = ![]),
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x976)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x7e8)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509]["group"] = []),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509]["videoMuted"] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x5f3)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x2ae)] = ![]),
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x97c)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x436)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x59b)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x3a9)] = ![]),
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x63e)] = null),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x344)] = null),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x787)] = null),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x2bd)] = null),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x42e)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x768)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x3f6)] = ![]),
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x9be)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x241)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x4b6)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509]["volumeControl"] = ![]),
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x8cc)] = null),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509]["screenIndexes"] = ![]),
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x2cc)] = ![]),
                (_0x531b4d["rpcs"][_0x899509]["director"] = null),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x3c3)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x5e5)] = 0x64),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509]["directorMutedState"] = 0x0),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x62f)] = 0x0),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x5c4)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x13b)] = "1"),
                (_0x531b4d["rpcs"][_0x899509]["opacityMuted"] = "1"),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x97e)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x778)] = 0x0),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x931)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x885)] = ![]),
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x7a2)] = null),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x2a8)] = null),
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x31b)] = {}),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x56c)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509]["iframeEle"] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x6f9)] = Date[_0x10fd08(0x312)]()),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x5e9)] = ![]),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509]["wssid"] = _0x531b4d[_0x10fd08(0x7a9)]);
            (_0x531b4d[_0x10fd08(0x4eb)] == 0x2 || _0x531b4d[_0x10fd08(0x4eb)] == 0x4) && (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x181)] = !![]);
            if (_0x531b4d[_0x10fd08(0x28c)]) {
                var _0x4c2723 = createRichVideoElement(_0x899509);
                _0x4c2723[_0x10fd08(0xa19)][_0x10fd08(0x707)] = _0x10fd08(0x4de);
            }
            if (_0x531b4d[_0x10fd08(0x276)]) {
                if (_0x531b4d[_0x10fd08(0xa2f)] && _0x10fd08(0x958) in _0x49b36c && _0x49b36c[_0x10fd08(0x958)] !== ![]) {
                } else {
                    var _0x1dbcbb = soloLinkGenerator(_0x531b4d[_0x10fd08(0x39e)][_0x899509]["streamID"]);
                    createControlBox(_0x899509, _0x1dbcbb, _0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x4f8)]);
                }
            }
            _0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x49f)] = _0x899509;
            try {
                if (_0x531b4d[_0x10fd08(0x60d)]) {
                    if (_0x531b4d[_0x10fd08(0x60d)]["includes"](_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x4f8)])) {
                        if (_0x531b4d[_0x10fd08(0x62c)] !== ![]) {
                            let _0xb296e4 = _0x531b4d["view_set"]["indexOf"](_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x4f8)]);
                            _0x531b4d[_0x10fd08(0x62c)][_0x10fd08(0x1bf)] > _0xb296e4 &&
                                ((_0x531b4d["rpcs"][_0x899509]["manualBandwidth"] = parseInt(_0x531b4d[_0x10fd08(0x62c)][_0xb296e4])),
                                _0x531b4d["rpcs"][_0x899509][_0x10fd08(0x696)] <= 0x0 && (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x696)] = ![]));
                        }
                    }
                }
            } catch (_0x17bf46) {
                errorlog(_0x17bf46);
            }
            (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x907)] = function (_0x35fdd5) {
                var _0x4ab14f = _0x10fd08;
                log(_0x4ab14f(0x1cf)), _0x531b4d[_0x4ab14f(0x812)](_0x899509);
            }),
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x891)] = null),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x68c)] = []),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x86b)] = function (_0x5c760f) {
                    var _0x38645d = _0x10fd08;
                    if (_0x5c760f[_0x38645d(0x6c8)] == null) {
                        log(_0x38645d(0x196));
                        _0x531b4d[_0x38645d(0x39e)][_0x899509] &&
                            _0x531b4d[_0x38645d(0x39e)][_0x899509][_0x38645d(0x9ed)] &&
                            (_0x531b4d[_0x38645d(0x39e)][_0x899509]["whipCallback2"]([..._0x531b4d["rpcs"][_0x899509][_0x38645d(0x68c)]]),
                            clearTimeout(_0x531b4d[_0x38645d(0x39e)][_0x899509][_0x38645d(0x891)]),
                            (_0x531b4d["rpcs"][_0x899509][_0x38645d(0x891)] = null),
                            (_0x531b4d[_0x38645d(0x39e)][_0x899509][_0x38645d(0x68c)] = []),
                            (_0x531b4d[_0x38645d(0x39e)][_0x899509][_0x38645d(0x9ed)] = null));
                        return;
                    }
                    try {
                        if (_0x531b4d[_0x38645d(0x969)]) {
                            if (_0x5c760f["candidate"]["candidate"][_0x38645d(0x438)](_0x531b4d[_0x38645d(0x969)]) === -0x1) {
                                log(_0x38645d(0x7ba));
                                return;
                            } else log(_0x5c760f[_0x38645d(0x6c8)]);
                        }
                    } catch (_0x5ebd3e) {
                        errorlog(_0x5ebd3e);
                    }
                    if (_0x531b4d[_0x38645d(0x39e)][_0x899509] && (_0x531b4d["rpcs"][_0x899509][_0x38645d(0x9ed)] || _0x531b4d["rpcs"][_0x899509][_0x38645d(0x891)] !== null)) {
                        _0x531b4d[_0x38645d(0x39e)][_0x899509]["iceBundle"][_0x38645d(0x874)](_0x5c760f[_0x38645d(0x6c8)]);
                        return;
                    }
                    _0x531b4d[_0x38645d(0x39e)][_0x899509][_0x38645d(0x68c)][_0x38645d(0x874)](_0x5c760f["candidate"]),
                        (_0x531b4d[_0x38645d(0x39e)][_0x899509]["iceTimer"] = setTimeout(
                            function (_0x49f9c6) {
                                var _0x55aff2 = _0x38645d;
                                if (!(_0x49f9c6 in _0x531b4d[_0x55aff2(0x39e)])) return;
                                if (_0x531b4d[_0x55aff2(0x39e)][_0x49f9c6]["whipCallback2"]) return;
                                _0x531b4d["rpcs"][_0x49f9c6]["iceTimer"] = null;
                                if (_0x531b4d[_0x55aff2(0x39e)][_0x49f9c6][_0x55aff2(0x68c)] == []) return;
                                var _0x3eac0e = {};
                                (_0x3eac0e[_0x55aff2(0x49f)] = _0x49f9c6),
                                    (_0x3eac0e["type"] = "remote"),
                                    (_0x3eac0e[_0x55aff2(0x9ff)] = _0x531b4d[_0x55aff2(0x39e)][_0x49f9c6][_0x55aff2(0x68c)]),
                                    (_0x3eac0e[_0x55aff2(0x6df)] = _0x531b4d[_0x55aff2(0x39e)][_0x49f9c6][_0x55aff2(0x6df)]),
                                    (_0x531b4d[_0x55aff2(0x39e)][_0x49f9c6][_0x55aff2(0x68c)] = []),
                                    _0x531b4d[_0x55aff2(0x7f4)]
                                        ? _0x531b4d["encryptMessage"](JSON["stringify"](_0x3eac0e[_0x55aff2(0x9ff)]))
                                              ["then"](function (_0x4d9556) {
                                                  var _0x2de99d = _0x55aff2;
                                                  (_0x3eac0e[_0x2de99d(0x9ff)] = _0x4d9556[0x0]), (_0x3eac0e[_0x2de99d(0x190)] = _0x4d9556[0x1]), _0x531b4d[_0x2de99d(0x8a5)](_0x3eac0e);
                                              })
                                              [_0x55aff2(0x524)](errorlog)
                                        : _0x531b4d["anyrequest"](_0x3eac0e);
                            },
                            0x190,
                            _0x899509
                        ));
                }),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509]["onconnectionstatechange"] = function (_0x4955ad) {
                    var _0x340486 = _0x10fd08;
                    switch (this["connectionState"]) {
                        case "new":
                            log(_0x340486(0x838)), log(_0x340486(0x973)), clearInterval(_0x531b4d["rpcs"][this[_0x340486(0x49f)]][_0x340486(0x63e)]);
                        case "checking":
                            log("checking"), log(_0x340486(0x2e7)), clearInterval(_0x531b4d["rpcs"][this[_0x340486(0x49f)]][_0x340486(0x63e)]);
                        case "connected":
                            log(_0x340486(0x4d4)), log(_0x340486(0x817)), clearInterval(_0x531b4d[_0x340486(0x39e)][this[_0x340486(0x49f)]][_0x340486(0x63e)]);
                            if (_0x531b4d[_0x340486(0x820)]) {
                                if (_0x531b4d["ws"][_0x340486(0x6f8)] !== 0x1) {
                                    _0x531b4d["ws"]["close"]();
                                    break;
                                }
                                _0x531b4d["ws"][_0x340486(0x36e)](),
                                    setTimeout(function () {
                                        var _0x272b42 = _0x340486;
                                        _0x531b4d[_0x272b42(0x2d4)] != !![] && warnUser(miscTranslations["remote-peer-connected"]);
                                    }, 0x1);
                            }
                            break;
                        case _0x340486(0x158):
                            log("closeTimeout\x20cancelled;\x205"), warnlog(_0x340486(0x96a)), clearInterval(_0x531b4d[_0x340486(0x39e)][this["UUID"]]["closeTimeout"]);
                            if (_0x531b4d[_0x340486(0x39e)][this[_0x340486(0x49f)]][_0x340486(0x5e9)]) return;
                            this[_0x340486(0x49f)] in _0x531b4d[_0x340486(0x39e)]
                                ? (_0x531b4d[_0x340486(0x39e)][this[_0x340486(0x49f)]]["closeTimeout"] = setTimeout(
                                      function (_0x39b2b4) {
                                          var _0xcba8c0 = _0x340486;
                                          log(_0xcba8c0(0x88c)), _0x531b4d[_0xcba8c0(0x812)](_0x39b2b4);
                                      },
                                      0x1388,
                                      this[_0x340486(0x49f)]
                                  ))
                                : log(_0x340486(0x5f7));
                            break;
                        case "failed":
                            warnlog(_0x340486(0x96e)), log(_0x340486(0x51f)), clearInterval(_0x531b4d["rpcs"][this[_0x340486(0x49f)]][_0x340486(0x63e)]);
                            this[_0x340486(0x49f)] in _0x531b4d[_0x340486(0x39e)]
                                ? (_0x531b4d[_0x340486(0x39e)][this["UUID"]][_0x340486(0x63e)] = setTimeout(
                                      function (_0x152a2e) {
                                          var _0x5f5b43 = _0x340486;
                                          log(_0x5f5b43(0x29e)), _0x531b4d["closeRPC"](_0x152a2e);
                                      },
                                      0xbb8,
                                      this[_0x340486(0x49f)]
                                  ))
                                : log(_0x340486(0x5f7));
                            break;
                        case _0x340486(0x9e2):
                            warnlog(_0x340486(0x487)), _0x531b4d[_0x340486(0x812)](this[_0x340486(0x49f)]);
                            break;
                        default:
                            log(_0x340486(0x94a)), log(_0x340486(0x9e4) + this[_0x340486(0x53a)]), clearInterval(_0x531b4d["rpcs"][this["UUID"]]["closeTimeout"]);
                            break;
                    }
                }),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x92d)] = function (_0x11ed28) {
                    var _0x58df98 = _0x10fd08;
                    let _0x3aa969 = _0x11ed28["target"];
                    switch (_0x3aa969[_0x58df98(0x2ca)]) {
                        case _0x58df98(0x6af):
                            log("ICE\x20GATHER\x20START");
                            break;
                        case _0x58df98(0x949):
                            log(_0x58df98(0x8af));
                            _0x531b4d["rpcs"][_0x899509]["whipCallback2"] &&
                                (_0x531b4d[_0x58df98(0x39e)][_0x899509]["whipCallback2"]([..._0x531b4d["rpcs"][_0x899509]["iceBundle"]]),
                                clearTimeout(_0x531b4d[_0x58df98(0x39e)][_0x899509][_0x58df98(0x891)]),
                                (_0x531b4d[_0x58df98(0x39e)][_0x899509][_0x58df98(0x891)] = null),
                                (_0x531b4d["rpcs"][_0x899509][_0x58df98(0x68c)] = []),
                                (_0x531b4d[_0x58df98(0x39e)][_0x899509][_0x58df98(0x9ed)] = null));
                            break;
                    }
                }),
                (_0x531b4d["rpcs"][_0x899509][_0x10fd08(0x4ec)] = function () {
                    var _0x52c2ec = _0x10fd08;
                    try {
                        if (this["iceConnectionState"] == _0x52c2ec(0x9e2)) errorlog(_0x52c2ec(0x5f4));
                        else {
                            if (this[_0x52c2ec(0x2da)] == _0x52c2ec(0x158)) {
                                if (_0x531b4d[_0x52c2ec(0x39e)][_0x899509][_0x52c2ec(0x5e9)]) return;
                                warnlog(_0x52c2ec(0x3fa)),
                                    (_0x531b4d["rpcs"][_0x899509][_0x52c2ec(0x13b)] = "0"),
                                    (_0x531b4d[_0x52c2ec(0x39e)][_0x899509][_0x52c2ec(0x6fa)][_0x52c2ec(0xa19)]["opacity"] = "0"),
                                    (_0x531b4d[_0x52c2ec(0x39e)][_0x899509][_0x52c2ec(0x288)] = setTimeout(
                                        function (_0x443e58) {
                                            updateMixer();
                                        },
                                        0x1f4,
                                        _0x899509
                                    ));
                            } else
                                this[_0x52c2ec(0x2da)] == _0x52c2ec(0x2d2)
                                    ? errorlog(_0x52c2ec(0x3b7))
                                    : (log("ICE:\x20" + this[_0x52c2ec(0x2da)]),
                                      _0x531b4d[_0x52c2ec(0x39e)][_0x899509][_0x52c2ec(0x288)] && clearTimeout(_0x531b4d[_0x52c2ec(0x39e)][_0x899509][_0x52c2ec(0x288)]),
                                      _0x531b4d["rpcs"][_0x899509][_0x52c2ec(0x6fa)] && _0x52c2ec(0x9fb) in _0x531b4d[_0x52c2ec(0x39e)][_0x899509]["videoElement"]["style"]
                                          ? _0x531b4d[_0x52c2ec(0x39e)][_0x899509]["opacityDisconnect"] == "0" && _0x531b4d[_0x52c2ec(0x39e)][_0x899509][_0x52c2ec(0x736)] == "1"
                                              ? ((_0x531b4d["rpcs"][_0x899509][_0x52c2ec(0x6fa)][_0x52c2ec(0xa19)]["opacity"] = "1"), (_0x531b4d[_0x52c2ec(0x39e)][_0x899509][_0x52c2ec(0x13b)] = "1"), updateMixer())
                                              : (_0x531b4d[_0x52c2ec(0x39e)][_0x899509][_0x52c2ec(0x13b)] = "1")
                                          : (_0x531b4d[_0x52c2ec(0x39e)][_0x899509][_0x52c2ec(0x13b)] = "1"));
                        }
                    } catch (_0x279622) {}
                }),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0x481)] = function (_0xadc0a6) {
                    var _0x49bdb5 = _0x10fd08;
                    log(_0xadc0a6);
                    if (_0xadc0a6[_0x49bdb5(0x93d)][_0x49bdb5(0x931)] && _0xadc0a6["channel"][_0x49bdb5(0x931)] !== "sendChannel") {
                        if (_0x531b4d[_0x49bdb5(0x77c)]["includes"](_0x531b4d["rpcs"][_0x899509][_0x49bdb5(0x4f8)])) return;
                        _0xadc0a6["channel"]["label"] === _0x49bdb5(0x7ea)
                            ? _0x531b4d["recieveChunkedStream"](_0x531b4d[_0x49bdb5(0x39e)], _0x899509, _0xadc0a6[_0x49bdb5(0x93d)])
                            : _0x531b4d[_0x49bdb5(0x675)](_0x531b4d[_0x49bdb5(0x39e)], _0x899509, _0xadc0a6[_0x49bdb5(0x93d)]);
                        return;
                    }
                    (_0x531b4d[_0x49bdb5(0x39e)][_0x899509][_0x49bdb5(0x3dd)] = _0xadc0a6[_0x49bdb5(0x93d)]),
                        (_0x531b4d[_0x49bdb5(0x39e)][_0x899509][_0x49bdb5(0x3dd)][_0x49bdb5(0x49f)] = _0x899509),
                        (_0x531b4d[_0x49bdb5(0x39e)][_0x899509][_0x49bdb5(0x3dd)][_0x49bdb5(0x2d6)] = (_0xc27221) => {
                            var _0x332235 = _0x49bdb5,
                                _0x23ae05 = {};
                            (_0x23ae05[_0x332235(0x6ec)] = ![]),
                                (_0x23ae05["allowmidi"] = ![]),
                                (_0x23ae05[_0x332235(0x5cc)] = ![]),
                                (_0x23ae05[_0x332235(0x56b)] = ![]),
                                (_0x23ae05[_0x332235(0x9bb)] = ![]),
                                (_0x23ae05["video"] = ![]),
                                (_0x23ae05[_0x332235(0x6e8)] = ![]),
                                (_0x23ae05[_0x332235(0x433)] = ![]),
                                (_0x23ae05[_0x332235(0x459)] = ![]),
                                (_0x23ae05["allowchunked"] = ![]);
                            _0x531b4d[_0x332235(0x313)] && (_0x531b4d[_0x332235(0x313)] === "red" || _0x531b4d[_0x332235(0x313)] === "lyra") && (_0x23ae05["preferAudioCodec"] = _0x531b4d["audioCodec"]);
                            try {
                                if (_0x531b4d[_0x332235(0x372)] !== ![])
                                    _0x531b4d[_0x332235(0x372)][_0x332235(0x42d)](_0x531b4d[_0x332235(0x39e)][_0x899509][_0x332235(0x4f8)]) ? (_0x23ae05["video"] = !![]) : (_0x23ae05[_0x332235(0x211)] = ![]);
                                else {
                                    if (_0x531b4d[_0x332235(0x6e8)] !== ![]) {
                                        if (_0x531b4d[_0x332235(0x6e8)] !== null)
                                            _0x531b4d[_0x332235(0x39e)][_0x899509][_0x332235(0x4f8)] === _0x531b4d["broadcast"] ? ((_0x23ae05["broadcast"] = !![]), (_0x23ae05[_0x332235(0x211)] = !![])) : (_0x23ae05[_0x332235(0x211)] = ![]);
                                        else _0x531b4d[_0x332235(0x82d)] && (_0x899509 == _0x531b4d[_0x332235(0x82d)] ? ((_0x23ae05["broadcast"] = !![]), (_0x23ae05["video"] = !![])) : (_0x23ae05["video"] = ![]));
                                    } else
                                        _0x531b4d[_0x332235(0x2be)] !== ![]
                                            ? _0x531b4d[_0x332235(0x2be)][_0x332235(0x42d)](_0x531b4d["rpcs"][_0x899509][_0x332235(0x4f8)])
                                                ? (_0x23ae05[_0x332235(0x211)] = ![])
                                                : (_0x23ae05["video"] = !![])
                                            : (_0x23ae05[_0x332235(0x211)] = !![]);
                                }
                                _0x531b4d[_0x332235(0x2b6)] !== ![]
                                    ? _0x531b4d[_0x332235(0x2b6)][_0x332235(0x42d)](_0x531b4d[_0x332235(0x39e)][_0x899509][_0x332235(0x4f8)])
                                        ? (_0x23ae05["audio"] = !![])
                                        : (_0x23ae05[_0x332235(0x9bb)] = ![])
                                    : (_0x23ae05[_0x332235(0x9bb)] = !![]);
                                _0x531b4d["noiframe"] !== ![]
                                    ? _0x531b4d[_0x332235(0x805)][_0x332235(0x42d)](_0x531b4d["rpcs"][_0x899509]["streamID"])
                                        ? (_0x23ae05[_0x332235(0x5cc)] = !![])
                                        : (_0x23ae05[_0x332235(0x5cc)] = ![])
                                    : (_0x23ae05[_0x332235(0x5cc)] = !![]);
                                if (_0x531b4d["noWidget"] !== ![]) _0x531b4d[_0x332235(0x19f)][_0x332235(0x42d)](_0x531b4d[_0x332235(0x39e)][_0x899509][_0x332235(0x4f8)]) ? (_0x23ae05["widget"] = !![]) : (_0x23ae05[_0x332235(0x56b)] = ![]);
                                else {
                                    if (_0x531b4d[_0x332235(0x725)] !== ![]) _0x23ae05[_0x332235(0x56b)] = ![];
                                    else _0x531b4d[_0x332235(0xa1b)] && !_0x531b4d[_0x332235(0x276)] && _0x531b4d[_0x332235(0x1e7)] === ![] ? (_0x23ae05[_0x332235(0x56b)] = ![]) : (_0x23ae05[_0x332235(0x56b)] = !![]);
                                }
                                if (_0x531b4d[_0x332235(0x1ba)] !== ![]) {
                                    if (_0x531b4d[_0x332235(0x1ba)] === !![]) _0x23ae05[_0x332235(0x459)] = !![];
                                    else _0x531b4d[_0x332235(0x1ba)][_0x332235(0x42d)](_0x531b4d[_0x332235(0x39e)][_0x899509][_0x332235(0x4f8)]) ? (_0x23ae05[_0x332235(0x459)] = !![]) : (_0x23ae05[_0x332235(0x459)] = ![]);
                                } else _0x23ae05[_0x332235(0x459)] = !![];
                                _0x531b4d["allowVideos"] !== ![] && !_0x531b4d[_0x332235(0x743)][_0x332235(0x42d)](_0x531b4d[_0x332235(0x39e)][_0x899509]["streamID"]) && ((_0x23ae05[_0x332235(0x211)] = ![]), (_0x23ae05["audio"] = ![]));
                                (_0x531b4d[_0x332235(0x2fd)] || _0x531b4d[_0x332235(0x1f6)]) && (_0x23ae05[_0x332235(0x3ef)] = _0x531b4d["midiIn"] || _0x531b4d[_0x332235(0x1f6)]);
                                _0x23ae05[_0x332235(0x6ec)] = !![];
                                _0x531b4d[_0x332235(0x98a)] && (_0x23ae05[_0x332235(0x6ec)] = ![]);
                                _0x531b4d[_0x332235(0x251)] ? (_0x23ae05[_0x332235(0x33a)] = ![]) : (_0x23ae05["allowchunked"] = !![]);
                                _0x531b4d[_0x332235(0x7e3)] &&
                                    (_0x531b4d[_0x332235(0x7e3)] == _0x332235(0x4bb) || _0x531b4d[_0x332235(0x7e3)] == _0x332235(0x66f) || _0x531b4d[_0x332235(0x7e3)] == "jpeg") &&
                                    (_0x23ae05[_0x332235(0x433)] = !![]);
                                _0x531b4d[_0x332235(0x291)] && (_0x23ae05[_0x332235(0x291)] = !![]);
                                if (_0x531b4d[_0x332235(0x77c)][_0x332235(0x42d)](_0x531b4d[_0x332235(0x39e)][_0x899509][_0x332235(0x4f8)])) {
                                    warnlog("new\x20connection\x20is\x20contained\x20in\x20badStreamList!\x20This\x20might\x20be\x20the\x20director\x27s\x20video/audio\x20->\x20this\x20a\x20scene?"),
                                        (_0x23ae05["downloads"] = ![]),
                                        (_0x23ae05[_0x332235(0x3ef)] = ![]),
                                        (_0x23ae05[_0x332235(0x5cc)] = ![]),
                                        (_0x23ae05["widget"] = ![]),
                                        (_0x23ae05["audio"] = ![]),
                                        (_0x23ae05[_0x332235(0x211)] = ![]),
                                        (_0x23ae05[_0x332235(0x6e8)] = ![]),
                                        (_0x23ae05[_0x332235(0x433)] = ![]);
                                }
                            } catch (_0xa755b0) {
                                errorlog(_0xa755b0);
                            }
                            try {
                                (_0x23ae05[_0x332235(0x915)] = {}),
                                    (_0x23ae05[_0x332235(0x915)]["label"] = _0x531b4d["label"]),
                                    (_0x23ae05[_0x332235(0x915)][_0x332235(0x885)] = _0x531b4d["order"]),
                                    (_0x23ae05["info"]["stereo_url"] = _0x531b4d["stereo"]),
                                    (_0x23ae05[_0x332235(0x915)][_0x332235(0x336)] = _0x531b4d[_0x332235(0x798)]),
                                    (_0x23ae05[_0x332235(0x915)][_0x332235(0x3e8)] = _0x531b4d[_0x332235(0x43d)]),
                                    (_0x23ae05[_0x332235(0x915)][_0x332235(0x20a)] = _0x531b4d[_0x332235(0x7e3)]);
                                _0x531b4d["audioCodec"] && (_0x23ae05["info"]["audio_codec_url"] = _0x531b4d["audioCodec"]);
                                (_0x23ae05[_0x332235(0x915)][_0x332235(0x807)] = _0x531b4d[_0x332235(0x807)]),
                                    (_0x23ae05["info"][_0x332235(0x6f7)] = _0x531b4d[_0x332235(0x6f7)]),
                                    (_0x23ae05["info"]["enhance_audio"] = _0x531b4d[_0x332235(0x9bd)]),
                                    (_0x23ae05["info"]["ptime"] = _0x531b4d[_0x332235(0x200)]),
                                    (_0x23ae05[_0x332235(0x915)][_0x332235(0x981)] = _0x531b4d["minptime"]),
                                    (_0x23ae05[_0x332235(0x915)][_0x332235(0x564)] = _0x531b4d[_0x332235(0x564)]);
                                navigator && navigator[_0x332235(0x1dc)] && (_0x23ae05[_0x332235(0x915)][_0x332235(0x401)] = navigator["userAgent"]);
                                navigator && navigator[_0x332235(0x616)] && (_0x23ae05[_0x332235(0x915)][_0x332235(0x616)] = navigator[_0x332235(0x616)]);
                                gpgpuSupport && (_0x23ae05[_0x332235(0x915)][_0x332235(0x26d)] = gpgpuSupport);
                                cpuSupport && (_0x23ae05[_0x332235(0x915)][_0x332235(0x222)] = cpuSupport);
                                if (_0x531b4d[_0x332235(0x991)] === ![]) {
                                    if (window[_0x332235(0x6f0)]) {
                                        _0x23ae05["info"][_0x332235(0x482)] = window[_0x332235(0x6f0)][_0x332235(0x8ac)];
                                        try {
                                            _0x23ae05 = _0x531b4d["getOBSOptimization"](_0x23ae05, _0x899509);
                                        } catch (_0x10a501) {
                                            errorlog(_0x10a501), warnUser(_0x10a501[_0x332235(0x3a4)]);
                                        }
                                    } else _0x23ae05[_0x332235(0x915)]["obs"] = ![];
                                } else _0x23ae05["info"]["obs"] = ![];
                            } catch (_0x162c93) {}
                            (_0x23ae05[_0x332235(0x599)] = ![]), (_0x23ae05[_0x332235(0x725)] = ![]), (_0x23ae05[_0x332235(0x276)] = ![]), (_0x23ae05["limitaudio"] = ![]), (_0x23ae05[_0x332235(0x6f7)] = ![]);
                            _0x531b4d[_0x332235(0x9bd)] && (_0x23ae05["enhanceaudio"] = !![]);
                            _0x531b4d["degrade"] && (_0x23ae05[_0x332235(0x1a9)] = _0x531b4d[_0x332235(0x1a9)]);
                            _0x531b4d[_0x332235(0x85e)] && (_0x23ae05[_0x332235(0x85e)] = _0x531b4d[_0x332235(0x85e)]);
                            _0x531b4d[_0x332235(0x28d)] !== ![] && (_0x23ae05[_0x332235(0x28d)] = _0x531b4d[_0x332235(0x28d)]);
                            if (_0x531b4d[_0x332235(0x276)]) {
                                (_0x23ae05[_0x332235(0x276)] = !![]), (_0x23ae05[_0x332235(0x6f7)] = _0x531b4d[_0x332235(0x6f7)]);
                                if (_0x531b4d[_0x332235(0x82d)] && _0x531b4d[_0x332235(0x82d)] === _0x899509) _0x531b4d[_0x332235(0x74b)]();
                                else {
                                    var _0x340bd8 = {};
                                    _0x340bd8[_0x332235(0x297)] = [];
                                    for (var _0xa7e294 in _0x531b4d[_0x332235(0x8cd)]) {
                                        _0x531b4d["pcs"][_0xa7e294]["coDirector"] === !![] && _0x340bd8[_0x332235(0x297)]["push"](_0xa7e294);
                                    }
                                    _0x340bd8[_0x332235(0x297)][_0x332235(0x1bf)] && (_0x23ae05[_0x332235(0x81e)] = _0x340bd8);
                                }
                                if (_0x531b4d["roomTimer"] && _0x531b4d[_0x332235(0x46c)] > 0x0)
                                    (_0x23ae05[_0x332235(0x6a7)] = _0x531b4d[_0x332235(0x46c)] - Date[_0x332235(0x312)]() / 0x3e8), (_0x23ae05["showClock"] = !![]), (_0x23ae05[_0x332235(0x1cc)] = !![]);
                                else
                                    _0x531b4d[_0x332235(0x46c)] &&
                                        _0x531b4d["roomTimer"] < 0x0 &&
                                        ((_0x23ae05[_0x332235(0x6a7)] = _0x531b4d[_0x332235(0x46c)] * -0x1), (_0x23ae05[_0x332235(0x691)] = !![]), (_0x23ae05[_0x332235(0x1cc)] = !![]), (_0x23ae05[_0x332235(0x945)] = !![]));
                                _0x531b4d[_0x332235(0x3d5)] && (_0x23ae05["showTime"] = !![]);
                            } else {
                                if (_0x531b4d[_0x332235(0x725)] !== ![]) (_0x23ae05["scene"] = _0x531b4d[_0x332235(0x725)]), _0x531b4d[_0x332235(0x925)] && (_0x23ae05[_0x332235(0x925)] = _0x531b4d["showDirector"]);
                                else _0x531b4d[_0x332235(0x875)] !== ![] && _0x531b4d[_0x332235(0x875)] !== "" && ((_0x23ae05[_0x332235(0x6f7)] = _0x531b4d[_0x332235(0x6f7)]), (_0x23ae05[_0x332235(0x599)] = !![]));
                            }
                            if (_0x531b4d["scale"]) _0x23ae05[_0x332235(0x72e)] = parseFloat(_0x531b4d[_0x332235(0x72e)]);
                            else
                                (_0x531b4d[_0x332235(0x86c)] || _0x531b4d[_0x332235(0x254)]) &&
                                    ((_0x23ae05["requestResolution"] = {}),
                                    (_0x23ae05[_0x332235(0x38a)]["h"] = null),
                                    (_0x23ae05[_0x332235(0x38a)]["w"] = null),
                                    _0x531b4d["viewheight"] && ((_0x23ae05[_0x332235(0x38a)]["h"] = _0x531b4d["viewheight"]), (_0x531b4d[_0x332235(0x39e)][_0x899509][_0x332235(0x3f6)] = _0x531b4d["viewheight"])),
                                    _0x531b4d[_0x332235(0x254)] && ((_0x23ae05[_0x332235(0x38a)]["w"] = _0x531b4d[_0x332235(0x254)]), (_0x531b4d[_0x332235(0x39e)][_0x899509][_0x332235(0x9be)] = _0x531b4d[_0x332235(0x254)])));
                            !_0x531b4d[_0x332235(0x875)] && _0x531b4d[_0x332235(0x4f2)] && (playtone(![], _0x332235(0x9dc)), showNotification(_0x332235(0x342))),
                                (_0x531b4d["rpcs"][_0x899509][_0x332235(0x5c4)] = _0x23ae05),
                                _0x531b4d["sendRequest"](_0x23ae05, _0x899509) ? log(_0x332235(0x985)) : errorlog(_0x332235(0x5e1)),
                                pokeIframeAPI(_0x332235(0x569), !![], _0x899509),
                                pokeIframeAPI("view-connection", !![], _0x899509),
                                pokeAPI(_0x332235(0x4d1), _0x531b4d[_0x332235(0x39e)][_0x899509][_0x332235(0x4f8)]);
                        }),
                        (_0x531b4d[_0x49bdb5(0x39e)][_0x899509][_0x49bdb5(0x3dd)][_0x49bdb5(0x1e5)] = async (_0x478579) => {
                            var _0x11677b = _0x49bdb5;
                            if (typeof _0x478579[_0x11677b(0x5a0)] == _0x11677b(0x74a)) {
                                if (!_0x531b4d["rpcs"][_0x899509][_0x11677b(0x976)]) {
                                    (_0x531b4d["rpcs"][_0x899509][_0x11677b(0x976)] = document["createElement"](_0x11677b(0x779))),
                                        (_0x531b4d[_0x11677b(0x39e)][_0x899509][_0x11677b(0x976)][_0x11677b(0x3c1)] = 0x10),
                                        (_0x531b4d[_0x11677b(0x39e)][_0x899509]["imageElement"][_0x11677b(0x63d)] = 0x9),
                                        (_0x531b4d[_0x11677b(0x39e)][_0x899509]["imageElement"]["style"][_0x11677b(0xa0a)] = "contain"),
                                        (_0x531b4d[_0x11677b(0x39e)][_0x899509][_0x11677b(0x976)]["dataset"][_0x11677b(0x49f)] = _0x899509);
                                    try {
                                        _0x531b4d["rpcs"][_0x899509]["imageElement"][_0x11677b(0x582)][_0x11677b(0x48c)] = _0x531b4d[_0x11677b(0x39e)][_0x899509]["streamID"];
                                    } catch (_0x3a15bf) {}
                                    (_0x531b4d[_0x11677b(0x39e)][_0x899509][_0x11677b(0x976)][_0x11677b(0x98b)] = ![]),
                                        _0x531b4d[_0x11677b(0x39e)][_0x899509][_0x11677b(0x976)]["addEventListener"](_0x11677b(0x7ab), function (_0x25d218) {
                                            var _0x1aac30 = _0x11677b;
                                            log("clicked");
                                            try {
                                                if (_0x25d218[_0x1aac30(0x505)] || _0x25d218[_0x1aac30(0x283)]) {
                                                    _0x25d218[_0x1aac30(0x6f2)]();
                                                    var _0x3d1593 = _0x25d218[_0x1aac30(0x314)][_0x1aac30(0x582)][_0x1aac30(0x49f)];
                                                    if (_0x1aac30(0x21d) in _0x531b4d[_0x1aac30(0x39e)][_0x3d1593]) {
                                                        var [_0xcf9426, _0x268c8a] = statsMenuCreator();
                                                        printViewStats(_0x268c8a, _0x3d1593), (_0xcf9426[_0x1aac30(0xa13)] = setInterval(printViewStats, _0x531b4d[_0x1aac30(0x61e)], _0x268c8a, _0x3d1593));
                                                    }
                                                    return _0x25d218[_0x1aac30(0x3d2)](), ![];
                                                }
                                            } catch (_0x5899a2) {
                                                errorlog(_0x5899a2);
                                            }
                                        }),
                                        updateMixer();
                                } else
                                    _0x531b4d[_0x11677b(0x39e)][_0x899509]["imageElement"][_0x11677b(0x98b)] &&
                                        ((_0x531b4d["rpcs"][_0x899509][_0x11677b(0x976)]["hidden"] = ![]), (_0x531b4d["rpcs"][_0x899509][_0x11677b(0x976)][_0x11677b(0xa19)]["visibility"] = _0x11677b(0x47c)));
                                _0x531b4d[_0x11677b(0x39e)][_0x899509]["imageElement"]["src"] = window[_0x11677b(0x853)]["createObjectURL"](new Blob([new Uint8Array(_0x478579[_0x11677b(0x5a0)])], { type: _0x11677b(0x2e4) }));
                                return;
                            }
                            try {
                                var _0x46824c = JSON[_0x11677b(0x59c)](_0x478579[_0x11677b(0x5a0)]);
                            } catch (_0x5381de) {
                                _0x46824c = _0x5381de["data"];
                            }
                            (_0x46824c["UUID"] = _0x899509), _0x11677b(0xa32) in _0x46824c ? await _0x531b4d[_0x11677b(0x7ce)](_0x46824c, _0x899509 + _0x11677b(0x47d)) : await _0x531b4d[_0x11677b(0x7ce)](_0x46824c, _0x899509);
                        }),
                        (_0x531b4d[_0x49bdb5(0x7ce)] = async function (_0x3eecf1, _0x203226) {
                            var _0x23eca0 = _0x49bdb5;
                            if (_0x23eca0(0x872) in _0x3eecf1) {
                                warnlog(_0x23eca0(0x75f)), _0x531b4d[_0x23eca0(0x812)](_0x203226, !![]);
                                return;
                            } else {
                                if ("ping" in _0x3eecf1) {
                                    var _0x344419 = {};
                                    (_0x344419[_0x23eca0(0x4f9)] = _0x3eecf1[_0x23eca0(0x45a)]), _0x531b4d["sendRequest"](_0x344419, _0x203226), warnlog("PINGED");
                                    return;
                                } else {
                                    if ("pong" in _0x3eecf1) {
                                        warnlog("PONGED");
                                        return;
                                    }
                                }
                            }
                            var _0x2047d2 = ![],
                                _0x706c2c = ![];
                            if (_0x23eca0(0x662) in _0x3eecf1) _0x531b4d["processDescription"](_0x3eecf1);
                            else {
                                if (_0x23eca0(0x6c8) in _0x3eecf1) (_0x3eecf1[_0x23eca0(0x49f)] = _0x203226), log(_0x23eca0(0x34d)), _0x531b4d["processIce"](_0x3eecf1);
                                else _0x23eca0(0x9ff) in _0x3eecf1 && ((_0x3eecf1[_0x23eca0(0x49f)] = _0x203226), log(_0x23eca0(0xa3e)), _0x531b4d[_0x23eca0(0x184)](_0x3eecf1));
                            }
                            if (_0x23eca0(0xa1a) in _0x3eecf1) {
                                if (_0x3eecf1[_0x23eca0(0xa1a)] === _0x23eca0(0x17e))
                                    (_0x531b4d["directorState"] = ![]), !_0x531b4d[_0x23eca0(0x2d4)] && (warnUser(miscTranslations[_0x23eca0(0x419)], 0xbb8), (getById(_0x23eca0(0x78f))["innerHTML"] = miscTranslations[_0x23eca0(0x1a2)]));
                                else {
                                    if (_0x3eecf1[_0x23eca0(0xa1a)] === _0x23eca0(0x9c9)) !_0x531b4d[_0x23eca0(0x2d4)] && warnUser(miscTranslations["only-main-director"], 0xbb8);
                                    else {
                                        if (!_0x531b4d["cleanOutput"]) {
                                            if (_0x531b4d[_0x23eca0(0x82d)] === _0x203226) warnUser(miscTranslations[_0x23eca0(0x6de)], 0x1388);
                                            else _0x531b4d[_0x23eca0(0x9af)] && !_0x531b4d[_0x23eca0(0x276)] ? warnUser(miscTranslations[_0x23eca0(0x550)], 0x1388) : warnUser(miscTranslations[_0x23eca0(0x285)], 0x1388);
                                        } else {
                                            if (_0x531b4d[_0x23eca0(0x276)]) !_0x531b4d[_0x23eca0(0x2d4)] && warnUser(_0x23eca0(0x6a2) + _0x3eecf1[_0x23eca0(0xa1a)] + _0x23eca0(0x486), 0x1388);
                                            else {
                                                if (!_0x531b4d[_0x23eca0(0x2d4)]) _0x531b4d[_0x23eca0(0x9af)] ? warnUser(miscTranslations["remote-token-rejected"], 0x1388) : warnUser(miscTranslations[_0x23eca0(0x5e0)], 0x1388);
                                                else {
                                                }
                                            }
                                        }
                                    }
                                }
                                errorlog(_0x23eca0(0x306) + _0x3eecf1[_0x23eca0(0xa1a)] + _0x23eca0(0x461) + _0x531b4d[_0x23eca0(0x276)]), pokeIframeAPI(_0x23eca0(0xa1a), _0x3eecf1[_0x23eca0(0xa1a)], _0x203226);
                                return;
                            } else {
                                if ("approved" in _0x3eecf1) {
                                    if (_0x3eecf1[_0x23eca0(0x64a)] === "requestCoDirector") {
                                        if (_0x531b4d[_0x23eca0(0x276)]) {
                                            try {
                                                _0x531b4d[_0x23eca0(0x931)] === ![] && (document[_0x23eca0(0x151)] = miscTranslations["control-room-co-director"]);
                                            } catch (_0x51b882) {
                                                errorlog(_0x51b882);
                                            }
                                            !_0x531b4d[_0x23eca0(0x2d4)] &&
                                                !_0x531b4d["directorState"] &&
                                                (warnUser(miscTranslations["approved-as-director"], 0xbb8),
                                                (getById(_0x23eca0(0x78f))[_0x23eca0(0x5f5)] = miscTranslations[_0x23eca0(0x21a)]),
                                                (getById("yourDirectorStatus")[_0x23eca0(0x5f5)] = miscTranslations["this-is-you"])),
                                                (_0x531b4d[_0x23eca0(0x9d7)] = !![]),
                                                pokeAPI(_0x23eca0(0x71c), !![]);
                                        }
                                    }
                                    log(_0x23eca0(0x189) + _0x3eecf1[_0x23eca0(0x64a)]), pokeIframeAPI(_0x23eca0(0x64a), _0x3eecf1[_0x23eca0(0x64a)], _0x203226);
                                    return;
                                }
                            }
                            if (_0x23eca0(0x56c) in _0x3eecf1)
                                try {
                                    _0x531b4d[_0x23eca0(0x39e)][_0x203226]["iframeSrc"] = _0x3eecf1[_0x23eca0(0x56c)] || ![];
                                    if (_0x531b4d[_0x23eca0(0x276)]) {
                                        if (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x56c)]) {
                                            var _0x401284 = document["createElement"]("div");
                                            (_0x401284[_0x23eca0(0x471)] = _0x531b4d[_0x23eca0(0x39e)][_0x203226]["iframeSrc"]),
                                                (_0x401284[_0x23eca0(0x471)] = _0x401284[_0x23eca0(0x5f5)]),
                                                (_0x401284 = _0x401284[_0x23eca0(0x626)] || _0x401284[_0x23eca0(0x471)] || ""),
                                                (getById("iframeDetails_" + _0x203226)[_0x23eca0(0x5f5)] = _0x23eca0(0xa16) + _0x401284 + _0x23eca0(0x41f) + _0x401284 + _0x23eca0(0x2e6)),
                                                getById(_0x23eca0(0x794) + _0x203226)[_0x23eca0(0x23d)]["remove"](_0x23eca0(0x98b));
                                        } else getById(_0x23eca0(0x794) + _0x203226)[_0x23eca0(0x23d)][_0x23eca0(0x6e9)](_0x23eca0(0x98b)), (getById(_0x23eca0(0x794) + _0x203226)[_0x23eca0(0x471)] = "");
                                    } else {
                                        if (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x56c)] == ![]) {
                                            try {
                                                _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x559)][_0x23eca0(0x2c0)]();
                                            } catch (_0x437a57) {
                                                errorlog(_0x437a57);
                                            }
                                            _0x531b4d[_0x23eca0(0x39e)][_0x203226]["iframeVideo"] && (_0x531b4d[_0x23eca0(0x39e)][_0x203226]["iframeVideo"][_0x23eca0(0x2c0)](), (_0x531b4d[_0x23eca0(0x39e)][_0x203226]["iframeVideo"] = ![]));
                                            (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x559)] = ![]), (_0x2047d2 = !![]);
                                            if (_0x531b4d["broadcast"] !== ![]) {
                                                if (_0x531b4d[_0x23eca0(0x6e8)] !== null) _0x531b4d[_0x23eca0(0x39e)][_0x203226]["streamID"] === _0x531b4d[_0x23eca0(0x6e8)] && (_0x531b4d[_0x23eca0(0x8d0)] = ![]);
                                                else _0x203226 == _0x531b4d["directorUUID"] && (_0x531b4d[_0x23eca0(0x8d0)] = ![]);
                                            }
                                        } else {
                                            if (_0x531b4d["broadcast"] !== ![]) {
                                                if (_0x531b4d["broadcast"] !== null) {
                                                    if (_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x4f8)] === _0x531b4d["broadcast"]) {
                                                        if (_0x531b4d[_0x23eca0(0x805)] === ![])
                                                            (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x559)] = loadIframe(_0x3eecf1["iframeSrc"], _0x203226)),
                                                                (_0x2047d2 = !![]),
                                                                (_0x531b4d[_0x23eca0(0x8d0)] = _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x559)]),
                                                                _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)] &&
                                                                    (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x559)][_0x23eca0(0x582)][_0x23eca0(0x48c)] = _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)]);
                                                        else
                                                            _0x531b4d[_0x23eca0(0x39e)][_0x203226]["streamID"] in _0x531b4d[_0x23eca0(0x805)] &&
                                                                ((_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x559)] = loadIframe(_0x3eecf1[_0x23eca0(0x56c)], _0x203226)),
                                                                (_0x2047d2 = !![]),
                                                                (_0x531b4d[_0x23eca0(0x8d0)] = _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x559)]),
                                                                _0x531b4d["rpcs"][_0x203226]["streamID"] &&
                                                                    (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x559)][_0x23eca0(0x582)]["sid"] = _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)]));
                                                    }
                                                } else {
                                                    if (_0x531b4d[_0x23eca0(0x82d)]) {
                                                        if (_0x203226 == _0x531b4d[_0x23eca0(0x82d)]) {
                                                            if (_0x531b4d[_0x23eca0(0x805)] === ![])
                                                                (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x559)] = loadIframe(_0x3eecf1["iframeSrc"], _0x203226)),
                                                                    (_0x2047d2 = !![]),
                                                                    (_0x531b4d["broadcastIFrame"] = _0x531b4d[_0x23eca0(0x39e)][_0x203226]["iframeEle"]),
                                                                    _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)] &&
                                                                        (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x559)][_0x23eca0(0x582)]["sid"] = _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)]);
                                                            else
                                                                _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x4f8)] in _0x531b4d[_0x23eca0(0x805)] &&
                                                                    ((_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x559)] = loadIframe(_0x3eecf1["iframeSrc"], _0x203226)),
                                                                    (_0x2047d2 = !![]),
                                                                    (_0x531b4d[_0x23eca0(0x8d0)] = _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x559)]),
                                                                    _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)] &&
                                                                        (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x559)][_0x23eca0(0x582)][_0x23eca0(0x48c)] = _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)]));
                                                        }
                                                    }
                                                }
                                            } else {
                                                if (_0x531b4d[_0x23eca0(0x805)] === ![])
                                                    (_0x531b4d[_0x23eca0(0x39e)][_0x203226]["iframeEle"] = loadIframe(_0x3eecf1[_0x23eca0(0x56c)], _0x203226)),
                                                        (_0x2047d2 = !![]),
                                                        _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)] &&
                                                            (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x559)][_0x23eca0(0x582)][_0x23eca0(0x48c)] = _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)]);
                                                else
                                                    _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)] in _0x531b4d[_0x23eca0(0x805)] &&
                                                        ((_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x559)] = loadIframe(_0x3eecf1[_0x23eca0(0x56c)], _0x203226)),
                                                        (_0x2047d2 = !![]),
                                                        _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)] &&
                                                            (_0x531b4d["rpcs"][_0x203226]["iframeEle"][_0x23eca0(0x582)][_0x23eca0(0x48c)] = _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)]));
                                            }
                                        }
                                    }
                                } catch (_0x2e8762) {
                                    errorlog(_0x2e8762);
                                }
                            else {
                                if (_0x23eca0(0x2dc) in _0x3eecf1) {
                                    if (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x559)])
                                        try {
                                            _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x56c)][_0x23eca0(0x32a)]("https://www.youtube.com/") && processIframeSyncUpdates(_0x3eecf1[_0x23eca0(0x2dc)], _0x203226);
                                        } catch (_0x284126) {
                                            errorlog(_0x284126);
                                        }
                                }
                            }
                            if (_0x23eca0(0x9af) in _0x3eecf1)
                                try {
                                    _0x3eecf1 = await _0x531b4d[_0x23eca0(0x932)](_0x3eecf1);
                                    if (!_0x3eecf1) return;
                                } catch (_0x2cd5a7) {
                                    errorlor(_0x2cd5a7);
                                }
                            "obsCommand" in _0x3eecf1 && processOBSCommand(_0x3eecf1);
                            if (_0x23eca0(0x65d) in _0x3eecf1) {
                                var _0x2a0c97 = ![],
                                    _0x5745f9 = ![];
                                _0x531b4d[_0x23eca0(0x82d)] === _0x203226 && ((_0x2a0c97 = !![]), _0x23eca0(0x69e) in _0x3eecf1 && _0x3eecf1[_0x23eca0(0x69e)] == !![] && (_0x5745f9 = !![]));
                                if (_0x531b4d[_0x23eca0(0x276)]) {
                                    if (_0x3eecf1[_0x23eca0(0x65d)] == _0x23eca0(0x819))
                                        _0x531b4d[_0x23eca0(0x4f2)] && playtone(),
                                            getById(_0x23eca0(0x508) + _0x203226)[_0x23eca0(0x23d)][_0x23eca0(0x2c0)](_0x23eca0(0x98b)),
                                            _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x5c8)][_0x23eca0(0x23d)][_0x23eca0(0x2c0)](_0x23eca0(0x98b));
                                    else
                                        _0x3eecf1["chat"] == _0x23eca0(0x3b1) &&
                                            (getById("hands_" + _0x203226)["classList"][_0x23eca0(0x6e9)](_0x23eca0(0x98b)), _0x531b4d["rpcs"][_0x203226]["remoteRaisedHandElement"]["classList"][_0x23eca0(0x6e9)](_0x23eca0(0x98b)));
                                }
                                log(_0x23eca0(0x54c) + _0x2a0c97), getChatMessage(_0x3eecf1["chat"], _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x931)], _0x2a0c97, _0x5745f9);
                            }
                            _0x23eca0(0x847) in _0x3eecf1 && _0x531b4d[_0x23eca0(0x59a)](_0x3eecf1[_0x23eca0(0x847)], _0x203226);
                            "autoSync" in _0x3eecf1 && ((_0x531b4d["autoSyncObject"] = _0x3eecf1[_0x23eca0(0x4b5)]), _0x531b4d[_0x23eca0(0x1ce)](_0x203226));
                            "effectsData" in _0x3eecf1 && log(_0x3eecf1);
                            if (_0x23eca0(0x8b3) in _0x3eecf1) {
                                log(_0x3eecf1);
                                _0x3eecf1["group"] ? (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x8b3)] = _0x3eecf1["group"][_0x23eca0(0x22a)](",")) : (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x8b3)] = []);
                                log(_0x531b4d[_0x23eca0(0x39e)][_0x203226]), (_0x2047d2 = !![]);
                                if (_0x531b4d["director"] && _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)])
                                    try {
                                        syncGroup(_0x531b4d[_0x23eca0(0x39e)][_0x203226]["group"], _0x203226);
                                    } catch (_0x4388c5) {
                                        errorlog(_0x4388c5);
                                    }
                                pokeIframeAPI(_0x23eca0(0x6b3), _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x8b3)], _0x203226);
                            }
                            _0x23eca0(0x1ea) in _0x3eecf1 && (log(_0x3eecf1), _0x531b4d[_0x23eca0(0x518)] && updateClosedCaptions(_0x3eecf1, _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x931)], _0x203226));
                            _0x23eca0(0x3ef) in _0x3eecf1 && _0x3eecf1[_0x23eca0(0x3ef)] !== ![] && (_0x531b4d[_0x23eca0(0x39e)][_0x203226]["allowMIDI"] = _0x3eecf1[_0x23eca0(0x3ef)]);
                            _0x531b4d[_0x23eca0(0x276)] &&
                                (_0x23eca0(0x8a3) in _0x3eecf1 && updateDirectorsAudio(_0x3eecf1["audioOptions"], _0x203226),
                                _0x23eca0(0x525) in _0x3eecf1 && gotDevicesRemote(_0x3eecf1["mediaDevices"], _0x203226),
                                "videoOptions" in _0x3eecf1 && updateDirectorsVideo(_0x3eecf1[_0x23eca0(0x5b5)], _0x203226),
                                _0x23eca0(0x5ca) in _0x3eecf1 && updateRemoteRecordButton(_0x203226, _0x3eecf1[_0x23eca0(0x5ca)]),
                                _0x23eca0(0xa0e) in _0x3eecf1 && updateRemoteTimerButton(_0x203226, _0x3eecf1[_0x23eca0(0xa0e)]));
                            _0x23eca0(0x389) in _0x3eecf1 && meshcastWatch(_0x203226, _0x3eecf1[_0x23eca0(0x389)]);
                            _0x23eca0(0x3d8) in _0x3eecf1 && _0x531b4d[_0x23eca0(0x308)][_0x23eca0(0x438)](_0x203226) >= 0x0 && _0x531b4d[_0x23eca0(0x5a7)] && lowerhand();
                            _0x23eca0(0x291) in _0x3eecf1 &&
                                _0x531b4d[_0x23eca0(0x308)][_0x23eca0(0x438)](_0x203226) >= 0x0 &&
                                ((_0x531b4d[_0x23eca0(0x291)] = _0x3eecf1[_0x23eca0(0x291)]), pokeIframeAPI(_0x23eca0(0x61f), _0x531b4d[_0x23eca0(0x291)]), (_0x2047d2 = !![]));
                            if (_0x23eca0(0x611) in _0x3eecf1) {
                                (_0x531b4d[_0x23eca0(0x611)] = ![]), (_0x531b4d[_0x23eca0(0x2cb)] = ![]);
                                if (_0x531b4d["broadcast"] === ![]) {
                                    log(_0x3eecf1);
                                    if (_0x531b4d["directorList"][_0x23eca0(0x438)](_0x203226) >= 0x0) {
                                        if (_0x3eecf1[_0x23eca0(0x611)] !== ![]) {
                                            if (_0x3eecf1[_0x23eca0(0x611)] === _0x531b4d["streamID"]) _0x531b4d[_0x23eca0(0x611)] = !![];
                                            else {
                                                if (_0x531b4d["view_set"][_0x23eca0(0x1bf)] && !(_0x3eecf1[_0x23eca0(0x611)] in _0x531b4d[_0x23eca0(0x60d)])) warnlog(_0x23eca0(0x23e)), (_0x531b4d[_0x23eca0(0x611)] = ![]);
                                                else {
                                                    if (_0x531b4d[_0x23eca0(0xa1b)] && _0x531b4d[_0x23eca0(0xa1b)] !== _0x3eecf1[_0x23eca0(0x611)]) warnlog(_0x23eca0(0xa01)), (_0x531b4d[_0x23eca0(0x611)] = ![]);
                                                    else {
                                                        if (
                                                            _0x531b4d[_0x23eca0(0x725)] !== ![] &&
                                                            _0x531b4d["directorUUID"] &&
                                                            _0x531b4d[_0x23eca0(0x82d)] in _0x531b4d["rpcs"] &&
                                                            !_0x531b4d[_0x23eca0(0x39e)][_0x531b4d[_0x23eca0(0x82d)]][_0x23eca0(0x925)] &&
                                                            _0x3eecf1[_0x23eca0(0x611)] === _0x531b4d["rpcs"][_0x531b4d[_0x23eca0(0x82d)]][_0x23eca0(0x4f8)]
                                                        )
                                                            warnlog(_0x23eca0(0x999)), (_0x531b4d[_0x23eca0(0x611)] = ![]);
                                                        else {
                                                            for (var _0x327305 in _0x531b4d[_0x23eca0(0x39e)]) {
                                                                if (_0x531b4d[_0x23eca0(0x39e)][_0x327305]["streamID"] === _0x3eecf1[_0x23eca0(0x611)]) {
                                                                    _0x531b4d[_0x23eca0(0x611)] = _0x327305;
                                                                    break;
                                                                }
                                                            }
                                                            warnlog("ON\x20FOCUS\x20NOT\x20FOUND");
                                                        }
                                                    }
                                                }
                                            }
                                        } else _0x531b4d[_0x23eca0(0x611)] = ![];
                                        (_0x2047d2 = !![]), (_0x706c2c = !![]);
                                    }
                                }
                            } else {
                                if (_0x23eca0(0x2cb) in _0x3eecf1) {
                                    (_0x531b4d[_0x23eca0(0x611)] = ![]), (_0x531b4d[_0x23eca0(0x2cb)] = ![]);
                                    if (_0x531b4d[_0x23eca0(0x6e8)] === ![]) {
                                        log(_0x3eecf1);
                                        if (_0x531b4d[_0x23eca0(0x308)][_0x23eca0(0x438)](_0x203226) >= 0x0) {
                                            if (_0x3eecf1[_0x23eca0(0x2cb)] !== ![]) {
                                                if (_0x3eecf1[_0x23eca0(0x2cb)] === _0x531b4d[_0x23eca0(0x4f8)]) _0x531b4d[_0x23eca0(0x2cb)] = !![];
                                                else {
                                                    if (_0x531b4d[_0x23eca0(0x60d)][_0x23eca0(0x1bf)] && !(_0x3eecf1[_0x23eca0(0x2cb)] in _0x531b4d[_0x23eca0(0x60d)]))
                                                        warnlog("NOT\x20IN\x20VIEW\x20SET"), (_0x531b4d[_0x23eca0(0x2cb)] = ![]);
                                                    else {
                                                        if (_0x531b4d[_0x23eca0(0xa1b)] && _0x531b4d[_0x23eca0(0xa1b)] !== _0x3eecf1[_0x23eca0(0x2cb)]) warnlog(_0x23eca0(0xa01)), (_0x531b4d[_0x23eca0(0x2cb)] = ![]);
                                                        else {
                                                            if (
                                                                _0x531b4d["scene"] !== ![] &&
                                                                _0x531b4d[_0x23eca0(0x82d)] &&
                                                                _0x531b4d[_0x23eca0(0x82d)] in _0x531b4d[_0x23eca0(0x39e)] &&
                                                                !_0x531b4d[_0x23eca0(0x39e)][_0x531b4d[_0x23eca0(0x82d)]]["showDirector"] &&
                                                                _0x3eecf1[_0x23eca0(0x2cb)] === _0x531b4d["rpcs"][_0x531b4d["directorUUID"]][_0x23eca0(0x4f8)]
                                                            )
                                                                warnlog("not\x20allowed\x20to\x20show\x20the\x20director"), (_0x531b4d[_0x23eca0(0x2cb)] = ![]);
                                                            else {
                                                                for (var _0x327305 in _0x531b4d[_0x23eca0(0x39e)]) {
                                                                    if (_0x531b4d[_0x23eca0(0x39e)][_0x327305][_0x23eca0(0x4f8)] === _0x3eecf1["infocus2"]) {
                                                                        _0x531b4d[_0x23eca0(0x2cb)] = _0x327305;
                                                                        break;
                                                                    }
                                                                }
                                                                warnlog(_0x23eca0(0x353));
                                                            }
                                                        }
                                                    }
                                                }
                                            } else _0x531b4d[_0x23eca0(0x2cb)] = ![];
                                            (_0x2047d2 = !![]), (_0x706c2c = !![]);
                                        }
                                    }
                                }
                            }
                            "sensors" in _0x3eecf1 &&
                                (log(_0x3eecf1),
                                (_0x531b4d[_0x23eca0(0x39e)][_0x203226]["stats"][_0x23eca0(0x804)] = _0x3eecf1[_0x23eca0(0x804)]),
                                isIFrame && parent[_0x23eca0(0x489)]({ sensors: _0x3eecf1["sensors"] }, _0x531b4d["iframetarget"]));
                            "midi" in _0x3eecf1 && playbackMIDI(_0x3eecf1["midi"]);
                            _0x23eca0(0x9a4) in _0x3eecf1 && _0x3eecf1["fileList"] && addDownloadLink(_0x3eecf1["fileList"], _0x203226, _0x531b4d[_0x23eca0(0x39e)]);
                            "rotate_video" in _0x3eecf1 &&
                                _0x531b4d[_0x23eca0(0x39e)][_0x203226]["rotate"] !== _0x3eecf1[_0x23eca0(0x8e6)] &&
                                ((_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x42e)] = _0x3eecf1[_0x23eca0(0x8e6)]),
                                _0x531b4d[_0x23eca0(0x39e)][_0x203226]["videoElement"] && (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x6fa)][_0x23eca0(0x170)] = _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x42e)]),
                                (_0x2047d2 = !![]));
                            if (_0x23eca0(0x915) in _0x3eecf1) {
                                warnlog(_0x3eecf1), (_0x531b4d[_0x23eca0(0x39e)][_0x203226]["stats"][_0x23eca0(0x915)] = _0x3eecf1[_0x23eca0(0x915)]);
                                _0x3eecf1[_0x23eca0(0x915)][_0x23eca0(0x4b5)] && !_0x531b4d["autoSyncObject"] && ((_0x531b4d[_0x23eca0(0x44a)] = _0x3eecf1[_0x23eca0(0x915)][_0x23eca0(0x4b5)]), _0x531b4d["autoSyncCallback"](_0x203226));
                                if (_0x531b4d[_0x23eca0(0x39e)][_0x203226]["signalMeter"]) {
                                    if (_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x21d)][_0x23eca0(0x915)][_0x23eca0(0x24f)]) _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x4b6)][_0x23eca0(0x582)][_0x23eca0(0x27e)] = "1";
                                    else _0x23eca0(0x24f) in _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x21d)][_0x23eca0(0x915)] && (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4b6)]["dataset"]["cpu"] = "0");
                                }
                                _0x23eca0(0x974) in _0x3eecf1[_0x23eca0(0x915)] &&
                                    (_0x3eecf1["info"][_0x23eca0(0x974)] !== ![]
                                        ? ((_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x97e)] = _0x3eecf1[_0x23eca0(0x915)][_0x23eca0(0x974)]), _0x531b4d[_0x23eca0(0x765)]("details", _0x203226))
                                        : (_0x531b4d["rpcs"][_0x203226]["obsControl"] = ![]));
                                if (_0x23eca0(0x931) in _0x3eecf1["info"])
                                    try {
                                        typeof _0x3eecf1[_0x23eca0(0x915)][_0x23eca0(0x931)] == "string"
                                            ? (_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x931)] = sanitizeLabel(_0x3eecf1[_0x23eca0(0x915)]["label"]))
                                            : (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x931)] = ![]);
                                        applyStyleEffect(_0x203226);
                                        if (_0x531b4d["director"]) {
                                            var _0x2a883d = getById(_0x23eca0(0x9a0) + _0x203226);
                                            if (_0x2a883d) {
                                                _0x2a883d["classList"][_0x23eca0(0x6e9)](_0x23eca0(0x3b3)), (_0x2a883d["dataset"][_0x23eca0(0x49f)] = _0x203226);
                                                if (_0x531b4d["rpcs"][_0x203226]["label"]) (_0x2a883d[_0x23eca0(0x471)] = _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x931)]), _0x2a883d[_0x23eca0(0x23d)][_0x23eca0(0x2c0)]("addALabel");
                                                else
                                                    _0x531b4d[_0x23eca0(0x82d)] === _0x203226
                                                        ? ((_0x2a883d["innerText"] = miscTranslations[_0x23eca0(0x995)]), _0x2a883d["classList"]["remove"](_0x23eca0(0x866)))
                                                        : ((_0x2a883d[_0x23eca0(0x471)] = miscTranslations[_0x23eca0(0x6e1)]), _0x2a883d[_0x23eca0(0x23d)][_0x23eca0(0x6e9)](_0x23eca0(0x866)));
                                                _0x2a883d[_0x23eca0(0x194)] = async function (_0x3fc3be) {
                                                    var _0x2a5a53 = _0x23eca0,
                                                        _0x439b50 = _0x3fc3be[_0x2a5a53(0x50f)][_0x2a5a53(0x471)];
                                                    _0x531b4d[_0x2a5a53(0x39e)][_0x3fc3be[_0x2a5a53(0x50f)][_0x2a5a53(0x582)][_0x2a5a53(0x49f)]][_0x2a5a53(0x931)] === ![] && (_0x439b50 = "");
                                                    window[_0x2a5a53(0x337)]();
                                                    var _0x231150 = await promptAlt(miscTranslations[_0x2a5a53(0x9fe)], ![], ![], _0x439b50);
                                                    if (_0x231150 !== null) {
                                                        _0x231150 == ""
                                                            ? ((_0x231150 = ![]),
                                                              _0x531b4d[_0x2a5a53(0x82d)] === _0x203226
                                                                  ? ((_0x3fc3be[_0x2a5a53(0x50f)][_0x2a5a53(0x471)] = miscTranslations[_0x2a5a53(0x995)]), _0x3fc3be["target"]["classList"][_0x2a5a53(0x2c0)](_0x2a5a53(0x866)))
                                                                  : ((_0x3fc3be[_0x2a5a53(0x50f)]["innerText"] = miscTranslations[_0x2a5a53(0x6e1)]), _0x3fc3be[_0x2a5a53(0x50f)][_0x2a5a53(0x23d)][_0x2a5a53(0x6e9)](_0x2a5a53(0x866))))
                                                            : ((_0x3fc3be[_0x2a5a53(0x50f)]["innerText"] = _0x231150), _0x3fc3be["target"][_0x2a5a53(0x23d)]["remove"](_0x2a5a53(0x866)));
                                                        var _0x3925b5 = {};
                                                        (_0x3925b5["UUID"] = _0x3fc3be[_0x2a5a53(0x50f)][_0x2a5a53(0x582)][_0x2a5a53(0x49f)]),
                                                            (_0x3925b5[_0x2a5a53(0x327)] = !![]),
                                                            (_0x3925b5[_0x2a5a53(0x857)] = _0x231150),
                                                            _0x531b4d[_0x2a5a53(0x1a7)](_0x3925b5, _0x3925b5[_0x2a5a53(0x49f)]);
                                                    }
                                                };
                                            }
                                        }
                                    } catch (_0x276600) {
                                        errorlog(_0x276600);
                                    }
                                if (_0x23eca0(0x885) in _0x3eecf1["info"])
                                    try {
                                        _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x885)] = parseInt(_0x3eecf1[_0x23eca0(0x915)][_0x23eca0(0x885)]) || 0x0;
                                        if (_0x531b4d[_0x23eca0(0x276)]) {
                                            var _0x5eeb4c = document["querySelectorAll"](_0x23eca0(0x7f7) + _0x203226 + "\x22]");
                                            _0x5eeb4c[0x0] && (_0x5eeb4c[0x0][_0x23eca0(0x471)] = _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x885)]);
                                        }
                                    } catch (_0x509a0c) {
                                        errorlog(_0x509a0c);
                                    }
                                else _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x885)] = 0x0;
                                if (_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x5a1)])
                                    try {
                                        if (_0x23eca0(0x716) in _0x3eecf1["info"]) {
                                            if (_0x3eecf1["info"]["power_level"] !== null) {
                                                var _0x4e365e = _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x5a1)]["querySelector"](_0x23eca0(0xa1f));
                                                if (_0x4e365e) {
                                                    var _0x1ae8ba = parseInt(_0x531b4d[_0x23eca0(0x39e)][_0x203226]["stats"][_0x23eca0(0x915)]["power_level"]) || 0x0;
                                                    _0x1ae8ba > 0x64 && (_0x1ae8ba = 0x64);
                                                    _0x1ae8ba < 0x0 && (_0x1ae8ba = 0x0);
                                                    _0x4e365e["style"][_0x23eca0(0x63d)] = parseInt(_0x1ae8ba) + "%";
                                                    if (_0x1ae8ba < 0xa)
                                                        _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x5a1)][_0x23eca0(0x23d)]["remove"](_0x23eca0(0x8e8)),
                                                            _0x531b4d[_0x23eca0(0x39e)][_0x203226]["batteryMeter"][_0x23eca0(0x23d)][_0x23eca0(0x6e9)](_0x23eca0(0x5b3));
                                                    else
                                                        _0x1ae8ba < 0x19
                                                            ? (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x5a1)]["classList"][_0x23eca0(0x2c0)](_0x23eca0(0x5b3)),
                                                              _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x5a1)][_0x23eca0(0x23d)]["add"](_0x23eca0(0x8e8)))
                                                            : (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x5a1)][_0x23eca0(0x23d)][_0x23eca0(0x2c0)](_0x23eca0(0x5b3)),
                                                              _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x5a1)][_0x23eca0(0x23d)][_0x23eca0(0x2c0)](_0x23eca0(0x8e8)));
                                                    _0x1ae8ba < 0x64 && _0x531b4d[_0x23eca0(0x39e)][_0x203226]["batteryMeter"][_0x23eca0(0x23d)][_0x23eca0(0x2c0)]("hidden"),
                                                        (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x5a1)][_0x23eca0(0x151)] = _0x1ae8ba + _0x23eca0(0x628));
                                                }
                                            }
                                        }
                                        _0x23eca0(0x5b6) in _0x3eecf1[_0x23eca0(0x915)] &&
                                            (_0x3eecf1[_0x23eca0(0x915)][_0x23eca0(0x5b6)] === ![]
                                                ? ((_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x5a1)][_0x23eca0(0x582)][_0x23eca0(0x62b)] = "0"),
                                                  _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x5a1)][_0x23eca0(0x23d)][_0x23eca0(0x2c0)](_0x23eca0(0x98b)))
                                                : (_0x531b4d[_0x23eca0(0x39e)][_0x203226]["batteryMeter"][_0x23eca0(0x582)][_0x23eca0(0x62b)] = "1"));
                                    } catch (_0x59004a) {
                                        errorlog(_0x59004a);
                                    }
                                if (_0x23eca0(0x4ca) in _0x3eecf1[_0x23eca0(0x915)])
                                    try {
                                        _0x3eecf1[_0x23eca0(0x915)]["initial_group"]
                                            ? (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x8b3)] = _0x3eecf1["info"][_0x23eca0(0x4ca)]["split"](","))
                                            : (_0x531b4d[_0x23eca0(0x39e)][_0x203226]["group"] = []),
                                            _0x531b4d[_0x23eca0(0x276)]
                                                ? (initGroupButtons(_0x203226), _0x531b4d[_0x23eca0(0x39e)][_0x203226]["group"][_0x23eca0(0x1bf)] && syncGroup(_0x531b4d["rpcs"][_0x203226]["group"], _0x203226))
                                                : (_0x2047d2 = !![]);
                                    } catch (_0x39392d) {
                                        errorlog(_0x39392d);
                                    }
                                if (_0x23eca0(0x7d5) in _0x3eecf1[_0x23eca0(0x915)])
                                    try {
                                        (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x59b)] = _0x3eecf1[_0x23eca0(0x915)][_0x23eca0(0x7d5)]),
                                            _0x531b4d[_0x23eca0(0x725)] === ![] &&
                                                _0x531b4d[_0x23eca0(0x875)] &&
                                                (!_0x531b4d[_0x23eca0(0x2d4)] || _0x531b4d[_0x23eca0(0x276)]) &&
                                                (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x3a9)]
                                                    ? _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x59b)]
                                                        ? _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x3a9)][_0x23eca0(0x23d)][_0x23eca0(0x2c0)]("hidden")
                                                        : _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x3a9)][_0x23eca0(0x23d)]["add"](_0x23eca0(0x98b))
                                                    : ((_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x3a9)] = getById(_0x23eca0(0x3bd))[_0x23eca0(0x67e)](!![])),
                                                      (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x3a9)]["id"] = _0x23eca0(0x60f) + _0x203226),
                                                      _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x59b)]
                                                          ? _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x3a9)][_0x23eca0(0x23d)][_0x23eca0(0x2c0)](_0x23eca0(0x98b))
                                                          : _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x3a9)]["classList"][_0x23eca0(0x6e9)](_0x23eca0(0x98b)),
                                                      (_0x2047d2 = !![]))),
                                            pokeIframeAPI(_0x23eca0(0x7d6), _0x531b4d[_0x23eca0(0x39e)][_0x203226]["remoteMuteState"], _0x203226);
                                    } catch (_0x58b27d) {
                                        errorlog(_0x58b27d);
                                    }
                                if (_0x531b4d["director"]) {
                                    try {
                                        "recording_audio_pipeline" in _0x3eecf1[_0x23eca0(0x915)] && _0x3eecf1[_0x23eca0(0x915)][_0x23eca0(0x34a)] == ![] && initRecordingImpossible(_0x203226);
                                    } catch (_0x4a1963) {
                                        errorlog(_0x4a1963);
                                    }
                                    try {
                                        if (_0x23eca0(0x880) in _0x3eecf1["info"]) {
                                            if (_0x3eecf1["info"][_0x23eca0(0x880)] !== ![]) {
                                                let _0xb6c2fe = parseInt(_0x3eecf1[_0x23eca0(0x915)]["recording_audio_gain"]) || 0x0;
                                                initAudioButtons(_0xb6c2fe, _0x203226);
                                            }
                                        }
                                    } catch (_0x41df5a) {
                                        errorlog(_0x41df5a);
                                    }
                                    try {
                                        _0x23eca0(0x174) in _0x3eecf1[_0x23eca0(0x915)] && _0x3eecf1[_0x23eca0(0x915)][_0x23eca0(0x174)] && updateRemoteSpeakerMute(_0x203226);
                                    } catch (_0x2dbccf) {
                                        errorlog(_0x2dbccf);
                                    }
                                    try {
                                        _0x23eca0(0x984) in _0x3eecf1[_0x23eca0(0x915)] && _0x3eecf1[_0x23eca0(0x915)]["directorDisplayMuted"] && updateRemoteDisplayMute(_0x203226);
                                    } catch (_0x32d175) {
                                        errorlog(_0x32d175);
                                    }
                                }
                                if (_0x23eca0(0x3c3) in _0x3eecf1["info"])
                                    try {
                                        _0x531b4d[_0x23eca0(0x276)]
                                            ? _0x3eecf1[_0x23eca0(0x915)][_0x23eca0(0x3c3)] && updateDirectorVideoMute(_0x203226)
                                            : ((_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x3c3)] = _0x3eecf1[_0x23eca0(0x915)][_0x23eca0(0x3c3)]),
                                              _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x3c3)] && _0x203226 in _0x531b4d["rpcs"] && _0x531b4d[_0x23eca0(0x1ec)](0x0, _0x203226));
                                    } catch (_0x291156) {
                                        errorlog(_0x291156);
                                    }
                                if (_0x23eca0(0x883) in _0x3eecf1[_0x23eca0(0x915)])
                                    try {
                                        (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x912)] = _0x3eecf1["info"][_0x23eca0(0x883)]),
                                            _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x912)] && _0x531b4d[_0x23eca0(0x276)] && _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x8f8)]["classList"][_0x23eca0(0x2c0)]("hidden"),
                                            pokeIframeAPI(_0x23eca0(0x669), _0x531b4d["rpcs"][_0x203226]["videoMuted"], _0x203226);
                                    } catch (_0x2ab54e) {
                                        errorlog(_0x2ab54e);
                                    }
                                "rotate_video" in _0x3eecf1[_0x23eca0(0x915)] &&
                                    _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x42e)] !== _0x3eecf1[_0x23eca0(0x915)]["rotate_video"] &&
                                    ((_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x42e)] = _0x3eecf1[_0x23eca0(0x915)]["rotate_video"]),
                                    _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x6fa)] && (_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x6fa)][_0x23eca0(0x170)] = _0x531b4d["rpcs"][_0x203226]["rotate"]),
                                    (_0x2047d2 = !![])),
                                    _0x23eca0(0x51d) in _0x3eecf1["info"] && _0x3eecf1["info"]["room_init"] === ![] && soloLinkGeneratorInit(_0x203226),
                                    directorCoDirectorColoring(_0x203226),
                                    (_0x706c2c = !![]),
                                    pokeAPI(_0x23eca0(0x983), getDetailedState(_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)])),
                                    pokeIframeAPI(_0x23eca0(0x1fa), _0x3eecf1[_0x23eca0(0x915)], _0x203226);
                            }
                            if ("miniInfo" in _0x3eecf1) {
                                if (_0x531b4d[_0x23eca0(0x39e)][_0x203226]["stats"] && _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x21d)][_0x23eca0(0x915)]) {
                                    _0x23eca0(0x360) in _0x3eecf1[_0x23eca0(0x2a1)] && (_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x21d)][_0x23eca0(0x915)][_0x23eca0(0x405)] = _0x3eecf1[_0x23eca0(0x2a1)]["qlr"]);
                                    _0x23eca0(0x7ee) in _0x3eecf1[_0x23eca0(0x2a1)] && (_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x21d)][_0x23eca0(0x915)][_0x23eca0(0x69d)] = _0x3eecf1["miniInfo"][_0x23eca0(0x7ee)]);
                                    if (_0x23eca0(0x27e) in _0x3eecf1[_0x23eca0(0x2a1)]) {
                                        _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x21d)][_0x23eca0(0x915)]["cpuLimited"] = _0x3eecf1[_0x23eca0(0x2a1)]["cpu"];
                                        if (_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x4b6)]) {
                                            if (_0x3eecf1["miniInfo"][_0x23eca0(0x27e)]) _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4b6)]["dataset"][_0x23eca0(0x27e)] = "1";
                                            else _0x23eca0(0x27e) in _0x3eecf1[_0x23eca0(0x2a1)] && (_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x4b6)][_0x23eca0(0x582)][_0x23eca0(0x27e)] = "0");
                                        }
                                    }
                                    "hw_enc" in _0x3eecf1["miniInfo"] && (_0x531b4d[_0x23eca0(0x39e)][_0x203226]["stats"]["info"][_0x23eca0(0x9c0)] = _0x3eecf1[_0x23eca0(0x2a1)][_0x23eca0(0x473)]),
                                        _0x23eca0(0x4aa) in _0x3eecf1[_0x23eca0(0x2a1)] &&
                                            (typeof _0x3eecf1["miniInfo"]["bat"] == "number"
                                                ? (_0x531b4d[_0x23eca0(0x39e)][_0x203226]["stats"]["info"][_0x23eca0(0x716)] = _0x3eecf1[_0x23eca0(0x2a1)][_0x23eca0(0x4aa)] * 0x64)
                                                : (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x21d)][_0x23eca0(0x915)][_0x23eca0(0x716)] = null)),
                                        "chrg" in _0x3eecf1[_0x23eca0(0x2a1)] && (_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x21d)]["info"][_0x23eca0(0x5b6)] = _0x3eecf1["miniInfo"][_0x23eca0(0x41e)]),
                                        "out" in _0x3eecf1[_0x23eca0(0x2a1)] &&
                                            "c" in _0x3eecf1[_0x23eca0(0x2a1)][_0x23eca0(0x701)] &&
                                            ((_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x21d)]["info"][_0x23eca0(0x919)] = _0x3eecf1[_0x23eca0(0x2a1)]["out"]["c"]),
                                            _0x531b4d[_0x23eca0(0x89c)] &&
                                                _0x531b4d["rpcs"][_0x203226]["connectionDetails"] &&
                                                ((_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x93c)][_0x23eca0(0x471)] = "🔗" + _0x531b4d[_0x23eca0(0x39e)][_0x203226]["stats"][_0x23eca0(0x915)][_0x23eca0(0x919)]),
                                                (_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x93c)]["dataset"][_0x23eca0(0x857)] = _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x21d)][_0x23eca0(0x915)][_0x23eca0(0x919)]))),
                                        _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x5a1)] && batteryMeterInfoUpdate(_0x203226);
                                }
                            }
                            if (_0x3eecf1[_0x23eca0(0x81e)]) {
                                _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x276)] = !![];
                                _0x3eecf1[_0x23eca0(0x81e)]["tokenDirector"] && (await checkToken());
                                if (_0x531b4d["directorUUID"] === _0x203226) {
                                    _0x23eca0(0x61b) in _0x3eecf1[_0x23eca0(0x81e)] && ((_0x531b4d["totalRoomBitrate"] = parseInt(_0x3eecf1["directorSettings"][_0x23eca0(0x61b)]) || 0x0), (_0x2047d2 = !![]));
                                    if (_0x3eecf1[_0x23eca0(0x81e)][_0x23eca0(0x8d9)]) {
                                        if (_0x531b4d[_0x23eca0(0x6e8)] === ![]) {
                                            if (_0x3eecf1["directorSettings"][_0x23eca0(0x8d9)] === _0x531b4d["streamID"]) _0x531b4d[_0x23eca0(0x611)] = !![];
                                            else
                                                for (var _0x327305 in _0x531b4d[_0x23eca0(0x39e)]) {
                                                    if (_0x531b4d[_0x23eca0(0x39e)][_0x327305]["streamID"] === _0x3eecf1[_0x23eca0(0x81e)][_0x23eca0(0x8d9)]) {
                                                        if ((_0x531b4d["directorList"][_0x23eca0(0x42d)](_0x327305) || _0x531b4d[_0x23eca0(0x39e)][_0x327305][_0x23eca0(0x276)]) && !_0x531b4d[_0x23eca0(0x925)]) break;
                                                        _0x531b4d["infocus"] = _0x327305;
                                                        break;
                                                    }
                                                }
                                            (_0x2047d2 = !![]), (_0x706c2c = !![]);
                                        }
                                    }
                                    if (_0x23eca0(0x925) in _0x3eecf1["directorSettings"]) {
                                        if (_0x531b4d[_0x23eca0(0x725)] !== ![]) {
                                            if (_0x531b4d[_0x23eca0(0x925)]) _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x925)] = _0x531b4d[_0x23eca0(0x925)];
                                            else _0x3eecf1[_0x23eca0(0x81e)][_0x23eca0(0x925)] && (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x925)] = _0x3eecf1[_0x23eca0(0x81e)][_0x23eca0(0x925)]);
                                        }
                                    }
                                    if (_0x531b4d["scene"] !== ![]) {
                                        if (_0x3eecf1[_0x23eca0(0x81e)][_0x23eca0(0x725)])
                                            for (var _0x327305 in _0x3eecf1[_0x23eca0(0x81e)][_0x23eca0(0x725)]) {
                                                setTimeout(
                                                    function (_0x5d4d32) {
                                                        var _0x28572f = _0x23eca0;
                                                        _0x531b4d[_0x28572f(0x237)](_0x5d4d32);
                                                    },
                                                    0x3e8,
                                                    _0x3eecf1["directorSettings"]["scene"][_0x327305]
                                                );
                                            }
                                        if (_0x3eecf1["directorSettings"][_0x23eca0(0x643)])
                                            for (var _0x327305 in _0x3eecf1["directorSettings"][_0x23eca0(0x643)]) {
                                                setTimeout(
                                                    function (_0xddabc1) {
                                                        var _0x14fdfb = _0x23eca0;
                                                        _0x531b4d[_0x14fdfb(0x237)](_0xddabc1);
                                                    },
                                                    0x3e8,
                                                    _0x3eecf1["directorSettings"][_0x23eca0(0x643)][_0x327305]
                                                );
                                            }
                                    }
                                    if (_0x23eca0(0x297) in _0x3eecf1[_0x23eca0(0x81e)])
                                        for (var _0x121bb7 = 0x0; _0x121bb7 < _0x3eecf1[_0x23eca0(0x81e)][_0x23eca0(0x297)][_0x23eca0(0x1bf)]; _0x121bb7++) {
                                            !_0x531b4d[_0x23eca0(0x308)][_0x23eca0(0x42d)](_0x3eecf1[_0x23eca0(0x81e)][_0x23eca0(0x297)][_0x121bb7]["toString"]) &&
                                                (_0x531b4d["directorList"][_0x23eca0(0x874)](_0x3eecf1[_0x23eca0(0x81e)][_0x23eca0(0x297)][_0x121bb7][_0x23eca0(0x193)]()),
                                                addDirectorBlue(_0x3eecf1[_0x23eca0(0x81e)][_0x23eca0(0x297)][_0x121bb7][_0x23eca0(0x193)]()));
                                        }
                                }
                            }
                            if (_0x531b4d[_0x23eca0(0x308)][_0x23eca0(0x438)](_0x203226) >= 0x0) {
                                _0x531b4d[_0x23eca0(0x725)] !== ![] && _0x23eca0(0x4db) in _0x3eecf1 && _0x531b4d["directorActions"](_0x3eecf1);
                                _0x23eca0(0x81e) in _0x3eecf1 &&
                                    _0x3eecf1[_0x23eca0(0x81e)][_0x23eca0(0x31c)] &&
                                    !_0x531b4d["director"] &&
                                    _0x531b4d[_0x23eca0(0x725)] === ![] &&
                                    ((_0x531b4d[_0x23eca0(0x984)] = !![]), _0x531b4d[_0x23eca0(0x8d3)]());
                                if ("directorState" in _0x3eecf1) {
                                    (_0x531b4d[_0x23eca0(0x9a6)] = _0x3eecf1[_0x23eca0(0x9d7)]), log(_0x3eecf1);
                                    for (var _0xa3c570 in _0x531b4d[_0x23eca0(0x9a6)]) {
                                        syncSceneState(_0xa3c570), syncOtherState(_0xa3c570);
                                    }
                                }
                                if (_0x23eca0(0x6c3) in _0x3eecf1) {
                                    _0x531b4d[_0x23eca0(0x56b)] = _0x3eecf1["widgetSrc"] || ![];
                                    let _0x4bfed2 = document[_0x23eca0(0x266)](_0x23eca0(0x56b));
                                    try {
                                        _0x4bfed2
                                            ? !_0x531b4d[_0x23eca0(0x56b)]
                                                ? (document["getElementById"](_0x23eca0(0x56b))[_0x23eca0(0x2c0)](), (_0x2047d2 = !![]))
                                                : (_0x4bfed2[_0x23eca0(0x7fe)] = parseURL4Iframe(_0x531b4d[_0x23eca0(0x56b)]))
                                            : (_0x2047d2 = !![]),
                                            _0x531b4d[_0x23eca0(0x276)] && (getById(_0x23eca0(0x5cd))[_0x23eca0(0x857)] = _0x531b4d[_0x23eca0(0x56b)] || "");
                                    } catch (_0x2ca918) {
                                        errorlog(_0x2ca918);
                                    }
                                    pokeIframeAPI(_0x23eca0(0x80f), _0x531b4d[_0x23eca0(0x56b)], _0x203226);
                                }
                                _0x23eca0(0x3cb) in _0x3eecf1 && ((_0x531b4d[_0x23eca0(0x3a3)] = _0x3eecf1[_0x23eca0(0x3cb)]), _0x531b4d["obsSceneSync"](), console[_0x23eca0(0xa08)](_0x3eecf1)),
                                    "layouts" in _0x3eecf1 &&
                                        ((_0x531b4d[_0x23eca0(0x1b8)] = _0x3eecf1[_0x23eca0(0x1b8)]),
                                        _0x23eca0(0xa37) in _0x3eecf1 ? ((_0x531b4d["obsSceneTriggers"] = _0x3eecf1[_0x23eca0(0xa37)]), _0x531b4d["obsSceneSync"]()) : (_0x531b4d[_0x23eca0(0xa37)] = ![]));
                            }
                            if (_0x23eca0(0x885) in _0x3eecf1) {
                                _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x885)] = parseInt(_0x3eecf1[_0x23eca0(0x885)]) || 0x0;
                                _0x203226 in _0x531b4d[_0x23eca0(0x8cd)] && (_0x531b4d[_0x23eca0(0x8cd)][_0x203226][_0x23eca0(0x885)] = parseInt(_0x3eecf1[_0x23eca0(0x885)]) || 0x0);
                                if (_0x531b4d["director"]) {
                                    var _0x5eeb4c = document[_0x23eca0(0x63c)]("[data-action-type=\x22order-value\x22][data--u-u-i-d=\x22" + _0x203226 + "\x22]");
                                    _0x5eeb4c[0x0] && (_0x5eeb4c[0x0]["innerText"] = parseInt(_0x3eecf1[_0x23eca0(0x885)]) || 0x0);
                                }
                                _0x2047d2 = !![];
                            }
                            if ("changeLabel" in _0x3eecf1) {
                                log(_0x23eca0(0x404));
                                if ("value" in _0x3eecf1) {
                                    log("value\x20there");
                                    if (typeof _0x3eecf1[_0x23eca0(0x857)] == _0x23eca0(0x987)) {
                                        _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x931)] = sanitizeLabel(_0x3eecf1[_0x23eca0(0x857)]);
                                        _0x531b4d["rpcs"][_0x203226]["label"][_0x23eca0(0x1bf)] == 0x0 && (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x931)] = ![]);
                                        applyStyleEffect(_0x203226);
                                        if (_0x531b4d[_0x23eca0(0x276)]) updateLabelDirectors(_0x203226);
                                        else _0x531b4d[_0x23eca0(0x225)] && (_0x2047d2 = !![]);
                                    } else {
                                        (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x931)] = ![]), applyStyleEffect(_0x203226);
                                        if (_0x531b4d[_0x23eca0(0x276)]) updateLabelDirectors2(_0x203226);
                                        else _0x531b4d[_0x23eca0(0x225)] && (_0x2047d2 = !![]);
                                    }
                                    (_0x706c2c = !![]), pokeIframeAPI(_0x23eca0(0x1a0), _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x931)], _0x203226);
                                }
                            }
                            _0x23eca0(0x430) in _0x3eecf1 &&
                                (log(_0x3eecf1),
                                (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x59b)] = _0x3eecf1["muteState"]),
                                _0x531b4d[_0x23eca0(0x1ec)](![], _0x203226),
                                _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x21d)][_0x23eca0(0x915)] &&
                                    (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x21d)][_0x23eca0(0x915)][_0x23eca0(0x7d5)] = _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x59b)]),
                                _0x531b4d[_0x23eca0(0x725)] === ![] &&
                                    _0x531b4d[_0x23eca0(0x875)] &&
                                    (!_0x531b4d[_0x23eca0(0x2d4)] || _0x531b4d[_0x23eca0(0x276)]) &&
                                    (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x3a9)]
                                        ? _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x59b)]
                                            ? _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x3a9)]["classList"][_0x23eca0(0x2c0)](_0x23eca0(0x98b))
                                            : _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x3a9)][_0x23eca0(0x23d)][_0x23eca0(0x6e9)]("hidden")
                                        : ((_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x3a9)] = getById(_0x23eca0(0x3bd))[_0x23eca0(0x67e)](!![])),
                                          (_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x3a9)]["id"] = _0x23eca0(0x60f) + _0x203226),
                                          _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x59b)]
                                              ? _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x3a9)][_0x23eca0(0x23d)][_0x23eca0(0x2c0)]("hidden")
                                              : _0x531b4d[_0x23eca0(0x39e)][_0x203226]["remoteMuteElement"][_0x23eca0(0x23d)][_0x23eca0(0x6e9)](_0x23eca0(0x98b)),
                                          (_0x2047d2 = !![])),
                                    (_0x706c2c = !![])),
                                pokeAPI("remoteMuted", _0x531b4d["rpcs"][_0x203226][_0x23eca0(0x59b)], _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)]),
                                pokeIframeAPI("remote-mute-state", _0x3eecf1[_0x23eca0(0x430)], _0x203226));
                            if (_0x23eca0(0x7b1) in _0x3eecf1) {
                                var _0x1baac1 = getChromeVersion();
                                _0x1baac1 && _0x1baac1 < 0x50 && (_0x2047d2 = !![]);
                            }
                            if (_0x23eca0(0x912) in _0x3eecf1) {
                                log("videoMuted:\x20" + _0x3eecf1[_0x23eca0(0x912)]), (_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x912)] = _0x3eecf1[_0x23eca0(0x912)]);
                                !_0x531b4d[_0x23eca0(0x276)]
                                    ? (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x912)]
                                          ? (!_0x531b4d[_0x23eca0(0x8e9)] && _0x531b4d[_0x23eca0(0x1ec)](0x0, _0x203226),
                                            _0x531b4d[_0x23eca0(0x39e)][_0x203226]["imageElement"] &&
                                                ((_0x531b4d["rpcs"][_0x203226]["imageElement"][_0x23eca0(0x98b)] = !![]), (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x976)][_0x23eca0(0xa19)][_0x23eca0(0x420)] = _0x23eca0(0x98b))))
                                          : updateIncomingVideoElement(_0x203226, !![], ![]),
                                      (_0x2047d2 = !![]))
                                    : _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x912)]
                                    ? _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x8f8)][_0x23eca0(0x23d)]["remove"]("hidden")
                                    : _0x531b4d["rpcs"][_0x203226]["remoteVideoMuteElement"][_0x23eca0(0x23d)]["remove"](_0x23eca0(0x6e9));
                                if (_0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x641)] && _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x912)])
                                    setTimeout(function () {
                                        activeSpeaker();
                                    }, 0x0);
                                else
                                    !_0x531b4d[_0x23eca0(0x39e)][_0x203226]["videoMuted"] &&
                                        setTimeout(function () {
                                            activeSpeaker();
                                        }, 0x0);
                                (_0x706c2c = !![]),
                                    pokeAPI("remoteVideoMuted", _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x912)], _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x4f8)]),
                                    pokeIframeAPI("remote-video-mute-state", _0x3eecf1["videoMuted"], _0x203226);
                            }
                            if (_0x23eca0(0x53e) in _0x3eecf1) {
                                if (_0x203226 + _0x23eca0(0x47d) in _0x531b4d[_0x23eca0(0x39e)]) {
                                    _0x531b4d["rpcs"][_0x203226 + _0x23eca0(0x47d)][_0x23eca0(0x436)] = _0x3eecf1["screenStopped"];
                                    if (_0x531b4d[_0x23eca0(0x276)]) {
                                        _0x531b4d["rpcs"][_0x203226 + _0x23eca0(0x47d)][_0x23eca0(0x912)] = !_0x3eecf1[_0x23eca0(0x53e)];
                                        try {
                                            pokeAPI(_0x23eca0(0x4cb), _0x531b4d[_0x23eca0(0x39e)][_0x203226 + _0x23eca0(0x47d)]["videoMuted"], _0x531b4d[_0x23eca0(0x39e)][_0x203226 + _0x23eca0(0x47d)]["streamID"]);
                                        } catch (_0x5c9d38) {}
                                        _0x531b4d["rpcs"][_0x203226]["videoMuted"]
                                            ? _0x531b4d[_0x23eca0(0x39e)][_0x203226][_0x23eca0(0x8f8)][_0x23eca0(0x23d)]["remove"](_0x23eca0(0x98b))
                                            : _0x531b4d[_0x23eca0(0x39e)][_0x203226]["remoteVideoMuteElement"][_0x23eca0(0x23d)]["add"](_0x23eca0(0x98b)),
                                            _0x3eecf1[_0x23eca0(0x53e)]
                                                ? getById(_0x23eca0(0x661) + _0x203226 + _0x23eca0(0x47d))[_0x23eca0(0x23d)][_0x23eca0(0x6e9)](_0x23eca0(0x9e7))
                                                : getById(_0x23eca0(0x661) + _0x203226 + _0x23eca0(0x47d))[_0x23eca0(0x23d)][_0x23eca0(0x2c0)](_0x23eca0(0x9e7));
                                    } else (_0x531b4d[_0x23eca0(0x39e)][_0x203226 + _0x23eca0(0x47d)][_0x23eca0(0x436)] = _0x3eecf1[_0x23eca0(0x53e)]), (_0x2047d2 = !![]);
                                    _0x706c2c = !![];
                                }
                            }
                            _0x23eca0(0x2cc) in _0x3eecf1 &&
                                ((_0x531b4d["rpcs"][_0x203226][_0x23eca0(0x2cc)] = _0x3eecf1[_0x23eca0(0x2cc)]), (_0x2047d2 = !![]), pokeIframeAPI("remote-screenshare-state", _0x3eecf1[_0x23eca0(0x2cc)], _0x203226));
                            if ("directVideoMuted" in _0x3eecf1) {
                                if (!_0x531b4d[_0x23eca0(0x276)]) {
                                    if (_0x23eca0(0x50f) in _0x3eecf1) {
                                        if (_0x531b4d["directorList"][_0x23eca0(0x438)](_0x203226) >= 0x0) {
                                            var _0x53c0f7 = _0x3eecf1[_0x23eca0(0x50f)];
                                            if (_0x53c0f7 === !![]) _0x531b4d[_0x23eca0(0x3c3)] = _0x3eecf1[_0x23eca0(0x67c)];
                                            else
                                                _0x53c0f7 in _0x531b4d[_0x23eca0(0x39e)] &&
                                                    ((_0x531b4d[_0x23eca0(0x39e)][_0x53c0f7][_0x23eca0(0x3c3)] = _0x3eecf1[_0x23eca0(0x67c)]),
                                                    _0x531b4d["rpcs"][_0x53c0f7][_0x23eca0(0x3c3)] && _0x531b4d[_0x23eca0(0x1ec)](0x0, _0x53c0f7),
                                                    (_0x2047d2 = !![]));
                                        }
                                    }
                                }
                                _0x706c2c = !![];
                            }
                            "virtualHangup" in _0x3eecf1 &&
                                (!_0x531b4d[_0x23eca0(0x276)] &&
                                    _0x531b4d["directorList"][_0x23eca0(0x438)](_0x203226) >= 0x0 &&
                                    _0x203226 in _0x531b4d[_0x23eca0(0x39e)] &&
                                    ((_0x531b4d[_0x23eca0(0x39e)][_0x203226]["virtualHangup"] = _0x3eecf1[_0x23eca0(0x436)]),
                                    _0x531b4d[_0x23eca0(0x39e)][_0x203226]["virtualHangup"] && _0x203226 in _0x531b4d["rpcs"] && _0x531b4d[_0x23eca0(0x1ec)](0x0, _0x203226),
                                    (_0x2047d2 = !![])),
                                (_0x706c2c = !![]));
                            if (_0x23eca0(0x41a) in _0x3eecf1) {
                                log(_0x23eca0(0x179));
                                try {
                                    _0x531b4d["sendFile"](_0x203226, _0x3eecf1[_0x23eca0(0x41a)]);
                                } catch (_0x518bc2) {
                                    errorlog(_0x518bc2);
                                }
                            }
                            _0x23eca0(0x24d) in _0x3eecf1 && remoteStats(_0x3eecf1, _0x203226);
                            if (_0x2047d2)
                                setTimeout(function () {
                                    updateMixer(), updateUserList();
                                }, 0x1);
                            else _0x706c2c && updateUserList();
                        }),
                        (_0x531b4d[_0x49bdb5(0x39e)][_0x899509][_0x49bdb5(0x3dd)][_0x49bdb5(0x907)] = () => {
                            var _0x59c362 = _0x49bdb5;
                            warnlog(_0x59c362(0x715));
                        });
                }),
                (_0x531b4d[_0x10fd08(0x39e)][_0x899509][_0x10fd08(0xa14)] = (_0x5082f5) => {
                    var _0x22775c = _0x10fd08;
                    warnlog(_0x22775c(0x718)), _0x531b4d["onTrack"](_0x5082f5, _0x899509);
                }),
                log("setup\x20peer\x20complete");
        }),
        (_0x531b4d[_0x4e3749(0x9cd)] = function (_0x3ead02, _0xdf41bb) {
            var _0x36faf9 = _0x4e3749;
            log(_0x36faf9(0x7c8)),
                !_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb][_0x36faf9(0x7f3)]
                    ? ((_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb][_0x36faf9(0x7f3)] = createVideoElement()),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)] = {}),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"]["realUUID"] = _0xdf41bb),
                      _0x531b4d["rpcs"][_0xdf41bb]["streamID"] && (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x4f8)] = _0x531b4d[_0x36faf9(0x39e)][_0xdf41bb][_0x36faf9(0x4f8)] + ":s"),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x21d)] = {}),
                      (_0x531b4d["rpcs"][_0xdf41bb][_0x36faf9(0x21d)][_0x36faf9(0x234)] = ![]),
                      (_0x531b4d["rpcs"][_0xdf41bb + _0x36faf9(0x47d)]["getStats"] = function () {
                          return new Promise((_0x108854, _0x433596) => {
                              _0x108854([]);
                          });
                      }),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"][_0x36faf9(0x2c8)] = ![]),
                      (_0x531b4d["rpcs"][_0xdf41bb + "_screen"][_0x36faf9(0x3ed)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x40d)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)]["loudest"] = ![]),
                      (_0x531b4d["rpcs"][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0xa2e)] = null),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)]["codirectorRequested"] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x1a8)] = -0x1),
                      (_0x531b4d["rpcs"][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x3fb)] = ![]),
                      (_0x531b4d["rpcs"][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x925)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0xa03)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"][_0x36faf9(0x703)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"][_0x36faf9(0x3da)] = -0x1),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x696)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x6fa)] = ![]),
                      (_0x531b4d["rpcs"][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x976)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x7e8)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x8b3)] = _0x531b4d["rpcs"][_0xdf41bb][_0x36faf9(0x8b3)] || []),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x912)] = ![]),
                      (_0x531b4d["rpcs"][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x5f3)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x3c3)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)]["virtualHangup"] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"][_0x36faf9(0x59b)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"][_0x36faf9(0x3a9)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x2ae)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"][_0x36faf9(0x97c)] = ![]),
                      (_0x531b4d["rpcs"][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x63e)] = null),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"][_0x36faf9(0x344)] = null),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"][_0x36faf9(0x787)] = null),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)]["mutedStateScene"] = null),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x3f6)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"][_0x36faf9(0x9be)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x241)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x44d)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x4b6)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0xa22)] = ![]),
                      (_0x531b4d["rpcs"][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x8cc)] = null),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x1fc)] = ![]),
                      (_0x531b4d["rpcs"][_0xdf41bb + "_screen"][_0x36faf9(0x2cc)] = !![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"]["directorVolumeState"] = 0x64),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"][_0x36faf9(0x8fc)] = 0x0),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x62f)] = 0x0),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"]["opacityDisconnect"] = "1"),
                      (_0x531b4d["rpcs"][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x736)] = "1"),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x97e)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)]["pliCount"] = 0x0),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"]["label"] = ![]),
                      (_0x531b4d["rpcs"][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x885)] = ![]),
                      (_0x531b4d["rpcs"][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x7a2)] = null),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)]["canvas"] = null),
                      (_0x531b4d["rpcs"][_0xdf41bb + "_screen"][_0x36faf9(0x31b)] = {}),
                      (_0x531b4d["rpcs"][_0xdf41bb + "_screen"]["iframeSrc"] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x559)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x6f9)] = Date[_0x36faf9(0x312)]()),
                      (_0x531b4d["rpcs"][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x5c4)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x768)] = ![]),
                      (_0x531b4d[_0x36faf9(0x4eb)] == 0x2 || _0x531b4d["activeSpeaker"] == 0x4) && (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x181)] = !![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"][_0x36faf9(0x6fa)] = _0x531b4d[_0x36faf9(0x39e)][_0xdf41bb][_0x36faf9(0x7f3)]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x6fa)][_0x36faf9(0x582)]["UUID"] = _0xdf41bb + _0x36faf9(0x47d)),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)]["videoElement"]["id"] = _0x36faf9(0x806) + _0xdf41bb + "_screen"),
                      _0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x4f8)] &&
                          (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x6fa)][_0x36faf9(0x582)][_0x36faf9(0x48c)] = _0x531b4d["rpcs"][_0xdf41bb + "_screen"]["streamID"]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"][_0x36faf9(0x6fa)][_0x36faf9(0xa07)] = ![]),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x7e8)] = ![]),
                      setupIncomingScreenTracking(_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x6fa)], _0xdf41bb + _0x36faf9(0x47d)),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb][_0x36faf9(0x7f3)][_0x36faf9(0x60a)] = createMediaStream()),
                      _0x3ead02[_0x36faf9(0x774)](function (_0x5767a2) {
                          var _0x148dac = _0x36faf9;
                          _0x531b4d["rpcs"][_0xdf41bb][_0x148dac(0x7f3)]["srcObject"][_0x148dac(0x258)](_0x5767a2);
                      }),
                      (_0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"][_0x36faf9(0x6fa)][_0x36faf9(0x5c7)] = !![]),
                      _0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + "_screen"][_0x36faf9(0x6fa)]["setAttribute"]("playsinline", ""),
                      mediaSourceUpdated(_0xdf41bb + _0x36faf9(0x47d), _0x531b4d[_0x36faf9(0x39e)][_0xdf41bb + _0x36faf9(0x47d)][_0x36faf9(0x4f8)]))
                    : _0x3ead02[_0x36faf9(0x774)](function (_0x2792aa) {
                          var _0x50a44c = _0x36faf9,
                              _0xcd7d53 = ![];
                          _0x531b4d[_0x50a44c(0x39e)][_0xdf41bb][_0x50a44c(0x7f3)][_0x50a44c(0x60a)]["getTracks"]()["forEach"](function (_0x1f9eaf) {
                              var _0x5387d7 = _0x50a44c;
                              _0x1f9eaf["id"] == _0x2792aa["id"] && _0x1f9eaf[_0x5387d7(0x722)] == _0x2792aa[_0x5387d7(0x722)] && (_0xcd7d53 = !![]);
                          }),
                              !_0xcd7d53 && _0x531b4d["rpcs"][_0xdf41bb][_0x50a44c(0x7f3)][_0x50a44c(0x60a)][_0x50a44c(0x258)](_0x2792aa);
                      });
        }),
        _0x531b4d
    );
})();
function getMeshcastCanvasTrack() {
    var _0x285f06 = _0x4a1c61;
    !session["mc"] && errorlog(_0x285f06(0x685));
    !session["mc"]["canvas"] && ((session["mc"][_0x285f06(0x2a8)] = document[_0x285f06(0x15f)](_0x285f06(0x2a8))), (session["mc"][_0x285f06(0x2a8)][_0x285f06(0x3c1)] = 0x140), (session["mc"][_0x285f06(0x2a8)][_0x285f06(0x63d)] = 0xb4));
    !session["mc"][_0x285f06(0x4ac)] &&
        ((session["mc"][_0x285f06(0x4ac)] = session["mc"][_0x285f06(0x2a8)][_0x285f06(0x5dd)]("2d", { alpha: ![] })),
        (session["mc"][_0x285f06(0x4ac)][_0x285f06(0x9f9)] = _0x285f06(0x3c0)),
        session["mc"][_0x285f06(0x4ac)][_0x285f06(0x720)](0x0, 0x0, session["mc"]["canvas"][_0x285f06(0x3c1)], session["mc"][_0x285f06(0x2a8)][_0x285f06(0x63d)]));
    !session["mc"][_0x285f06(0x187)] &&
        ((function _0x468067() {
            var _0x432477 = _0x285f06;
            session["mc"][_0x432477(0x4ac)]["fillRect"](0x0, 0x0, session["mc"][_0x432477(0x2a8)]["width"], session["mc"][_0x432477(0x2a8)]["height"]), setTimeout(_0x468067, 0xfa);
        })(),
        (session["mc"]["canvasStream"] = session["mc"][_0x285f06(0x2a8)][_0x285f06(0x166)](0x4)));
    var _0x362e45 = session["mc"][_0x285f06(0x187)]["getVideoTracks"]();
    if (_0x362e45[_0x285f06(0x1bf)]) return _0x362e45[0x0];
    return errorlog(_0x285f06(0x87d)), ![];
}
var meshcastServer = ![];
function selectMeshcast(_0x2ef569) {
    var _0x5475ea = _0x4a1c61;
    meshcastServer = {};
    var _0x15b313 = _0x2ef569[_0x5475ea(0x5c2)],
        _0x44e745 = _0x2ef569[_0x5475ea(0x64d)];
    (meshcastServer[_0x5475ea(0x719)] = _0x44e745[_0x15b313][_0x5475ea(0x719)]), (meshcastServer[_0x5475ea(0x97b)] = _0x44e745[_0x15b313][_0x5475ea(0x97b)]);
}
async function meshcast(_0x17d27c = ![]) {
    var _0x51ff9c = _0x4a1c61;
    async function _0x331a78(_0x16444b, _0x5318f2) {
        var _0x470295 = _0x3e5e;
        const _0x347f33 = new XMLHttpRequest();
        (_0x347f33[_0x470295(0x697)] = function () {
            var _0x274320 = _0x470295;
            if (parseFloat(this["responseText"]) >= 0x0) {
                if (parseFloat(this[_0x274320(0x34b)]) > 0x32) _0x16444b[_0x274320(0x5f5)] += _0x274320(0x6db);
                else {
                    if (parseFloat(this[_0x274320(0x34b)]) > 0x19) _0x16444b["innerHTML"] += _0x274320(0x9dd);
                    else {
                        if (parseFloat(this[_0x274320(0x34b)]) > 0xa) _0x16444b[_0x274320(0x5f5)] += _0x274320(0x29d);
                        else {
                            if (parseFloat(this["responseText"]) > 0x0) _0x16444b[_0x274320(0x5f5)] += _0x274320(0x2de);
                            else {
                                var _0x392abd = ![];
                                _0x16444b[_0x274320(0x4a0)] && (_0x392abd = !![]),
                                    (_0x16444b["disabled"] = !![]),
                                    (_0x16444b[_0x274320(0x5f5)] += _0x274320(0x22d)),
                                    document[_0x274320(0x266)]("edgelist")["appendChild"](_0x16444b),
                                    _0x392abd && (document["getElementById"]("edgelist")[_0x274320(0x64d)][0x0][_0x274320(0x4a0)] = !![]);
                            }
                        }
                    }
                }
            } else {
                var _0x392abd = ![];
                _0x16444b[_0x274320(0x4a0)] && (_0x392abd = !![]),
                    document[_0x274320(0x266)](_0x274320(0x762))["appendChild"](_0x16444b),
                    (_0x16444b[_0x274320(0x5f5)] += "\x20(fail)"),
                    (_0x16444b[_0x274320(0x850)] = !![]),
                    _0x392abd && (document[_0x274320(0x266)](_0x274320(0x762))[_0x274320(0x64d)][0x0][_0x274320(0x4a0)] = !![]);
            }
            session[_0x274320(0x276)] && !session[_0x274320(0x2d4)] && !session[_0x274320(0x6f6)] && document["getElementById"](_0x274320(0x4c9))[_0x274320(0x23d)]["remove"](_0x274320(0x98b));
        }),
            (_0x347f33[_0x470295(0x6a8)] = function () {
                var _0x19a11f = _0x470295,
                    _0xb0f30 = ![];
                _0x16444b[_0x19a11f(0x4a0)] && (_0xb0f30 = !![]),
                    document["getElementById"]("edgelist")[_0x19a11f(0x358)](_0x16444b),
                    (_0x16444b[_0x19a11f(0x5f5)] += "\x20(fail)"),
                    (_0x16444b["disabled"] = !![]),
                    _0xb0f30 && (document[_0x19a11f(0x266)](_0x19a11f(0x762))[_0x19a11f(0x64d)][0x0][_0x19a11f(0x4a0)] = !![]);
            }),
            _0x347f33[_0x470295(0xa42)]("GET", _0x5318f2, !![]),
            (_0x347f33[_0x470295(0x73f)] = 0x3e8),
            (_0x347f33[_0x470295(0x270)] = function (_0x2f55eb) {
                var _0x37760a = _0x470295,
                    _0x312c93 = ![];
                _0x16444b["selected"] && (_0x312c93 = !![]),
                    document[_0x37760a(0x266)](_0x37760a(0x762))[_0x37760a(0x358)](_0x16444b),
                    (_0x16444b[_0x37760a(0x5f5)] += _0x37760a(0x33e)),
                    _0x312c93 && (document["getElementById"](_0x37760a(0x762))["options"][0x0]["selected"] = !![]);
            }),
            _0x347f33["send"]();
    }
    async function _0x2e0e29(_0x27292c = ![]) {
        var _0x22770d = _0x3e5e,
            _0x4563eb = new Date(),
            _0x2663c9 = _0x4563eb[_0x22770d(0x476)]();
        urlParams[_0x22770d(0x321)]("tz") && (_0x2663c9 = parseInt(urlParams[_0x22770d(0x31d)]("tz")) || _0x2663c9),
            fetch(_0x22770d(0x2e8) + Date[_0x22770d(0x312)]())
                [_0x22770d(0x741)]((_0xb602b1) => _0xb602b1[_0x22770d(0x442)]())
                [_0x22770d(0x741)](async (_0x4a99ce) => {
                    var _0x69e137 = _0x22770d;
                    for (var _0x50f998 = 0x0; _0x50f998 < _0x4a99ce[_0x69e137(0x1bf)]; _0x50f998++) {
                        var _0x3c976f = Math["abs"](_0x4a99ce[_0x50f998]["tz"] - _0x2663c9);
                        Math[_0x69e137(0x4da)](_0x3c976f - 0x3c * 0x18) < _0x3c976f && (_0x3c976f = Math[_0x69e137(0x4da)](_0x3c976f - 0x3c * 0x18)),
                            (_0x4a99ce[_0x50f998][_0x69e137(0x412)] = _0x3c976f),
                            session[_0x69e137(0x389)] !== _0x4a99ce[_0x50f998][_0x69e137(0x97b)] && (_0x4a99ce[_0x50f998][_0x69e137(0x412)] += 0x3e8);
                    }
                    _0x4a99ce[_0x69e137(0x6a9)](compare_deltas);
                    for (var _0x50f998 = 0x0; _0x50f998 < _0x4a99ce["length"]; _0x50f998++) {
                        var _0x219ed9 = document[_0x69e137(0x15f)](_0x69e137(0x629));
                        (_0x219ed9[_0x69e137(0x97b)] = _0x4a99ce[_0x50f998]["code"]),
                            (_0x219ed9[_0x69e137(0x719)] = _0x4a99ce[_0x50f998][_0x69e137(0x719)]),
                            (_0x219ed9[_0x69e137(0x5f5)] = _0x4a99ce[_0x50f998][_0x69e137(0x931)]),
                            _0x331a78(_0x219ed9, _0x4a99ce[_0x50f998][_0x69e137(0x719)] + "/status"),
                            document[_0x69e137(0x266)]("edgelist")[_0x69e137(0x358)](_0x219ed9);
                    }
                    (meshcastServer = _0x4a99ce[0x0]), _0x27292c && _0x27292c();
                });
    }
    if (_0x17d27c) {
        _0x2e0e29();
        return;
    }
    if (!session[_0x51ff9c(0x389)]) return;
    if (!session["videoElement"][_0x51ff9c(0x60a)] || !session["videoElement"][_0x51ff9c(0x60a)][_0x51ff9c(0xa41)]()["length"]) return;
    if (session[_0x51ff9c(0x1d3)] !== ![]) return;
    (session[_0x51ff9c(0x1d3)] = null), warnlog(_0x51ff9c(0x7cc));
    var _0xe3d52b = "";
    if (session[_0x51ff9c(0x2cc)] && session[_0x51ff9c(0x845)]) _0xe3d52b = session[_0x51ff9c(0x845)];
    else {
        if (session[_0x51ff9c(0x1fd)]) _0xe3d52b = session[_0x51ff9c(0x1fd)];
        else (iOS || iPad) && (_0xe3d52b = _0x51ff9c(0x203));
    }
    function _0x5874a2(_0x475fff) {
        var _0x5a43f2 = _0x51ff9c;
        warnlog(_0x5a43f2(0xa3c)), warnlog(_0x475fff);
        try {
            session["mc"]
                [_0x5a43f2(0x5ac)]()
                [_0x5a43f2(0x741)](function (_0x1267d8) {
                    var _0x26ccd7 = _0x5a43f2;
                    return (
                        (_0x1267d8[_0x26ccd7(0x537)] = CodecsHandler[_0x26ccd7(0x392)](_0x1267d8[_0x26ccd7(0x537)], { stereo: 0x1 })),
                        !_0xe3d52b && ((_0x1267d8["sdp"] = _0x1267d8["sdp"][_0x26ccd7(0x177)](/42001f/gi, _0x26ccd7(0x203))), (_0x1267d8["sdp"] = _0x1267d8[_0x26ccd7(0x537)]["replace"](/420029/gi, _0x26ccd7(0x203)))),
                        warnlog(_0x1267d8),
                        session["mc"][_0x26ccd7(0x739)](_0x1267d8)
                    );
                })
                [_0x5a43f2(0x741)](function () {
                    var _0x4ed370 = _0x5a43f2;
                    log(session["mc"][_0x4ed370(0x227)]);
                    var _0x457a08 = session["mc"][_0x4ed370(0x227)][_0x4ed370(0x537)];
                    (iOS || iPad) && session["removeOrientationFlag"] && _0x457a08["includes"]("a=extmap:3\x20urn:3gpp:video-orientation\x0d\x0a") && (_0x457a08 = _0x457a08["replace"](_0x4ed370(0x2e9), "")), _0x541997(_0x457a08, "sdp");
                })
                [_0x5a43f2(0x524)](function (_0x2bc213) {});
        } catch (_0x5e3f17) {
            errorlog(_0x5e3f17);
        }
    }
    try {
        var _0x23623e = [],
            _0x1cf327 = session[_0x51ff9c(0x750)](0xe);
        async function _0xf87747() {
            var _0x507114 = _0x51ff9c;
            (document[_0x507114(0x266)]("edgelist")[_0x507114(0x850)] = !![]), (document[_0x507114(0x266)](_0x507114(0x762))["title"] = "Can\x27t\x20change\x20the\x20location\x20once\x20started\x20streaming");
            !session["configuration"] && (await chooseBestTURN());
            try {
                (session["mc"] = new RTCPeerConnection(session["configuration"])), (session["mc"][_0x507114(0x21d)] = {}), (session["mc"][_0x507114(0x79c)] = null), (session["mc"][_0x507114(0x72e)] = ![]);
            } catch (_0x1d6e23) {
                !session["cleanOutput"] && warnUser(_0x507114(0x667));
            }
            try {
                if (session["meshcast"] !== _0x507114(0x211)) {
                    var _0x54ba7a = ![];
                    session[_0x507114(0x6fa)] && session[_0x507114(0x6fa)]["srcObject"] && (_0x54ba7a = session["videoElement"]["srcObject"][_0x507114(0x776)]());
                    if (!_0x54ba7a || !_0x54ba7a[_0x507114(0x1bf)]) {
                        var _0x282aed = new AudioContext(),
                            _0x5268da = _0x282aed[_0x507114(0x60b)]();
                        _0x5268da["stream"][_0x507114(0x776)]()["forEach"]((_0x538db4) => {
                            _0x54ba7a = _0x538db4;
                        });
                    } else _0x54ba7a = _0x54ba7a[0x0];
                    if (session[_0x507114(0xa40)] && _0x54ba7a[_0x507114(0x722)] === _0x507114(0x9bb))
                        try {
                            _0x54ba7a["contentHint"] = session[_0x507114(0xa40)];
                        } catch (_0x124e3d) {
                            errorlog(_0x124e3d);
                        }
                    session["mc"]["addTrack"](_0x54ba7a);
                }
                if (session[_0x507114(0x389)] !== _0x507114(0x9bb)) {
                    var _0x54ba7a = ![];
                    session[_0x507114(0x6fa)] && session[_0x507114(0x6fa)][_0x507114(0x60a)] && (_0x54ba7a = session["videoElement"][_0x507114(0x60a)]["getVideoTracks"]());
                    !_0x54ba7a || !_0x54ba7a[_0x507114(0x1bf)] ? (_0x54ba7a = getMeshcastCanvasTrack()) : (_0x54ba7a = _0x54ba7a[0x0]);
                    if (session["screenShareState"] && session["screenshareContentHint"] && _0x54ba7a[_0x507114(0x722)] === _0x507114(0x211))
                        try {
                            _0x54ba7a["contentHint"] = session[_0x507114(0x710)];
                        } catch (_0x292b8c) {
                            errorlog(_0x292b8c);
                        }
                    else {
                        if (session[_0x507114(0x332)] && _0x54ba7a[_0x507114(0x722)] === _0x507114(0x211))
                            try {
                                _0x54ba7a[_0x507114(0x332)] = session[_0x507114(0x332)];
                            } catch (_0x3efd62) {
                                errorlog(_0x3efd62);
                            }
                    }
                    session["mc"][_0x507114(0x258)](_0x54ba7a);
                }
                (session["mc"][_0x507114(0x164)] = _0x5874a2),
                    (session["mc"][_0x507114(0x86b)] = function (_0x33b85f) {
                        var _0x55a4af = _0x507114;
                        if (_0x33b85f["candidate"] == null) return;
                        log(_0x33b85f["candidate"]), _0x23623e["push"](_0x33b85f[_0x55a4af(0x6c8)]);
                    });
            } catch (_0x302e6f) {
                errorlog(_0x302e6f);
            }
        }
        !meshcastServer ? _0x2e0e29(_0xf87747) : _0xf87747();
    } catch (_0x505e50) {
        errorlog(_0x505e50);
    }
    function _0x541997(_0x23df6e, _0x8bd3ba, _0x3a42d1 = ![]) {
        var _0x4da520 = _0x51ff9c;
        try {
            var _0x16226c = new XMLHttpRequest();
            _0x16226c[_0x4da520(0x90c)] = function () {
                var _0x186eb9 = _0x4da520;
                if (this[_0x186eb9(0x6f8)] == 0x4 && this["status"] == 0xc8) {
                    var _0x2923a9 = this[_0x186eb9(0x28a)](_0x186eb9(0x890));
                    if (_0x2923a9 == _0x186eb9(0x294)) {
                        var _0x11bdfd = {};
                        (_0x11bdfd[_0x186eb9(0x537)] = this[_0x186eb9(0x34b)]), (_0x11bdfd[_0x186eb9(0x6a5)] = _0x186eb9(0x324));
                        var _0x4d0990 = {};
                        session[_0x186eb9(0x228)] && session[_0x186eb9(0x228)] !== 0x2 ? (_0x4d0990["stereo"] = 0x1) : (_0x4d0990["stereo"] = 0x0);
                        var _0x28a8e1 = 0x40;
                        session[_0x186eb9(0x76c)] &&
                            (session[_0x186eb9(0x76c)] > 0x1fe && (session[_0x186eb9(0x76c)] = 0x1fe),
                            (_0x4d0990[_0x186eb9(0x5bb)] = session["meshcastAudioBitrate"] * 0x400),
                            (_0x4d0990[_0x186eb9(0x8b8)] = session[_0x186eb9(0x8a1)] ? 0x0 : 0x1),
                            (_0x4d0990[_0x186eb9(0x621)] = session["dtx"]),
                            (_0x4d0990[_0x186eb9(0x451)] = session["cbr"]),
                            (_0x28a8e1 = session[_0x186eb9(0x76c)]));
                        _0x11bdfd["sdp"] = CodecsHandler[_0x186eb9(0x392)](_0x11bdfd[_0x186eb9(0x537)], _0x4d0990);
                        if (!_0xe3d52b)
                            (_0x11bdfd["sdp"] = _0x11bdfd[_0x186eb9(0x537)][_0x186eb9(0x177)](/42001f/gi, _0x186eb9(0x203))), (_0x11bdfd[_0x186eb9(0x537)] = _0x11bdfd[_0x186eb9(0x537)][_0x186eb9(0x177)](/420029/gi, _0x186eb9(0x203)));
                        else
                            _0xe3d52b["length"] == 0x6 &&
                                ((_0x11bdfd[_0x186eb9(0x537)] = _0x11bdfd[_0x186eb9(0x537)]["replace"](/42e01f/gi, _0xe3d52b)),
                                (_0x11bdfd["sdp"] = _0x11bdfd[_0x186eb9(0x537)]["replace"](/42001f/gi, _0xe3d52b)),
                                (_0x11bdfd["sdp"] = _0x11bdfd[_0x186eb9(0x537)][_0x186eb9(0x177)](/420029/gi, _0xe3d52b)),
                                (_0x11bdfd["sdp"] = _0x11bdfd["sdp"][_0x186eb9(0x177)](/42a01e/gi, _0xe3d52b)),
                                (_0x11bdfd["sdp"] = _0x11bdfd[_0x186eb9(0x537)][_0x186eb9(0x177)](/42a014/gi, _0xe3d52b)),
                                (_0x11bdfd[_0x186eb9(0x537)] = _0x11bdfd[_0x186eb9(0x537)][_0x186eb9(0x177)](/42a00b/gi, _0xe3d52b)),
                                (_0x11bdfd[_0x186eb9(0x537)] = _0x11bdfd["sdp"]["replace"](/640c1f/gi, _0xe3d52b)));
                        if (session["meshcastBitrate"])
                            try {
                                var _0x125c6b = _0x28a8e1 + session["meshcastBitrate"];
                                _0x11bdfd[_0x186eb9(0x537)] = CodecsHandler[_0x186eb9(0x1f3)](_0x11bdfd["sdp"], { min: parseInt(_0x125c6b / 0xa) || 0x1, max: _0x125c6b || 0x1 }, _0xe3d52b);
                            } catch (_0x31f857) {}
                        session["mc"]
                            [_0x186eb9(0x1d2)](_0x11bdfd)
                            ["then"](function () {
                                var _0x19381 = _0x186eb9;
                                if (_0x23623e[_0x19381(0x1bf)]) {
                                    var _0x29654a = JSON["stringify"](_0x23623e[_0x19381(0x7c1)]());
                                    _0x541997(_0x29654a, _0x19381(0xa17), function () {
                                        var _0x21b4b1 = _0x19381;
                                        session[_0x21b4b1(0x15e)](), _0x42301e();
                                    });
                                }
                            })
                            [_0x186eb9(0x524)](function (_0x14ea80) {
                                log(_0x14ea80);
                            });
                    } else {
                        if (_0x2923a9 == _0x186eb9(0x95b)) this["responseText"] == 0x1b0 ? warnUser(_0x186eb9(0x920)) : warnUser("Unknown\x20Meshcast\x20error");
                        else _0x3a42d1 && _0x3a42d1();
                    }
                }
            };
            var _0x4b6fa4 = 0x9c4;
            session[_0x4da520(0x77d)] !== ![] && (_0x4b6fa4 = session[_0x4da520(0x77d)]);
            session[_0x4da520(0x2cc)] && session[_0x4da520(0x96b)] !== ![] && (_0x4b6fa4 = session[_0x4da520(0x96b)]);
            (session["mc"]["savedBitrate"] = _0x4b6fa4), (session["mc"][_0x4da520(0x8ca)] = _0x4b6fa4);
            var _0x3418ba = parseInt(0x61a8 / _0x4b6fa4) || 0xa;
            _0x16226c[_0x4da520(0xa42)](_0x4da520(0x185), meshcastServer[_0x4da520(0x719)] + "/" + _0x3418ba + "/" + _0xe3d52b, !![]),
                _0x16226c[_0x4da520(0xa11)](_0x4da520(0x645), _0x4da520(0x541) + _0x8bd3ba + _0x4da520(0x990)),
                _0x16226c[_0x4da520(0xa11)](_0x4da520(0x37c), _0x4da520(0x5ab) + _0x1cf327),
                (_0x16226c["onerror"] = function (_0x40b67c) {
                    var _0x1d9615 = _0x4da520;
                    errorlog(_0x40b67c),
                        warnUser(_0x1d9615(0x5c5)),
                        window["location"][_0x1d9615(0x23b)] !== _0x1d9615(0x6b8)
                            ? console[_0x1d9615(0x8e8)]("If\x20self-hosting\x20VDO.Ninja,\x20please\x20contact\x20steve@seguin.email\x20to\x20request\x20having\x20access\x20to\x20Meshcast.")
                            : console[_0x1d9615(0x8e8)](_0x1d9615(0x8ee));
                }),
                _0x16226c[_0x4da520(0x3e0)](_0x23df6e);
        } catch (_0x26f10f) {
            errorlog(_0x26f10f);
        }
    }
    async function _0x42301e() {
        var _0x21f344 = _0x51ff9c;
        if (meshcastServer[_0x21f344(0x97b)]) var _0x51a466 = _0x21f344(0x82c) + meshcastServer["code"] + _0x21f344(0x924) + _0x1cf327;
        else var _0x51a466 = _0x21f344(0x4d6) + _0x1cf327;
        console[_0x21f344(0x7c2)](_0x21f344(0x16b) + _0x51a466);
        !session["mc"]["stats"] && (session["mc"]["stats"] = {});
        (session["mc"][_0x21f344(0x21d)][_0x21f344(0x2f6)] = meshcastServer[_0x21f344(0x97b)]),
            (session["mc"][_0x21f344(0x21d)][_0x21f344(0x1d1)] = _0x51a466),
            await sleep(0x1f4),
            (session[_0x21f344(0x1d3)] = { token: _0x1cf327, url: meshcastServer[_0x21f344(0x719)] });
        for (var _0x394e5b in session[_0x21f344(0x8cd)]) {
            if (session["pcs"][_0x394e5b][_0x21f344(0x389)] === null) {
                var _0x109f8a = {};
                (_0x109f8a[_0x21f344(0x389)] = { token: _0x1cf327, url: meshcastServer[_0x21f344(0x719)] }), session[_0x21f344(0x822)](_0x109f8a, _0x394e5b) && (session[_0x21f344(0x8cd)][_0x394e5b][_0x21f344(0x389)] = !![]);
            }
        }
    }
}
async function meshcastWatch(_0x3ed550, _0x434723) {
    var _0x5556d2 = _0x4a1c61;
    !(_0x3ed550 in session[_0x5556d2(0x39e)]) &&
        ((session[_0x5556d2(0x39e)][_0x3ed550] = {}),
        (session[_0x5556d2(0x39e)][_0x3ed550][_0x5556d2(0x21d)] = {}),
        (session[_0x5556d2(0x39e)][_0x3ed550]["allowGraphs"] = ![]),
        (session[_0x5556d2(0x39e)][_0x3ed550][_0x5556d2(0x31b)] = {}),
        (session[_0x5556d2(0x39e)][_0x3ed550][_0x5556d2(0xa03)] = ![]),
        (session[_0x5556d2(0x39e)][_0x3ed550][_0x5556d2(0x703)] = ![]),
        (session[_0x5556d2(0x39e)][_0x3ed550]["settings"] = ![]),
        (session[_0x5556d2(0x39e)][_0x3ed550][_0x5556d2(0x2ae)] = ![]),
        (session["rpcs"][_0x3ed550][_0x5556d2(0x97c)] = ![]),
        (session[_0x5556d2(0x39e)][_0x3ed550]["manualBandwidth"] = ![]),
        errorlog(_0x5556d2(0x4be)));
    var _0x19b6c2 = !![],
        _0x5597dd = !![];
    if (session[_0x5556d2(0x372)] !== ![] && !session[_0x5556d2(0x372)]["includes"](session["rpcs"][_0x3ed550][_0x5556d2(0x4f8)])) _0x19b6c2 = ![];
    else session[_0x5556d2(0x39e)][_0x3ed550][_0x5556d2(0x5c4)] && !session["rpcs"][_0x3ed550][_0x5556d2(0x5c4)][_0x5556d2(0x211)] && (_0x19b6c2 = ![]);
    if (session[_0x5556d2(0x2b6)] !== ![] && !session["noaudio"][_0x5556d2(0x42d)](session["rpcs"][_0x3ed550][_0x5556d2(0x4f8)])) _0x5597dd = ![];
    else session["rpcs"][_0x3ed550][_0x5556d2(0x5c4)] && !session[_0x5556d2(0x39e)][_0x3ed550][_0x5556d2(0x5c4)][_0x5556d2(0x9bb)] && (_0x5597dd = ![]);
    if (!_0x5597dd && !_0x19b6c2) {
        errorlog(_0x5556d2(0x3df));
        return;
    }
    !session["configuration"] && (await chooseBestTURN());
    try {
        session[_0x5556d2(0x39e)][_0x3ed550]["mc"] = new RTCPeerConnection(session["configuration"]);
    } catch (_0x5b3300) {
        !session["cleanOutput"] && warnUser(_0x5556d2(0x667));
    }
    session[_0x5556d2(0x39e)][_0x3ed550]["mc"][_0x5556d2(0xa14)] = function (_0x2802a0) {
        session["onTrack"](_0x2802a0, _0x3ed550);
    };
    var _0x3bd731 = session["generateStreamID"](0xe),
        _0x18e65e = {};
    (_0x18e65e["streamID"] = _0x434723[_0x5556d2(0x835)]), (_0x18e65e[_0x5556d2(0x49f)] = _0x3bd731);
    function _0x4b39bb(_0x22b9f5) {
        var _0x294ebe = _0x5556d2,
            _0x5239f5 = new XMLHttpRequest();
        (_0x5239f5[_0x294ebe(0x90c)] = function () {
            var _0x276aa1 = _0x294ebe;
            if (this[_0x276aa1(0x6f8)] == 0x4 && this["status"] == 0xc8) {
                var _0x24d7d8 = this["getResponseHeader"](_0x276aa1(0x890));
                if (_0x24d7d8 == _0x276aa1(0x294)) {
                    var _0x575a70 = {};
                    (_0x575a70[_0x276aa1(0x537)] = this[_0x276aa1(0x34b)]),
                        (_0x575a70[_0x276aa1(0x6a5)] = _0x276aa1(0x2dd)),
                        session["rpcs"][_0x3ed550]["mc"]
                            [_0x276aa1(0x1d2)](_0x575a70)
                            ["then"](function () {
                                _0x5ab6c9();
                            })
                            ["catch"](function (_0x3152cb) {
                                log(_0x3152cb);
                            });
                }
            } else log(this);
        }),
            _0x5239f5[_0x294ebe(0xa42)](_0x294ebe(0x185), _0x434723[_0x294ebe(0x719)], !![]),
            _0x5239f5[_0x294ebe(0xa11)](_0x294ebe(0x645), _0x294ebe(0x209)),
            _0x5239f5["setRequestHeader"]("Authorization", _0x294ebe(0x5ab) + _0x434723[_0x294ebe(0x835)]),
            _0x5239f5["send"](JSON[_0x294ebe(0x30c)](_0x22b9f5));
    }
    function _0x5ab6c9() {
        var _0x1a66a4 = _0x5556d2;
        session[_0x1a66a4(0x39e)][_0x3ed550]["mc"]
            [_0x1a66a4(0x9a9)]()
            [_0x1a66a4(0x741)](function (_0x461362) {
                var _0x92cf76 = _0x1a66a4;
                return (_0x461362[_0x92cf76(0x537)] = CodecsHandler["setOpusAttributes"](_0x461362[_0x92cf76(0x537)], { stereo: 0x1 })), session["rpcs"][_0x3ed550]["mc"][_0x92cf76(0x739)](_0x461362);
            })
            [_0x1a66a4(0x741)](function () {
                var _0x438fca = _0x1a66a4,
                    _0x115fd5 = {};
                (_0x115fd5[_0x438fca(0x49f)] = _0x3bd731), (_0x115fd5["answer"] = session[_0x438fca(0x39e)][_0x3ed550]["mc"][_0x438fca(0x227)][_0x438fca(0x537)]), _0x4b39bb(_0x115fd5);
            })
            ["catch"](function (_0xcaefca) {});
    }
    _0x4b39bb(_0x18e65e);
}
(function () {
    "use strict";
    var _0x4a287a = _0x4a1c61;
    let _0x30ccb4 = function (_0x277b2f) {
        var _0x3e9f2b = _0x3e5e;
        (this[_0x3e9f2b(0x5a0)] = new Uint8Array(_0x277b2f)), (this[_0x3e9f2b(0x83d)] = 0x0);
    };
    (_0x30ccb4[_0x4a287a(0x9ec)][_0x4a287a(0x162)] = function (_0x1dbc4d) {
        this["pos"] = _0x1dbc4d;
    }),
        (_0x30ccb4[_0x4a287a(0x9ec)][_0x4a287a(0x895)] = function (_0x261503) {
            var _0x3242fe = _0x4a287a;
            for (let _0x4940a0 = 0x0; _0x4940a0 < _0x261503["length"]; _0x4940a0++) {
                this[_0x3242fe(0x5a0)][this[_0x3242fe(0x83d)]++] = _0x261503[_0x4940a0];
            }
        }),
        (_0x30ccb4[_0x4a287a(0x9ec)][_0x4a287a(0x666)] = function (_0x2fefdc) {
            var _0x39cecd = _0x4a287a;
            this["data"][this[_0x39cecd(0x83d)]++] = _0x2fefdc;
        }),
        (_0x30ccb4[_0x4a287a(0x9ec)][_0x4a287a(0x90d)] = _0x30ccb4[_0x4a287a(0x9ec)][_0x4a287a(0x666)]),
        (_0x30ccb4[_0x4a287a(0x9ec)][_0x4a287a(0x178)] = function (_0x1e5cbb) {
            var _0x1cccf6 = _0x4a287a;
            (this[_0x1cccf6(0x5a0)][this[_0x1cccf6(0x83d)]++] = _0x1e5cbb >> 0x8), (this[_0x1cccf6(0x5a0)][this[_0x1cccf6(0x83d)]++] = _0x1e5cbb);
        }),
        (_0x30ccb4[_0x4a287a(0x9ec)]["writeDoubleBE"] = function (_0x5f118a) {
            var _0x2246ec = _0x4a287a;
            let _0x5a4306 = new Uint8Array(new Float64Array([_0x5f118a])["buffer"]);
            for (let _0x35f035 = _0x5a4306[_0x2246ec(0x1bf)] - 0x1; _0x35f035 >= 0x0; _0x35f035--) {
                this["writeByte"](_0x5a4306[_0x35f035]);
            }
        }),
        (_0x30ccb4[_0x4a287a(0x9ec)][_0x4a287a(0x7b5)] = function (_0x506b09) {
            var _0x102595 = _0x4a287a;
            let _0x4d764e = new Uint8Array(new Float32Array([_0x506b09])[_0x102595(0x1a4)]);
            for (let _0x23b3b6 = _0x4d764e["length"] - 0x1; _0x23b3b6 >= 0x0; _0x23b3b6--) {
                this[_0x102595(0x666)](_0x4d764e[_0x23b3b6]);
            }
        }),
        (_0x30ccb4["prototype"][_0x4a287a(0x64c)] = function (_0x174ee4) {
            var _0x594842 = _0x4a287a;
            for (let _0x1b5523 = 0x0; _0x1b5523 < _0x174ee4[_0x594842(0x1bf)]; _0x1b5523++) {
                this[_0x594842(0x5a0)][this[_0x594842(0x83d)]++] = _0x174ee4[_0x594842(0x6b5)](_0x1b5523);
            }
        }),
        (_0x30ccb4[_0x4a287a(0x9ec)][_0x4a287a(0x1b7)] = function (_0x188b02, _0x3f73cc) {
            var _0x2c3510 = _0x4a287a;
            switch (_0x3f73cc) {
                case 0x1:
                    this[_0x2c3510(0x90d)]((0x1 << 0x7) | _0x188b02);
                    break;
                case 0x2:
                    this[_0x2c3510(0x90d)]((0x1 << 0x6) | (_0x188b02 >> 0x8)), this[_0x2c3510(0x90d)](_0x188b02);
                    break;
                case 0x3:
                    this[_0x2c3510(0x90d)]((0x1 << 0x5) | (_0x188b02 >> 0x10)), this[_0x2c3510(0x90d)](_0x188b02 >> 0x8), this[_0x2c3510(0x90d)](_0x188b02);
                    break;
                case 0x4:
                    this[_0x2c3510(0x90d)]((0x1 << 0x4) | (_0x188b02 >> 0x18)), this[_0x2c3510(0x90d)](_0x188b02 >> 0x10), this["writeU8"](_0x188b02 >> 0x8), this[_0x2c3510(0x90d)](_0x188b02);
                    break;
                case 0x5:
                    this["writeU8"]((0x1 << 0x3) | ((_0x188b02 / 0x100000000) & 0x7)),
                        this[_0x2c3510(0x90d)](_0x188b02 >> 0x18),
                        this[_0x2c3510(0x90d)](_0x188b02 >> 0x10),
                        this[_0x2c3510(0x90d)](_0x188b02 >> 0x8),
                        this[_0x2c3510(0x90d)](_0x188b02);
                    break;
                default:
                    throw new Error(_0x2c3510(0x66d) + _0x3f73cc);
            }
        }),
        (_0x30ccb4[_0x4a287a(0x9ec)][_0x4a287a(0x250)] = function (_0x49a301) {
            var _0x425ad3 = _0x4a287a;
            if (_0x49a301 < (0x1 << 0x7) - 0x1) return 0x1;
            else {
                if (_0x49a301 < (0x1 << 0xe) - 0x1) return 0x2;
                else {
                    if (_0x49a301 < (0x1 << 0x15) - 0x1) return 0x3;
                    else {
                        if (_0x49a301 < (0x1 << 0x1c) - 0x1) return 0x4;
                        else {
                            if (_0x49a301 < 0x7ffffffff) return 0x5;
                            else throw new Error(_0x425ad3(0x1f0) + _0x49a301);
                        }
                    }
                }
            }
        }),
        (_0x30ccb4[_0x4a287a(0x9ec)][_0x4a287a(0x35d)] = function (_0x3efeb7) {
            var _0x18de4a = _0x4a287a;
            this["writeEBMLVarIntWidth"](_0x3efeb7, this[_0x18de4a(0x250)](_0x3efeb7));
        }),
        (_0x30ccb4[_0x4a287a(0x9ec)][_0x4a287a(0x3be)] = function (_0x26c50f, _0x32c489) {
            var _0x341153 = _0x4a287a;
            _0x32c489 === undefined && (_0x32c489 = this[_0x341153(0x168)](_0x26c50f));
            switch (_0x32c489) {
                case 0x5:
                    this[_0x341153(0x90d)](Math[_0x341153(0x76d)](_0x26c50f / 0x100000000));
                case 0x4:
                    this["writeU8"](_0x26c50f >> 0x18);
                case 0x3:
                    this[_0x341153(0x90d)](_0x26c50f >> 0x10);
                case 0x2:
                    this[_0x341153(0x90d)](_0x26c50f >> 0x8);
                case 0x1:
                    this[_0x341153(0x90d)](_0x26c50f);
                    break;
                default:
                    throw new Error("Bad\x20UINT\x20size\x20" + _0x32c489);
            }
        }),
        (_0x30ccb4[_0x4a287a(0x9ec)][_0x4a287a(0x168)] = function (_0x203e21) {
            if (_0x203e21 < 0x1 << 0x8) return 0x1;
            else {
                if (_0x203e21 < 0x1 << 0x10) return 0x2;
                else {
                    if (_0x203e21 < 0x1 << 0x18) return 0x3;
                    else return _0x203e21 < 0x100000000 ? 0x4 : 0x5;
                }
            }
        }),
        (_0x30ccb4[_0x4a287a(0x9ec)]["getAsDataArray"] = function () {
            var _0x229a1d = _0x4a287a;
            if (this[_0x229a1d(0x83d)] < this[_0x229a1d(0x5a0)]["byteLength"]) return this[_0x229a1d(0x5a0)][_0x229a1d(0x93a)](0x0, this[_0x229a1d(0x83d)]);
            else {
                if (this[_0x229a1d(0x83d)] == this[_0x229a1d(0x5a0)][_0x229a1d(0x423)]) return this[_0x229a1d(0x5a0)];
                else throw new Error(_0x229a1d(0x548));
            }
        }),
        (window[_0x4a287a(0x2ab)] = _0x30ccb4);
})(),
    (function () {
        "use strict";
        var _0x37bed3 = _0x4a1c61;
        let _0x39568c = function (_0x54b9c6) {
            return function (_0x5c655b) {
                var _0x515128 = _0x3e5e;
                let _0x23d9e3 = [],
                    _0x3b7806 = Promise[_0x515128(0x48f)](),
                    _0x20da32 = null,
                    _0x50b5ae = null;
                if (_0x5c655b && _0x5c655b[_0x515128(0x7eb)][_0x515128(0x37d)] === "FileSystemWritableFileStream") _0x20da32 = _0x5c655b;
                else _0x54b9c6 && _0x5c655b && (_0x50b5ae = _0x5c655b);
                (this[_0x515128(0x83d)] = 0x0), (this[_0x515128(0x1bf)] = 0x0);
                function _0x58370e(_0x3cba73) {
                    return new Promise(function (_0x8400e5, _0x11e5d6) {
                        var _0x596313 = _0x3e5e;
                        let _0x30fb60 = new FileReader();
                        _0x30fb60[_0x596313(0x979)]("loadend", function () {
                            var _0x414418 = _0x596313;
                            _0x8400e5(_0x30fb60[_0x414418(0x3db)]);
                        }),
                            _0x30fb60["readAsArrayBuffer"](_0x3cba73);
                    });
                }
                function _0x5f28ea(_0x99e0ae) {
                    return new Promise(function (_0x3f9bb8, _0x550150) {
                        var _0x6416ae = _0x3e5e;
                        if (_0x99e0ae instanceof Uint8Array) _0x3f9bb8(_0x99e0ae);
                        else {
                            if (_0x99e0ae instanceof ArrayBuffer || ArrayBuffer["isView"](_0x99e0ae)) _0x3f9bb8(new Uint8Array(_0x99e0ae));
                            else
                                _0x99e0ae instanceof Blob
                                    ? _0x3f9bb8(
                                          _0x58370e(_0x99e0ae)[_0x6416ae(0x741)](function (_0x7732aa) {
                                              return new Uint8Array(_0x7732aa);
                                          })
                                      )
                                    : _0x3f9bb8(
                                          _0x58370e(new Blob([_0x99e0ae]))["then"](function (_0x3ab2b1) {
                                              return new Uint8Array(_0x3ab2b1);
                                          })
                                      );
                        }
                    });
                }
                function _0x12dc9e(_0x58df1c) {
                    var _0x37e452 = _0x515128;
                    let _0x23c65f = _0x58df1c[_0x37e452(0x423)] || _0x58df1c[_0x37e452(0x1bf)] || _0x58df1c[_0x37e452(0x2c9)];
                    if (!Number[_0x37e452(0x6c6)](_0x23c65f)) throw new Error(_0x37e452(0x78a));
                    return _0x23c65f;
                }
                (this[_0x515128(0x162)] = function (_0x3b11e0) {
                    var _0x35f0cb = _0x515128;
                    if (_0x3b11e0 < 0x0) throw new Error(_0x35f0cb(0x382));
                    if (isNaN(_0x3b11e0)) throw new Error("Offset\x20may\x20not\x20be\x20NaN");
                    if (_0x3b11e0 > this[_0x35f0cb(0x1bf)]) throw new Error(_0x35f0cb(0x231));
                    this["pos"] = _0x3b11e0;
                }),
                    (this["write"] = function (_0x25e86e) {
                        var _0x3e8e8b = _0x515128;
                        let _0x351a7a = { offset: this[_0x3e8e8b(0x83d)], data: _0x25e86e, length: _0x12dc9e(_0x25e86e) },
                            _0x2ecb83 = _0x351a7a[_0x3e8e8b(0x840)] >= this[_0x3e8e8b(0x1bf)];
                        (this["pos"] += _0x351a7a[_0x3e8e8b(0x1bf)]),
                            (this[_0x3e8e8b(0x1bf)] = Math[_0x3e8e8b(0x605)](this[_0x3e8e8b(0x1bf)], this[_0x3e8e8b(0x83d)])),
                            (_0x3b7806 = _0x3b7806[_0x3e8e8b(0x741)](async function () {
                                var _0x561e74 = _0x3e8e8b;
                                if (_0x50b5ae)
                                    return new Promise(function (_0x2047f9, _0xdf2db) {
                                        var _0x3527f5 = _0x3e5e;
                                        _0x5f28ea(_0x351a7a[_0x3527f5(0x5a0)])["then"](function (_0x12f6d4) {
                                            var _0x356570 = _0x3527f5;
                                            let _0x4d6d3f = 0x0,
                                                _0x275d1b = Buffer[_0x356570(0x6d5)](_0x12f6d4[_0x356570(0x1a4)]),
                                                _0xbe1814 = function (_0x15377b, _0x58f00f, _0x582b3d) {
                                                    var _0x56df2d = _0x356570;
                                                    (_0x4d6d3f += _0x58f00f),
                                                        _0x4d6d3f >= _0x582b3d[_0x56df2d(0x1bf)]
                                                            ? _0x2047f9()
                                                            : _0x54b9c6["write"](_0x50b5ae, _0x582b3d, _0x4d6d3f, _0x582b3d[_0x56df2d(0x1bf)] - _0x4d6d3f, _0x351a7a[_0x56df2d(0x840)] + _0x4d6d3f, _0xbe1814);
                                                };
                                            _0x54b9c6[_0x356570(0x5a9)](_0x50b5ae, _0x275d1b, 0x0, _0x275d1b[_0x356570(0x1bf)], _0x351a7a[_0x356570(0x840)], _0xbe1814);
                                        });
                                    });
                                else {
                                    if (_0x20da32)
                                        return new Promise(function (_0x4dc224, _0x513271) {
                                            var _0x4b7807 = _0x3e5e;
                                            _0x20da32[_0x4b7807(0x162)](_0x351a7a[_0x4b7807(0x840)])
                                                ["then"](() => {
                                                    var _0x2830ca = _0x4b7807;
                                                    _0x20da32[_0x2830ca(0x5a9)](new Blob([_0x351a7a[_0x2830ca(0x5a0)]]));
                                                })
                                                [_0x4b7807(0x741)](() => {
                                                    _0x4dc224();
                                                });
                                        });
                                    else {
                                        if (!_0x2ecb83)
                                            for (let _0x29c152 = 0x0; _0x29c152 < _0x23d9e3[_0x561e74(0x1bf)]; _0x29c152++) {
                                                let _0x577536 = _0x23d9e3[_0x29c152];
                                                if (!(_0x351a7a[_0x561e74(0x840)] + _0x351a7a[_0x561e74(0x1bf)] <= _0x577536[_0x561e74(0x840)] || _0x351a7a["offset"] >= _0x577536["offset"] + _0x577536[_0x561e74(0x1bf)])) {
                                                    if (_0x351a7a[_0x561e74(0x840)] < _0x577536[_0x561e74(0x840)] || _0x351a7a[_0x561e74(0x840)] + _0x351a7a[_0x561e74(0x1bf)] > _0x577536[_0x561e74(0x840)] + _0x577536[_0x561e74(0x1bf)])
                                                        throw new Error("Overwrite\x20crosses\x20blob\x20boundaries");
                                                    if (_0x351a7a["offset"] == _0x577536[_0x561e74(0x840)] && _0x351a7a["length"] == _0x577536[_0x561e74(0x1bf)]) {
                                                        _0x577536[_0x561e74(0x5a0)] = _0x351a7a[_0x561e74(0x5a0)];
                                                        return;
                                                    } else
                                                        return _0x5f28ea(_0x577536[_0x561e74(0x5a0)])
                                                            [_0x561e74(0x741)](function (_0x11d9fc) {
                                                                return (_0x577536["data"] = _0x11d9fc), _0x5f28ea(_0x351a7a["data"]);
                                                            })
                                                            [_0x561e74(0x741)](function (_0x4cd005) {
                                                                var _0x424809 = _0x561e74;
                                                                (_0x351a7a["data"] = _0x4cd005), _0x577536[_0x424809(0x5a0)][_0x424809(0x2d3)](_0x351a7a[_0x424809(0x5a0)], _0x351a7a[_0x424809(0x840)] - _0x577536[_0x424809(0x840)]);
                                                            });
                                                }
                                            }
                                    }
                                }
                                _0x23d9e3[_0x561e74(0x874)](_0x351a7a);
                            }));
                    }),
                    (this[_0x515128(0x949)] = function (_0x1bfd12) {
                        var _0x183ea2 = _0x515128;
                        return (
                            _0x50b5ae || _0x20da32
                                ? (_0x3b7806 = _0x3b7806[_0x183ea2(0x741)](function () {
                                      return null;
                                  }))
                                : (_0x3b7806 = _0x3b7806["then"](function () {
                                      var _0x51e398 = _0x183ea2;
                                      let _0x28dae7 = [];
                                      for (let _0x1e52ae = 0x0; _0x1e52ae < _0x23d9e3[_0x51e398(0x1bf)]; _0x1e52ae++) {
                                          _0x28dae7[_0x51e398(0x874)](_0x23d9e3[_0x1e52ae]["data"]);
                                      }
                                      return new Blob(_0x28dae7, { type: _0x1bfd12 });
                                  })),
                            _0x3b7806
                        );
                    });
            };
        };
        window[_0x37bed3(0x935)] = _0x39568c(null);
    })(),
    (function () {
        "use strict";
        var _0x1594e9 = _0x4a1c61;
        function _0x455942(_0x596ce4) {
            var _0x1d69b6 = _0x3e5e;
            this[_0x1d69b6(0x857)] = _0x596ce4;
        }
        function _0x34a8cf(_0x5ec1b3, _0x1c7f01) {
            var _0x2f430b = _0x3e5e;
            let _0x5a73d3 = {};
            return (
                [_0x5ec1b3, _0x1c7f01][_0x2f430b(0x774)](function (_0x1ecdbf) {
                    var _0x5dccd2 = _0x2f430b;
                    for (let _0x3d69f4 in _0x1ecdbf) {
                        Object[_0x5dccd2(0x9ec)][_0x5dccd2(0x4df)][_0x5dccd2(0x654)](_0x1ecdbf, _0x3d69f4) && (_0x5a73d3[_0x3d69f4] = _0x1ecdbf[_0x3d69f4]);
                    }
                }),
                _0x5a73d3
            );
        }
        function _0x42b3a0(_0x3d7537, _0x4de509, _0x33cf75) {
            var _0x6abc5c = _0x3e5e;
            if (Array[_0x6abc5c(0x58e)](_0x33cf75))
                for (let _0x133318 = 0x0; _0x133318 < _0x33cf75[_0x6abc5c(0x1bf)]; _0x133318++) {
                    _0x42b3a0(_0x3d7537, _0x4de509, _0x33cf75[_0x133318]);
                }
            else {
                if (typeof _0x33cf75 === "string") _0x3d7537[_0x6abc5c(0x64c)](_0x33cf75);
                else {
                    if (_0x33cf75 instanceof Uint8Array) _0x3d7537[_0x6abc5c(0x895)](_0x33cf75);
                    else {
                        if (_0x33cf75["id"]) {
                            (_0x33cf75[_0x6abc5c(0x840)] = _0x3d7537[_0x6abc5c(0x83d)] + _0x4de509), _0x3d7537[_0x6abc5c(0x3be)](_0x33cf75["id"]);
                            if (Array[_0x6abc5c(0x58e)](_0x33cf75["data"])) {
                                let _0x387dd9, _0xba69a9, _0xc973c6;
                                _0x33cf75[_0x6abc5c(0x2c9)] === -0x1 ? _0x3d7537[_0x6abc5c(0x666)](0xff) : ((_0x387dd9 = _0x3d7537["pos"]), _0x3d7537[_0x6abc5c(0x895)]([0x0, 0x0, 0x0, 0x0])),
                                    (_0xba69a9 = _0x3d7537[_0x6abc5c(0x83d)]),
                                    (_0x33cf75[_0x6abc5c(0x967)] = _0xba69a9 + _0x4de509),
                                    _0x42b3a0(_0x3d7537, _0x4de509, _0x33cf75[_0x6abc5c(0x5a0)]),
                                    _0x33cf75[_0x6abc5c(0x2c9)] !== -0x1 &&
                                        ((_0xc973c6 = _0x3d7537[_0x6abc5c(0x83d)]),
                                        (_0x33cf75[_0x6abc5c(0x2c9)] = _0xc973c6 - _0xba69a9),
                                        _0x3d7537[_0x6abc5c(0x162)](_0x387dd9),
                                        _0x3d7537[_0x6abc5c(0x1b7)](_0x33cf75[_0x6abc5c(0x2c9)], 0x4),
                                        _0x3d7537[_0x6abc5c(0x162)](_0xc973c6));
                            } else {
                                if (typeof _0x33cf75["data"] === _0x6abc5c(0x987))
                                    _0x3d7537[_0x6abc5c(0x35d)](_0x33cf75["data"][_0x6abc5c(0x1bf)]), (_0x33cf75[_0x6abc5c(0x967)] = _0x3d7537[_0x6abc5c(0x83d)] + _0x4de509), _0x3d7537[_0x6abc5c(0x64c)](_0x33cf75[_0x6abc5c(0x5a0)]);
                                else {
                                    if (typeof _0x33cf75[_0x6abc5c(0x5a0)] === _0x6abc5c(0x56d))
                                        !_0x33cf75[_0x6abc5c(0x2c9)] && (_0x33cf75[_0x6abc5c(0x2c9)] = _0x3d7537[_0x6abc5c(0x168)](_0x33cf75[_0x6abc5c(0x5a0)])),
                                            _0x3d7537["writeEBMLVarInt"](_0x33cf75[_0x6abc5c(0x2c9)]),
                                            (_0x33cf75[_0x6abc5c(0x967)] = _0x3d7537[_0x6abc5c(0x83d)] + _0x4de509),
                                            _0x3d7537[_0x6abc5c(0x3be)](_0x33cf75[_0x6abc5c(0x5a0)], _0x33cf75["size"]);
                                    else {
                                        if (_0x33cf75[_0x6abc5c(0x5a0)] instanceof _0x455942)
                                            _0x3d7537[_0x6abc5c(0x35d)](0x8), (_0x33cf75[_0x6abc5c(0x967)] = _0x3d7537[_0x6abc5c(0x83d)] + _0x4de509), _0x3d7537["writeDoubleBE"](_0x33cf75[_0x6abc5c(0x5a0)][_0x6abc5c(0x857)]);
                                        else {
                                            if (_0x33cf75[_0x6abc5c(0x5a0)] instanceof _0x455942)
                                                _0x3d7537[_0x6abc5c(0x35d)](0x4), (_0x33cf75[_0x6abc5c(0x967)] = _0x3d7537[_0x6abc5c(0x83d)] + _0x4de509), _0x3d7537[_0x6abc5c(0x7b5)](_0x33cf75["data"][_0x6abc5c(0x857)]);
                                            else {
                                                if (_0x33cf75[_0x6abc5c(0x5a0)] instanceof Uint8Array)
                                                    _0x3d7537[_0x6abc5c(0x35d)](_0x33cf75[_0x6abc5c(0x5a0)][_0x6abc5c(0x423)]),
                                                        (_0x33cf75["dataOffset"] = _0x3d7537[_0x6abc5c(0x83d)] + _0x4de509),
                                                        _0x3d7537[_0x6abc5c(0x895)](_0x33cf75[_0x6abc5c(0x5a0)]);
                                                else throw new Error(_0x6abc5c(0x5d0) + typeof _0x33cf75["data"]);
                                            }
                                        }
                                    }
                                }
                            }
                        } else throw new Error("Bad\x20EBML\x20datatype\x20" + typeof _0x33cf75[_0x6abc5c(0x5a0)]);
                    }
                }
            }
        }
        let _0x110b08 = function (_0x582eb1, _0x4cba23) {
            return function (_0x4d4fcd) {
                var _0x2d7f4c = _0x3e5e;
                let _0x304e5c = 0x1388,
                    _0x22690e = ![],
                    _0x703228 = 0x0,
                    _0x19e7d4 = 0x0,
                    _0x23ec0e = !![],
                    _0x46c794 = 0x0,
                    _0x204546 = 0xbb80,
                    _0x2f02cc = 0x1,
                    _0x1a80ac = [],
                    _0x284399 = 0x0,
                    _0x2ca031 = 0x0,
                    _0x27ab91 = 0x0,
                    _0x53c4d8 = { fileWriter: null, codec: _0x2d7f4c(0x75c) },
                    _0x2a11d0,
                    _0x21e181 = { id: 0x4489, data: new _0x455942(0x0) },
                    _0x5bf5ac = new _0x4cba23(_0x4d4fcd[_0x2d7f4c(0x17d)]);
                function _0x177389(_0x442e49, _0x2d4cf1) {
                    var _0x38dc7d = _0x2d7f4c;
                    return (_0x2d4cf1 = new Uint8Array(_0x2d4cf1)), _0x5c62b9(_0x132088(_0x442e49), _0x58ee3d(_0x2d4cf1[_0x38dc7d(0x423)]), _0x2d4cf1);
                }
                function _0x5c62b9() {
                    var _0x57d016 = _0x2d7f4c,
                        _0x4741e4,
                        _0x2d8d7d = 0x0,
                        _0xe649f;
                    for (_0x4741e4 = 0x0; _0x4741e4 < arguments[_0x57d016(0x1bf)]; _0x4741e4++) _0x2d8d7d += arguments[_0x4741e4][_0x57d016(0x423)];
                    _0xe649f = new Uint8Array(_0x2d8d7d);
                    for (_0x4741e4 = 0x0, _0x2d8d7d = 0x0; _0x4741e4 < arguments[_0x57d016(0x1bf)]; _0x2d8d7d += arguments[_0x4741e4][_0x57d016(0x423)], _0x4741e4++) _0xe649f[_0x57d016(0x2d3)](arguments[_0x4741e4], _0x2d8d7d);
                    return _0xe649f;
                }
                function _0x132088(_0x517962) {
                    var _0x9c9c9d = _0x2d7f4c;
                    if ((_0x517962 & 0xff000000) != 0x0) return new Uint8Array([(_0x517962 >>> 0x18) & 0xff, (_0x517962 >>> 0x10) & 0xff, (_0x517962 >>> 0x8) & 0xff, _0x517962 & 0xff]);
                    if ((_0x517962 & 0xff0000) != 0x0) return new Uint8Array([(_0x517962 >>> 0x10) & 0xff, (_0x517962 >>> 0x8) & 0xff, _0x517962 & 0xff]);
                    if ((_0x517962 & 0xff00) != 0x0) return new Uint8Array([(_0x517962 >>> 0x8) & 0xff, _0x517962 & 0xff]);
                    if ((_0x517962 & 0xff) != 0x0) return new Uint8Array([_0x517962 & 0xff]);
                    throw _0x9c9c9d(0x3d9);
                }
                function _0x58ee3d(_0x45ed61) {
                    if (_0x45ed61 <= 0x7f) return new Uint8Array([0x80 | (_0x45ed61 & 0x7f)]);
                    if (_0x45ed61 <= 0x3fff) return new Uint8Array([0x40 | ((_0x45ed61 >> 0x8) & 0x3f), _0x45ed61 & 0xff]);
                    return new Uint8Array([0x8, (_0x45ed61 >>> 0x18) & 0xff, (_0x45ed61 >>> 0x10) & 0xff, (_0x45ed61 >>> 0x8) & 0xff, _0x45ed61 & 0xff]);
                }
                function _0x374fa0(_0x4c30c6, _0x51a7f7) {
                    var _0x1e1d3e = _0x2d7f4c,
                        _0x5db0b4 = new DataView(new ArrayBuffer(0x4));
                    return _0x5db0b4[_0x1e1d3e(0x758)](0x0, _0x51a7f7, ![]), _0x177389(_0x4c30c6, new Uint8Array(_0x5db0b4[_0x1e1d3e(0x1a4)]));
                }
                function _0x1c6635(_0x3c9b47) {
                    if (_0x3c9b47 <= 0xff) return new Uint8Array([_0x3c9b47 & 0xff]);
                    if (_0x3c9b47 <= 0xffff) return new Uint8Array([(_0x3c9b47 >>> 0x8) & 0xff, _0x3c9b47 & 0xff]);
                    if (_0x3c9b47 <= 0xffffff) return new Uint8Array([(_0x3c9b47 >> 0x10) & 0xff, (_0x3c9b47 >> 0x8) & 0xff, _0x3c9b47 & 0xff]);
                    return new Uint8Array([(_0x3c9b47 >>> 0x18) & 0xff, (_0x3c9b47 >>> 0x10) & 0xff, (_0x3c9b47 >>> 0x8) & 0xff, _0x3c9b47 & 0xff]);
                    var _0x49f611 = new DataView(new ArrayBuffer(0x4));
                    return _0x49f611["setUint32"](0x0, _0x3c9b47, ![]), _0x49f611;
                }
                function _0x156cf6(_0x32dbee, _0xcf589b) {
                    return _0x177389(_0x32dbee, _0x1c6635(_0xcf589b));
                }
                function _0x3cdd04(_0x2fc228, _0x16e522) {
                    return _0x177389(_0x2fc228, new TextEncoder()["encode"](_0x16e522));
                }
                function _0x29bfab() {
                    var _0x4f5f65 = _0x2d7f4c;
                    let _0x4147e3 = {
                            id: 0x1a45dfa3,
                            data: [_0x156cf6(0x4286, 0x1), _0x156cf6(0x42f7, 0x1), _0x156cf6(0x42f2, 0x4), _0x156cf6(0x42f3, 0x8), _0x3cdd04(0x4282, _0x4f5f65(0x937)), _0x156cf6(0x4287, 0x4), _0x156cf6(0x4285, 0x2)],
                        },
                        _0x484667 = { id: 0x1549a966, data: [_0x156cf6(0x2ad7b1, 0xf4240), _0x3cdd04(0x4d80, _0x4f5f65(0x964)), _0x3cdd04(0x5741, _0x4f5f65(0x964)), _0x21e181] },
                        _0x10cce3 = [
                            { id: 0xb0, data: _0x703228 },
                            { id: 0xba, data: _0x19e7d4 },
                        ],
                        _0x5bf0a9 = {
                            id: 0x1654ae6b,
                            data: [
                                {
                                    id: 0xae,
                                    data: [
                                        _0x156cf6(0xd7, 0x1),
                                        _0x156cf6(0x73c5, 0x1),
                                        _0x156cf6(0x9c, 0x0),
                                        _0x3cdd04(0x22b59c, _0x4f5f65(0x78b)),
                                        _0x3cdd04(0x86, "V_" + _0x4d4fcd["codec"]),
                                        _0x156cf6(0x83, 0x1),
                                        { id: 0xe0, data: [_0x156cf6(0xb0, _0x703228), _0x156cf6(0xba, _0x19e7d4)] },
                                    ],
                                },
                                {
                                    id: 0xae,
                                    data: [
                                        _0x156cf6(0xd7, 0x2),
                                        _0x156cf6(0x73c5, 0x2),
                                        _0x156cf6(0x9c, 0x0),
                                        _0x3cdd04(0x22b59c, _0x4f5f65(0x78b)),
                                        _0x3cdd04(0x86, _0x4f5f65(0x24c)),
                                        _0x156cf6(0x83, 0x2),
                                        { id: 0xe1, data: [_0x374fa0(0xb5, _0x204546), _0x156cf6(0x9f, _0x2f02cc)] },
                                        _0x177389(
                                            0x63a2,
                                            new Uint8Array([
                                                "O"[_0x4f5f65(0x6b5)](0x0),
                                                "p"[_0x4f5f65(0x6b5)](0x0),
                                                "u"["charCodeAt"](0x0),
                                                "s"["charCodeAt"](0x0),
                                                "H"["charCodeAt"](0x0),
                                                "e"[_0x4f5f65(0x6b5)](0x0),
                                                "a"[_0x4f5f65(0x6b5)](0x0),
                                                "d"["charCodeAt"](0x0),
                                                0x1,
                                                _0x2f02cc & 0xff,
                                                0x38,
                                                0x1,
                                                (_0x204546 >>> 0x0) & 0xff,
                                                (_0x204546 >>> 0x8) & 0xff,
                                                (_0x204546 >>> 0x10) & 0xff,
                                                (_0x204546 >>> 0x18) & 0xff,
                                                0x0,
                                                0x0,
                                                0x0,
                                            ])
                                        ),
                                    ],
                                },
                            ],
                        };
                    _0x2a11d0 = { id: 0x18538067, size: -0x1, data: [_0x484667, _0x5bf0a9] };
                    let _0x24a0a0 = new _0x582eb1(0x200);
                    _0x42b3a0(_0x24a0a0, _0x5bf5ac[_0x4f5f65(0x83d)], [_0x4147e3, _0x2a11d0]), _0x5bf5ac[_0x4f5f65(0x5a9)](_0x24a0a0[_0x4f5f65(0x8db)]()), (_0x22690e = !![]);
                }
                function _0x4dd4ef(_0x18e965) {
                    var _0x13e67c = _0x2d7f4c;
                    let _0x134623 = new _0x582eb1(0x1 + 0x2 + 0x1);
                    if (!(_0x18e965["trackNumber"] > 0x0 && _0x18e965[_0x13e67c(0x364)] < 0x7f)) throw new Error(_0x13e67c(0x3e5));
                    return (
                        _0x134623["writeEBMLVarInt"](_0x18e965["trackNumber"]),
                        _0x134623[_0x13e67c(0x178)](_0x18e965["timecode"]),
                        _0x134623["writeByte"]((_0x18e965[_0x13e67c(0x6a5)] == _0x13e67c(0x2d9) ? 0x1 : 0x0) << 0x7),
                        { id: 0xa3, data: [_0x134623[_0x13e67c(0x8db)](), _0x18e965[_0x13e67c(0x9cc)]] }
                    );
                }
                function _0x1295b8(_0x2cd637) {
                    var _0x5c918a = _0x2d7f4c;
                    return { id: 0x1f43b675, data: [{ id: 0xe7, data: Math[_0x5c918a(0x936)](_0x2cd637[_0x5c918a(0x25d)]) }] };
                }
                function _0x12d725() {
                    var _0x2b9057 = _0x2d7f4c;
                    if (_0x1a80ac["length"] === 0x0) return;
                    let _0x34fdbc = 0x0;
                    for (let _0x4de0f7 = 0x0; _0x4de0f7 < _0x1a80ac[_0x2b9057(0x1bf)]; _0x4de0f7++) {
                        _0x34fdbc += _0x1a80ac[_0x4de0f7][_0x2b9057(0x9cc)][_0x2b9057(0x423)];
                    }
                    let _0x43718a = new _0x582eb1(_0x34fdbc + _0x1a80ac[_0x2b9057(0x1bf)] * 0x40),
                        _0x39afdd = _0x1295b8({ timecode: Math[_0x2b9057(0x936)](_0x284399) });
                    for (let _0x1bc9b1 = 0x0; _0x1bc9b1 < _0x1a80ac[_0x2b9057(0x1bf)]; _0x1bc9b1++) {
                        _0x39afdd[_0x2b9057(0x5a0)]["push"](_0x4dd4ef(_0x1a80ac[_0x1bc9b1]));
                    }
                    _0x42b3a0(_0x43718a, _0x5bf5ac[_0x2b9057(0x83d)], _0x39afdd), _0x5bf5ac[_0x2b9057(0x5a9)](_0x43718a["getAsDataArray"]()), (_0x1a80ac = []), (_0x2ca031 = 0x0);
                }
                function _0x2ed9d7(_0x58b889, _0x31af74) {
                    var _0x286c09 = _0x2d7f4c;
                    _0x58b889[_0x286c09(0x364)] = _0x31af74;
                    var _0x27c0b9 = _0x58b889[_0x286c09(0xa0c)] / 0x3e8;
                    _0x23ec0e ? ((_0x46c794 = _0x27c0b9), (_0x27c0b9 = 0x0), (_0x23ec0e = ![])) : (_0x27c0b9 = _0x27c0b9 - _0x46c794);
                    _0x27ab91 = _0x27c0b9;
                    if (_0x2ca031 == 0x0) _0x284399 = _0x27c0b9;
                    (_0x58b889[_0x286c09(0x25d)] = Math[_0x286c09(0x936)](_0x27c0b9 - _0x284399)), _0x1a80ac[_0x286c09(0x874)](_0x58b889), (_0x2ca031 = _0x58b889[_0x286c09(0x25d)] + 0x1), _0x2ca031 >= _0x304e5c && _0x12d725();
                }
                function _0x3664e3() {
                    var _0x28eb7b = _0x2d7f4c;
                    let _0x20c7e7 = new _0x582eb1(seekHead["size"]),
                        _0x373fa5 = _0x5bf5ac[_0x28eb7b(0x83d)];
                    _0x42b3a0(_0x20c7e7, seekHead[_0x28eb7b(0x967)], seekHead[_0x28eb7b(0x5a0)]),
                        _0x5bf5ac[_0x28eb7b(0x162)](seekHead[_0x28eb7b(0x967)]),
                        _0x5bf5ac[_0x28eb7b(0x5a9)](_0x20c7e7["getAsDataArray"]()),
                        _0x5bf5ac[_0x28eb7b(0x162)](_0x373fa5);
                }
                function _0x5ca602() {
                    var _0x44bd6e = _0x2d7f4c;
                    let _0x23529e = new _0x582eb1(0x8),
                        _0x301e7b = _0x5bf5ac[_0x44bd6e(0x83d)];
                    _0x23529e[_0x44bd6e(0x218)](_0x27ab91), _0x5bf5ac["seek"](_0x21e181[_0x44bd6e(0x967)]), _0x5bf5ac[_0x44bd6e(0x5a9)](_0x23529e[_0x44bd6e(0x8db)]()), _0x5bf5ac[_0x44bd6e(0x162)](_0x301e7b);
                }
                (this[_0x2d7f4c(0x5b0)] = function (_0x317be0) {
                    var _0x481ade = _0x2d7f4c;
                    !_0x22690e && ((_0x703228 = _0x4d4fcd[_0x481ade(0x3c1)]), (_0x19e7d4 = _0x4d4fcd[_0x481ade(0x63d)]), (_0x204546 = _0x4d4fcd["samplingFrequency"]), (_0x2f02cc = _0x4d4fcd[_0x481ade(0x160)]), _0x29bfab());
                    if (_0x317be0[_0x481ade(0x7eb)][_0x481ade(0x37d)] == _0x481ade(0x21f)) {
                        let _0xdd9c5d = new Uint8Array(_0x317be0[_0x481ade(0x423)]);
                        _0x317be0["copyTo"](_0xdd9c5d), _0x2ed9d7({ frame: _0xdd9c5d, intime: _0x317be0[_0x481ade(0xa1c)], type: _0x317be0[_0x481ade(0x6a5)] }, 0x1);
                        return;
                    } else {
                        if (_0x317be0["constructor"][_0x481ade(0x37d)] == _0x481ade(0x27c)) {
                            let _0xb3562d = new Uint8Array(_0x317be0[_0x481ade(0x423)]);
                            _0x317be0["copyTo"](_0xb3562d), _0x2ed9d7({ frame: _0xb3562d, intime: _0x317be0["timestamp"], type: _0x317be0["type"] }, 0x2);
                            return;
                        }
                    }
                }),
                    (this[_0x2d7f4c(0x949)] = function () {
                        var _0x36831a = _0x2d7f4c;
                        return !_0x22690e && _0x29bfab(), (_0x23ec0e = !![]), _0x12d725(), _0x5ca602(), _0x5bf5ac[_0x36831a(0x949)](_0x36831a(0x58a));
                    }),
                    (this["getWrittenSize"] = function () {
                        return _0x5bf5ac["length"];
                    }),
                    (_0x4d4fcd = _0x34a8cf(_0x53c4d8, _0x4d4fcd || {}));
            };
        };
        window["WebMWriter"] = _0x110b08(window[_0x1594e9(0x2ab)], window[_0x1594e9(0x935)]);
    })();
    // module.exports = WebRTC;