
// --------------------Subject and links--------------------

const Subjects = {
    Network_Design_mgmt : {
        teacher : "KP Dubey",
        link : "https://meet.google.com/lookup/c3xulrx67x?authuser=2&hs=179"
    },
    DBMS_sec_priv : {
        teacher: "Juhi Singh",
        link: "https://meet.google.com/lookup/hfq4g6qfbo?authuser=2&hs=179"
    },
    Sustainable_Energy : {
        teacher: "Rohit Sharma",
        link: "https://meet.google.com/lookup/hq2gux465t?authuser=2&hs=179"
    },
    Minor_Project_intern : {
        teacher: "Jaya Sharma",
        link: "https://meet.google.com/lookup/hji6gmlexe?authuser=2&hs=179"
    }
    
};
//---------------------------Subjects ended;-------------------------------

// days 0, 1, 2, 3, 4, 5, 6================================================================

const classDays = [
    //sunday
    [

    ],
    //Monday
    [
        {
            time:9,
            link:Subjects.Sustainable_Energy.link
        },
        {
            time:10,
            link:Subjects.Network_Design_mgmt.link
        },
        {
            time:11,
            link:Subjects.DBMS_sec_priv.link
        },
        {
            time:14,
            link:Subjects.Minor_Project_intern.link
        },
        {
            time:13,
            link:Subjects.Minor_Project_intern.link
        }

    ],
    //Tuesday
    [
        {
            time:10,
            link:Subjects.DBMS_sec_priv.link
        },
        {
            time:11,
            link:Subjects.Network_Design_mgmt.link
        },
        {
            time:13,
            link:Subjects.Minor_Project_intern.link
        },
        {
            time:14,
            link:Subjects.Minor_Project_intern.link
        }
    ],
    //Wednesday
    [
        {
            time:9,
            link:Subjects.Sustainable_Energy.link
        },
        {
            time:10,
            link:Subjects.Network_Design_mgmt.link
        },
        {
            time:11,
            link:Subjects.DBMS_sec_priv.link
        },

    ],
    //Thursday
    [
        {
            time:10,
            link:Subjects.DBMS_sec_priv.link
        },
        {
            time:11,
            link:Subjects.Network_Design_mgmt.link
        },
        {
            time:13,
            link:Subjects.Minor_Project_intern.link
        },
        {
            time:14,
            link:Subjects.Minor_Project_intern.link
        }

    ],
    //Saturday
    [
        {
            time:9,
            link:Subjects.Sustainable_Energy.link
        }

    ]
];



function join_meet(){
    let d = new Date();
    let current_day = d.getDay();
    let current_time = d.getHours();
    console.log("current_day", current_day);
    console.log("current_time", current_time);

    if(current_day <= 0 && current_day > 6) {
        return "noclass";
    }else{
        console.log("Entered the else class");
        for(var i = 0; i < classDays[current_day].length; i++) {
            if(classDays[current_day][i].time == current_time)
            {
                console.log(classDays[current_day][i].link)
                return classDays[current_day][i].link;
            }
        }
    }
    return "noclass";

}

let x = join_meet();






window.addEventListener("load", function(){
    if(x == "noclass") {
        document.write('<div style="display: flex; justify-content:center;"><h1 style="text-align:center; display:flex; justify-content:center; padding:1vw; background-color:rgb(30, 34, 255);color:white;border-radius:60%;">No Class. Enjoy for Now</h1></div>');
    }else{
        this.location = x;
    }
});