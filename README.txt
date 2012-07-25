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
@date: 2012-7-23

1. enable adding callback for content options, so you can use tipTip like:

    $('a').tipTip({content: function($el, opts) { return somefn($el, opts); } });

2. using delegate to register events for future elements: 

    $('div').tipTip({delegate:true, delegateSelector:'a'}); // it will create tipTip on the 'a' elements in 'div'