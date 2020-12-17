class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            "Je suis en pleine crise existentielle"
            ,"Miaou ~"
            ,"*Ronronne*"
            ,"Aret ..."
            ,"AaAaAaAaAaAaAaAaAaAa"
            ,"Aled"
            ,"Je ne comprends rien aux issus de ce jeu en tant qu'être dénué de réflexion"
            ,"*Crache une bonne grosse boule de poils dégueulasse"
            ,"mIaOoOooOu"
        ];
    }
    parle(blabla){
        let ici=this;
        this.$bulle.text(blabla);
        setTimeout(function(){
            ici.$bulle.text("");
        },1500);
    }

    /**
     * Renvoie un mot aléatoire
     * @returns {string}
     */
    get motAleatoire(){
        return this.mots[Math.floor(Math.random() * this.mots.length)];
    }

}