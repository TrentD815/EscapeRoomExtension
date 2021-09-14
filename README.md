# Escape Room Extension. A readme in retrospect 2 years later. 

### Overview & Motivation
This project was originally intended to be a Chrome extension to supplement the Escape Room Master software 
and help Axxiom Escape Room employees run rooms more precisely and effectively. I have a lot of praise
for the Escape Room Master software overall but it was always a generic one fits all software
for any escape room company to use. The way we ran rooms at Axxiom was slightly different and I
set out to make a custom extension to better suit our specific needs at the time

### Goals
  - Get another web project under my belt to build my portfolio and improve my skills
  - Fill in the holes with more data where the Escape Room Master software 
    did not fufill our needs as an escape room company. These included:
      - Seeing how many clues have been sent to a group overall
      - Seeing the text of the previous clue that was sent to the group
      - Seeing the timestamp of the last clue that was sent to the group
  - Build something that had a background animation of some sort
  - Have a clean and simple design overall
  
### Challenges
  At the time of creating this, I was still very inexperienced with web dev.
  I spent the initial time on this project working the UI which
  ended up turning out decently for my experience level. The intial functional
  implementation went ok up until I realized that I can't simply utilize functions
  from other developers without an API. As a result, I ran into CORS issues trying
  to link in and pull data from Escape Room Master. After realizing this, and seeing 
  that they didn't have a public API, hopes of fully completing this project were 
  dashed without some convoluted solution.
