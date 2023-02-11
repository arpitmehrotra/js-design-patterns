# Javascript Design Patterns

1. **Null Object Pattern** - It only requires you to add one extra class/object to your actual code and then instead of returning null, you return that null object that you created, which saves you from doing all the null checks further in the code.

2. **Builder Pattern** - This pattern is useful when you need to create objects that have many different working parts that need to all come together to create one single object.

3. **Singleton Pattern** - This pattern is a way of creating a single object but is shared among the bunch of different resources throughout your application without having to recreate that object.

4. **Facade Pattern** - The intent of the Facade pattern is to provide a high-level interface (properties and methods) that makes a subsystem or toolkit easy to use for the client, by hiding the complex functionality in one or more subsystems.

5. **Command Pattern** - The idea of the command pattern is to take the different operations that you want something to do and encapsulate them into individual commands that have a perform and an undo method.

6. **Single Responsibility Principle** - The idea of Single Responsibility Principle is that all of your classes, modules, functions, anything inside of your code that can be put into a single part, should have one single responsibility and that means it should have only one reason to change.

7. **Open Closed Principle** - The Open Closed Principle states that software entities (classes, modules, functions etc.) should be open for extension, but closed for modification.This means that a class/function/module should be able to be extended in functionality without having to go into the class and change it. Essentially you shouldn't need to change existing code to add new functionality and instead should only have to add new code.

8. **Liskov Substitution Principle** - This principle states that anywhere you use one type of class, you need to be able to use all type of subclasses of that class and it should work just fine.

9. **Interface Segregation Principle** - The main idea of the interface segregation principle is that any class that implements an interface must use all functions/properties of the interface. JavaScript does not have actual interfaces, but a class inheritance structure is similar enough. This means that any class that inherits from another class needs to use all of the methods/properties from the base class. This encourages writing small classes instead of large classes.
