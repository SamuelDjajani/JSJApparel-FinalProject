const dataFile = "people.json";
let a = true;

let counter = 5;
let people = [
  {
    id: "1",
    userName: "Whitemon",
    comment: "Is Blue PA Hoodie ready?",
  },
  {
    id: "2",
    userName: "Topson",
    comment: "Do you accept orders during corona time?",
  },
  {
    id: "3",
    userName: "Anonim",
    comment: "Is G O D-C A P ready?",
  },
  {
    id: "4",
    userName: "BananaUyu",
    comment: "Is there an offline store?",
  },
  {
    id: "5",
    userName: "InYourDream",
    comment: "What material is it made of?",
  },
];



const getData = (i) => {
  var mainContainer = document.getElementById("commentData");
  for (i ; i < people.length; i++) {
    var commentSection = document.createElement("div");
    commentSection.className = "commentSection";
    commentSection.id = people[i].id;

    var commentBox = document.createElement("div");
    commentBox.className = "commentBox";

    var commentName = document.createElement("div");
    commentName.className = "commentName";
    commentName.innerHTML = people[i].userName;
    commentBox.appendChild(commentName);

    var commentLine = document.createElement("hr");
    commentLine.className = "commentLine";
    commentBox.appendChild(commentLine);

    var commentBody = document.createElement("div");
    commentBody.className = "commentBody";
    var commentBodyText = document.createElement("span")
    commentBodyText.innerHTML = people[i].comment;
    commentBody.appendChild(commentBodyText)
    commentBox.appendChild(commentBody);

    commentSection.appendChild(commentBox);

    mainContainer.appendChild(commentSection);
  }
};

const addData = () => {

  let valid = true

  let userName = document.getElementById("username").value;
  let comment = document.getElementById("comment").value;

  if (userName.trim() === "" || comment.trim() === "") {
    alert("input cannot be empty!")
    return
  }

  if (userName.trim().length > 50) {
    alert("username should be less than 50 characters!")
    valid = false
  }

  if (comment.trim().length > 256) {
    alert("comment should be less than 256 characters!")
    valid = false
  }

  if (valid) {
    counter++;
  let commentModel = {
    id: counter.toString(),
    userName: userName,
    comment: comment
  };

  
  people.push(commentModel);
  clearInput()
  getData(counter-1);
  }
  
};

const clearInput = () => {
  document.getElementById("username").value = "";
  document.getElementById("comment").value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("button").addEventListener("click", addData);
});
