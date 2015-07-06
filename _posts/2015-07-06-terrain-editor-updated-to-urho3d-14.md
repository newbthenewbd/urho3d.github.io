---
layout: post
title: Terrain editor updated to use Urho3D 1.4
description:
category: tool integrations
carousel_background:
tags: [Terrain, Editor, Lua, 1.4]
---
{% include JB/setup %}

JTippetts has updated his [terrain editor](https://github.com/JTippetts/U3DTerrainEditor) project to use the latest version (release 1.4) of Urho3D library. The project is a simple terrain editor built using Urho3D library and its exposed Lua API. It now has shaders that works for D3D9, D3D11 and GLSL. The newest addition in the project are 8-detail tri-planar shaders for both HLSL and GLSL. The tri-planar shader uses the detail blending between layers. It requires more powerful GPU but gives better result than normal-mapping shader. See the difference for yourself.

### Normal
![normal-map.jpg](http://i.imgur.com/Ke9XpqB.jpg)

### Tri-planar
![tri-planar.jpg](http://i.imgur.com/YgW1ORr.jpg)
