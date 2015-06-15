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

$(document).ready(function() {
  // Documentation page must have a document switcher
  var $documentSwitcher = $('#document-switcher');
  // Verify the links in the document switcher
  $('+ .dropdown-menu [href]', $documentSwitcher).each(function(i, elem) {
    // Store current user selected document group to cookie
    $(elem).parent().on('click', function() { Cookies.set('documentGroup', $(elem).text(), {expires: 365}); });
    // i == 0 is /HEAD/
    // Page is new when only exists in /HEAD/
    // Page is deprecated when not exists in /HEAD/ anymore
    $.ajax({ url: elem, type: 'HEAD', async: false, statusCode: {
      200: function() {
        $documentSwitcher.data('new', i == 0);
      },
      404: function() {
        // In any case, disable the list item when the link it contained does not exist in server
        $(elem).removeAttr('href').parent().addClass("disabled");
        if (i == 0) $documentSwitcher.addClass('deprecated-page');
      }
    }});
  });
  if ($documentSwitcher.data('new')) $documentSwitcher.addClass('new-page');

  // Inject font-awesome icons to top navigation, hide the navigation text on really really small viewport
  $('.tablist [href]').each(function(i, elem) {
    var icon;
    if (/index\.html$/.test(elem)) icon = '<i class="fa fa-home fa-lg"></i>&nbsp;';
    else if (/pages\.html$/.test(elem)) icon = '<i class="fa fa-file"></i>&nbsp;';
    else if (/modules\.html$/.test(elem)) icon = '<i class="fa fa-puzzle-piece"></i>&nbsp;';
    else if (/namespaces\.html$/.test(elem)) icon = '<i class="fa fa-tags"></i>&nbsp;';
    else if (/namespacemembers\.html$/.test(elem)) icon = '<i class="fa fa-tag"></i>&nbsp;';
    else if (/annotated\.html$/.test(elem)) icon = '<i class="fa fa-cube"></i>&nbsp;';
    else if (/classes\.html$/.test(elem)) icon = '<i class="fa fa-th"></i>&nbsp;';
    else if (/inherits\.html$/.test(elem)) icon = '<i class="fa fa-sitemap"></i>&nbsp;';
    else if (/functions\.html$/.test(elem)) icon = '<i class="fa fa-th-list"></i>&nbsp;';
    else if (/files\.html$/.test(elem)) icon = '<i class="fa fa-code"></i>&nbsp;';
    else if (/globals\.html$/.test(elem)) icon = '<i class="fa fa-globe"></i>&nbsp;';
    else if (/_func\.html$/.test(elem)) icon = '<i class="fa fa-bars"></i>&nbsp;';
    else if (/_vars\.html$/.test(elem)) icon = '<i class="fa fa-dot-circle-o"></i>&nbsp;';
    else if (/_type\.html$/.test(elem)) icon = '<i class="fa fa-circle-o"></i>&nbsp;';
    else if (/_enum\.html$/.test(elem)) icon = '<i class="fa fa-plus-square-o"></i>&nbsp;';
    else if (/_eval\.html$/.test(elem)) icon = '<i class="fa fa-square-o"></i>&nbsp;';
    else if (/_prop\.html$/.test(elem)) icon = '<i class="fa fa-cog"></i>&nbsp;';
    else if (/_rela\.html$/.test(elem)) icon = '<i class="fa fa-link"></i>&nbsp;';
    if (icon) $(elem).prepend(icon).find('span').addClass('hidden-xxs');
  });

  // Inject responsive behaviour to tables and embedded SVGs
  $('.contents table').wrap('<div class="table-responsive"></div>');
  // Use medium version for build options
  if (/_building\.html$/.test(window.location.href)) $('.table-responsive').removeClass('table-responsive').addClass('table-responsive-md');
  // Use large version for graphical class hierarchy list and class member list
  if (/(inherits|-members)\.html$/.test(window.location.href)) $('.table-responsive').removeClass('table-responsive').addClass('table-responsive-lg');
  $('.zoom').addClass('embed-responsive embed-responsive-16by9');

  // Inject dropdown class to summary links
  $('.summary')
    .addClass('dropdown pull-right')
    .html(function() {
      return $(this).html().replace(/\|/g, '');
    })
    .prepend('<button class="btn btn-default btn-xs dropdown-toggle" type="button" id="class-summary" data-toggle="dropdown">Summary <span class="caret"></span></button>')
    .find('a')
      .wrapAll('<ul class="dropdown-menu" role="menu" aria-labelledby="class-summary"></ul>')
      .wrap('<li role="presentation"></li>')
      .attr('role', 'menuitem').attr('tabindex', '-1');

  // Bug fix for WebKit - additional 56px due to WebKit bug not taking the img width into consideration and causing overall td width not wide enough for the text
  if (/(chrom(e|ium)|applewebkit)/.test(navigator.userAgent.toLowerCase())) $('.directory td.entry').css('padding-right', '62px'); // 6 + 56
});
