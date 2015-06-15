---
layout: page
title: About
---
{% include JB/setup %}

**Urho3D** is a free lightweight, cross-platform 2D and 3D game engine implemented in C++ and released under the MIT license. Greatly inspired by [OGRE](http://www.ogre3d.org/) and [Horde3D](http://www.horde3d.org/).

## Features
- Direct3D9, Direct3D11<font color="green"><sup>v1.4</sup></font>, OpenGL 2.0 or 3.2<font color="green"><sup>v1.4</sup></font>, OpenGL ES 2.0 or WebGL<font color="green"><sup>v1.4</sup></font> rendering
- HLSL or GLSL shaders + caching of HLSL bytecode
- Configurable rendering pipeline. Default implementations for forward, light pre-pass and deferred rendering
- Component based scene model
- Skeletal (with hardware skinning), vertex morph and node animation
- Automatic instancing on SM3 capable hardware
- Point, spot and directional lights
- Shadow mapping for all light types; cascaded shadow maps for directional lights
- Particle rendering
- Geomipmapped terrain
- Static and skinned decals
- Auxiliary view rendering (reflections etc.)
- Geometry, material & animation LOD
- Software rasterized occlusion culling
- Post-processing
- HDR rendering<font color="olive"><sup>v1.31</sup></font>
- 2D sprites and particles that integrate into the 3D scene<font color="olive"><sup>v1.31</sup></font>
- Task-based multithreading
- Hierarchical performance profiler
- Scene and object load/save in binary and XML format
- Keyframe animation of object attributes<font color="olive"><sup>v1.32</sup></font>
- Background loading of resources<font color="olive"><sup>v1.32</sup></font>
- Keyboard, mouse, joystick and touch input (if available)
- Cross-platform support using [SDL 2.0](http://www.libsdl.org/) (currently runs on Windows, Linux, Mac OS X, Android, iOS, [Raspberry Pi](http://www.raspberrypi.org/)<font color="olive"><sup>v1.3</sup></font>, and HTML5<font color="green"><sup>v1.4</sup></font> with [Emscripten](http://kripken.github.io/emscripten-site/) toolchain)
- Physics using [Bullet](http://www.bulletphysics.org/)
- 2D physics using [Box2D](http://box2d.org/)<font color="olive"><sup>v1.32</sup></font>
- Scripting using [AngelScript](http://www.angelcode.com/angelscript/)
- Alternative script interface using [Lua](http://www.lua.org/)<font color="olive"><sup>v1.3</sup></font> or [LuaJIT](http://luajit.org/)<font color="olive"><sup>v1.31</sup></font> (on Windows, Linux, Mac OS X, Android, and Raspberry Pi)
- Networking using [kNet](https://github.com/juj/kNet/) + possibility to make HTTP requests<font color="olive"><sup>v1.3</sup></font>
- Pathfinding<font color="olive"><sup>v1.23</sup></font> and crowd simulation<font color="green"><sup>v1.4</sup></font> using [Recast/Detour](https://code.google.com/p/recastnavigation/)
- Image loading using [stb_image](http://nothings.org/) + DDS / KTX / PVR compressed texture support
- 2D and "3D" audio playback, Ogg Vorbis support using [stb_vorbis](http://nothings.org/) + WAV format support
- TrueType font rendering using [FreeType](http://www.freetype.org/), [AngelCode bitmap fonts](http://www.angelcode.com/products/bmfont/) are also supported
- Unicode string support
- Inbuilt UI system
- Scene editor and UI-layout editor implemented in script with undo & redo capabilities
- Model/scene/animation/material import from formats supported by [Open Asset Import Library](http://assimp.sourceforge.net)
- Alternative model/animation import from OGRE mesh.xml and skeleton.xml files
- Supported build tools and IDEs: Visual Studio, Xcode, Eclipse, CodeBlocks, QtCreator, GCC, LLVM/Clang, MinGW
- Supports both 32-bit and 64-bit<font color="olive"><sup>v1.3</sup></font> build
- Build as single external library<font color="olive"><sup>v1.3</sup></font> (can be linked against statically or dynamically)

## Discussions, support and contributing
- Use the [Urho3D forum](http://urho3d.prophpbb.com/) for questions and discussion.
- For bug reports and contributing, please use the GitHub [issue tracker](https://github.com/urho3d/Urho3D/issues/) and [pull requests](https://github.com/urho3d/Urho3D/pulls) pages.
- When you contribute, you have to agree that your work will be released under the license as seen at the top of [License.txt](https://github.com/urho3d/Urho3D/blob/master/License.txt).

## Limitations
Though Urho3D already contains several useful features and implements a framework for 3D games and applications, it is not yet a complete out-of-the-box game creation toolkit. Some things you can expect having to work on, or to require skills for: (contributions to the project are naturally welcome)
- C++ for performance-critical code and improving existing subsystems such as networking, physics and animation, depending on your needs
- HLSL and GLSL shaders: the provided shaders give only basic examples of what is possible
- Additional optimization for mobile devices
- Editors and additional asset conversion functionality
- Integration of additional 3rd party libraries, for example a more complete UI library, HTML rendering, or additional network protocols

## Engine development, contributions and bugfixes by
- Lasse Öörni (loorni@gmail.com, AgentC at GameDev.net)
- Wei Tjong Yao
- Aster Jian
- Colin Barrett
- Erik Beran
- Danny Boisvert
- Carlo Carollo
- Pete Chown
- Sebastian Delatorre (primitivewaste)
- Josh Engebretson
- Chris Friesen
- Alex Fuller
- Mika Heinonen
- Graham King
- Jason Kinzer
- Gunnar Kriik
- Ali Kämäräinen
- Pete Leigh
- Jonne Nauha
- Paul Noome
- David Palacios
- Alex Parlett
- Jordan Patterson
- Vladimir Pobedinsky
- Nick Royer
- Jonathan Sandusky
- Miika Santala
- Joshua Tippetts
- Daniel Wiberg
- Steven Zhang
- AGreatFish
- Enhex
- Firegorilla
- Magic.Lixin
- Mike3D
- Modanung
- OvermindDL1
- Skrylar
- andmar1x
- amadeus_osa
- atship
- att
- celeron55
- feltech
- hdunderscore
- marynate
- mightyCelu
- nemerle
- ninjastone
- raould
- rasteron
- reattiva
- rifai
- skaiware
- szamq
- thebluefish

## Logos
- [Large color]({{ BASE_PATH }}/assets/images/logo-big.jpg)
- [Large BW]({{ BASE_PATH }}/assets/images/logo-big-bw.png)

## Origin of the name
**Urho** (Finnish for "hero" or "brave fighter") was a legendary, tyrannical king among the fish. He always hunted without mercy. Sadly, he passed away on 6th November 2009. This engine was originally called Bofh3D (hinting at the covert goal of reimplementing the game BOFH: Servers under Siege in 3D, which still stands) but was renamed to Urho3D in his honor. For more of Urho's legend, see also the music project [http://www.mikseri.net/Urho/](http://www.mikseri.net/Urho/).
