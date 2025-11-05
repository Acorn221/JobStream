export const dateXAgo = (date: string) => {
  const dateObj = new Date(date);
  const delta = Math.round((+new Date() - dateObj.getTime()) / 1000);

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;

  let fuzzy;

  if (delta < 30) {
    fuzzy = 'just now.';
  } else if (delta < minute) {
    fuzzy = `${delta} seconds ago.`;
  } else if (delta < 2 * minute) {
    fuzzy = 'a minute ago.';
  } else if (delta < hour) {
    fuzzy = `${Math.floor(delta / minute)} minutes ago.`;
  } else if (Math.floor(delta / hour) === 1) {
    fuzzy = '1 hour ago.';
  } else if (delta < day) {
    fuzzy = `${Math.floor(delta / hour)} hours ago.`;
  } else if (delta < day * 2) {
    fuzzy = 'yesterday';
  } else if (delta < week) {
    fuzzy = `${Math.floor(delta / day)} days ago.`;
  } else if (delta < month) {
    fuzzy = `${Math.floor(delta / week)} weeks ago.`;
  } else {
    fuzzy = `${Math.floor(delta / month)} months ago.`;
  }

  return fuzzy;
};
