
function loginUser (username) {
    le._path.home = "/a/users/" + username + "/";
    le._path.desktop = "/a/users/" + username + "/desktop/";
    le._settings = $store.get("users/" + username + "/settings.json");
    $explorer.refresh();
}
function createUser (username) {
  localStorage.setItem("users/"+username+"/settings.json", localStorage["settings.json"]);
  localStorage.setItem("users/"+username+"/desktop/welcome.txt", "This is the desktop for your user, whatever you put into here will only be for this user");
  localStorage.setItem("users/"+username+"/documents/welcome.txt", "This is the documents folder for your user, it's only yours and you can store lots of documents in here");
  localStorage.setItem("users/"+username+"/images/welcome_to_the_imagery.txt", "This is the images folder for your user, no one else can see it (unless they dig into /a/), feel free to put your images in here");
}
/* 
  How to use this:
    createUser("hello");
        ==> Creates an user named "hello".
    loginUser("hello");
        ==> Logs the user "hello" in.
*/
