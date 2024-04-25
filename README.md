# MDDN 242 2024 Assignment 2

## Introduction
For this project, I have created a modular, animated typeface in the style of gothic hand-lettered blackletter typography.

## Development
I had already done a project in modular type for a Typography course, so I already had experimented with using components to create a typeface. For this project, I designed a custom typeface in Affinity Designer. Designing my typeface outside of my code first made it much easier to iterate quickly and finalise a design before replicating it in code. I designed all my type on a grid layout; this made it much more efficient to translate my vector designs into code as all my letterforms were measured and to scale.

## Design
Each of my letterforms are composed of three kinds of shapes: vertical bars, diamond-shaped accents, and thin crossbeams. These represent core parts of blackletter type and translate well into a modular typographic system, like the one created for this project. Each shape has individual parameters corresponding to their coordinate positions and scale.

When parameterising my shapes, I made use of common variable to make arranging my type easier, like using a consistent column width to determine the width and spacing of each vertical bar. When a shape is unused in a particular letterform, its parameters are set to a preset "unused" state so they move to a consistent location.

For the 0 to 9 numerals, I used a seven shapes modelled after seven-segment number displays. This made it simple to create legible letterforms that were distinct from my A to Z characters.

Despite the simplicity in the shapes that construct each letterform, the are many more than 20 parameters since there is more than one of each shape, and each shape needs to be controlled individually. Some parts of the letterforms, like the typographic descenders on letters like G, J, and P, are composed of few parameters as they only take on a few forms and don't need the same level of control.

I chose colours for the background and the letters to resemble a sheet of paper in a similar manner to how blackletter typography would be traditionally set. For the exhibition view, I added a blur filter to create a fuzziness in the edges of the letterforms, then drew a texture over the entire canvas with overlay blending to give the fuzzy edges a rougher inkier texture.

## Interpolation
I ensured that each of my letterforms would seamlessly interpolate between each other, even if they used a varying number of shapes. I achieved this by identifying the maximum number of shapes I would need, including them in every letterform. If a shape was not needed, I would set its scale to zero and move it to a default position. This would result in animations where shapes grow and shrink when needed, rather than appearing and disappearing immediately. I also added easing to the interpolation for a smoother animation.