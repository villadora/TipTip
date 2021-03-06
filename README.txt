TipTip

Copyright 2010 Drew Wilson

http://www.drewwilson.com
http://code.drewwilson.com/entry/tiptip-jquery-plugin

Version 1.3   -   Updated: Mar. 23, 2010

This Plug-In will create a custom tooltip to replace the default
browser tooltip. It is extremely lightweight and very smart in
that it detects the edges of the browser window and will make sure
the tooltip stays within the current window size. As a result the
tooltip will adjust itself to be displayed above, below, to the left 
or to the right depending on what is necessary to stay within the
browser window. It is completely customizable as well via CSS.

This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html

---

Improvements & Changes:

@author: villadora
@date: 2012-9-22

1. enable adding callback for content options, so you can use tipTip like:

    $('a').tipTip({content: function($el, opts) { return somefn($el, opts); } });

2. 'keepAlive' is not correct in IE, because when tipTip_holder has a transparent background, IE will trigger mouseleave event even when the mouse is over the elements.

3. fix rgba bug in IE, which cause the empty background for tip container, described http://css-tricks.com/ie-background-rgb-bug/

4.  add 'aliveDelay' property, sometimes the pop tips will last forever until user moves mouse over it again. with 'aliveDelay' the pop tips will disappear automatically after time set in 'aliveDelay'.