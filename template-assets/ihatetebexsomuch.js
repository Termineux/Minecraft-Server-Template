$(document).ready(function() {
    var giftShowing = false;
    var giftButtonText = "Gift this package";
    $(document).on('click', '.btn-gift', function() {
        giftButtonText = $(".btn-gift").text();
        if (!giftShowing) {
            $(".btn-gift").html(giftButtonText + ' <i class="fa fa-chevron-up" aria-hidden="true"></i>');
            $(".gift-fields").slideDown("fast", function() {
                giftShowing = true;
            });
        } else {
            $(".btn-gift").html(giftButtonText + ' <i class="fa fa-chevron-down" aria-hidden="true"></i>');
            $(".gift-fields").slideUp("fast", function() {
                giftShowing = false;
            });
        }
    });
    $('body').tooltip({
        selector: '[data-toggle="tooltip"]',
        container: '.modal-footer'
    });
    notification.clear();
    $(document.body).on('click', '.btn-copy', function() {
        $("input[name='copy-hash']").focus();
        $("input[name='copy-hash']").select();
        document.execCommand('copy');
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) {
                window.getSelection().removeAllRanges();
            }
        } else if (document.selection) {
            document.selection.empty();
        }
        $(this).text('Copied');
    });
    $(".mc-skin").minecraftSkin({
        scale: 2
    });
    $(".toggle-tooltip").tooltip();
    $(".toggle-modal").on("click", function(e) {
        remote = $(this).data("remote");
        $.ajax({
            url: remote,
            success: function(data) {
                $('#popup-modal').html(data);
                $('#popup-modal').modal("show");
            },
            error: function(request, status, error) {
                alert(request.responseText);
            },
            async: true
        });
        e.preventDefault();
    });
    var preferralTimer;
    $(document).on("keyup", "#preferral-username", function() {
        clearTimeout(preferralTimer);
        $("#preferral-icon").removeClass("fa-user").addClass("fa-spinner fa-spin");
        $("#preferral-message").text("");
        $("#preferral-button").addClass("hide");
        var val = $(this).val();
        preferralTimer = setTimeout(function() {
            $.ajax({
                type: 'POST',
                url: "/ajax/preferral",
                data: {
                    username: val
                },
                dataType: "json",
                cache: false,
                success: function(data) {
                    $("#preferral-icon").removeClass("fa-spinner fa-spin").addClass("fa-user");
                    if (data.success === false) {
                        $("#preferral-message").show();
                        $("#preferral-message").text(data.message).removeClass("alert alert-success").addClass("alert alert-danger");
                    } else if (data.success === true) {
                        $("#preferral-message").hide();
                        $("#preferral-button").removeClass("hide");
                    }
                }
            });
        }, 500);
    });
    $(".gifting").on("click", "input[type=checkbox]", function() {
        name = $(this).attr('id');
        if ($(this).is(":checked")) {
            $("#ign_" + name).removeClass("hide").removeClass("hidden").attr("required", "required");
        } else {
            $("#ign_" + name).addClass("hide").addClass("hidden").removeAttr("required");
        }
    });
    $(".gifting").on("change", "input", function() {
        document.cookie = "buycraft_gifting=" + $(".gifting").find("input").serialize();
    });
    stored = unserialize(getCookie("buycraft_gifting"));
    for (i in stored) {
        field = jQuery(".gifting").find("[name='" + i + "']");
        if (field.attr("type") == "checkbox") {
            if (stored[i] == "1") {
                field.eq(0).checked = false;
                field.attr("checked", false);
                field.click();
            }
        } else {
            field.val(stored[i]);
        }
        field.change();
    }
    var stateTimer = null;
    $(document.body).on("change", "select[name=address_country]", function() {
        if (stateTimer != null) {
            clearTimeout(stateTimer);
        }
        stateTimer = setTimeout(function() {
            $.ajax({
                type: 'POST',
                url: "/ajax/states",
                data: {
                    country: $("select[name=address_country]").val()
                },
                dataType: "json",
                cache: false,
                success: function(data) {
                    $("input[name=address_state]").attr("id", "stateinput");
                    if (data.length > 0) {
                        $("#stateinput").hide();
                        $("#stateinput").removeAttr("name");
                        $("#stateselect").remove();
                        var stateoptions = '';
                        for (var i = 0; i < data.length; i++) {
                            stateoptions += '<option value="' + data[i]['id'] + '">' + data[i]['name'] + '</option>';
                        }
                        $("#stateinput").parent().append('<select name="address_state" id="stateselect" class="form-control"><option value="">Select a state</option>' + stateoptions + '</select>');
                    } else {
                        $("#stateselect").remove();
                        $("#stateinput").show();
                        $("#stateinput").attr("name", "address_state");
                    }
                }
            });
        }, 500);
    });
    var taxTimer = null;
    $(document.body).on("change", "select[name=address_country], select[name=address_state]", function() {
        if (taxTimer != null) {
            clearTimeout(taxTimer);
        }
        taxTimer = setTimeout(function() {
            $.ajax({
                type: 'POST',
                url: "/ajax/checktax",
                data: {
                    country: $("select[name=address_country]").val(),
                    state: $("select[name=address_state]").val()
                },
                dataType: "json",
                cache: false,
                success: function(data) {
                    $(".checkout .tax").hide().html("");
                    if (data.applies) {
                        $(".checkout .tax").show().html("<div class='page-header'><h4>Tax - " + data.name + "</h4></div><p>Because you indicated that you reside in " + data.region + " you will be charged an additional " + data.percentage + "% " + data.name + " on your order.</p>");
                    }
                }
            });
        }, 500);
    });
    $('.checkout .gateways .radio input').change(function() {
        $(".card-container").hide();
        $(".braintree-details").addClass("hidden");
        $("div#paypal-button, div#paypal-token, div#save-token").addClass("hidden");
        $("button#purchase-button[type='submit']").removeClass("hidden");
        $("button#purchase-button[type='submit']").removeClass("hidden");
        if ($(this).data("id") == "4") {
            $(".card-container").show();
        } else if ($(this).data("id") == "20") {
            $(".braintree-details").removeClass("hidden");
        } else if ($(this).data("id") == "24" && $("input[name='paypalv2-personal-account']").val() === "0") {
            $("div#paypal-token").removeClass("hidden");
            if ($("input[name='paypalv2-billing-token-id']").is(":checked")) {
                $("div#paypal-token").removeClass("hidden");
            } else {
                $("button#purchase-button[type='submit']").addClass("hidden");
                $("div#paypal-button").removeClass("hidden");
                $("div#save-token").removeClass("hidden");
            }
        }
    });
    $("div.checkout input[name='paypalv2-billing-token-id']").on("change", function(e) {
        if ($(this).is(":checked")) {
            $("div#paypal-button, div#save-token").addClass("hidden");
            $("button#purchase-button[type='submit']").removeClass("hidden");
        } else {
            $("button#purchase-button[type='submit']").addClass("hidden");
            $("div#paypal-button, div#save-token").removeClass("hidden");
        }
    });
    $('.checkout .gateways .radio input').eq(0).change();
    if ($('.checkout .gateways .radio input').length == 1) {
        if ($('.checkout .gateways .radio input').data("id") == "4") {
            $(".card-container").show();
        }
    }
    if (!jQuery(".checkout form").hasClass("gateway")) {
        jQuery(".checkout").on("submit", "form", function() {
            jQuery(this).find("#gifting").remove();
            jQuery(this).append("<input type='hidden' id='gifting' name='gifting' value='" + $(".gifting").find("input").serialize() + "' />");
        });
    }
    $(document.body).on("submit", ".checkout form.gateway", function() {
        form = $(this);
        if ($('input[name=gateway]:checked').attr("data-id") == "20") {
            braintreeinstance.requestPaymentMethod(function(err, payload) {
                if (err) {
                    console.log('Error', err);
                    notification.show("danger", "We could not validate your payment method. Please select a new payment method and try again.");
                    return;
                }
                document.querySelector('#nonce').value = payload.nonce;
                return processForm(form);
            });
        } else {
            return processForm(form);
        }
        return false;
    });
    $.ajax({
        type: 'POST',
        url: "/ajax/checktax",
        data: {
            country: $("select[name=address_country]").val(),
            state: $("select[name=address_state]").val()
        },
        dataType: "json",
        cache: false,
        success: function(data) {
            $(".checkout .tax").hide().html("");
            if (data.applies) {
                $(".checkout .tax").show().html("<div class='page-header'><h4>Tax - " + data.name + "</h4></div><p>Because you indicated that you reside in " + data.region + " you will be charged an additional " + data.percentage + "% " + data.name + " on your order.</p>");
            }
        }
    });
});

