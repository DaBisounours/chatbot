/* Returns if the text has a question mark */
function isQuestion(text) {
    return text.indexOf("?") >= 0;
}

/* Parse the text and return a vector with corresponding words */
function parseText(text, keywords) {
    /* Create the vector */
    var validityArray = [];
    for (keyword in keywords) {
        validityArray.push(0);
    }

    /* Split words */
    var words = text.split(" ");

    /* for each of the words */
    for (var i = 0; i< words.length; i++) {
        var word = words[i];
        console.debug("processing word : " + word);
        if (word.length <= 1) continue;

        /* Set everything in lowercase*/
        var w = word.toLowerCase();

        /* Get rid of question marks */
        while (w.indexOf("?") !== -1) {
            w = w.substring(0, w.length - 1);
        }
        console.debug("got rid of ? : " + w);
        /* Get rid of points */
        while (w.indexOf(".") !== -1) {
            w = w.substring(0, w.length - 1);
        }
        console.debug("got rid of . : " + w);
        /* Get rid of commas */
        while (w.indexOf(",") !== -1) {
            w = w.substring(0, w.length - 1);
        }
        console.debug("got rid of , : " + w);
        /* We search if it corresponds to a keyword */
        var index = -1;
        var found = false;
        for(var j = 0; j < keywords.length; j++){
            var keyword = keywords[j].split(',');
            console.debug("keyword : " + keyword);
            for (var k = 0; k < keyword.length; k++){
                finalkw = keyword[k];
                /* Remove parenthesis for now */
                if (finalkw[0] === "(") {
                    finalkw = finalkw.substring(1, finalkw.length - 1);
                }
                console.debug("final keyword : " + finalkw);
                if (finalkw === w) {
                    index = j;
                    found = true;
                    break;
                }
                if (found) break;
            }
        }

        console.debug("index in keywords : " + index);

        /* If it exists we set the value to one */
        if (index !== -1) {
            validityArray[index] = 1;
        }
    }
    console.debug("validity array : " + validityArray);
    return validityArray;
}
