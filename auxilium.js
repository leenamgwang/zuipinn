function sounyuu(hozyo) {
    let tuika;
    let rann = document.getElementById("nyuuryokubunn");
    let syutoku = rann.value;
    if (hozyo == "ng" || hozyo == "schwa") {
        switch (hozyo) {
            case "ng":
                tuika = "ŋ";
                break;
            case "schwa":
                tuika = "ə";
                break;
        }
    } else {
        let lastletter = syutoku.slice(-1);
        lastletter = lastletter.toLowerCase();
        switch (hozyo) {
            case "aigu":
                switch (lastletter) {
                    case "a":
                        tuika = String.fromCodePoint(0x00E1);
                        break;
                    case "e":
                        tuika = String.fromCodePoint(0x00E9);
                        break;
                    case "i":
                        tuika = String.fromCodePoint(0x00ED);
                        break;
                    case "o":
                        tuika = String.fromCodePoint(0x00F3);
                        break;
                    case "u":
                        tuika = String.fromCodePoint(0x00FA);
                        break;
                    case "y":
                        tuika = String.fromCodePoint(0x00FD);
                        break;
                    case "ə":
                        tuika = "ə̀";
                        break;
                    default:
                        tuika = lastletter;
                        break;
                }
                break;
            case "circonflexe":
                switch (lastletter) {
                    case "a":
                        tuika = String.fromCodePoint(0x00E2);
                        break;
                    case "e":
                        tuika = String.fromCodePoint(0x00EA);
                        break;
                    case "i":
                        tuika = String.fromCodePoint(0x00EE);
                        break;
                    case "o":
                        tuika = String.fromCodePoint(0x00F4);
                        break;
                    case "u":
                        tuika = String.fromCodePoint(0x00FB);
                        break;
                    case "y":
                        tuika = String.fromCodePoint(0x0177);
                        break;
                    case "ə":
                        tuika = "ə̂";
                        break;
                    default:
                        tuika = lastletter;
                        break;
                }
                break;
        }
        syutoku = syutoku.substr(0, syutoku.length - 1);
    }
    syutoku += tuika;
    rann.value = syutoku;
    rann.focus();
}