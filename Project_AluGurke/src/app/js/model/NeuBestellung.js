var NeuBestellung = (function () {
    function NeuBestellung(eil, teil_id, menge, kosten) {
        this.eil = eil;
        this.teil_id = teil_id;
        this.menge = menge;
        this.kosten = kosten;
        this.timestamp = new Date().getTime();
    }
    return NeuBestellung;
})();
