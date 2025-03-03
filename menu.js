showMenu = function() {
  var subMenuItems = document.getElementById("topMenu").getElementsByTagName("li");
  for (var i=0; i<subMenuItems.length; i++) {
    subMenuItems[i].onmouseover=function() {
      this.className+=" showMenu";
    }
    subMenuItems[i].onmouseout=function() {
      this.className=this.className.replace(new RegExp(" showMenu\\b"), "");
    }
  }
}
	
if (window.attachEvent) window.attachEvent("onload", showMenu);