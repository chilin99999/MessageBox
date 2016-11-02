var MessageBox = function(user_options)
{
    this.options = $.extend({
        "target": "#messageBox",
        "duration" : 3,
        "wrapper" : null,
        "side" : "right",
        "margin" : 0,
    }, user_options);

    this.$myBox = $(this.options.target);
    this.$myBox.css("display", "none");
    this.$myBox.css("position", "absolute");
}

MessageBox.prototype = {
    show: function() {
        var windowWidth = $("body").innerWidth();
        var windowHeight = $(window).innerHeight();
        var boxWidth = this.$myBox.outerWidth();
        var boxHeight = this.$myBox.outerHeight();

        /* set Absolute Top */
        this.$myBox.css("top", windowHeight - boxHeight - 20);

        /* set Absolute Left */
        if(this.options.wrapper == null) {
            this.$myBox.css("left", windowWidth - boxWidth + this.options.margin);
        }
        else {
            var $wrapper = $(this.options.wrapper);
            var wrapperWidth = $wrapper.outerWidth();

            if(this.options.side == "left")
                this.$myBox.css("left", ((windowWidth - wrapperWidth) / 2) - boxWidth - this.options.margin);
            else
                this.$myBox.css("left", wrapperWidth + ((windowWidth - wrapperWidth) / 2) + this.options.margin);
        }

        /* Box show */
        this.$myBox.fadeIn().delay(this.options.duration * 1000).fadeOut();
    },
}