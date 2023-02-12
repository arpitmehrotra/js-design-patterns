function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`),
  };
}

function flyer({ name }) {
  return {
    fly: () => console.log(`${name} flew`),
  };
}

function attackerAndWalker({ name }) {
  return {
    attack: () => console.log(`${name} attacked`),
    walk: () => console.log(`${name} walked`),
  };
}

function swimmingMonsterCreator(name) {
  const monster = { name };
  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...swimmer(monster),
  };
}

function flyingSwimmingMonsterCreator(name) {
  const monster = { name };
  return {
    ...monster,
    ...swimmer(monster),
    ...attackerAndWalker(monster),
    ...flyer(monster),
  };
}

const obj = swimmer({ name: "Fish" });
obj.swim();

const swimmingObj = swimmingMonsterCreator("Swim Monster");
swimmingObj.swim();
swimmingObj.attack();
swimmingObj.walk();

const flyingswimmingObj = flyingSwimmingMonsterCreator("Flyer Swimmer Monster");
flyingswimmingObj.swim();
flyingswimmingObj.fly();
flyingswimmingObj.attack();
flyingswimmingObj.walk();
