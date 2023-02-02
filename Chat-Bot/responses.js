function getBotResponse(input) 
{
    //rock paper scissors
    if (input == "rock") 
    {
        return "paper";
    }
    else if (input == "paper") 
    {
        return "scissors";
    } 
    else if (input == "scissors") 
    {
        return "rock";
    }

    // Simple responses
    if (input == "hello") 
    {
        return "Hello there!";
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