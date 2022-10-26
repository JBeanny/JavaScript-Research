# Conditional Statements in JavaScript

## If-Else Statements

    1.Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run

    2.We use if else statement very often when you write code, you want to perform different actions for different decisions

    3.Syntax:

            if(Condition){
                execute statement
            }else if(Condition){
                execute statement
            }else{
                execute statement
            }

## Ternary Operator

    1.Same as if else statement

    2.Syntax:

            Condition ? true : false;

## Switch Case

    1.The switch statement is used to perform different actions based on different conditions
    
    2.Use switch instead of if when: You are comparing multiple possible conditions of an expression and the expression itself is non-trivial.

    3.Syntax:

            switch(expression) {
                case x:
                    // code block
                    break;
                case y:
                    // code block
                    break;
                default:
                    // code block
            }