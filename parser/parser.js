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
        /* We remove question marks and set everything in lowercase*/
        var w = word.toLowerCase();
        while (w.indexOf("?") !== -1) {
            w.remove(word.indexOf("?"));
        }

        /* We search if it corresponds to a keyword */
        var index = -1;
        for(var j = 0; j < keywords.length; j++){

            var keyword = keywords[j];
            console.debug("keyword : " + keyword);
            if (keyword === w) {
                index = j;
                break;
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

