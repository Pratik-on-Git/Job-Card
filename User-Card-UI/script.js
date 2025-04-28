// 1. Create the heading element
const heading = document.createElement('h1');
heading.textContent = 'Job Portal';

// 2. Style it minimally to match your design
heading.style.cssText = `
    width: 100%;
    text-align: center;
    color: white;
    font-size: 3rem;
    margin-bottom: 20px;
    position: absolute;
    top: 40px;
    left: 0;
    font-weight: 400;
    text-transform: uppercase;
`;

// 3. Insert it before your content
document.body.insertBefore(heading, document.body.firstChild);


// Companies As Objects
var arr = [
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWjxuZx__a25hgj1JCqKkQF-6_UiqrUG7_g&s",
      "save": false,
      "company": "Microsoft",
      "days": "2 Days ago",
      "jobtitle": "Lead Frontend Engineer",
      "skills1": "Full Time",
      "skills2": "Senior Level",
      "hour": "$150/hr.",
      "city": "Seattle, USA",
      "apply": false
    },
    {
      "image": "https://yt3.googleusercontent.com/mhme5V2s8MFLJ7lTY1i5K4yZy6mIg8dbvPN-TYWGmDcbA5beh9qbxRWAeZ9lJNPddOaJxhf0=s900-c-k-c0x00ffffff-no-rj",
      "save": false,
      "company": "Google",
      "days": "1 Week ago",
      "jobtitle": "Senior DevOps Expert",
      "skills1": "Contract",
      "skills2": "Mid Level",
      "hour": "$135/hr.",
      "city": "Mountain View, USA",
      "apply": false
    },
    {
      "image": "https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yD/r/5D8s-GsHJlJ.png",
      "save": false,
      "company": "Facebook",
      "days": "3 Days ago",
      "jobtitle": "Mobile App Developer",
      "skills1": "Full Time",
      "skills2": "Junior Level",
      "hour": "$95/hr.",
      "city": "Menlo Park, USA",
      "apply": false
    },
    {
      "image": "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      "save": false,
      "company": "Apple",
      "days": "Just Now",
      "jobtitle": "iOS Swift Developer",
      "skills1": "Part Time",
      "skills2": "Senior Level",
      "hour": "$160/hr.",
      "city": "Cupertino, USA",
      "apply": false
    },
    {
      "image": "https://yt3.googleusercontent.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s900-c-k-c0x00ffffff-no-rj",
      "save": false,
      "company": "Netflix",
      "days": "4 Days ago",
      "jobtitle": "Video Codec Engineer",
      "skills1": "Full Time",
      "skills2": "Expert Level",
      "hour": "$180/hr.",
      "city": "Los Gatos, USA",
      "apply": false
    },
    {
      "image": "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark%26Wordmark-Black-Logo.wine.svg",
      "save": false,
      "company": "Tesla",
      "days": "1 Day ago",
      "jobtitle": "Autopilot Engineer",
      "skills1": "Contract",
      "skills2": "Senior Level",
      "hour": "$170/hr.",
      "city": "Palo Alto, USA",
      "apply": false
    },
    {
      "image": "https://cdn-icons-png.freepik.com/256/2496/2496110.png?semt=ais_hybrid",
      "save": false,
      "company": "Twitter",
      "days": "6 Days ago",
      "jobtitle": "API Backend Engineer",
      "skills1": "Full Time",
      "skills2": "Mid Level",
      "hour": "$125/hr.",
      "city": "San Francisco, USA",
      "apply": false
    },
    {
      "image": "https://images.icon-icons.com/2407/PNG/512/uber_icon_146079.png",
      "save": false,
      "company": "Uber",
      "days": "2 Weeks ago",
      "jobtitle": "Maps Data Scientist",
      "skills1": "Part Time",
      "skills2": "Senior Level",
      "hour": "$155/hr.",
      "city": "New York, USA",
      "apply": false
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlH1vxA0PRjj3lRd9DoFlteohg-q3vfTpzGG8CIk-75u3Evs7Fm2joVZTSUBm4JEBV0Xg&usqp=CAU",
        "save": false,
        "company": "Samsung",
        "days": "4 Days ago",
        "jobtitle": "Display Engineer",
        "skills1": "Contract",
        "skills2": "Senior Level",
        "hour": "$190/hr.",
        "city": "Seoul, South Korea",
        "apply": false
    },,
    {
        "image": "https://blog.adobe.com/en/publish/2020/05/28/media_1cc0fcc19cf0e64decbceb3a606707a3ad23f51dd.png?width=1200&format=pjpg&optimize=medium",
        "save": false,
        "company": "Adobe",
        "days": "5 Days ago",
        "jobtitle": "Creative Cloud Developer",
        "skills1": "Contract",
        "skills2": "Mid Level",
        "hour": "$145/hr.",
        "city": "San Jose, USA",
        "apply": false
    },
    {
        "image": "https://blog.logomaster.ai/hs-fs/hubfs/intel-logo-3.jpg?width=672&height=448&name=intel-logo-3.jpg",
        "save": false,
        "company": "Intel",
        "days": "Just Now",
        "jobtitle": "Chipset Architect",
        "skills1": "Full Time",
        "skills2": "Principal Level",
        "hour": "$210/hr.",
        "city": "Santa Clara, USA",
        "apply": false
    },
    {
        "image": "https://img.freepik.com/premium-photo/round-linkedin-logo-isolated-white-background_469489-1046.jpg?semt=ais_hybrid&w=740",
        "save": false,
        "company": "LinkedIn",
        "days": "2 Days ago",
        "jobtitle": "Data Privacy Analyst",
        "skills1": "Part Time",
        "skills2": "Junior Level",
        "hour": "$110/hr.",
        "city": "Sunnyvale, USA",
        "apply": false
    }
  ]
