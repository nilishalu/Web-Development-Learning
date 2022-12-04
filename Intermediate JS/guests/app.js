var guestsList = ["Shilpa", "Sagari", "Megha", "Sandhya", "Bhoomika"];
var guestName = prompt("Please enter your name!");

if (guestsList.includes(guestName)) {
    alert("Welcome! enjoy the party")
}
else {
    alert("Oops!, sorry your name is not in the list. Please check if your name is correct.")
}