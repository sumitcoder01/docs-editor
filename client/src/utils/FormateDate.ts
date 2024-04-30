export const formattedDate = (inputDate:Date) => {
    const date = new Date(inputDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }