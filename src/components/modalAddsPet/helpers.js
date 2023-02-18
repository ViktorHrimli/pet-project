import { format, parse, intlFormatDistance } from 'date-fns';

export const dateFn = value => {
  if (value.length < 10) return 'false';

  const invalidDate = parse(value.toString(), 'dd.MM.yyyy', new Date());

  const formattedDate = format(invalidDate, 'dd.MM.yyyy');

  const formattedDateCheck = format(invalidDate, 'yyyy.MM.dd').replace(
    '.',
    ','
  );

  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const maxDate = new Date(`${year}, ${month}, ${day}`);
  const datePet = new Date(formattedDateCheck);

  const ageRange = parseFloat(intlFormatDistance(maxDate, datePet).slice(6, 9));

  if (ageRange > 55 || isNaN(ageRange)) return 'false';

  return formattedDate;
};

export const regexDate = /(^0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[0-2]).(\d{4}$)/;
export const textMatch = /^[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/;
