// Import user's bookmarks and sort the by category

// chrome.bookmarks.search({query: ''}, function(bookmarks) {
//     for (var i = 0; i < bookmarks.length; i++) {
//       var bookmark = bookmarks[i];
//       // do somet
//       var newListItem = document.createElement("a");

//     }
//   });
// retrieve bookmarks with the "section1" tag
chrome.bookmarks.search({ tags: ["section1"] }, function(bookmarks) {
    var section1 = document.getElementById("section1");
  
    bookmarks.forEach(function(bookmark) {
      // create a new link element for each bookmark
      var link = document.createElement("a");
      link.href = bookmark.url;
      link.textContent = bookmark.title;
  
      // append the link to the section
      section1.appendChild(link);
    });
  });
  
  // repeat the above steps for the other sections (section2 and section3)
  
  