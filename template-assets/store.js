"use strict";

function _typeof(n) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
        return typeof n
    } : function(n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    })(n)
}
$(function() {
        $(".tebexLogin").attr("style", "display:none!important;visibility:hidden!important")
    }), window.ndzn_cart = {
        open: function() {
            $(".ndzn-js--cartParent").toggleClass("is--open")
        },
        close: function() {
            $(".ndzn-js--cartParent.is--open").removeClass("is--open")
        }
    }, $(document).on("click", ".ndzn-js--cartToggle", function(n) {
        n.stopImmediatePropagation(), window.ndzn_cart.open()
    }), $(document).click(function(n) {
        $(n.target).closest($(".ndzn-js--cartDropdown")).length || window.ndzn_cart.close()
    }), $(document).on("click", ".ndzn-js--scrollTop", function(n) {
        $("html,body").animate({
            scrollTop: 0
        }, 300)
    }), window.notification = new function() {
        this.show = function(n, t) {
            clearTimeout(this.timeout), $(".notification").empty().append('<div class="alert alert-' + n + ' alert-dismissable"></div>'), $(".notification .alert").append('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>').append(t), console.log("yyyyyyyyyyyyyeet"), this.clear()
        }, this.clear = function() {
            this.timeout = window.setTimeout(function() {
                $(".alert").fadeTo(200, 0).slideUp(200, function() {
                    $(this).remove()
                })
            }, 5e3)
        }
    },
    function(n) {
        "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof module && module.exports ? module.exports = n(require("jquery")) : n(jQuery)
    }(function(d) {
        function v(n) {
            return !n.nodeName || -1 !== d.inArray(n.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
        }

        function t(n) {
            return d.isFunction(n) || d.isPlainObject(n) ? n : {
                top: n,
                left: n
            }
        }
        var $ = d.scrollTo = function(n, t, e) {
            return d(window).scrollTo(n, t, e)
        };
        return $.defaults = {
            axis: "xy",
            duration: 0,
            limit: !0
        }, d.fn.scrollTo = function(n, e, h) {
            "object" === _typeof(e) && (h = e, e = 0), "function" == typeof h && (h = {
                onAfter: h
            }), "max" === n && (n = 9e9), h = d.extend({}, $.defaults, h), e = e || h.duration;
            var g = h.queue && 1 < h.axis.length;
            return g && (e /= 2), h.offset = t(h.offset), h.over = t(h.over), this.each(function() {
                function s(n) {
                    var t = d.extend({}, h, {
                        queue: !0,
                        duration: e,
                        complete: n && function() {
                            n.call(l, p, h)
                        }
                    });
                    u.animate(f, t)
                }
                if (null !== n) {
                    var r, c = v(this),
                        l = c ? this.contentWindow || window : this,
                        u = d(l),
                        p = n,
                        f = {};
                    switch (_typeof(p)) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(p)) {
                                p = t(p);
                                break
                            }
                            p = c ? d(p) : d(p, l);
                        case "object":
                            if (0 === p.length) return;
                            (p.is || p.style) && (r = (p = d(p)).offset())
                    }
                    var m = d.isFunction(h.offset) && h.offset(l, p) || h.offset;
                    d.each(h.axis.split(""), function(n, t) {
                        var e = "x" === t ? "Left" : "Top",
                            o = e.toLowerCase(),
                            a = "scroll" + e,
                            i = u[a](),
                            d = $.max(l, t);
                        r ? (f[a] = r[o] + (c ? 0 : i - u.offset()[o]), h.margin && (f[a] -= parseInt(p.css("margin" + e), 10) || 0, f[a] -= parseInt(p.css("border" + e + "Width"), 10) || 0), f[a] += m[o] || 0, h.over[o] && (f[a] += p["x" === t ? "width" : "height"]() * h.over[o])) : (e = p[o], f[a] = e.slice && "%" === e.slice(-1) ? parseFloat(e) / 100 * d : e), h.limit && /^\d+$/.test(f[a]) && (f[a] = f[a] <= 0 ? 0 : Math.min(f[a], d)), !n && 1 < h.axis.length && (i === f[a] ? f = {} : g && (s(h.onAfterFirst), f = {}))
                    }), s(h.onAfter)
                }
            })
        }, $.max = function(n, t) {
            var e = "scroll" + (o = "x" === t ? "Width" : "Height");
            if (!v(n)) return n[e] - d(n)[o.toLowerCase()]();
            var o = "client" + o,
                a = (i = n.ownerDocument || n.document).documentElement,
                i = i.body;
            return Math.max(a[e], i[e]) - Math.min(a[o], i[o])
        }, d.Tween.propHooks.scrollLeft = d.Tween.propHooks.scrollTop = {
            get: function(n) {
                return d(n.elem)[n.prop]()
            },
            set: function(n) {
                var t = this.get(n);
                if (n.options.interrupt && n._last && n._last !== t) return d(n.elem).stop();
                var e = Math.round(n.now);
                t !== e && (d(n.elem)[n.prop](e), n._last = this.get(n))
            }
        }, $
    }), window.NoScroll = function() {
        if (!(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]) {
            var n = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.marginRight = "".concat(n, "px"), document.body.style.overflow = "hidden", $("#ndzn-bg").css("left", "-".concat(n / 2, "px"))
        } else document.body.style.marginRight = "", document.body.style.overflow = "", $("#ndzn-bg").css("left", "")
    }, window.ndzn_core = {
        server_ip: "mognetwork",
        discord_invite_link: "https://discord.gg/moggaming",
        discord_api_key: "267615559712112640"
    }, $(".ndzn-js--copyip").length && ndzn_core.server_ip.length && new ClipboardJS(".ndzn-js--copyip", {
        text: function() {
            return ndzn_core.server_ip
        }
    }).on("success", function(n) {
        swal("pvp.thearchon.net", "Copied to Clipboard")
    }), $(".ndzn-js--playercount").length && ndzn_core.server_ip.length && $.get("https://mcapi.us/server/status?ip=" + ndzn_core.server_ip, function(n) {
        if ("success" !== n.status) return null;
        $(".ndzn-js--playercount").html(n.players.now)
    }), $(document).on("click", ".ndzn-js--discordinvite", function() {
        window.open(ndzn_core.discord_invite_link, "_blank")
    }), $(".ndzn-js--discordcount").length && ndzn_core.discord_api_key.length && (window.onerror = function(n, t, e) {
        return "Uncaught TypeError: Cannot read property 'removeClassTransitioned' of undefined" === n
    }, $.get("https://discordapp.com/api/guilds/" + ndzn_core.discord_api_key + "/embed.json", function(n) {
        $(".ndzn-js--discordcount").html(n.presence_count)
    }));
