const formatDateAndTime = (date?: string) => {
  if (!date) {
    return date;
  }

  return new Date(date).toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
}

export {
  formatDateAndTime
}