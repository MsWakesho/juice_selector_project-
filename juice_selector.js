function displaySelection(){
    let dropdown = document.getElementById("juiceDropdown");
    let selectedOptions= Array.from(dropdown.selectedOptions).map(option => option.text);

    if (selectedOptions.length === 0) {
        document.getElementById("selectedJuice").innerText = "Please select at least one flavor.";
      } else if (selectedOptions.length === 1) {
        var totalPrice = parseFloat(dropdown.options[dropdown.selectedIndex].getAttribute("data-price"));
        document.getElementById("selectedJuice").innerText = "Your order for " + selectedOptions[0] + " has been placed successfully. Please Pay Kshs." + totalPrice.toFixed(2)  ;
      } else {
        var totalPrice = selectedOptions.reduce((acc, flavor) => {
          return acc + parseFloat(dropdown.options[Array.from(dropdown.options).findIndex(option => option.text === flavor)].getAttribute("data-price"));
        }, 0);
        document.getElementById("selectedJuice").innerText = "Your order for " + selectedOptions.join(", ") + " has been placed successfully. Please Pay Kshs." + totalPrice.toFixed(2)  ;
    }
}    