var buttons = document.querySelectorAll(".ndzn-js--changeStage"),
    stagesContainer = document.querySelector(".stages-container");
$(function() {
    window.NDZN_MBN && window.ndznMobileNavigate(window.NDZN_MBN[0], window.NDZN_MBN[1], window.NDZN_MBN[2])
}), window.ndznMobileNavigate = function(n) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        o = -100 * n;
    t && ($("#ndzn-sidebar-nav-links .stage-3 .nav-body").hide(), $("#ndzn-sidebar-nav-links .stage-3").find(t).show()), e && $("#ndzn-sidebar-nav-links .stage-3 .stage-title .big").html(e), stagesContainer.style.transform = "translateX(".concat(o, "%)")
}, $(document).on("click", ".ndzn-js--changeStage", function(n) {
    n.preventDefault();
    var t = $(this).get(0);
    if (t.hasAttribute("data-level")) {
        var e = t.dataset.level,
            o = t.dataset.content || !1,
            a = t.dataset.title || !1;
        window.ndznMobileNavigate(e, o, a)
    }
}), window.ndznAdjustMobileNav = function() {
    var n = $(window).width();
    430 < n && (n = 430), $("#ndzn-sidebar-nav-links .stage").css({
        width: n,
        flexBasis: n
    })
}, $(ndznAdjustMobileNav), $(window).on("resize", ndznAdjustMobileNav);
var heading = document.querySelectorAll(".ndzn-js--moduleHeading");

