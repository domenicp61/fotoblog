
/*
 ** simple javascript function to open the navigational side bar menu
 */
function open_navSideBar() {
  const sideBarWidth = "20%";
  document.getElementById("MainContentId").style.marginLeft = sideBarWidth;
  document.getElementById("menuSideBarId").style.width = sideBarWidth;
  document.getElementById("menuSideBarId").style.display = "block";
  document.getElementById("openNavId").style.display = "none";
}
/*
 ** simple javascript function to close the navigational side bar menu
 */
function close_navSideBar() {
  document.getElementById("MainContentId").style.marginLeft = "0%";
  document.getElementById("menuSideBarId").style.display = "none";
  document.getElementById("openNavId").style.display = "inline-block";
}
