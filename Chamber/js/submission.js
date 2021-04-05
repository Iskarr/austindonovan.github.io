var queryDict = {};
location.search
  .substr(1)
  .split("&")
  .forEach(function (item) {
    queryDict[item.split("=")[0]] = item.split("=")[1];
  });

document.getElementById("write").textContent = queryDict.firstname;
document.getElementById("write2").textContent = queryDict.lastname;
