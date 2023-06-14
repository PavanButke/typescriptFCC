interface deployAct{
    commit: string
    deployedToEnv: string
    timeTakenInMins: number
}

class Production implements deployAct{
    constructor(
        public commit :string,
        public deployedToEnv: string,
        public timeTakenInMins: number,
        public upTimeInHrs: number
    ){}
}
Production.toString();

export{}