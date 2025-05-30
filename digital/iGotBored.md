---
title: iGotBored
layout: yo
toc: true
---
was bored so i asked ai to teach me stuff:

# section 1
## binary: bits & bytes
Binary is a true or false statement, they are transistors of an on and off switch in electricity. Highly recognisable by 0s and 1s. A "bit" is called a 0 or 1, it is also called the lowest value in computers.

$1\space B (bit) = 8\space B (byte)$

$1024\space B (bytes) =1\space KB\space (kilobyte)$ 
$1024\space KB=1\space MB (megabyte)$

More:

| Unit      | Symbol | Equivalent  |
| --------- | ------ | ----------- |
| Bit       | b      |             |
| Byte      | B      | 8 bits      |
| Kilobyte  | KB     | 1,024 bytes |
| Megabyte  | MB     | 1,024 KB    |
| Gigabyte  | GB     | 1,024 MB    |
| Terabyte  | TB     | 1,024 GB    |
| Petabyte  | PB     | 1,024 TB    |
| Exabyte   | EB     | 1,024 PB    |
| Zettabyte | ZB     | 1,024 EB    |
| Yottabyte | YB     | 1,024 ZB    |

> Fun fact the brain can store 2.5 petabyte according to a source that I did not validate.



## base system

**What is the base system?**
The base system is converting binary (`base 2`) into higher base's allowing for human readability. It does **not** decrease storage size because at the end of the day it is still converted into binary (`base 2`).

### base table

| base    | range used        | one character represents | how to write "hi"   |
| ------- | ----------------- | ------------------------ | ------------------- |
| Base 2  | `0-1`             | 1 bit                    | `01101000 01101001` |
| Base 4  | `0-3`             | 2 bits                   | `12201 12321`       |
| Base 8  | `0-7`             | 3 bits                   | `150 151`           |
| Base 10 | `0-9`             | 3.33... bits             | `104 105`           |
| Base 16 | `0-9 A-F`         | 4 bits                   | `68 69`             |
| Base 32 | `0-9 A-V`         | 5 bits                   | `JBSWY`             |
| Base 64 | `0-9 A-Z a-z + /` | 6 bits                   | `aGk=`              |

> We don't usually use higher base's that base64 because it serves no real purpose. 


## character encodings
**What are character encodings?**
Character encodings are basically ways to represent characters from base's to proper readable text. Like converting 

| binary (base 2)   | text (proper human readable text) |
| ----------------- | --------------------------------- |
| 01101000 01101001 | hi                                |
 
The process of converting those values are called encodings, and making them back into binary (/any other base) is called decoding. Here's a table of the main character encodings.

| Encoding | No. of Characters | Description                  | What it includes                        |
| -------- | ----------------- | ---------------------------- | --------------------------------------- |
| ASCII    | 127               | Outdated                     | Basic characters (A-Z, digits, symbols) |
| ANSI     | 256               | Outdate (extension of ASCII) |                                         |
| UTF-8    | 1M+               |                              | Unicode                                 |
| UTF-16   | 1M+               |                              | Unicode                                 |
| UTF-32   | 1M+               |                              | Unicode                                 |

### Unicode
**What is unicode?**
Unicode is the "universal character encoding standard" that assigns a unique "code point" to each available character, symbol and language. 
- Code Points are not a character or symbol in the same way it's stored in `ASCII` or `UTF`.
- Code Points are written as `U+000000`