function myFunction() {
// Declare variables
var input, filter, section, div, a, i, section2, list;
input = document.getElementById('myInput');
filter = input.value.toUpperCase();
section = document.getElementById("myRecipes");
div = section.getElementsByTagName('div');
section2 = document.getElementById("recipe");
list = document.getElementById("list");



// Loop through all list items, and hide those who don't match the search query
for (i = 0; i < div.length; i++) {
		a = div[i].getElementsByTagName('a')[0];

		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
				div[i].style.display = "";
		} else {
				div[i].style.display = "none";
		}


}
}
