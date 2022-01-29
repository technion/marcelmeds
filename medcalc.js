window.addEventListener("load", () => {
  const datenode = document.getElementById("nowdate"); 
  const mednode = document.getElementById("nowmeds"); 
  const date = new Date();
  datenode.innerText = date.toLocaleDateString("en-AU");

  const yearday = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  if(yearday%2) {
      mednode.innerText = "5mg Prednisone";
  } else {
    mednode.innerText = "I have a day off and no meds today!";
  }
});
