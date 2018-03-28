#!/bin/bash -eu

sips --resampleWidth 64  Icon-512.png --out Icon.png 
sips --resampleWidth 128 Icon-512.png --out Icon-128.png 
sips --resampleWidth 96  Icon-512.png --out Icon-96.png 
sips --resampleWidth 48  Icon-512.png --out Icon-48.png 
sips --resampleWidth 32  Icon-512.png --out Icon-32.png 
