function registerEvent(user, event) {
  if (!user || !event) {
    return "Invalid input";
  }
  return `${user} successfully registered for ${event}`;
}
module.exports = registerEvent;
