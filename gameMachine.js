class GameMachine {
  constructor(number) {
    this.number = number;
  }
  get getMoney() {}
  withdrawMoney(number) {}
  putMoney(number) {}
  play(number) {}
}
//Money should be added to the general amount of the machine
//Method that generates 3 digit number "123"
//if there appear 2 out of 3 same numbers - multiply user`s amount by 2 and decrease the money from machine's account
// 3 out of 3 - multiply user`s win by 3