function processModal(n) {
    var t = $(n);
    t.hasClass("popup-box") && t.addClass("hide"), window.NDZN_DEVMODE && (t.find("a[href]").each(function() {
        window._modifyHref(this)
    }), t.find("form[action]").each(function() {
        window._modifyFormAction(this)
    }));
    var i = "";
    t.find(".ndzn-popup-slide").each(function(n) {
        var t = $(this),
            e = t.find(".__slideid__").html(),
            o = t.find(".__slidetitle__").html();
        t.find(".__slideid__, .__slidetitle__").remove();
        var a = '\n            <button type="button" class="ndzn-js--packageTab'.concat(0 === n ? " active" : "", '" data-slide="').concat(e, '">\n                ').concat(o, "\n            </button>");
        i += a, t.attr("id", e), 0 === n && t.addClass("active")
    }), i.length && (i = '<div class="popup-tabs">' + i + "</div>", t.find(".popup-header").append(i), t.find(".popup-multislide-note").show()), $("#popup-modal").html(t).modal("show"), setTimeout(function() {
        $("#popup-modal").find(".popup-box.hide").removeClass("hide")
    }, 100)
}
heading.forEach(function(n) {
    n.addEventListener("click", function() {
        n.classList.contains("module-open") ? n.classList.remove("module-open") : n.classList.add("module-open")
    })
}), window.ndznOpenPopups = 0, $("#popup-modal").on("shown.bs.modal", function() {
    window.ndznOpenPopups++, NoScroll(!0)
}), $("#popup-modal").on("hidden.bs.modal", function() {
    window.ndznOpenPopups--, 0 === window.ndznOpenPopups && NoScroll(!1)
}), window.ndznCustomPopup = function(n, t) {
    var e = $(t);
    "show" === n ? (NoScroll(!0), window.ndznOpenPopups++, e.addClass("open"), setTimeout(function() {
        e.addClass("showContent")
    }, 0)) : "hide" === n && (e.removeClass("showContent"), window.ndznOpenPopups--, setTimeout(function() {
        e.removeClass("open"), 0 === window.ndznOpenPopups && NoScroll(!1)
    }, 150))
}, $(document).on("click", ".ndzn-js-menuOpen", function() {
    ndznCustomPopup("show", "#ndzn-sidebar-nav-links")
}), $(document).on("click", ".ndzn-js-menuClose", function() {
    ndznCustomPopup("hide", "#ndzn-sidebar-nav-links")
}), $(document).on("click", ".ndzn-js--realmSelectorOpen", function() {
    ndznCustomPopup("show", "#ndzn-realm-selection")
}), $(document).on("click", ".ndzn-js--realmSelectorClose", function() {
    ndznCustomPopup("hide", "#ndzn-realm-selection")
}), $(document).on("click", ".ndzn-js--cartPopupOpen", function() {
    ndznCustomPopup("show", "#ndzn-cart-popup")
}), $(document).on("click", ".ndzn-js--cartPopupClose", function() {
    ndznCustomPopup("hide", "#ndzn-cart-popup")
}), $(document).on("click", ".ndzn-js--freerankOpen", function() {
    ndznCustomPopup("show", "#ndzn-free-rank"), setTimeout(function() {
        var n = document.querySelector(":focus");
        n && n.blur()
    }, 250)
}), $(document).on("click", ".ndzn-js--freerankClose", function() {
    ndznCustomPopup("hide", "#ndzn-free-rank")
}), $(document).on("click", ".ndzn-js--freerankGuest", function(n) {
    n.preventDefault(), sessionStorage.setItem("frpopup", "yes"), window.location.href = "/login"
}), $(function() {
    sessionStorage.getItem("frpopup") && 0 === $(".panel--ndzn-login").length && (ndznCustomPopup("show", "#ndzn-free-rank"), sessionStorage.removeItem("frpopup"))
}), $(".ndzn-checkbox-parent").click(function() {
    var n = $(this).find('input[type="checkbox"]'),
        t = n.is(":checked");
    $(this).toggleClass("is-checked", !t), n.prop("checked", !t);
    var e = $("#ndzn-checkout form.part-checkout input:checkbox:not(:checked)");
    console.log(e), $(".checkout-payments-methods .payment").toggleClass("off", 0 < e.length)
}), $(document).on("submit", ".ndzn-js--giftcardForm", function(n) {
    n.preventDefault();
    var t = $(this).find(".ndzn-js--giftcardFormInput").val() || "";
    if (!(t.length < 4)) {
        var a = $(this).find(".ndzn-js--giftcardFormResult");
        a.attr("data-color", "").html("Loading...").show(), $.ajax({
            method: "POST",
            url: _devurl("/#giftcardbalance"),
            data: {
                card_number: t
            }
        }).done(function(n) {
            var t = $(n).find("#ndzn-giftcard-search-outcome"),
                e = "An unknown error occurred.",
                o = "red";
            t.length && "Card balance:" === (e = $(t).html().trim()).substr(0, 13) && (o = "green"), a.attr("data-color", o).html(e)
        }).fail(function(n) {
            a.attr("data-color", "red").html("Could not complete a check.")
        })
    }
}), $(document).on("click", ".ndzn-js--toggleModal", function(n) {
    n.preventDefault(), window.modalLoaderSvg(!0);
    var t = $(this).data("remote");
    "#" === t.substr(0, 1) ? $(t).modal("show") : (t = _devurl(t), $.ajax({
        url: t,
        success: function(n) {
            processModal(n)
        },
        error: function(n) {
            alert("We were unable to display this pop-up."), console.error(n.responseText)
        },
        async: !0
    }))
}), $(document).on("click", ".ndzn-js--packageTab:not(.active)", function(n) {
    n.preventDefault();
    var t = $(this).data("slide");
    $(".ndzn-js--packageTab.active, .ndzn-popup-slide.active").removeClass("active"), $(this).addClass("active"), $(".ndzn-popup-slide#".concat(t)).addClass("active"), $(ndzn_package_modal_scrollbar.getScrollElement()).animate({
        scrollTop: 0
    }, 200)
}), window.modalLoaderSvg = function() {
    if (!(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]) {
        var n = $("#ndznLoaderSvg").html();
        $("#popup-modal").html(n).modal("show")
    } else $("#popup-modal").html("").modal("hide")
}, $.fn.countTo = function(n) {
    return this.each(function() {
        var t = $(this),
            n = parseInt(t.attr("data-count-from")),
            e = parseInt(t.attr("data-count-to")),
            o = t.attr("data-count-speed"),
            a = n;
        requestAnimationFrame(function n() {
            a < e ? (t.text(Math.floor(a)), a += o / 2.5, requestAnimationFrame(n)) : t.text(e)
        })
    })
};
var ACTION_ADDED = "added",
    ACTION_ADDED_ONE = "added_one",
    ACTION_SUBMIT_OPTIONS = "submit_options",
    ACTION_REMOVED = "removed",
    ACTION_REMOVED_ONE = "removed_one",
    ACTION_ADD_COUPON = "add_coupon",
    ACTION_REMOVE_COUPON = "remove_coupon",
    NDZN_CART_LOADING = !1;

