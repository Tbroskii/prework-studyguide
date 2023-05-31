let topics = ["HTML", "CSS", "Git", "Javascript"];
let randomTopic = topics[Math.floor(Math.random() * topics.length)];


function selectTopics() {

    if (randomTopic === "HTML"){
        console.log("Let's study Html!");
    }
    else if (randomTopic ==="CSS"){
        console.log("Let's study CSS!");
    }
    else if (randomTopic ==="Git"){
        console.log("Let's study Git!");
    }
    else if (randomTopic ==="Javascript"){
        console.log("Let's study Javascript!");
    }
    else{
        console.log("Please try again!");
    }
}


function listTopics(){
    for (let i = 0; i < topics.length;i++ )
    {   
        console.log(topics[i]);
    }
}

console.log("Here are the topics we learned through prework:");
    listTopics();

console.log("Which topic should we learn first?");
    selectTopics();