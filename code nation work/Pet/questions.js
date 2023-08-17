export let initQuestions = [
    {
        type: "list", 
        name:"type", 
        message:"what pet would you like?", 
        choices:["rabbit", "cat", "dog"],
    },
    {
        type:"input",
        name:"name", 
        message:"what the name of your pet?",
    },
]
 

export let gameQuestion= [
{
    type:"list",
    name:"action", 
    message:"what do yo want to do whit your pet",
    choices:["eat","drink","play"]

} 
]