function updatePackageElements() {
    var n = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
        e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
    if ($(".category--ndzn-ajax").length) {
        if (!e) {
            var t = getDomDataJson();
            e = t.basket
        }!1 === n ? $(".category--ndzn-ajax .ndzn-ajax-package").each(function() {
            o(this)
        }) : n instanceof Array && n.forEach(function(n) {
            o($('.category--ndzn-ajax .ndzn-ajax-package[data-id="' + n + '"]'))
        }), $(".category--ndzn-ajax").removeClass("loading")
    }

    function o(n) {
        var t = searchQtyFromId($(n).attr("data-id"), e);
        $(n).attr("data-qty", t), $(n).find(".packageQty").html(t).attr("data-qty", t)
    }
}

function searchQtyFromId(n, t) {
    var e = t.packages_index.indexOf(n);
    return -1 === e ? 0 : t.packages[e].quantity
}

function getDomDataJson() {
    var n = $("#ndzn-ajax-data");
    return n.length ? $.parseJSON(n.html()) : {}
}

function setDomDataJson(n) {
    $("#ndzn-ajax-data").html(n)
}

function setLoading(n) {
    !0 === (NDZN_CART_LOADING = n) ? $("body").addClass("ndzn-ajax--loading") : $("body").removeClass("ndzn-ajax--loading")
}

