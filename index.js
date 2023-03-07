setInterval(() => {
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    ahr=(30*htime)+(mtime/2);
    amin=6*mtime;
    asc=6*stime;
    minute.style.transform=`rotate(${amin}deg)`;
    second.style.transform=`rotate(${asc}deg)`;
    hour.style.transform=`rotate(${ahr}deg)`;

}, 1000);