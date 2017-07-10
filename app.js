class Grandparents
{
  constructor(hairColor, eyeColor, xJump)
  {
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.xJump = xJump;
    function vertical()
    {
      return " can jump " + this.xJump + " inches.";
    }
  }
}

class Parents extends Grandparents
{
    constructor(hairColor, eyeColor, xJump)
    {
      super(hairColor, eyeColor, xJump);
    }

}

class Children extends Parents
{
    constructor(hairColor, eyeColor, xJump)
    {
      super(hairColor, eyeColor, xJump);
    }

}

let familyTree = [];

let Betty = new Grandparents('Blond','Brown', 12)
let Don = new Parents('Brown', 'Brown', 21)
let Mikey = new Children('Black', 'Brown', 37)
familyTree.push(Betty);
familyTree.push(Don);
familyTree.push(Mikey);



for(let i = 0; i < familyTree.length; i++)
{
  console.log(familyTree[i])
}