function toast() {
    var n, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ACTION_ADDED,
        e = 1 < arguments.length ? arguments[1] : void 0;
    n = e.packages.length ? "Your cart now has ".concat(e.packages.length, " item").concat(1 === e.packages.length ? " priced at" : "s totalling", " ").concat(e.price, " ").concat(e.currency, ".") : "Your basket is now empty.", t === ACTION_ADDED || t === ACTION_ADDED_ONE ? $.toast({
        text: n,
        heading: "Added to Cart",
        icon: "success",
        position: "bottom-right",
        hideAfter: 3e3
    }) : t !== ACTION_REMOVED && t !== ACTION_REMOVED_ONE || $.toast({
        text: n,
        heading: "Removed from Cart",
        icon: "error",
        position: "bottom-right",
        hideAfter: 3e3
    })
}

function ajaxRequest(n, f) {
    var t, m = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
        h = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {};
    setLoading(!0);
    var e = {};
    (t = f === ACTION_REMOVED_ONE || f === ACTION_ADDED_ONE ? (e["quantity[" + m.packageId + "]"] = m.newQuantity, $.ajax({
        type: "POST",
        url: _devurl("/checkout/update"),
        data: e
    })) : f === ACTION_SUBMIT_OPTIONS ? (n = _devurl("/checkout/packages/add/" + m.packageId + "/single"), e = m.optionsForm, $.ajax({
        type: "POST",
        url: n,
        data: e
    })) : f === ACTION_ADD_COUPON ? $.ajax({
        type: "POST",
        data: m.form,
        url: n
    }) : $.ajax({
        type: "GET",
        url: n
    })).always(function() {
        setLoading(!1)
    }), t.done(function(n) {
        var t = $(n).filter("div#ndzn-ajax-data");
        if (t.length || (t = $(n).find("div#ndzn-ajax-data")), !t.length) return alert("A critical error has occurred and the page must refresh."), window.location.reload();
        var e = t.text(),
            o = $.parseJSON(e),
            a = [],
            i = $(n).filter("#ndzn-notifications");
        if (i.length || (i = $(n).find("#ndzn-notifications")), i.length && (a = i.children(), console.log(a)), f === ACTION_SUBMIT_OPTIONS && $('.ndzn-ajax--optionsForm button[type="submit"]').removeClass("btn-loading"), f === ACTION_SUBMIT_OPTIONS && a.length) return $.each(a, function(n, t) {
            $(t).find("button").remove(), $("#popup-modal .modal-notification").html('\n\t\t\t\t\t<div class="text">'.concat($(t).text(), "</div>\n\t\t\t\t"))
        }), h(!1);
        if (!o.basket.packages.length && $(".ndzn-checkout-main").length) document.body.style.opacity = .3, document.body.style.pointerEvents = "none", window.document.location.href = _devurl("/");
        else if (a.length) return $.each(a, function(n, t) {
            $(t).find("button").remove(), notification.show("danger", $(t).text())
        }), h(!1);
        if (!0 === o.options_page) {
            var d = $(n).find("#ndzn-options-form").clone();
            return $(d).find("form").addClass("ndzn-ajax--optionsForm").attr("data-itemid", m.packageId), $("#popup-modal").html('\n\t        \t<div class="modal-dialog">\n\t\t\t\t\t<div class="modal-content">\n\t\t\t\t\t\t<div class="modal-header">\n\t\t\t\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n\t\t\t\t\t\t\t<div class="modal-title">Configure <b>'.concat($(n).find(".page-main .panel-heading").text(), '</b></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="modal-body">\n\t\t\t\t\t\t\t<div class="modal-notification"></div>\n\t\t\t\t\t\t\t').concat($(d).html(), "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n            ")), $("#popup-modal").modal("show"), h(!1)
        }
        f === ACTION_SUBMIT_OPTIONS && (f = ACTION_ADDED, $("#popup-modal").html("").modal("hide")), setDomDataJson(e);
        var s = $(n),
            r = s.filter("#ndzn-page").find(".sidebar-ajax").html();
        $("#ndzn-page .sidebar-ajax").html(r);
        var c = s.filter("#ndzn-header").find(".header-user .user-right .cart").html();
        $("#ndzn-header .header-user .user-right .cart").html(c);
        var l = s.filter("#ndzn-free-rank").find(".free-rank").html();
        $("#ndzn-free-rank .free-rank").html(l);
        var u = s.filter("#ndzn-cart-popup").find(".cart-inner");
        $("#ndzn-cart-popup").hasClass("open") && u.find('.cart-item[data-id="' + [m.packageId] + '"]').addClass("open"), $("#ndzn-cart-popup .cart-inner").html(u.html()), $("#ndzn-cart-popup").hasClass("open") || $("#ndzn-free-rank").hasClass("open") || ndznCustomPopup("show", "#ndzn-cart-popup");
        o.basket.packages.length;
        $(".ndzn-js--basketPrice").html(o.basket.price.toFixed(2) + " " + o.basket.currency), updatePackageElements([m.packageId], o.basket), toast(f, o.basket);
        var p = $("#popup-modal");
        return p.length && p.hasClass("in") && p.find(".popup-box.is--package").length && p.modal("hide"), h(!0, n)
    }), t.fail(function() {
        return console.error("Error completing AJAX request. Reloading."), window.location.href = n, h(!1)
    })
}

