export function calculateDuration(startTime, endTime) {
    const to24HourFormat = (timeString) => {
      const [time, modifier] = timeString.split(' ');
      let [hours, minutes] = time.split(':').map(Number);
  
      if (modifier === 'PM' && hours !== 12) hours += 12;
      if (modifier === 'AM' && hours === 12) hours = 0;
  
      return new Date().setHours(hours, minutes, 0, 0);
    };
  
    return (to24HourFormat(endTime) - to24HourFormat(startTime)) / 60000;
  }
  