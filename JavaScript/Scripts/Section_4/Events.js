var oneGlobal = oneGlobal || {};
oneGlobal.TextModifier = (function () {
    var sizeTextBoxModifierHandler = function (event) {
        sizeModifier($(this).val());
    },
    sizeRangeModifierHandler = function (event) {
        sizeModifier($(this).val());
    },
    sizeModifier = function (newSize) {
        $("[data-size_modified]").removeClass();
        $("[data-size_modified]").addClass("size-" + newSize);
    };

    $(function () {
        $('[data-size_modifier_textbox]').change(sizeTextBoxModifierHandler);
        $('[data-size_modifier_range]').change(sizeRangeModifierHandler);
    });
}());