function updatePackageElem(n, t) {
    $(".category--ndzn-ajax").length && $('.category--ndzn-ajax .ndzn-ajax-package[data-id="' + n + '"]').length
}

function objectifyForm(n) {
    for (var t = $(n).serializeArray(), e = {}, o = 0; o < t.length; o++) e[t[o].name] = t[o].value;
    return e
}

function getCheckoutErrors() {
    var n = $("#ndzn-checkout .checkout-details .form-control").filter(function() {
        return "display: none;" !== $(this).attr("style") && ("" == $(this).val() || void 0)
    });
    return 0 < n.length && n
}
$(function() {
    updatePackageElements()
}), $(document).on("click", ".ndzn-ajax--action", function(n) {
    var t = this;
    if (n.preventDefault(), n.stopImmediatePropagation(), !NDZN_CART_LOADING) {
        var e = !1;
        if ($(this).hasClass("ndzn-ajax--addCart") && (e = ACTION_ADDED), $(this).hasClass("ndzn-ajax--removeCart") && (e = ACTION_REMOVED), $(this).hasClass("ndzn-ajax--removeOne") && (e = ACTION_REMOVED_ONE), e) {
            var o = $(this).closest(".ndzn-ajax-package").attr("data-id");
            o = o || $(this).closest(".modal-footer").attr("data-package-id");
            var a = $(this).attr("href");
            a = a && _devurl(a);
            var i = 0;
            e === ACTION_REMOVED_ONE ? 0 === (i = searchQtyFromId(o, getDomDataJson().basket) - 1) && (e = ACTION_REMOVED) : e === ACTION_ADDED && 1 < (i = searchQtyFromId(o, getDomDataJson().basket) + 1) && (e = ACTION_ADDED_ONE), a || (e === ACTION_ADDED && (a = _devurl("/checkout/packages/add/".concat(o, "/single"))), e === ACTION_REMOVED && (a = _devurl("/checkout/packages/remove/".concat(o)))), $(this).hasClass("btn") && $(this).addClass("btn-loading"), ajaxRequest(a, e, {
                packageId: o,
                newQuantity: i
            }, function() {
                $(t).removeClass("btn-loading"), [ACTION_ADDED, ACTION_REMOVED].includes(e) && $("#popup-modal").find(".modal-content--package").length && $("#popup-modal").modal("hide")
            })
        } else console.error("[NDZN Cart] Invalid action specified.")
    }
}), $(document).on("submit", ".ndzn-ajax--optionsForm", function(n) {
    $(this).find('button[type="submit"]').addClass("btn-loading"), n.preventDefault();
    var t = objectifyForm(this);
    t.submit = "Continue", ajaxRequest("", ACTION_SUBMIT_OPTIONS, {
        optionsForm: t,
        packageId: $(this).attr("data-itemid")
    })
}), $(document).on("click", ".ndzn-ajax--optionsForm .buttons .btn-danger", function(n) {
    n.preventDefault(), $("#popup-modal").html("").modal("hide")
}), $(document).on("submit", ".ndzn-js--giftForm", function(n) {
    var t = this;
    if (n.preventDefault(), !$(this).hasClass("disabled")) {
        $(this).addClass("disabled"), document.activeElement.blur();
        var e = $(this).find('button[type="submit"]');
        e.addClass("btn-loading");
        var o = $(this).attr("action"),
            a = $(this).find('input[name="username"]').val(),
            i = $(this).attr("data-package-id");
        ajaxRequest(o, ACTION_ADDED, {
            packageId: i,
            username: a
        }, function() {
            $(t).removeClass("disabled"), e.removeClass("btn-loading")
        })
    }
}), $(function() {
    window.saleSlider = tns({
        container: ".ndzn-js--saleSlider",
        items: 1,
        autoplay: !0,
        axis: "vertical",
        swipeAngle: !1,
        mouseDrag: !1,
        speed: 400
    })
}), $(document).on("submit", ".ndzn-js--freeRankCouponForm", function(n) {
    var t = this;
    n.preventDefault();
    var e = {
        coupon: $(this).find('input[type="text"]').val()
    };
    if (e.coupon.length < 4) return window.notification.show("danger", "Invalid coupon code.");
    var o = $(this).find(".btn"),
        a = $(this).find(".status"),
        i = a.html();
    o.addClass("loading"), a.html('<i class="mdi mdi-cube-send"></i> <span>Loading......</span>'), $(this).attr("style", "opacity:0.4;pointer-events:none;user-select:none;").blur(), ajaxRequest(_devurl("/checkout/coupons/add"), ACTION_ADD_COUPON, {
        form: e
    }, function() {
        o.removeClass("loading"), a.html(i), $(t).attr("style", "")
    })
}), $.fn.button = function(n) {
    "loading" === n ? $(this).addClass("btn-loading") : "reset" === n && $(this).removeClass("btn-loading")
}, $(document).on("change input", "#ndzn-checkout .form-control-error", function() {
    $(this).removeClass("form-control-error")
}), $(document).on("click", ".ndzn-js--gatewayBtn", function(n) {
    n.preventDefault(), $("#ndzn-checkout .form-control-error").removeClass("form-control-error");
    var t = getCheckoutErrors();
    if (t) return (window.bbb = t).first().focus().addClass("form-control-error"), notification.show("danger", "Please fill in all fields first.");
    window.button = $(this), window.button.button("loading");
    var e = $(this).attr("data-gateway"),
        o = $("#ndzn-checkout .part-checkout");
    $(this).hasClass("payment-free") ? o.find("input#checkout-gateway").remove() : o.find("input#checkout-gateway").val(e), o.submit()
}), $(document).on("click", ".ndzn-js--gatewayFree", function(n) {
    if (n.preventDefault(), getCheckoutErrors()) return notification.show("danger", "Please fill in all fields first.");
    window.button = $(this), window.button.button("loading"), $("#ndzn-checkout .part-checkout").submit()
}), $(document).on("submit", "#ndzn-checkout .part-checkout", function(n) {
    "/checkout/free" !== $(this).attr("action") && (n.preventDefault(), processForm($(this)))
});