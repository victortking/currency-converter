function converter() {
    var fomula = Number(document.getElementById("usd").value) * 745;
    console.log(fomula)


    document.getElementById("convert").innerText = fomula
    return fomula
}