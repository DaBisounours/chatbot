// build the binary mask for each couple (keywords - answer)
function teach(net) {
	readyDataset = []

	for (var i=0; i < dataset.length; i++) {
		var lkeywords = dataset[i].slice(0, -1)
		var lanswer = dataset[i][dataset[i].length-1]
		
		// create the keywords and answers mask
		var keywordsMask = new Array(keywords.length).fill(0)
		var answersMask = new Array(answers.length).fill(0)

		for (key in lkeywords) {
			keywordsMask[lkeywords[key]] = 1;
		}

		answersMask[lanswer] = 1;
	

		// push the training data in the trainingDatasetVariable
		readyDataset.push(
			{
				input: keywordsMask,
				output: answersMask
			}
		);
	}


	// build the trainer
	console.log(readyDataset)
	var trainer = new synaptic.Trainer(net);
	trainer.train(readyDataset, {
		rate: 0.05,
		iterations: 50000,
		shuffle: false
	});
}


function activate(net, inputData) {
	var prediction = net.activate(inputData);
	console.log(prediction)
	selection = Math.max.apply(Math, prediction)

	for (var i = 0; i < answers.length; i++) {
		if (selection == prediction[i]) {
			console.log(answers[i])
			return answers[i]
		}
	}

}


function createNN(inputLength, outputLength) {
	// build the network
	var chatNN = new synaptic.Architect.Perceptron(
		inputLength,	// input layer
		15, // hidden 1			// need some tunning
		outputLength	// output layer
	);

	return chatNN;
}