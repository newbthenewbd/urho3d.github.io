//
// Copyright (c) 2008-2015 the Urho3D project.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$(document).ready(function() {
  // Bust Travis CI build status image cache
  $('.build-status img').each(function() {
    var $this = $(this);
    $this.attr('src', $this.attr('src') + '?v=' + Math.random());
  });

  // Read last user selected document group from cookie and adjust the documentation link
  var documentGroup = Cookies.get('documentGroup');
  if (documentGroup) {
    var $documentationLink = $('nav a[href*="/documentation/"]');
    $documentationLink.attr('href', $documentationLink.attr('href').replace(/\/documentation\/.+?\//, '/documentation/' + documentGroup + '/'));
  }

  // Read last user selected theme, default to light theme
  var theme = Cookies.get('theme');
  if (!theme) theme = 'light';
  // Enable theme switcher functionality when only Javascript is enabled
  var $themeSwitcher = $('#theme-switcher');
  $themeSwitcher.removeClass('hidden');
  var $topElem, filter;
  if (/(chrom(e|ium)|applewebkit)/.test(navigator.userAgent.toLowerCase())) {
    $topElem = $('html');
    filter = '-webkit-filter';
    // Webkit requires flicker workaround (see js/webkit-flicker-fix.js), so need to revert the original bg color back before inverting
    $('body').css('background-color', 'white');
  } else {
    $topElem = $('body');
    filter = 'filter';
  }
  $('input', $themeSwitcher).each(function(i, elem) {
    var $elem = $(elem);
    var id = $elem.attr('id');
    $elem.change(function() {
      var enable = id === 'dark';
      // Store current user selected theme to cookie before applying the filter for the selected theme
      Cookies.set('theme', id, {expires: 365});
      // Firefox does not invert body's background color as Webkit does, so workaround it
      if (filter === 'filter') $topElem.css('background-color', enable ? '#131313' : 'white');
      // Invert luminance for top-level element which should be inherited by all the descendant elements
      $topElem.css(filter, enable ? 'invert(100%) hue-rotate(180deg) brightness(105%) contrast(85%)' : 'none');
      // Revert luminance just for image and embedded iframe usually used for youtube videos
      $('img, .embed-responsive > iframe').css(filter, enable ? 'contrast(95%) brightness(95%) hue-rotate(180deg) invert(100%)' : 'none');
    });
    // Apply the filter now if neccessary by toggling the button and causing the change event to fire
    if (id === theme) {
      $elem.parent().button('toggle');
    }
  });

  // Ensure the filler fills the full window height
  $(window).resize(function($filler, $main, $body, $window) {
    return function() {
      $filler.css('height', $window.height() - $main.height() - $body.outerHeight() + $body.height());
    };
  }($('#theme_filter_fix'), $('main'), $('body'), $(window)))
    .trigger('resize');
});
