/* global VBET5 */
/**
 * @ngdoc directive
 * @name vbet5.directive:tshirt
 *
 * @description Draws SVG t-shirt
 *
 * @param {string} shirt shirt color
 * @param {string} shorts shorts color
 * @param {string} sleeve sleeve color
 * @param {string} collar collar color
 * @param {string} outline outline color
 */
VBET5.directive('tshirt', function () {
    'use strict';

    return {
        restrict: 'E',
        replace: true,
        scope: {
            sleeve: '@sleeve',
            collar: '@collar',
            shirt: '@shirt',
            shorts: '@shorts',
            outline: '@outline'
        },
        /*jshint multistr: true */
        template: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 19 19" enable-background="new 0 0 19 19" xml:space="preserve">' +
            '<g>' +
            '<path fill="#{{ shirt }}" d="M12.307,0.451C11.162,2.52,9.486,2.455,9.486,2.455l0,0c-0.221,0.001-1.76-0.06-2.79-2.004c0,0-2.877,0.468-4.977,3.332 l2.722,1.692v6.274h5.045h0.03h5.046V5.475l2.72-1.692C15.184,0.919,12.307,0.451,12.307,0.451z"/> ' +
            '    <path fill="#{{ outline ? outline: \'000\'}}" d="M14.688,11.874H4.317v-6.33L1.539,3.817l0.08-0.108c2.106-2.872,5.028-3.376,5.058-3.381l0.088-0.014 l0.042,0.079C7.784,2.237,9.206,2.33,9.481,2.33c0,0,0,0,0.001,0c0.192,0,1.674-0.058,2.713-1.94l0.044-0.077l0.087,0.014 c0.029,0.005,2.951,0.51,5.057,3.381l0.08,0.108l-2.775,1.727V11.874z M4.567,11.624h9.871V5.405l2.664-1.657 c-1.834-2.424-4.252-3.053-4.73-3.157C11.261,2.523,9.682,2.58,9.503,2.58c-0.318,0-1.83-0.097-2.873-1.989 C6.147,0.696,3.734,1.326,1.901,3.748l2.666,1.657V11.624z"/> ' +
            '</g>' +
            '<g>' +
            '    <path fill="#{{ sleeve ? sleeve : shirt }}"  d="M3.976,6.412L3.429,7.427L0.25,5.397c0.389-0.495,0.791-0.874,0.791-0.874L3.976,6.412z"/> ' +
            '    <path fill="#{{ outline ? outline: \'000\'}}" d="M3.476,7.605l-3.41-2.176L0.152,5.32c0.39-0.497,0.786-0.872,0.803-0.887l0.071-0.067l3.115,2.003 L3.476,7.605z M0.435,5.367L3.383,7.25l0.428-0.795L1.057,4.683C0.939,4.799,0.69,5.054,0.435,5.367z"/> ' +
            '</g>' +
            '<g>' +
            '    <path fill="#{{ sleeve ? sleeve : shirt }}"  d="M15.023,6.412l0.547,1.016l3.18-2.03c-0.389-0.495-0.791-0.874-0.791-0.874L15.023,6.412z"/>' +
            '    <path fill="#{{ outline ? outline: \'000\'}}" d="M15.523,7.605l-0.664-1.236l3.113-2.003l0.071,0.067c0.017,0.016,0.413,0.39,0.804,0.887l0.086,0.108 L15.523,7.605z M15.189,6.454l0.427,0.795l2.948-1.882c-0.254-0.313-0.504-0.568-0.621-0.685L15.189,6.454z"/>' +
            '</g>' +
            '<g>' +
            '    <path fill="#{{ collar ? collar: shirt }}"  d="M11.199,0.255H7.733c0,0,0.471,1.251,1.726,1.262v0.001c0.001,0,0.003,0,0.007,0c0.002,0,0.003,0,0.007,0V1.517 C10.729,1.506,11.199,0.255,11.199,0.255z"/>' +
            '    <path fill="#{{ outline ? outline: \'000\'}}" d="M9.473,1.643L9.34,1.637C8.102,1.552,7.62,0.312,7.615,0.299L7.552,0.13h3.828l-0.063,0.169 c-0.004,0.013-0.484,1.249-1.718,1.338v0.005L9.473,1.643z M7.929,0.38C8.101,0.706,8.566,1.384,9.46,1.392h0.012 c0.894-0.008,1.359-0.686,1.531-1.012H7.929z"/>' +
            '</g>' +
            '<g>' +
            '    <polygon fill="#{{ shorts }}" points="4.462,12.727 14.578,12.727 15.773,17.707 10.459,18.755 9.521,16.092 8.583,18.755 3.266,17.707 "/>' +
            '    <path fill="#{{ outline ? outline: \'000\'}}" d="M10.377,18.898l-0.856-2.432l-0.855,2.432L8.56,18.877l-5.445-1.072l1.25-5.203h10.313l0.022,0.096 l1.228,5.107L10.377,18.898z M3.417,17.609L8.5,18.611l1.02-2.896l1.021,2.896l5.081-1.002l-1.144-4.758H4.561L3.417,17.609z"/> ' +
            '</g>' +
            '</svg>'
    };
});
