function copyInfo() {
    /* Get the text field */
    var copyText = "brettsalyer#3205"
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }