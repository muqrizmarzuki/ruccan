const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('default', { month: 'short' }); // e.g., "May"
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
};

export default formatDate;