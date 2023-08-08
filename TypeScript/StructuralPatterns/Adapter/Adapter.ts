/**
 * Adapter is a structural design pattern, which allows incompatible objects to collaborate.
 * The Adapter acts as a wrapper between two objects. It catches calls for one object and 
 * transforms them to format and interface recognizable by the second object.
 * Identification: Adapter is recognizable by a constructor which takes an instance of a different abstract/interface type. 
 * When the adapter receives a call to any of its methods, it translates parameters to the appropriate format and 
 * then directs the call to one or several methods of the wrapped object.
 */

export class Target {
    public request(): string {
        return 'Target: The default target\'s behavior.';
    }
}

export class Adaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

export class Adapter extends Adaptee {
    constructor(private adaptee: Adaptee){
        super();
    }

    public request(): string{
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}

