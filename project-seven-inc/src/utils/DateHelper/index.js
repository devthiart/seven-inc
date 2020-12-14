export default class DateHelper {

  constructor() {
    throw new Error('Esta classe não pode ser instanciada.');
  }

  static dateToText(dateInString) {
    const date = new Date(dateInString);

    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }

  static textToDate(text) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) {
      throw new Error('O formato correto é yyyy-mm-dd');
    }

    return new Date(...text.split('-').map((item, index) => item - index % 2));
  }

  static dateToInput(dateInString) {
    const date = new Date(dateInString);
    const mount = this._calcMountToForm(date.getMonth());
    const day = this._calcDayToForm(date.getDate());

    return `${date.getFullYear()}-${mount}-${day}`;
  }

  static _calcMountToForm(mount) {
    let mountToString = mount + 1;

    if(mountToString < 10) {
      return ('0' + mountToString);
    }

    return mountToString.toString();
  }

  static _calcDayToForm(day) {
    let dayToString = day;

    if(dayToString < 10) {
      return ('0' + dayToString);
    }

    return dayToString.toString();
  }
}