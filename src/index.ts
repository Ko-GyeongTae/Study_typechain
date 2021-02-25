import * as CryptoJS from "crypto-js";

class Block {
    static calculateBlockHash = (
        index:number,
        previousHash:string, 
        timestamp:number, 
        data:string
    ):string => 
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    static validataStructure = (aBlock: Block) : boolean => 
        typeof aBlock.index === "number" && 
        typeof aBlock.hash === "string" && 
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string";
    
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

let blockChain:Block[] = [genesisBlock];

const getBlockchain = () : Block[] => blockChain;
const getLatestBlock = () : Block => blockChain[blockChain.length - 1];
const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data:string) : Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex : number = previousBlock.index + 1;
    const newTimestamp : number = getNewTimeStamp();
    const newHash : string = Block.calculateBlockHash(
        newIndex, 
        previousBlock.hash, 
        newTimestamp, 
        data
    );
    const newblock : Block = new Block(
        newIndex, 
        newHash, 
        previousBlock.hash, 
        data, 
        newTimestamp
    );
    addBlock(newblock);
    return newblock;
};

const getHashforBlock = (aBlock: Block) : string => 
    Block.calculateBlockHash(
        aBlock.index, 
        aBlock.previousHash, 
        aBlock.timestamp, 
        aBlock.data
    );

const isBlockValid = (candidateBlock : Block, previousBlock: Block) : boolean => {
    if(!Block.validataStructure(candidateBlock)) {
        return false;
    } else if(previousBlock.index + 1 !== candidateBlock.index){
        return false;
    } else if(previousBlock.hash !== candidateBlock.previousHash){
        return false;
    } else if(getHashforBlock(candidateBlock) !== candidateBlock.hash){
        return false;
    } else{
        return true;
    }
};

const addBlock = (candidateBlock: Block) : void => {
    let flag = isBlockValid(candidateBlock, getLatestBlock());
    console.log(flag);
    if(flag){
        blockChain.push(candidateBlock);
    }
}

createNewBlock("Second block");
createNewBlock("Third block");
createNewBlock("Fourth block");
console.log(getBlockchain());

export {};