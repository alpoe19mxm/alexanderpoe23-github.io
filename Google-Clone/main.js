const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter") {
        search();
    }
});


function search(){
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&sxsrf=APq-WBuhxqt01eA46_hwjs1Yl-9eG1J2dA%3A1644731004064&ei=fJoIYvbDA8eo1e8P0cKa2Ac&ved=0ahUKEwj28f25_Pv1AhVHVPUHHVGhBnsQ4dUDCA4&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyCgguELEDEIMBEEMyBAgAEEMyBQguEIAEMgUILhCABDIICC4QgAQQ1AIyBQgAEIAEMggILhCABBDUAjIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQsAMQJzoHCAAQRxCwAzoKCAAQRxCwAxDJAzoKCC4Q1AIQsAMQQzoHCAAQsAMQQzoKCAAQ5AIQsAMYADoPCC4Q1AIQyAMQsAMQQxgBOgwILhDIAxCwAxBDGAE6BAgjECc6CggAELEDEIMBEEM6CwgAEIAEELEDEIMBOhEILhCABBCxAxCDARDHARDRAzoKCC4QxwEQowIQQzoECC4QQ0oECEEYAEoECEYYAVC8DFiSGGDjGGgEcAF4AIABeYgBvAOSAQMwLjSYAQCgAQHIARPAAQHaAQYIABABGAnaAQYIARABGAg&sclient=gws-wiz"
}