// Your array data

sum = ``;

// Making Elements through JS
arr.forEach(function(elem, index) {
    sum += `
        <div id="box">
            <div id="header">
                <img src="${elem.image}">
                <button id="save-${index}" class="save-button">
                    ${elem.save ? 'Saved' : 'Save'}</button>
            </div>
            <div id="mid">
                <h3 id="company-name">${elem.company}</h3>
                <h6 id="days-ago">${elem.days}</h6>
            </div>
            <h1 id="job-title">${elem.jobtitle}</h1>
            <div id="skills">
                <h4 id="skill-1">${elem.skills1}</h4>
                <h4 id="skill-2">${elem.skills2}</h4>
            </div>
            <div id="rest">
                <div id="dets">
                    <h4 id="hour">${elem.hour}</h4>
                    <h5 id="city">${elem.city}</h5>
                </div>
                <button id="apply-${index}" class="apply-button">
                    ${elem.apply ? 'Applied' : 'Apply Now'}
                </button>
            </div>
        </div>`;
});

var body = document.querySelector('body');
body.innerHTML += sum;

// Add CSS for apply to Apply Now buttons
const style = document.createElement('style');
style.textContent = `
    .apply-button {
        border: none;
        display: flex;
        padding: 0rem 0.9rem;
        border: 1px solid #000000;
        color: #ffffff;
        background-color: #000000;
        font-size: 0.7rem;
        line-height: 1rem;
        text-align: center;
        cursor: pointer;
        vertical-align: middle;
        align-items: center;
        border-radius: 0.28rem;
        user-select: none;
        gap: 0.75rem;
        transition: all 0.2s ease;
    }
    
    .apply-button.applied {
        border-color: #00A300 !important;
        color: #ffffff !important;
        background-color: #00A300 !important;
    }
`;
document.head.appendChild(style);
// Add click event to all Apply Now buttons
document.querySelectorAll('.apply-button').forEach((button, index) => {
    
    button.addEventListener('click', function() {
        // Toggle between states
        if (this.classList.contains('applied')) {
            this.textContent = 'Apply Now';
            this.classList.remove('applied');
        } else {
            this.textContent = 'Applied';
            this.classList.add('applied');
        }
    });
});

// Add CSS for apply to Save buttons
const save = document.createElement('style');
save.textContent = `
    .save-button {
        border: none;
  display: flex;
  padding: 0.3rem 0.8rem;
  border: 1px solid hsla(0, 0%, 0%, 0.60);
  background-color:rgba(0, 0, 0, 0);
  color: hsla(0, 0%, 0%, 0.60);
  font-size: 0.65rem;
  line-height: 1rem;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  align-items: center;
  border-radius: 0.28rem;
  user-select: none;
  gap: 0.75rem;
  transition: all 0.2s ease;
    }
    
    .save-button.applied {
        border-color:#000000;
    color: #ffffff;
    background-color: #000000;
    }
`;
document.head.appendChild(save);

// Add click event to all Save buttons
document.querySelectorAll('.save-button').forEach((button, index) => {
    
    button.addEventListener('click', function() {
        // Toggle between states
        if (this.classList.contains('applied')) {
            this.textContent = 'Save';
            this.classList.remove('applied');
        } else {
            this.textContent = 'Saved';
            this.classList.add('applied');
        }
    });
});