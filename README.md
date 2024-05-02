# MDDN 242 Assignment 2: Parametric Letterforms
### Cameron Paewai

## Introduction
For this project, I have created a modular, animated typeface in the style of hand-lettered blackletter typography, called FRACTURE. The name is a play on "Fraktur", the name of the German typographic style it is inspired by, and the fractured nature of the letterforms as they interpolate with each other.

## Development
I had already done a project in modular type for a Typography course, so I was familiar with using a set of components to create abstract typography. For this project, I designed my custom typeface outside of my code in Affinity Designer, which made it much easier to iterate quickly and finalise a design before replicating it in code.

I designed all my type on a grid layout; this made it much more efficient to translate my vector designs into code as all my letterforms were measured and to scale. It was simple to create a data structure that identifies the components of my designed type and insert the correct values for each shape in the way I had designed them, with the exception of a few letters (like the letter Z) that took some time designing a letterform that wasn't compromising on legibility.

## Letterform Design
Each of my letterforms are composed of three kinds of shapes: vertical bars, diamond-shaped accents, and thin crossbeams. These represent core parts of blackletter type and translate well into a modular typographic system, like the one created for this project. Each shape has individual parameters corresponding to their coordinate positions and scale.

When parameterising my shapes, I made use of common variables to make arranging my type easier, like using a consistent column width to determine the width and spacing of each vertical bar. When a shape is unused in a particular letterform, its parameters are set to a preset "unused" state so they move to a consistent location, ensuring smooth transitions.

The specific style of the letters results in a few characters that are identical to each other, like the letter S and the number 5, or the letter O and the number 0. However, these only affect the numerals; the main A to Z alphabet consists of all unique characters. Speaking of the 0 to 9 numerals, I used seven shapes modelled after seven-segment number displays. This made it simple to create legible letterforms that had a more distinct appearance more suited for number displays than my A to Z characters.

I chose colours for the background and the letters to resemble a sheet of paper in a similar manner to how blackletter typography would be traditionally set. In `exhibition.js` for the exhibition view, a set of filters and overlays are applied to the canvas too. The letterforms are slightly blurred and blended into a paper overlay to give the text rougher edges, as if they were hand-lettered in ink. A transparent book overlay with a background is laid on top of the type to make the letters appear on a book, with the letterforms becoming faded towards the page edges. The letters are parted in the middle to align them on the pages more.

## Interpolation
Despite the simplicity in the shapes that construct each letterform, the are many more than 20 parameters since there is more than one of each shape, and each shape needs its coordinate position and size to be controlled individually. Some parts of the letterforms, like the typographic descenders on letters like G, J, and P, are composed of few parameters as they only take on a few forms and don't need the same level of control.

All of these parameters are necessary to make my typeface interpolate smoothly, even if they used a varying number of shapes. I achieved this by identifying the maximum number of shapes I would need and including them in every letterform. If a shape was not needed, I would set its scale to zero and move it to a default position. This would result in animations where shapes grow and shrink when needed, rather than appearing and disappearing immediately. I also added easing to the interpolation for a smoother animation.

## ChatGPT
I did not end up using ChatGPT or other LLMs in my project as the code framework was mostly already supplied to me, and all I needed to do was modify it. Most of my work was done researching blackletter typefaces and designing one myself, which I did not need ChatGPT to help with.

## Resources
I used a free book stock image from [jannoon028](https://www.freepik.com/free-photo/old-book-open-wooden-table-seen-from_988011.htm) on Freepik, and a free paper overlay texture from [Burak Mescioğlu](https://www.behance.net/burakmescioglu) to create my letterform exhibition.