function clearWaitingOverlay() {
    $("div#waiting-overlay").fadeOut();
}

function processForm(form) {
    const data = form.serialize() + "&" + $(".gifting").find("input").serialize();
    $.ajax({
        type: 'POST',
        url: form.attr("action"),
        data: data,
        dataType: "json",
        success: function(json) {
            if (json.type == "error" && json.success_url == "redirect") {
                window.top.location.replace("/checkout/basket");
            } else if (json.type == "error") {
                if (typeof reRenderWidgets != "undefined" && json.success_url == "rerender") {
                    reRenderWidgets();
                }
                clearWaitingOverlay();
                notification.show("danger", json.message);
                button.button("reset");
            } else if (json.type == "success") {
                if (json.gateway == "googlewallet") {
                    button.button("reset");
                    google.payments.inapp.buy({
                        jwt: json.data,
                        success: function() {
                            window.top.location.replace("/checkout/complete");
                        },
                        failure: function(result) {
                            error = result.response.errorType;
                            if (error != 'PURCHASE_CANCELED' && error != 'PURCHASE_CANCELLED') {
                                notification.show("danger", "Your transaction could not be completed. (Error: " + error + ")");
                            }
                        }
                    });
                } else if (json.gateway == "stripe") {
                    Stripe.setPublishableKey(json.data.key);
                    Stripe.card.createToken({
                        number: $('.card .number input').val(),
                        cvc: $('.card .cvc input').val(),
                        exp_month: $('.card .expiration .month select').val(),
                        exp_year: $('.card .expiration .year select').val(),
                        name: $(".details .name input").val(),
                        address_line1: $(".details .address1 input").val(),
                        address_line2: $(".details .address2 input").val(),
                        address_city: $(".details .city input").val(),
                        address_state: $(".details .state select, .details .state input").val(),
                        address_zip: $(".details .zip input").val(),
                        address_country: $(".details .country select").find('option:selected').text()
                    }, function(status, response) {
                        if (response.error) {
                            notification.show("danger", response.error.message);
                            button.button("reset");
                        } else {
                            token = response['id'];
                            binNumber = $(".card .number input").val().substring(0, 6);
                            length = $(".card .number input").val().length;
                            $.ajax({
                                type: 'POST',
                                url: "/checkout/stripe",
                                data: {
                                    token: token,
                                    bin: binNumber,
                                    length: length
                                },
                                dataType: "json",
                                success: function(response) {
                                    if (response.complete) {
                                        window.top.location.replace("/checkout/complete");
                                    } else {
                                        notification.show("danger", response.reason);
                                        button.button("reset");
                                    }
                                }
                            });
                        }
                    });
                } else if (json.gateway == "cashu") {
                    var cashuForm = $('<form action="https://www.cashu.com/cgi-bin/pcashu.cgi" method="post"></form>');
                    for (var key in json.data) {
                        if (json.data.hasOwnProperty(key)) {
                            cashuForm.append('<input type="hidden" name="' + key + '" value="' + json.data[key] + '" />');
                        }
                    }
                    $('body').append(cashuForm);
                    cashuForm.submit();
                } else if (json.gateway == "xsolla") {
                    $('body').append(json.data.html);
                } else {
                    window.top.location.replace(json.data);
                }
            }
        },
        error: function(data) {
            console.log(data);
            notification.show("danger", "We could not send you to the payment gateway - please refresh the page and try again.");
            button.button("reset");
        }
    });
    return false;
}
notification = new function() {
    this.show = function(type, message) {
        clearTimeout(this.timeout);
        $(".notification").empty().append('<div class="alert alert-' + type + ' alert-dismissable"></div>');
        $(".notification .alert").append('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>').append(message);
        this.clear();
    }
    this.clear = function() {
        this.timeout = window.setTimeout(function() {
            $(".alert").fadeTo(200, 0).slideUp(200, function() {
                $(this).remove();
            });
        }, 5000);
    }
}

function unserialize(serializedString) {
    var str = decodeURI(serializedString);
    var pairs = str.split('&');
    var obj = {},
        p, idx;
    for (var i = 0, n = pairs.length; i < n; i++) {
        p = pairs[i].split('=');
        idx = p[0];
        if (obj[idx] === undefined) {
            obj[idx] = unescape(p[1]).replace(/\+/g, ' ');
        } else {
            if (typeof obj[idx] == "string") {
                obj[idx] = [obj[idx]];
            }
            obj[idx].push(unescape(p[1]).replace(/\+/g, ' '));
        }
    }
    return obj;
};

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}