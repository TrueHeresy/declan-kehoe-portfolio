---
title: 'Exploit Game. Music, Sound, and Scripting'
description: 'An explatnation of some of the work I have done for my university game dev society'
date: '2021-06-08'
banner:
    src: '../../images/vsc-unity.png'
    alt: 'A screenshot of the project running in Unity'
    caption: 'A screenshot of of the project in Unity'
categories:
    - 'Game Development'
keywords:
    - 'Unity'
    - 'C#'
    - 'Scripting'
    - 'Sound Design'
---

This should be published on itch.io soon!

Why not listen to some music I made for the game while you read this? There's three to choose from! 

First level:   <audio controls><source src="../../bearings.mp3" type="audio/mp3">It broke?</audio>

Escalation music:   <audio controls><source src="../../transport-hub.mp3" type="audio/mp3">It broke?</audio>

Final level ideation:   <audio controls><source src="../../final-level.mp3" type="audio/mp3">It broke?</audio>

### A Game... IN UNITY!?
The university game dev society wanted to make a game, so we did. Aside from the initial ideation and game mechanics refinement, my role has so far mostly been in composing music, making sound effects, and scripting to get those thigns working together.

I found that Unity honestly made that so much easier to accomplish, and the fact I could see things implemented in real-time meant that something that would have been horrendously fiddly - like getting the timing of the door sound effect to line up with the animation of a door actually opening - to line up right, was far less painful than it otherwise might have been.

In terms of the scripting, **C#** was close enough to the OO principles I'd learned through Java that it felt quite familiar in terms of structure. A cheat sheet with some of the syntax meant I could get up and running with the project's codebase in an afternoon, after I'd had to take a break from the project during the intense part of final year exams! Finally, as a (very) long time Mac user, I must say through somewhat gritted teeth that **Visual Studio Code** had such fantastic integration with Unity, it's hard to imagine wanting much of a better tool to get set up with!

### Making Sounds
If you would like to hear the first set of sounds I made for this then please, enjoy this incredibly short video!
<iframe width="100%" height="400" src="https://www.youtube.com/embed/4_6gB3vhI5E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The game is making use of prefabs - so the door opening sound is attached to the door objects, and the 'login' sound is attached to terminals. Things got slightly more complex for the 'blob' (the currently hard-to-see little blue thing that you control from the terminal) which has a looping travel sound, and can then itself trigger other sfx it encounters; such as the doors and other terminals.

Next steps are - pun absolutely intended - dynamically changing footsteps, and to merge the work done on this SFX branch with a more general music control branch that another team member was working on. This kind of waiting around is something I'll adress in the next section...

### In Conclusion
To be honest, this project has been instructive, but somewhat limited. Due to the amount of people that wanted to take part in the society, the difficult balancing of different commitments for those people, and then the realities of bringing all the disprate parts of a game together... in the end we have something that is in some ways not demonstrating the sum of its parts. 

While each person's work has been good, the reality is that so much good work is siloed into different deveopment branches. I hope that soon, we can finally get everything brought togehter into a satisfying showcase. But, until then I am glad to have had a chance to get to know some of Unity's tools and workflows, as well as an opportunity to compose and make sounds to a design brief!