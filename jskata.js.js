3;
1.5;

//some basic arithmetic works as you'd expet.
1+1;
0.1 + 0.2;
8 - 1;
10 * 2;
35 / 5;

// including uneven division.
5/2;

//and modulo division.
10 % 2;
30 % 4;
18.5 % 7;

//

1 << 2;

// 
(1 + 3) *2;


//There are three special not-a real-number values
Infinity;
-Infinity;
NaN;

// There's also a boolean type.
true;
false;

// Strings are created with ' or ".
'abc';
"Hello, world";

//Negation usses the ! symbol
!true;
!false

//Equality is ===
1 === 1;
2 === 1;

//Inequality is !==
1 !== 1;
2 !== 1;

//More comparisons
1 < 10;
1 > 10;
2 <= 2;
2 >= 2;

//Strings are connected with a +
"Hello "  +   "world!";

//.... which works wth more than just strings
"1, 2, " + 3;
"Hello " + ["world", "!"];

//....which can result in some weird behaviour...
13 + !0;
"13" + !0;

//and are compared with < and >
"a" < "b";

// type coercion is performed for comparisons with double equals....
"5" == 5; 
null == undefined;

//... unless you use ===
"5" === 5;
null === undefined; 

// You can access characters in a string with 'charAt'






