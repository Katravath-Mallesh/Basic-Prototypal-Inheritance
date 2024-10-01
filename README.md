Prototypal inheritance allows objects  to inherit properties and methods from other objects.  

### Key Points:

1. **`[[Prototype]]`**: Every JavaScript object has a hidden property `[[Prototype]]`, which is either another object or `null`. This forms the inheritance chain.
2. **`__proto__`**: This is a historical getter/setter for `[[Prototype]]`, often used to set an object’s prototype. More modern ways include `Object.getPrototypeOf()` and `Object.setPrototypeOf()`.
