import img3 from "../../assets/department_images/ECE/3.png";
import img4 from "../../assets/department_images/ECE/4.png";
import img5 from "../../assets/department_images/ECE/5.png";
import img6 from "../../assets/department_images/ECE/6.png";
import img10 from "../../assets/department_images/ECE/10.png";
import img12 from "../../assets/department_images/ECE/12.png";
import img13 from "../../assets/department_images/ECE/13.png";
import img14 from "../../assets/department_images/ECE/14.png";

const EceEventData = [
    {
        event_id: 1001,
        name: "INNOVATEX",
        description: "A project exhibition showcasing a wide range of innovative projects created by students.",
        event_type: "Group(2-4)",
        fee: "0",
        student1: "Ann Maria Chacko",
        s1_phone: 6282995361,
        student2: "Ajaynath P",
        s2_phone: 7902905934,
        staff: "Vinod J Thomas",
        prize: true,
        dept: "ece",
        reg: true,
        group: true,
        venue: "Analog Electronics Lab, ECE Block, 2nd floor",
        time: "09:30 - 15:30",
        event_image: img10,
    },
    {
        event_id: 1002,
        name: "Code Storm",
        description: "An intense hackathon where participants develop solutions to real-world challenges within a limited time.",
        event_type: "Individual",
        fee: "0",
        student1: "Remin Reji",
        s1_phone: 7902524369,
        student2: "Vandana M K",
        s2_phone: 9496587425,
        staff: "Bindu Sebastian",
        prize: true,
        dept: "ece",
        reg: true,
        group: false,
        venue: "Communication Lab, ECE Block, 3rd floor",
        time: "11:45 - 12:45",
        event_image: img12,
    },
    {
        event_id: 1003,
        name: "Hidden Heist",
        description: "An interactive treasure hunt where participants follow a series of clues to find a hidden treasure.",
        event_type: "Group(4)",
        fee: "40",
        student1: "Aleesha C J",
        s1_phone: 9207275071,
        student2: "Manjima T",
        s2_phone: 8848040660,
        staff: "Dr.Anto Sahayadhas",
        prize: true,
        dept: "ece",
        reg: true,
        group: true,
        venue: "Room F7A, ECE Block, 1st floor",
        time: "11:00 - 13:00",
        event_image: img13,
    },
    {
        event_id: 1004,
        name: "Tech Circuit Arena",
        description: "Participants create functional circuits using electronic components.",
        event_type: "Individual",
        fee: "0",
        student1: "Amrutha A Nair",
        s1_phone: 6282750162,
        student2: "Vismaya C",
        s2_phone: 7907379469,
        staff: "Joby",
        prize: true,
        dept: "ece",
        reg: true,
        group: false,
        venue: "Logic Circuit Lab, ECE Block, 2nd floor",
        time: "09:30 - 10:30",
        event_image: img14,
    },
    {
        event_id: 1005,
        name: "Junkyard Wars",
        description: "Teams build functional machines using scrap materials.",
        event_type: "Individual",
        fee: "0",
        student1: "Vaishnavi E",
        s1_phone: 9778502344,
        student2: "Soorya M S",
        s2_phone: 8590559932,
        staff: "Josy",
        prize: true,
        dept: "ece",
        reg: true,
        group: false,
        venue: "Logic Circuit Lab, ECE Block, 2nd floor",
        time: "11:15 - 13:15",
        event_image: img10,
    },
    {
        event_id: 1006,
        name: "Crossword Clash",
        description: "A cerebral adventure with challenging crossword games.",
        event_type: "Individual",
        fee: "0",
        student1: "Alanta George",
        s1_phone: 6282443543,
        student2: "Rana Noufal",
        s2_phone: 9497280778,
        staff: "Sudharshana Vijayan",
        prize: true,
        dept: "ece",
        reg: true,
        group: false,
        venue: "Room T10, ECE Block, 3rd floor",
        time: "11:30 - 12:30",
        event_image: img12,
    },
    {
        event_id: 1007,
        name: "CodeBlind",
        description: "Participants write code without seeing the screen.",
        event_type: "Individual",
        fee: "0",
        student1: "Aeibel Tomy",
        s1_phone: 7907057567,
        student2: "Abhinav Prakash",
        s2_phone: 9961814061,
        staff: "Anusha Chacko",
        prize: true,
        dept: "ece",
        reg: true,
        group: false,
        venue: "Communication Lab, ECE Block, 3rd floor",
        time: "10:30 - 11:30",
        event_image: img3,
    },
    {
        event_id: 1008,
        name: "TECH TRIVIA",
        description: "Test Your Tech IQ with this engaging quiz.",
        event_type: "Individual",
        fee: "0",
        student1: "Dishna Shareej",
        s1_phone: 8848537445,
        student2: "Ben Augustine",
        s2_phone: 8547968949,
        staff: "Shimna P K",
        prize: true,
        dept: "ece",
        reg: true,
        group: false,
        venue: "Room CSBS S3, ECE Block, 1st floor",
        time: "10:00 - 11:00",
        event_image: img4,
    },
    {
        event_id: 1009,
        name: "The Glitch Hunt",
        description: "Analyze and debug faulty circuits to identify and fix issues.",
        event_type: "Group(2)",
        fee: "0",
        student1: "Sebastian Joseph",
        s1_phone: 9497246881,
        student2: "Adarsh K.B",
        s2_phone: 7909123815,
        staff: "Sini",
        prize: true,
        dept: "ece",
        reg: true,
        group: true,
        venue: "Analog Integration Lab, ECE Block, 3rd floor",
        time: "10:30 - 11:30",
        event_image: img5,
    },
    {
        event_id: 1010,
        name: "Weld Wizards",
        description: "Participants connect components by soldering on a circuit board.",
        event_type: "Individual",
        fee: "0",
        student1: "Jeswin Manoj",
        s1_phone: 9526181930,
        student2: "Kshma Manu",
        s2_phone: 6282396896,
        staff: "Jyothis",
        prize: true,
        dept: "ece",
        reg: true,
        group: false,
        venue: "Analog Integration Lab, ECE Block, 3rd floor",
        time: "11:45 - 12:45",
        event_image: img6,
    },
    {
        event_id: 1011,
        name: "Electronics Room",
        description: "Showcasing technological advancements in electronics.",
        event_type: "No",
        fee: "0",
        student1: "Parthiv",
        s1_phone: 7736978461,
        student2: "Nandhana",
        s2_phone: 8360491494,
        staff: "Binil Kumar",
        prize: false,
        dept: "ece",
        reg: false,
        group: false,
        venue: "Room ECE S3, ECE Block, 1st floor",
        time: "09:30 - 15:30",
        event_image: img3,
    },
    {
        event_id: 1012,
        name: "LUMI TUNE",
        description: "Display the evolution of communication technologies.",
        event_type: "No",
        fee: "0",
        student1: "Anagha",
        s1_phone: 8606916585,
        student2: "Zameel",
        s2_phone: 7012352884,
        staff: "Ann Mathew",
        prize: false,
        dept: "ece",
        reg: false,
        group: false,
        venue: "Room ECE S5, ECE Block, 2nd floor",
        time: "09:30 - 15:30",
        event_image: img12,
    },
    {
        event_id: 1013,
        name: "Room of Mystery",
        description: "Showcase of technical innovations.",
        event_type: "No",
        fee: "0",
        student1: "Jishnu Prakash",
        s1_phone: 9961112852,
        student2: "Angel Mary",
        s2_phone: 8075814046,
        staff: "Manoj K C",
        prize: false,
        dept: "ece",
        reg: false,
        group: false,
        venue: "Room ECE S7, ECE Block, 2nd floor",
        time: "09:30 - 15:30",
        event_image: img13,
    },
    {
        event_id: 1014,
        name: "Frames of Future",
        description: "Unleash your creativity in our photography competition.",
        event_type: "Individual",
        fee: "0",
        student1: "Amith Babu",
        s1_phone: 8129354230,
        student2: "Aadil",
        s2_phone: 9645200997,
        staff: "Jerrin Yomas K",
        prize: true,
        dept: "ece",
        reg: true,
        group: false,
        venue: "Online, ECE Block",
        time: "10:00 - 01:30",
        event_image: img10,
    }
];

export default EceEventData;
