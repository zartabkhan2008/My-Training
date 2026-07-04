# Episode 1 : Execution Context

https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP

### Everything in JS happens inside the execution context. 

Assume execution context to be a big box where everything takes place. It has 2 components in it:
<li> <strong>Memory : </strong>The place where all the variables and functions are stored as (key:value) pairs. Memory component is also known as <em>variable environment</em>.
<li> <strong>Code : </strong>The place where code is executed one line at a time. Code component is also known as <em>Thread of Execution</em>

### JS is a synchronous single-threaded language. 
<li> By single threaded, we mean JS can only run 1 command at a time
<li> By synchronous single threaded, we mean it can run 1 command at a time, <em>in a specific order</em>
