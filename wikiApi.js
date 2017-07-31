// https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json
// https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=jefferson

// based on user search

$.ajax({
  // url: 'https://en.wikipedia.org/w/api.php',
  // url: 'https://en.wikipedia.org/w/api.php',
  url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=jefferson',
  // data: { action: 'query', list: 'search', srsearch: 'Richard Feynman', format: 'json' },
  // data: { format: 'json', action: 'query', generator: 'search', gsrnamespace: 0, gsrlimit: 10, prop: 'pageimages|extracts', pilimit: 'max', exsentences: 1, exlimit: 'max', gsrsearch: 'jefferson'},
  dataType: 'jsonp',
  success: function (response) {
  	console.log(response);
  	var data = response.query.pages;

	for (var key in data) {
	  if (data.hasOwnProperty(key)) {
	    // alert(key); // '16134'
	    console.log(data[key].title); // 'jefferson'
	    var urlTitle = data[key].title;
	    urlTitle = urlTitle.replace(/ /g,"_");
	    console.log('https://en.wikipedia.org/wiki/' + urlTitle); // 'jefferson'
	    // or 
	    console.log('https://en.wikipedia.org/?curid=' + data[key].pageid); // 'jefferson'

	    if ( data[key].hasOwnProperty('thumbnail')) { // 'url' may not exist need to check
	    	console.log(data[key].thumbnail.source); // this is an image
	    } else {
	    	console.log('no URL for this one')
	    }
	  }
	}  

  }
});


// random generator
console.log('https://en.wikipedia.org/wiki/Special:Random');




// google coors error. fine on safari
/*
$.ajax({
  // url: 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json',
  url: 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json',
  method: "GET"
}).done(function(response) {
  console.log(response);
});
*/