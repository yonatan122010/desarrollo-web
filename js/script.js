class Memorama {

    constructor() {

        this.canPlay = false;

        this.card1 = null;
        this.card2 = null;

        this.availableImagenes =[1,2,3,4];
        this.orderForThisRound =[];
        this.cards=Array.from(document.querySelectorAll(".board-game figure"));

        this.startGame();
        console.log(this.orderForThisRound);







        

    }
    startGame(){
        this.setNewOrder();
        this.setImagesCards();
        this.openCards();
    }
    setNewOrder(){
        this.orderForThisRound = this.availableImagenes.concat(this.availableImagenes);
        this.orderForThisRound.sort(()=>Math.random()-0.5);
    }
    setImagesCards(){
        for(const key in this.cards){
            const card =this.cards[key];
            const image=this.orderForThisRound[key];
            const imgLabel =card.children[1].children[0];

            imgLabel.src=`/imagenes/goku/${image}.jpg`;
        }
    }


openCards() {
    this.cards.forEach(card=>card.classList.add("open"));
    setTimeout(()=>{
        this.closeCards();

    },3000);
    

}
closeCards(){
    this.cards.forEach(card=>card.classList.remove("open"));
    
    this.canPlay=true;
    

}
}

document.addEventListener("DOMContentLoaded", () => {
    function flipCard(){
        this.classList.add("open");
    }
    const cards=document.querySelectorAll("figure");
    cards.forEach(cards => {
        cards.addEventListener("click",flipCard)
    });

    new Memorama();

});