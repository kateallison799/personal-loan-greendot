(function(){window.CQ=window.CQ||{};
window.CQ.CoreComponents=window.CQ.CoreComponents||{};
window.CQ.CoreComponents.container=window.CQ.CoreComponents.container||{};
window.CQ.CoreComponents.container.utils={};
window.CQ.CoreComponents.container.utils={getDeepLinkItemIdx:function(b,e){if(window.location.hash){var a=window.location.hash.substring(1);
if(document.getElementById(a)&&a&&b&&b._config&&b._config.element&&b._config.element.id&&b._elements&&b._elements[e]&&a.indexOf(b._config.element.id+"-item-")===0){for(var c=0;
c<b._elements[e].length;
c++){var d=b._elements[e][c];
if(d.id===a){return c
}}}return -1
}},getDeepLinkItem:function(b,c){var a=window.CQ.CoreComponents.container.utils.getDeepLinkItemIdx(b,c);
if(b&&b._elements&&b._elements[c]){return b._elements[c][a]
}},scrollToAnchor:function(){setTimeout(function(){if(window.location.hash){var b=decodeURIComponent(window.location.hash.substring(1));
var a=document.getElementById(b);
if(a&&a.offsetTop){a.scrollIntoView()
}}},100)
}}
}());