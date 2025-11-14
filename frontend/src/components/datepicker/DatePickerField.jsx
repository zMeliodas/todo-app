import { useRef, useState, useEffect } from 'react';
import "cally";

function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const calendarRef = useRef(null);
  const timeRef = useRef(null);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const calendar = calendarRef.current;
    
    if (calendar) {
      const handleChange = (e) => {
        setSelectedDate(e.target.value);
      };
      
      calendar.addEventListener('change', handleChange);
      
      return () => {
        calendar.removeEventListener('change', handleChange);
      };
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popover = popoverRef.current;
      const button = buttonRef.current;
      
      if (popover && button) {
        const isPopoverOpen = popover.matches(':popover-open');
        if (isPopoverOpen && !popover.contains(event.target) && !button.contains(event.target)) {
          popover.hidePopover();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleDone = () => {
    if (popoverRef.current) {
      popoverRef.current.hidePopover();
    }
  };

  const formatDateTime = () => {
    if (!selectedDate) return 'Pick a date & time';
    
    const dateObj = new Date(selectedDate);
    const dateStr = dateObj.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
    
    return selectedTime ? `${dateStr} at ${selectedTime}` : dateStr;
  };

  return (
    <>
      <button 
        ref={buttonRef}
        popovertarget="cally-popover1" 
        className="input input-bordered focus:outline-none! ring-0!" 
        id="cally1"
        style={{ anchorName: '--cally1' }}
      >
        {formatDateTime()}
      </button>
      <div 
        popover="auto"
        ref={popoverRef}
        id="cally-popover1" 
        className="dropdown bg-base-100 rounded-box shadow-lg p-4 pt-0 border border-base-300"
        style={{ 
          positionAnchor: '--cally1',
          overflow: 'hidden'
        }}
      >
        <calendar-date 
          ref={calendarRef}
          className="cally mb-2"
        >
          <svg aria-label="Previous" className="fill-current size-4" slot="previous" viewBox="0 0 24 24">
            <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
          </svg>
          <svg aria-label="Next" className="fill-current size-4" slot="next" viewBox="0 0 24 24">
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
          </svg>
          <calendar-month></calendar-month>
        </calendar-date>
        
        <div className="flex gap-2 items-center">
          <label className="text-sm font-medium text-base-content">Time:</label>
          <input 
            ref={timeRef}
            type="time" 
            value={selectedTime}
            onChange={handleTimeChange}
            className="input input-bordered input-sm flex-1 bg-base-100 text-base-content focus:outline-0! ring-0!"
          />
          <button 
            onClick={handleDone}
            className="btn btn-primary btn-sm"
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
}

export default DateTimePicker;