class Candidate {

    static totalRegionVotes = 250;
    static remainingVotes = 250;

    constructor(name) {
        this.name = name;
        this.votes = 0;
    }

    toString() {
        return `Candidate:
        
Name: ${this.name}
Votes: ${this.votes}
Total Region Votes: ${Candidate.totalRegionVotes}
Votes Casted: ${Candidate.totalRegionVotes - Candidate.remainingVotes}
Votes Not Casted: ${Candidate.remainingVotes}

        `;
    }

    addVote() {
        this.votes++;
        Candidate.remainingVotes--;
    }
}

let candidateA = new Candidate('A');
let candidateB = new Candidate('B');
let candidateC = new Candidate('C');

candidateA.addVote();
candidateA.addVote();

candidateB.addVote();
candidateB.addVote();
candidateB.addVote();

candidateC.addVote();

console.log(candidateA.toString());
console.log(candidateB.toString());
console.log(candidateC.toString());