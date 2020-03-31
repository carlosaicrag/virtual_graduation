class Ceremony {
    constructor(ctx, graduates, currentStudent = 0) {
        this.ctx = ctx
        this.graduates = graduates
        this.currentStudent = currentStudent
        this.megamanSpriteSheet = new Image()
        this.stage = new Image();
        this.audienceChairs = new Image()

        this.megamanSpriteSheet.src = "./megaman_sprite_sheet.png"
        this.stage.src = './pixel_art_stage.png';
        this.audienceChairs.src = "./theatre_chairs.png"

    }

    constructStage() {
        let waitingSprite = [100, 100];
        let spriteSize = [50, 50]

        let interval = setInterval(() => {
            this.ctx.drawImage(this.stage, 20, 50, 850, 300);
            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 70)
            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 130)
            this.ctx.drawImage(this.megamanSpriteSheet,
                waitingSprite[0], waitingSprite[1],
                spriteSize[0], spriteSize[1],
                80, 250,
                spriteSize[0], spriteSize[1])
                clearInterval(interval)
        },100)
    }

    nextStudentMoves(button) {
        button.disabled = true
        this.graduates[this.currentStudent].moveAcrossScreen(this, button)
        this.currentStudent += 1
    }


}

export default Ceremony