// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, dna) => {
  return {
    num,
    dna,

    mutate() {
      let base = returnRandBase(this.dna);
      let mutatedBase = returnRandBase(this.dna);

      do {
        base = returnRandBase(this.dna);
        mutatedBase = returnRandBase(this.dna);
      } while (base === mutatedBase);
      return mutatedBase;
    },

    compareDNA(otherDna) {
      const arr1 = this.dna;
      const arr2 = otherDna;
      let num = 0;

      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
          num++;
        }
      }
      const percent = ((num / 15) * 100).toFixed(0);
      console.log(`Specimen #1 and specimen #2 have ${percent} DNA in common`);
    },

    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          count++;
        }
      }
      const survivalCount = ((count / 15) * 100).toFixed(0);
      if (survivalCount >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
};

const survivedInst = [];
let survivedNum = 0;

while (survivedInst.length < 30) {
  let organism = pAequorFactory(survivedNum, mockUpStrand());
  if (organism.willLikelySurvive()) {
    survivedInst.push(organism);
  }
  survivedNum++;
}

console.log(survivedInst);
