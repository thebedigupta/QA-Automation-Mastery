# IIFE

Immediately Invoked Function Expression (IIFE)

An IIFE is a function in JavaScript that runs **right away** as soon as it is created.
You define the function inside parentheses, and then add `()` at the end to execute it immediately.

Why it is useful:

- It keeps variables private (inside the function)
- It avoids polluting the global scope

```
Example:
(function () {
const message = "Hello from IIFE!";
console.log(message);
})();
```

Immedately Invoked Functional Expression


