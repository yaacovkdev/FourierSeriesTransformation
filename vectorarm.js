class VectorArm{
    #vectorlist = [];

    #getangle(rpm, fps){
        return rpm * 2 * Math.PI / 60 / fps
    }

    constructor(){
        this.vectors = 0;
    }

    push(vector){
        this.#vectorlist.push(vector);
        this.vectors++;
    }

    pop(){
        if(this.vectors == 0){
            return null;
        }
        this.vectors--;
        return this.#vectorlist.pop();
    }

    pos(i){ //reference
        return this.#vectorlist[i];
    }

    proceed(fps){
        for(var i = 0; i < this.#vectorlist.length; i++){
            this.#vectorlist[i].angle += this.#getangle(this.#vectorlist[i].rpm, fps);
            if(this.#vectorlist[i].angle < 0) this.#vectorlist[i].angle + 2 * Math.PI;
            if(this.#vectorlist[i].angle > 2 * Math.PI) this.#vectorlist[i].angle - 2 * Math.PI;
        }
    }

}