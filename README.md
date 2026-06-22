# Web Development Project 2 - *African Countries & Capitals Flashcards*

Submitted by: **Beryl Ghany**

This web app: **An interactive flashcard application that helps users learn African countries and their capitals. Users can click cards to flip between the country and its capital and use a button to view a random new card.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] **The app displays the title of the card set, a short description, and the total number of cards**

  * [x] Title of card set is displayed
  * [x] A short description of the card set is displayed
  * [x] A list of card pairs is created
  * [x] The total number of cards in the set is displayed
  * [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)

* [x] **A single card at a time is displayed**

  * [x] Only one half of the information pair is displayed at a time

* [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**

  * [x] Clicking on a card flips it over, showing the back with corresponding information
  * [x] Clicking on a flipped card again flips it back, showing the front

* [x] **Clicking on the next button displays a random new card**

## Optional Features

The following **optional** features are implemented:

* [x] Cards contain images in addition to or in place of text

  * [x] All cards include country flag images

* [x] Cards have different visual styles such as color based on their category

  * [x] Difficulty categories (Easy, Medium, Hard) are represented using different card colors

## Additional Features

The following **additional** features are implemented:

* [x] 3D card flip animation
* [x] Twelve African country-capital flashcards
* [x] Randomized card selection that avoids immediately repeating the current card
* [x] Responsive card design with hover effects

## Video Walkthrough

Here's a walkthrough of implemented required features:
<blockquote class="imgur-embed-pub" lang="en" data-id="a/AqgEqSF"  ><a href="//imgur.com/a/AqgEqSF">Walkthru VIDEO 1</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
<img src="https://i.imgur.com/AqgEqSF.gif" title="Video Walkthrough" alt="Video Walkthrough" />

GIF created with **ScreenToGif**

## Notes

One challenge was implementing a realistic card flip animation without causing the text to appear mirrored. Another challenge was creating a random card selection system while preventing the same card from appearing consecutively.

## License

Copyright 2026 Beryl Ghany

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.


---

# Web Development Project 3 - Flashcards! Part 2

Submitted by: **Beryl Ghany**

This web app: **An enhanced version of the African Countries & Capitals Flashcards application that allows users to submit guesses, receive answer feedback, navigate through cards in order, shuffle the deck, and track answer streaks.**

Time spent: **2** additional hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] The user can submit a guess into an input box before seeing the flipside of a card

  * [x] Application features a clearly labeled input box with a submit button where users can type in a guess
  * [x] Clicking on the submit button with an incorrect answer shows visual feedback that it is wrong
  * [x] Clicking on the submit button with a correct answer shows visual feedback that it is correct

* [x] The user can navigate through an ordered list of cards

  * [x] A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  * [x] A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  * [x] Both the next and back buttons have visual indication when the user is at the beginning or end of the list

## Stretch Features

The following **stretch** features are implemented:

* [x] Users can use a shuffle button to randomize the order of the cards

* [x] A user's answer may be counted as correct even when it is slightly different from the target answer

* [x] A counter displays the user's current and longest streak of correct responses

## Video Walkthrough

Here's a walkthrough of the new functionality implemented in Part 2:

<img src="YOUR_NEW_GIF_HERE.gif" title="Part 2 Walkthrough" alt="Part 2 Walkthrough" />

## Notes

A challenge was managing multiple React state variables for answer checking, navigation, streak tracking, and card flipping while keeping the user experience smooth and responsive.
