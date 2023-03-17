export default class Marketing {
  update ({ id, userName }) {
    console.log(
      `[${id}]: [marketing] will send a welcome email to [${userName}] `
    )
  }
}
