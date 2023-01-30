import { v4 as uuidv4 } from "uuid";
const data = [{
    id: 1,
    icon: "⭕️",
    order: 0,
    status: "open",
    title: "Human Interest Form",
    content: "Fill out human interest distribution form"
}, {
    id: 2,
    icon: "⭕️",
    order: 1,
    status: "open",
    title: "Purchase present",
    content: "Get an anniversary gift"
}, {
    id: 3,
    icon: "⭕️",
    order: 2,
    status: "open",
    title: "Invest in investments",
    content: "Call the bank to talk about investments"
}, {
    id: 4,
    icon: "⭕️",
    order: 3,
    status: "open",
    title: "Daily reading",
    content: "Finish reading Intro to UI/UX"
}];

const statuses = [{
    status: "open",
    icon: "⭕️",
    color: "#EB5A46"
}, {
    status: "in progress",
    icon: "🔆️",
    color: "#00C2E0"
}, {
    status: "in review",
    icon: "📝",
    color: "#C377E0"
}, {
    status: "done",
    icon: "✅",
    color: "#3981DE"
}];



export const dataForReactBeautifulDnD = [
  {
    id: "1",
    Task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.",
    order: 1,
    // Assigned_To: 'Beltran',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: "25-May-2020"
  },
  {
    id: "3",
    Task: "Handle Door Specs",
    order: 2,
    // Assigned_To: 'Roman',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: "27-May-2020"
  },
  {
    id: "4",
    Task: "morbi",
    order: 3,

    // Assigned_To: 'Gawen',
    // Assignee: 'Kai',
    // Status: 'Done',
    // Priority: 'High',
    Due_Date: "23-Aug-2020"
  },
  {
    id: "5",
    Task: "proin",
    order: 4,
    // Assigned_To: 'Bondon',
    // Assignee: 'Antoinette',
    // Status: 'In Progress',
    // Priority: 'Medium',
    Due_Date: "05-Jan-2021"
  },
  {
    id: "2",
    Task: "Fix Styling",
    order: 5,

    // Assigned_To: 'Dave',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: "26-May-2020"
  }
];

export const columnsFromBackend = {
  [uuidv4()]: {
    title: "To-do",
    items: dataForReactBeautifulDnD
  },
  [uuidv4()]: {
    title: "In Progress",
    items: []
  },
  [uuidv4()]: {
    title: "Done",
    items: []
  }
};


export { data, statuses };