function calculateKnockoutResult() {
    let creature = document.getElementById('creatureInput').value.toLowerCase();
    let level = parseFloat(document.getElementById('levelInput').value);
    let weapon = document.getElementById('weaponInput').value.toLowerCase();
    let quality = parseFloat(document.getElementById('qualityInput').value);
    

    if (isNaN(level) || isNaN(quality)||level<1||quality<100) {
        document.getElementById('output').innerText = "Please enter valid numbers in needed fields.";
        return;
    }
    var toporPerHit=0;
    var baseTopor=0;
    var toporPerLevel=0;
    switch(creature) {
        case "rex":
          toporPerLevel=93;
          baseTopor=1550;
          break;
        case "pteranodon":
            toporPerLevel=7;
            baseTopor=120;
          break;
        case "triceratops":
          toporPerLevel=15;
          baseTopor=250;
            break;
        case "spinosaurus":
          toporPerLevel=51;
          baseTopor=850;
            break;
        default:
        var baseTopor=0;
        var toporPerLevel=0;  
         
      }
      switch(weapon) {
        case "bow":
          toporPerHit=90;
          break;
        case "crossbow":
            toporPerHit=157;
          break;
        case "slingshot":
            toporPerHit=19;
            break;
        case "rifle":
            toporPerHit=221;
            break;
        default:
            toporPerHit=0;
         }


    const result = parseInt((baseTopor+(toporPerLevel*level))/(toporPerHit*(quality/100)));

    document.getElementById('output').innerText = `You need ${result} of ${weapon} ammo`;
}