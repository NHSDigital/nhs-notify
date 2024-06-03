function fullScreen() {
  var standard = "Standard";
  var fullScreen = "FullScreen";
  var buttonName = "fullScreenButton";
  var storageName = "cb-checked";

  var currentStatus = "";
  var newStatus = "";

  var buttons = document.getElementsByName(buttonName);
  var sideBar = document.getElementsByClassName("side-bar")[0];
  var main = document.getElementsByClassName("main")[0];
  var pageInfo = document.getElementsByClassName("page-info")[0];

  currentStatus = localStorage.getItem(storageName);

  if (
    currentStatus == "false" ||
    currentStatus == "undefined" ||
    currentStatus == null
  ) {
    currentStatus = standard;
    newStatus = fullScreen;
  }

  if (currentStatus == standard) {
    newStatus = fullScreen;
  } else {
    newStatus = standard;
  }

  localStorage.setItem(storageName, newStatus);

  if (newStatus == fullScreen) {
    sideBar.style.display = "none";
    main.style.maxWidth = "100%";
    main.style.marginLeft = "0px";
    pageInfo.style.display = "none";
  } else {
    sideBar.style.display = "";
    main.style.maxWidth = "";
    main.style.marginLeft = "";
    pageInfo.style.display = "";
  }

  buttons.forEach((item) => {
    item.textContent = currentStatus + " View";
  });
}
