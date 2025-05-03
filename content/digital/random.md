---
title: random
layout: yo
---
# random

## Bases


| name               | base    | range used        | note                             |
| ------------------ | ------- | ----------------- | -------------------------------- |
| Binary             | Base 2  | `0-1`             |                                  |
|                    | Base 4  | `0-3`             | theoretical, not used            |
| Octal              | Base 8  | `0-7`             |                                  |
| Decimal            | Base 10 | `0-9`             | not used - normal human counting |
| Hexadecimal        | Base 16 | `0-9 A-F`         |                                  |
| "Duotrigesimal"    | Base 32 | `0-9 A-V`         |                                  |
| "Tetrasexagesimal" | Base 64 | `0-9 A-Z a-z + /` |                                  |

- These are like the most common bases.
- 


### Theorical higher bases (with unicode)

apparently Unicode has `154k+` characters so theorically you could have `base-131072` ( $2^{17}$ ) 


## Unicode

`U+0041` = `A` which is just a representation of a symbol or its also called a "code point." 


Unicode currently (Unicode 16.0) has `154,998` assigned characters. These are located within the total Unicode codespace, which ranges from `U+0000` to `U+10FFFF` and contains `1,114,112` code points ($2^{16} \times 17$). 

### Character Encoding Standards

These are character encoding standards convert unicode symbols into shorter forms (different for each) so that the computer can understand them easier. Most of the times you have to use a very small amount of the entire Unicode database so usually we don't use the entire database and just use these simple encoding standards to use only "some" of the characters. 

Aka. Their used for simpler "storage and transmission" compared to the Unicode database.

| name                 | range used            |                 |
| -------------------- | --------------------- | --------------- |
| ASCII                | 0-127 (128 chracters) |                 |
| UTF-8                |                       |                 |
| UTF-16               |                       |                 |
| Latin-1 (ISO-8859-1) | (256 characters)      | expanded ASCII? |
|                      |                       |                 |


