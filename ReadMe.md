# Top Trumps - Project Overview

## Description

**Top Trumps** is a digital recreation of the classic card game. In this browser-based version, players compete against the computer, selecting categories to compare statistics on their cards. The goal is to collect all the cards by winning rounds. The game continues until one player holds all the cards or has the most cards when the game ends.

This project combines strategic gameplay with a vibrant user interface to create an engaging and competitive experience.

## Gameplay

1. **Player Turn:**
   - Player 1 is shown their current card (automatically selected from their deck).
   - They can see the back of the computer's card.
   - Player 1 selects a category from their card to compete in this hand.
   
2. **Reveal and Results:**
   - The computer's card is revealed to Player 1.
   - A message declares the winner of the hand:
     - If Player 1 wins, they continue playing until they lose a hand.
     - If Player 1 loses, the computer takes over and selects categories until it loses a hand.

3. **Computer's Turn:**
   - A message shows Player 1 the category the computer selected and its value.
   - The winner is declared. If the computer wins, the player clicks "Next Hand" for the computer to play again. If Player 1 wins, control passes back to them.

### Ending the Game

- The game ends when one player has no cards left.
- Players can manually end the game by clicking the "End Game" button:
  - If ended manually, the player with the most cards is declared the winner.

[**Play the game here!**](https://adamgcodes.github.io/-js-toptrumps/)

---

## Getting Started

This is a web-based application—no installation required. 

To view the source code, visit the [**GitHub Repository**](https://github.com/AdamGCodes/-js-toptrumps).

---

## Timeframe & Team

This was a solo project completed in one week, aiming to deliver a functional MVP while exploring stretch goals for future development.

---

## Technologies Used

**Planning and Documentation:**
- Markdown  
- Figma  
- Trello  

**Development Tools:**
- VS Code  

**Front-End Development:**
- HTML  
- CSS  
- JavaScript  

**Hosting:**
- GitHub Pages  

---

## Brief

The brief was to create a browser-based game as part of a bootcamp project. Key deliverables included:
- User stories and wireframes.
- A working game built using JavaScript.

---

## Planning

I selected **Top Trumps** because it’s less commonly seen as a browser-based game and offers unique challenges. I began by defining the game rules and breaking down gameplay into steps. These steps informed my pseudo-code, which became the blueprint for development.

---

## Development Process

1. **Data Object:**  
   I started by creating a data object to test the game logic.

2. **Core Functions:**  
   I built discrete functions, beginning with shuffling and dealing the deck, followed by the logic required for gameplay.

3. **User Interface:**  
   Inspired by neo-brutalism, I designed a bold and colorful UI. The interface emulates the experience of holding a card and choosing categories. 

4. **Game Messages and Controls:**  
   I added a message area to inform players about game states and controls for starting, ending, and understanding the game.

5. **Manual End Game:**  
   To avoid indefinite back-and-forth gameplay, I included an "End Game" button for user satisfaction.

Some stretch goals, like animating the computer's card, remain as future improvements.

---

## Challenges

- **Integrating Logic:**  
   Building individual functions was straightforward, but combining them into a seamless system required thoughtful refactoring.

- **Responsive Design:**  
   Ensuring the app performed well on smaller screens without excessive media queries involved iterative refinements.

---

## Wins

- **Visual Design:**  
   The bold and colorful interface enhances the user experience and aligns well with the game's theme.

- **Gameplay Experience:**  
   The digital version captures the essence of the original card game. Players can enjoy a strategic and immersive experience.

- **Scalability:**  
   The app is designed for easy expansion, allowing for future additions of new decks or database integration.

---

## Key Learnings

1. **Testing is Essential:**  
   Debugging was significantly easier when testing regularly. Skipping steps made later fixes more complex.

2. **Integration Challenges:**  
   Combining individual functions required more effort and thought than anticipated, underscoring the importance of planning.

---

## Known Bugs

- Drawn hands is not working correctly. This function needs to be re-written and the user messaging around this also needs to be improved. 
- The lack of animations for the computer's card reduces UI polish.

---

## Future Improvements

1. Offer multiple decks on different topics.  
2. Add transitions and animations for smoother gameplay.  
3. Enable multiplayer functionality via online or network play.  
4. Include an optional deck counter to track card numbers.  
5. Develop a CRUD system for users to create and edit their own card decks.  

---
