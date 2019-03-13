//attaches event listener to the 'window' object that is triggered when the page loads 
window.addEventListener('load', function(e) { 
	// string w getElementId, which returns the element that's on your document applegrid with specified value
	var appleGrid = document.getElementById('apple-grid');
	// string w getElementId, which returns the element that's on your document apple-list with specified value
	var appleList = document.getElementById('apple-list');
	// string w getElementId, which returns the element that's on your document apple-thumbs with specified value
	var appleThumbs = document.getElementById('apple-thumbs');
	// string w querySelectorAll, which will return the element .apple in document to match specified css selectors
	var gridApples = document.querySelectorAll('.apple');

	// string w forEach method which calls a provided function once for the gridApple in an array, in order
	gridApples.forEach((gridApple, i) => {
		//attached event listener to gridApple that is triggered when clicked pickApple
		gridApple.addEventListener('click', pickApple);
	});

//function is called, return value will end up in pickapple event
	function pickApple(e) {
//string that indicates that the variable apple will return to the element that triggered the event    	
		var apple = e.target;
//string that will convert the apple datbase numbers from AppleName into a string
		var appleName = apple.dataset.apple.toString();
//string indicating in variable applelistitem will create a list 
		var appleListItem = document.createElement('li');
//variable ol will create a ordered list from appleList
		var ol = appleList.querySelector('ol');
		//append a node as the last child of a node from applelistitem
		ol.appendChild(appleListItem);
		//information will get translated to a applename
		appleListItem.innerText = appleName;
//variable will create copies of the apple, and return the clone
		var appleThumb = apple.cloneNode(true);
	//append a node as the last child of a node from applethumb
		appleThumbs.appendChild(appleThumb);

	}

});