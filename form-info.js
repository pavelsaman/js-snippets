(function() {

  var forms = document.querySelectorAll("form");

  for (var i = 0, len = forms.length; i < len; i++) {
    var tab = [ ];

    console.group("HTMLForm " + forms[i].action);
    console.log("Element:", forms[i],
        "\nName:    " + forms[i].name
        + "\nId:      " + forms[i].id
        + "\nClass:   " + forms[i].className
        + "\nMethod:  " + forms[i].method.toUpperCase()
        + "\nAction:  " + forms[i].action || "null"
    );

    ["input", "textarea", "select"].forEach(function (control) {
      [].forEach.call(forms[i].querySelectorAll(control), function (node) {
        tab.push({
          "Element": node,
          "Type": node.type,
          "Id": node.id,                  
          "Name": node.name,
          "Value": node.value          
        });
      });
    });

    console.table(tab);
    console.groupEnd();
  }
})();
