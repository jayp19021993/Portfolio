import inquirer from "inquirer"

import { initQuestions, gameQuestion } from "./questions.js"
import { rabbit, cat, dog } from "./classes.js"

    let myPet
    let ui =new inquirer.ui.BottomBar() 

    const init = async () => {
    
    let response = await inquirer.prompt(initQuestions) 

    if (response.type === "rabbit") {
        myPet= new rabbit(response.name)
    } else if (response.type === "cat"){
        myPet = new cat (response.name)
    } else {
        myPet = new dog(respones.name)
    }
    ui.log. write(
        `${myPet}| hunger: ${myPet.hunger}| thirst: ${myPet.hunger} | energy:${myPet.energy}`
    )
    
    gameLoop()
} 


const gameloop= async () =>{
    try {
        if (myPet.energy >=200){
        console.log("game ove the pet has no more energy")
        }  

    myPet.time()

    let response = await inquirer.prompt(gameQuestion) 

    if (response.action === "eat") {
        myPet.eat()
    } else if (response.action === "drink"){
        myPet.drink()
    } 
    else if(response.action === "play"){
        myPet.play()
    }


    ui.log.write(
        `${myPet}| hunger: ${myPet.hunger}| thirst: ${myPet.hunger} | energy:${myPet.energy}`
    ) 

    gameLoop() 
    } catch (error){
        console.log(error)
    }
}
init()