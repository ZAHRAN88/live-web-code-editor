window.onload = function() {
    const htmlCode = document.getElementById('htmlCode');
    const cssCode = document.getElementById('cssCode');
    const jsCode = document.getElementById('jsCode');
    
    /* ==================================== Load code from localStorage if available  ============================================== */
    const savedHtmlCode = localStorage.getItem('savedHtmlCode');
    const savedCssCode = localStorage.getItem('savedCssCode');
    const savedJsCode = localStorage.getItem('savedJsCode');
    if (savedHtmlCode) {
      htmlCode.value = savedHtmlCode;
    }
    if (savedCssCode) {
      cssCode.value = savedCssCode;
    }
    if (savedJsCode) {
      jsCode.value = savedJsCode;
    }
    
    /*=============================== Save code to localStorage on change  =====================================  */ 
    htmlCode.addEventListener('input', saveCode);
    cssCode.addEventListener('input', saveCode);
    jsCode.addEventListener('input', saveCode);
    
    function saveCode() {
      localStorage.setItem('savedHtmlCode', htmlCode.value);
      localStorage.setItem('savedCssCode', cssCode.value);
      localStorage.setItem('savedJsCode', jsCode.value);
    }
    
    /* ====================================  Run code  ============================================== */    
    showPreview();
  }
  
  function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = "<style>" + document.getElementById("cssCode").value + "</style>";
    var jsCode = "<script>" + document.getElementById("jsCode").value + "</script>";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode + cssCode + jsCode);
    frame.close();
  }