# Variable types 

## Variable declarations 
**let** - new variable in a scope {},
**var** - new variable in a function scope,
**const** - new constant, can't be re-assigned. 

if a type is specified, a value of another type can't be assigned. 
```typescript
let x: number = 10;
```

## Types 
![types](/pictures/types.png)

- *null* & *undefined*
  - null is absence of value, undefined means that value is not initialized. 
  - null and undefined can't be used to declare variables only referenced by using literals 
  - null and undefined are subtypes of all types, so literals of it can be assigned to any variable.
-  any* & *unknown*
  - any allows you to assign any  without compilation exceptions (flexible but comes at cost of potential runtime exceptions)
  - unknown is similar to any but with compile-checking
- *number*
  - number = float + 
  - bigint
  - literals = hexadecimal, decimal and binary. 
- *string*
  - UTF-16
  - "" = ''
  - template strings = several lines + placeholders: `... ${placeholder}...\n....`
- *enum*: value by index of an array / number by a direct reference to a value
    ```typescript
    enum ContractStatus {
         Permanent = 5,
         Temp,
         Apprentice
    }
    
    let employStatus: ContractStatus = ContractStatus.Permanent;
    
    console.log(ContractStatus[employStatus]); // Permanent
    console.log(employStatus) // 5
    ```

**Type assertion** is the same as cast in Java: you are telling the compiler to use the variable with a particular type.  
**Type guards** - checking type: *typeof*  
```typescript
(variable as type).merhod();  // preferrabe
(<type>variable).method();

if(typeof variable === "string") {}
```  

## Union, intersection and literal types

*Union* - limiting the number of possible types (declare several possible types)  
*Intersection* - combining attributes of several types (usually with interfaces, like implementing several ones)

When we use *var* | *let* we declare a type but values can be changed, however we can bind a particular literal type by using *const*. 
In that case, literal type is assigned, and it is called *narrowing* (to narrow possible literals to assign). 
Narrowing can be to one literal or to a list of them. 

```typescript
let variable: null | boolean;  // union

const a = "string";    // narowwing to a concrete literal type
const b = "string" | "not string"   // narrowing to two literal types 

b = "string"   // valid
b = "number"  // invalid
```

## Array & tuple
*Array* - values of the same type,    
*Tuple* - values of different type;
```typescript
let array1: number[] = [1,2,3];
let array2: Array<string> = ['a', 'b', 'c'];
let tuple: [string, number] = ["Igor", 28];
```

