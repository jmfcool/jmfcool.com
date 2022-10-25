var date = date || {};

date.year = () => {

    const d = new Date(),
          f = d.getFullYear(),
          y = document.getElementsByClassName("year");

    for(let i=0; i < y.length; i++)
    {
	    return y[i].innerHTML = f;
    }

};

date.current = () => {

    let date, months, subfix, setDate, setMonth, setYear;

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    date = new Date();

    setDate = date.getDate();
    setMonth = months[date.getMonth()];
    setYear = date.getFullYear();

    if((setDate.toString() === '1') || (setDate.toString() === '21') || (setDate.toString() === '31')) 
    { 
        subfix = 'st'; 
    }
    else if((setDate.toString() === '2') || (setDate.toString() === '22')) 
    { 
        subfix = 'nd'; 
    }
    else if((setDate.toString() === '3') || (setDate.toString() === '23')) 
    { 
        subfix = 'rd'; 
    }
    else 
    { 
        subfix = 'th'; 
    }

    return `${setDate}${subfix} of ${setMonth} ${setYear}`;

};

export { date }