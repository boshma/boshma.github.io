/*************************************************************************
 * File: searchButton.js
 * These functions support interaction with the search button
 ************************************************************************/

/*************************************************************************
 * @function searchBtn click handler
 * @desc 
 * When the user clicks the search button, open or close the search bar
 * based on current search bar state.
 *************************************************************************/
 document.getElementById("searchBtn")
   .addEventListener("click", function (e) {

    if (!document.getElementById("searchBarr").classList.contains("searchBar-Open")) {
      document.getElementById("searchBarr").classList.add("searchBar-Open");
      document.getElementById("searchBarr").focus();
  } else { //CLOSE MENU
    document.getElementById("searchBarr").classList.remove("searchBar-Open");
  }

  });
    



 



