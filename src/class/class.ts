class User2{
    private name: string;
    private age: number;
    constructor(name: string, age: number){
        if(name === "") throw new Error("名前は空にできません");
        this.name = name;
        this.age = age;
    }

    public getMessage(message: string): string{
        return `${this.name} (${this.age}) 「${message}」`
    }
}