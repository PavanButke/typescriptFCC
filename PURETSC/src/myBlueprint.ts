abstract class dreamProject{
   constructor(
    timeReq: number,
    moneyReq: string,
    effortsReq: number
   ){}
   
   abstract getWorkYourAssOff():void
}

let everyDayEffort=1;
class Momentum extends dreamProject{
    getWorkYourAssOff(): void {
        try{
            everyDayEffort=10*everyDayEffort-10;
        }
        catch(Exception )
        {
        throw new Error("Don't be harsh on yourself.");
        }
    }

}

const today= new Momentum(1,"0",499990);