class Block {
    public index:number;
    public hash:string;
    public previousHash:string;
    public data:string;
    public timestamp:number;
    constructor(
        index:number, 
        hash:string, 
        previousHash:string, 
        data:string, 
        timestamp:number
    ){
        this.index=index;
        this.hash=hash;
        this.previousHash=previousHash;
        this.data=data;
        this.timestamp=timestamp;
    }
}

const genesisBlock:Block = new Block(0, "299292929292929", "", "Hello", 123456);

let blockChain:[Block] = [genesisBlock];
console.log(blockChain);
export {};