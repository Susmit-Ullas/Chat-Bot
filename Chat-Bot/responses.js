function getBotResponse(input) 
{
    //rock paper scissors
    let choice = ["", "rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * (2-(-1)) + 1);
    let botChoice = choice[randomNum];
    
    if (input == "rock" && botChoice == "paper")
    {
        return "I chose paper! I win!";
    }
    else if (input == "rock" && botChoice == "scissors")
    {
        return "I chose scissors! You win!";
    }
    else if (input == "paper" && botChoice == "rock")
    {   
        return "I chose rock! You win!";
    }
    else if (input == "paper" && botChoice == "scissors")
    {
        return "I chose scissors! I win!";
    }
    else if (input == "scissors" && botChoice == "rock")
    {
        return "I chose rock! I win!";
    }
    else if (input == "scissors" && botChoice == "paper")
    {
        return "I chose paper! You win!";
    }
    else if (input == botChoice)
    {
        return "We both chose " + botChoice + "! It's a tie!";
    }

    // Simple responses
    else if (input == "hello") 
    {
        return "Hello there!";
    } 
    else if (input == "how are you?")
    {
        return "I'm doing great! How are you?";
    }
    else if (input == "i'm good" || input == "i'm doing good")
    {
        return "That's great to hear!";
    }
    else if (input == "goodbye") 
    {
        return "Talk to you later!";
    } 
    else if (input == "what is your name?")
    {
        return "My name is Chat Bot!";
    }
    else if (input == "what is your favorite color?")
    {
        return "My favorite color is blue!";
    }
    else if (input == "what is your favorite food?")
    {
        return "My favorite food is pizza!";
    }
    else if (input == "what is your favorite game?")
    {
        return "My favorite game is Minecraft!";
    }
    else if (input == "what is your favorite movie?")
    {
        return "My favorite movie is The Lion King!";
    }
    else if (input == "what is your favorite sport?")
    {
        return "My favorite sport is Football!";
    }
    else if (input == "what is your favorite animal?")
    {
        return "My favorite animal is a dog!";
    }
    else if (input == "what is your favorite season?")
    {
        return "My favorite season is Summer!";
    }
    else 
    {
        return "Try asking something else!";
    }
}