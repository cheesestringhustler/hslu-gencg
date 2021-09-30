<a href="https://cheesestringhustler.github.io/hslu-gencg-journal/#day-01">This repo is published here</a>

# Day 01

## Sprout

As first exercise we played a physical game called sprout.

![Image](content/day01/sprout_game.jpeg)

## Drawing to code

Place random points and connect all of them with lines.

![Image](content/day01/sollewit_paper.jpeg)

A reproduction in three.js generating random points on each page load.

{% raw %}
<iframe src="content/day01/3dgraph/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

# Day 02

## Iterative Patterns

### Paper Sketch

For the sketch I went with a simple grid, which I imagined to be made of cubes.

![Image](content/day02/grid_paper.jpeg)

### Code

Firstly I started trying to implement the sketch in three.js but for my simple purposes I felt quite overwhelmed having to work with <a href="https://github.com/spite/THREE.MeshLine/blob/master/README.md">MeshGeometry</a> just to change lineWidth.

{% raw %}
<iframe src="content/day02/threeCubeGrid/index.html" width="50%" height="225" frameborder="no"></iframe>
{% endraw %}

So I went with P5.js for now. Adding a rotation to the cubes where every cube should have a diffrent rotation (0-360). Additionally I mapped a color parameter to the rotation.

{% raw %}
<iframe src="content/day02/p5CubeGrid/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

### Further

After some quick googling I found a bash version of the Commodore 10Print command with following results.

![Image](content/day02/10print.png)
